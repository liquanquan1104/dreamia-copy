import { Select, Tooltip } from '@douyinfe/semi-ui';
import styles from './index.module.less'
import { IconBytedanceLogo, IconChevronDownStroked, IconTick } from '@douyinfe/semi-icons';
import { useState } from 'react';

interface OptionRenderProps {
    label?: React.ReactNode;
    value?: string | number;
    selected?: boolean;
    disabled?: boolean;
    description?: string;
    img_url?: string;
    tag?: string[];
    onClick?: (e: React.MouseEvent) => void;
    onMouseEnter?: (e: React.MouseEvent) => void;
    style?: React.CSSProperties;
    className?: string;
    tooltip?: string | React.ReactNode;
    icon?: React.ReactNode;
}


export interface SelectOption {
    value: string ; // 选项值
    label: string; // 选项标签
    description?: string; // 选项描述
    tooltip?: string | React.ReactNode; // 选项提示
    tag?: string[]; // 选项标签
    img_url?: string; // 图标URL
    disabled?: boolean; // 是否禁用
    icon?: React.ReactNode; // 图标
    render?: (option: SelectOption) => React.ReactNode; // 自定义渲染函数
}

// 组件Props
export interface BaseSelectProps {
    options: SelectOption[];
    title?: string | React.ReactNode;
    withTitleDesc?: boolean;
    needArrowIcon?: boolean;
    value: string;
    onChange: (value: string) => void;
    mask?: boolean;
    onClickItem?: () => void; 
}

export default function BaseSelect({ 
    options, 
    value, 
    onChange, 
    title, 
    withTitleDesc, 
    mask = false, 
    onClickItem,
    needArrowIcon = false,
}: BaseSelectProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<string>(value);
    const renderSelectedItem = (optionNode: Record<string, unknown>) => {
        const option = optionNode as unknown as SelectOption;
        return (
            <div 
                className={styles['selected-item']} 
                style={mask ? { color: '#939597' } : undefined}
                onClick={onClickItem}
                >
                {option.icon ? option.icon : <IconBytedanceLogo style={{ fontSize: 16 }} />}
                <span style={{fontSize: 12}}>{option.label}</span>
                { needArrowIcon && ( isOpen ? <IconChevronDownStroked style={{ transform: 'rotate(180deg)', fontSize: 12 }} /> : <IconChevronDownStroked style={{ fontSize: 12 }} /> )}
            </div>
        );
    };

    const outSlotNode = (
        <div className={styles['out-slot']}>
            {title}
            {withTitleDesc && selectedValue && (
                <span>
                    {options.find(item => item.value === selectedValue)?.label}
                    <span> by </span>
                    {selectedValue}
                </span>
            )}
        </div>
    )

    const renderOptionItem = (props: OptionRenderProps) => {
        const { label, value: optionValue, selected, description, img_url, tag, onClick, tooltip, icon } = props;

        const handleItemClick = (e: React.MouseEvent) => {
            e.stopPropagation();
            setSelectedValue(String(optionValue));
            onClick?.(e);
            onClickItem?.();
        };

        const optionContent = (
            <div className={styles['option-item']} onClick={handleItemClick}>
                {img_url ? (
                    <div className={styles['option-img-container']}>
                        <img
                            src={String(img_url)}
                            alt={String(label)}
                            className={styles['option-img']}
                            style={{ filter: 'brightness(0)' }}
                        />
                    </div>
                ) : null}
                {icon ? icon : null}
                <div className={styles['option-text']}>
                    <div className={styles['option-label']}>
                        <span style={{fontSize: 12}}>{label}</span>
                        {tag && tag.map((item, index) => (
                            <span key={index} className={styles['tag']}>{item}</span>
                        ))}
                    </div>
                    {description && (
                        <div className={styles['option-description']}>
                            {description}
                        </div>
                    )}
                </div>
            </div>
        );

        return (
            <div className={styles['option-content']}>
                {tooltip ? (
                    <Tooltip content={tooltip} showArrow={false}>
                        {optionContent}
                    </Tooltip>
                ) : (
                    optionContent
                )}
                {selected && <IconTick style={{ fontSize: 16, color: '#0f1418' }} />}
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
                renderOptionItem={renderOptionItem}
                showArrow={false}
                onDropdownVisibleChange={(visible) => setIsOpen(visible)}
                outerTopSlot={title ? outSlotNode : null}
            >
                {options.map((item) => (
                    <Select.Option
                        key={item.value}
                        value={item.value}
                        label={item.label}
                        showTick={false}
                        description={item.description}
                        img_url={item.img_url}
                        tag={item.tag}
                        tooltip={item.tooltip}
                        icon={item.icon}
                    />
                ))}
            </Select>
        </>
    );
}