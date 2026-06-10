type OffsetPaginationOptions = {
  page?: number;
};

type CursorPaginationOptions = {
  cursor?: string;
};

type TimePaginationOptions = {
  since?: string;
  until?: string;
};

export type RepositoryFindOptions = (OffsetPaginationOptions & CursorPaginationOptions & TimePaginationOptions) & {
  includeRemoved?: boolean;
  limit?: number;
};
