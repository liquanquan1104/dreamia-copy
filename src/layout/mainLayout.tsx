import type { ReactNode } from 'react'
import style from './mainLayout.module.less'
import Sidebar from '@/layout/components/side-bar/siderBar'
import { Banner } from '@douyinfe/semi-ui';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div>
    <div>
      <Banner 
        className={style['banner-info']}
        description="Seedance2.0 VIP现已支持1080P，生成内容更清晰、更细腻，订阅会员立即体验"
        icon={null}
        />
    </div>
    <div className={style.layout}>

      <Sidebar />
      <div className={style['main-content']}>
        {children}
      </div>
    </div>
    </div>
  )
}