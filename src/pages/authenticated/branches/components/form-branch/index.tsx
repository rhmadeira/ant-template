import InputCustom from "@/shared/components/form/input-custom";
import { Form } from "antd";

export default function FormBranch() {
  return (
    <>
      <Form.Item
        hasFeedback
        name={"nome"}
        label="Nome"
        rules={[{ required: true }]}
      >
        <InputCustom />
      </Form.Item>
    </>
  );
}
