import { Row, Typography } from "antd";

export const LabelOptionItem = ({ title }: { title: string }) => (
  <Row style={{ cursor: "pointer", padding: "0.3rem 0.8rem" }}>
    <Typography.Text>{title}</Typography.Text>
  </Row>
);
