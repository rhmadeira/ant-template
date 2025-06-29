import FormUser from "../_components/form-user";
import { IUserForm } from "@/data/services/user/interface";
import FormContainer from "@/shared/components/form/form-container";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { EnumUserKey } from "@/shared/enums/keys";
import { userService } from "@/data/services/user";
import { useEffect } from "react";
import { Form } from "antd";

export default function EditUser() {
  const { id } = useParams<{ id: string }>();
  const [form] = Form.useForm<IUserForm>();
  const navigate = useNavigate();

  const userById = useQuery({
    queryKey: [EnumUserKey.getById, id],
    queryFn: () => userService.getById(id!),
    enabled: !!id,
  });

  useEffect(() => {
    if (userById.isSuccess && userById.data) {
      form.setFieldsValue({
        id: userById.data.value.id,
        nome: userById.data.value.nome,
        email: userById.data.value.email,
        admin: userById.data.value.admin,
      });
    }
  }, [userById.isSuccess, userById.data, form]);

  const handleSubmit = (data: IUserForm) => {
    console.log("🚀 ~ handleSubmit ~ data:", data);
  };

  return (
    <FormContainer
      header="Editar Usuário"
      description="Aqui você pode editar as informações do usuário selecionado."
      form={form}
      onFinish={handleSubmit}
      onClose={() => navigate("/usuario")}
      loading={userById.isPending}
      notification={{}}
    >
      <FormUser loading={userById.isPending} />
    </FormContainer>
  );
}
