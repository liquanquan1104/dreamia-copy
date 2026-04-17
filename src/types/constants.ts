import { IconElementStroked, IconFaceuLogo, IconImageStroked, IconMusicNoteStroked, IconUserStroked, IconVideoDouyinStroked } from '@douyinfe/semi-icons';

export const MODE_OPTIONS = [
    {
        label: 'Agent 模式',
        value: 'agent',
        logo: IconFaceuLogo,
    },
    {
        label: '图片生成',
        value: 'image',
        logo: IconImageStroked,
    },
    {
        label: '视频生成',
        value: 'video',
        logo: IconVideoDouyinStroked,
    },
    {
        label: '数字人',
        value: 'digital_person',
        logo: IconUserStroked,
    },
    {
        label: '配音生成',
        value: 'audio',
        logo: IconMusicNoteStroked,
    },
    {
        label: '动作模仿',
        value: 'action',
        logo: IconElementStroked, 
    },
] as const;

export const AGENT_MODE_OPTIONS = [
    { label: '图片', value: 'image' },
    { label: '视频', value: 'video' },
] as const;

export type GenerateMode = typeof MODE_OPTIONS[number]['value'];
export type AgentMode = typeof AGENT_MODE_OPTIONS[number]['value'];
