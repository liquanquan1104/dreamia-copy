import { Popover } from '@douyinfe/semi-ui';
import ImageRatioPannel from '../image-ratio-pannel';
import type { ImageSetting } from '@/layout/components/prompt-input/types';
import BaseButton from '@/components/base-button';
import styles from './index.module.less';
import { useState } from 'react';

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
    const getRatioValue = () => {
        if(imageSettings.ratio === 'smart') return smartRatio;
        if(!isBinding) {
            return imageSettings.size.width + ':' + imageSettings.size.height;
        };
        return imageSettings.ratio;
    }
    const buttonContent = (
        <div className={styles[`${baseClassName}-content`]}>
            <span>{getRatioValue()}</span>
            <div className={styles[`${baseClassName}-divider`]} />
            <span>{imageSettings.resolution}</span>
            <div className={styles[`${baseClassName}-divider`]} />
            <span>{imageSettings.imageNumber}</span>
        </div>
    )
    return (
        <Popover
            content={<ImageRatioPannel imageSettings={imageSettings} updateImageSettings={updateImageSettings} isBinding={isBinding} updateBinding={setIsBinding} />}
            trigger="click"
        >
            <BaseButton children={buttonContent} />
        </Popover>
    )
}