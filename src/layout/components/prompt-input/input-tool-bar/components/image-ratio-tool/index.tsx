import { Popover } from '@douyinfe/semi-ui';
import ImageRatioPannel from '../image-ratio-pannel';
import type { ImageSetting } from '@/layout/components/prompt-input/types';
import BaseButton from '@/components/base-button';
import styles from './index.module.less';
import { useState } from 'react';
import { IconIndenpentCornersStroked, IconBottomLeftStroked, IconCarouselStroked } from '@douyinfe/semi-icons';
import { resolutionOptions } from '@/layout/components/prompt-input/constant';

const baseClassName = 'image-ratio-tool';
interface ImageRatioToolProps {
    imageSettings: ImageSetting;
    updateImageSettings: (partial: Partial<ImageSetting>) => void;
}
const smartRatio = '智能比例';
export default function ImageRatioTool({
    imageSettings,
    updateImageSettings,
}: ImageRatioToolProps) {
    const [isBinding, setIsBinding] = useState(true);
    const [popoverVisible, setPopoverVisible] = useState(false);
    const getRatioValue = () => {
        if(imageSettings.ratio === 'smart') {
            return (
                <div className="flex items-center gap-2">
                    <IconIndenpentCornersStroked style={{fontSize: 13}} />
                    <span>{smartRatio}</span>      
                </div>
            )
        }  
        if(!isBinding) {
            return (
                <div className="flex items-center gap-2">
                    <IconBottomLeftStroked style={{fontSize: 13}} />
                    <span>{imageSettings.size.width + ':' + imageSettings.size.height}</span>
                </div>
            )
        };
        return (
            <div className="flex items-center gap-2">
                <IconCarouselStroked style={{fontSize: 13}} />
                <span>{imageSettings.ratio}</span>
            </div>
        )
    }
    const buttonContent = (
        <div className={styles[`${baseClassName}-content`]}>
            <span>{getRatioValue()}</span>
            <div className={styles[`${baseClassName}-divider`]} />
            <span className="flex items-center gap-1">
                {imageSettings.resolution}
                {resolutionOptions.find((item) => item.value === imageSettings.resolution)?.icon}
            </span>
            <div className={styles[`${baseClassName}-divider`]} />
            <span>{imageSettings.imageNumber}</span>
        </div>
    )
    return (
        <Popover
            content={<ImageRatioPannel imageSettings={imageSettings} updateImageSettings={updateImageSettings} isBinding={isBinding} updateBinding={setIsBinding} />}
            trigger="click"
            onVisibleChange={setPopoverVisible}
        >
            <BaseButton highlighted={popoverVisible} children={buttonContent} />
        </Popover>
    )
}