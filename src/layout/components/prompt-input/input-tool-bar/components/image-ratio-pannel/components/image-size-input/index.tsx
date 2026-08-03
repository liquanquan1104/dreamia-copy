import type { ImageSetting, ImageResolution, ImageSize } from '@/layout/components/prompt-input/types';
import styles from './index.module.less';
import { useState, useEffect } from 'react';
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
    isBinding: boolean;
    updateBinding: (isBinding: boolean) => void;
}
const baseClassName = 'image-size-input'

// 各比例在 2K 分辨率下的基准尺寸（宽高的“形状”）。
const RATIO_BASE_SIZE_2K: Record<string, ImageSize> = {
    smart: { width: 2048, height: 2048 },
    '21:9': { width: 3024, height: 1296 },
    '16:9': { width: 2560, height: 1440 },
    '3:2': { width: 2496, height: 1664 },
    '4:3': { width: 2304, height: 1728 },
    '1:1': { width: 2048, height: 2048 },
    '3:4': { width: 1728, height: 2304 },
    '2:3': { width: 1664, height: 2496 },
    '9:16': { width: 1440, height: 2560 },
};

// 分辨率作为整体缩放系数：以 2K 为基准，1K 减半、4K 翻倍。
const RESOLUTION_SCALE: Record<ImageResolution, number> = {
    '1K': 0.5,
    '2K': 1,
    '4K': 2,
};

// 由比例 + 分辨率共同决定尺寸：基准形状 × 分辨率缩放系数。
const getImageSizeFromSetting = (ratio: string, resolution: ImageResolution): ImageSize => {
    const base = RATIO_BASE_SIZE_2K[ratio];
    if (!base) return { width: 2048, height: 2048 };
    const scale = RESOLUTION_SCALE[resolution];
    return {
        width: Math.round(base.width * scale),
        height: Math.round(base.height * scale),
    };
};

export default function ImageSizeInput(
    { title = "尺寸", imageSettings, updateImageSettings, isBinding, updateBinding }: ImageSizeInputProps
) {
    
    const [tipVisible, setTipVisible] = useState(false);
    const disabled = imageSettings.ratio === 'smart';
    // 切换比例或分辨率时，把尺寸同步为对应的预设值。对照表只在“选比例/选分辨率”时生效，
    // 不会覆盖用户手动输入（手动输入只改 size，不改 ratio / resolution，故不会触发此 effect）。
    useEffect(() => {
        updateImageSettings({ size: getImageSizeFromSetting(imageSettings.ratio, imageSettings.resolution) });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imageSettings.ratio, imageSettings.resolution]);
    // 把 "16:9" 解析成数值宽高比 16/9；无法解析时返回 null。
    const getRatioValue = (ratio: string): number | null => {
        const [w, h] = ratio.split(':').map(Number);
        if (!w || !h) return null;
        return w / h;
    }
    const handleSizeChange = (value: number, isWidth: boolean) => {
        if (Number.isNaN(value)) return;
        const ratioValue = getRatioValue(imageSettings.ratio);
        // 未绑定比例、或比例无法解析（如 smart）时，自由修改单边。
        if (!isBinding || ratioValue === null) {
            updateImageSettings({
                size: isWidth
                    ? { ...imageSettings.size, width: value }
                    : { ...imageSettings.size, height: value },
            });
            return;
        }
        // 绑定比例：改一边，另一边按比例联动。
        if (isWidth) {
            updateImageSettings({ size: { width: value, height: Math.round(value / ratioValue) } });
        } else {
            updateImageSettings({ size: { width: Math.round(value * ratioValue), height: value } });
        }
    }
    return (
        <div className={styles[`${baseClassName}`]}>
            <div className={styles[`${baseClassName}-title`]}>{title}</div>
            {/* todo这里加禁用的toolTip */}
            {/* <Tooltip content={disabled ? '智能比例不支持更改尺寸' : ''} > */}
                <div className={styles[`${baseClassName}-content`]}>
                 <Input 
                    disabled={disabled}
                    prefix="W" 
                    value={imageSettings.size.width} 
                    onChange={(value) => handleSizeChange(Number(value), true)} />
                <div 
                    onClick={() => !disabled && updateBinding(!isBinding)} 
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
                    onChange={(value) => handleSizeChange(Number(value), false)} />    
                <span className={styles[`${baseClassName}-suffix`]}>PX</span>
                </div>
            {/* </Tooltip> */}
        </div>
    )
}
