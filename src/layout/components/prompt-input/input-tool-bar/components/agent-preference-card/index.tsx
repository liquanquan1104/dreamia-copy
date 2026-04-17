import BaseRadioGroup from '@/components/base-radio-group';
import type { RadioOption } from '@/components/base-radio-group';
import { IconIndenpentCornersStroked } from '@douyinfe/semi-icons';
import { useState } from 'react';
import styles from './index.module.less'
import type { AgentMode } from '@/types/constants';
import { AGENT_MODE_OPTIONS } from '@/types/constants';
import { Switch } from '@douyinfe/semi-ui';

export default function AgentPreferenceCard() {
    const [agentMode, setAgentMode] = useState<AgentMode>('image');
    const [auto, setAuto] = useState<boolean>(false);
    const imageScaleOption = [
        { value: 'smart', label: '智能', icon: <IconIndenpentCornersStroked style={{fontSize: 15}}/> },
        { value: '21:9', label: '21:9', ratio: '21/9' },
        { value: '16:9', label: '16:9', ratio: '16/9' },
        { value: '3:2', label: '3:2', ratio: '3/2' },
        { value: '4:3', label: '4:3', ratio: '4/3' },
        { value: '1:1', label: '1:1', ratio: '1/1' },
        { value: '3:4', label: '3:4', ratio: '3/4' },
        { value: '2:3', label: '2:3', ratio: '2/3' },
        { value: '9:16', label: '9:16', ratio: '9/16' },
];
    const videoScaleOption = [
        { value: 'smart', label: '智能', icon: <IconIndenpentCornersStroked style={{fontSize: 15}}/> },
        { value: '21:9', label: '21:9', ratio: '21/9' },
        { value: '16:9', label: '16:9', ratio: '16/9' },
        { value: '4:3', label: '4:3', ratio: '4/3' },
        { value: '1:1', label: '1:1', ratio: '1/1' },
        { value: '3:4', label: '3:4', ratio: '3/4' },
        { value: '9:16', label: '9:16', ratio: '9/16' },
    ]
    return (
        <div className={styles['agent-preference-card']}>
            <div className={styles['card-head']}>
                <div className={styles['title']}>生成偏好</div>
                <div className={styles['switch-container']}>
                    <span className={styles['auto-text']}>自动</span>
                    <Switch checked={auto} onChange={setAuto} size="small" className={styles['switch']} />                  
                </div>
            </div>
            <BaseRadioGroup
                options={AGENT_MODE_OPTIONS as unknown as RadioOption[]}
                value={agentMode}
                onChange={(e) => setAgentMode(e.target.value as AgentMode)}
                fontSize={13}
            />
            <BaseRadioGroup
                options={agentMode === 'image' ? imageScaleOption : videoScaleOption}
                title='选择比例'
                fontSize={12}
            />
            
        
        </div>

    )
}
