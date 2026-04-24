import style from './index.module.less'
import { IconCrossStroked, IconSmallTriangleRight, IconPlusStroked } from '@douyinfe/semi-icons';

interface ResourceCardProps {
  tooltip?: string;
  playable?: boolean;
  addable?: boolean;
  src?: string;
  onClick?: () => void;
  onDelete?: () => void;
}

export default function ResourceCard(props: ResourceCardProps) {
  return (
    <div className={style['card-container']}>
      <div className={style['card']}>
        <img src={props.src} />
      
        <div className={style['delete-icon']}>
          <IconCrossStroked style={{fontSize: 8, color: '#fff'}} />
        </div>
        
      
      </div>
      {props.playable &&<div className={style['right-bottom-icon']}>
        <IconSmallTriangleRight style={{fontSize: 20}} />
      </div>}
      {props.addable &&<div className={style['right-bottom-icon']}>
        <IconPlusStroked style={{fontSize: 20}} />
      </div>}
      
    </div>
  );
}