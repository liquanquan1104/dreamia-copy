 import style from './index.module.less'
 import EmptyCard from '../components/resource-upload/empty-card'
 import { IconSonicStroked } from '@douyinfe/semi-icons';
 import ResourceCard from '../components/resource-upload/resource-card'
 import {Upload} from '@douyinfe/semi-ui';
 
 export default function PromptInputArea() {
  return (
    <div className={style['prompt-input-area']}>
      <div className={style['prompt-input-resource']}>
        
        <ResourceCard />
      </div>
      <div className={style['prompt-input-content']}>
        Tiptap输入框
       <Upload action="https://api.semi.design/upload">
          <EmptyCard  
            toolTip='角色'
            text='角色' 
            icon={<IconSonicStroked style={{fontSize: 16}} />} />
       </Upload>
      </div>
    </div>
  )
 }