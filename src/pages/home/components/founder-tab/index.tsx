import styles from './index.module.less';
import CustomCarousel from '@/components/custom-carousel';
import { ActivityImages, FounderPageImages } from '@/utils/resource';
import ImageCard from '../image-card'
import { useState, useEffect, useRef, useCallback } from 'react';

const imageList = (Object.values(ActivityImages) as { default: string }[])
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
        <div className={styles['founder-tab']}>
            <CustomCarousel
                imageList={imageList}
                className={styles['carousel']}
                extra={renderExtra}
            />
            {/* ✅ 关键：用 displayImageList 而非 founderImageList */}
            {displayImageList.map((image, index) => (
                <ImageCard
                    key={image}                          // ✅ 用图片 url 作为 key
                    imageUrl={image}
                    userAvatar={image}
                    userName={`用户${index}`}
                    likeCount={123}
                />
            ))}
            <div ref={loadRef} className={styles['load-more']}>
                {hasMore ? '加载中...' : '已经到底了'}
            </div>
        </div>
    )
}
