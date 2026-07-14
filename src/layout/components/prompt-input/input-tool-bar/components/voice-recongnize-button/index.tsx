import {  IconMicrophoneStroked } from '@douyinfe/semi-icons';
import { Tooltip } from '@douyinfe/semi-ui';

export default function VoiceRecongnizeButton() {
    return (
         <Tooltip content="语音识别" style={{ fontSize: 12 }}>
            <IconMicrophoneStroked style={{fontSize: 20, color: '#919ca5'}}  />
          </Tooltip>
    )
}