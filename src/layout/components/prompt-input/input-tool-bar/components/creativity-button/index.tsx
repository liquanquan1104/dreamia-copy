import {  Popover } from '@douyinfe/semi-ui';
import { useState } from 'react';
import CreativityCard from '../creativity-card';
import {  IconLightningStroked } from '@douyinfe/semi-icons';
import BaseButton from '@/components/base-button';


export default function CreativityButton() {
    const [isCreative, setIsCreative] = useState(false);
    return (
        <Popover content={<CreativityCard />} position="top">
              <span>
              <BaseButton
              text="创意设计"
              icon={<IconLightningStroked style={{fontSize: 15}}/>}
              isChecked={isCreative}
              isActive={isCreative}
              onClick={() => setIsCreative(!isCreative)}/>
              </span>
             </Popover>
    )
}
