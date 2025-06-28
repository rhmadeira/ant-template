import FormUser from "../_components/form-user";
import { useForm } from "react-hook-form";
import { IUserForm } from "@/data/services/user/interface";
import FormContainer from "@/shared/components/form/form-container";
import { useNavigate } from "react-router-dom";

export default function EditUser() {
  const form = useForm<IUserForm>();
  const navigate = useNavigate();

  const handleSubmit = (data: IUserForm) => {
    console.log("Form Data:", data);
    // Here you would typically call your API to update the user
  };

  return (
    <FormContainer
      title="Editar Usuário"
      description="Aqui você pode editar as informações do usuário selecionado."
      form={form}
      onFinish={handleSubmit}
      onCancel={() => navigate("/usuario")}
    >
      <FormUser form={form} />
    </FormContainer>
  );
}
