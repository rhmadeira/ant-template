import { Layout } from "antd";
import Side from "./side";
import Header from "./header";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

export default function MainLayout() {
  // const {
  //   token: { colorBgContainer, borderRadiusLG },
  // } = theme.useToken();

  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <Side />
      <Layout>
        <Header />
        <Content
          style={{
            padding: 0,
            overflow: "auto",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
