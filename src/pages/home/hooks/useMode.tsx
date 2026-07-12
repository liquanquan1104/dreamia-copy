import {useSearchParams} from 'react-router-dom';
import type { GenerateMode } from '@/types/constants';
import { MODE_OPTIONS } from '@/types/constants'; 



export default function useMode() {
  const [searchParams, setSearchParams] = useSearchParams();
  const rawMode = searchParams.get('type');
  const mode = MODE_OPTIONS.some((item) => item.value === rawMode) ? rawMode as GenerateMode : 'image';
  const setMode = (newMode: GenerateMode) => {
    searchParams.set('type', newMode);
    setSearchParams(searchParams);
  }
  return { mode, setMode };
}
