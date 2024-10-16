export type OrderDir = 'asc' | 'desc' | 'ASC' | 'DESC';
export type OrderNull = 'first' | 'last' | 'FIRST' | 'LAST';

export type QueryOptions = {
  take?: number;
  skip?: number;
  withDeleted?: boolean;
  select?: any | any[];
  where?: Record<string, any> | Record<string, any>[];
  orderBy?: string;
  orderDir?: OrderDir;
  orderNulls?: OrderNull;
};
