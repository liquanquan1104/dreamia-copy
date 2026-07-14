import { useState } from 'react';
import BaseButton from '@/components/base-button';
import { IconSearchStroked } from '@douyinfe/semi-icons';

export default function InspirationSearchButton() {
    const [isInspired, setIsInspired] = useState(false);
    return (

        <BaseButton
              text="灵感搜索"
              icon={<IconSearchStroked style={{fontSize: 15}} />}
              isChecked={isInspired}
              isActive={isInspired}
              onClick={() => setIsInspired(!isInspired)}/>
    )
}