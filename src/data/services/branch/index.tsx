import { TApiResponseModel } from "@/data/types/default";
import {
  IBranchResponse,
  ICreateBranch,
  IGetAllFilialParams,
  IUpdateBranch,
} from "./interface";

const getAll = async ({
  nome,
  cidade,
  cnpj,
  uf,
  page,
  take,
}: IGetAllFilialParams) => {
  console.log("🚀 ~ getAll ~ params:", nome, cidade, cnpj, uf, page, take);
  return {
    value: [
      {
        id: "8093b79a-a380-43e7-98a6-c21b8eaa99f9",
        nome: "Almeida da Cruz e Filhos",
        cnpj: "78.205.341/0001-90",
        razaoSocial: "Ferreira Peixoto S/A",
        nomeFantasia: "e Filhos",
        ie: "859506025",
        inscricaoMunicipal: "91334956",
        regime: "Lucro Presumido",
        tipoPessoa: "Física",
        contato: "Isabel Araújo",
        telefoneContato: "51 7750 8772",
        cep: "49519750",
        endereco: "Viela Silva",
        numero: "38",
        complemento: "Sala 935",
        bairro: "Tirol",
        municipio: "Ferreira de Moraes",
        uf: "RJ",
        responsavel: "Isabelly Nunes",
        cpfResponsavel: "194.078.536-75",
        contador: "Luana Pires",
        cpfContador: "586.124.907-58",
        nfe: false,
        nfce: false,
        nfse: true,
        cte: false,
        mdfe: true,
        certificadoDigitalId: "133a9fe6-4b00-4f4b-8434-2bcfe0414e6f",
        possuiCertificado: true,
        listaIPs: "158.132.196.110",
      },
      {
        id: "dcd34574-f834-4af6-86c4-50c64e931bca",
        nome: "Ribeiro",
        cnpj: "16.420.873/0001-93",
        razaoSocial: "Peixoto",
        nomeFantasia: "e Filhos",
        ie: "643581678",
        inscricaoMunicipal: "97696353",
        regime: "Lucro Presumido",
        tipoPessoa: "Física",
        contato: "Felipe da Rocha",
        telefoneContato: "(031) 0147-3057",
        cep: "53676-825",
        endereco: "Colônia Dias",
        numero: "695",
        complemento: "Sala 162",
        bairro: "Pantanal",
        municipio: "Barros",
        uf: "PE",
        responsavel: "Alícia Pires",
        cpfResponsavel: "239.178.460-04",
        contador: "Sra. Milena Moreira",
        cpfContador: "319.647.820-31",
        nfe: true,
        nfce: true,
        nfse: true,
        cte: true,
        mdfe: false,
        certificadoDigitalId: "6345f7b4-7858-4557-8247-2bfdcfb0b05b",
        possuiCertificado: true,
        listaIPs: "63.91.99.44",
      },
    ],
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
