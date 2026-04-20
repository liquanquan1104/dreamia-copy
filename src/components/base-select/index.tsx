import { Select } from '@douyinfe/semi-ui';
import styles from './index.module.less'
import { IconCheckChoiceStroked, IconChevronDownStroked, IconTick } from '@douyinfe/semi-icons';
import { useState } from 'react';

export interface SelectOption {
    value: string ; // 选项值
    label: string; // 选项标签
    description?: string; // 选项描述
    tooltip?: string; // 选项提示
    tag?: string; // 选项标签
    img_url?: string; // 图标URL
    disabled?: boolean; // 是否禁用
    render?: (option: SelectOption) => React.ReactNode; // 自定义渲染函数
}

export interface BaseSelectProps {
    options: SelectOption[];
    value: string;
    onChange: (value: string) => void;
}

export default function BaseSelect({ options, value, onChange }: BaseSelectProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const renderSelectedItem = (optionNode: Record<string, unknown>) => {
        const option = optionNode as unknown as SelectOption;
        return (
            <div className={styles['selected-item']}>

                    <IconCheckChoiceStroked style={{ fontSize: 16 }} />
                    {/* <img
                        src='src/assets/sd20_avg.svg'
                        alt={option.label}
                        width="40"
                        height="40"
                        style={{ filter: 'brightness(0)' }}
                    /> */}
                
                <span>{option.label}</span>
                {isOpen ? <IconChevronDownStroked style={{ transform: 'rotate(180deg)', fontSize: 12 }} /> : <IconChevronDownStroked style={{ fontSize: 12 }} />}
            </div>
        );
    };

    return (
        <>
            <Select
                value={value}
                placeholder="请选择"
                style={{ width: '100%', minHeight: 38 }}
                onChange={(val) => onChange(val as string)}
                renderSelectedItem={renderSelectedItem}
                showArrow={false}
                onDropdownVisibleChange={(visible) => setIsOpen(visible)}
            >
                <Select.OptGroup label="模型">
                    {options.map((item) => (
                    <Select.Option key={item.value} value={item.value} showTick={false}>
                        <div className={styles['option-content']}>
                            <div className={styles['option-item']}>
                                {item.img_url ? (
                                    <div className={styles['option-img-container']}><img
                                        src={item.img_url}
                                        alt={item.label}
                                        className={styles['option-img']}
                                        style={{ filter: 'brightness(0)' }}
                                    /></div>
                                ) : null }
                                <div className={styles['option-text']}>
                                    <div className={styles['option-label']}>
                                        <span>{item.label}</span>
                                        {item.tag && <span className={styles['tag']}>{item.tag}</span>}
                                    </div>
                                    <div className={styles['option-description']}>
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                            {value === item.value && (
                                < IconTick style={{ fontSize: 16, color: '#0f1418'}} />
                            )}
                        </div>
                    </Select.Option>
                ))}
                </Select.OptGroup>
            </Select>
        </>
    );
}