import BaseSelect  from '@/components/base-select';
import { ImageModelOptions } from '@/layout/components/prompt-input/constant';
import { useState } from 'react';
import type { ImageModel } from '@/layout/components/prompt-input/types';

export default function ImageModelTool() {
    const [ImageModel, setImageModel] = useState<ImageModel>('Seedream 5.0 Lite');
    return (
        <BaseSelect
            options={ImageModelOptions}
            value={ImageModel}
            onChange={(val) => setImageModel(val as ImageModel)}        
            title='选择模型：'
            withTitleDesc
            />
    )
}