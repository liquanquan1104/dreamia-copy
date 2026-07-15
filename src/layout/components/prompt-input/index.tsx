import style from './index.module.less'
import PromptInputArea from './prompt-input-area'
import InputToolBar from './input-tool-bar'
import  { PROMPT_MODE_CONFIG } from './config';
import useMode from '@/pages/home/hooks/useMode';

export default function PromptInput() {
  const { mode } = useMode();
  const config = PROMPT_MODE_CONFIG[mode];
  return (
    <div className={style['prompt-input']}>
      <PromptInputArea modeConfig={config} />
      <InputToolBar modeConfig={config}/>
    </div>
  )
}