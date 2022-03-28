import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

const { Header, Content, Sider, Footer } = Layout;

export default function LayoutWrap() {
  return (
    <div>
      <Header>header</Header>
      <Sider>sider</Sider>
      <Content>
        content
        <Outlet />
      </Content>
      <Footer >footer</Footer >
    </div>
  )
}
