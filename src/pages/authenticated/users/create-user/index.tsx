import FormUser from "../_components/form-user";
import { IUserForm } from "@/data/services/user/interface";
import FormContainer from "@/shared/components/form/form-container";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/data/context/notification-context";
import { Form } from "antd";

export default function CreateUser() {
  const [form] = Form.useForm<IUserForm>();
  const navigate = useNavigate();
  const alert = useToast();

  const handleSubmit = (data: IUserForm) => {
    alert.open({
      type: "info",
      message: `Usuário ${data.nome} Criado`,
      description: "Você criou um novo usuário com sucesso.",
    });
  };

  return (
    <FormContainer
      header="Criar Usuário"
      description="Aqui você pode criar um novo usuário."
      form={form}
      onFinish={handleSubmit}
      onClose={() => navigate("/usuario")}
    >
      <FormUser />
    </FormContainer>
  );
}
