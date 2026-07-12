export type PromptToolKey =
    | 'mode'
    | 'agentAuto'
    | 'agentSkill'
    | 'citeReference'
    | 'ImageModelSelect'
    | 'imageRatio'
    | 'textAugment'
    | 'VideoModelSelect'
    | 'videoReference'
    | 'videoRatio'
    | 'videoDuration'
    | 'musicModelSelect'
    | 'musicDuration'
    | 'voiceClone'
    | 'digitalPersonModeSelect'
    | 'digitalPersonUpload'
    | 'actionModelSelect'

export type RightActionKey = 
    | 'mic'
    | 'imageCount'
    | 'duration'
    | 'submit'

export type UploadResourceType = 'image' | 'video' | 'audio';

export type UploadResourceConfig = 
    | {
        enable: false;  // 不开启资源上传区
    }
    | {
        enable: true;
        maxCount: number;  // 最大上传数量
        accept: UploadResourceType[];  // 接受的资源类型
        addLabel?: string;  // 添加toolTip提示，上传入口上显示的文案。
        slots?: string[];  // 多槽位上传时每个槽位的名称，动作模仿模式可能有 ['角色', '动作']
    }
        
export type PromptModeConfig = {
    label: string;
    placeholder: string;
    upload?: UploadResourceConfig;
    toolbar: PromptToolKey[];
    rightActions: RightActionKey[];
}