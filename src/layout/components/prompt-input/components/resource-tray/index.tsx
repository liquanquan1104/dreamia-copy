import EmptyCard from '../resource-upload/empty-card'
import { IconSonicStroked } from '@douyinfe/semi-icons';
import ResourceCard from '../resource-upload/resource-card'
import { Upload } from '@douyinfe/semi-ui';
import { useState } from 'react';
import type { UploadResourceConfig } from '../../types';


type ResourceTrayProps = {
  uploadConfig?: UploadResourceConfig;
}

// 简单定义 fileList 项的类型，避免导入问题
type FileItem = {
  uid: string;
  name: string;
  url?: string;
  status?: string;
  file?: File;
};

export default function ResourceTray(
    { uploadConfig }: ResourceTrayProps
) {
  const enableUpload = uploadConfig?.enable || false;
  const [file, setFile] = useState<FileItem>();

  const handleChange = (data: { currentFile: FileItem; fileList: FileItem[] }) => {
    if (data.fileList.length > 0) {
      setFile(data.fileList[data.fileList.length - 1]);
    }
  };

    return (
        enableUpload && (
        <Upload
          action="https://api.semi.design/upload"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          fileList={file ? [file] : [] as any}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={handleChange as any}
          showUploadList={false}
        >
          {!file ? (
            <EmptyCard
              toolTip={uploadConfig?.addLabel || uploadConfig?.slots?.[0] || ''}
              text={uploadConfig?.slots?.[0] || ''}
              icon={<IconSonicStroked style={{fontSize: 16}} />}
            />
          ) : (
            <ResourceCard
              src={file.url}
              onDelete={(event) => {
                event.stopPropagation();
                setFile(undefined);
              }}
              // addable={true}
              playable={true}
            />
          )}
        </Upload>
    ))
}