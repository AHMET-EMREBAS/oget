import {
  StringCheckOptions,
  BooleanCheckOptions,
  CheckOptions,
  CommonCheckOptions,
  DateCheckOptions,
  NumberCheckOptions,
  ObjectCheckOptions,
  StringFormat,
} from './check-options';

describe('CheckOptions', () => {
  it('should define check options', () => {
    const CommonCheckOptions: CommonCheckOptions = {
      required: true,
      isArray: false,
    };

    const StringCheckOptions: StringCheckOptions = {
      type: 'string',
      format: 'some',
      minLength: 3,
      maxLength: 100,
    };

    const BooleanCheckOptions: BooleanCheckOptions = {
      type: 'boolean',
    };

    const DateCheckOptions: DateCheckOptions = {
      type: 'date',
      future: true,
      past: false,
    };

    const NumberCheckOptions: NumberCheckOptions = {
      type: 'number',
      minimum: 0,
      maximum: 100,
      isInt: true,
    };

    const ObjectCheckOptions: ObjectCheckOptions = {
      type: 'object',
      target: () => ({}),
    };

    const CheckOptionsForString: CheckOptions = {
      type: 'string',
      format: 'password',
      isArray: true,
      maxLength: 100,
      minLength: 30,
      required: true,
    };

    const CheckOptionsForNumber: CheckOptions = {
      type: 'number',
      isArray: true,
      required: true,
      minimum: 0,
      maximum: 100,
    };

    const CheckOptionsForBoolean: CheckOptions = {
      type: 'boolean',
      isArray: true,
      required: true,
    };

    expect(1).toBe(1);
  });
});
