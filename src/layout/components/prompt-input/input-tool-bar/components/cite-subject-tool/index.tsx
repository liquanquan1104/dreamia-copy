import BaseButton from '@/components/base-button';
import { Tooltip } from '@douyinfe/semi-ui';


export default function CiteSubjectTool() {
    return (
        <Tooltip content='引用参考'>
            <BaseButton  text='@ '/>
        </Tooltip>
    )
}