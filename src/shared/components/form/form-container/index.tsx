import { Button, Card, Form } from "antd";
import { UseFormReturn, FieldValues } from "react-hook-form";
import FormButtonGroup from "../form-button-group";
import { CloseOutlined } from "@ant-design/icons";

interface FormContainerProps<T extends FieldValues> {
  title: string;
  description?: string;
  form: UseFormReturn<T>;
  children: React.ReactNode;
  loading?: boolean;
  showButtons?: boolean;
  onCancel?: () => void;
  onClear?: () => void;
  onFinish: (values: T) => void;
  onClose?: () => void;
}

export default function FormContainer<T extends FieldValues>({
  title,
  description,
  form,
  onFinish,
  children,
  loading = false,
  onClear,
  showButtons = true,
  onCancel,
  onClose,
}: FormContainerProps<T>) {
  return (
    <Card>
      <Card.Meta title={title} description={description} />
      <Button
        size="small"
        icon={<CloseOutlined />}
        style={{
          position: "absolute",
          top: 16,
          right: 16,
        }}
        onClick={onClose ?? onCancel}
      />
      <Form
        layout="vertical"
        onFinish={form.handleSubmit(onFinish)}
        style={{ marginTop: 16 }}
      >
        {children}
        {showButtons && (
          <FormButtonGroup
            clearDisabled={!form.formState.isDirty}
            loading={form.formState.isSubmitting || loading}
            onClear={onClear ?? (() => form.reset())}
            onCancel={onCancel ?? (() => form.reset())}
          />
        )}
      </Form>
    </Card>
  );
}
