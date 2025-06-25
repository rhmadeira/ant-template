import { useAuthStore } from "@/data/stores/auth-store";
import { useThemeStore } from "@/data/stores/theme-store";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Divider, Popover, Row, Typography } from "antd";
import { useState } from "react";

export default function MenuOptions() {
  const logout = useAuthStore((state) => state.logout);
  const theme = useThemeStore((state) => state.theme);
  const [open, setOpen] = useState(false);
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <Popover
      placement="bottomRight"
      // title="Bem vindo"
      content={
        <Row
          style={{
            width: 120,
          }}
        >
          <Typography.Title
            level={5}
            style={{
              margin: 0,
              paddingBottom: 8,
              textAlign: "center",
            }}
          >
            Bem vindo
          </Typography.Title>
          <Col span={24} style={{ marginBottom: 8, cursor: "pointer" }}>
            <UserOutlined style={{ marginRight: 8 }} />
            Usuário
          </Col>
          <Col
            span={24}
            style={{ marginBottom: 8, cursor: "pointer" }}
            onClick={() => {
              logout();
              setOpen(false);
            }}
          >
            <LogoutOutlined style={{ marginRight: 8 }} />
            Sair
          </Col>
          <Divider style={{ margin: "8px 0" }} />
          <Row justify="center">
            <Col>
              <Typography.Text
                style={{
                  fontSize: 12,
                  color: theme.token?.colorTextSecondary,
                }}
              >
                Versão 1.0.0
              </Typography.Text>
            </Col>
          </Row>
        </Row>
      }
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <Avatar
        style={{
          backgroundColor: theme.token?.colorPrimary,
          verticalAlign: "middle",
          cursor: "pointer",
          color: "#fff",
        }}
      >
        U
      </Avatar>
    </Popover>
  );
}
