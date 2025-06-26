import { TBaseRequest } from "@/data/types/default";

export interface ICreateBranch {
  nome?: string;
  cnpj?: string;
  razaoSocial?: string;
  nomeFantasia?: string;
  ie?: string;
  inscricaoMunicipal?: string;
  regime?: string;
  tipoPessoa?: string;
  contato?: string;
  telefoneContato?: string;
  cep?: string;
  endereco?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  municipio?: string;
  uf?: string;
  responsavel?: string;
  cpfResponsavel?: string;
  contador?: string;
  cpfContador?: string;
  nfe?: boolean;
  nfce?: boolean;
  nfse?: boolean;
  cte?: boolean;
  mdfe?: boolean;
  certificadoDigitalId?: string;
  possuiCertificado?: boolean;
  listaIPs?: string;
}

export interface IUpdateBranch {
  id: string;
  nome?: string;
  cnpj?: string;
  razaoSocial?: string;
  nomeFantasia?: string;
  ie?: string;
  inscricaoMunicipal?: string;
  regime?: string;
  tipoPessoa?: string;
  contato?: string;
  telefoneContato?: string;
  cep?: string;
  endereco?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  municipio?: string;
  uf?: string;
  responsavel?: string;
  cpfResponsavel?: string;
  contador?: string;
  cpfContador?: string;
  nfe?: boolean;
  nfce?: boolean;
  nfse?: boolean;
  cte?: boolean;
  mdfe?: boolean;
  certificadoDigitalId?: string;
  possuiCertificado?: boolean;
  listaIPs?: string;
}

export interface IBranchResponse {
  id?: string;
  nome?: string;
  cnpj?: string;
  razaoSocial?: string;
  nomeFantasia?: string;
  ie?: string;
  inscricaoMunicipal?: string;
  regime?: string;
  tipoPessoa?: string;
  contato?: string;
  telefoneContato?: string;
  cep?: string;
  endereco?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  municipio?: string;
  uf?: string;
  responsavel?: string;
  cpfResponsavel?: string;
  contador?: string;
  cpfContador?: string;
  nfe?: boolean;
  nfce?: boolean;
  nfse?: boolean;
  cte?: boolean;
  mdfe?: boolean;
  certificadoDigitalId?: string;
  possuiCertificado?: boolean;
  listaIPs?: string;
}
export interface IGetAllFilialParams extends TBaseRequest {
  id?: string;
  nome?: string;
  cnpj?: string;
  uf?: string;
  cidade?: string;
}
