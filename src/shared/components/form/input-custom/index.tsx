import { Input, InputProps, Typography } from "antd";

interface InputCustomProps extends InputProps {
  label?: string;
}

export default function InputCustom({ label, ...rest }: InputCustomProps) {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      {label && <Typography.Title level={5}>{label}</Typography.Title>}
      <Input size="middle" variant="outlined" width={"100%"} {...rest} />
    </div>
  );
}
