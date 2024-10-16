import {
  DeleteResponse,
  MessageResponse,
  RelationResponse,
  UpdateResponse,
} from '@oget/type';
import { Dto } from '@oget/property';

@Dto()
export class UpdateResult implements UpdateResponse {}

@Dto()
export class DeleteResult implements DeleteResponse {}

@Dto()
export class RelationResult implements RelationResponse {}

@Dto()
export class MessgeResult implements MessageResponse {}
