import BaseButton from '@/components/base-button';
import { Popover, Tooltip } from '@douyinfe/semi-ui';
import CiteSubjectPannel from '../cite-subject-pannel';


export default function CiteSubjectTool() {
    return (
        <Popover
            content={<CiteSubjectPannel title='可能@的内容' />}
             trigger="click"
        >
            <span>
                <Tooltip content='引用参考'>
                    <BaseButton text='@ '/>
                </Tooltip>
            </span>
        </Popover>
    )
}