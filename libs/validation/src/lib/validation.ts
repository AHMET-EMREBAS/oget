import { PropertyOptions } from '@oget/type';
import {
  IsString,
  IsPassportNumber,
  IsNumber,
  IsInt,
  IsDate,
  IsObject,
  ValidationOptions,
  IsBoolean,
  IsEmail,
  IsStrongPassword,
} from 'class-validator';
import {} from 'class-transformer';

export function StringValidation(
  options?: PropertyOptions,
  vo?: ValidationOptions
): PropertyDecorator {
  return (t, p) => {
    IsString(vo)(t, p);

    const format = options?.format;

    // Format Validation
    if (format) {
      switch (format) {
        case 'email':
          IsEmail({}, vo)(t, p);
          break;
        case 'password':
          IsStrongPassword({}, vo)(t, p);
          break;

        // TODO: add other validations
      }
    }
  };
}
export function NumberValidation(
  options?: PropertyOptions,
  vo?: ValidationOptions
): PropertyDecorator {
  return (t, p) => {
    IsNumber({}, vo)(t, p);

    if (options?.isInt) {
      IsInt(vo)(t, p);
    }
  };
}
export function BooleanValidation(
  options?: PropertyOptions,
  vo?: ValidationOptions
): PropertyDecorator {
  return (t, p) => {
    IsBoolean(vo)(t, p);
  };
}
export function DateValidation(
  options?: PropertyOptions,
  vo?: ValidationOptions
): PropertyDecorator {
  return (t, p) => {
    IsDate(vo)(t, p);
  };
}
export function ObjectValidation(
  options?: PropertyOptions,
  vo?: ValidationOptions
): PropertyDecorator {
  return (t, p) => {
    IsObject(vo)(t, p);
  };
}

/**
 * Validate data-transfer-object properties
 * @param options
 * @returns
 */
export function Validation(options?: PropertyOptions): PropertyDecorator {
  return (t, p) => {
    const vo: ValidationOptions = { each: !!options?.isArray };

    if (options) {
      const { type } = options;
      if (type) {
        switch (type) {
          case 'string':
            StringValidation(options, vo)(t, p);
            break;
          case 'number':
            NumberValidation(options, vo)(t, p);
            break;
          case 'boolean':
            BooleanValidation(options, vo)(t, p);
            break;
          case 'date':
            DateValidation(options, vo)(t, p);
            break;
          case 'object':
            ObjectValidation(options, vo)(t, p);
            break;
        }
      }
    }

    StringValidation(options, vo)(t, p);
  };
}
