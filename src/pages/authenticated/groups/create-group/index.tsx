import { Card, Form } from "antd";
import FormGroup from "../_components/form-group";
import { useForm } from "react-hook-form";
import { IGroupForm } from "@/data/services/group/interface";
import FormButtonGroup from "@/shared/components/form/form-button-group";
import { useNavigate } from "react-router-dom";

export default function CreateGroup() {
  const form = useForm<IGroupForm>();
  const navigate = useNavigate();

  const handleSubmit = (data: IGroupForm) => {
    console.log("Form Data:", data);
  };
  return (
    <Card>
      <Card.Meta
        title="Criar Grupo"
        description="Aqui você pode criar um novo grupo."
      />
      <Form
        layout="vertical"
        onFinish={form.handleSubmit(handleSubmit)}
        style={{ marginTop: 16 }}
      >
        <FormGroup form={form} />
        <FormButtonGroup
          clearDisabled={!form.formState.isDirty}
          loading={form.formState.isSubmitting}
          onClear={() => form.reset()}
          onCancel={() => navigate("/grupo")}
        />
      </Form>
    </Card>
  );
}
