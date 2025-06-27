import { TBaseRequest } from "@/data/types/default";

export interface IGetAllGroupParams extends TBaseRequest {
  nome?: string;
}

export interface IGroupResponse {
  id: string;
  nome: string;
  descricao: string;
}

export interface ICreateGroup {
  nome: string;
  descricao: string;
}

export interface IUpdateGroup {
  id: string;
  nome?: string;
  descricao?: string;
}

export interface IGroupForm {
  id?: string;
  nome: string;
  descricao: string;
}
