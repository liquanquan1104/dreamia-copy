 import style from './index.module.less'
 
 export default function PromptInputArea() {
  return (
    <div className={style['prompt-input-area']}>
      <div className={style['prompt-input-resource']}>
        资源上传占位
      </div>
      <div className={style['prompt-input-content']}>
        Tiptap输入框
      </div>
    </div>
  )
 }