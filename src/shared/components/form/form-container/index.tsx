import { Card, Form } from "antd";
import { UseFormReturn, FieldValues } from "react-hook-form";
import FormButtonGroup from "../form-button-group";

interface FormContainerProps<T extends FieldValues> {
  title: string;
  description?: string;
  form: UseFormReturn<T>;
  onFinish: (values: T) => void;
  children: React.ReactNode;
  onClear?: () => void;
  showButtons?: boolean;
}

export default function FormContainer<T extends FieldValues>({
  title,
  description,
  form,
  onFinish,
  children,
  onClear,
  showButtons = true,
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
          />
        )}
      </Form>
    </Card>
  );
}
