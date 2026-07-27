export type PromptToolKey =
    | 'mode'
    | 'agentAuto'
    | 'agentSkill'
    | 'citeReference'
    | 'imageModelSelect'
    | 'imageRatio'
    | 'textAugment'
    | 'videoModelSelect'
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
     {
        enable: boolean;  // 是否开启资源上传区
        maxCount?: number;  // 最大上传数量
        accept?: UploadResourceType[];  // 接受的资源类型
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

// 图片模型
export type ImageModel = 'Seedream 5.0 Lite' | 'Seedream 4.6' | 'Seedream 4.5' | 'Seedream 4.0 Design' | 'Seedream 4.0' | 'Seedream 3.0' | 'Seedream 3.0.0';

// 图片比例
export type ImageRatio = 'smart' | '21:9' | '16:9' | '3:2' | '4:3' | '1:1' | '3:4' | '2:3' | '9:16';

// 图片分辨率
export type ImageResolution = '1K' | '2K' | '4K';

// 图片尺寸
export type ImageSize = {
    width: number;
    height: number;
}

// @选择资源主体
export type PromptResource = {
    id: string;
    title: string;
    url: string;
    mediaType: UploadResourceType;
    file?: File;
    duration?: number;
}

// 输入框中提到的资源
export type PromptResourceMention = {
    id: string;
    type: 'resource';
    resourceId: string;
    label: string;
    mediaType: UploadResourceType;
}

// 图片setting
export type ImageSetting = {
    prompt: string;
    model: ImageModel;
    ratio: ImageRatio;
    resolution: ImageResolution;
    imageNumber: number;
    size: ImageSize;
    augment: boolean;
    reference: PromptResourceMention[];
}
