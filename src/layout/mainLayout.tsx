import type { ReactNode } from 'react'
import style from './mainLayout.module.less'
import Sidebar from '@/layout/components/side-bar/siderBar'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className={style.layout}>
      <Sidebar />
      <div className={style['main-content']}>
        {children}
      </div>
    </div>
  )
}