import type { GenerateMode } from '@/types/constants';
// import { AGENT_MODE_OPTIONS } from '@/types/constants';
import type { PromptModeConfig } from './types';

export const PROMPT_MODE_CONFIG: Record<GenerateMode, PromptModeConfig> = {
    agent: {
        label: 'Agent 模式',
        placeholder: '输入想法、剧本或上传参考，支持 “/” 使用技能，和 Agent 一起创作',
        upload: {
            enable: true,
            maxCount: 6,
            accept: ['image', 'video'],
            addLabel: '参考内容',
        },
        toolbar: ['mode', 'agentAuto', 'agentSkill'],
        rightActions: ['mic', 'submit'],
    },
    image: {
        label: '图片生成',
        placeholder: '上传参考图、输入文字，描述你想生成的图片。',
        upload: {
            enable: true,
            maxCount: 6,
            accept: ['image'],
            addLabel: '上传图片',
        },
        toolbar: ['mode', 'ImageModelSelect', 'imageRatio', 'textAugment'],
        rightActions: ['imageCount', 'submit'],
    },
    video: {
        label: '视频生成',
        placeholder: '上传1-12个参考素材、输入文字，自由组合图、文、音、视频多元素。',
        upload: {
            enable: true,
            maxCount: 6,
            accept: ['video'],
            addLabel: '上传视频',
        },
        toolbar: ['mode', 'VideoModelSelect', 'videoRatio', 'videoDuration'],
        rightActions: ['duration', 'submit'],
    },
    music: {
        label: '音乐生成',
        placeholder: '请输入你想生成的音乐描述。',
        upload: {
            enable: false,
        },
        toolbar: ['mode', 'musicModelSelect', 'musicDuration'],
        rightActions: ['duration', 'submit'],
    },
    voice: {
        label: '配音生成',
        placeholder: '请输入你想生成的说话内容。',
        upload: {
            enable: true,
            maxCount: 1,
            accept: ['audio'],
            addLabel: '音色',
        },
        toolbar: ['mode', 'voiceClone'],
        rightActions: ['duration', 'submit'],
    },
    digital_person: {
        label: '数字人',
        placeholder: '请输入你希望角色说出的内容',
        upload: {
            enable: true,
            maxCount: 2,
            accept: ['image', 'audio'],
            slots: ['角色', '音色'],
        },
        toolbar: ['mode', 'digitalPersonModeSelect','digitalPersonUpload'],
        rightActions: ['duration', 'submit'],
    },
    action: {
        label: '动作模仿',
        placeholder: '上传图片后，选择模板即可生成',
        upload: {
            enable: true,
            maxCount: 2,
            accept: ['image', 'video'],
            slots: ['动作', '角色'],
        },
        toolbar: ['mode', 'actionModelSelect'],
        rightActions: ['duration', 'submit'],
    },
}
