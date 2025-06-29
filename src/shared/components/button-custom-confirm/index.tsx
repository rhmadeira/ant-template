import { Button, ButtonProps, Popconfirm } from "antd";
import { useState } from "react";

export interface IPopConfirmProps {
  title: string;
  description: string;
  onConfirm: () => void;
  onBeforeConfirm?: () => Promise<boolean>;
  bntProps?: ButtonProps;
}

export default function ButtonCustomConfirm({
  title,
  description,
  onConfirm,
  bntProps,
  onBeforeConfirm,
}: IPopConfirmProps) {
  const [open, setOpen] = useState(false);

  const handleClick = async () => {
    if (onBeforeConfirm) {
      const canOpen = await onBeforeConfirm();
      if (canOpen) setOpen(true);
    } else {
      setOpen(true);
    }
  };

  return (
    <Popconfirm
      title={title}
      description={description}
      open={open}
      onConfirm={() => {
        onConfirm();
        setOpen(false);
      }}
      okText="Confirmar"
      cancelText="Cancelar"
    >
      <Button type="primary" {...bntProps} onClick={handleClick} />
    </Popconfirm>
  );
}
