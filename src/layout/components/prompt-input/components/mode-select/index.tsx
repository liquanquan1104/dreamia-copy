import { Select } from '@douyinfe/semi-ui';
import type { GenerateMode } from '@/types/constants';
import { MODE_OPTIONS } from '@/types/constants';
import useMode from '@/pages/home/hooks/useMode';
import style from './index.module.less'
import { IconElementStroked, IconUserCircleStroked, IconImageStroked, IconMusicNoteStroked, IconUserStroked, IconVideoDouyinStroked } from '@douyinfe/semi-icons';

const LOGO_MAP: Record<string, React.ReactNode> = {
    agent: <IconUserCircleStroked />,
    image: <IconImageStroked />,
    video: <IconVideoDouyinStroked />,
    digital_person: <IconUserStroked />,
    audio: <IconMusicNoteStroked />,
    action: <IconElementStroked />,
};

export default function ModeSelect() {
    const { mode, setMode } = useMode();

    const currentOption = MODE_OPTIONS.find(item => item.value === mode);

    const renderSelectedItem = () => (
        <div style={{ display: 'flex', alignItems: 'center', color: '#00a1c2' }}>
            {LOGO_MAP[mode]}
            <span style={{ marginLeft: 4, fontSize: 12 }}>{currentOption?.label}</span>
        </div>
    );

    const renderCustomOption = (item: { value: GenerateMode; label: string }) => {
        const optionStyle = {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: 14,
            paddingTop: 10,
            paddingBottom: 10,
        };
        return (
            <Select.Option value={item.value} style={optionStyle} key={item.value}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {LOGO_MAP[item.value]}
                    <div style={{ marginLeft: 5 }}>
                        {item.label}
                    </div>
                </div>
            </Select.Option>
        );
    };

    return (
        <Select
            value={mode}
            onChange={(value) => setMode(value as GenerateMode)}
            className={style['mode-select']}
            dropdownStyle={{ width: 200, borderRadius: 8 }}
            renderSelectedItem={renderSelectedItem}
        >
            <Select.OptGroup label="创作类型">
                {MODE_OPTIONS.map(item => (
                    renderCustomOption(item)
                ))}
            </Select.OptGroup>
        </Select>
    )
}