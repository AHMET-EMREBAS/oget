/**
 * Env keys for `AppConfig`
 */
export enum AppConfig {
  APP_NAME = 'APP_NAME',
  APP_DESCRIPTION = 'APP_DESCRIPTION',
  PORT = 'PORT',
}

/**
 * Env keys for `JwtConfig`
 */
export enum JwtConfig {
  JWT_SECRET = 'JWT_SECRET',
  JWT_EXPIRE_IN = 'JWT_EXPIRE_IN',
}

/**
 * Env keys for `DatabaseConfig`
 */
export enum DbConfig {
  NAME = 'DATABASE_NAME',
  USERNAME = 'DATABASE_USERNAME',
  PASSOWRD = 'DATABASE_PASSWORD',
}
