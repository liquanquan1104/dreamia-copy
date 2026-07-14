import AgentPreferenceCard from '../agent-preference-card';
import type { AgentPreferenceInfo } from '../agent-preference-card';
import { useState, useCallback } from 'react';
import BaseButton from '@/components/base-button';
import { IconConfigStroked } from '@douyinfe/semi-icons';
import { Popover } from '@douyinfe/semi-ui';
import style from './index.module.less';

export default function AgentAutoTool() {
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
  )
}