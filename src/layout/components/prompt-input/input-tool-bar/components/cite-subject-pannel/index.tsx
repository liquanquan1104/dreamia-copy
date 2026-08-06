import styles from './index.module.less';
import EmptyCiteSubject from '@/assets/subject-empty.svg';
import BaseButton from '@/components/base-button';
import { IconPlusStroked } from '@douyinfe/semi-icons';

interface CiteSubjectPannelProps {
    title?: string;
    subject?: string;
}

const baseCls = 'cite-subject-pannel';

export default function CiteSubjectPannel({ title, subject }: CiteSubjectPannelProps) {
    const renderEmpty = () => {
        return (
            <div className={styles[`${baseCls}-subject-empty`]}>
                <img src={EmptyCiteSubject} alt="暂无引用内容" />
                <div className={styles[`${baseCls}-subject-empty-desc`]}>你还没有创建过主体</div>
                <BaseButton text='创建主体' icon= {<IconPlusStroked />} />
            </div>
        )
    }
    return (
        <div className={baseCls}>
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