import { Button, Card, Form, FormInstance } from "antd";
import { FieldValues } from "react-hook-form";
import FormButtonGroup from "../form-button-group";
import { CloseOutlined } from "@ant-design/icons";
import { IPopConfirmProps } from "../../button-custom-confirm";

interface FormContainerProps<T extends FieldValues> {
  header: string;
  description?: string;
  form: FormInstance<T>;
  children: React.ReactNode;
  loading?: boolean;
  showButtons?: boolean;
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
  showButtons = true,
  onFinish,
  onClose,
  notification,
}: FormContainerProps<T>) {
  return (
    <Card>
      <Card.Meta title={header} description={description} />
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
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ marginTop: 16 }}
      >
        {children}
        {showButtons && (
          <FormButtonGroup
            clearDisabled={!form.getFieldError}
            loading={loading}
            onClear={() => form.resetFields()}
            onClose={onClose}
            notification={{
              ...notification,
              form,
            }}
          />
        )}
      </Form>
    </Card>
  );
}
