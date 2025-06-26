import { IColumnVisibilityOption } from "@/data/hooks/column-visibility";
import { Checkbox, Col, Row, Typography } from "antd";

interface IColumnFilterProps {
  value: string[];
  options: IColumnVisibilityOption[];
  onChange: (value: string[]) => void;
}

export default function ColumnFilter({
  value,
  options,
  onChange,
}: IColumnFilterProps) {
  return (
    <Row>
      <Col span={24} style={{ marginBottom: 8 }}>
        <Typography.Text strong style={{ fontSize: 18 }}>
          Colunas:
        </Typography.Text>
      </Col>
      <Checkbox.Group
        value={value}
        onChange={(val) => onChange(val as string[])}
      >
        {options.map((option, index) => {
          if (option.disabled) {
            return (
              <Col span={24} key={index}>
                <Checkbox
                  value={option.value}
                  style={{ lineHeight: "32px", marginRight: 8 }}
                  disabled
                >
                  {option.label}
                </Checkbox>
              </Col>
            );
          }
          return (
            <Col span={24}>
              <Checkbox
                key={index}
                value={option.value}
                style={{ lineHeight: "32px", marginRight: 8 }}
              >
                {option.label}
              </Checkbox>
            </Col>
          );
        })}
      </Checkbox.Group>
    </Row>
  );
}
