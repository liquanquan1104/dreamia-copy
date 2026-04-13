import PromptInput from '../prompt-input'
import Heading from '../heading'
import style from './index.module.less'
import { useSearchParams } from 'react-router-dom';
import type { GenerateMode } from '@/types/constants';



export default function GeneralPanel() {
    const [searchParams, setSearchParams] = useSearchParams();
    const mode = (searchParams.get('type') || 'image') as GenerateMode;
    const setMode = (newMode: GenerateMode) => {
        searchParams.set('type', newMode);
        setSearchParams(searchParams);
    }
    
  return (
    <div className={style['general-panel']}>
        <Heading mode={mode} onChange={setMode} />
        <PromptInput />  
    </div>
  )
}