import { useRef } from 'react';
import styles from './index.module.less';
import { IconHeartStroked } from '@douyinfe/semi-icons';

type ShortsCardProps = {
    avatar: string;
    userName: string;
    shorts: string;
    likes: number;
    duration: string;
    title?: string;
    description?: string;
}

export default function ShortsCard(props: ShortsCardProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
        const video = videoRef.current;
        if (!video) return;
        video.play().catch(() => {
            // 浏览器自动播放策略可能拒绝，忽略错误
        });
    };

    const handleMouseLeave = () => {
        const video = videoRef.current;
        if (!video) return;
        video.pause();
        video.currentTime = 0; // 离开时重置到开头
    };

    return (
        <div className={styles['shorts-card']}>
            {/* 短片区域 */}
            <div
                className={styles['shorts-card-header']}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <video
                    ref={videoRef}
                    src={props.shorts}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                />
                {/* 用户信息区域 */}
                <div className={styles['user-info']}>
                    <img src={props.avatar} alt={props.userName} />
                    <span className={styles['user-name']}>{props.userName}</span>
                </div>
                {/* 点赞和时长区域 */}
                <div className={styles['like-info']}>
                    <span className={styles['like-count']}>
                        <IconHeartStroked style={{ fontSize: 13, marginRight: 4 }} />
                        <span>{props.likes}</span>
                    </span>
                    <span className={styles['duration']}>{props.duration}</span>
                </div>
            </div>
            {/* 标题和描述区域 */}
            <div className={styles['title-description']}>
                <div className={styles['title']}>{props.title}</div>
                <div className={styles['description']}>{props.description}</div>
            </div>
        </div>
    );
}
