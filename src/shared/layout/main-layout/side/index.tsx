import { Col, Layout, Menu, Row } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { useSideStore } from "@/data/stores/side-store";
import LogoFull from "@/shared/components/logo/logo-full";
import LogoShort from "@/shared/components/logo/logo-short";

export default function Side() {
  const collapsed = useSideStore((state) => state.collapsed);
  console.log("🚀 ~ Side ~ collapsed:", collapsed);
  return (
    <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
      <Row
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 64,
        }}
      >
        {!collapsed ? (
          <Col
            style={{
              padding: 5,
              width: 150,
            }}
          >
            <LogoFull />
          </Col>
        ) : (
          <Col
            style={{
              padding: 5,
              width: 50,
            }}
          >
            <LogoShort />
          </Col>
        )}
      </Row>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "nav 1",
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: "nav 2",
          },
          {
            key: "3",
            icon: <UploadOutlined />,
            label: "nav 3",
          },
        ]}
      />
    </Layout.Sider>
  );
}
