export type TApiResponseModel<T> = {
  value: T;
  count: number;
  hasSuccess: boolean;
  hasError: boolean;
  errors: string[];
  httpStatusCode: string;
  dataRequisicao: Date;
};

export type TBaseRequest = {
  page: number;
  take: number;
};
