import FormGroup from "../_components/form-group";
import { useForm } from "react-hook-form";
import { IGroupForm } from "@/data/services/group/interface";
import FormContainer from "@/shared/components/form/form-container";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { EnumGroupKey } from "@/shared/enums/keys";
import { groupService } from "@/data/services/group";
import { useEffect } from "react";

export default function EditGroup() {
  const { id } = useParams<{ id: string }>();
  const form = useForm<IGroupForm>();
  const navigate = useNavigate();

  const groupById = useQuery({
    queryKey: [EnumGroupKey.getById, id],
    queryFn: () => groupService.getById(id!),
    enabled: !!id,
  });

  useEffect(() => {
    if (groupById.isSuccess && groupById.data) {
      form.reset({
        id: groupById.data.value.id,
        nome: groupById.data.value.nome,
        descricao: groupById.data.value.descricao,
      });
    }
  }, [groupById.isSuccess, groupById.data, form]);

  const handleSubmit = (data: IGroupForm) => {
    console.log("Form Data:", data);
  };
  return (
    <FormContainer
      title="Editar Grupo"
      description="Aqui você pode editar as informações do grupo selecionado."
      form={form}
      loading={groupById.isPending}
      onFinish={handleSubmit}
      onCancel={() => navigate("/grupo")}
    >
      <FormGroup form={form} />
    </FormContainer>
  );
}
