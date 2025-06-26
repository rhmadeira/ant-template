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
            margin: "8px 8px",
            padding: 0,
            minHeight: 280,
            // background: colorBgContainer,
            // borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
