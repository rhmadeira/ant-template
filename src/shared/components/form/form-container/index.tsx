import { Button, Card, Form, FormInstance, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { CloseOutlined, SaveFilled } from "@ant-design/icons";
import ButtonCustomConfirm, {
  IPopConfirmProps,
} from "../../button-custom-confirm";
import { useEffect, useState } from "react";

interface FormContainerProps<T extends FieldValues> {
  header: string;
  description?: string;
  form: FormInstance<T>;
  children: React.ReactNode;
  showButtonClose?: boolean;
  loading?: boolean;
  onFinish: (values: T) => void;
  onClose?: () => void;
  notification?: {
    title?: IPopConfirmProps["title"];
    description?: IPopConfirmProps["description"];
  };
}

export default function FormContainer<T extends FieldValues>({
  header,
  description,
  form,
  children,
  loading = false,
  onFinish,
  onClose,
  notification,
  showButtonClose = true,
}: FormContainerProps<T>) {
  const [hasErrors, setHasErrors] = useState(false);

  const handleClear = () => {
    form.resetFields();
    setHasErrors(false);
  };
  const handleCancel = () => {
    if (onClose) {
      onClose();
    } else {
      window.history.back();
    }
  };
  const handleSubmit = () => {
    if (form) {
      form.submit();
    }
  };

  useEffect(() => {
    const checkErrors = () => {
      const errors = form.getFieldsError();
      const hasAnyErrors = errors.some((field) => field.errors.length > 0);
      setHasErrors(hasAnyErrors);
    };

    const interval = setInterval(checkErrors, 300);

    return () => clearInterval(interval);
  }, [form]);

  return (
    <Card>
      <Card.Meta title={header} description={description} />
      {showButtonClose && (
        <Button
          size="small"
          icon={<CloseOutlined />}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
          }}
          onClick={onClose}
        />
      )}
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ marginTop: 16 }}
      >
        {children}
        <Row
          style={{
            display: "flex",
            justifyContent: "end",
            marginTop: 16,
            gap: 8,
          }}
        >
          <Form.Item noStyle>
            <Button type="default" onClick={handleClear}>
              Limpar
            </Button>
          </Form.Item>
          <Form.Item>
            <Button disabled={loading} type="default" onClick={handleCancel}>
              Cancelar
            </Button>
          </Form.Item>
          <Form.Item>
            {notification && (
              <ButtonCustomConfirm
                title={notification.title || "Salvar"}
                description={
                  notification.description ||
                  "Você tem certeza que deseja salvar as alterações?"
                }
                onConfirm={handleSubmit}
                onBeforeConfirm={async () => {
                  try {
                    await form?.validateFields();
                    return true;
                  } catch {
                    return false;
                  }
                }}
                bntProps={{
                  htmlType: "button",
                  children: "Salvar",
                  loading: loading,
                  icon: <SaveFilled />,
                  disabled: hasErrors,
                }}
              />
            )}
            {!notification && (
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                icon={<SaveFilled />}
                children={"Salvar"}
              />
            )}
          </Form.Item>
        </Row>
      </Form>
    </Card>
  );
}
