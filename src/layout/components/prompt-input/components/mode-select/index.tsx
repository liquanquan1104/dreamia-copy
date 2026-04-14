import {Select } from '@douyinfe/semi-ui';
import type { GenerateMode } from '@/types/constants';
import { MODE_OPTIONS } from '@/types/constants';
import useMode from '@/pages/home/hooks/useMode';
import style from './index.module.less'


export default function ModeSelect() {
  const {mode, setMode} = useMode();
  return (
     <Select value={mode} onChange={(value) => setMode(value as GenerateMode)} className={style['mode-select']} dropdownStyle={{ width: 200 }}>
        <Select.OptGroup label="创作类型">
            {MODE_OPTIONS.map(item => (
                <Select.Option key={item.value} value={item.value} className={style['mode-select-option']}> {item.label}</Select.Option>
            ))}
        </Select.OptGroup>
    </Select>
  )
}