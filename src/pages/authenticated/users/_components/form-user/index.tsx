import InputCustom from "@/shared/components/form/input-custom";
import { Form } from "antd";
import CheckboxCustom from "@/shared/components/form/checkbox-custom";
import InputCustomSkeleton from "@/shared/components/form/input-custom-skeleton";

interface IFormUserProps {
  loading?: boolean;
}

export default function FormUser({ loading }: IFormUserProps) {
  return (
    <>
      {loading ? (
        <InputCustomSkeleton />
      ) : (
        <Form.Item hasFeedback label="Nome" name={"nome"}>
          <InputCustom />
        </Form.Item>
      )}

      <Form.Item hasFeedback name={"email"} label="Email">
        <InputCustom />
      </Form.Item>

      <Form.Item
        label="Admin"
        valuePropName="checked"
        name={"admin"}
        layout="horizontal"
      >
        <CheckboxCustom />
      </Form.Item>
    </>
  );
}
