export interface IAuthToken {
  id: string;
  admin: boolean;
  authenticated: boolean;
  name: string;
  token: IToken;
  image64: string;
  passwordResetRequired: boolean;
  passwordResetToken: string;
  agentId: string;
}
export interface IToken {
  accessToken: string;
  authenticated: boolean;
  created: string;
  expiration: string;
  message: string;
  refreshToken: string;
}
export interface IUserLogged {
  id: string;
  email: string;
  username: string;
  companies: IAccount[];
  branches: IBranch[];
}
export interface IAccount {
  id: string;
  name: string;
  login: "Azure" | "Basic" | "Google" | "Facebook" | "Twitter" | "LinkedIn";
  urlLogin: string;
  clientId: string;
  tenantId: string;
  loginHint: string;
}
export interface IBranch {
  branchId: string;
  agentId: string;
  name: string;
}

export interface ILoginAzure {
  email?: string;
  code: string | null;
  companyId: string;
  redirectUri?: string;
}
