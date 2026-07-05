import { useState } from 'react';
import { Carousel } from '@douyinfe/semi-ui';
import styles from './index.module.less';

type CarouselProps = {
    imageList: string[];
    /**
     * 函数式 extra，根据当前激活的图片 index 返回定制内容
     * @param activeIndex 当前显示的图片下标（从 0 开始）
     */
    extra?: (activeIndex: number) => React.ReactNode;
    className?: string;
}

export default function CustomCarousel({ imageList, extra, className }: CarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={`${styles['custom-carousel']} ${className}`}>   
            <Carousel
                activeIndex={activeIndex}
                onChange={(current) => setActiveIndex(current)}
                indicatorPosition="right"
                arrowType="hover"
            >
                {imageList.map((image, index) => (
                    <img key={index} src={image} alt="" />
                ))}
            </Carousel>
            <div className={styles['carousel-extra']}>
                {extra?.(activeIndex)}
            </div>
        </div>
    );
}
