import { useThemeStore } from "@/data/stores/theme-store";
import CheckboxCustom from "@/shared/components/form/checkbox-custom";
import InputCustom from "@/shared/components/form/input-custom";
import LogoFull from "@/shared/components/logo/logo-full";
import { Button, Col, Row, Typography } from "antd";

export default function Login() {
  const theme = useThemeStore((state) => state.theme);
  return (
    <Row
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(135deg, ${theme.token?.colorPrimary} 0%, #002766 100%)`,
      }}
    >
      <Row
        style={{
          paddingTop: 20,
          paddingBottom: 20,
          paddingLeft: 15,
          paddingRight: 15,
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          borderRadius: 8,
          width: "30%",
          height: "50%",
          backgroundColor: theme.token?.colorBgContainer,
        }}
      >
        <Col
          span={24}
          style={{
            padding: 20,
            display: "flex",
            gap: 10,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Row>
            <LogoFull width="200px" />
          </Row>
          <Row
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              width: "60%",
            }}
          >
            <Row>
              <Typography.Title
                level={3}
                style={{ margin: 0, color: theme.token?.colorPrimary }}
              >
                Bem vindo de volta
              </Typography.Title>
            </Row>
            <Row>
              <Typography.Text
                style={{
                  color: theme.token?.colorText,
                  fontWeight: 500,
                  fontSize: 16,
                  marginBottom: 50,
                }}
              >
                Faça login para continuar
              </Typography.Text>
            </Row>
            <InputCustom label="Email:" size="middle" />
            <InputCustom label="Senha:" type="password" size="middle" />
            <CheckboxCustom label="Lembrar e-mail" />
            <Button>Entrar</Button>
          </Row>
          <Typography>
            Não tem uma conta? entrar em contato com o administrador do sistema.
          </Typography>
        </Col>
      </Row>
    </Row>
  );
}
