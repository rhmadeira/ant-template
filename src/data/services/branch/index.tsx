import { TApiResponseModel } from "@/data/types/default";
import {
  IBranchResponse,
  ICreateBranch,
  IGetAllFilialParams,
  IUpdateBranch,
} from "./interface";
import { api } from "@/data/libs/axios";

const getAll = async ({
  nome,
  cidade,
  cnpj,
  uf,
  page,
  take,
}: IGetAllFilialParams) => {
  const { data } = await api.get<TApiResponseModel<IBranchResponse[]>>(
    "/filiais",
    {
      params: {
        nome,
        cidade,
        cnpj,
        uf,
        page,
        take,
      },
    }
  );
  return data;
};
const getById = async (id: string) => {
  const { data } = await api.get<TApiResponseModel<IBranchResponse>>(
    `/filiais/${id}`
  );
  return data;
};

const create = async (branch: ICreateBranch) => {
  const { data } = await api.post<TApiResponseModel<IBranchResponse>>(
    "/filiais",
    branch
  );
  return data;
};

const update = async (id: string, branch: IUpdateBranch) => {
  const { data } = await api.put<TApiResponseModel<IBranchResponse>>(
    `/filiais/${id}`,
    branch
  );
  return data;
};

export const branchService = {
  getAll,
  getById,
  create,
  update,
};
