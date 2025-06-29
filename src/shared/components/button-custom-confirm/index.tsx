import { Button, ButtonProps, Popconfirm } from "antd";

export interface IPopConfirmProps {
  title: string;
  description: string;
  onConfirm: () => void;
  bntProps?: ButtonProps;
}

export default function ButtonCustomConfirm({
  title,
  description,
  onConfirm,
  bntProps,
}: IPopConfirmProps) {
  return (
    <Popconfirm
      title={title}
      description={description}
      onConfirm={onConfirm}
      okText="Confirmar"
      cancelText="Cancelar"
    >
      <Button type="primary" {...bntProps} />
    </Popconfirm>
  );
}
