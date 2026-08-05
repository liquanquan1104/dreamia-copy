import style from './index.module.less'
import ResourceTray from '../components/resource-tray'
import type { PromptModeConfig, ImageSetting } from '../types';
import type { RefObject } from 'react';

interface PromptInputAreaProps {
    modeConfig: PromptModeConfig;
    imageSettings?: ImageSetting;
    updateImageSettings: (partial: Partial<ImageSetting>) => void;
    textareaRef?: RefObject<HTMLTextAreaElement | null>;
}

export default function PromptInputArea(props: PromptInputAreaProps) {
  const { modeConfig, imageSettings, updateImageSettings, textareaRef } = props;
  const uploadConfig = modeConfig.upload;

  return (
    <div className={style['prompt-input-area']}>
      {!!uploadConfig?.enable &&
      <div className={style['prompt-input-resource']}>
         <ResourceTray uploadConfig={uploadConfig} />
      </div>}
      <textarea
        ref={textareaRef}
        className={style['prompt-input-content']}
        value={imageSettings?.prompt ?? ''}
        placeholder={modeConfig.placeholder}
        onChange={(e) => updateImageSettings({ prompt: e.target.value })}
      />
    </div>
  );
}
