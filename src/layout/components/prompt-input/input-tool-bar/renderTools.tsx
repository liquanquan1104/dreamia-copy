import type {PromptToolKey} from '../types';
import ModeSelect from '../components/mode-select';
import AgentAutoTool from '../input-tool-bar/components/agent-auto-tool';




export function renderTools(toolKey: PromptToolKey) {
     
    switch (toolKey) {
        case 'mode':
            return <ModeSelect />
        case 'agentAuto':
            return (
                <AgentAutoTool />
            )
        default:
            return null
    }
}
