export type PaginatedUseCaseResult<T> = {
  page: number;
  limit: number;
  total: number;
  items: T[];
};
