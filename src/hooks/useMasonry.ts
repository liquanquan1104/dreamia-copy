import {useMemo} from 'react';
import type {FeedItem} from '../types/image';



export default function useMasonry<T>(
    items: T[],
    columnCount: number,
    getHeight: (item: T) => number,
) {
    
    return useMemo(() => {
        // 边界处理：columnCount=0（useColumnCount 初始）或 items 为空时直接返回空数组
        if (columnCount <= 0 || !items?.length) {
            return Array.from({ length: Math.max(columnCount, 0) }, () => [] as T[]);
        }
        const columns: T[][] = Array.from({ length: columnCount }, () => []);
        const columnHeights = new Array(columnCount).fill(0);
        for (const item of items) {
            if ((item as FeedItem).type === 'hero') {
                for (let i = 0; i < columnHeights.length; i++) {
                    columnHeights[i] = Math.max(...columnHeights);      
            };
            columns[0].push(item);
            console.log('lqq', columns);
            continue;
        }
            // 防御：Math.min(...[]) = Infinity，indexOf 返回 -1
            const minIndex = columnHeights.indexOf(Math.min(...columnHeights));
            if (minIndex === -1) break;
            columns[minIndex].push(item);
            columnHeights[minIndex] += getHeight(item) || 0;
        }
        return columns;

    }, [items, columnCount, getHeight])
    
}
