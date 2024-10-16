export type RestApiPathOptions = {
  singular: string;
  plural: string;
  prefix?: string;
};

export class RestApiPathBuilder {
  readonly PREFIX?: string;
  readonly SIGNULAR: string;
  readonly PLURAL: string;
  readonly ID: string;
  readonly RELATION: string;
  readonly UNSET_RELATION: string;

  private p(...args: (string | undefined)[]) {
    return args
      .filter((e) => e)
      .map((e) => e?.toLowerCase())
      .join('/');
  }

  constructor(options: RestApiPathOptions) {
    const { prefix, singular, plural } = options;

    this.PREFIX = prefix?.toLowerCase();
    this.SIGNULAR = this.p(this.PREFIX, singular);
    this.PLURAL = this.p(this.PREFIX, plural);
    this.ID = this.p(this.SIGNULAR, ':id');
    this.RELATION = this.p(this.SIGNULAR, ':id', ':rn', ':rid');
    this.UNSET_RELATION = this.p(this.SIGNULAR, ':id', ':rn');
  }

  relation(relationName: string) {
    return this.p(this.SIGNULAR, ':id', relationName, ':rid');
  }

  unsetRelation(relationName: string) {
    return this.p(this.SIGNULAR, ':id', relationName);
  }
}
