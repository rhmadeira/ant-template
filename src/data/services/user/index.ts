import { TApiResponseModel } from "@/data/types/default";
import { ICreateUser, IUpdateUser, IUserResponse } from "./interface";

const getAll = async () => {
  return {
    value: [
      {
        id: "2c06e915-133a-4e8f-9fea-060ac264f7ee",
        nome: "emilly",
        email: "thomas53@uol.com.br",
        admin: true,
      },
      {
        id: "dad5ead6-1dd4-4ac2-b982-3912145d258b",
        nome: "luan",
        email: "marcelagomes@azevedo.com",
        admin: false,
      },
      {
        id: "3853cb53-b65d-4797-b2ca-3ae63b459a6e",
        nome: "esther",
        email: "vitor-hugo43@yahoo.com.br",
        admin: true,
      },
      {
        id: "22de5013-f63d-4daf-8388-363312d94a30",
        nome: "maria vitória",
        email: "wramos@araujo.br",
        admin: true,
      },
      {
        id: "3e2d986a-ebd8-4ce1-9ed2-4dee1c9976bc",
        nome: "isabelly",
        email: "eduardacastro@campos.com",
        admin: false,
      },
      {
        id: "7442ef22-8cbb-4510-afaa-eb3a38d70b18",
        nome: "melissa",
        email: "ecastro@uol.com.br",
        admin: true,
      },
      {
        id: "64c397f7-6702-4e57-8d14-f1f84300901c",
        nome: "larissa",
        email: "wnogueira@barbosa.br",
        admin: true,
      },
      {
        id: "717809bd-49aa-4d48-a148-ec5d534d27a9",
        nome: "ian",
        email: "marcelocosta@uol.com.br",
        admin: true,
      },
      {
        id: "ba3523d9-8291-4720-9ee5-9b92f12e84cf",
        nome: "isabella",
        email: "silveiraalana@bol.com.br",
        admin: true,
      },
      {
        id: "23c4bf98-2205-429a-96a8-d49f6074a32a",
        nome: "paulo",
        email: "salessamuel@alves.br",
        admin: true,
      },
      {
        id: "84fe4821-db3e-4f76-a1e7-79c4ace832c4",
        nome: "joão felipe",
        email: "vribeiro@mendes.br",
        admin: true,
      },
      {
        id: "19d54d0f-5b9a-493a-aba1-153b33c6827e",
        nome: "cauã",
        email: "monteiromelissa@gmail.com",
        admin: false,
      },
      {
        id: "098a7bef-a8da-4e19-9068-2bb57cb6dff2",
        nome: "joão pedro",
        email: "vicentearaujo@fogaca.com",
        admin: true,
      },
      {
        id: "3acad6b9-f28c-44a4-94a1-4e2c57f95b81",
        nome: "francisco",
        email: "wcostela@bol.com.br",
        admin: false,
      },
      {
        id: "14abca25-3a2d-465a-9a73-980f38f8c3cb",
        nome: "mariane",
        email: "kda-rosa@gmail.com",
        admin: false,
      },
      {
        id: "dc09142a-a056-4ff5-8b03-4bad17271942",
        nome: "leandro",
        email: "ooliveira@bol.com.br",
        admin: false,
      },
      {
        id: "50078735-0a16-40df-bba7-6c1c15108964",
        nome: "luiz miguel",
        email: "pedro-miguel02@caldeira.com",
        admin: true,
      },
      {
        id: "c077a84b-c6d4-4799-a776-de315c82f00b",
        nome: "cecília",
        email: "alexiacavalcanti@pires.net",
        admin: false,
      },
      {
        id: "554d25d9-7e58-49cd-874c-23eae4f15bda",
        nome: "lucas",
        email: "limaleandro@barbosa.net",
        admin: true,
      },
      {
        id: "47705683-a00f-4811-9479-6edb54ba91fa",
        nome: "lara",
        email: "agathaaraujo@yahoo.com.br",
        admin: false,
      },
    ],
    count: 0,
    hasSuccess: true,
    hasError: false,
    errors: [],
    httpStatusCode: "OK",
    dataRequisicao: new Date(),
  } as TApiResponseModel<IUserResponse[]>;
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
