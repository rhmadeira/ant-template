import { userService } from "@/data/services/user";
import HeaderPage from "@/shared/components/header";
import TableCustom from "@/shared/components/table-custom";
import { EnumUserKey } from "@/shared/enums/keys";
import { useQuery } from "@tanstack/react-query";
import { Col, Row, Tag } from "antd";

export default function Branches() {
  // const hasPermission = usePermissionsStore((state) => state.hasPermission);
  const branches = useQuery({
    queryKey: [EnumUserKey.getAll],
    queryFn: userService.getAll,
  });
  return (
    <>
      <HeaderPage title="Filiais" />
      <Row
        style={{
          padding: 0,
          marginTop: -60,
        }}
      >
        <Col
          span={4}
          style={{
            height: 200,
            padding: 10,
          }}
        >
          <Row
            style={{
              height: "100%",
              borderRadius: 4,
              backgroundColor: "white",
            }}
          >
            col-6
          </Row>
        </Col>
        <Col
          span={20}
          style={{
            height: 200,
            padding: 10,
          }}
        >
          <TableCustom
            dataSource={branches.data?.value}
            columns={[
              {
                key: "nome",
                title: "Nome",
                minWidth: 200,
                dataIndex: "nome",
              },
              {
                key: "email",
                title: "Email",
                minWidth: 200,
                dataIndex: "email",
              },
              {
                key: "admin",
                title: "Admin",
                width: 50,
                dataIndex: "admin",
                render: (value) =>
                  value ? (
                    <Tag color="green">Sim</Tag>
                  ) : (
                    <Tag color="red">Não</Tag>
                  ),
              },
              {
                key: "actions",
                title: "Ações",
                width: 50,
                align: "center",
                dataIndex: "actions",
                render: () => (
                  <span>
                    <a href="#">Editar</a>
                    <span style={{ marginLeft: 8 }} />
                    <a href="#">Excluir</a>
                  </span>
                ),
              },
            ]}
            style={{
              minWidth: 800,
              width: 1500,
            }}
          />
        </Col>
      </Row>
    </>
  );
}
