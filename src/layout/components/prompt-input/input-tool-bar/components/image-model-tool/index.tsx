import BaseSelect  from '@/components/base-select';
import { ImageModelOptions } from '@/layout/components/prompt-input/constant';
import type { ImageModel } from '@/layout/components/prompt-input/types';
import styles from './index.module.less';

const baseClassName = 'image-model-select';
interface ImageModelProps {
    model: ImageModel;
    onChange: (val: ImageModel) => void;
}
export default function ImageModelTool(
    { model, onChange }: ImageModelProps
) {
    return (
        <BaseSelect
            options={ImageModelOptions}
            value={model}
            onChange={(val) => onChange(val as ImageModel)}        
            title='选择模型：'
            withTitleDesc
            className={styles[baseClassName]}
            />
    )
}