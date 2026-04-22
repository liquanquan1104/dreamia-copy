import style from './index.module.less'
import ModeSelect from '../components/mode-select';
import BaseButton from '@/components/base-button';
import { IconArrowUp, IconConfigStroked, IconSearchStroked, IconLightningStroked, IconMicrophoneStroked } from '@douyinfe/semi-icons';
import { Tooltip, Popover } from '@douyinfe/semi-ui';
import { useState, useCallback } from 'react';
import AgentPreferenceCard from './components/agent-preference-card';
import CreativityCard from './components/creativity-card';
import type { AgentPreferenceInfo } from './components/agent-preference-card';


export default function InputToolBar() {
  const [isInspired, setIsInspired] = useState(false);
  const [isCreative, setIsCreative] = useState(false);
  const [agentPreferenceInfo, setAgentPreferenceInfo] = useState<AgentPreferenceInfo>({
    agentMode: 'image',
    auto: true,
    ImageModel: '',
    VideoModel: '',
    imageScale: '',
    videoScale: '',
  });

  const handleTransform = useCallback((info: AgentPreferenceInfo) => {
    setAgentPreferenceInfo(info);
  }, []);

  const preferTooptip = agentPreferenceInfo.auto ? '生成偏好' : (
    <span>
      {agentPreferenceInfo.agentMode === 'image' ? (
        agentPreferenceInfo.ImageModel + '  ·  ' + agentPreferenceInfo.imageScale + '  ·  高清2K'
      ) : (
        agentPreferenceInfo.VideoModel + '  ·  ' + agentPreferenceInfo.videoScale + '  ·  720P'
      )}
    </span>
  )

  return (
    <div className={style['input-tool-bar']}>
      <div className={style['input-tool-configure']}>
        <div className={style['core-configure']}>
            <ModeSelect />
            <Popover
              trigger="click"
              keepDOM={true}
              content={<AgentPreferenceCard handleTransform={handleTransform} />}
            >
              <span className={style['tooltip-wrapper']}>
                <BaseButton
                  text={agentPreferenceInfo.auto ? '自动' : '自定义'}
                  icon={<IconConfigStroked style={{fontSize: 14}}/>}
                />
                <div className={style['custom-tooltip']}>{preferTooptip}</div>
              </span>
            </Popover>
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