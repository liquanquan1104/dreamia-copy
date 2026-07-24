import { Popover } from '@douyinfe/semi-ui';
import ImageRatioPannel from '../image-ratio-pannel';
import type { ImageSetting } from '@/layout/components/prompt-input/types';
import BaseButton from '@/components/base-button';

interface ImageRatioToolProps {
    imageSettings: ImageSetting;
    updateImageSettings: (partial: Partial<ImageSetting>) => void;
}

export default function ImageRatioTool({
    imageSettings,
    updateImageSettings,
}: ImageRatioToolProps) {
    return (
        <Popover
            content={<ImageRatioPannel imageSettings={imageSettings} updateImageSettings={updateImageSettings} />}
            trigger="click"
        >
            <BaseButton text="21:9 2K 4" />
        </Popover>
    )
}