import style from './index.module.less'
import ResourceTray from '../components/resource-tray'
import type { PromptModeConfig } from '../types';

export default function PromptInputArea(props: { modeConfig: PromptModeConfig }) {
  const { modeConfig } = props;  
  const uploadConfig = modeConfig.upload;

  return (
    <div className={style['prompt-input-area']}>
      {!!uploadConfig?.enable &&
      <div className={style['prompt-input-resource']}>
         <ResourceTray uploadConfig={uploadConfig} />
      </div>}
      <div className={style['prompt-input-content']}>
        {modeConfig.placeholder}
      </div>
    </div>
  );
}
