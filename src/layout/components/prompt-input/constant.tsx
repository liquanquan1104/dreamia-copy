import type { SelectOption } from '@/components/base-select';
import type { RadioOption } from '@/components/base-radio-group';
import { IconIndenpentCornersStroked } from '@douyinfe/semi-icons';

export const ImageModelOptions: SelectOption[] = [
        {value: 'Seedream 5.0 Lite', label: '图片5.0 Lite', tag: ['new'], img_url: 'src/assets/sd20_avg.svg', description: '指令响应更精准，生成效果更智能'},
        {value: 'Seedream 4.6', label: '图片4.6', tag: ['new'], img_url: 'src/assets/sd20_avg.svg', description: '人像一致性保持更好，性价比更高'},
        {value: 'Seedream 4.5', label: '图片4.5', img_url: 'src/assets/sd20_avg.svg', description: '强化一致性，风格与图文响应'},
        {value: 'Seedream 4.0 Design', label: '图片4.1', img_url: 'src/assets/sd20_avg.svg', description: '更专业的创意、美学和一致性保持'},
        {value: 'Seedream 4.0', label: '图片4.0', img_url: 'src/assets/sd20_avg.svg', description: '支持多图参考、系列组图生成'},
        {value: 'Seedream 3.0', label: '图片3.1', img_url: 'src/assets/sd20_avg.svg', description: '丰富的美学多样性，画面更鲜明生动'},
        {value: 'Seedream 3.0.0', label: '图片3.0', img_url: 'src/assets/sd20_avg.svg', description: '影视质感，文字更准，直出2K高清图'},
           ]

export const imageScaleOptions: RadioOption[] = [
        { value: 'smart', label: '智能', icon: <IconIndenpentCornersStroked style={{fontSize: 15}}/> },
        { value: '21:9', label: '21:9', ratio: '21/9' },
        { value: '16:9', label: '16:9', ratio: '16/9' },
        { value: '3:2', label: '3:2', ratio: '3/2' },
        { value: '4:3', label: '4:3', ratio: '4/3' },
        { value: '1:1', label: '1:1', ratio: '1/1' },
        { value: '3:4', label: '3:4', ratio: '3/4' },
        { value: '2:3', label: '2:3', ratio: '2/3' },
        { value: '9:16', label: '9:16', ratio: '9/16' },
];


export const videoScaleOptions: RadioOption[] = [
        { value: 'smart', label: '智能', icon: <IconIndenpentCornersStroked style={{fontSize: 15}}/> },
        { value: '21:9', label: '21:9', ratio: '21/9' },
        { value: '16:9', label: '16:9', ratio: '16/9' },
        { value: '4:3', label: '4:3', ratio: '4/3' },
        { value: '1:1', label: '1:1', ratio: '1/1' },
        { value: '3:4', label: '3:4', ratio: '3/4' },
        { value: '9:16', label: '9:16', ratio: '9/16' },
    ]