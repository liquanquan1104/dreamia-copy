import QuickEntryCard from '@/pages/home/components/quick-entry-card';
import styles from './index.module.less'
import octcImg from '@/assets/octc.png'
import infiniteCanvasImg from '@/assets/infinite-canvas.png'
import AgentImg from '@/assets/agent模式.png'
import ImgGenerate from '@/assets/4-1.png'
import VideoGenerate from '@/assets/2-0.png'

export default function QuickEntryGroup() {
    return (
        <div className={styles['quick-entry-group']}>
            <QuickEntryCard image={octcImg} title='Octo' description='Vibe create，创作自然流动' style={{flex: '1.5'}} />
            <QuickEntryCard image={infiniteCanvasImg} title='无限画布' description='自由创作' style={{flex: 1}} />
            <QuickEntryCard image={AgentImg} title='Agent 模式' description='S2.0视频创作' style={{flex: 1}} hoverTitle='Seedance 2.0' hoverDescription='全能视频创作' />
            <QuickEntryCard image={ImgGenerate} title='生成图片' description='智能美学提升' style={{flex: 1}} hoverTitle='4.1智能美学' hoverDescription='即刻想象' />
            <QuickEntryCard image={VideoGenerate} title='视频生成' description='Seedance 2.0' style={{flex: 1}} 
            hoverTitle='Seedance 2.0' hoverDescription='即刻想象'/>
        </div>
    )
}
