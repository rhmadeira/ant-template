import FormGroup from "../_components/form-group";
import { useForm } from "react-hook-form";
import { IGroupForm } from "@/data/services/group/interface";
import FormContainer from "@/shared/components/form/form-container";
import { useNavigate } from "react-router-dom";

export default function EditGroup() {
  const form = useForm<IGroupForm>();
  const navigate = useNavigate();

  const handleSubmit = (data: IGroupForm) => {
    console.log("Form Data:", data);
  };
  return (
    <FormContainer
      title="Editar Grupo"
      description="Aqui você pode editar as informações do grupo selecionado."
      form={form}
      onFinish={handleSubmit}
      onCancel={() => navigate("/grupo")}
    >
      <FormGroup form={form} />
    </FormContainer>
  );
}
