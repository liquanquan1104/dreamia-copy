export interface ImageItem {
    id: number;
    url: string;
    width: number;
    height: number;
    ratio: number;
}

export type FeedItem =
  | {
      type: "hero";
      images: string[];
      span: number;
      width: number;
      height: number;
    }
  | {
      type: "image";
      url: string;
      width: number;
      height: number;
    };