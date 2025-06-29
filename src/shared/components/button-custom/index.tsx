import { Button, ButtonProps } from "antd";

interface IButtonCustomProps extends ButtonProps {
  label?: string;
}

export default function ButtonCustom({ label, ...rest }: IButtonCustomProps) {
  return <Button id={label} {...rest} />;
}
