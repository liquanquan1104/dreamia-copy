import type { ImageItem } from '@/types/image';
import { useState, useEffect } from 'react';

export default function useImageMetadata(images: {default: string}[]) {
    const [imageList, setImageList] = useState<ImageItem[]>([]);

    const loadImageSize = (url: string): Promise<ImageItem> => {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                // ✅ 必须在 onload 内读取，此时 naturalWidth/naturalHeight 才有值
                const width = img.naturalWidth;
                const height = img.naturalHeight;
                resolve({
                    id: 0,
                    url,
                    width,
                    height,
                    ratio: width / height || 1,
                });
            };
            img.onerror = () => {
                resolve({
                    id: 0,
                    url,
                    width: 1,
                    height: 1,
                    ratio: 1,
                });
            };
            img.src = url;
        });
    }

    useEffect(() => {
        if (!images.length) return;
        const run = async () => {
            const promises = images.map((item) => loadImageSize(item.default));
            const results = await Promise.all(promises);
            const finalResult = results.map((item, index) => {
                return {
                    ...item,
                    id: index
                };
            });
            setImageList(finalResult);
        };
        run();
    }, [images]);

    return imageList;
}
