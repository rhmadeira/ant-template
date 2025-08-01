import { useAuthStore } from "@/data/stores/auth-store";
import { useThemeStore } from "@/data/stores/theme-store";
import CheckboxCustom from "@/shared/components/form/checkbox-custom";
import InputCustom from "@/shared/components/form/input-custom";
import LogoFull from "@/shared/components/logo/logo-full";
import { Button, Card, Col, Form, Row, Typography } from "antd";

export default function Login() {
  const theme = useThemeStore((state) => state.theme);
  const login = useAuthStore((state) => state.login);

  const [form] = Form.useForm<{
    email: string;
    password: string;
  }>();

  const handleSubmit = (values: { email: string; password: string }) => {
    // Simulate a login action
    console.log("Login values:", values);
    login("mockAccessToken"); // Replace with actual login logic
  };
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
      <Card>
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
            <Form
              form={form}
              name="login"
              layout="vertical"
              onFinish={handleSubmit}
              style={{ width: "100%" }}
              validateTrigger="onSubmit"
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Por favor, insira seu e-mail!",
                  },
                  {
                    type: "email",
                    message: "O e-mail inserido não é válido!",
                  },
                ]}
              >
                <InputCustom label="Email:" size="middle" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Por favor, insira sua senha!",
                  },
                ]}
              >
                <InputCustom label="Senha:" type="password" size="middle" />
              </Form.Item>
              <Form.Item>
                <CheckboxCustom label="Lembrar e-mail" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Entrar
                </Button>
              </Form.Item>
            </Form>
          </Row>
          <Typography>
            Não tem uma conta? entrar em contato com o administrador do sistema.
          </Typography>
        </Col>
      </Card>
    </Row>
  );
}
