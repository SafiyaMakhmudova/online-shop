export type pagination = {
  page: number;
  pageSize: number;
  skip: number;
};

export type error = {
  message: string;
  status: number | string;
};
