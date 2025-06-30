import { IBranchForm } from "@/data/services/branch/interface";
import FormContainer from "@/shared/components/form/form-container";
import { Col, Form, Row } from "antd";
import FormBranch from "../components/form-branch";
import HeaderPage from "@/shared/components/header";
import { useQuery } from "@tanstack/react-query";
import { branchService } from "@/data/services/branch";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function EditBranch() {
  const { id } = useParams<{ id: string }>();
  const [form] = Form.useForm<IBranchForm>();

  const branchById = useQuery({
    queryKey: ["branchById", id],
    queryFn: () => branchService.getById(id!),
    enabled: !!id,
  });

  useEffect(() => {
    if (branchById.data && branchById.isSuccess) {
      form.setFieldsValue({
        id: branchById.data.value.id,
        nome: branchById.data.value.nome,
        nomeFantasia: branchById.data.value.nomeFantasia,
        razaoSocial: branchById.data.value.razaoSocial,
        cnpj: branchById.data.value.cnpj,
      });
    }
  }, [branchById.data, branchById.isSuccess, form]);

  const handleSubmit = (values: IBranchForm) => {
    console.log("Form values submitted:", values);
  };
  return (
    <>
      <HeaderPage title="Editar filial" showSearch={false} showBack={true} />
      <Row
        style={{
          padding: 10,
          marginTop: -60,
        }}
      >
        <Col span={24}>
          <FormContainer
            form={form}
            header=""
            showButtonClose={false}
            onFinish={handleSubmit}
            notification={{}}
          >
            <FormBranch />
          </FormContainer>
        </Col>
      </Row>
    </>
  );
}
