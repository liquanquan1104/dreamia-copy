import styles from './index.module.less';
import { IconHeartStroked, IconImageStroked, IconEdit2Stroked } from '@douyinfe/semi-icons';

interface ImageCardProps {
    imageUrl: string; // 图片 URL
    userAvatar: string; // 用户头像
    userName: string; // 用户名
    likeCount: number; // 点赞数
}

export default function ImageCard(props: ImageCardProps) {
    return (
        <div className={styles['image-card']}>
            <img src={props.imageUrl} alt={props.userName} />
            <div className={styles['image-card-info']}>
                <div className={styles['user-info']}>
                    <img src={props.userAvatar} alt={props.userName} />
                    <span className={styles['user-name']}>{props.userName}</span>
                </div>
                <div className={styles['operation']}>
                    <IconEdit2Stroked style={{ fontSize: 17, padding: 6 }} />
                    <IconImageStroked style={{ fontSize: 16, padding: 6 }} />
                    <div className={styles['like-info']}>
                        <IconHeartStroked style={{ fontSize: 16, padding: 6 }} />
                        <span>{props.likeCount}</span>
                    </div>  
                </div>
            </div>
        </div>
    );
}