import { Table, TableProps } from "antd";

interface ITableCustomProps extends TableProps {
  test?: string;
}

export default function TableCustom({ test, ...rest }: ITableCustomProps) {
  console.log("🚀 ~ TableCustom ~ test:", test);
  return <Table {...rest} />;
}
