import {  SideSheet as Drawer, Tabs, TabPane} from '@douyinfe/semi-ui';
// import { useEffect } from 'react';

export default function SideSheet({visible, onCancel}: {visible: boolean, onCancel: () => void}) {

    return (
        <Drawer
            visible={visible}
            title="消息中心"
            placement="left"
            onCancel={onCancel}
            closable={false}
            style={{ marginLeft: 76, borderRadius: '0 12px 12px 0', backgroundColor: '#f8f9fa', border: 'none', boxShadow: 'none' }}
            maskStyle={{ background: 'transparent' }}
        >
            <Tabs type='button'>
                <TabPane tab="互动" itemKey="interaction">
                    互动
                </TabPane>
                <TabPane tab="官方消息" itemKey="message">
                    官方消息
                </TabPane>
            </Tabs>
        </Drawer>
           );

}
