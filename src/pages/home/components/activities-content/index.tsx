import ActivityCard from '../activity-card';
import { ActivityImages } from '@/utils/resource';
import styles from './index.module.less';
import { IconClock } from '@douyinfe/semi-icons';

const imageList = Object.values(ActivityImages) as { default: string }[];

export default function ActivitiesContent() {
    return (
        <div className={styles['activities-content']}>
            {imageList.map((image, index) => (
                <ActivityCard
                    key={index}
                    title="活动标题活动标题活动标题活动标题活动标题活动标题活动标题活动描述"
                    description="活动描述活动描述活动描述活动描述活动描述活动描述活动描述活动描述活动描述活动描述"
                    tag={
                        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                            <IconClock style={{ fontSize: 12 }} />
                            限时
                        </div> 
}
                    imageUrl={image.default}
                    extra="免费"
                    attend={100}
                />
            ))}
        </div>
    );
}
