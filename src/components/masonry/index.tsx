import useMasonry from '@/hooks/useMasonry';
import styles from './index.module.less';

type MasonryProps<T> = {
    items: T[];
    columnCount: number;
    getHeight: (item: T) => number;
    renderItem: (item: T, index: number) => React.ReactNode;
}


export default function Masonry<T>(
    { items, columnCount, getHeight, renderItem }: MasonryProps<T>
) {
    const columns = useMasonry(items, columnCount, getHeight);

    return (
        <div className={styles.masonry}>
            {columns.map((col, colIndex) => (
                <div className={styles.column} key={colIndex}>
                    {col.map((item, index) => renderItem(item, index))}
                </div>
            ))}
        </div>
    );
}
