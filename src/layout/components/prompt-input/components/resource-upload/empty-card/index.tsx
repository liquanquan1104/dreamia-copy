import style from './index.module.less'
import { IconPlusStroked } from '@douyinfe/semi-icons';
import { Tooltip } from '@douyinfe/semi-ui';

interface EmptyCardProps {
  icon?: React.ReactNode;
  text?: string;
  toolTip?:string;
}

export default function EmptyCard({icon = <IconPlusStroked style={{fontSize: 16}} />, text, toolTip}: EmptyCardProps) {
  const content = (
    <div className={style['card']}>
       {icon}
       <div className={style['card-text']}>{text}</div>
    </div>
  )
  return toolTip ? <Tooltip content={toolTip} className={style['card-tooltip']} showArrow={false}>{content}</Tooltip> : content;
}