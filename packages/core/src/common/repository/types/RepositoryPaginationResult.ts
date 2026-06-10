export type RepositoryPaginationResult<T> = {
  page: number;
  limit: number;
  total: number;
  items: T[];
};
