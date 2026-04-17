import { Radio, RadioGroup } from '@douyinfe/semi-ui';
import styles from './index.module.less'


// 单个选项属性
export interface RadioOption {
    value: string | number; // 选项值
    label: string; // 选项标签
    ratio?: string; // 比例
    icon?: React.ReactNode; // 图标
    disabled?: boolean; // 是否禁用
    render?: (option: RadioOption) => React.ReactNode; // 自定义渲染函数
}

// 组件 Props
export interface BaseRadioGroupProps
  extends Omit<React.ComponentProps<typeof RadioGroup>, 'options'> {
  options: RadioOption[];
  itemAlign?: 'vertical' | 'horizontal'; // 图标文字排列方向
  title?: string; // 标题
  fontSize?: number; // 字体大小
}


export default function BaseRadioGroup({
    options,
    type='button',
    itemAlign='vertical',
    title='',
    fontSize=14,
    ...rest
}: BaseRadioGroupProps) {
    return (
        <div className={styles['radio-group-container']}>
        <div>
            {title && <div className={styles['title']}>{title}</div>}
        </div>
        <RadioGroup 
            type={type}
            {...rest}
            className={styles['radio-group']}
        >
            {options.map(item => (
                <Radio key={item.value} value={item.value} disabled={item.disabled}>
                    {item.render ? (
                        item.render(item)
                    ) : (
                        <div 
                            style={{
                                flexDirection: itemAlign === 'vertical' ? 'column' : 'row', 
                            }}
                            className={styles['radio-option']}
                        >
                            {item.ratio ? (
                                <div className={styles['ratio-icon-container']}>
                                    <div className={styles['ratio-icon']} style={{ aspectRatio: item.ratio }}/>
                                </div>
                            ): item.icon }
                            <span style={{fontSize: fontSize}}>{item.label}</span>
                        </div>
                    )}
                </Radio>
            ))}
        </RadioGroup>
        </div>
    )
}