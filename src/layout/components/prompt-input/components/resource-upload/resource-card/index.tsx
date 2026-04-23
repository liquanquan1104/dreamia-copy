import style from './index.module.less'
import { IconCrossStroked } from '@douyinfe/semi-icons';

interface ResourceCardProps {
  tooltip?: string;
  playable?: boolean;
  onClick?: () => void;
  onDelete?: () => void;
}

export default function ResourceCard(props: ResourceCardProps) {
  return (
    <div className={style['card']}>
      <img src='src/assets/animation_files/2a71c1fd93174e0b9509dd252e2388ae~tplv-tb4s082cfz-aigc_resize_loss_720_720.webp'  />
      <div className={style['overlay']}>
        <div className={style['delete-icon']}>
          <IconCrossStroked style={{fontSize: 8, color: '#fff'}} />
        </div>
        {props.playable && <div className={style['play-icon']}>
          播放
        </div>}
      </div>
    </div>
  );
}