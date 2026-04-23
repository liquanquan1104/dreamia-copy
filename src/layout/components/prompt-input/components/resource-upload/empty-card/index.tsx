import style from './index.module.less'
import { IconPlusStroked } from '@douyinfe/semi-icons';

interface EmptyCardProps {
  icon?: React.ReactNode;
  text?: string;
}

export default function EmptyCard({icon = <IconPlusStroked style={{fontSize: 16}} />, text}: EmptyCardProps) {
  return (
    <div className={style['card']}>
      {icon}
      <div className={style['card-text']}>{text}</div>
    </div>
  );
}