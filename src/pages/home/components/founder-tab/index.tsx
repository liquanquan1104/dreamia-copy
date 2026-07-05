import styles from './index.module.less';
import CustomCarousel from '@/components/custom-carousel';
import { ActivityImages, FounderPageImages } from '@/utils/resource';
import ImageCard from '../image-card'
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import MasonryPosition from '@/components/masonry-position';
import useImageMetadata from '@/hooks/useImageMetadata';
import useColumnCount from '@/hooks/useColumnCount';
import type { FeedItem } from '@/types/image';
import useMasonryLayout from '@/hooks/useMasonryLayout';

// 轮播图图片
const CarouselImageList = (Object.values(ActivityImages) as { default: string }[])
    .slice(0, 5)
    .map((item) => item.default);

// 发现页卡片图片
const founderImageList = (Object.values(FounderPageImages) as { default: string }[]).map((item) => item.default);

const PAGE_SIZE = 5;

export default function FounderTab() {
    const [displayImageList, setDisplayImageList] = useState(founderImageList.slice(0, PAGE_SIZE));
    const loadingRef = useRef(false);
    const hasMore = displayImageList.length < founderImageList.length;
    const loadRef = useRef<HTMLDivElement>(null);
    // 加载图片元数据
    const imageMetaList = useImageMetadata(
        useMemo(
            () => Object.values(FounderPageImages) as { default: string }[],
            []
        )
    );
    // 加载轮播图图片元数据
    const carouselImageMetaList = useImageMetadata(
        useMemo(
            () => Object.values(ActivityImages) as { default: string }[],
            []
        )
    );

    // 加入轮播图图片
    const feedList: FeedItem[] = [
        {
            type: "hero",
            images: CarouselImageList,
            span: 2,
            height: carouselImageMetaList[0]?.height ?? 0,
            width: carouselImageMetaList[0]?.width ?? 0,
        },
        ...imageMetaList.map((item): FeedItem => ({
            type: "image",
            url: item.url,
            width: item.width,
            height: item.height,
        })),
    ];
    const FoundTabRef = useRef<HTMLDivElement>(null);
    const { columnCount, containerWidth } = useColumnCount(FoundTabRef);
    const gap = 2;
    const { layoutItems, containerHeight } = useMasonryLayout(feedList, containerWidth, columnCount, gap);

    // 用 useRef 锁防止重复触发（不依赖 state，避免循环）
    const loadMore = useCallback(() => {
        if (loadingRef.current || !hasMore) return;
        loadingRef.current = true;

        setDisplayImageList((prev) => {
            const next = founderImageList.slice(0, prev.length + PAGE_SIZE);
            return next;
        });

        // 模拟防抖，避免连续触发
        setTimeout(() => {
            loadingRef.current = false;
        }, 300);
    }, [hasMore]);


    // 可以抽象出一个函数，用于处理无限滚动逻辑
    useEffect(() => {
        if (!loadRef.current) return;
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    loadMore();
                }
            },
            { threshold: 0.1, rootMargin: '100px' }
        );
        observer.observe(loadRef.current);
        return () => observer.disconnect();
    }, [hasMore, loadMore]);

    // 渲染额外信息
    const renderExtra = (idx: number) => {
    const textMap = [
      '抖音 AI 创作大赛',
      '2026大学生AI艺术季·AI影像创作单元',
      'VITA SHORTS 2026：AI 短片竞赛单元征稿',
      '即梦AI 创作者成长计划·新视觉',
      '即梦AI 创作者成长计划·新影像'
    ];
    const attendMap = [2686, 468, 1617]
    return (
        <div className={styles['slogan']}>
            <div className={styles['slogan-title']}>
                {textMap[idx]}
            </div>
            {attendMap[idx] > 0 && <div className={styles['slogan-attend']}>
                已有{attendMap[idx]}人参与
            </div>}
        </div>
    );
  };

    return (
        <div className={styles['founder-tab']} ref={FoundTabRef}>
            <MasonryPosition
                items={layoutItems}
                containerHeight={containerHeight}
                renderItem={(item) => (
                    item.type === "hero" ? (
                        <CustomCarousel
                            imageList={item.images}
                            extra={renderExtra}
                        />
                    ) : (
                        <ImageCard
                            key={item.url}
                            imageUrl={item.url}
                            userAvatar={item.url}
                            userName={'用户'}
                            likeCount={123}
                        />
                    )
                )}
            />
        </div>
    );
}
