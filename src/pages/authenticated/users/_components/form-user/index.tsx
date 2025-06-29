import InputCustom from "@/shared/components/form/input-custom";
import { Form } from "antd";
import CheckboxCustom from "@/shared/components/form/checkbox-custom";
import InputCustomSkeleton from "@/shared/components/form/input-custom-skeleton";
import CheckboxCustomSkeleton from "@/shared/components/form/checkbox-custom-skeleton";

interface IFormUserProps {
  loading?: boolean;
}

export default function FormUser({ loading }: IFormUserProps) {
  return (
    <>
      {loading ? (
        <InputCustomSkeleton label="Nome" />
      ) : (
        <Form.Item
          hasFeedback
          label="Nome"
          name={"nome"}
          validateDebounce={100}
        >
          <InputCustom />
        </Form.Item>
      )}
      {loading ? (
        <InputCustomSkeleton label="Email" />
      ) : (
        <Form.Item
          hasFeedback
          name={"email"}
          label="Email"
          validateDebounce={100}
        >
          <InputCustom />
        </Form.Item>
      )}

      {loading ? (
        <CheckboxCustomSkeleton label="Admin" />
      ) : (
        <Form.Item
          label="Admin"
          valuePropName="checked"
          name={"admin"}
          layout="horizontal"
        >
          <CheckboxCustom />
        </Form.Item>
      )}
    </>
  );
}
