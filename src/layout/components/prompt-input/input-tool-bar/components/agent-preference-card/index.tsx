import BaseRadioGroup from '@/components/base-radio-group';
import type { RadioOption } from '@/components/base-radio-group';
import { useState, useEffect } from 'react';
import styles from './index.module.less'
import type { AgentMode } from '@/types/constants';
import { AGENT_MODE_OPTIONS } from '@/types/constants';
import { Switch } from '@douyinfe/semi-ui';
import BaseSelect from '@/components/base-select';
import { ImageModelOptions, imageScaleOptions, videoScaleOptions } from '@/layout/components/prompt-input/constant';

type RadioEvent = {
    target: {
        value: string;
    };
};

export type AgentPreferenceInfo = {
    agentMode: AgentMode;
    auto: boolean;
    ImageModel: string;
    VideoModel: string;
    imageScale: string;
    videoScale: string;
}


const VedioVIPTooltip = (
        <div className={styles['tooltip']}>
            此功能为会员专属
            <span>开通会员</span>
        </div>
    );

const videoModelOptions = [
            {value: 'Seedance 2.0 Fast VIP', label: 'Seedance 2.0 Fast VIP', tag: ['✧','New'], img_url: 'src/assets/sd20_avg.svg', description: '极速推理，会员专属通道，音视文图均可参考（暂不支持真人人脸）', tooltip:VedioVIPTooltip},
             {value: 'Seedance 2.0 VIP', label: 'Seedance 2.0 VIP', tag: ['✧','New'], img_url: 'src/assets/sd20_avg.svg', description: '全模态能力，会员专属通道，音视文图均可参考（暂不支持真人人脸）', tooltip:VedioVIPTooltip},
             {value: 'Seedance 2.0 Fast', label: 'Seedance 2.0 Fast', tag: ['New'], img_url: 'src/assets/sd20_avg.svg', description: '高性价比，音视文图均可参考（暂不支持真人人脸）'},
             {value: 'Seedance 2.0', label: 'Seedance 2.0', tag: ['限免1次','New'], img_url: 'src/assets/sd20_avg.svg', description: '全年王者，音视文图均可参考（暂不支持真人人脸）'},
             {value: 'Seedance 1.5 Pro', label: 'Seedance 1.5 Pro', tag: ['New'], img_url: 'src/assets/sd20_avg.svg', description: '音画同出，全新体验'},
             {value: 'Seedance 1.0', label: 'Seedance 1.0', tag: ['✧'], img_url: 'src/assets/sd20_avg.svg', description: '效果最佳，画质超清'},
             {value: 'Seedance 1.0 Fast', label: 'Seedance 1.0 Fast', tag: ['New'], img_url: 'src/assets/sd20_avg.svg', description: 'Pro级表现，加量不加价'},
        ]

export default function AgentPreferenceCard({handleTransform}: {handleTransform: (info: AgentPreferenceInfo) => void}) {
    const [agentMode, setAgentMode] = useState<AgentMode>('image');
    const [auto, setAuto] = useState<boolean>(true);
    const [ImageModel, setImageModel] = useState<string>('Seedream 5.0 Lite');
    const [VideoModel, setVideoModel] = useState<string>('Seedance 2.0');
    const [imageScale, setImageScale] = useState<string>('smart');
    const [videoScale, setVideoScale] = useState<string>('smart');

    const [claritySelectVisible, setClaritySelectVisible] = useState<boolean>(true);
    const [resolution, setResolution] = useState<string>(agentMode === 'image' ? '2K' : '720P');

    // const getDefaultResolution = (mode: AgentMode) => mode === 'image' ? '2K' : '720P';

    // TODO：后面重构 AgentPreferenceCard 时统一处理 useEffect 依赖和 options 抽离



    useEffect(() => {
        handleTransform({
            agentMode,
            auto,
            ImageModel: ImageModelOptions.find(item => item.value === ImageModel)?.label || ImageModel,
            VideoModel: videoModelOptions.find(item => item.value === VideoModel)?.label || VideoModel,
            imageScale: imageScaleOptions.find(item => item.value === imageScale)?.label || imageScale,
            videoScale: videoScaleOptions.find(item => item.value === videoScale)?.label || videoScale,
        });
    }, [agentMode, auto, ImageModel, VideoModel, imageScale, videoScale,handleTransform]);
    
    const VedioResolutionIcon=(
        <span key={`hd-${auto}`} className={`${styles['resolution-icon']} ${auto ? styles['disabled'] : ''}`}>HD</span>
    )
    const ImageResolutionIcon=(
        <span key={`2k-${auto}`} className={`${styles['resolution-icon']} ${auto ? styles['disabled'] : ''}`}>2K</span>
    )

    const videoResolutionOptions = [
        {value: '720P', label: '720P', icon: VedioResolutionIcon},
    ];

    const imageResolutionOptions = [
        {value: '2K', label: '高清 2K', icon: ImageResolutionIcon},
    ]

    
        
    

    const handleAgentModeChange = (e: RadioEvent) => {
        const newMode = e.target.value as AgentMode;
        setAgentMode(newMode);
        setResolution(newMode === 'image' ? '2K' : '720P');
        if (newMode === 'video') {
            setClaritySelectVisible(VideoModel === 'Seedance 1.0 Fast' || VideoModel === 'Seedance 1.5 Pro');
        } else {
            setClaritySelectVisible(true);
        }
    }

    const handleImageModelChange = (val:string) => {
        setImageModel(val);
        setClaritySelectVisible(true);
    }

    const handleVideoModelChange = (val:string) => {
        setVideoModel(val);
        setClaritySelectVisible(val === 'Seedance 1.0 Fast' || val === 'Seedance 1.5 Pro');
    }



    return (
        <div className={styles['agent-preference-card']}>
            <div className={styles['card-head']}>
                <div className={styles['title']}>生成偏好</div>
                <div className={styles['switch-container']}>
                    <span className={styles['auto-text']}>自动</span>
                    <Switch checked={auto} onChange={setAuto} size="small" className={styles['switch']} />                  
                </div>
            </div>
            {/* 模式选择：图片/视频 */}
            <BaseRadioGroup
                options={AGENT_MODE_OPTIONS as unknown as RadioOption[]}
                value={agentMode}
                mask={auto}
                onChange={handleAgentModeChange}
                fontSize={13}
            />
            {agentMode === 'image' ? (
                // 图片比例选择
                <BaseRadioGroup
                    options={imageScaleOptions}
                    title='选择比例'
                    fontSize={12}
                    value={imageScale}
                    mask={auto}
                    onChange={
                        (e) => {
                            setImageScale(e.target.value);
                            setAuto(false);
                        }
                    }
                /> ) : 
                (
                    // 视频比例选择
                    <BaseRadioGroup
                        options={videoScaleOptions}
                        title='选择比例'
                        fontSize={12}
                        value={videoScale}
                        mask={auto}
                        onChange={
                            (e) => {
                                setVideoScale(e.target.value);
                                setAuto(false);
                            }
                        }
                    />
                )
            
            
            }
            <div className={styles['other-setting']}>
                <span>其他设置</span>
            </div>
            <div className={styles['model-container']}>
                {agentMode === 'image' ? (
                    // 图片模型选择
                    <BaseSelect
                        options={ImageModelOptions}
                        value={ImageModel}
                        onChange={handleImageModelChange}
                        onClickItem={ ()=> setAuto(false)}
                        title='选择模型：'
                        withTitleDesc={true}
                        mask={auto}
                    />
                ):(
                    // 视频模型选择
                    <BaseSelect
                    options={videoModelOptions}
                    value={VideoModel}
                    onChange={handleVideoModelChange}
                    onClickItem={ ()=>{
                        
                        setAuto(false);
                        console.log('lqq auto', auto);
                    }}
                    title='选择模型：'
                    withTitleDesc={true}
                    mask={auto}
                />
                )}
                {/* 清晰度选择 */}
                {claritySelectVisible && (
                    <BaseSelect
                        options={agentMode === 'image' ? imageResolutionOptions : videoResolutionOptions}
                        value={resolution}
                        onChange={setResolution}
                        onClickItem={ ()=> setAuto(false)}
                        title='选择清晰度'
                        mask={auto}
                    />
                )}
            </div>        
        </div>

    )
}
