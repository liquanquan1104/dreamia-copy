import PromptInput from '../prompt-input'
import Heading from '../heading'
import style from './index.module.less'


export default function GeneralPanel() {
    
  return (
    <div className={style['general-panel']}>
        <Heading />
        <PromptInput />  
    </div>
  )
}