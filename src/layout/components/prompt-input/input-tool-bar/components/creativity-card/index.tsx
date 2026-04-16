
import styles from './index.module.less';
import guideImage from '@/assets/creative-model-guide.webp';

export default function CreativityCard() {
    return (
        <div className={styles['creativity-card']}>
            <img className={styles['guide-image']} src={guideImage} alt="创意设计" />
            <div className={styles['guide-title']}>
                创意设计 · 一键产出高质量方案灵感
            </div>
            <div className={styles['guide-desc']}>
                描述你的设计需求，Agent即可生成多组创意方案，在海报与各类设计中表现更出色。
            </div>
        </div>
    )
}