import { ShortsVideos } from '@/utils/resource';
import userAvatar from '@/assets/user_image.png';
// import styles from './index.module.less';
import ShortsCard from '../shorts-card';
import Masonry, {  ResponsiveMasonry } from 'react-responsive-masonry';

const videoList = Object.values(ShortsVideos)  as { default: string }[];

export default function ShortsContent() {
    // const PAGE_SIZE = 10;
    return (
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
        {videoList.map((video, index) => (
          <ShortsCard
            key={index}
            avatar={userAvatar}
            userName="用户1"
            shorts={video.default}
            likes={100}
            duration="1:00"
            title="标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1"
            description="描述1述1述1述1述1述1述1述1述1述1述1述1述1述1述1述1述1述1述1述1述1"
          />
        ))}
      </Masonry>
        </ResponsiveMasonry>
    );
}
