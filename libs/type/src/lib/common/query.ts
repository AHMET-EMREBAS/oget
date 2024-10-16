export type QueryOptions<T = any> = {
  take?: number;
  skip?: number;
  order?: any;
  where?: any;
  withDeleted?: boolean;
  select?: any;
};
