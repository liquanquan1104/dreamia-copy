import type {PromptToolKey} from '../types';
import ModeSelect from '../components/mode-select';
import AgentAutoTool from '../input-tool-bar/components/agent-auto-tool';
import BaseButton from '@/components/base-button';
import ImageModelTool from '../input-tool-bar/components/image-model-tool';
import ImageRatioTool from '../input-tool-bar/components/image-ratio-tool';
import type { ImageSetting } from '../types';

export function renderTools(
    toolKey: PromptToolKey,
    ctx: {
        imageSettings: ImageSetting;
        updateImageSettings: (partial: Partial<ImageSetting>) => void;
    }
) {
     
    switch (toolKey) {
        case 'mode':
            return <ModeSelect />
        case 'agentAuto':
            return (
                <AgentAutoTool />
            )
        case 'agentSkill':
            return (
                <BaseButton text='使用技能' />
            )
        case 'citeReference':
            return <BaseButton  text='@ '/>
        case 'imageModelSelect':
            return <ImageModelTool 
                model={ctx.imageSettings.model}
                onChange={(val) => ctx.updateImageSettings({ model: val })}
            />
        case 'imageRatio':
            return <ImageRatioTool 
                imageSettings={ctx.imageSettings}
                updateImageSettings={ctx.updateImageSettings}
            />
        case 'textAugment':
            return <BaseButton
                text='T,,'
                onClick={() => ctx.updateImageSettings({ prompt: `“${ctx.imageSettings.prompt ?? ''}”` })}
            />
        case 'videoModelSelect':
            return <BaseButton text='即梦 Seedance 2.0 mini' />
        case 'videoReference':
            return <BaseButton text='全能参考'/>
        case 'videoRatio':
            return <BaseButton text='16:9 720P'/>
        case 'videoDuration':
            return <BaseButton text='5s'/>
        case 'musicModelSelect':
            return <BaseButton text='SeedMusic 1.0 preview'/>
        case 'musicDuration':
            return <BaseButton text='智能时长'/>
        case 'voiceClone':
            return <BaseButton text='克隆声音'/>
        case 'digitalPersonModeSelect':
            return <BaseButton  text='快速模式'/>
        case 'digitalPersonUpload':
            return <BaseButton text='上传音频'/>
        case 'actionModelSelect':
            return <BaseButton text='生动'/>
        default:
            return null
    }
}
