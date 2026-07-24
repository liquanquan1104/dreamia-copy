import style from './index.module.less'
import { IconArrowUp } from '@douyinfe/semi-icons';
import type {PromptModeConfig } from '../types'
import { renderTools } from './renderTools';
import VoiceRecongnizeButton from './components/voice-recongnize-button';
import BaseButton from '@/components/base-button';
import type { ImageSetting } from '../types';

type InputToolBarProps = {
  modeConfig: PromptModeConfig;
  imageSettings: ImageSetting;
  updateImageSettings: (partial: Partial<ImageSetting>) => void;
}

export default function InputToolBar(
  {modeConfig, imageSettings, updateImageSettings}: InputToolBarProps
) {

  return (
    <div className={style['input-tool-bar']}>
      <div className={style['input-tool-configure']}>
        <div className={style['core-configure']}>
           {modeConfig.toolbar.map((toolKey)=>(
            <span key={toolKey}>
              {renderTools(toolKey, { 
                imageSettings, 
                updateImageSettings 
              })}
            </span>
           ))}       
        </div>
         {modeConfig.rightActions.includes('mic') &&
          <VoiceRecongnizeButton />
         } 
         {
          modeConfig.rightActions.includes('imageCount') &&
           <BaseButton text='1张' />
         }
         {
          modeConfig.rightActions.includes('duration') && 
            <BaseButton text='4s' />
         }

      </div>
      <div className={style['send-button']}>
        <IconArrowUp className={style['send-icon']} />
      </div>
    </div>
  )
}