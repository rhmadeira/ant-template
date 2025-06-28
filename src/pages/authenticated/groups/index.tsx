import { groupService } from "@/data/services/group";
import HeaderPage from "@/shared/components/header";
import TableCustom from "@/shared/components/table-custom";
import { EnumGroupKey } from "@/shared/enums/keys";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Col, Row } from "antd";
import { useRef } from "react";
import CardInformation from "./_components/card-information";
import { Outlet, useNavigate } from "react-router-dom";
import { useMatch } from "react-router-dom";
import TableHeader from "@/shared/components/table-header";
import {
  DeleteOutlined,
  EditOutlined,
  KeyOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { IGroupResponse } from "@/data/services/group/interface";
import { LabelOptionItem } from "@/shared/components/table-custom/label-option-item";
import TableActionDropdown from "@/shared/components/table-action-dropdown";

export default function Groups() {
  const match = useMatch("/grupo");
  const matchCreate = useMatch("/grupo/criar");
  const tableWrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const group = useInfiniteQuery({
    queryKey: [EnumGroupKey.getAll],
    queryFn: async ({ pageParam = 0 }) => {
      const result = await groupService.getAll({ page: pageParam, take: 20 });
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

  const dataSource = group.data?.pages.flatMap((page) => page.value) ?? [];

  const handleDeleteUser = () => {
    // Implement the delete user logic here
    console.log("Delete user action triggered");
  };

  const handleClickOption = (path: string) => {
    navigate(`/grupo/${path}`);
  };

  return (
    <>
      <HeaderPage title="Grupos" placeholder="Pesquise por um grupo" />
      <Row
        style={{
          padding: 0,
          marginTop: -60,
        }}
      >
        <Col
          span={14}
          style={{
            padding: 10,
          }}
        >
          <div ref={tableWrapperRef}>
            <TableCustom
              dataSource={dataSource}
              pagination={false}
              showHeader={true}
              rowKey="nome"
              onRow={(record) => {
                return {
                  onDoubleClick: () => {
                    handleClickOption(`${record.id}`);
                  }, // double click row
                };
              }}
              title={() => {
                return (
                  <TableHeader
                    buttonPositionEnd
                    buttons={[
                      {
                        type: "primary",
                        children: "Novo Grupo",
                        icon: <PlusOutlined />,
                        disabled: !!matchCreate,
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
                  title: "Nome",
                  dataIndex: "nome",
                  key: "nome",
                  width: 200,
                  render: (text: string) => (
                    <span style={{ fontWeight: "bold" }}>{text}</span>
                  ),
                },
                {
                  title: "Descrição",
                  dataIndex: "descricao",
                  key: "descricao",
                  width: 200,
                  render: (text: string) => (
                    <span style={{ fontWeight: "bold" }}>{text}</span>
                  ),
                },
                {
                  title: "Ações",
                  key: "actions",
                  align: "center",
                  width: 80,
                  fixed: "right",
                  render: (value: IGroupResponse) => (
                    <TableActionDropdown
                      value={value}
                      items={() => [
                        {
                          key: "1",
                          label: <LabelOptionItem title="Editar" />,
                          icon: <EditOutlined />,
                          // disabled: value?.deleted || !hasPermission("UpdateUser"),
                          onClick: () => handleClickOption(`${value.id}`),
                        },
                        {
                          key: "2",
                          icon: <KeyOutlined />,
                          label: <LabelOptionItem title="Permissões" />,
                          // disabled:
                          //   value?.deleted || !hasPermission("BindUserPermission"),
                          onClick: () =>
                            handleClickOption(`permissoes/${value.id}`),
                        },
                        {
                          key: "4",
                          icon: <DeleteOutlined />,
                          label: <LabelOptionItem title="Deletar" />,
                          // disabled: !hasPermission("DeleteUser"),
                          onClick: handleDeleteUser,
                        },
                      ]}
                    />
                  ),
                },
              ]}
              scroll={{
                y: 900,
              }}
              loading={group.isLoading || group.isFetchingNextPage}
            />
          </div>
        </Col>
        <Col
          span={10}
          style={{
            padding: 10,
          }}
        >
          {match ? <CardInformation /> : <Outlet />}
        </Col>
      </Row>
    </>
  );
}
