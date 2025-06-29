import InputCustom from "@/shared/components/form/input-custom";
import InputCustomSkeleton from "@/shared/components/form/input-custom-skeleton";
import { Form } from "antd";

interface IFormGroupProps {
  loading?: boolean;
}

export default function FormGroup({ loading }: IFormGroupProps) {
  return (
    <>
      <Form.Item name="id" hidden>
        <InputCustom />
      </Form.Item>
      {loading ? (
        <InputCustomSkeleton label="Nome" />
      ) : (
        <Form.Item
          hasFeedback
          label="Nome"
          name="nome"
          rules={[
            { required: true, message: "O nome é obrigatório." },
            { max: 50, message: "O nome deve ter no máximo 50 caracteres." },
            { min: 3, message: "O nome deve ter no mínimo 3 caracteres." },
          ]}
          required
          validateDebounce={100}
          validateTrigger={["onBlur"]}
        >
          <InputCustom />
        </Form.Item>
      )}
      {loading ? (
        <InputCustomSkeleton label="Descrição" />
      ) : (
        <Form.Item
          hasFeedback
          label="Descrição"
          name="descricao"
          rules={[
            { required: true, message: "A descrição é obrigatória." },
            {
              max: 200,
              message: "A descrição deve ter no máximo 200 caracteres.",
            },
            { min: 3, message: "A descrição deve ter no mínimo 3 caracteres." },
          ]}
          required
          validateDebounce={100}
          validateTrigger={["onBlur"]}
        >
          <InputCustom />
        </Form.Item>
      )}
    </>
  );
}
