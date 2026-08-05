import style from './index.module.less'
import PromptInputArea from './prompt-input-area'
import InputToolBar from './input-tool-bar'
import  { PROMPT_MODE_CONFIG } from './config';
import useMode from '@/pages/home/hooks/useMode';
import { useState, useRef, useLayoutEffect } from 'react';
import type { ImageSetting } from './types';


export default function PromptInput() {
  const { mode } = useMode();
  const config = PROMPT_MODE_CONFIG[mode];
  const [imageSettings, setImageSettings] = useState<ImageSetting>({
    prompt: '',
    model: 'Seedream 5.0 Lite',
    ratio: '9:16',
    resolution: '2K',
    imageNumber: 4,
    size: {
      width: 1440,
      height: 2560,
    },
    augment: false,
    reference: [],
  });
  const updateImageSettings = (partial: Partial<ImageSetting>) => {
    setImageSettings((prev) => ({
      ...prev,
      ...partial,
    }));
  }

  // textarea 的 DOM 引用，用于读取/设置光标位置
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  // 插入后待恢复的光标位置；为 null 时表示普通输入，无需干预光标
  const pendingCursorRef = useRef<number | null>(null);

  // 受控 textarea 更新后，DOM 的 value 才是最新的，此时再把光标放回目标位置。
  // 用 useLayoutEffect 保证在浏览器绘制前同步设置，避免光标闪到末尾。
  useLayoutEffect(() => {
    if (pendingCursorRef.current !== null && textareaRef.current) {
      const pos = pendingCursorRef.current;
      textareaRef.current.focus();
      textareaRef.current.setSelectionRange(pos, pos);
      pendingCursorRef.current = null;
    }
  }, [imageSettings.prompt]);

  // 在光标处插入一对全角引号“”，若有选区则包裹选区；插入后光标停在右引号之前。
  const insertQuotesAtCursor = () => {
    const el = textareaRef.current; // 拿到真实的textarea DOM
    const text = imageSettings.prompt ?? ''; // 当前输入框里的全部文字
    const start = el?.selectionStart ?? text.length;  // 光标/选区的起点
    const end = el?.selectionEnd ?? text.length; // 光标/选区的终点
    const OPEN = '“';
    const CLOSE = '”';
    const next = text.slice(0, start) + OPEN + text.slice(start, end) + CLOSE + text.slice(end);
    // 光标落在被包裹内容之后、右引号之前（无选区时即两引号正中间）
    pendingCursorRef.current = start + OPEN.length + (end - start);
    updateImageSettings({ prompt: next });
  }

  return (
    <div className={style['prompt-input']}>
      <PromptInputArea
        modeConfig={config}
        imageSettings={imageSettings}
        updateImageSettings={updateImageSettings}
        textareaRef={textareaRef}
        />
      <InputToolBar 
        modeConfig={config} 
        imageSettings={imageSettings} 
        updateImageSettings={updateImageSettings}
        insertQuotesAtCursor={insertQuotesAtCursor} />
    </div>
  )
}