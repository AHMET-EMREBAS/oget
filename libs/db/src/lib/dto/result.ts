import { ObjectLiteral, UpdateResult, DeleteResult } from 'typeorm';

export class UpdateResultDto implements UpdateResult {
  raw: any;
  affected?: number | undefined;
  generatedMaps: ObjectLiteral[];
}

export class DeleteResultDto implements DeleteResult {
  raw: any;
  affected?: number | null | undefined;
}
