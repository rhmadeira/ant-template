import { TApiResponseModel } from "@/data/types/default";
import {
  ICreateUser,
  IUpdateUser,
  IUserGetAllParams,
  IUserResponse,
} from "./interface";
import { api } from "@/data/libs/axios";

const getAll = async ({ page, take }: IUserGetAllParams) => {
  const { data } = await api.get<TApiResponseModel<IUserResponse>>("/user", {
    params: {
      _page: page,
      _limit: take,
    },
  });
  return data;
};

const getById = async (id: string) => {
  console.log("🚀 ~ getById ~ id:", id);
};

const create = async (user: ICreateUser) => {
  console.log("🚀 ~ create ~ user:", user);
};

const update = async (id: string, user: IUpdateUser) => {
  console.log("🚀 ~ update ~ id:", id);
  console.log("🚀 ~ update ~ user:", user);
};

export const userService = {
  getAll,
  getById,
  create,
  update,
};
