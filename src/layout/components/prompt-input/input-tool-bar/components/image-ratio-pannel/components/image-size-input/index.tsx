import type { ImageSetting } from '@/layout/components/prompt-input/types';
import styles from './index.module.less';
import { useState } from 'react';
import { IconEyeOpenedStroked, IconEyeClosedSolidStroked } from '@douyinfe/semi-icons';
import { Input, Tooltip } from '@douyinfe/semi-ui';
import cls from 'classnames';
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
    const [tipVisible, setTipVisible] = useState(false);
    const disabled = imageSettings.ratio === 'smart';
    return (
        <div className={styles[`${baseClassName}`]}>
            <div className={styles[`${baseClassName}-title`]}>{title}</div>
            {/* todo这里加禁用的toolTip */}
            
            <div className={styles[`${baseClassName}-content`]}>
                 <Input 
                    disabled={disabled}
                    prefix="W" 
                    value={imageSettings.size.width} 
                    onChange={(value) => updateImageSettings({ size: { ...imageSettings.size, width: Number(value) } })} />
                <div 
                    onClick={() => !disabled && setIsBinding((prev) => !prev)} 
                    onMouseEnter={() => !disabled && setTipVisible(true)}
                    onMouseLeave={() => setTipVisible(false)}
                    className={cls(styles[`${baseClassName}-icon-wrapper`], { [styles[`${baseClassName}-icon-wrapper-disabled`]]: disabled })}   
                >
                    { 
                        <Tooltip 
                            content={isBinding ? '约束比例' : '解绑比例'} 
                            className={styles[`${baseClassName}-icon-tooltip`]}
                            trigger='custom'
                            visible={tipVisible}
                        >
                            {isBinding && !disabled ? 
                                    <IconEyeOpenedStroked className={styles[`${baseClassName}-icon`]} />
                                : 
                                    <IconEyeClosedSolidStroked className={styles[`${baseClassName}-icon`]} />
                            }   
                        </Tooltip>
                        }
                </div>
                 <Input 
                    disabled={disabled}
                    prefix="H" 
                    value={imageSettings.size.height} 
                    onChange={(value) => updateImageSettings({ size: { ...imageSettings.size, height: Number(value) } })} />    
                <span className={styles[`${baseClassName}-suffix`]}>PX</span>
            </div>
        </div>
    )
}
