import type { ImageSetting } from '@/layout/components/prompt-input/types';
import styles from './index.module.less';
import { useState } from 'react';
import { IconEyeOpenedStroked, IconEyeClosedSolidStroked } from '@douyinfe/semi-icons'
// /**
//  * 图片尺寸输入框props
//  * @param imageSettings 图片设置
//  * @param updateImageSettings 更新图片设置
//  * @param ratio 生成比例（这是不是包含在imageSettings中？如果是智能模式，则禁止改动height与width；如果不是且绑定了ratio，则固定宽高，否则自由调整，且将ratio设置为undefined，选择按钮直接展示比例数字和另一图标）
//  */
interface ImageSizeInputProps {
    title?: string;
    imageSettings: ImageSetting;
    updateImageSettings: (partial: Partial<ImageSetting>) => void;
}
const baseClassName = 'image-size-input'
export default function ImageSizeInput(
    { title = "尺寸", imageSettings, updateImageSettings }: ImageSizeInputProps
) {
    const [isBinding, setIsBinding] = useState(true);
    const renderInput = (tag: string, value: number, onChange: (value: number) => void) => {
        return (
            <span className={styles[`${baseClassName}-input-wrapper`]}>
                <span className={styles[`${baseClassName}-input-tag`]}>
                    {tag}
                </span>
                <input
                    className={styles[`${baseClassName}-input-content`]}
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))} />
            </span>
        )
    }
    return (
        <div className={styles[`${baseClassName}-wrapper`]}>
            <div className={styles[`${baseClassName}-title`]}>{title}</div>
            <div className={styles[`${baseClassName}-content`]}>
                {renderInput('W', imageSettings.size.width, (width) =>
                    updateImageSettings({ size: { ...imageSettings.size, width } })
                )}
                <span onClick={() => setIsBinding((prev) => !prev)}>
                    {isBinding ? <IconEyeOpenedStroked /> : <IconEyeClosedSolidStroked />}
                </span>
                {renderInput('H', imageSettings.size.height, (height) =>
                    updateImageSettings({ size: { ...imageSettings.size, height } })
                )}
            </div>
        </div>
    )
}
