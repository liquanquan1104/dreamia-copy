import styles from './index.module.less';
import type { LayoutItem } from '@/hooks/useMasonryLayout';

type MasonryPositionProps<T> = {
    items: LayoutItem<T>[];
    containerHeight: number;
    renderItem: (item: T) => React.ReactNode;
}

export default function MasonryPosition<T>({items, containerHeight, renderItem}: MasonryPositionProps<T>) {
    return (
        <div className={styles['masonry-wrapper']} style={{height: `${containerHeight}px`}}>
            {items.map(item => (
                <div 
                    key={item.index} 
                    className={styles['masonry-item']}
                    style={{
                        left: `${item.left}px`,
                        top: `${item.top}px`,
                        width: `${item.width}px`,
                        height: `${item.height}px`,
                    }}>
                    {renderItem(item.item)}
                </div>
            ))}
        </div>
    );
}
