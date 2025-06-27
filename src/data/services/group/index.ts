import { TApiResponseModel } from "@/data/types/default";
import {
  ICreateGroup,
  IGetAllGroupParams,
  IGroupResponse,
  IUpdateGroup,
} from "./interface";

const getAll = async ({ nome, page, take }: IGetAllGroupParams) => {
  console.log("🚀 ~ getAll ~ params:", nome, page, take);
  return {
    value: [
      {
        id: "1",
        nome: "Grupo 1",
        descricao: "Descrição do Grupo 1",
      },
      {
        id: "2",
        nome: "Grupo 2",
        descricao: "Descrição do Grupo 2",
      },
      {
        id: "3",
        nome: "Grupo 3",
        descricao: "Descrição do Grupo 3",
      },
      {
        id: "4",
        nome: "Grupo 4",
        descricao: "Descrição do Grupo 4",
      },
      {
        id: "5",
        nome: "Grupo 5",
        descricao: "Descrição do Grupo 5",
      },
      {
        id: "6",
        nome: "Grupo 6",
        descricao: "Descrição do Grupo 6",
      },
      {
        id: "7",
        nome: "Grupo 7",
        descricao: "Descrição do Grupo 7",
      },
      {
        id: "8",
        nome: "Grupo 8",
        descricao: "Descrição do Grupo 8",
      },
      {
        id: "9",
        nome: "Grupo 9",
        descricao: "Descrição do Grupo 9",
      },
      {
        id: "10",
        nome: "Grupo 10",
        descricao: "Descrição do Grupo 10",
      },
      {
        id: "11",
        nome: "Grupo 11",
        descricao: "Descrição do Grupo 11",
      },
      {
        id: "12",
        nome: "Grupo 12",
        descricao: "Descrição do Grupo 12",
      },
      {
        id: "13",
        nome: "Grupo 13",
        descricao: "Descrição do Grupo 13",
      },
      {
        id: "14",
        nome: "Grupo 14",
        descricao: "Descrição do Grupo 14",
      },
      {
        id: "15",
        nome: "Grupo 15",
        descricao: "Descrição do Grupo 15",
      },
      {
        id: "16",
        nome: "Grupo 16",
        descricao: "Descrição do Grupo 16",
      },
      {
        id: "17",
        nome: "Grupo 17",
        descricao: "Descrição do Grupo 17",
      },
      {
        id: "18",
        nome: "Grupo 18",
        descricao: "Descrição do Grupo 18",
      },
      {
        id: "19",
        nome: "Grupo 19",
        descricao: "Descrição do Grupo 19",
      },
      {
        id: "20",
        nome: "Grupo 20",
        descricao: "Descrição do Grupo 20",
      },
    ],
    count: 21,
    hasSuccess: true,
    hasError: false,
    errors: [],
    httpStatusCode: "OK",
    dataRequisicao: new Date(),
  } as TApiResponseModel<IGroupResponse[]>;
};

const getById = async (id: string) => {
  console.log("🚀 ~ getById ~ id:", id);
};

const create = async (branch: ICreateGroup) => {
  console.log("🚀 ~ create ~ user:", branch);
};

const update = async (id: string, branch: IUpdateGroup) => {
  console.log("🚀 ~ update ~ id:", id);
  console.log("🚀 ~ update ~ user:", branch);
};

export const groupService = {
  getAll,
  getById,
  create,
  update,
};
