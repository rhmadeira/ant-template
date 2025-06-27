import { SaveFilled } from "@ant-design/icons";
import { Button, Form, Row } from "antd";

interface IFormButtonGroupProps {
  clearDisabled?: boolean;
  loading?: boolean;
  onCancel?: () => void;
  onClear?: () => void;
  titleButtonSave?: string;
}

export default function FormButtonGroup({
  clearDisabled,
  loading,
  onCancel,
  onClear,
  titleButtonSave = "Salvar",
}: IFormButtonGroupProps) {
  const handleClear = () => {
    if (onClear) {
      onClear();
    }
  };
  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      window.history.back();
    }
  };
  return (
    <Row
      style={{
        display: "flex",
        justifyContent: "end",
        marginTop: 16,
        gap: 8,
      }}
    >
      <Form.Item noStyle>
        <Button type="default" onClick={handleClear} disabled={clearDisabled}>
          Limpar
        </Button>
      </Form.Item>
      <Form.Item>
        <Button type="default" onClick={handleCancel}>
          Cancelar
        </Button>
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          icon={<SaveFilled />}
        >
          {titleButtonSave}
        </Button>
      </Form.Item>
    </Row>
  );
}
