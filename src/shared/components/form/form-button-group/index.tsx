import { SaveFilled } from "@ant-design/icons";
import { Button, Form, FormInstance, Row } from "antd";
import ButtonCustomConfirm, {
  IPopConfirmProps,
} from "../../button-custom-confirm";

export interface IRequiredApproval {
  form: FormInstance;
  title?: IPopConfirmProps["title"];
  description?: IPopConfirmProps["description"];
}

interface IFormButtonGroupProps {
  clearDisabled?: boolean;
  loading?: boolean;
  onClose?: () => void;
  onClear?: () => void;
  titleButtonSave?: string;
  notification?: IRequiredApproval;
}

export default function FormButtonGroup({
  clearDisabled,
  loading,
  onClose,
  onClear,
  notification,
  titleButtonSave = "Salvar",
}: IFormButtonGroupProps) {
  const { description, form, title } = notification || {};

  const handleClear = () => {
    if (onClear) {
      onClear();
    }
  };
  const handleCancel = () => {
    if (onClose) {
      onClose();
    } else {
      window.history.back();
    }
  };
  const handleSubmit = () => {
    if (form) {
      form.submit();
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
        <Button
          type="default"
          onClick={handleClear}
          disabled={clearDisabled || loading}
        >
          Limpar
        </Button>
      </Form.Item>
      <Form.Item>
        <Button disabled={loading} type="default" onClick={handleCancel}>
          Cancelar
        </Button>
      </Form.Item>
      <Form.Item>
        {notification ? (
          <ButtonCustomConfirm
            title={title || "Salvar"}
            description={
              description || "Você tem certeza que deseja salvar as alterações?"
            }
            onConfirm={handleSubmit}
            bntProps={{
              htmlType: "button",
              children: titleButtonSave,
              loading: loading,
              icon: <SaveFilled />,
            }}
          />
        ) : (
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            icon={<SaveFilled />}
          >
            {titleButtonSave}
          </Button>
        )}
      </Form.Item>
    </Row>
  );
}
