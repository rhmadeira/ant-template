import { useSideStore } from "@/data/stores/side-store";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout } from "antd";

export default function Header() {
  const collapsed = useSideStore((state) => state.collapsed);
  const toggleCollapse = useSideStore((state) => state.toggleCollapse);
  return (
    <Layout.Header style={{ padding: 0 }}>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={toggleCollapse}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
    </Layout.Header>
  );
}
