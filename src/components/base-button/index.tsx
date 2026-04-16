import { Button } from '@douyinfe/semi-ui';
import styles from './index.module.less';
import cls from 'classnames';
import { forwardRef } from 'react';

export interface BaseButtonProps {
    icon?: React.ReactNode; // 图标
    isChecked?: boolean; // 是否选中状态,选中的话图标上会加一个小勾
    text?: string; // 文本
    style?: React.CSSProperties; // 自定义样式
    onClick?: React.MouseEventHandler<HTMLButtonElement>; // 点击事件
    disabled?: boolean; // 是否禁用
    isActive?: boolean; // 是否激活状态
}

const BaseButton = forwardRef<HTMLDivElement, BaseButtonProps>(
  ({ icon, isChecked=false, text, style, onClick, disabled, isActive=true,}: BaseButtonProps, ref) => {
    return (
        <div ref={ref}>
        <Button 
          style={style} 
          className={cls(styles['base-button'], { [styles['button-active']]: isActive })}
          onClick={onClick}
          disabled={disabled}  
          >
            <div className={styles['content']}>
                <div className={styles['icon-wrapper']}>
                    {icon}
                    {isChecked && <span className={styles['check-icon']} >✓</span>}
                </div>
                {text && <span className={styles['text']}>{text}</span>}
            </div>
        </Button>
        </div>
    );
})

export default BaseButton;
