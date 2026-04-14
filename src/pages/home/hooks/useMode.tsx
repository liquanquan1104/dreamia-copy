import {useSearchParams} from 'react-router-dom';
import type { GenerateMode } from '@/types/constants';

export default function useMode() {
  const [searchParams, setSearchParams] = useSearchParams();
  const mode = (searchParams.get('type') || 'image') as GenerateMode;
  const setMode = (newMode: GenerateMode) => {
    searchParams.set('type', newMode);
    setSearchParams(searchParams);
  }
  return { mode, setMode };
}
