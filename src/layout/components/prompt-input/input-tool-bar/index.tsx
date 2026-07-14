import style from './index.module.less'
import ModeSelect from '../components/mode-select';
import BaseButton from '@/components/base-button';
import { IconArrowUp,  IconSearchStroked, IconLightningStroked, IconMicrophoneStroked } from '@douyinfe/semi-icons';
import { Tooltip, Popover } from '@douyinfe/semi-ui';
import { useState } from 'react';
import CreativityCard from './components/creativity-card';



export default function InputToolBar() {
  const [isInspired, setIsInspired] = useState(false);
  const [isCreative, setIsCreative] = useState(false);

  return (
    <div className={style['input-tool-bar']}>
      <div className={style['input-tool-configure']}>
        <div className={style['core-configure']}>
            <ModeSelect />
            
             <BaseButton
              text="灵感搜索"
              icon={<IconSearchStroked style={{fontSize: 15}} />}
              isChecked={isInspired}
              isActive={isInspired}
              onClick={() => setIsInspired(!isInspired)}/>
             <Popover content={<CreativityCard />} position="top">
              <span>
              <BaseButton
              text="创意设计"
              icon={<IconLightningStroked style={{fontSize: 15}}/>}
              isChecked={isCreative}
              isActive={isCreative}
              onClick={() => setIsCreative(!isCreative)}/>
              </span>
             </Popover>
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