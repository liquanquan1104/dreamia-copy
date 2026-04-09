import style from './index.module.less'
import logo from '@/assets/logo.png'
import avatar from '@/assets/user_image.png'
import photoHover from '@/assets/photo-hover.jpg'
import { IconHome, IconCrownStroked, IconShoppingBagStroked, IconEdit2Stroked, IconBellStroked, IconSmartphoneStroked, IconPaperclipStroked, IconCenterLeftStroked, IconPriceTag } from '@douyinfe/semi-icons';
import { useNavigate } from 'react-router-dom';
import { Button, Tooltip, Popover, Toast } from '@douyinfe/semi-ui';
import SideSheet from './components/sideSheet';
import { useState } from 'react';

export default function SiderBar(){
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    // const [popoverVisible, setPopoverVisible] = useState(false);
    const handlePopClick = async () => {
        try {
            await navigator.clipboard.writeText(
        'https://www.doubao.com/chat/38419250014698242?channel=gdt_sem'
        );
            Toast.success('复制成功');
            console.log('lqq 复制成功');
        } catch (e:unknown) {
            Toast.error('复制失败');
            console.error(e);
        }
    };
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
                <Popover
                    spacing={28}
                    content={
                        <div className={style['popover-box']}>
                            <div >
                                <img className={style['photo-box']} src={photoHover} alt="photo" />
                            </div>
                            <div className={style['title']}>
                                即梦AI APP上线啦！
                            </div>
                            <div className={style['desc']}>
                                扫码或者复制链接到手机端，在移动端继续展开AI创造之旅
                            </div>
                            <Button className={style['button']} onClick={handlePopClick}>复制链接</Button>
                        </div>
                    }
                    // visible={popoverVisible}
                    position='right'
                >
                    {/* content={
                        <div>
                            <div>互动</div> 420 * 230
                            <div>官方消息</div>  430 *400
                        </div>
                    } */}
                    <IconSmartphoneStroked className={style['bottom-icon']} />
                </Popover>
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