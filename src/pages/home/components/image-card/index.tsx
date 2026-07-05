import styles from './index.module.less';
import { IconHeartStroked, IconImageStroked, IconEdit2Stroked, IconLikeHeart } from '@douyinfe/semi-icons';
import { Tooltip } from '@douyinfe/semi-ui';
import { useState } from 'react';

interface ImageCardProps {
    imageUrl: string; // 图片 URL
    userAvatar: string; // 用户头像
    userName: string; // 用户名
    likeCount: number; // 点赞数
}

export default function ImageCard(props: ImageCardProps) {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(props.likeCount);
    const handleLikeClick = () => {
        setIsLiked(!isLiked);
        setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    }
    return (
        <div className={styles['image-card']}>
            <img src={props.imageUrl} alt={props.userName} />
            <div className={styles['image-card-info']}>
                <div className={styles['user-info']}>
                    <img src={props.userAvatar} alt={props.userName} />
                    <span className={styles['user-name']}>{props.userName}</span>
                </div>
                <div className={styles['operation']}>
                    <Tooltip content="做同款" showArrow={false} style={{ fontSize: 12 }}>
                        <IconEdit2Stroked style={{ fontSize: 17, padding: 6 }} className={styles['icon']} />
                    </Tooltip>
                    <Tooltip content="用作参考图" showArrow={false} style={{ fontSize: 12 }}>
                        <IconImageStroked style={{ fontSize: 16, padding: 6 }} className={styles['icon']} />
                    </Tooltip>
                    <div className={styles['like-info']}>
                        {isLiked ? (
                            <IconLikeHeart
                                onClick={handleLikeClick}
                                style={{ fontSize: 16, padding: 6, color: '#ff5b6b' }}
                                className={styles['like-icon-active']}
                            />
                        ) : (
                            <IconHeartStroked
                                onClick={handleLikeClick}
                                style={{ fontSize: 16, padding: 6 }}
                                className={styles['like-icon']}
                            />
                        )}
                        <span>{likeCount}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}