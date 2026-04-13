export const MODE_OPTIONS = [
    {
        label: 'Agent模式',
        value: 'agent',
    },
    {
        label: '图片生成',
        value: 'image',
    },
    {
        label: '视频生成',
        value: 'video',
    },
    {
        label: '数字人',
        value: 'digital_person',
    },
    {
        label: '配音生成',
        value: 'audio',
    },
    {
        label: '动作模仿',
        value: 'action',
    },
] as const;

export type GenerateMode = typeof MODE_OPTIONS[number]['value'];