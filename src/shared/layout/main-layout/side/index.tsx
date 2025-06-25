import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { useSideStore } from "@/data/stores/side-store";

export default function Side() {
  const collapsed = useSideStore((state) => state.collapsed);
  return (
    <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
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
