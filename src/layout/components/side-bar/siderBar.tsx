import style from './index.module.less'
import logo from '@/assets/logo.png'
import avatar from '@/assets/user_image.png'
import { IconHome, IconCrownStroked, IconShoppingBagStroked, IconEdit2Stroked, IconBellStroked, IconSmartphoneStroked, IconPaperclipStroked, IconCenterLeftStroked, IconPriceTag } from '@douyinfe/semi-icons';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@douyinfe/semi-ui-19';
import SideSheet from './components/sideSheet';
import { useState } from 'react';

export default function SiderBar(){
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    return (
        <div className={style.sidebar}>
            {/* 顶部图标 */}
            <div className={style['top-icon']}>
                <img src={logo} alt="logo" onClick={()=>navigate('/')} />
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
                <Tooltip 
                    content={
                        <div style={{ fontSize: 11}}>
                            还未开通会员&nbsp;&nbsp;
                            <span style={{color: '#10c0d5'}} onClick={()=>navigate('#')}>去开通</span>
                        </div>
                    }
                    position='right'>
                    <div className={style['vip-tip']}>
                    <div >
                        <IconPriceTag  className={style.icon} />
                        <span>54</span>
                    </div>
                    <span>开会员</span>
                </div>
                </Tooltip>
                <div className={style['user-avatar']}>
                    <img src={avatar} alt="avatar" />
                </div>
                <Tooltip content="消息中心" position='right'>
                    <IconBellStroked className={style['bottom-icon']} onClick={()=>setVisible(true)} />
                </Tooltip>
                <IconSmartphoneStroked className={style['bottom-icon']} />
                <Tooltip content="API调用" position='right'>
                    <IconPaperclipStroked className={style['bottom-icon']} />
                </Tooltip>
                <Tooltip content="更多设置" position='right'>
                    <IconCenterLeftStroked className={style['bottom-icon']} />
                </Tooltip>
                <SideSheet visible={visible} onCancel={()=>setVisible(false)} />
            </div>
        </div>
    );
}