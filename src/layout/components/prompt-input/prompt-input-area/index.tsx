 import style from './index.module.less'
 import EmptyCard from '../components/resource-upload/empty-card'
 import { IconSonicStroked } from '@douyinfe/semi-icons';
 import ResourceCard from '../components/resource-upload/resource-card'
 
 export default function PromptInputArea() {
  return (
    <div className={style['prompt-input-area']}>
      <div className={style['prompt-input-resource']}>
        <EmptyCard  text='角色' icon={<IconSonicStroked style={{fontSize: 16}} />} />
      </div>
      <div className={style['prompt-input-content']}>
        Tiptap输入框
        <ResourceCard />
      </div>
    </div>
  )
 }