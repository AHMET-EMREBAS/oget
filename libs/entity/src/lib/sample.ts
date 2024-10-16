import {
  Entity,
  Column,
  BaseEntity,
  Relation,
  ViewEntity,
  ViewColumn,
} from '@oget/database';
import { Dto, Property, PartialType, IDDto } from '@oget/property';

@Entity()
export class SampleCategory extends BaseEntity {
  @Column()
  name: string;
}

@Entity()
export class Sample extends BaseEntity {
  @Column()
  name: string;

  @Relation({ relationType: 'reference', target: () => SampleCategory })
  category: SampleCategory;
}

@ViewEntity()
export class SampleView {
  @ViewColumn()
  sampleId: number;
}

@Dto()
export class CreateSampleDto {
  @Property({ type: 'string' })
  name: string;

  @Property({ type: 'object', target: () => IDDto })
  category: IDDto;
}

@Dto()
export class UpdateSampleDto extends PartialType(CreateSampleDto) {}
