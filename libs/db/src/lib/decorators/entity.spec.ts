import { DataSource, Repository } from 'typeorm';
import { Entity } from './entity';
import { BaseEntity } from '../base';
import { Column } from './column';
import { ViewColumn } from './view-column';
import { ViewEntity } from './view';
import { Relation } from './relation';
import { datasource } from '@oget/testing';

@Entity()
class Category extends BaseEntity {
  @Column({ type: 'string' })
  name: string;
}

@Entity()
class Sample extends BaseEntity {
  @Column({ type: 'string' }) string: string;
  @Column({ type: 'number' }) number: number;
  @Column({ type: 'boolean' }) boolean: boolean;
  @Column({ type: 'date' }) date: Date;
  @Column({ type: 'object', target: () => Category }) object: Category;
  @Relation({ type: 'ref', target: () => Category }) category: Category;
  @Relation({ type: 'refs', target: () => Category }) categories: Category[];
}

@ViewEntity({
  expression(ds) {
    return ds
      .createQueryBuilder()
      .select('main.id', 'sampleId')
      .from(Sample, 'main');
  },
})
class SampleView {
  @ViewColumn() sampleId: number;
}

describe('Decorators', () => {
  const dateValue = new Date();

  let ds: DataSource;
  let sampleRepo: Repository<Sample>;
  let categoryRepo: Repository<Category>;
  let viewRepo: Repository<SampleView>;

  let saved: Sample;
  beforeAll(async () => {
    ds = await datasource([Sample, SampleView, Category]);
    sampleRepo = ds.getRepository(Sample);
    viewRepo = ds.getRepository(SampleView);
    categoryRepo = ds.getRepository(Category);

    saved = await sampleRepo.save({
      active: true,
      string: 'string',
      boolean: false,
      date: dateValue,
      number: 100,
      object: { name: 'some' },
    });
  });

  it('should create connection', () => {
    expect(ds).toBeTruthy();
  });

  it('should initialize repositories', () => {
    expect(sampleRepo).toBeTruthy();
    expect(viewRepo).toBeTruthy();
  });

  it('should save entity', async () => {
    expect(saved.active).toBe(true);
    expect(saved.string).toBe('string');
    expect(saved.boolean).toBe(false);
    expect(saved.date).toBe(dateValue);
    expect(saved.number).toBe(100);
    expect(saved.object.name).toBe('some');
  });

  it('shoud find', async () => {
    const found = await sampleRepo.findOneBy({ id: saved.id });
    assert(found);
    expect(found.active).toBe(true);
    expect(found.string).toBe('string');
    expect(found.boolean).toBe(false);
    expect(found.date).instanceOf(Date);
    expect(found.date.toString()).toBe(dateValue.toString());
    expect(found.number).toBe(100);
    expect(found.object.name).toBe('some');
  });

  it('should view', async () => {
    const result = await viewRepo.findOneBy({ sampleId: saved.id });
    expect(result).toBeTruthy();
  });

  afterAll(async () => {
    await ds.destroy();
  });
});
