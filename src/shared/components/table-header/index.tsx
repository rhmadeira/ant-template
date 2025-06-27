import { Button, ButtonProps, Col, Row } from "antd";
import type { SearchProps } from "antd/es/input/Search";

interface ITableHeaderProps extends SearchProps {
  buttons?: ButtonProps[];
  buttonPositionEnd?: boolean;
}

export default function TableHeader({
  buttons,
  buttonPositionEnd = false,
}: ITableHeaderProps) {
  return (
    <Row>
      <Col
        style={{
          textAlign: buttonPositionEnd ? "end" : undefined,
          width: "100%",
        }}
      >
        {buttons?.map((button, index) => (
          <Button key={index} {...button} />
        ))}
      </Col>
    </Row>
  );
}
