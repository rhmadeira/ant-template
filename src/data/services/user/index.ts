import { TApiResponseModel } from "@/data/types/default";
import {
  ICreateUser,
  IUpdateUser,
  IUserGetAllParams,
  IUserResponse,
} from "./interface";
import { api } from "@/data/libs/axios";

const getAll = async ({ page, take }: IUserGetAllParams) => {
  const { data } = await api.get<TApiResponseModel<IUserResponse[]>>("/user", {
    params: {
      _page: page,
      _limit: take,
    },
  });
  return data;
};

const getById = async (id: string) => {
  const { data } = await api.get<TApiResponseModel<IUserResponse>>(
    `/user/${id}`
  );
  return data;
};

const create = async (user: ICreateUser) => {
  const { data } = await api.post<TApiResponseModel<IUserResponse>>(
    "/user",
    user
  );
  return data;
};

const update = async (id: string, user: IUpdateUser) => {
  const { data } = await api.put<TApiResponseModel<IUserResponse>>(
    `/user/${id}`,
    user
  );
  return data;
};

const deleteUser = async (id: string) => {
  const { data } = await api.delete<TApiResponseModel<IUserResponse>>(
    `/user/${id}`
  );
  return data;
};

export const userService = {
  getAll,
  getById,
  create,
  update,
  delete: deleteUser,
};
