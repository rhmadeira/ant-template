import { userService } from "@/data/services/user";
import { IUserResponse } from "@/data/services/user/interface";
// import { usePermissionsStore } from "@/data/stores/permission-store";
import HeaderPage from "@/shared/components/header";
import TableCustom from "@/shared/components/table-custom";
import { LabelOptionItem } from "@/shared/components/table-custom/label-option-item";
import { EnumUserKey } from "@/shared/enums/keys";
import {
  DeleteOutlined,
  EditOutlined,
  KeyOutlined,
  MoreOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Avatar, Button, Col, Dropdown, MenuProps, Row, Tag } from "antd";
import { useNavigate } from "react-router-dom";

export default function Users() {
  // const hasPermission = usePermissionsStore((state) => state.hasPermission);
  const navigate = useNavigate();
  const user = useQuery({
    queryKey: [EnumUserKey.getAll],
    queryFn: userService.getAll,
  });
  const handleDeleteUser = () => {
    // Implement the delete user logic here
    console.log("Delete user action triggered");
  };

  const handleClickOption = (path: string) => {
    navigate(`/usuarios/${path}`);
  };

  return (
    <>
      <HeaderPage title="Usuários" />
      <Row
        style={{
          padding: 0,
          marginTop: -60,
        }}
      >
        <Col
          span={24}
          style={{
            height: 200,
            padding: 10,
          }}
        >
          <TableCustom
            dataSource={user.data?.value}
            columns={[
              {
                key: "nome",
                title: "Nome",
                dataIndex: "nome",
                render: (value) => (
                  <span style={{ fontWeight: "bold" }}>
                    <Avatar
                      style={{
                        backgroundColor: "#87d068",
                        verticalAlign: "middle",
                        marginRight: 8,
                      }}
                    >
                      {value.charAt(0).toUpperCase()}
                    </Avatar>
                    {value}
                  </span>
                ),
              },
              {
                key: "email",
                title: "Email",
                dataIndex: "email",
                render: (value) => (
                  <span style={{ fontWeight: "bold" }}>{value}</span>
                ),
              },
              {
                key: "admin",
                title: "Admin",
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
                render: (value: IUserResponse) => {
                  const optionsMenu: MenuProps["items"] = [
                    {
                      key: "1",
                      label: <LabelOptionItem title="Editar" />,
                      icon: <EditOutlined />,
                      // disabled: value?.deleted || !hasPermission("UpdateUser"),
                      onClick: () => handleClickOption(`editar/${value.id}`),
                    },
                    {
                      key: "2",
                      icon: <KeyOutlined />,
                      label: <LabelOptionItem title="Permissões" />,
                      // disabled:
                      //   value?.deleted || !hasPermission("BindUserPermission"),
                      onClick: () =>
                        handleClickOption(`permissoes-usuario/${value.id}`),
                    },
                    {
                      key: "3",
                      icon: <UsergroupAddOutlined />,
                      label: <LabelOptionItem title="Grupos" />,
                      // disabled:
                      //   value?.deleted || !hasPermission("BindUserRole"),
                      onClick: () =>
                        handleClickOption(`grupo-usuario/${value.id}`),
                    },
                    {
                      key: "4",
                      icon: <DeleteOutlined />,
                      label: <LabelOptionItem title="Deletar" />,
                      // disabled: !hasPermission("DeleteUser"),
                      onClick: handleDeleteUser,
                    },
                  ];

                  return (
                    <Col>
                      <Dropdown
                        disabled={value?.deleted}
                        trigger={["click"]}
                        menu={{ items: optionsMenu }}
                      >
                        <Button>
                          <MoreOutlined />
                        </Button>
                      </Dropdown>
                    </Col>
                  );
                },
              },
            ]}
            style={{
              minWidth: 800,
            }}
          />
        </Col>
      </Row>
    </>
  );
}
