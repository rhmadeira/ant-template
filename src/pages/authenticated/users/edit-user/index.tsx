import FormUser from "../_components/form-user";
import { useForm } from "react-hook-form";
import { IUserForm } from "@/data/services/user/interface";
import FormContainer from "@/shared/components/form/form-container";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { EnumUserKey } from "@/shared/enums/keys";
import { userService } from "@/data/services/user";
import { useEffect } from "react";
import { useToast } from "@/data/context/notification-context";

export default function EditUser() {
  const { id } = useParams<{ id: string }>();
  const form = useForm<IUserForm>();
  const navigate = useNavigate();
  const alert = useToast();

  const userById = useQuery({
    queryKey: [EnumUserKey.getById, id],
    queryFn: () => userService.getById(id!),
    enabled: !!id,
  });

  useEffect(() => {
    if (userById.isSuccess && userById.data) {
      form.reset({
        id: userById.data.value.id,
        nome: userById.data.value.nome,
        email: userById.data.value.email,
        admin: userById.data.value.admin,
        deleted: userById.data.value.deleted,
      });
    }
  }, [userById.isSuccess, userById.data, form]);

  const handleSubmit = (data: IUserForm) => {
    alert.openMutation({
      key: "edit-user",
      message: "Confirmação de Edição",
      description: "Você tem certeza que deseja editar este usuário?",
      onCancel: () => {
        console.log("Edição cancelada");
      },
      onSuccess: async () => {
        console.log("Edição confirmada", data);
      },
    });
  };

  return (
    <FormContainer
      title="Editar Usuário"
      description="Aqui você pode editar as informações do usuário selecionado."
      form={form}
      onFinish={handleSubmit}
      onCancel={() => navigate("/usuario")}
      loading={userById.isPending}
    >
      <FormUser form={form} loading={userById.isPending} />
    </FormContainer>
  );
}
