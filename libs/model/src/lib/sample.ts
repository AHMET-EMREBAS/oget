import { ID } from '@oget/type';

export type SampleModel<SampleCategory = ID> = {
  name: string;
  category: SampleCategory;
};
