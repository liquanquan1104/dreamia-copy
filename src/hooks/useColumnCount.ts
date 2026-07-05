import { useState, useEffect } from 'react';

// 阈值调整：针对 main-nav max-width: 1000px 的实际场景
// Tabs 内部 padding 会让 founder-tab 实际宽度比 main-nav 少 30-50px
const getColumnCount = (width: number) => {
    if (!width) return 0;
    if (width < 500) return 2;
    if (width < 750) return 3;
    if (width < 1000) return 4;
    return 5;
};

export default function useColumnCount(containerRef: React.RefObject<HTMLDivElement | null>) {
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        const element = containerRef.current;
        if (!element) return;

        // 初始计算
        setContainerWidth(element.clientWidth);

        // 监听容器尺寸变化
        const resizeObserver = new ResizeObserver((entries) => {
            const width = entries[0].contentRect.width;
            setContainerWidth(width);
        });
        resizeObserver.observe(element);

        return () => {
            resizeObserver.disconnect();
        };
    }, [containerRef]);

    return {
        columnCount: getColumnCount(containerWidth),
        containerWidth,
    };
}
