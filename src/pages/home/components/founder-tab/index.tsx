import styles from './index.module.less';
import CustomCarousel from '@/components/custom-carousel';
import { ActivityImages } from '@/utils/resource';
import ImageCard from '../image-card'

const imageList = (Object.values(ActivityImages) as { default: string }[])
    .slice(0, 5)
    .map((item) => item.default);

export default function FounderTab() {
    const renderExtra = (idx: number) => {
    const textMap = [
      '抖音 AI 创作大赛',
      '2026大学生AI艺术季·AI影像创作单元',
      'VITA SHORTS 2026：AI 短片竞赛单元征稿',
      '即梦AI 创作者成长计划·新视觉',
      '即梦AI 创作者成长计划·新影像'
    ];
    const attendMap = [2686, 468, 1617]
    return (
        <div className={styles['slogan']}>
            <div className={styles['slogan-title']}>
                {textMap[idx]}
            </div>
            {attendMap[idx] > 0 && <div className={styles['slogan-attend']}>
                已有{attendMap[idx]}人参与
            </div>}
        </div>
    );
  };
    return (
        <div className={styles['founder-tab']}>
            <CustomCarousel imageList={imageList} extra={renderExtra} />
            <ImageCard imageUrl={imageList[0]} userAvatar={imageList[0]} userName="用户1" likeCount={123} />
        </div>
    )
}
