export type TApiResponseModel<T> = {
  value: T;
  count: number;
  hasSuccess: boolean;
  hasError: boolean;
  errors: string[];
  httpStatusCode: string;
  dataRequisicao: Date;
};
