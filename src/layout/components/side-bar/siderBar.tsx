import style from './index.module.less'
import logo from '@/assets/logo.png'
import avatar from '@/assets/user_image.png'
import { IconHome, IconCrownStroked, IconShoppingBagStroked, IconEdit2Stroked, IconBellStroked, IconSmartphoneStroked, IconPaperclipStroked, IconCenterLeftStroked, IconPriceTag } from '@douyinfe/semi-icons';

export default function SiderBar(){
    return (
        <div className={style.sidebar}>
            {/* 顶部图标 */}
            <div className={style['top-icon']}>
                <img src={logo} alt="logo" />
            </div>
            {/* 中部菜单栏 */}
            <div className={style['nav-menu']}>
                <div className={style['nav-menu-item']}>
                    <IconHome className={style.icon} />
                    <span>灵感</span>
                </div>
                <div className={style['nav-menu-item']}>
                    <IconCrownStroked className={style.icon} />
                    <span>生成</span>
                </div>
                <div className={style['nav-menu-item']}>
                    <IconShoppingBagStroked className={style.icon} />
                    <span>资产</span>
                </div>
                <div className={style['nav-menu-item']}>
                    <IconEdit2Stroked className={style.icon} />
                    <span>画布</span>
                </div>
            </div>
            {/* 底部菜单栏 */}
            <div className={style['bottom-user-menu']}>
                <div className={style['vip-tip']}>
                    <div >
                        <IconPriceTag  className={style.icon} />
                        <span>54</span>
                    </div>
                    <span>开会员</span>
                </div>
                <div className={style['user-avatar']}>
                    <img src={avatar} alt="avatar" />
                </div>
                <IconBellStroked className={style['bottom-icon']} />
                <IconSmartphoneStroked className={style['bottom-icon']} />
                <IconPaperclipStroked className={style['bottom-icon']} />
                <IconCenterLeftStroked className={style['bottom-icon']} />

            </div>
        </div>
    );
}