import style from './index.module.less'
import { IconArrowUp } from '@douyinfe/semi-icons';
import ModeSelect from '../components/mode-select';


export default function InputToolBar() {
  return (
    <div className={style['input-tool-bar']}>
      <div className={style['input-tool-configure']}>
        <div className={style['core-configure']}>
            <ModeSelect />
            core configure
        </div>
        <div>
            other configure
        </div>
      </div>
      <div className={style['send-button']}>
        <IconArrowUp className={style['send-icon']} />
      </div>
    </div>
  )
}