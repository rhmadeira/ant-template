import { TBaseRequest } from "@/data/types/default";

export interface ICreateUser {
  name: string;
  email: string;
  password: string;
}
export interface IUpdateUser {
  name?: string;
  email?: string;
  password?: string;
}

export interface IUserResponse {
  id: string;
  nome: string;
  email: string;
  admin: boolean;
  deleted?: boolean;
}

export interface IUserGetAllParams extends TBaseRequest {
  nome?: string;
}

export interface IUserForm {
  id?: string;
  nome: string;
  email: string;
  admin: boolean;
  deleted?: boolean;
}
