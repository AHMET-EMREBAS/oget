import { ID } from '@oget/type';
import { Dto } from './dto.decorator';
import { Property } from './property.decorator';

@Dto()
export class IDDto implements ID {
  @Property({ type: 'number', required: true, minimum: 1 }) id: number;
}
