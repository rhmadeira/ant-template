import { Form } from "antd";
import FormGroup from "../_components/form-group";
import { IGroupForm } from "@/data/services/group/interface";
import { useNavigate } from "react-router-dom";
import FormContainer from "@/shared/components/form/form-container";
import { useMutation } from "@tanstack/react-query";
import { groupService } from "@/data/services/group";

export default function CreateGroup() {
  const [form] = Form.useForm<IGroupForm>();
  const navigate = useNavigate();

  const groupMutate = useMutation({
    mutationFn: groupService.create,
  });

  const handleSubmit = (data: IGroupForm) => {
    groupMutate.mutate({
      nome: data.nome,
      descricao: data.descricao,
    });
  };

  return (
    <FormContainer
      header="Criar Grupo"
      description="Aqui você pode editar as informações do grupo selecionado."
      form={form}
      loading={groupMutate.isPending}
      onFinish={handleSubmit}
      onClose={() => navigate("/grupo")}
    >
      <FormGroup />
    </FormContainer>
  );
}
