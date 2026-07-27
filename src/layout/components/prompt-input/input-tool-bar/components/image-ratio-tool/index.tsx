import { Popover } from '@douyinfe/semi-ui';
import ImageRatioPannel from '../image-ratio-pannel';
import type { ImageSetting } from '@/layout/components/prompt-input/types';
import BaseButton from '@/components/base-button';
import styles from './index.module.less';

const baseClassName = 'image-ratio-tool';
interface ImageRatioToolProps {
    imageSettings: ImageSetting;
    updateImageSettings: (partial: Partial<ImageSetting>) => void;
}

export default function ImageRatioTool({
    imageSettings,
    updateImageSettings,
}: ImageRatioToolProps) {
    const buttonContent = (
        <div className={styles[`${baseClassName}-content`]}>
            <span>{imageSettings.ratio}</span>
            <div className={styles[`${baseClassName}-divider`]} />
            <span>{imageSettings.resolution}</span>
            <div className={styles[`${baseClassName}-divider`]} />
            <span>{imageSettings.imageNumber}</span>
        </div>
    )
    return (
        <Popover
            content={<ImageRatioPannel imageSettings={imageSettings} updateImageSettings={updateImageSettings} />}
            trigger="click"
        >
            <BaseButton children={buttonContent} />
        </Popover>
    )
}