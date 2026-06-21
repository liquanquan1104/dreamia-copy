import { Button, Input, Tabs, TabPane } from '@douyinfe/semi-ui';
import styles from './index.module.less';
import { IconSearch } from '@douyinfe/semi-icons';

export default function MainNav() {
    return (
        <div className={styles['main-nav']}>
            <Tabs 
                type="button" 
                tabBarExtraContent={
                    <Input 
                        placeholder="印章制作" 
                        prefix={<IconSearch style={{fontSize: 14}}/>} 
                        className={styles['search-input']} 
                        style={{ float: 'left'}}
                        suffix={
                            <Button type="primary" className={styles['search-button']}>搜索</Button>
                        }
                        />
                }
            >
                <TabPane tab="发现" itemKey="found">
                    发现
                </TabPane>
                <TabPane tab="短片" itemKey="shorts">
                    短片
                </TabPane>
                <TabPane tab="活动" itemKey="activity">
                    活动
                </TabPane>
            </Tabs>
        </div>
    )
}