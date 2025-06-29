import { Form, Skeleton } from "antd";

interface IInputCustomSkeletonProps {
  label: string;
}
export default function InputCustomSkeleton({
  label,
}: IInputCustomSkeletonProps) {
  return (
    <Form.Item hasFeedback label={label}>
      <Skeleton.Input active block size="default" />
    </Form.Item>
  );
}
