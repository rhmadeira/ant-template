import { Form, Skeleton } from "antd";

interface ICheckboxCustomSkeletonProps {
  label: string;
}

export default function CheckboxCustomSkeleton({
  label,
}: ICheckboxCustomSkeletonProps) {
  return (
    <Form.Item label={label}>
      <Skeleton.Button active size="default" />
    </Form.Item>
  );
}
