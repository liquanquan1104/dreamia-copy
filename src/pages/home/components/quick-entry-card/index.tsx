import styles from './index.module.less'
import { IconChevronRight } from '@douyinfe/semi-icons';

type QuickEntryCardProps = {
  title: string;
  description: string;
  image: string;
  hoverTitle?: string;
  hoverDescription?: string;
  iconText?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export default function QuickEntryCard({ title, description, image, hoverTitle, hoverDescription, iconText, onClick, style = {} }: QuickEntryCardProps) {
  return (
    <div className={styles['entry-card']} style={style} onClick={onClick}>
      <div className={styles['default-content']}>
        <img src={image} alt={title} className={styles['entry-card-image']} />
        <div className={styles['entry-card-info']}>
            <div className={styles['entry-card-title']}>
                {title}
                {iconText && <span className={styles['icon-text']}>{iconText}</span>}
            </div>
            <div className={styles['entry-card-description']}>{description}</div>
        </div>
      </div>
      <div className={styles['hover-content']}>
        <div className={styles['hover-title']}>
            <span>{hoverTitle || title}</span>
            {iconText && <span className={styles['icon-text']}>{iconText}</span>}
            <IconChevronRight style={{fontSize: 14, color: '#72808a'}} />
        </div>
        <div className={styles['hover-description']}>{hoverDescription || description}</div>
      </div>
    </div>
  )
}


