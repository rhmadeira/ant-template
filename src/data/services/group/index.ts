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

const create = async (group: ICreateGroup) => {
  const { data } = await api.post<TApiResponseModel<IGroupResponse>>(
    "/group",
    group
  );
  return data;
};

const update = async (group: IUpdateGroup) => {
  console.log("🚀 ~ update ~ branch:", group);
  const { data } = await api.put<TApiResponseModel<IGroupResponse>>(
    `/group/${group.id}`,
    group
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
