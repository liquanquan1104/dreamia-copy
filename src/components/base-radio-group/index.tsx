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
  iconPosition?: 'left' | 'right'; // 图标位置，仅在 itemAlign 为 horizontal 时生效
  title?: string; // 标题
  fontSize?: number; // 字体大小
  mask?: boolean; // 是否显示遮罩背景
}


export default function BaseRadioGroup({
    options,
    type='button',
    itemAlign='vertical',
    iconPosition='left',
    title='',
    fontSize=14,
    mask=false,
    // onChange,
    ...rest
}: BaseRadioGroupProps) {
    return (
        <div className={styles['radio-group-container']}>
        <div>
            {title && <div className={styles['title']}>{title}</div>}
        </div>
        <RadioGroup 
            // onChange={onChange}
            type={type}
            {...rest}
            className={styles['radio-group']}
            // style={mask ? {backgroundColor: '#fbfbfb'} : undefined}
        >
            {options.map(item => (
                <Radio key={item.value} value={item.value} disabled={item.disabled}>
                    {item.render ? (
                        item.render(item)
                    ) : (
                        <div
                            style={{
                                flexDirection: itemAlign === 'vertical'
                                    ? 'column'
                                    : (iconPosition === 'right' ? 'row-reverse' : 'row'),
                                color: mask ? '#939597' : undefined
                            }}
                            className={styles['radio-option']}
                        >
                            {item.ratio ? (
                                <div className={styles['ratio-icon-container']}>
                                    <div className={styles['ratio-icon']} style={{ aspectRatio: item.ratio, borderColor: mask ? '#939597' : undefined }}/>
                                </div>
                            ): item.icon }
                            <span className={styles['radio-label']} style={{fontSize: fontSize}}>{item.label}</span>
                        </div>
                    )}
                </Radio>
            ))}
        </RadioGroup>
        </div>
    )
}