import { Button } from '@douyinfe/semi-ui';
import style from './index.module.less'

export interface BaseButtonProps {
    icon?: React.ReactNode; // 图标
    text?: string; // 文本
    style?: React.CSSProperties; // 自定义样式
    onClick?: React.MouseEventHandler<HTMLButtonElement>; // 点击事件
    disabled?: boolean; // 是否禁用

}

export default function BaseButton(props: BaseButtonProps) {
    return (
        <Button icon={props.icon}  style={{ ...props.style }} className={style['base-button']}>{props.text}</Button>
    );
}