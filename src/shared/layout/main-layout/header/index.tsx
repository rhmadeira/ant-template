import { Layout, Row } from "antd";
import MenuOptions from "./menu-options";
import LogoMedium from "@/shared/components/logo/logo-medium";
import { useSideStore } from "@/data/stores/side-store";

export default function Header() {
  const collapsed = useSideStore((state) => state.collapsed);
  return (
    <Layout.Header
      style={{
        padding: 0,
        display: "flex",
        alignItems: "center",
        paddingRight: 16,
        paddingLeft: 16,
        zIndex: 1,
      }}
    >
      {collapsed && <LogoMedium width={120} />}
      <Row
        style={{
          flex: 1,
        }}
      />
      <MenuOptions />
    </Layout.Header>
  );
}
