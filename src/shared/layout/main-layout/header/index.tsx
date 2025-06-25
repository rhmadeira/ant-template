import { Layout, Row } from "antd";
import MenuOptions from "./menu-options";

export default function Header() {
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
      <Row
        style={{
          flex: 1,
        }}
      />
      <MenuOptions />
    </Layout.Header>
  );
}
