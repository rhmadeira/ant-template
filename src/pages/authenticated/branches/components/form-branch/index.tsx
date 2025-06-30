import InputCustom from "@/shared/components/form/input-custom";
import { Form } from "antd";

// export interface IBranchForm {
//   id?: string;
//   nome: string;
//   cnpj: string;
//   razaoSocial: string;
//   nomeFantasia: string;
// }

export default function FormBranch() {
  return (
    <>
      <Form.Item name="id" label="ID" hidden={true}>
        <InputCustom />
      </Form.Item>
      <Form.Item
        name="nome"
        label="Nome"
        rules={[{ required: true, message: "Campo obrigatório" }]}
      >
        <InputCustom />
      </Form.Item>
      <Form.Item
        name="razaoSocial"
        label="Razão Social"
        rules={[{ required: true, message: "Campo obrigatório" }]}
      >
        <InputCustom />
      </Form.Item>

      <Form.Item name="nomeFantasia" label="Nome Fantasia">
        <InputCustom />
      </Form.Item>
      <Form.Item
        name="cnpj"
        label="CNPJ"
        rules={[{ required: true, message: "Campo obrigatório" }]}
      >
        <InputCustom />
      </Form.Item>
    </>
  );
}
