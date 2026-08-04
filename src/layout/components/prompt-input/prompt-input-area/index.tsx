import style from './index.module.less'
import ResourceTray from '../components/resource-tray'
import type { PromptModeConfig, ImageSetting } from '../types';

interface PromptInputAreaProps {
    modeConfig: PromptModeConfig;
    imageSettings?: ImageSetting;
    // updateImageSettings?: (partial: Partial<ImageSetting>) => void;
}

export default function PromptInputArea(props: PromptInputAreaProps) {
  const { modeConfig, imageSettings } = props;  
  const uploadConfig = modeConfig.upload;

  return (
    <div className={style['prompt-input-area']}>
      {!!uploadConfig?.enable &&
      <div className={style['prompt-input-resource']}>
         <ResourceTray uploadConfig={uploadConfig} />
      </div>}
      <div className={style['prompt-input-content']}>
        {imageSettings?.prompt || modeConfig.placeholder}
      </div>
    </div>
  );
}
