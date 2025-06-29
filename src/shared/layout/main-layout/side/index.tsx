import { Button, Col, Layout, Menu, Row } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useSideStore } from "@/data/stores/side-store";
import LogoFull from "@/shared/components/logo/logo-full";
import LogoShort from "@/shared/components/logo/logo-short";
import { useThemeStore } from "@/data/stores/theme-store";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "@/shared/constants/app-routes";
import { useEffect } from "react";

export default function Side() {
  const collapsed = useSideStore((state) => state.collapsed);
  const toggleCollapse = useSideStore((state) => state.toggleCollapse);
  const theme = useThemeStore((state) => state.theme);
  const navigate = useNavigate();
  const selectedKey = useSideStore((state) => state.selectedKey);
  const setSelectedKey = useSideStore((state) => state.setSelectedKey);

  const handleClickMenuItem = (key: string) => {
    navigate(`/${key}`);
    setSelectedKey([key]);
  };

  const menuItems = APP_ROUTES.filter((r) => r.showInSidebar).map((route) => ({
    key: route.path,
    icon: route.icon,
    label: route.label,
  }));

  useEffect(() => {
    const path = window.location.pathname;
    const matchedRoute = APP_ROUTES.find((r) => path.includes(r.path));
    if (matchedRoute) {
      setSelectedKey([matchedRoute.path]);
    }
  }, [setSelectedKey]);

  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        backgroundColor: "red",
      }}
    >
      <Button
        type="text"
        icon={
          collapsed ? (
            <RightOutlined
              style={{
                color: theme.token?.colorPrimary,
              }}
            />
          ) : (
            <LeftOutlined
              style={{
                color: theme.token?.colorPrimary,
              }}
            />
          )
        }
        onClick={toggleCollapse}
        style={{
          fontSize: "16px",
          position: "absolute",
          right: -15,
          top: 19,
          zIndex: 100,
          background: "#fff",
          border: "1px solid #d9d9d9",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
          borderRadius: 6,
        }}
        size="small"
      />
      <Layout.Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          boxShadow: "2px 0 8px rgba(0, 0, 0, 0.15)",
          zIndex: 2,
          height: "100%",
        }}
      >
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
          defaultOpenKeys={["menu"]}
          mode="inline"
          selectedKeys={selectedKey}
          onClick={({ key }) => handleClickMenuItem(key)}
          style={{
            marginTop: 30,
          }}
          items={[
            {
              key: "menu",
              label: "Menu",
              style: {
                fontWeight: "bold",
                fontSize: 16,
                textAlign: collapsed ? "center" : "left",
              },
              type: "group",
              children: menuItems,
            },
          ]}
        />
      </Layout.Sider>
    </div>
  );
}
