import { Card, Form } from "antd";
import { UseFormReturn, FieldValues } from "react-hook-form";
import FormButtonGroup from "../form-button-group";

interface FormContainerProps<T extends FieldValues> {
  title: string;
  description?: string;
  form: UseFormReturn<T>;
  children: React.ReactNode;
  showButtons?: boolean;
  onCancel?: () => void;
  onClear?: () => void;
  onFinish: (values: T) => void;
}

export default function FormContainer<T extends FieldValues>({
  title,
  description,
  form,
  onFinish,
  children,
  onClear,
  showButtons = true,
  onCancel,
}: FormContainerProps<T>) {
  return (
    <Card>
      <Card.Meta title={title} description={description} />
      <Form
        layout="vertical"
        onFinish={form.handleSubmit(onFinish)}
        style={{ marginTop: 16 }}
      >
        {children}
        {showButtons && (
          <FormButtonGroup
            clearDisabled={!form.formState.isDirty}
            loading={form.formState.isSubmitting}
            onClear={onClear ?? (() => form.reset())}
            onCancel={onCancel ?? (() => form.reset())}
          />
        )}
      </Form>
    </Card>
  );
}
