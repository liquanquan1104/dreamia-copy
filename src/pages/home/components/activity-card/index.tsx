import styles from './index.module.less';
import { IconGift } from '@douyinfe/semi-icons';

type ActivityCardProps = {
  title: string;
  description: string;
  tag: string;
  imageUrl: string;
  extra?: string;
  attend?: number;
}

export default function ActivityCard(props: ActivityCardProps) {
  return (
    <div className={styles['activity-card']}>
      <div className={styles['activity-card-header']}>
        <img src={props.imageUrl} alt={props.title} />
      </div>

      <div className={styles['activity-card-content']}>
        <div className={styles['activity-card-title']}>
          {props.title}
        </div>
        <div className={styles['activity-card-desc']}>
          {props.description}
        </div>
        {props.extra && <div className={styles['activity-card-extra']}>
          <IconGift style={{fontSize: 14}}/>
          {props.extra}
        </div>}
        <div className={styles['activity-card-attend']}>
          已有{props.attend}人参与
        </div>
      </div>
    </div>
  );
}