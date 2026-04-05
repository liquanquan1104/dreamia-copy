import { Layout } from '@douyinfe/semi-ui-19';

export default function MainLayout(){
    const { Sider, Content } = Layout;
    return (
        <Layout className="components-layout-demo">
            <Sider style={{ width: '120px', background: 'var(--semi-color-fill-2)' }}>Sider</Sider>
            <Content style={{ height: 300, lineHeight: '300px' }}>Content</Content>
        </Layout>
    );
}