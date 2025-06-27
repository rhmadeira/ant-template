import { useColumnVisibility } from "@/data/hooks/column-visibility";
import { branchService } from "@/data/services/branch";
import { IBranchResponse } from "@/data/services/branch/interface";
import { IUserResponse } from "@/data/services/user/interface";
import HeaderPage from "@/shared/components/header";
import TableCustom from "@/shared/components/table-custom";
import ColumnFilter from "@/shared/components/table-custom/column-filter";
import { LabelOptionItem } from "@/shared/components/table-custom/label-option-item";
import { EnumBranchKey } from "@/shared/enums/keys";
import {
  EditOutlined,
  KeyOutlined,
  UsergroupAddOutlined,
  DeleteOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Button, Col, Dropdown, MenuProps, Row, TableColumnsType } from "antd";
import { useNavigate } from "react-router-dom";
import FilterBranches from "./components/filter-branches";
import { useEffect, useRef } from "react";

export default function Branches() {
  // const hasPermission = usePermissionsStore((state) => state.hasPermission);
  const navigate = useNavigate();
  // const [searchParams] = useSearchParams();
  const tableWrapperRef = useRef<HTMLDivElement>(null);
  // const CNPJ = useDebounce(searchParams.get("cnpj") || "", 500);
  // const search = useDebounce(searchParams.get("search") || "", 500);
  // const cidade = searchParams.get("cidade") || "";
  // const uf = searchParams.get("uf") || "";

  const branch = useInfiniteQuery({
    queryKey: [EnumBranchKey.getAll],
    queryFn: async ({ pageParam = 0 }) => {
      const result = await branchService.getAll({ page: pageParam, take: 20 });
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
  const dataSource = branch.data?.pages.flatMap((page) => page.value) ?? [];

  const handleDeleteUser = () => {
    // Implement the delete user logic here
    console.log("Delete user action triggered");
  };

  const handleClickOption = (path: string) => {
    navigate(`/usuario/${path}`);
  };

  const columns: TableColumnsType<IBranchResponse> = [
    {
      key: "cnpj",
      title: "CNPJ",
      dataIndex: "cnpj",
      width: 200,
    },
    {
      key: "razaoSocial",
      title: "Razão Social",
      dataIndex: "razaoSocial",
      width: 300,
    },
    {
      key: "nomeFantasia",
      title: "Nome Fantasia",
      dataIndex: "nomeFantasia",
      width: 200,
    },
    {
      key: "ie",
      title: "IE",
      dataIndex: "ie",
      width: 200,
    },
    {
      key: "inscricaoMunicipal",
      title: "Inscrição Municipal",
      dataIndex: "inscricaoMunicipal",
      width: 200,
    },
    {
      key: "regime",
      title: "Regime",
      dataIndex: "regime",
      width: 200,
    },
    {
      key: "tipoPessoa",
      title: "Tipo Pessoa",
      dataIndex: "tipoPessoa",
      width: 200,
    },
    {
      key: "contato",
      title: "Contato",
      dataIndex: "contato",
      width: 200,
    },
    {
      key: "telefoneContato",
      title: "Telefone Contato",
      dataIndex: "telefoneContato",
      width: 200,
    },
    {
      key: "cep",
      title: "CEP",
      dataIndex: "cep",
      width: 200,
    },
    {
      key: "endereco",
      title: "Endereço",
      dataIndex: "endereco",
      width: 200,
    },
    {
      key: "numero",
      title: "Número",
      dataIndex: "numero",
      width: 200,
    },
    {
      key: "complemento",
      title: "Complemento",
      dataIndex: "complemento",
      width: 200,
    },
    {
      key: "bairro",
      title: "Bairro",
      dataIndex: "bairro",
      width: 200,
    },
    {
      key: "municipio",
      title: "Município",
      dataIndex: "municipio",
      width: 200,
    },
    {
      key: "uf",
      title: "UF",
      dataIndex: "uf",
      width: 80,
    },
    {
      key: "responsavel",
      title: "Responsável",
      dataIndex: "responsavel",
      width: 200,
    },
    {
      key: "cpfResponsavel",
      title: "CPF Responsável",
      dataIndex: "cpfResponsavel",
      width: 200,
    },
    {
      key: "actions",
      title: "Ações",
      width: 100,
      fixed: "right",
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
            onClick: () => handleClickOption(`permissoes-usuario/${value.id}`),
          },
          {
            key: "3",
            icon: <UsergroupAddOutlined />,
            label: <LabelOptionItem title="Grupos" />,
            // disabled:
            //   value?.deleted || !hasPermission("BindUserRole"),
            onClick: () => handleClickOption(`grupo-usuario/${value.id}`),
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
  ];

  const { visibleColumns, setVisibleColumns, filteredColumns, filterOptions } =
    useColumnVisibility(columns, "colunas_filiais");

  useEffect(() => {
    if (!tableWrapperRef.current) return;
    const body = tableWrapperRef.current?.querySelector(".ant-table-body");
    if (!body) return;

    const handleScroll = () => {
      const nearBottom =
        body.scrollTop + body.clientHeight >= body.scrollHeight - 50;

      if (nearBottom && branch.hasNextPage && !branch.isFetchingNextPage) {
        branch.fetchNextPage();
      }
    };

    body.addEventListener("scroll", handleScroll);
    return () => body.removeEventListener("scroll", handleScroll);
  }, [tableWrapperRef, branch]);

  return (
    <>
      <HeaderPage title="Filiais" placeholder="Pesquise por uma filial" />

      <Row
        style={{
          padding: 0,
          marginTop: -60,
        }}
      >
        <Col
          span={5}
          style={{
            padding: 10,
          }}
        >
          <Row
            style={{
              borderRadius: 4,
              backgroundColor: "white",
              padding: 10,
            }}
          >
            <FilterBranches />
            <ColumnFilter
              value={visibleColumns}
              options={filterOptions}
              onChange={setVisibleColumns}
            />
          </Row>
        </Col>
        <Col
          span={19}
          style={{
            padding: 10,
          }}
        >
          <div ref={tableWrapperRef}>
            <TableCustom
              dataSource={dataSource}
              pagination={false}
              columns={filteredColumns}
              scroll={{
                x: 1400,
                y: 900,
              }}
              rowKey={(record: IBranchResponse) => String(record.id)}
              loading={branch.isLoading || branch.isFetchingNextPage}
            />
          </div>
        </Col>
      </Row>
    </>
  );
}
