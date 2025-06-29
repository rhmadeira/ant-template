import { ButtonProps, Popconfirm } from "antd";
import ButtonCustom from "../button-custom";

export interface IPopConfirmProps {
  title: string;
  description: string;
  okText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onOpenChange: (open: boolean) => void;
  bntProps?: ButtonProps;
}

export default function ButtonCustomConfirm({
  title,
  description,
  onConfirm,
  cancelText,
  okText,
  onOpenChange,
  bntProps,
}: IPopConfirmProps) {
  return (
    <Popconfirm
      title={title}
      description={description}
      onConfirm={onConfirm}
      onOpenChange={onOpenChange}
      okText={okText || "Confirmar"}
      cancelText={cancelText || "Cancelar"}
    >
      <ButtonCustom
        children={bntProps?.children || "Confirmar"}
        type="primary"
        {...bntProps}
      />
    </Popconfirm>
  );
}
