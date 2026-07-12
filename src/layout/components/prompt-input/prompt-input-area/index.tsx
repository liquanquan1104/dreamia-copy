import style from './index.module.less'
import EmptyCard from '../components/resource-upload/empty-card'
import { IconSonicStroked } from '@douyinfe/semi-icons';
import ResourceCard from '../components/resource-upload/resource-card'
import { Upload } from '@douyinfe/semi-ui';
import { useState } from 'react';
import type { PromptModeConfig } from '../types';



// 简单定义 fileList 项的类型，避免导入问题
type FileItem = {
  uid: string;
  name: string;
  url?: string;
  status?: string;
  file?: File;
};

export default function PromptInputArea(props: { modeConfig: PromptModeConfig }) {
  const { modeConfig } = props;
  const [file, setFile] = useState<FileItem>();

  const handleChange = (data: { currentFile: FileItem; fileList: FileItem[] }) => {
    if (data.fileList.length > 0) {
      setFile(data.fileList[data.fileList.length - 1]);
    }
  };


  return (
    <div className={style['prompt-input-area']}>
      <div className={style['prompt-input-resource']}>
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
              toolTip='角色'
              text='角色'
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
      </div>
      <div className={style['prompt-input-content']}>
        {modeConfig.placeholder}
        {/* <EmptyCard
              toolTip='角色'
              text='角色'
              icon={<IconSonicStroked style={{fontSize: 16}} />}
            /> */}
      </div>
    </div>
  );
}
