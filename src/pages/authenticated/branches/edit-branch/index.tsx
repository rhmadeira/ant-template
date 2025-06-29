import { IBranchForm } from "@/data/services/branch/interface";
import FormContainer from "@/shared/components/form/form-container";
import { Col, Form, Row } from "antd";
import FormBranch from "../components/form-branch";
import HeaderPage from "@/shared/components/header";

export default function EditBranch() {
  const [form] = Form.useForm<IBranchForm>();

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
