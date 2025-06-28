import { TApiResponseModel } from "@/data/types/default";
import {
  ICreateGroup,
  IGetAllGroupParams,
  IGroupResponse,
  IUpdateGroup,
} from "./interface";
import { api } from "@/data/libs/axios";

const getAll = async ({ nome, page, take }: IGetAllGroupParams) => {
  const { data } = await api.get<TApiResponseModel<IGroupResponse[]>>(
    "/group",
    {
      params: {
        _page: page,
        _limit: take,
        nome,
      },
    }
  );
  return data;
};

const getById = async (id: string) => {
  const { data } = await api.get<TApiResponseModel<IGroupResponse>>(
    `/group/${id}`
  );
  return data;
};

const create = async (branch: ICreateGroup) => {
  console.log("🚀 ~ create ~ branch:", branch);
  const { data } = await api.post<TApiResponseModel<IGroupResponse>>(
    "/group",
    branch
  );
  return data;
};

const update = async (id: string, branch: IUpdateGroup) => {
  const { data } = await api.put<TApiResponseModel<IGroupResponse>>(
    `/group/${id}`,
    branch
  );
  return data;
};

const deleteGroup = async (id: string) => {
  const { data } = await api.delete<TApiResponseModel<IGroupResponse>>(
    `/group/${id}`
  );
  return data;
};

export const groupService = {
  getAll,
  getById,
  create,
  update,
  delete: deleteGroup,
};
