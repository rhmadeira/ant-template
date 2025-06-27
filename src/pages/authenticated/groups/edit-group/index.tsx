import FormGroup from "../_components/form-group";
import { useForm } from "react-hook-form";
import { IGroupForm } from "@/data/services/group/interface";
import FormContainer from "@/shared/components/form/form-container";

export default function EditGroup() {
  const form = useForm<IGroupForm>();

  const handleSubmit = (data: IGroupForm) => {
    console.log("Form Data:", data);
  };
  return (
    <FormContainer
      title="Editar Grupo"
      description="Aqui você pode editar as informações do grupo selecionado."
      form={form}
      onFinish={handleSubmit}
    >
      <FormGroup form={form} />
    </FormContainer>
  );
}
