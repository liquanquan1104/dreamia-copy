import BaseRadioGroup  from '@/components/base-radio-group';
import { imageScaleOptions } from '@/layout/components/prompt-input/constant';
import type { ImageSetting } from '@/layout/components/prompt-input/types';
import styles from './index.module.less';

interface ImageRatioPannelProps {
    imageSettings: ImageSetting;
    updateImageSettings: (partial: Partial<ImageSetting>) => void;
}
const baseClassName = 'image-ratio-select';
export default function ImageRatioPannel({
    imageSettings,
    updateImageSettings,
}: ImageRatioPannelProps) {
    return (
        <div className={styles[baseClassName]}>
        
        <BaseRadioGroup
            options={imageScaleOptions}
            value={imageSettings.ratio}
            onChange={(e) => updateImageSettings({ ratio: e.target.value })}
            title='选择比例：'
            fontSize={12}
            />
        </div>
    )
}