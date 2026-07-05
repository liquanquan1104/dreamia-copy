import { ShortsVideos } from '@/utils/resource';
import userAvatar from '@/assets/user_image.png';
// import styles from './index.module.less';
import ShortsCard from '../shorts-card';
import Masonry, {  ResponsiveMasonry } from 'react-responsive-masonry';
import { useCallback, useEffect, useState, useRef  } from 'react';


const videoList = Object.values(ShortsVideos)  as { default: string }[];
const PAGE_SIZE = 5;

export default function ShortsContent() {
    const [page, setPage] = useState(1);
    const [displayVideos, setDisplayVideos] = useState(videoList.slice(0, PAGE_SIZE));
    const loadMoreRef = useRef<HTMLDivElement>(null);
    const hasMore = displayVideos.length < videoList.length;
    const loadMore = useCallback(() => {
        if (!hasMore) return;
        const nextPage = page + 1;
        const nextVideos = videoList.slice(0, nextPage * PAGE_SIZE);
        setDisplayVideos(nextVideos);
        setPage(nextPage);
    }, [hasMore, page]);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                loadMore();
            }
        }, {
            threshold: 0.1,
        });
        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }
        return () => {
            observer.disconnect();
        };
    }, [hasMore, loadMore]);
    return (
        <>
        <ResponsiveMasonry
            columnsCountBreakPoints={{
                0: 1,
                600: 2,
                900: 3,
                1200: 4,
                1600: 5,
            }}
        >
            <Masonry gutter="15px">
                {displayVideos.map((video, index) => (
                <ShortsCard
                    key={index}
                    avatar={userAvatar}
                    userName={`用户${index}`}
                    shorts={video.default}
                    likes={100}
                    duration="1:00"
                    title={`标题${index}`}
                    description="描述1述1述1述1述1述1述1述1述1述1述1述1述1述1述1述1述1述1述1述1述1"
            />
         ))}
        </Masonry>
    </ResponsiveMasonry>
    {/* 观察哨兵 */}
    {hasMore && (
        <div ref={loadMoreRef} >加载更多</div>
    )}
    {!hasMore && (
        <div>没有更多了</div>
    )}
    </>
    );
}
