import style from './index.module.less'
import PromptInputArea from './prompt-input-area'
import InputToolBar from './input-tool-bar'

export default function PromptInput() {
  return (
    <div className={style['prompt-input']}>
      <PromptInputArea />
      <InputToolBar />
    </div>
  )
}