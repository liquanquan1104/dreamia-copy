import ActivityCard from '../activity-card';

export default function ActivitiesContent() {
    return (
        <div>
            <ActivityCard title="活动标题" description="活动描述" tag="活动标签" imageUrl="https://example.com/activity-image.jpg" extra="免费" attend={100} />
        </div>
    )
}
