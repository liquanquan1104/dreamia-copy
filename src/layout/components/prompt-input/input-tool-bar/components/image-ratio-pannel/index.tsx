import BaseRadioGroup  from '@/components/base-radio-group';
import { imageScaleOptions, resolutionOptions, imageNumberOptions } from '@/layout/components/prompt-input/constant';
import type { ImageSetting } from '@/layout/components/prompt-input/types';
import styles from './index.module.less';
import ImageSizeInput from './components/image-size-input';

interface ImageRatioPannelProps {
    imageSettings: ImageSetting;
    updateImageSettings: (partial: Partial<ImageSetting>) => void;
    isBinding: boolean;
    updateBinding: (isBinding: boolean) => void;
}
const baseClassName = 'image-ratio-select';
export default function ImageRatioPannel({
    imageSettings,
    updateImageSettings,
    isBinding,
    updateBinding,
}: ImageRatioPannelProps) {
    return (
        <div className={styles[baseClassName]}>
            <div className={styles[`${baseClassName}-wrapper`]}>
                {/* 比例 */}
                <BaseRadioGroup
                    options={imageScaleOptions}
                    value={imageSettings.ratio}
                    onChange={(e) => updateImageSettings({ ratio: e.target.value })}
                    title='选择比例：'
                    fontSize={12}
                />
                {/* 分辨率 */}
                <BaseRadioGroup
                    options={resolutionOptions}
                    value={imageSettings.resolution}
                    onChange={(e) => updateImageSettings({ resolution: e.target.value })}
                    title='选择分辨率：'
                    fontSize={12}
                    itemAlign='horizontal'
                    iconPosition='right'
                />
                {/* 图片数量 */}
                <BaseRadioGroup
                    options={imageNumberOptions}
                    value={imageSettings.imageNumber}
                    onChange={(e) => updateImageSettings({ imageNumber: e.target.value })}
                    title='选择图片数量：'
                    fontSize={12}
                />
                {/* 图片尺寸 */}
                <ImageSizeInput
                    imageSettings={imageSettings}
                    updateImageSettings={updateImageSettings}
                    isBinding={isBinding}
                    updateBinding={updateBinding}
                />
            </div>
        </div>
    )
}