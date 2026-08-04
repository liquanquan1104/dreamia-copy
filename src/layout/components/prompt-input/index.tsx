import style from './index.module.less'
import PromptInputArea from './prompt-input-area'
import InputToolBar from './input-tool-bar'
import  { PROMPT_MODE_CONFIG } from './config';
import useMode from '@/pages/home/hooks/useMode';
import { useState } from 'react';
import type { ImageSetting } from './types';


export default function PromptInput() {
  const { mode } = useMode();
  const config = PROMPT_MODE_CONFIG[mode];
  const [imageSettings, setImageSettings] = useState<ImageSetting>({
    prompt: '结合参考、输入文字或@参考内容,描述你想如何调整图片。',
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
  console.log('lqq', imageSettings);
  return (
    <div className={style['prompt-input']}>
      <PromptInputArea 
        modeConfig={config} 
        imageSettings={imageSettings}
        // updateImageSettings={updateImageSettings}
        />
      <InputToolBar 
        modeConfig={config} 
        imageSettings={imageSettings} 
        updateImageSettings={updateImageSettings} />
    </div>
  )
}