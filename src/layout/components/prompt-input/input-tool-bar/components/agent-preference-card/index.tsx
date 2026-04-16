import BaseRadioGroup from '@/components/base-radio-group';

export default function AgentPreferenceCard() {
    return (
        <>
        <BaseRadioGroup
            options={[
                { value: '1', label: '选项1' },
                { value: '2', label: '选项2' },
            ]}
        />
        <div>111233242</div>
        </>
    
    )
}
