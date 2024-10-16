import { Get, Post, Put, Delete, Controller } from '@nestjs/common';
import { RestApiPathBuilder } from '@oget/const';
import { PublicMethod, PublicResource } from './metadata';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { DeleteResult, RelationResult, UpdateResult } from './responses';

export type RestControllerBuilderOptions = {
  pathBuilder: RestApiPathBuilder;
  entity?: InstanceType<any>;
  createDto?: InstanceType<any>;
  updateDto?: InstanceType<any>;
};

export type ResourceMetadata = {
  isPublic?: boolean;
};

export class RestControllerBuilder {
  private readonly p: RestApiPathBuilder;

  constructor(private readonly options: RestControllerBuilderOptions) {
    this.p = options.pathBuilder;
  }

  private IsPublic(options: ResourceMetadata): MethodDecorator {
    return (t, p, d) => {
      if (options.isPublic) {
        PublicMethod()(t, p, d);
      } else {
        ApiBearerAuth()(t, p, d);
      }
    };
  }

  Controller(options: ResourceMetadata): ClassDecorator {
    return (t) => {
      Controller()(t);
      if (options.isPublic === true) {
        PublicResource()(t);
      } else {
        ApiBearerAuth()(t);
      }
    };
  }

  Find(options: ResourceMetadata): MethodDecorator {
    return (t, p, d) => {
      Get(this.p.PLURAL)(t, p, d);
      this.IsPublic(options)(t, p, d);
      ApiOkResponse({ type: this.options.entity, isArray: true });
    };
  }

  FindOneById(options: ResourceMetadata): MethodDecorator {
    return (t, p, d) => {
      Get(this.p.ID)(t, p, d);
      ApiOkResponse({ type: this.options.entity });
      this.IsPublic(options)(t, p, d);
    };
  }

  Save(options: ResourceMetadata): MethodDecorator {
    return (t, p, d) => {
      Post(this.p.SIGNULAR)(t, p, d);
      ApiCreatedResponse({ type: this.options.entity });
      this.IsPublic(options)(t, p, d);
    };
  }

  Update(options: ResourceMetadata): MethodDecorator {
    return (t, p, d) => {
      Put(this.p.ID)(t, p, d);
      ApiOkResponse({ type: UpdateResult });
      this.IsPublic(options)(t, p, d);
    };
  }

  Delete(options: ResourceMetadata): MethodDecorator {
    return (t, p, d) => {
      Delete(this.p.ID)(t, p, d);
      ApiOkResponse({ type: DeleteResult });
      this.IsPublic(options)(t, p, d);
    };
  }

  AddRelation(options: ResourceMetadata): MethodDecorator {
    return (t, p, d) => {
      Put(this.p.RELATION)(t, p, d);
      ApiOkResponse({ type: RelationResult });
      this.IsPublic(options)(t, p, d);
    };
  }

  RemoveRelation(options: ResourceMetadata): MethodDecorator {
    return (t, p, d) => {
      Delete(this.p.RELATION)(t, p, d);
      this.IsPublic(options)(t, p, d);
    };
  }

  SetRelation(options: ResourceMetadata): MethodDecorator {
    return (t, p, d) => {
      Post(this.p.RELATION)(t, p, d);
      this.IsPublic(options)(t, p, d);
    };
  }

  UnsetRelation(options: ResourceMetadata): MethodDecorator {
    return (t, p, d) => {
      Delete(this.p.UNSET_RELATION)(t, p, d);
      ApiOkResponse({ type: RelationResult });
      this.IsPublic(options)(t, p, d);
    };
  }
}
