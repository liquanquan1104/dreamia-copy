import styles from './index.module.less';
import EmptyCiteSubject from '@/assets/subject-empty.svg';
import { Dropdown } from '@douyinfe/semi-ui'
import BaseButton from '@/components/base-button';
import { IconPlusStroked, IconCloudUploadStroked, IconImageStroked } from '@douyinfe/semi-icons';

interface CiteSubjectPannelProps {
    title?: string;
    subject?: string;
}

const baseCls = 'cite-subject-pannel';

export default function CiteSubjectPannel({ title, subject }: CiteSubjectPannelProps) {
    const renderDropdownItems = () => {
        return (
                <Dropdown.Menu style={{ width: 160 }}>
                        <Dropdown.Item icon={<IconCloudUploadStroked />} className={styles['dropdown-item']}>从本地添加</Dropdown.Item>
                        <Dropdown.Item icon={<IconImageStroked />} className={styles['dropdown-item']}>从资产添加</Dropdown.Item>
                    </Dropdown.Menu>
        )
    }
    const renderEmpty = () => {
        return (
            <div className={styles[`${baseCls}-subject-empty`]}>
                <img src={EmptyCiteSubject} alt="暂无引用内容" />
                <div className={styles[`${baseCls}-subject-empty-desc`]}>你还没有创建过主体</div>
                <Dropdown  
                    trigger='click'
                    position='top'
                    render={renderDropdownItems()}
                >
                    <BaseButton text='创建主体' icon= {<IconPlusStroked  style={{ fontSize: 15 }} />}/>
                </Dropdown>
            </div>
        )
    }
    return (
        <div className={styles[baseCls]}>
            <div className={styles[`${baseCls}-title`]}>{title}</div>
            {!subject ? 
                renderEmpty() :    
                <div className={styles[`${baseCls}-subject`]}>
                    {subject}
                </div>
            }
        </div>
    )
}