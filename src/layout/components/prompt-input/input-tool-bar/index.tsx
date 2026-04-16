import style from './index.module.less'
import ModeSelect from '../components/mode-select';
import BaseButton from '@/components/base-button';
import { IconArrowUp, IconConfigStroked, IconSearchStroked, IconLightningStroked, IconMicrophoneStroked } from '@douyinfe/semi-icons';
import { Tooltip } from '@douyinfe/semi-ui';


export default function InputToolBar() {
  return (
    <div className={style['input-tool-bar']}>
      <div className={style['input-tool-configure']}>
        <div className={style['core-configure']}>
            <ModeSelect />
            <BaseButton text="自定义" icon={<IconConfigStroked style={{fontSize: 14}}/>}/>
             <BaseButton text="灵感搜索" icon={<IconSearchStroked style={{fontSize: 15}}/>}/>
             <BaseButton text="创意设计" icon={<IconLightningStroked style={{fontSize: 15}}/>}/>
        </div>
          <Tooltip content="语音识别" style={{ fontSize: 12 }}>
            <IconMicrophoneStroked style={{fontSize: 20, color: '#919ca5'}}  />
          </Tooltip>
       
      </div>
      <div className={style['send-button']}>
        <IconArrowUp className={style['send-icon']} />
      </div>
    </div>
  )
}