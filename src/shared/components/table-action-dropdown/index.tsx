// src/shared/components/table-custom/table-action-dropdown.tsx
import { Button, Col, Dropdown } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";

type TableActionDropdownProps<T = unknown> = {
  value: T;
  items: (value: T) => MenuProps["items"];
  disabled?: boolean;
};

export default function TableActionDropdown<T>({
  value,
  items,
  disabled = false,
}: TableActionDropdownProps<T>) {
  return (
    <Col>
      <Dropdown
        disabled={disabled}
        trigger={["click"]}
        menu={{ items: items(value) }}
      >
        <Button>
          <MoreOutlined />
        </Button>
      </Dropdown>
    </Col>
  );
}
