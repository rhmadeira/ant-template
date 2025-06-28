import { userService } from "@/data/services/user";
import { IUserResponse } from "@/data/services/user/interface";
// import { usePermissionsStore } from "@/data/stores/permission-store";
import HeaderPage from "@/shared/components/header";
import TableActionDropdown from "@/shared/components/table-action-dropdown";
import TableCustom from "@/shared/components/table-custom";
import { LabelOptionItem } from "@/shared/components/table-custom/label-option-item";
import TableHeader from "@/shared/components/table-header";
import { EnumUserKey } from "@/shared/enums/keys";
import {
  DeleteOutlined,
  EditOutlined,
  KeyOutlined,
  PlusOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Avatar, Col, Row, Tag } from "antd";
import { useEffect, useRef } from "react";
import { Outlet, useMatch, useNavigate } from "react-router-dom";

export default function Users() {
  // const hasPermission = usePermissionsStore((state) => state.hasPermission);
  const match = useMatch("/usuario");
  const navigate = useNavigate();
  const tableWrapperRef = useRef<HTMLDivElement>(null);

  const user = useInfiniteQuery({
    queryKey: [EnumUserKey.getAll],
    queryFn: async ({ pageParam = 0 }) => {
      const result = await userService.getAll({ page: pageParam, take: 20 });
      return result;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const totalLoaded = allPages.reduce((total, page) => {
        const list = Array.isArray(page?.value) ? page.value : [];
        return total + list.length;
      }, 0);

      return lastPage?.count && totalLoaded < lastPage.count
        ? allPages.length
        : undefined;
    },
    staleTime: 1000 * 60 * 20,
  });

  const dataSource = user.data?.pages.flatMap((page) => page.value) ?? [];

  const handleDeleteUser = () => {
    // Implement the delete user logic here
    console.log("Delete user action triggered");
  };

  const handleClickOption = (path: string) => {
    navigate(`/usuario/${path}`);
  };

  useEffect(() => {
    if (!tableWrapperRef.current) return;
    const body = tableWrapperRef.current?.querySelector(".ant-table-body");
    if (!body) return;

    const handleScroll = () => {
      const nearBottom =
        body.scrollTop + body.clientHeight >= body.scrollHeight - 50;

      if (nearBottom && user.hasNextPage && !user.isFetchingNextPage) {
        user.fetchNextPage();
      }
    };

    body.addEventListener("scroll", handleScroll);
    return () => body.removeEventListener("scroll", handleScroll);
  }, [tableWrapperRef, user]);

  return (
    <>
      <HeaderPage title="Usuários" placeholder="Pesquise por um usuário" />
      <Row
        style={{
          padding: 0,
          marginTop: -60,
        }}
      >
        <Col
          span={match ? 24 : 14}
          style={{
            padding: 10,
          }}
        >
          <div ref={tableWrapperRef}>
            <TableCustom
              dataSource={dataSource}
              pagination={false}
              rowKey={"id"}
              showHeader={true}
              loading={user.isLoading || user.isFetchingNextPage}
              onRow={(record) => {
                return {
                  onDoubleClick: () => {
                    handleClickOption(`${record.id}`);
                  },
                };
              }}
              title={() => {
                return (
                  <TableHeader
                    buttonPositionEnd
                    buttons={[
                      {
                        type: "primary",
                        children: "Novo Usuário",
                        icon: <PlusOutlined />,
                        // disabled: !hasPermission("CreateUser"),
                        onClick: () => {
                          navigate("criar");
                        },
                      },
                    ]}
                  />
                );
              }}
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
                  key: "admin",
                  title: "Admin",
                  dataIndex: "admin",
                  align: "center",
                  width: 100,
                  render: (value) =>
                    value ? (
                      <Tag color="green">Sim</Tag>
                    ) : (
                      <Tag color="red">Não</Tag>
                    ),
                },
                {
                  key: "email",
                  title: "Email",
                  dataIndex: "email",
                  width: 300,
                  render: (value) => (
                    <span style={{ fontWeight: "bold" }}>{value}</span>
                  ),
                },
                {
                  key: "actions",
                  title: "Ações",
                  width: 60,
                  fixed: "right",
                  align: "center",
                  render: (value: IUserResponse) => (
                    <TableActionDropdown
                      value={value}
                      items={(user) => [
                        {
                          key: "1",
                          label: <LabelOptionItem title="Editar" />,
                          icon: <EditOutlined />,
                          onClick: () => handleClickOption(`${user.id}`),
                        },
                        {
                          key: "2",
                          icon: <KeyOutlined />,
                          label: <LabelOptionItem title="Permissões" />,
                          onClick: () =>
                            handleClickOption(`permissao/${user.id}`),
                        },
                        {
                          key: "3",
                          icon: <UsergroupAddOutlined />,
                          label: <LabelOptionItem title="Grupos" />,
                          onClick: () => handleClickOption(`grupo/${user.id}`),
                        },
                        {
                          key: "4",
                          icon: <DeleteOutlined />,
                          label: <LabelOptionItem title="Deletar" />,
                          onClick: () => handleDeleteUser(),
                        },
                      ]}
                      disabled={value?.deleted}
                    />
                  ),
                },
              ]}
              scroll={{
                x: "max-content",
                y: 900,
              }}
            />
          </div>
        </Col>
        {!match && (
          <Col
            span={10}
            style={{
              padding: 10,
            }}
          >
            <Outlet />
          </Col>
        )}
      </Row>
    </>
  );
}
