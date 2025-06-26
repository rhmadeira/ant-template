import { TApiResponseModel } from "@/data/types/default";
import { IBranchResponse, ICreateBranch, IUpdateBranch } from "./interface";

const getAll = async () => {
  return {
    value: [],
    count: 0,
    hasSuccess: true,
    hasError: false,
    errors: [],
    httpStatusCode: "OK",
    dataRequisicao: new Date(),
  } as TApiResponseModel<IBranchResponse[]>;
};

const getById = async (id: string) => {
  console.log("🚀 ~ getById ~ id:", id);
};

const create = async (branch: ICreateBranch) => {
  console.log("🚀 ~ create ~ user:", branch);
};

const update = async (id: string, branch: IUpdateBranch) => {
  console.log("🚀 ~ update ~ id:", id);
  console.log("🚀 ~ update ~ user:", branch);
};

export const branchService = {
  getAll,
  getById,
  create,
  update,
};
