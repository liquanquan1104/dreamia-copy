import { useMemo } from "react";
import type {FeedItem} from '../types/image';

export type LayoutItem<T> = {
    index: number;
    item: T;
    left: number;
    top: number;
    width: number;
    height: number;
}

// 给 T 加约束：必须有 width/height 字段
// 这样 item.width / item.height 就有类型保证
export default function useMasonryLayout<T extends { width: number; height: number }>(
    items: T[],
    containerWidth: number,
    columnCount: number,
    gap: number,
) {
    return useMemo(()=> {
        // 边界处理：返回统一类型 { layoutItems, containerHeight }
        if (columnCount <= 0 || !items?.length || containerWidth <= 0) {
            return { layoutItems: [] as LayoutItem<T>[], containerHeight: 0 };
        }

        const layoutItems: LayoutItem<T>[] = [];
        const columnWidth = (containerWidth - (columnCount - 1) * gap) / columnCount;
        const columnHeights = new Array(columnCount).fill(0);
        let index = 0;
        for (const item of items) {
            if ((item as unknown as FeedItem).type === 'hero') {
                // hero 类型单独处理：单独类型断言后访问 width/height/span
                const hero = item as unknown as { width: number; height: number; span?: number };
                const left = 0;
                const top = 0;
                // hero 跨 N 列时，宽度应为 N 个 columnWidth + (N-1) 个 gap
                // 否则 hero 右边到下一列的间距会变成 (N) * gap
                const span = hero.span ?? columnCount;
                const width = columnWidth * span + gap * (span - 1);
                const height = width * (hero.height / hero.width);
                layoutItems.push({
                    index: index++,
                    item,
                    left,
                    top,
                    width,
                    height,
                });
                for (let i = 0; i < Math.min(span, columnCount); i++) {
                    columnHeights[i] = height + gap;
                }
                continue;
            }
            const minIndex = columnHeights.indexOf(Math.min(...columnHeights));
            if (minIndex === -1) break;
            const left = minIndex *( columnWidth + gap);
            const top = columnHeights[minIndex];
            const width = columnWidth;
            const height = columnWidth * (item.height / item.width);
            layoutItems.push({
                index: index++,
                item,
                left,
                top,
                width,
                height,
            });
            columnHeights[minIndex] += height + gap;
        }
        const containerHeight = Math.max(...columnHeights);
        return {layoutItems, containerHeight};


    }, [items, containerWidth, columnCount, gap])
}
