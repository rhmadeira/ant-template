import FormGroup from "../_components/form-group";
import { IGroupForm } from "@/data/services/group/interface";
import FormContainer from "@/shared/components/form/form-container";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { EnumGroupKey } from "@/shared/enums/keys";
import { groupService } from "@/data/services/group";
import { useEffect } from "react";
import { Form } from "antd";

export default function EditGroup() {
  const { id } = useParams<{ id: string }>();
  const [form] = Form.useForm<IGroupForm>();
  const navigate = useNavigate();

  const groupById = useQuery({
    queryKey: [EnumGroupKey.getById, id],
    queryFn: () => groupService.getById(id!),
    enabled: !!id,
  });

  const groupMutate = useMutation({
    mutationFn: groupService.update,
  });

  const handleSubmit = (data: IGroupForm) => {
    groupMutate.mutate({
      id: data.id!,
      nome: data.nome,
      descricao: data.descricao,
    });
  };

  useEffect(() => {
    if (groupById.isSuccess && groupById.data.value) {
      form.setFieldsValue({
        id: groupById.data.value.id,
        nome: groupById.data.value.nome,
        descricao: groupById.data.value.descricao,
      });
    }
  }, [groupById.isSuccess, groupById.data, form]);

  return (
    <FormContainer
      header="Editar Grupo"
      description="Aqui você pode editar as informações do grupo selecionado."
      form={form}
      loading={groupById.isPending}
      onFinish={handleSubmit}
      onClose={() => navigate("/grupo")}
      notification={{}}
    >
      <FormGroup />
    </FormContainer>
  );
}
