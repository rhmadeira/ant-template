import { Checkbox, CheckboxProps } from "antd";

interface CheckboxCustomProps extends CheckboxProps {
  label?: string;
}

export default function CheckboxCustom({
  label,
  ...rest
}: CheckboxCustomProps) {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Checkbox style={{ width: "100%" }} children={label} {...rest} />
    </div>
  );
}
