
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model company
 * 
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>
/**
 * Model company_program
 * 
 */
export type company_program = $Result.DefaultSelection<Prisma.$company_programPayload>
/**
 * Model entrepreneur
 * 
 */
export type entrepreneur = $Result.DefaultSelection<Prisma.$entrepreneurPayload>
/**
 * Model entrepreneur_company
 * 
 */
export type entrepreneur_company = $Result.DefaultSelection<Prisma.$entrepreneur_companyPayload>
/**
 * Model program
 * 
 */
export type program = $Result.DefaultSelection<Prisma.$programPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.companyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company_program`: Exposes CRUD operations for the **company_program** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Company_programs
    * const company_programs = await prisma.company_program.findMany()
    * ```
    */
  get company_program(): Prisma.company_programDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.entrepreneur`: Exposes CRUD operations for the **entrepreneur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entrepreneurs
    * const entrepreneurs = await prisma.entrepreneur.findMany()
    * ```
    */
  get entrepreneur(): Prisma.entrepreneurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.entrepreneur_company`: Exposes CRUD operations for the **entrepreneur_company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entrepreneur_companies
    * const entrepreneur_companies = await prisma.entrepreneur_company.findMany()
    * ```
    */
  get entrepreneur_company(): Prisma.entrepreneur_companyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.program`: Exposes CRUD operations for the **program** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Programs
    * const programs = await prisma.program.findMany()
    * ```
    */
  get program(): Prisma.programDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    company: 'company',
    company_program: 'company_program',
    entrepreneur: 'entrepreneur',
    entrepreneur_company: 'entrepreneur_company',
    program: 'program'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "company" | "company_program" | "entrepreneur" | "entrepreneur_company" | "program"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      company: {
        payload: Prisma.$companyPayload<ExtArgs>
        fields: Prisma.companyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[]
          }
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.companyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[]
          }
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.companyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[]
          }
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.companyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      company_program: {
        payload: Prisma.$company_programPayload<ExtArgs>
        fields: Prisma.company_programFieldRefs
        operations: {
          findUnique: {
            args: Prisma.company_programFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$company_programPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.company_programFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$company_programPayload>
          }
          findFirst: {
            args: Prisma.company_programFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$company_programPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.company_programFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$company_programPayload>
          }
          findMany: {
            args: Prisma.company_programFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$company_programPayload>[]
          }
          create: {
            args: Prisma.company_programCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$company_programPayload>
          }
          createMany: {
            args: Prisma.company_programCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.company_programCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$company_programPayload>[]
          }
          delete: {
            args: Prisma.company_programDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$company_programPayload>
          }
          update: {
            args: Prisma.company_programUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$company_programPayload>
          }
          deleteMany: {
            args: Prisma.company_programDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.company_programUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.company_programUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$company_programPayload>[]
          }
          upsert: {
            args: Prisma.company_programUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$company_programPayload>
          }
          aggregate: {
            args: Prisma.Company_programAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany_program>
          }
          groupBy: {
            args: Prisma.company_programGroupByArgs<ExtArgs>
            result: $Utils.Optional<Company_programGroupByOutputType>[]
          }
          count: {
            args: Prisma.company_programCountArgs<ExtArgs>
            result: $Utils.Optional<Company_programCountAggregateOutputType> | number
          }
        }
      }
      entrepreneur: {
        payload: Prisma.$entrepreneurPayload<ExtArgs>
        fields: Prisma.entrepreneurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.entrepreneurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrepreneurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.entrepreneurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrepreneurPayload>
          }
          findFirst: {
            args: Prisma.entrepreneurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrepreneurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.entrepreneurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrepreneurPayload>
          }
          findMany: {
            args: Prisma.entrepreneurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrepreneurPayload>[]
          }
          create: {
            args: Prisma.entrepreneurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrepreneurPayload>
          }
          createMany: {
            args: Prisma.entrepreneurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.entrepreneurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrepreneurPayload>[]
          }
          delete: {
            args: Prisma.entrepreneurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrepreneurPayload>
          }
          update: {
            args: Prisma.entrepreneurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrepreneurPayload>
          }
          deleteMany: {
            args: Prisma.entrepreneurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.entrepreneurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.entrepreneurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrepreneurPayload>[]
          }
          upsert: {
            args: Prisma.entrepreneurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrepreneurPayload>
          }
          aggregate: {
            args: Prisma.EntrepreneurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntrepreneur>
          }
          groupBy: {
            args: Prisma.entrepreneurGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntrepreneurGroupByOutputType>[]
          }
          count: {
            args: Prisma.entrepreneurCountArgs<ExtArgs>
            result: $Utils.Optional<EntrepreneurCountAggregateOutputType> | number
          }
        }
      }
      entrepreneur_company: {
        payload: Prisma.$entrepreneur_companyPayload<ExtArgs>
        fields: Prisma.entrepreneur_companyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.entrepreneur_companyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrepreneur_companyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.entrepreneur_companyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrepreneur_companyPayload>
          }
          findFirst: {
            args: Prisma.entrepreneur_companyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrepreneur_companyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.entrepreneur_companyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrepreneur_companyPayload>
          }
          findMany: {
            args: Prisma.entrepreneur_companyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrepreneur_companyPayload>[]
          }
          create: {
            args: Prisma.entrepreneur_companyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrepreneur_companyPayload>
          }
          createMany: {
            args: Prisma.entrepreneur_companyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.entrepreneur_companyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrepreneur_companyPayload>[]
          }
          delete: {
            args: Prisma.entrepreneur_companyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrepreneur_companyPayload>
          }
          update: {
            args: Prisma.entrepreneur_companyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrepreneur_companyPayload>
          }
          deleteMany: {
            args: Prisma.entrepreneur_companyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.entrepreneur_companyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.entrepreneur_companyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrepreneur_companyPayload>[]
          }
          upsert: {
            args: Prisma.entrepreneur_companyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$entrepreneur_companyPayload>
          }
          aggregate: {
            args: Prisma.Entrepreneur_companyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntrepreneur_company>
          }
          groupBy: {
            args: Prisma.entrepreneur_companyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Entrepreneur_companyGroupByOutputType>[]
          }
          count: {
            args: Prisma.entrepreneur_companyCountArgs<ExtArgs>
            result: $Utils.Optional<Entrepreneur_companyCountAggregateOutputType> | number
          }
        }
      }
      program: {
        payload: Prisma.$programPayload<ExtArgs>
        fields: Prisma.programFieldRefs
        operations: {
          findUnique: {
            args: Prisma.programFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.programFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programPayload>
          }
          findFirst: {
            args: Prisma.programFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.programFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programPayload>
          }
          findMany: {
            args: Prisma.programFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programPayload>[]
          }
          create: {
            args: Prisma.programCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programPayload>
          }
          createMany: {
            args: Prisma.programCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.programCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programPayload>[]
          }
          delete: {
            args: Prisma.programDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programPayload>
          }
          update: {
            args: Prisma.programUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programPayload>
          }
          deleteMany: {
            args: Prisma.programDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.programUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.programUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programPayload>[]
          }
          upsert: {
            args: Prisma.programUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programPayload>
          }
          aggregate: {
            args: Prisma.ProgramAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgram>
          }
          groupBy: {
            args: Prisma.programGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgramGroupByOutputType>[]
          }
          count: {
            args: Prisma.programCountArgs<ExtArgs>
            result: $Utils.Optional<ProgramCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    company?: companyOmit
    company_program?: company_programOmit
    entrepreneur?: entrepreneurOmit
    entrepreneur_company?: entrepreneur_companyOmit
    program?: programOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    company_program: number
    entrepreneur_company: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company_program?: boolean | CompanyCountOutputTypeCountCompany_programArgs
    entrepreneur_company?: boolean | CompanyCountOutputTypeCountEntrepreneur_companyArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountCompany_programArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: company_programWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountEntrepreneur_companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: entrepreneur_companyWhereInput
  }


  /**
   * Count Type EntrepreneurCountOutputType
   */

  export type EntrepreneurCountOutputType = {
    entrepreneur_company: number
  }

  export type EntrepreneurCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entrepreneur_company?: boolean | EntrepreneurCountOutputTypeCountEntrepreneur_companyArgs
  }

  // Custom InputTypes
  /**
   * EntrepreneurCountOutputType without action
   */
  export type EntrepreneurCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntrepreneurCountOutputType
     */
    select?: EntrepreneurCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EntrepreneurCountOutputType without action
   */
  export type EntrepreneurCountOutputTypeCountEntrepreneur_companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: entrepreneur_companyWhereInput
  }


  /**
   * Count Type ProgramCountOutputType
   */

  export type ProgramCountOutputType = {
    company_program: number
  }

  export type ProgramCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company_program?: boolean | ProgramCountOutputTypeCountCompany_programArgs
  }

  // Custom InputTypes
  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramCountOutputType
     */
    select?: ProgramCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeCountCompany_programArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: company_programWhereInput
  }


  /**
   * Models
   */

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    revenue: Decimal | null
  }

  export type CompanySumAggregateOutputType = {
    revenue: Decimal | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    logo_url: string | null
    status: string | null
    sector: string | null
    creation_date: Date | null
    location_city: string | null
    description: string | null
    revenue: Decimal | null
    project_deck_url: string | null
    created_at: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    logo_url: string | null
    status: string | null
    sector: string | null
    creation_date: Date | null
    location_city: string | null
    description: string | null
    revenue: Decimal | null
    project_deck_url: string | null
    created_at: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    logo_url: number
    status: number
    sector: number
    creation_date: number
    location_city: number
    description: number
    revenue: number
    project_deck_url: number
    created_at: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    revenue?: true
  }

  export type CompanySumAggregateInputType = {
    revenue?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    logo_url?: true
    status?: true
    sector?: true
    creation_date?: true
    location_city?: true
    description?: true
    revenue?: true
    project_deck_url?: true
    created_at?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    logo_url?: true
    status?: true
    sector?: true
    creation_date?: true
    location_city?: true
    description?: true
    revenue?: true
    project_deck_url?: true
    created_at?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    logo_url?: true
    status?: true
    sector?: true
    creation_date?: true
    location_city?: true
    description?: true
    revenue?: true
    project_deck_url?: true
    created_at?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: companyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string
    phone: string | null
    email: string | null
    logo_url: string | null
    status: string | null
    sector: string | null
    creation_date: Date | null
    location_city: string | null
    description: string | null
    revenue: Decimal | null
    project_deck_url: string | null
    created_at: Date | null
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    logo_url?: boolean
    status?: boolean
    sector?: boolean
    creation_date?: boolean
    location_city?: boolean
    description?: boolean
    revenue?: boolean
    project_deck_url?: boolean
    created_at?: boolean
    company_program?: boolean | company$company_programArgs<ExtArgs>
    entrepreneur_company?: boolean | company$entrepreneur_companyArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type companySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    logo_url?: boolean
    status?: boolean
    sector?: boolean
    creation_date?: boolean
    location_city?: boolean
    description?: boolean
    revenue?: boolean
    project_deck_url?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["company"]>

  export type companySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    logo_url?: boolean
    status?: boolean
    sector?: boolean
    creation_date?: boolean
    location_city?: boolean
    description?: boolean
    revenue?: boolean
    project_deck_url?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["company"]>

  export type companySelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    logo_url?: boolean
    status?: boolean
    sector?: boolean
    creation_date?: boolean
    location_city?: boolean
    description?: boolean
    revenue?: boolean
    project_deck_url?: boolean
    created_at?: boolean
  }

  export type companyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "email" | "logo_url" | "status" | "sector" | "creation_date" | "location_city" | "description" | "revenue" | "project_deck_url" | "created_at", ExtArgs["result"]["company"]>
  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company_program?: boolean | company$company_programArgs<ExtArgs>
    entrepreneur_company?: boolean | company$entrepreneur_companyArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type companyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type companyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "company"
    objects: {
      company_program: Prisma.$company_programPayload<ExtArgs>[]
      entrepreneur_company: Prisma.$entrepreneur_companyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string | null
      email: string | null
      logo_url: string | null
      status: string | null
      sector: string | null
      creation_date: Date | null
      location_city: string | null
      description: string | null
      revenue: Prisma.Decimal | null
      project_deck_url: string | null
      created_at: Date | null
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<Prisma.$companyPayload, S>

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<companyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company'], meta: { name: 'company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends companyFindUniqueArgs>(args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs>(args: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends companyFindFirstArgs>(args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs>(args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends companyFindManyArgs>(args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends companyCreateArgs>(args: SelectSubset<T, companyCreateArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {companyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends companyCreateManyArgs>(args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {companyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends companyCreateManyAndReturnArgs>(args?: SelectSubset<T, companyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends companyDeleteArgs>(args: SelectSubset<T, companyDeleteArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends companyUpdateArgs>(args: SelectSubset<T, companyUpdateArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends companyDeleteManyArgs>(args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends companyUpdateManyArgs>(args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {companyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends companyUpdateManyAndReturnArgs>(args: SelectSubset<T, companyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends companyUpsertArgs>(args: SelectSubset<T, companyUpsertArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the company model
   */
  readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company_program<T extends company$company_programArgs<ExtArgs> = {}>(args?: Subset<T, company$company_programArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$company_programPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    entrepreneur_company<T extends company$entrepreneur_companyArgs<ExtArgs> = {}>(args?: Subset<T, company$entrepreneur_companyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$entrepreneur_companyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<"company", 'String'>
    readonly name: FieldRef<"company", 'String'>
    readonly phone: FieldRef<"company", 'String'>
    readonly email: FieldRef<"company", 'String'>
    readonly logo_url: FieldRef<"company", 'String'>
    readonly status: FieldRef<"company", 'String'>
    readonly sector: FieldRef<"company", 'String'>
    readonly creation_date: FieldRef<"company", 'DateTime'>
    readonly location_city: FieldRef<"company", 'String'>
    readonly description: FieldRef<"company", 'String'>
    readonly revenue: FieldRef<"company", 'Decimal'>
    readonly project_deck_url: FieldRef<"company", 'String'>
    readonly created_at: FieldRef<"company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>
  }

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * company createManyAndReturn
   */
  export type companyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput
    /**
     * Limit how many companies to update.
     */
    limit?: number
  }

  /**
   * company updateManyAndReturn
   */
  export type companyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput
    /**
     * Limit how many companies to update.
     */
    limit?: number
  }

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>
  }

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput
    /**
     * Limit how many companies to delete.
     */
    limit?: number
  }

  /**
   * company.company_program
   */
  export type company$company_programArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_program
     */
    select?: company_programSelect<ExtArgs> | null
    /**
     * Omit specific fields from the company_program
     */
    omit?: company_programOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_programInclude<ExtArgs> | null
    where?: company_programWhereInput
    orderBy?: company_programOrderByWithRelationInput | company_programOrderByWithRelationInput[]
    cursor?: company_programWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Company_programScalarFieldEnum | Company_programScalarFieldEnum[]
  }

  /**
   * company.entrepreneur_company
   */
  export type company$entrepreneur_companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrepreneur_company
     */
    select?: entrepreneur_companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrepreneur_company
     */
    omit?: entrepreneur_companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrepreneur_companyInclude<ExtArgs> | null
    where?: entrepreneur_companyWhereInput
    orderBy?: entrepreneur_companyOrderByWithRelationInput | entrepreneur_companyOrderByWithRelationInput[]
    cursor?: entrepreneur_companyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Entrepreneur_companyScalarFieldEnum | Entrepreneur_companyScalarFieldEnum[]
  }

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
  }


  /**
   * Model company_program
   */

  export type AggregateCompany_program = {
    _count: Company_programCountAggregateOutputType | null
    _avg: Company_programAvgAggregateOutputType | null
    _sum: Company_programSumAggregateOutputType | null
    _min: Company_programMinAggregateOutputType | null
    _max: Company_programMaxAggregateOutputType | null
  }

  export type Company_programAvgAggregateOutputType = {
    funding_amount: number | null
  }

  export type Company_programSumAggregateOutputType = {
    funding_amount: number | null
  }

  export type Company_programMinAggregateOutputType = {
    id: string | null
    company_id: string | null
    program_id: string | null
    support_type: string | null
    funding_amount: number | null
    funding_date: Date | null
    created_at: Date | null
  }

  export type Company_programMaxAggregateOutputType = {
    id: string | null
    company_id: string | null
    program_id: string | null
    support_type: string | null
    funding_amount: number | null
    funding_date: Date | null
    created_at: Date | null
  }

  export type Company_programCountAggregateOutputType = {
    id: number
    company_id: number
    program_id: number
    support_type: number
    funding_amount: number
    funding_date: number
    created_at: number
    _all: number
  }


  export type Company_programAvgAggregateInputType = {
    funding_amount?: true
  }

  export type Company_programSumAggregateInputType = {
    funding_amount?: true
  }

  export type Company_programMinAggregateInputType = {
    id?: true
    company_id?: true
    program_id?: true
    support_type?: true
    funding_amount?: true
    funding_date?: true
    created_at?: true
  }

  export type Company_programMaxAggregateInputType = {
    id?: true
    company_id?: true
    program_id?: true
    support_type?: true
    funding_amount?: true
    funding_date?: true
    created_at?: true
  }

  export type Company_programCountAggregateInputType = {
    id?: true
    company_id?: true
    program_id?: true
    support_type?: true
    funding_amount?: true
    funding_date?: true
    created_at?: true
    _all?: true
  }

  export type Company_programAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company_program to aggregate.
     */
    where?: company_programWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of company_programs to fetch.
     */
    orderBy?: company_programOrderByWithRelationInput | company_programOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: company_programWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` company_programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` company_programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned company_programs
    **/
    _count?: true | Company_programCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Company_programAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Company_programSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Company_programMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Company_programMaxAggregateInputType
  }

  export type GetCompany_programAggregateType<T extends Company_programAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany_program]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany_program[P]>
      : GetScalarType<T[P], AggregateCompany_program[P]>
  }




  export type company_programGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: company_programWhereInput
    orderBy?: company_programOrderByWithAggregationInput | company_programOrderByWithAggregationInput[]
    by: Company_programScalarFieldEnum[] | Company_programScalarFieldEnum
    having?: company_programScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Company_programCountAggregateInputType | true
    _avg?: Company_programAvgAggregateInputType
    _sum?: Company_programSumAggregateInputType
    _min?: Company_programMinAggregateInputType
    _max?: Company_programMaxAggregateInputType
  }

  export type Company_programGroupByOutputType = {
    id: string
    company_id: string | null
    program_id: string | null
    support_type: string | null
    funding_amount: number | null
    funding_date: Date | null
    created_at: Date | null
    _count: Company_programCountAggregateOutputType | null
    _avg: Company_programAvgAggregateOutputType | null
    _sum: Company_programSumAggregateOutputType | null
    _min: Company_programMinAggregateOutputType | null
    _max: Company_programMaxAggregateOutputType | null
  }

  type GetCompany_programGroupByPayload<T extends company_programGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Company_programGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Company_programGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Company_programGroupByOutputType[P]>
            : GetScalarType<T[P], Company_programGroupByOutputType[P]>
        }
      >
    >


  export type company_programSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    program_id?: boolean
    support_type?: boolean
    funding_amount?: boolean
    funding_date?: boolean
    created_at?: boolean
    company?: boolean | company_program$companyArgs<ExtArgs>
    program?: boolean | company_program$programArgs<ExtArgs>
  }, ExtArgs["result"]["company_program"]>

  export type company_programSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    program_id?: boolean
    support_type?: boolean
    funding_amount?: boolean
    funding_date?: boolean
    created_at?: boolean
    company?: boolean | company_program$companyArgs<ExtArgs>
    program?: boolean | company_program$programArgs<ExtArgs>
  }, ExtArgs["result"]["company_program"]>

  export type company_programSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    program_id?: boolean
    support_type?: boolean
    funding_amount?: boolean
    funding_date?: boolean
    created_at?: boolean
    company?: boolean | company_program$companyArgs<ExtArgs>
    program?: boolean | company_program$programArgs<ExtArgs>
  }, ExtArgs["result"]["company_program"]>

  export type company_programSelectScalar = {
    id?: boolean
    company_id?: boolean
    program_id?: boolean
    support_type?: boolean
    funding_amount?: boolean
    funding_date?: boolean
    created_at?: boolean
  }

  export type company_programOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company_id" | "program_id" | "support_type" | "funding_amount" | "funding_date" | "created_at", ExtArgs["result"]["company_program"]>
  export type company_programInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | company_program$companyArgs<ExtArgs>
    program?: boolean | company_program$programArgs<ExtArgs>
  }
  export type company_programIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | company_program$companyArgs<ExtArgs>
    program?: boolean | company_program$programArgs<ExtArgs>
  }
  export type company_programIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | company_program$companyArgs<ExtArgs>
    program?: boolean | company_program$programArgs<ExtArgs>
  }

  export type $company_programPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "company_program"
    objects: {
      company: Prisma.$companyPayload<ExtArgs> | null
      program: Prisma.$programPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      company_id: string | null
      program_id: string | null
      support_type: string | null
      funding_amount: number | null
      funding_date: Date | null
      created_at: Date | null
    }, ExtArgs["result"]["company_program"]>
    composites: {}
  }

  type company_programGetPayload<S extends boolean | null | undefined | company_programDefaultArgs> = $Result.GetResult<Prisma.$company_programPayload, S>

  type company_programCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<company_programFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Company_programCountAggregateInputType | true
    }

  export interface company_programDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company_program'], meta: { name: 'company_program' } }
    /**
     * Find zero or one Company_program that matches the filter.
     * @param {company_programFindUniqueArgs} args - Arguments to find a Company_program
     * @example
     * // Get one Company_program
     * const company_program = await prisma.company_program.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends company_programFindUniqueArgs>(args: SelectSubset<T, company_programFindUniqueArgs<ExtArgs>>): Prisma__company_programClient<$Result.GetResult<Prisma.$company_programPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company_program that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {company_programFindUniqueOrThrowArgs} args - Arguments to find a Company_program
     * @example
     * // Get one Company_program
     * const company_program = await prisma.company_program.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends company_programFindUniqueOrThrowArgs>(args: SelectSubset<T, company_programFindUniqueOrThrowArgs<ExtArgs>>): Prisma__company_programClient<$Result.GetResult<Prisma.$company_programPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company_program that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {company_programFindFirstArgs} args - Arguments to find a Company_program
     * @example
     * // Get one Company_program
     * const company_program = await prisma.company_program.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends company_programFindFirstArgs>(args?: SelectSubset<T, company_programFindFirstArgs<ExtArgs>>): Prisma__company_programClient<$Result.GetResult<Prisma.$company_programPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company_program that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {company_programFindFirstOrThrowArgs} args - Arguments to find a Company_program
     * @example
     * // Get one Company_program
     * const company_program = await prisma.company_program.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends company_programFindFirstOrThrowArgs>(args?: SelectSubset<T, company_programFindFirstOrThrowArgs<ExtArgs>>): Prisma__company_programClient<$Result.GetResult<Prisma.$company_programPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Company_programs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {company_programFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Company_programs
     * const company_programs = await prisma.company_program.findMany()
     * 
     * // Get first 10 Company_programs
     * const company_programs = await prisma.company_program.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const company_programWithIdOnly = await prisma.company_program.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends company_programFindManyArgs>(args?: SelectSubset<T, company_programFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$company_programPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company_program.
     * @param {company_programCreateArgs} args - Arguments to create a Company_program.
     * @example
     * // Create one Company_program
     * const Company_program = await prisma.company_program.create({
     *   data: {
     *     // ... data to create a Company_program
     *   }
     * })
     * 
     */
    create<T extends company_programCreateArgs>(args: SelectSubset<T, company_programCreateArgs<ExtArgs>>): Prisma__company_programClient<$Result.GetResult<Prisma.$company_programPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Company_programs.
     * @param {company_programCreateManyArgs} args - Arguments to create many Company_programs.
     * @example
     * // Create many Company_programs
     * const company_program = await prisma.company_program.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends company_programCreateManyArgs>(args?: SelectSubset<T, company_programCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Company_programs and returns the data saved in the database.
     * @param {company_programCreateManyAndReturnArgs} args - Arguments to create many Company_programs.
     * @example
     * // Create many Company_programs
     * const company_program = await prisma.company_program.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Company_programs and only return the `id`
     * const company_programWithIdOnly = await prisma.company_program.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends company_programCreateManyAndReturnArgs>(args?: SelectSubset<T, company_programCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$company_programPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company_program.
     * @param {company_programDeleteArgs} args - Arguments to delete one Company_program.
     * @example
     * // Delete one Company_program
     * const Company_program = await prisma.company_program.delete({
     *   where: {
     *     // ... filter to delete one Company_program
     *   }
     * })
     * 
     */
    delete<T extends company_programDeleteArgs>(args: SelectSubset<T, company_programDeleteArgs<ExtArgs>>): Prisma__company_programClient<$Result.GetResult<Prisma.$company_programPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company_program.
     * @param {company_programUpdateArgs} args - Arguments to update one Company_program.
     * @example
     * // Update one Company_program
     * const company_program = await prisma.company_program.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends company_programUpdateArgs>(args: SelectSubset<T, company_programUpdateArgs<ExtArgs>>): Prisma__company_programClient<$Result.GetResult<Prisma.$company_programPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Company_programs.
     * @param {company_programDeleteManyArgs} args - Arguments to filter Company_programs to delete.
     * @example
     * // Delete a few Company_programs
     * const { count } = await prisma.company_program.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends company_programDeleteManyArgs>(args?: SelectSubset<T, company_programDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Company_programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {company_programUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Company_programs
     * const company_program = await prisma.company_program.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends company_programUpdateManyArgs>(args: SelectSubset<T, company_programUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Company_programs and returns the data updated in the database.
     * @param {company_programUpdateManyAndReturnArgs} args - Arguments to update many Company_programs.
     * @example
     * // Update many Company_programs
     * const company_program = await prisma.company_program.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Company_programs and only return the `id`
     * const company_programWithIdOnly = await prisma.company_program.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends company_programUpdateManyAndReturnArgs>(args: SelectSubset<T, company_programUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$company_programPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company_program.
     * @param {company_programUpsertArgs} args - Arguments to update or create a Company_program.
     * @example
     * // Update or create a Company_program
     * const company_program = await prisma.company_program.upsert({
     *   create: {
     *     // ... data to create a Company_program
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company_program we want to update
     *   }
     * })
     */
    upsert<T extends company_programUpsertArgs>(args: SelectSubset<T, company_programUpsertArgs<ExtArgs>>): Prisma__company_programClient<$Result.GetResult<Prisma.$company_programPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Company_programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {company_programCountArgs} args - Arguments to filter Company_programs to count.
     * @example
     * // Count the number of Company_programs
     * const count = await prisma.company_program.count({
     *   where: {
     *     // ... the filter for the Company_programs we want to count
     *   }
     * })
    **/
    count<T extends company_programCountArgs>(
      args?: Subset<T, company_programCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Company_programCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company_program.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Company_programAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Company_programAggregateArgs>(args: Subset<T, Company_programAggregateArgs>): Prisma.PrismaPromise<GetCompany_programAggregateType<T>>

    /**
     * Group by Company_program.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {company_programGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends company_programGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: company_programGroupByArgs['orderBy'] }
        : { orderBy?: company_programGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, company_programGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompany_programGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the company_program model
   */
  readonly fields: company_programFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company_program.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__company_programClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends company_program$companyArgs<ExtArgs> = {}>(args?: Subset<T, company_program$companyArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    program<T extends company_program$programArgs<ExtArgs> = {}>(args?: Subset<T, company_program$programArgs<ExtArgs>>): Prisma__programClient<$Result.GetResult<Prisma.$programPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the company_program model
   */
  interface company_programFieldRefs {
    readonly id: FieldRef<"company_program", 'String'>
    readonly company_id: FieldRef<"company_program", 'String'>
    readonly program_id: FieldRef<"company_program", 'String'>
    readonly support_type: FieldRef<"company_program", 'String'>
    readonly funding_amount: FieldRef<"company_program", 'Int'>
    readonly funding_date: FieldRef<"company_program", 'DateTime'>
    readonly created_at: FieldRef<"company_program", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * company_program findUnique
   */
  export type company_programFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_program
     */
    select?: company_programSelect<ExtArgs> | null
    /**
     * Omit specific fields from the company_program
     */
    omit?: company_programOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_programInclude<ExtArgs> | null
    /**
     * Filter, which company_program to fetch.
     */
    where: company_programWhereUniqueInput
  }

  /**
   * company_program findUniqueOrThrow
   */
  export type company_programFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_program
     */
    select?: company_programSelect<ExtArgs> | null
    /**
     * Omit specific fields from the company_program
     */
    omit?: company_programOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_programInclude<ExtArgs> | null
    /**
     * Filter, which company_program to fetch.
     */
    where: company_programWhereUniqueInput
  }

  /**
   * company_program findFirst
   */
  export type company_programFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_program
     */
    select?: company_programSelect<ExtArgs> | null
    /**
     * Omit specific fields from the company_program
     */
    omit?: company_programOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_programInclude<ExtArgs> | null
    /**
     * Filter, which company_program to fetch.
     */
    where?: company_programWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of company_programs to fetch.
     */
    orderBy?: company_programOrderByWithRelationInput | company_programOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for company_programs.
     */
    cursor?: company_programWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` company_programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` company_programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of company_programs.
     */
    distinct?: Company_programScalarFieldEnum | Company_programScalarFieldEnum[]
  }

  /**
   * company_program findFirstOrThrow
   */
  export type company_programFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_program
     */
    select?: company_programSelect<ExtArgs> | null
    /**
     * Omit specific fields from the company_program
     */
    omit?: company_programOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_programInclude<ExtArgs> | null
    /**
     * Filter, which company_program to fetch.
     */
    where?: company_programWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of company_programs to fetch.
     */
    orderBy?: company_programOrderByWithRelationInput | company_programOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for company_programs.
     */
    cursor?: company_programWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` company_programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` company_programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of company_programs.
     */
    distinct?: Company_programScalarFieldEnum | Company_programScalarFieldEnum[]
  }

  /**
   * company_program findMany
   */
  export type company_programFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_program
     */
    select?: company_programSelect<ExtArgs> | null
    /**
     * Omit specific fields from the company_program
     */
    omit?: company_programOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_programInclude<ExtArgs> | null
    /**
     * Filter, which company_programs to fetch.
     */
    where?: company_programWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of company_programs to fetch.
     */
    orderBy?: company_programOrderByWithRelationInput | company_programOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing company_programs.
     */
    cursor?: company_programWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` company_programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` company_programs.
     */
    skip?: number
    distinct?: Company_programScalarFieldEnum | Company_programScalarFieldEnum[]
  }

  /**
   * company_program create
   */
  export type company_programCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_program
     */
    select?: company_programSelect<ExtArgs> | null
    /**
     * Omit specific fields from the company_program
     */
    omit?: company_programOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_programInclude<ExtArgs> | null
    /**
     * The data needed to create a company_program.
     */
    data?: XOR<company_programCreateInput, company_programUncheckedCreateInput>
  }

  /**
   * company_program createMany
   */
  export type company_programCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many company_programs.
     */
    data: company_programCreateManyInput | company_programCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * company_program createManyAndReturn
   */
  export type company_programCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_program
     */
    select?: company_programSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the company_program
     */
    omit?: company_programOmit<ExtArgs> | null
    /**
     * The data used to create many company_programs.
     */
    data: company_programCreateManyInput | company_programCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_programIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * company_program update
   */
  export type company_programUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_program
     */
    select?: company_programSelect<ExtArgs> | null
    /**
     * Omit specific fields from the company_program
     */
    omit?: company_programOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_programInclude<ExtArgs> | null
    /**
     * The data needed to update a company_program.
     */
    data: XOR<company_programUpdateInput, company_programUncheckedUpdateInput>
    /**
     * Choose, which company_program to update.
     */
    where: company_programWhereUniqueInput
  }

  /**
   * company_program updateMany
   */
  export type company_programUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update company_programs.
     */
    data: XOR<company_programUpdateManyMutationInput, company_programUncheckedUpdateManyInput>
    /**
     * Filter which company_programs to update
     */
    where?: company_programWhereInput
    /**
     * Limit how many company_programs to update.
     */
    limit?: number
  }

  /**
   * company_program updateManyAndReturn
   */
  export type company_programUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_program
     */
    select?: company_programSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the company_program
     */
    omit?: company_programOmit<ExtArgs> | null
    /**
     * The data used to update company_programs.
     */
    data: XOR<company_programUpdateManyMutationInput, company_programUncheckedUpdateManyInput>
    /**
     * Filter which company_programs to update
     */
    where?: company_programWhereInput
    /**
     * Limit how many company_programs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_programIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * company_program upsert
   */
  export type company_programUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_program
     */
    select?: company_programSelect<ExtArgs> | null
    /**
     * Omit specific fields from the company_program
     */
    omit?: company_programOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_programInclude<ExtArgs> | null
    /**
     * The filter to search for the company_program to update in case it exists.
     */
    where: company_programWhereUniqueInput
    /**
     * In case the company_program found by the `where` argument doesn't exist, create a new company_program with this data.
     */
    create: XOR<company_programCreateInput, company_programUncheckedCreateInput>
    /**
     * In case the company_program was found with the provided `where` argument, update it with this data.
     */
    update: XOR<company_programUpdateInput, company_programUncheckedUpdateInput>
  }

  /**
   * company_program delete
   */
  export type company_programDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_program
     */
    select?: company_programSelect<ExtArgs> | null
    /**
     * Omit specific fields from the company_program
     */
    omit?: company_programOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_programInclude<ExtArgs> | null
    /**
     * Filter which company_program to delete.
     */
    where: company_programWhereUniqueInput
  }

  /**
   * company_program deleteMany
   */
  export type company_programDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company_programs to delete
     */
    where?: company_programWhereInput
    /**
     * Limit how many company_programs to delete.
     */
    limit?: number
  }

  /**
   * company_program.company
   */
  export type company_program$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    where?: companyWhereInput
  }

  /**
   * company_program.program
   */
  export type company_program$programArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program
     */
    select?: programSelect<ExtArgs> | null
    /**
     * Omit specific fields from the program
     */
    omit?: programOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programInclude<ExtArgs> | null
    where?: programWhereInput
  }

  /**
   * company_program without action
   */
  export type company_programDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_program
     */
    select?: company_programSelect<ExtArgs> | null
    /**
     * Omit specific fields from the company_program
     */
    omit?: company_programOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_programInclude<ExtArgs> | null
  }


  /**
   * Model entrepreneur
   */

  export type AggregateEntrepreneur = {
    _count: EntrepreneurCountAggregateOutputType | null
    _min: EntrepreneurMinAggregateOutputType | null
    _max: EntrepreneurMaxAggregateOutputType | null
  }

  export type EntrepreneurMinAggregateOutputType = {
    id: string | null
    last_name: string | null
    first_name: string | null
    gender: string | null
    phone: string | null
    email: string | null
    photo_url: string | null
    cv_url: string | null
    created_at: Date | null
  }

  export type EntrepreneurMaxAggregateOutputType = {
    id: string | null
    last_name: string | null
    first_name: string | null
    gender: string | null
    phone: string | null
    email: string | null
    photo_url: string | null
    cv_url: string | null
    created_at: Date | null
  }

  export type EntrepreneurCountAggregateOutputType = {
    id: number
    last_name: number
    first_name: number
    gender: number
    phone: number
    email: number
    photo_url: number
    cv_url: number
    created_at: number
    _all: number
  }


  export type EntrepreneurMinAggregateInputType = {
    id?: true
    last_name?: true
    first_name?: true
    gender?: true
    phone?: true
    email?: true
    photo_url?: true
    cv_url?: true
    created_at?: true
  }

  export type EntrepreneurMaxAggregateInputType = {
    id?: true
    last_name?: true
    first_name?: true
    gender?: true
    phone?: true
    email?: true
    photo_url?: true
    cv_url?: true
    created_at?: true
  }

  export type EntrepreneurCountAggregateInputType = {
    id?: true
    last_name?: true
    first_name?: true
    gender?: true
    phone?: true
    email?: true
    photo_url?: true
    cv_url?: true
    created_at?: true
    _all?: true
  }

  export type EntrepreneurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which entrepreneur to aggregate.
     */
    where?: entrepreneurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entrepreneurs to fetch.
     */
    orderBy?: entrepreneurOrderByWithRelationInput | entrepreneurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: entrepreneurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entrepreneurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entrepreneurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned entrepreneurs
    **/
    _count?: true | EntrepreneurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntrepreneurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntrepreneurMaxAggregateInputType
  }

  export type GetEntrepreneurAggregateType<T extends EntrepreneurAggregateArgs> = {
        [P in keyof T & keyof AggregateEntrepreneur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntrepreneur[P]>
      : GetScalarType<T[P], AggregateEntrepreneur[P]>
  }




  export type entrepreneurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: entrepreneurWhereInput
    orderBy?: entrepreneurOrderByWithAggregationInput | entrepreneurOrderByWithAggregationInput[]
    by: EntrepreneurScalarFieldEnum[] | EntrepreneurScalarFieldEnum
    having?: entrepreneurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntrepreneurCountAggregateInputType | true
    _min?: EntrepreneurMinAggregateInputType
    _max?: EntrepreneurMaxAggregateInputType
  }

  export type EntrepreneurGroupByOutputType = {
    id: string
    last_name: string
    first_name: string
    gender: string
    phone: string
    email: string
    photo_url: string | null
    cv_url: string | null
    created_at: Date | null
    _count: EntrepreneurCountAggregateOutputType | null
    _min: EntrepreneurMinAggregateOutputType | null
    _max: EntrepreneurMaxAggregateOutputType | null
  }

  type GetEntrepreneurGroupByPayload<T extends entrepreneurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntrepreneurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntrepreneurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntrepreneurGroupByOutputType[P]>
            : GetScalarType<T[P], EntrepreneurGroupByOutputType[P]>
        }
      >
    >


  export type entrepreneurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    last_name?: boolean
    first_name?: boolean
    gender?: boolean
    phone?: boolean
    email?: boolean
    photo_url?: boolean
    cv_url?: boolean
    created_at?: boolean
    entrepreneur_company?: boolean | entrepreneur$entrepreneur_companyArgs<ExtArgs>
    _count?: boolean | EntrepreneurCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entrepreneur"]>

  export type entrepreneurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    last_name?: boolean
    first_name?: boolean
    gender?: boolean
    phone?: boolean
    email?: boolean
    photo_url?: boolean
    cv_url?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["entrepreneur"]>

  export type entrepreneurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    last_name?: boolean
    first_name?: boolean
    gender?: boolean
    phone?: boolean
    email?: boolean
    photo_url?: boolean
    cv_url?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["entrepreneur"]>

  export type entrepreneurSelectScalar = {
    id?: boolean
    last_name?: boolean
    first_name?: boolean
    gender?: boolean
    phone?: boolean
    email?: boolean
    photo_url?: boolean
    cv_url?: boolean
    created_at?: boolean
  }

  export type entrepreneurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "last_name" | "first_name" | "gender" | "phone" | "email" | "photo_url" | "cv_url" | "created_at", ExtArgs["result"]["entrepreneur"]>
  export type entrepreneurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entrepreneur_company?: boolean | entrepreneur$entrepreneur_companyArgs<ExtArgs>
    _count?: boolean | EntrepreneurCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type entrepreneurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type entrepreneurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $entrepreneurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "entrepreneur"
    objects: {
      entrepreneur_company: Prisma.$entrepreneur_companyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      last_name: string
      first_name: string
      gender: string
      phone: string
      email: string
      photo_url: string | null
      cv_url: string | null
      created_at: Date | null
    }, ExtArgs["result"]["entrepreneur"]>
    composites: {}
  }

  type entrepreneurGetPayload<S extends boolean | null | undefined | entrepreneurDefaultArgs> = $Result.GetResult<Prisma.$entrepreneurPayload, S>

  type entrepreneurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<entrepreneurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntrepreneurCountAggregateInputType | true
    }

  export interface entrepreneurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['entrepreneur'], meta: { name: 'entrepreneur' } }
    /**
     * Find zero or one Entrepreneur that matches the filter.
     * @param {entrepreneurFindUniqueArgs} args - Arguments to find a Entrepreneur
     * @example
     * // Get one Entrepreneur
     * const entrepreneur = await prisma.entrepreneur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends entrepreneurFindUniqueArgs>(args: SelectSubset<T, entrepreneurFindUniqueArgs<ExtArgs>>): Prisma__entrepreneurClient<$Result.GetResult<Prisma.$entrepreneurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entrepreneur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {entrepreneurFindUniqueOrThrowArgs} args - Arguments to find a Entrepreneur
     * @example
     * // Get one Entrepreneur
     * const entrepreneur = await prisma.entrepreneur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends entrepreneurFindUniqueOrThrowArgs>(args: SelectSubset<T, entrepreneurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__entrepreneurClient<$Result.GetResult<Prisma.$entrepreneurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entrepreneur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entrepreneurFindFirstArgs} args - Arguments to find a Entrepreneur
     * @example
     * // Get one Entrepreneur
     * const entrepreneur = await prisma.entrepreneur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends entrepreneurFindFirstArgs>(args?: SelectSubset<T, entrepreneurFindFirstArgs<ExtArgs>>): Prisma__entrepreneurClient<$Result.GetResult<Prisma.$entrepreneurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entrepreneur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entrepreneurFindFirstOrThrowArgs} args - Arguments to find a Entrepreneur
     * @example
     * // Get one Entrepreneur
     * const entrepreneur = await prisma.entrepreneur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends entrepreneurFindFirstOrThrowArgs>(args?: SelectSubset<T, entrepreneurFindFirstOrThrowArgs<ExtArgs>>): Prisma__entrepreneurClient<$Result.GetResult<Prisma.$entrepreneurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entrepreneurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entrepreneurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entrepreneurs
     * const entrepreneurs = await prisma.entrepreneur.findMany()
     * 
     * // Get first 10 Entrepreneurs
     * const entrepreneurs = await prisma.entrepreneur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entrepreneurWithIdOnly = await prisma.entrepreneur.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends entrepreneurFindManyArgs>(args?: SelectSubset<T, entrepreneurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$entrepreneurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entrepreneur.
     * @param {entrepreneurCreateArgs} args - Arguments to create a Entrepreneur.
     * @example
     * // Create one Entrepreneur
     * const Entrepreneur = await prisma.entrepreneur.create({
     *   data: {
     *     // ... data to create a Entrepreneur
     *   }
     * })
     * 
     */
    create<T extends entrepreneurCreateArgs>(args: SelectSubset<T, entrepreneurCreateArgs<ExtArgs>>): Prisma__entrepreneurClient<$Result.GetResult<Prisma.$entrepreneurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entrepreneurs.
     * @param {entrepreneurCreateManyArgs} args - Arguments to create many Entrepreneurs.
     * @example
     * // Create many Entrepreneurs
     * const entrepreneur = await prisma.entrepreneur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends entrepreneurCreateManyArgs>(args?: SelectSubset<T, entrepreneurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Entrepreneurs and returns the data saved in the database.
     * @param {entrepreneurCreateManyAndReturnArgs} args - Arguments to create many Entrepreneurs.
     * @example
     * // Create many Entrepreneurs
     * const entrepreneur = await prisma.entrepreneur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Entrepreneurs and only return the `id`
     * const entrepreneurWithIdOnly = await prisma.entrepreneur.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends entrepreneurCreateManyAndReturnArgs>(args?: SelectSubset<T, entrepreneurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$entrepreneurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Entrepreneur.
     * @param {entrepreneurDeleteArgs} args - Arguments to delete one Entrepreneur.
     * @example
     * // Delete one Entrepreneur
     * const Entrepreneur = await prisma.entrepreneur.delete({
     *   where: {
     *     // ... filter to delete one Entrepreneur
     *   }
     * })
     * 
     */
    delete<T extends entrepreneurDeleteArgs>(args: SelectSubset<T, entrepreneurDeleteArgs<ExtArgs>>): Prisma__entrepreneurClient<$Result.GetResult<Prisma.$entrepreneurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entrepreneur.
     * @param {entrepreneurUpdateArgs} args - Arguments to update one Entrepreneur.
     * @example
     * // Update one Entrepreneur
     * const entrepreneur = await prisma.entrepreneur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends entrepreneurUpdateArgs>(args: SelectSubset<T, entrepreneurUpdateArgs<ExtArgs>>): Prisma__entrepreneurClient<$Result.GetResult<Prisma.$entrepreneurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entrepreneurs.
     * @param {entrepreneurDeleteManyArgs} args - Arguments to filter Entrepreneurs to delete.
     * @example
     * // Delete a few Entrepreneurs
     * const { count } = await prisma.entrepreneur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends entrepreneurDeleteManyArgs>(args?: SelectSubset<T, entrepreneurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entrepreneurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entrepreneurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entrepreneurs
     * const entrepreneur = await prisma.entrepreneur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends entrepreneurUpdateManyArgs>(args: SelectSubset<T, entrepreneurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entrepreneurs and returns the data updated in the database.
     * @param {entrepreneurUpdateManyAndReturnArgs} args - Arguments to update many Entrepreneurs.
     * @example
     * // Update many Entrepreneurs
     * const entrepreneur = await prisma.entrepreneur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Entrepreneurs and only return the `id`
     * const entrepreneurWithIdOnly = await prisma.entrepreneur.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends entrepreneurUpdateManyAndReturnArgs>(args: SelectSubset<T, entrepreneurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$entrepreneurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Entrepreneur.
     * @param {entrepreneurUpsertArgs} args - Arguments to update or create a Entrepreneur.
     * @example
     * // Update or create a Entrepreneur
     * const entrepreneur = await prisma.entrepreneur.upsert({
     *   create: {
     *     // ... data to create a Entrepreneur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entrepreneur we want to update
     *   }
     * })
     */
    upsert<T extends entrepreneurUpsertArgs>(args: SelectSubset<T, entrepreneurUpsertArgs<ExtArgs>>): Prisma__entrepreneurClient<$Result.GetResult<Prisma.$entrepreneurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entrepreneurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entrepreneurCountArgs} args - Arguments to filter Entrepreneurs to count.
     * @example
     * // Count the number of Entrepreneurs
     * const count = await prisma.entrepreneur.count({
     *   where: {
     *     // ... the filter for the Entrepreneurs we want to count
     *   }
     * })
    **/
    count<T extends entrepreneurCountArgs>(
      args?: Subset<T, entrepreneurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntrepreneurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entrepreneur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepreneurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EntrepreneurAggregateArgs>(args: Subset<T, EntrepreneurAggregateArgs>): Prisma.PrismaPromise<GetEntrepreneurAggregateType<T>>

    /**
     * Group by Entrepreneur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entrepreneurGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends entrepreneurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: entrepreneurGroupByArgs['orderBy'] }
        : { orderBy?: entrepreneurGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, entrepreneurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntrepreneurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the entrepreneur model
   */
  readonly fields: entrepreneurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for entrepreneur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__entrepreneurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entrepreneur_company<T extends entrepreneur$entrepreneur_companyArgs<ExtArgs> = {}>(args?: Subset<T, entrepreneur$entrepreneur_companyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$entrepreneur_companyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the entrepreneur model
   */
  interface entrepreneurFieldRefs {
    readonly id: FieldRef<"entrepreneur", 'String'>
    readonly last_name: FieldRef<"entrepreneur", 'String'>
    readonly first_name: FieldRef<"entrepreneur", 'String'>
    readonly gender: FieldRef<"entrepreneur", 'String'>
    readonly phone: FieldRef<"entrepreneur", 'String'>
    readonly email: FieldRef<"entrepreneur", 'String'>
    readonly photo_url: FieldRef<"entrepreneur", 'String'>
    readonly cv_url: FieldRef<"entrepreneur", 'String'>
    readonly created_at: FieldRef<"entrepreneur", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * entrepreneur findUnique
   */
  export type entrepreneurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrepreneur
     */
    select?: entrepreneurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrepreneur
     */
    omit?: entrepreneurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrepreneurInclude<ExtArgs> | null
    /**
     * Filter, which entrepreneur to fetch.
     */
    where: entrepreneurWhereUniqueInput
  }

  /**
   * entrepreneur findUniqueOrThrow
   */
  export type entrepreneurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrepreneur
     */
    select?: entrepreneurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrepreneur
     */
    omit?: entrepreneurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrepreneurInclude<ExtArgs> | null
    /**
     * Filter, which entrepreneur to fetch.
     */
    where: entrepreneurWhereUniqueInput
  }

  /**
   * entrepreneur findFirst
   */
  export type entrepreneurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrepreneur
     */
    select?: entrepreneurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrepreneur
     */
    omit?: entrepreneurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrepreneurInclude<ExtArgs> | null
    /**
     * Filter, which entrepreneur to fetch.
     */
    where?: entrepreneurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entrepreneurs to fetch.
     */
    orderBy?: entrepreneurOrderByWithRelationInput | entrepreneurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for entrepreneurs.
     */
    cursor?: entrepreneurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entrepreneurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entrepreneurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of entrepreneurs.
     */
    distinct?: EntrepreneurScalarFieldEnum | EntrepreneurScalarFieldEnum[]
  }

  /**
   * entrepreneur findFirstOrThrow
   */
  export type entrepreneurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrepreneur
     */
    select?: entrepreneurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrepreneur
     */
    omit?: entrepreneurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrepreneurInclude<ExtArgs> | null
    /**
     * Filter, which entrepreneur to fetch.
     */
    where?: entrepreneurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entrepreneurs to fetch.
     */
    orderBy?: entrepreneurOrderByWithRelationInput | entrepreneurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for entrepreneurs.
     */
    cursor?: entrepreneurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entrepreneurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entrepreneurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of entrepreneurs.
     */
    distinct?: EntrepreneurScalarFieldEnum | EntrepreneurScalarFieldEnum[]
  }

  /**
   * entrepreneur findMany
   */
  export type entrepreneurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrepreneur
     */
    select?: entrepreneurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrepreneur
     */
    omit?: entrepreneurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrepreneurInclude<ExtArgs> | null
    /**
     * Filter, which entrepreneurs to fetch.
     */
    where?: entrepreneurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entrepreneurs to fetch.
     */
    orderBy?: entrepreneurOrderByWithRelationInput | entrepreneurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing entrepreneurs.
     */
    cursor?: entrepreneurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entrepreneurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entrepreneurs.
     */
    skip?: number
    distinct?: EntrepreneurScalarFieldEnum | EntrepreneurScalarFieldEnum[]
  }

  /**
   * entrepreneur create
   */
  export type entrepreneurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrepreneur
     */
    select?: entrepreneurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrepreneur
     */
    omit?: entrepreneurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrepreneurInclude<ExtArgs> | null
    /**
     * The data needed to create a entrepreneur.
     */
    data: XOR<entrepreneurCreateInput, entrepreneurUncheckedCreateInput>
  }

  /**
   * entrepreneur createMany
   */
  export type entrepreneurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many entrepreneurs.
     */
    data: entrepreneurCreateManyInput | entrepreneurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * entrepreneur createManyAndReturn
   */
  export type entrepreneurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrepreneur
     */
    select?: entrepreneurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the entrepreneur
     */
    omit?: entrepreneurOmit<ExtArgs> | null
    /**
     * The data used to create many entrepreneurs.
     */
    data: entrepreneurCreateManyInput | entrepreneurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * entrepreneur update
   */
  export type entrepreneurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrepreneur
     */
    select?: entrepreneurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrepreneur
     */
    omit?: entrepreneurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrepreneurInclude<ExtArgs> | null
    /**
     * The data needed to update a entrepreneur.
     */
    data: XOR<entrepreneurUpdateInput, entrepreneurUncheckedUpdateInput>
    /**
     * Choose, which entrepreneur to update.
     */
    where: entrepreneurWhereUniqueInput
  }

  /**
   * entrepreneur updateMany
   */
  export type entrepreneurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update entrepreneurs.
     */
    data: XOR<entrepreneurUpdateManyMutationInput, entrepreneurUncheckedUpdateManyInput>
    /**
     * Filter which entrepreneurs to update
     */
    where?: entrepreneurWhereInput
    /**
     * Limit how many entrepreneurs to update.
     */
    limit?: number
  }

  /**
   * entrepreneur updateManyAndReturn
   */
  export type entrepreneurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrepreneur
     */
    select?: entrepreneurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the entrepreneur
     */
    omit?: entrepreneurOmit<ExtArgs> | null
    /**
     * The data used to update entrepreneurs.
     */
    data: XOR<entrepreneurUpdateManyMutationInput, entrepreneurUncheckedUpdateManyInput>
    /**
     * Filter which entrepreneurs to update
     */
    where?: entrepreneurWhereInput
    /**
     * Limit how many entrepreneurs to update.
     */
    limit?: number
  }

  /**
   * entrepreneur upsert
   */
  export type entrepreneurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrepreneur
     */
    select?: entrepreneurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrepreneur
     */
    omit?: entrepreneurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrepreneurInclude<ExtArgs> | null
    /**
     * The filter to search for the entrepreneur to update in case it exists.
     */
    where: entrepreneurWhereUniqueInput
    /**
     * In case the entrepreneur found by the `where` argument doesn't exist, create a new entrepreneur with this data.
     */
    create: XOR<entrepreneurCreateInput, entrepreneurUncheckedCreateInput>
    /**
     * In case the entrepreneur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<entrepreneurUpdateInput, entrepreneurUncheckedUpdateInput>
  }

  /**
   * entrepreneur delete
   */
  export type entrepreneurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrepreneur
     */
    select?: entrepreneurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrepreneur
     */
    omit?: entrepreneurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrepreneurInclude<ExtArgs> | null
    /**
     * Filter which entrepreneur to delete.
     */
    where: entrepreneurWhereUniqueInput
  }

  /**
   * entrepreneur deleteMany
   */
  export type entrepreneurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which entrepreneurs to delete
     */
    where?: entrepreneurWhereInput
    /**
     * Limit how many entrepreneurs to delete.
     */
    limit?: number
  }

  /**
   * entrepreneur.entrepreneur_company
   */
  export type entrepreneur$entrepreneur_companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrepreneur_company
     */
    select?: entrepreneur_companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrepreneur_company
     */
    omit?: entrepreneur_companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrepreneur_companyInclude<ExtArgs> | null
    where?: entrepreneur_companyWhereInput
    orderBy?: entrepreneur_companyOrderByWithRelationInput | entrepreneur_companyOrderByWithRelationInput[]
    cursor?: entrepreneur_companyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Entrepreneur_companyScalarFieldEnum | Entrepreneur_companyScalarFieldEnum[]
  }

  /**
   * entrepreneur without action
   */
  export type entrepreneurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrepreneur
     */
    select?: entrepreneurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrepreneur
     */
    omit?: entrepreneurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrepreneurInclude<ExtArgs> | null
  }


  /**
   * Model entrepreneur_company
   */

  export type AggregateEntrepreneur_company = {
    _count: Entrepreneur_companyCountAggregateOutputType | null
    _min: Entrepreneur_companyMinAggregateOutputType | null
    _max: Entrepreneur_companyMaxAggregateOutputType | null
  }

  export type Entrepreneur_companyMinAggregateOutputType = {
    id: string | null
    company_id: string | null
    entrepreneur_id: string | null
    is_leader: boolean | null
    created_at: Date | null
  }

  export type Entrepreneur_companyMaxAggregateOutputType = {
    id: string | null
    company_id: string | null
    entrepreneur_id: string | null
    is_leader: boolean | null
    created_at: Date | null
  }

  export type Entrepreneur_companyCountAggregateOutputType = {
    id: number
    company_id: number
    entrepreneur_id: number
    is_leader: number
    created_at: number
    _all: number
  }


  export type Entrepreneur_companyMinAggregateInputType = {
    id?: true
    company_id?: true
    entrepreneur_id?: true
    is_leader?: true
    created_at?: true
  }

  export type Entrepreneur_companyMaxAggregateInputType = {
    id?: true
    company_id?: true
    entrepreneur_id?: true
    is_leader?: true
    created_at?: true
  }

  export type Entrepreneur_companyCountAggregateInputType = {
    id?: true
    company_id?: true
    entrepreneur_id?: true
    is_leader?: true
    created_at?: true
    _all?: true
  }

  export type Entrepreneur_companyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which entrepreneur_company to aggregate.
     */
    where?: entrepreneur_companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entrepreneur_companies to fetch.
     */
    orderBy?: entrepreneur_companyOrderByWithRelationInput | entrepreneur_companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: entrepreneur_companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entrepreneur_companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entrepreneur_companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned entrepreneur_companies
    **/
    _count?: true | Entrepreneur_companyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Entrepreneur_companyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Entrepreneur_companyMaxAggregateInputType
  }

  export type GetEntrepreneur_companyAggregateType<T extends Entrepreneur_companyAggregateArgs> = {
        [P in keyof T & keyof AggregateEntrepreneur_company]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntrepreneur_company[P]>
      : GetScalarType<T[P], AggregateEntrepreneur_company[P]>
  }




  export type entrepreneur_companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: entrepreneur_companyWhereInput
    orderBy?: entrepreneur_companyOrderByWithAggregationInput | entrepreneur_companyOrderByWithAggregationInput[]
    by: Entrepreneur_companyScalarFieldEnum[] | Entrepreneur_companyScalarFieldEnum
    having?: entrepreneur_companyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Entrepreneur_companyCountAggregateInputType | true
    _min?: Entrepreneur_companyMinAggregateInputType
    _max?: Entrepreneur_companyMaxAggregateInputType
  }

  export type Entrepreneur_companyGroupByOutputType = {
    id: string
    company_id: string | null
    entrepreneur_id: string | null
    is_leader: boolean | null
    created_at: Date | null
    _count: Entrepreneur_companyCountAggregateOutputType | null
    _min: Entrepreneur_companyMinAggregateOutputType | null
    _max: Entrepreneur_companyMaxAggregateOutputType | null
  }

  type GetEntrepreneur_companyGroupByPayload<T extends entrepreneur_companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Entrepreneur_companyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Entrepreneur_companyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Entrepreneur_companyGroupByOutputType[P]>
            : GetScalarType<T[P], Entrepreneur_companyGroupByOutputType[P]>
        }
      >
    >


  export type entrepreneur_companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    entrepreneur_id?: boolean
    is_leader?: boolean
    created_at?: boolean
    company?: boolean | entrepreneur_company$companyArgs<ExtArgs>
    entrepreneur?: boolean | entrepreneur_company$entrepreneurArgs<ExtArgs>
  }, ExtArgs["result"]["entrepreneur_company"]>

  export type entrepreneur_companySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    entrepreneur_id?: boolean
    is_leader?: boolean
    created_at?: boolean
    company?: boolean | entrepreneur_company$companyArgs<ExtArgs>
    entrepreneur?: boolean | entrepreneur_company$entrepreneurArgs<ExtArgs>
  }, ExtArgs["result"]["entrepreneur_company"]>

  export type entrepreneur_companySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    entrepreneur_id?: boolean
    is_leader?: boolean
    created_at?: boolean
    company?: boolean | entrepreneur_company$companyArgs<ExtArgs>
    entrepreneur?: boolean | entrepreneur_company$entrepreneurArgs<ExtArgs>
  }, ExtArgs["result"]["entrepreneur_company"]>

  export type entrepreneur_companySelectScalar = {
    id?: boolean
    company_id?: boolean
    entrepreneur_id?: boolean
    is_leader?: boolean
    created_at?: boolean
  }

  export type entrepreneur_companyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company_id" | "entrepreneur_id" | "is_leader" | "created_at", ExtArgs["result"]["entrepreneur_company"]>
  export type entrepreneur_companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | entrepreneur_company$companyArgs<ExtArgs>
    entrepreneur?: boolean | entrepreneur_company$entrepreneurArgs<ExtArgs>
  }
  export type entrepreneur_companyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | entrepreneur_company$companyArgs<ExtArgs>
    entrepreneur?: boolean | entrepreneur_company$entrepreneurArgs<ExtArgs>
  }
  export type entrepreneur_companyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | entrepreneur_company$companyArgs<ExtArgs>
    entrepreneur?: boolean | entrepreneur_company$entrepreneurArgs<ExtArgs>
  }

  export type $entrepreneur_companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "entrepreneur_company"
    objects: {
      company: Prisma.$companyPayload<ExtArgs> | null
      entrepreneur: Prisma.$entrepreneurPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      company_id: string | null
      entrepreneur_id: string | null
      is_leader: boolean | null
      created_at: Date | null
    }, ExtArgs["result"]["entrepreneur_company"]>
    composites: {}
  }

  type entrepreneur_companyGetPayload<S extends boolean | null | undefined | entrepreneur_companyDefaultArgs> = $Result.GetResult<Prisma.$entrepreneur_companyPayload, S>

  type entrepreneur_companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<entrepreneur_companyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Entrepreneur_companyCountAggregateInputType | true
    }

  export interface entrepreneur_companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['entrepreneur_company'], meta: { name: 'entrepreneur_company' } }
    /**
     * Find zero or one Entrepreneur_company that matches the filter.
     * @param {entrepreneur_companyFindUniqueArgs} args - Arguments to find a Entrepreneur_company
     * @example
     * // Get one Entrepreneur_company
     * const entrepreneur_company = await prisma.entrepreneur_company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends entrepreneur_companyFindUniqueArgs>(args: SelectSubset<T, entrepreneur_companyFindUniqueArgs<ExtArgs>>): Prisma__entrepreneur_companyClient<$Result.GetResult<Prisma.$entrepreneur_companyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entrepreneur_company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {entrepreneur_companyFindUniqueOrThrowArgs} args - Arguments to find a Entrepreneur_company
     * @example
     * // Get one Entrepreneur_company
     * const entrepreneur_company = await prisma.entrepreneur_company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends entrepreneur_companyFindUniqueOrThrowArgs>(args: SelectSubset<T, entrepreneur_companyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__entrepreneur_companyClient<$Result.GetResult<Prisma.$entrepreneur_companyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entrepreneur_company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entrepreneur_companyFindFirstArgs} args - Arguments to find a Entrepreneur_company
     * @example
     * // Get one Entrepreneur_company
     * const entrepreneur_company = await prisma.entrepreneur_company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends entrepreneur_companyFindFirstArgs>(args?: SelectSubset<T, entrepreneur_companyFindFirstArgs<ExtArgs>>): Prisma__entrepreneur_companyClient<$Result.GetResult<Prisma.$entrepreneur_companyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entrepreneur_company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entrepreneur_companyFindFirstOrThrowArgs} args - Arguments to find a Entrepreneur_company
     * @example
     * // Get one Entrepreneur_company
     * const entrepreneur_company = await prisma.entrepreneur_company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends entrepreneur_companyFindFirstOrThrowArgs>(args?: SelectSubset<T, entrepreneur_companyFindFirstOrThrowArgs<ExtArgs>>): Prisma__entrepreneur_companyClient<$Result.GetResult<Prisma.$entrepreneur_companyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entrepreneur_companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entrepreneur_companyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entrepreneur_companies
     * const entrepreneur_companies = await prisma.entrepreneur_company.findMany()
     * 
     * // Get first 10 Entrepreneur_companies
     * const entrepreneur_companies = await prisma.entrepreneur_company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entrepreneur_companyWithIdOnly = await prisma.entrepreneur_company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends entrepreneur_companyFindManyArgs>(args?: SelectSubset<T, entrepreneur_companyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$entrepreneur_companyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entrepreneur_company.
     * @param {entrepreneur_companyCreateArgs} args - Arguments to create a Entrepreneur_company.
     * @example
     * // Create one Entrepreneur_company
     * const Entrepreneur_company = await prisma.entrepreneur_company.create({
     *   data: {
     *     // ... data to create a Entrepreneur_company
     *   }
     * })
     * 
     */
    create<T extends entrepreneur_companyCreateArgs>(args: SelectSubset<T, entrepreneur_companyCreateArgs<ExtArgs>>): Prisma__entrepreneur_companyClient<$Result.GetResult<Prisma.$entrepreneur_companyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entrepreneur_companies.
     * @param {entrepreneur_companyCreateManyArgs} args - Arguments to create many Entrepreneur_companies.
     * @example
     * // Create many Entrepreneur_companies
     * const entrepreneur_company = await prisma.entrepreneur_company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends entrepreneur_companyCreateManyArgs>(args?: SelectSubset<T, entrepreneur_companyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Entrepreneur_companies and returns the data saved in the database.
     * @param {entrepreneur_companyCreateManyAndReturnArgs} args - Arguments to create many Entrepreneur_companies.
     * @example
     * // Create many Entrepreneur_companies
     * const entrepreneur_company = await prisma.entrepreneur_company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Entrepreneur_companies and only return the `id`
     * const entrepreneur_companyWithIdOnly = await prisma.entrepreneur_company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends entrepreneur_companyCreateManyAndReturnArgs>(args?: SelectSubset<T, entrepreneur_companyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$entrepreneur_companyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Entrepreneur_company.
     * @param {entrepreneur_companyDeleteArgs} args - Arguments to delete one Entrepreneur_company.
     * @example
     * // Delete one Entrepreneur_company
     * const Entrepreneur_company = await prisma.entrepreneur_company.delete({
     *   where: {
     *     // ... filter to delete one Entrepreneur_company
     *   }
     * })
     * 
     */
    delete<T extends entrepreneur_companyDeleteArgs>(args: SelectSubset<T, entrepreneur_companyDeleteArgs<ExtArgs>>): Prisma__entrepreneur_companyClient<$Result.GetResult<Prisma.$entrepreneur_companyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entrepreneur_company.
     * @param {entrepreneur_companyUpdateArgs} args - Arguments to update one Entrepreneur_company.
     * @example
     * // Update one Entrepreneur_company
     * const entrepreneur_company = await prisma.entrepreneur_company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends entrepreneur_companyUpdateArgs>(args: SelectSubset<T, entrepreneur_companyUpdateArgs<ExtArgs>>): Prisma__entrepreneur_companyClient<$Result.GetResult<Prisma.$entrepreneur_companyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entrepreneur_companies.
     * @param {entrepreneur_companyDeleteManyArgs} args - Arguments to filter Entrepreneur_companies to delete.
     * @example
     * // Delete a few Entrepreneur_companies
     * const { count } = await prisma.entrepreneur_company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends entrepreneur_companyDeleteManyArgs>(args?: SelectSubset<T, entrepreneur_companyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entrepreneur_companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entrepreneur_companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entrepreneur_companies
     * const entrepreneur_company = await prisma.entrepreneur_company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends entrepreneur_companyUpdateManyArgs>(args: SelectSubset<T, entrepreneur_companyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entrepreneur_companies and returns the data updated in the database.
     * @param {entrepreneur_companyUpdateManyAndReturnArgs} args - Arguments to update many Entrepreneur_companies.
     * @example
     * // Update many Entrepreneur_companies
     * const entrepreneur_company = await prisma.entrepreneur_company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Entrepreneur_companies and only return the `id`
     * const entrepreneur_companyWithIdOnly = await prisma.entrepreneur_company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends entrepreneur_companyUpdateManyAndReturnArgs>(args: SelectSubset<T, entrepreneur_companyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$entrepreneur_companyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Entrepreneur_company.
     * @param {entrepreneur_companyUpsertArgs} args - Arguments to update or create a Entrepreneur_company.
     * @example
     * // Update or create a Entrepreneur_company
     * const entrepreneur_company = await prisma.entrepreneur_company.upsert({
     *   create: {
     *     // ... data to create a Entrepreneur_company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entrepreneur_company we want to update
     *   }
     * })
     */
    upsert<T extends entrepreneur_companyUpsertArgs>(args: SelectSubset<T, entrepreneur_companyUpsertArgs<ExtArgs>>): Prisma__entrepreneur_companyClient<$Result.GetResult<Prisma.$entrepreneur_companyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entrepreneur_companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entrepreneur_companyCountArgs} args - Arguments to filter Entrepreneur_companies to count.
     * @example
     * // Count the number of Entrepreneur_companies
     * const count = await prisma.entrepreneur_company.count({
     *   where: {
     *     // ... the filter for the Entrepreneur_companies we want to count
     *   }
     * })
    **/
    count<T extends entrepreneur_companyCountArgs>(
      args?: Subset<T, entrepreneur_companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Entrepreneur_companyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entrepreneur_company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Entrepreneur_companyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Entrepreneur_companyAggregateArgs>(args: Subset<T, Entrepreneur_companyAggregateArgs>): Prisma.PrismaPromise<GetEntrepreneur_companyAggregateType<T>>

    /**
     * Group by Entrepreneur_company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {entrepreneur_companyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends entrepreneur_companyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: entrepreneur_companyGroupByArgs['orderBy'] }
        : { orderBy?: entrepreneur_companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, entrepreneur_companyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntrepreneur_companyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the entrepreneur_company model
   */
  readonly fields: entrepreneur_companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for entrepreneur_company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__entrepreneur_companyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends entrepreneur_company$companyArgs<ExtArgs> = {}>(args?: Subset<T, entrepreneur_company$companyArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    entrepreneur<T extends entrepreneur_company$entrepreneurArgs<ExtArgs> = {}>(args?: Subset<T, entrepreneur_company$entrepreneurArgs<ExtArgs>>): Prisma__entrepreneurClient<$Result.GetResult<Prisma.$entrepreneurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the entrepreneur_company model
   */
  interface entrepreneur_companyFieldRefs {
    readonly id: FieldRef<"entrepreneur_company", 'String'>
    readonly company_id: FieldRef<"entrepreneur_company", 'String'>
    readonly entrepreneur_id: FieldRef<"entrepreneur_company", 'String'>
    readonly is_leader: FieldRef<"entrepreneur_company", 'Boolean'>
    readonly created_at: FieldRef<"entrepreneur_company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * entrepreneur_company findUnique
   */
  export type entrepreneur_companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrepreneur_company
     */
    select?: entrepreneur_companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrepreneur_company
     */
    omit?: entrepreneur_companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrepreneur_companyInclude<ExtArgs> | null
    /**
     * Filter, which entrepreneur_company to fetch.
     */
    where: entrepreneur_companyWhereUniqueInput
  }

  /**
   * entrepreneur_company findUniqueOrThrow
   */
  export type entrepreneur_companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrepreneur_company
     */
    select?: entrepreneur_companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrepreneur_company
     */
    omit?: entrepreneur_companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrepreneur_companyInclude<ExtArgs> | null
    /**
     * Filter, which entrepreneur_company to fetch.
     */
    where: entrepreneur_companyWhereUniqueInput
  }

  /**
   * entrepreneur_company findFirst
   */
  export type entrepreneur_companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrepreneur_company
     */
    select?: entrepreneur_companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrepreneur_company
     */
    omit?: entrepreneur_companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrepreneur_companyInclude<ExtArgs> | null
    /**
     * Filter, which entrepreneur_company to fetch.
     */
    where?: entrepreneur_companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entrepreneur_companies to fetch.
     */
    orderBy?: entrepreneur_companyOrderByWithRelationInput | entrepreneur_companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for entrepreneur_companies.
     */
    cursor?: entrepreneur_companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entrepreneur_companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entrepreneur_companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of entrepreneur_companies.
     */
    distinct?: Entrepreneur_companyScalarFieldEnum | Entrepreneur_companyScalarFieldEnum[]
  }

  /**
   * entrepreneur_company findFirstOrThrow
   */
  export type entrepreneur_companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrepreneur_company
     */
    select?: entrepreneur_companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrepreneur_company
     */
    omit?: entrepreneur_companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrepreneur_companyInclude<ExtArgs> | null
    /**
     * Filter, which entrepreneur_company to fetch.
     */
    where?: entrepreneur_companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entrepreneur_companies to fetch.
     */
    orderBy?: entrepreneur_companyOrderByWithRelationInput | entrepreneur_companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for entrepreneur_companies.
     */
    cursor?: entrepreneur_companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entrepreneur_companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entrepreneur_companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of entrepreneur_companies.
     */
    distinct?: Entrepreneur_companyScalarFieldEnum | Entrepreneur_companyScalarFieldEnum[]
  }

  /**
   * entrepreneur_company findMany
   */
  export type entrepreneur_companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrepreneur_company
     */
    select?: entrepreneur_companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrepreneur_company
     */
    omit?: entrepreneur_companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrepreneur_companyInclude<ExtArgs> | null
    /**
     * Filter, which entrepreneur_companies to fetch.
     */
    where?: entrepreneur_companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of entrepreneur_companies to fetch.
     */
    orderBy?: entrepreneur_companyOrderByWithRelationInput | entrepreneur_companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing entrepreneur_companies.
     */
    cursor?: entrepreneur_companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` entrepreneur_companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` entrepreneur_companies.
     */
    skip?: number
    distinct?: Entrepreneur_companyScalarFieldEnum | Entrepreneur_companyScalarFieldEnum[]
  }

  /**
   * entrepreneur_company create
   */
  export type entrepreneur_companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrepreneur_company
     */
    select?: entrepreneur_companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrepreneur_company
     */
    omit?: entrepreneur_companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrepreneur_companyInclude<ExtArgs> | null
    /**
     * The data needed to create a entrepreneur_company.
     */
    data?: XOR<entrepreneur_companyCreateInput, entrepreneur_companyUncheckedCreateInput>
  }

  /**
   * entrepreneur_company createMany
   */
  export type entrepreneur_companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many entrepreneur_companies.
     */
    data: entrepreneur_companyCreateManyInput | entrepreneur_companyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * entrepreneur_company createManyAndReturn
   */
  export type entrepreneur_companyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrepreneur_company
     */
    select?: entrepreneur_companySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the entrepreneur_company
     */
    omit?: entrepreneur_companyOmit<ExtArgs> | null
    /**
     * The data used to create many entrepreneur_companies.
     */
    data: entrepreneur_companyCreateManyInput | entrepreneur_companyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrepreneur_companyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * entrepreneur_company update
   */
  export type entrepreneur_companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrepreneur_company
     */
    select?: entrepreneur_companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrepreneur_company
     */
    omit?: entrepreneur_companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrepreneur_companyInclude<ExtArgs> | null
    /**
     * The data needed to update a entrepreneur_company.
     */
    data: XOR<entrepreneur_companyUpdateInput, entrepreneur_companyUncheckedUpdateInput>
    /**
     * Choose, which entrepreneur_company to update.
     */
    where: entrepreneur_companyWhereUniqueInput
  }

  /**
   * entrepreneur_company updateMany
   */
  export type entrepreneur_companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update entrepreneur_companies.
     */
    data: XOR<entrepreneur_companyUpdateManyMutationInput, entrepreneur_companyUncheckedUpdateManyInput>
    /**
     * Filter which entrepreneur_companies to update
     */
    where?: entrepreneur_companyWhereInput
    /**
     * Limit how many entrepreneur_companies to update.
     */
    limit?: number
  }

  /**
   * entrepreneur_company updateManyAndReturn
   */
  export type entrepreneur_companyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrepreneur_company
     */
    select?: entrepreneur_companySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the entrepreneur_company
     */
    omit?: entrepreneur_companyOmit<ExtArgs> | null
    /**
     * The data used to update entrepreneur_companies.
     */
    data: XOR<entrepreneur_companyUpdateManyMutationInput, entrepreneur_companyUncheckedUpdateManyInput>
    /**
     * Filter which entrepreneur_companies to update
     */
    where?: entrepreneur_companyWhereInput
    /**
     * Limit how many entrepreneur_companies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrepreneur_companyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * entrepreneur_company upsert
   */
  export type entrepreneur_companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrepreneur_company
     */
    select?: entrepreneur_companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrepreneur_company
     */
    omit?: entrepreneur_companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrepreneur_companyInclude<ExtArgs> | null
    /**
     * The filter to search for the entrepreneur_company to update in case it exists.
     */
    where: entrepreneur_companyWhereUniqueInput
    /**
     * In case the entrepreneur_company found by the `where` argument doesn't exist, create a new entrepreneur_company with this data.
     */
    create: XOR<entrepreneur_companyCreateInput, entrepreneur_companyUncheckedCreateInput>
    /**
     * In case the entrepreneur_company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<entrepreneur_companyUpdateInput, entrepreneur_companyUncheckedUpdateInput>
  }

  /**
   * entrepreneur_company delete
   */
  export type entrepreneur_companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrepreneur_company
     */
    select?: entrepreneur_companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrepreneur_company
     */
    omit?: entrepreneur_companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrepreneur_companyInclude<ExtArgs> | null
    /**
     * Filter which entrepreneur_company to delete.
     */
    where: entrepreneur_companyWhereUniqueInput
  }

  /**
   * entrepreneur_company deleteMany
   */
  export type entrepreneur_companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which entrepreneur_companies to delete
     */
    where?: entrepreneur_companyWhereInput
    /**
     * Limit how many entrepreneur_companies to delete.
     */
    limit?: number
  }

  /**
   * entrepreneur_company.company
   */
  export type entrepreneur_company$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    where?: companyWhereInput
  }

  /**
   * entrepreneur_company.entrepreneur
   */
  export type entrepreneur_company$entrepreneurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrepreneur
     */
    select?: entrepreneurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrepreneur
     */
    omit?: entrepreneurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrepreneurInclude<ExtArgs> | null
    where?: entrepreneurWhereInput
  }

  /**
   * entrepreneur_company without action
   */
  export type entrepreneur_companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the entrepreneur_company
     */
    select?: entrepreneur_companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the entrepreneur_company
     */
    omit?: entrepreneur_companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: entrepreneur_companyInclude<ExtArgs> | null
  }


  /**
   * Model program
   */

  export type AggregateProgram = {
    _count: ProgramCountAggregateOutputType | null
    _min: ProgramMinAggregateOutputType | null
    _max: ProgramMaxAggregateOutputType | null
  }

  export type ProgramMinAggregateOutputType = {
    id: string | null
    name: string | null
    objective: string | null
    duration: string | null
    eligibility_conditions: string | null
    support_type: string | null
    budget: string | null
    launch_date: Date | null
    created_at: Date | null
  }

  export type ProgramMaxAggregateOutputType = {
    id: string | null
    name: string | null
    objective: string | null
    duration: string | null
    eligibility_conditions: string | null
    support_type: string | null
    budget: string | null
    launch_date: Date | null
    created_at: Date | null
  }

  export type ProgramCountAggregateOutputType = {
    id: number
    name: number
    objective: number
    duration: number
    eligibility_conditions: number
    support_type: number
    budget: number
    launch_date: number
    created_at: number
    _all: number
  }


  export type ProgramMinAggregateInputType = {
    id?: true
    name?: true
    objective?: true
    duration?: true
    eligibility_conditions?: true
    support_type?: true
    budget?: true
    launch_date?: true
    created_at?: true
  }

  export type ProgramMaxAggregateInputType = {
    id?: true
    name?: true
    objective?: true
    duration?: true
    eligibility_conditions?: true
    support_type?: true
    budget?: true
    launch_date?: true
    created_at?: true
  }

  export type ProgramCountAggregateInputType = {
    id?: true
    name?: true
    objective?: true
    duration?: true
    eligibility_conditions?: true
    support_type?: true
    budget?: true
    launch_date?: true
    created_at?: true
    _all?: true
  }

  export type ProgramAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which program to aggregate.
     */
    where?: programWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of programs to fetch.
     */
    orderBy?: programOrderByWithRelationInput | programOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: programWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned programs
    **/
    _count?: true | ProgramCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgramMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgramMaxAggregateInputType
  }

  export type GetProgramAggregateType<T extends ProgramAggregateArgs> = {
        [P in keyof T & keyof AggregateProgram]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgram[P]>
      : GetScalarType<T[P], AggregateProgram[P]>
  }




  export type programGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: programWhereInput
    orderBy?: programOrderByWithAggregationInput | programOrderByWithAggregationInput[]
    by: ProgramScalarFieldEnum[] | ProgramScalarFieldEnum
    having?: programScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgramCountAggregateInputType | true
    _min?: ProgramMinAggregateInputType
    _max?: ProgramMaxAggregateInputType
  }

  export type ProgramGroupByOutputType = {
    id: string
    name: string
    objective: string | null
    duration: string | null
    eligibility_conditions: string | null
    support_type: string
    budget: string | null
    launch_date: Date | null
    created_at: Date | null
    _count: ProgramCountAggregateOutputType | null
    _min: ProgramMinAggregateOutputType | null
    _max: ProgramMaxAggregateOutputType | null
  }

  type GetProgramGroupByPayload<T extends programGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgramGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgramGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgramGroupByOutputType[P]>
            : GetScalarType<T[P], ProgramGroupByOutputType[P]>
        }
      >
    >


  export type programSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    objective?: boolean
    duration?: boolean
    eligibility_conditions?: boolean
    support_type?: boolean
    budget?: boolean
    launch_date?: boolean
    created_at?: boolean
    company_program?: boolean | program$company_programArgs<ExtArgs>
    _count?: boolean | ProgramCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["program"]>

  export type programSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    objective?: boolean
    duration?: boolean
    eligibility_conditions?: boolean
    support_type?: boolean
    budget?: boolean
    launch_date?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["program"]>

  export type programSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    objective?: boolean
    duration?: boolean
    eligibility_conditions?: boolean
    support_type?: boolean
    budget?: boolean
    launch_date?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["program"]>

  export type programSelectScalar = {
    id?: boolean
    name?: boolean
    objective?: boolean
    duration?: boolean
    eligibility_conditions?: boolean
    support_type?: boolean
    budget?: boolean
    launch_date?: boolean
    created_at?: boolean
  }

  export type programOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "objective" | "duration" | "eligibility_conditions" | "support_type" | "budget" | "launch_date" | "created_at", ExtArgs["result"]["program"]>
  export type programInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company_program?: boolean | program$company_programArgs<ExtArgs>
    _count?: boolean | ProgramCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type programIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type programIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $programPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "program"
    objects: {
      company_program: Prisma.$company_programPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      objective: string | null
      duration: string | null
      eligibility_conditions: string | null
      support_type: string
      budget: string | null
      launch_date: Date | null
      created_at: Date | null
    }, ExtArgs["result"]["program"]>
    composites: {}
  }

  type programGetPayload<S extends boolean | null | undefined | programDefaultArgs> = $Result.GetResult<Prisma.$programPayload, S>

  type programCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<programFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgramCountAggregateInputType | true
    }

  export interface programDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['program'], meta: { name: 'program' } }
    /**
     * Find zero or one Program that matches the filter.
     * @param {programFindUniqueArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends programFindUniqueArgs>(args: SelectSubset<T, programFindUniqueArgs<ExtArgs>>): Prisma__programClient<$Result.GetResult<Prisma.$programPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Program that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {programFindUniqueOrThrowArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends programFindUniqueOrThrowArgs>(args: SelectSubset<T, programFindUniqueOrThrowArgs<ExtArgs>>): Prisma__programClient<$Result.GetResult<Prisma.$programPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Program that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {programFindFirstArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends programFindFirstArgs>(args?: SelectSubset<T, programFindFirstArgs<ExtArgs>>): Prisma__programClient<$Result.GetResult<Prisma.$programPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Program that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {programFindFirstOrThrowArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends programFindFirstOrThrowArgs>(args?: SelectSubset<T, programFindFirstOrThrowArgs<ExtArgs>>): Prisma__programClient<$Result.GetResult<Prisma.$programPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Programs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {programFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Programs
     * const programs = await prisma.program.findMany()
     * 
     * // Get first 10 Programs
     * const programs = await prisma.program.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const programWithIdOnly = await prisma.program.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends programFindManyArgs>(args?: SelectSubset<T, programFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$programPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Program.
     * @param {programCreateArgs} args - Arguments to create a Program.
     * @example
     * // Create one Program
     * const Program = await prisma.program.create({
     *   data: {
     *     // ... data to create a Program
     *   }
     * })
     * 
     */
    create<T extends programCreateArgs>(args: SelectSubset<T, programCreateArgs<ExtArgs>>): Prisma__programClient<$Result.GetResult<Prisma.$programPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Programs.
     * @param {programCreateManyArgs} args - Arguments to create many Programs.
     * @example
     * // Create many Programs
     * const program = await prisma.program.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends programCreateManyArgs>(args?: SelectSubset<T, programCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Programs and returns the data saved in the database.
     * @param {programCreateManyAndReturnArgs} args - Arguments to create many Programs.
     * @example
     * // Create many Programs
     * const program = await prisma.program.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Programs and only return the `id`
     * const programWithIdOnly = await prisma.program.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends programCreateManyAndReturnArgs>(args?: SelectSubset<T, programCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$programPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Program.
     * @param {programDeleteArgs} args - Arguments to delete one Program.
     * @example
     * // Delete one Program
     * const Program = await prisma.program.delete({
     *   where: {
     *     // ... filter to delete one Program
     *   }
     * })
     * 
     */
    delete<T extends programDeleteArgs>(args: SelectSubset<T, programDeleteArgs<ExtArgs>>): Prisma__programClient<$Result.GetResult<Prisma.$programPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Program.
     * @param {programUpdateArgs} args - Arguments to update one Program.
     * @example
     * // Update one Program
     * const program = await prisma.program.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends programUpdateArgs>(args: SelectSubset<T, programUpdateArgs<ExtArgs>>): Prisma__programClient<$Result.GetResult<Prisma.$programPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Programs.
     * @param {programDeleteManyArgs} args - Arguments to filter Programs to delete.
     * @example
     * // Delete a few Programs
     * const { count } = await prisma.program.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends programDeleteManyArgs>(args?: SelectSubset<T, programDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {programUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Programs
     * const program = await prisma.program.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends programUpdateManyArgs>(args: SelectSubset<T, programUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Programs and returns the data updated in the database.
     * @param {programUpdateManyAndReturnArgs} args - Arguments to update many Programs.
     * @example
     * // Update many Programs
     * const program = await prisma.program.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Programs and only return the `id`
     * const programWithIdOnly = await prisma.program.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends programUpdateManyAndReturnArgs>(args: SelectSubset<T, programUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$programPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Program.
     * @param {programUpsertArgs} args - Arguments to update or create a Program.
     * @example
     * // Update or create a Program
     * const program = await prisma.program.upsert({
     *   create: {
     *     // ... data to create a Program
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Program we want to update
     *   }
     * })
     */
    upsert<T extends programUpsertArgs>(args: SelectSubset<T, programUpsertArgs<ExtArgs>>): Prisma__programClient<$Result.GetResult<Prisma.$programPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {programCountArgs} args - Arguments to filter Programs to count.
     * @example
     * // Count the number of Programs
     * const count = await prisma.program.count({
     *   where: {
     *     // ... the filter for the Programs we want to count
     *   }
     * })
    **/
    count<T extends programCountArgs>(
      args?: Subset<T, programCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgramCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Program.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProgramAggregateArgs>(args: Subset<T, ProgramAggregateArgs>): Prisma.PrismaPromise<GetProgramAggregateType<T>>

    /**
     * Group by Program.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {programGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends programGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: programGroupByArgs['orderBy'] }
        : { orderBy?: programGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, programGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the program model
   */
  readonly fields: programFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for program.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__programClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company_program<T extends program$company_programArgs<ExtArgs> = {}>(args?: Subset<T, program$company_programArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$company_programPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the program model
   */
  interface programFieldRefs {
    readonly id: FieldRef<"program", 'String'>
    readonly name: FieldRef<"program", 'String'>
    readonly objective: FieldRef<"program", 'String'>
    readonly duration: FieldRef<"program", 'String'>
    readonly eligibility_conditions: FieldRef<"program", 'String'>
    readonly support_type: FieldRef<"program", 'String'>
    readonly budget: FieldRef<"program", 'String'>
    readonly launch_date: FieldRef<"program", 'DateTime'>
    readonly created_at: FieldRef<"program", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * program findUnique
   */
  export type programFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program
     */
    select?: programSelect<ExtArgs> | null
    /**
     * Omit specific fields from the program
     */
    omit?: programOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programInclude<ExtArgs> | null
    /**
     * Filter, which program to fetch.
     */
    where: programWhereUniqueInput
  }

  /**
   * program findUniqueOrThrow
   */
  export type programFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program
     */
    select?: programSelect<ExtArgs> | null
    /**
     * Omit specific fields from the program
     */
    omit?: programOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programInclude<ExtArgs> | null
    /**
     * Filter, which program to fetch.
     */
    where: programWhereUniqueInput
  }

  /**
   * program findFirst
   */
  export type programFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program
     */
    select?: programSelect<ExtArgs> | null
    /**
     * Omit specific fields from the program
     */
    omit?: programOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programInclude<ExtArgs> | null
    /**
     * Filter, which program to fetch.
     */
    where?: programWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of programs to fetch.
     */
    orderBy?: programOrderByWithRelationInput | programOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for programs.
     */
    cursor?: programWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of programs.
     */
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * program findFirstOrThrow
   */
  export type programFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program
     */
    select?: programSelect<ExtArgs> | null
    /**
     * Omit specific fields from the program
     */
    omit?: programOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programInclude<ExtArgs> | null
    /**
     * Filter, which program to fetch.
     */
    where?: programWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of programs to fetch.
     */
    orderBy?: programOrderByWithRelationInput | programOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for programs.
     */
    cursor?: programWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of programs.
     */
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * program findMany
   */
  export type programFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program
     */
    select?: programSelect<ExtArgs> | null
    /**
     * Omit specific fields from the program
     */
    omit?: programOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programInclude<ExtArgs> | null
    /**
     * Filter, which programs to fetch.
     */
    where?: programWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of programs to fetch.
     */
    orderBy?: programOrderByWithRelationInput | programOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing programs.
     */
    cursor?: programWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` programs.
     */
    skip?: number
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * program create
   */
  export type programCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program
     */
    select?: programSelect<ExtArgs> | null
    /**
     * Omit specific fields from the program
     */
    omit?: programOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programInclude<ExtArgs> | null
    /**
     * The data needed to create a program.
     */
    data: XOR<programCreateInput, programUncheckedCreateInput>
  }

  /**
   * program createMany
   */
  export type programCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many programs.
     */
    data: programCreateManyInput | programCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * program createManyAndReturn
   */
  export type programCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program
     */
    select?: programSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the program
     */
    omit?: programOmit<ExtArgs> | null
    /**
     * The data used to create many programs.
     */
    data: programCreateManyInput | programCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * program update
   */
  export type programUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program
     */
    select?: programSelect<ExtArgs> | null
    /**
     * Omit specific fields from the program
     */
    omit?: programOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programInclude<ExtArgs> | null
    /**
     * The data needed to update a program.
     */
    data: XOR<programUpdateInput, programUncheckedUpdateInput>
    /**
     * Choose, which program to update.
     */
    where: programWhereUniqueInput
  }

  /**
   * program updateMany
   */
  export type programUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update programs.
     */
    data: XOR<programUpdateManyMutationInput, programUncheckedUpdateManyInput>
    /**
     * Filter which programs to update
     */
    where?: programWhereInput
    /**
     * Limit how many programs to update.
     */
    limit?: number
  }

  /**
   * program updateManyAndReturn
   */
  export type programUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program
     */
    select?: programSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the program
     */
    omit?: programOmit<ExtArgs> | null
    /**
     * The data used to update programs.
     */
    data: XOR<programUpdateManyMutationInput, programUncheckedUpdateManyInput>
    /**
     * Filter which programs to update
     */
    where?: programWhereInput
    /**
     * Limit how many programs to update.
     */
    limit?: number
  }

  /**
   * program upsert
   */
  export type programUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program
     */
    select?: programSelect<ExtArgs> | null
    /**
     * Omit specific fields from the program
     */
    omit?: programOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programInclude<ExtArgs> | null
    /**
     * The filter to search for the program to update in case it exists.
     */
    where: programWhereUniqueInput
    /**
     * In case the program found by the `where` argument doesn't exist, create a new program with this data.
     */
    create: XOR<programCreateInput, programUncheckedCreateInput>
    /**
     * In case the program was found with the provided `where` argument, update it with this data.
     */
    update: XOR<programUpdateInput, programUncheckedUpdateInput>
  }

  /**
   * program delete
   */
  export type programDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program
     */
    select?: programSelect<ExtArgs> | null
    /**
     * Omit specific fields from the program
     */
    omit?: programOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programInclude<ExtArgs> | null
    /**
     * Filter which program to delete.
     */
    where: programWhereUniqueInput
  }

  /**
   * program deleteMany
   */
  export type programDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which programs to delete
     */
    where?: programWhereInput
    /**
     * Limit how many programs to delete.
     */
    limit?: number
  }

  /**
   * program.company_program
   */
  export type program$company_programArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company_program
     */
    select?: company_programSelect<ExtArgs> | null
    /**
     * Omit specific fields from the company_program
     */
    omit?: company_programOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: company_programInclude<ExtArgs> | null
    where?: company_programWhereInput
    orderBy?: company_programOrderByWithRelationInput | company_programOrderByWithRelationInput[]
    cursor?: company_programWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Company_programScalarFieldEnum | Company_programScalarFieldEnum[]
  }

  /**
   * program without action
   */
  export type programDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program
     */
    select?: programSelect<ExtArgs> | null
    /**
     * Omit specific fields from the program
     */
    omit?: programOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    logo_url: 'logo_url',
    status: 'status',
    sector: 'sector',
    creation_date: 'creation_date',
    location_city: 'location_city',
    description: 'description',
    revenue: 'revenue',
    project_deck_url: 'project_deck_url',
    created_at: 'created_at'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const Company_programScalarFieldEnum: {
    id: 'id',
    company_id: 'company_id',
    program_id: 'program_id',
    support_type: 'support_type',
    funding_amount: 'funding_amount',
    funding_date: 'funding_date',
    created_at: 'created_at'
  };

  export type Company_programScalarFieldEnum = (typeof Company_programScalarFieldEnum)[keyof typeof Company_programScalarFieldEnum]


  export const EntrepreneurScalarFieldEnum: {
    id: 'id',
    last_name: 'last_name',
    first_name: 'first_name',
    gender: 'gender',
    phone: 'phone',
    email: 'email',
    photo_url: 'photo_url',
    cv_url: 'cv_url',
    created_at: 'created_at'
  };

  export type EntrepreneurScalarFieldEnum = (typeof EntrepreneurScalarFieldEnum)[keyof typeof EntrepreneurScalarFieldEnum]


  export const Entrepreneur_companyScalarFieldEnum: {
    id: 'id',
    company_id: 'company_id',
    entrepreneur_id: 'entrepreneur_id',
    is_leader: 'is_leader',
    created_at: 'created_at'
  };

  export type Entrepreneur_companyScalarFieldEnum = (typeof Entrepreneur_companyScalarFieldEnum)[keyof typeof Entrepreneur_companyScalarFieldEnum]


  export const ProgramScalarFieldEnum: {
    id: 'id',
    name: 'name',
    objective: 'objective',
    duration: 'duration',
    eligibility_conditions: 'eligibility_conditions',
    support_type: 'support_type',
    budget: 'budget',
    launch_date: 'launch_date',
    created_at: 'created_at'
  };

  export type ProgramScalarFieldEnum = (typeof ProgramScalarFieldEnum)[keyof typeof ProgramScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[]
    OR?: companyWhereInput[]
    NOT?: companyWhereInput | companyWhereInput[]
    id?: UuidFilter<"company"> | string
    name?: StringFilter<"company"> | string
    phone?: StringNullableFilter<"company"> | string | null
    email?: StringNullableFilter<"company"> | string | null
    logo_url?: StringNullableFilter<"company"> | string | null
    status?: StringNullableFilter<"company"> | string | null
    sector?: StringNullableFilter<"company"> | string | null
    creation_date?: DateTimeNullableFilter<"company"> | Date | string | null
    location_city?: StringNullableFilter<"company"> | string | null
    description?: StringNullableFilter<"company"> | string | null
    revenue?: DecimalNullableFilter<"company"> | Decimal | DecimalJsLike | number | string | null
    project_deck_url?: StringNullableFilter<"company"> | string | null
    created_at?: DateTimeNullableFilter<"company"> | Date | string | null
    company_program?: Company_programListRelationFilter
    entrepreneur_company?: Entrepreneur_companyListRelationFilter
  }

  export type companyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    logo_url?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    sector?: SortOrderInput | SortOrder
    creation_date?: SortOrderInput | SortOrder
    location_city?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    revenue?: SortOrderInput | SortOrder
    project_deck_url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    company_program?: company_programOrderByRelationAggregateInput
    entrepreneur_company?: entrepreneur_companyOrderByRelationAggregateInput
  }

  export type companyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: companyWhereInput | companyWhereInput[]
    OR?: companyWhereInput[]
    NOT?: companyWhereInput | companyWhereInput[]
    name?: StringFilter<"company"> | string
    phone?: StringNullableFilter<"company"> | string | null
    email?: StringNullableFilter<"company"> | string | null
    logo_url?: StringNullableFilter<"company"> | string | null
    status?: StringNullableFilter<"company"> | string | null
    sector?: StringNullableFilter<"company"> | string | null
    creation_date?: DateTimeNullableFilter<"company"> | Date | string | null
    location_city?: StringNullableFilter<"company"> | string | null
    description?: StringNullableFilter<"company"> | string | null
    revenue?: DecimalNullableFilter<"company"> | Decimal | DecimalJsLike | number | string | null
    project_deck_url?: StringNullableFilter<"company"> | string | null
    created_at?: DateTimeNullableFilter<"company"> | Date | string | null
    company_program?: Company_programListRelationFilter
    entrepreneur_company?: Entrepreneur_companyListRelationFilter
  }, "id">

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    logo_url?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    sector?: SortOrderInput | SortOrder
    creation_date?: SortOrderInput | SortOrder
    location_city?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    revenue?: SortOrderInput | SortOrder
    project_deck_url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: companyCountOrderByAggregateInput
    _avg?: companyAvgOrderByAggregateInput
    _max?: companyMaxOrderByAggregateInput
    _min?: companyMinOrderByAggregateInput
    _sum?: companySumOrderByAggregateInput
  }

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[]
    OR?: companyScalarWhereWithAggregatesInput[]
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"company"> | string
    name?: StringWithAggregatesFilter<"company"> | string
    phone?: StringNullableWithAggregatesFilter<"company"> | string | null
    email?: StringNullableWithAggregatesFilter<"company"> | string | null
    logo_url?: StringNullableWithAggregatesFilter<"company"> | string | null
    status?: StringNullableWithAggregatesFilter<"company"> | string | null
    sector?: StringNullableWithAggregatesFilter<"company"> | string | null
    creation_date?: DateTimeNullableWithAggregatesFilter<"company"> | Date | string | null
    location_city?: StringNullableWithAggregatesFilter<"company"> | string | null
    description?: StringNullableWithAggregatesFilter<"company"> | string | null
    revenue?: DecimalNullableWithAggregatesFilter<"company"> | Decimal | DecimalJsLike | number | string | null
    project_deck_url?: StringNullableWithAggregatesFilter<"company"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"company"> | Date | string | null
  }

  export type company_programWhereInput = {
    AND?: company_programWhereInput | company_programWhereInput[]
    OR?: company_programWhereInput[]
    NOT?: company_programWhereInput | company_programWhereInput[]
    id?: UuidFilter<"company_program"> | string
    company_id?: UuidNullableFilter<"company_program"> | string | null
    program_id?: UuidNullableFilter<"company_program"> | string | null
    support_type?: StringNullableFilter<"company_program"> | string | null
    funding_amount?: IntNullableFilter<"company_program"> | number | null
    funding_date?: DateTimeNullableFilter<"company_program"> | Date | string | null
    created_at?: DateTimeNullableFilter<"company_program"> | Date | string | null
    company?: XOR<CompanyNullableScalarRelationFilter, companyWhereInput> | null
    program?: XOR<ProgramNullableScalarRelationFilter, programWhereInput> | null
  }

  export type company_programOrderByWithRelationInput = {
    id?: SortOrder
    company_id?: SortOrderInput | SortOrder
    program_id?: SortOrderInput | SortOrder
    support_type?: SortOrderInput | SortOrder
    funding_amount?: SortOrderInput | SortOrder
    funding_date?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    company?: companyOrderByWithRelationInput
    program?: programOrderByWithRelationInput
  }

  export type company_programWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    company_id_program_id?: company_programCompany_idProgram_idCompoundUniqueInput
    AND?: company_programWhereInput | company_programWhereInput[]
    OR?: company_programWhereInput[]
    NOT?: company_programWhereInput | company_programWhereInput[]
    company_id?: UuidNullableFilter<"company_program"> | string | null
    program_id?: UuidNullableFilter<"company_program"> | string | null
    support_type?: StringNullableFilter<"company_program"> | string | null
    funding_amount?: IntNullableFilter<"company_program"> | number | null
    funding_date?: DateTimeNullableFilter<"company_program"> | Date | string | null
    created_at?: DateTimeNullableFilter<"company_program"> | Date | string | null
    company?: XOR<CompanyNullableScalarRelationFilter, companyWhereInput> | null
    program?: XOR<ProgramNullableScalarRelationFilter, programWhereInput> | null
  }, "id" | "company_id_program_id">

  export type company_programOrderByWithAggregationInput = {
    id?: SortOrder
    company_id?: SortOrderInput | SortOrder
    program_id?: SortOrderInput | SortOrder
    support_type?: SortOrderInput | SortOrder
    funding_amount?: SortOrderInput | SortOrder
    funding_date?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: company_programCountOrderByAggregateInput
    _avg?: company_programAvgOrderByAggregateInput
    _max?: company_programMaxOrderByAggregateInput
    _min?: company_programMinOrderByAggregateInput
    _sum?: company_programSumOrderByAggregateInput
  }

  export type company_programScalarWhereWithAggregatesInput = {
    AND?: company_programScalarWhereWithAggregatesInput | company_programScalarWhereWithAggregatesInput[]
    OR?: company_programScalarWhereWithAggregatesInput[]
    NOT?: company_programScalarWhereWithAggregatesInput | company_programScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"company_program"> | string
    company_id?: UuidNullableWithAggregatesFilter<"company_program"> | string | null
    program_id?: UuidNullableWithAggregatesFilter<"company_program"> | string | null
    support_type?: StringNullableWithAggregatesFilter<"company_program"> | string | null
    funding_amount?: IntNullableWithAggregatesFilter<"company_program"> | number | null
    funding_date?: DateTimeNullableWithAggregatesFilter<"company_program"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"company_program"> | Date | string | null
  }

  export type entrepreneurWhereInput = {
    AND?: entrepreneurWhereInput | entrepreneurWhereInput[]
    OR?: entrepreneurWhereInput[]
    NOT?: entrepreneurWhereInput | entrepreneurWhereInput[]
    id?: UuidFilter<"entrepreneur"> | string
    last_name?: StringFilter<"entrepreneur"> | string
    first_name?: StringFilter<"entrepreneur"> | string
    gender?: StringFilter<"entrepreneur"> | string
    phone?: StringFilter<"entrepreneur"> | string
    email?: StringFilter<"entrepreneur"> | string
    photo_url?: StringNullableFilter<"entrepreneur"> | string | null
    cv_url?: StringNullableFilter<"entrepreneur"> | string | null
    created_at?: DateTimeNullableFilter<"entrepreneur"> | Date | string | null
    entrepreneur_company?: Entrepreneur_companyListRelationFilter
  }

  export type entrepreneurOrderByWithRelationInput = {
    id?: SortOrder
    last_name?: SortOrder
    first_name?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    photo_url?: SortOrderInput | SortOrder
    cv_url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    entrepreneur_company?: entrepreneur_companyOrderByRelationAggregateInput
  }

  export type entrepreneurWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: entrepreneurWhereInput | entrepreneurWhereInput[]
    OR?: entrepreneurWhereInput[]
    NOT?: entrepreneurWhereInput | entrepreneurWhereInput[]
    last_name?: StringFilter<"entrepreneur"> | string
    first_name?: StringFilter<"entrepreneur"> | string
    gender?: StringFilter<"entrepreneur"> | string
    phone?: StringFilter<"entrepreneur"> | string
    photo_url?: StringNullableFilter<"entrepreneur"> | string | null
    cv_url?: StringNullableFilter<"entrepreneur"> | string | null
    created_at?: DateTimeNullableFilter<"entrepreneur"> | Date | string | null
    entrepreneur_company?: Entrepreneur_companyListRelationFilter
  }, "id" | "email">

  export type entrepreneurOrderByWithAggregationInput = {
    id?: SortOrder
    last_name?: SortOrder
    first_name?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    photo_url?: SortOrderInput | SortOrder
    cv_url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: entrepreneurCountOrderByAggregateInput
    _max?: entrepreneurMaxOrderByAggregateInput
    _min?: entrepreneurMinOrderByAggregateInput
  }

  export type entrepreneurScalarWhereWithAggregatesInput = {
    AND?: entrepreneurScalarWhereWithAggregatesInput | entrepreneurScalarWhereWithAggregatesInput[]
    OR?: entrepreneurScalarWhereWithAggregatesInput[]
    NOT?: entrepreneurScalarWhereWithAggregatesInput | entrepreneurScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"entrepreneur"> | string
    last_name?: StringWithAggregatesFilter<"entrepreneur"> | string
    first_name?: StringWithAggregatesFilter<"entrepreneur"> | string
    gender?: StringWithAggregatesFilter<"entrepreneur"> | string
    phone?: StringWithAggregatesFilter<"entrepreneur"> | string
    email?: StringWithAggregatesFilter<"entrepreneur"> | string
    photo_url?: StringNullableWithAggregatesFilter<"entrepreneur"> | string | null
    cv_url?: StringNullableWithAggregatesFilter<"entrepreneur"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"entrepreneur"> | Date | string | null
  }

  export type entrepreneur_companyWhereInput = {
    AND?: entrepreneur_companyWhereInput | entrepreneur_companyWhereInput[]
    OR?: entrepreneur_companyWhereInput[]
    NOT?: entrepreneur_companyWhereInput | entrepreneur_companyWhereInput[]
    id?: UuidFilter<"entrepreneur_company"> | string
    company_id?: UuidNullableFilter<"entrepreneur_company"> | string | null
    entrepreneur_id?: UuidNullableFilter<"entrepreneur_company"> | string | null
    is_leader?: BoolNullableFilter<"entrepreneur_company"> | boolean | null
    created_at?: DateTimeNullableFilter<"entrepreneur_company"> | Date | string | null
    company?: XOR<CompanyNullableScalarRelationFilter, companyWhereInput> | null
    entrepreneur?: XOR<EntrepreneurNullableScalarRelationFilter, entrepreneurWhereInput> | null
  }

  export type entrepreneur_companyOrderByWithRelationInput = {
    id?: SortOrder
    company_id?: SortOrderInput | SortOrder
    entrepreneur_id?: SortOrderInput | SortOrder
    is_leader?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    company?: companyOrderByWithRelationInput
    entrepreneur?: entrepreneurOrderByWithRelationInput
  }

  export type entrepreneur_companyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    company_id_entrepreneur_id?: entrepreneur_companyCompany_idEntrepreneur_idCompoundUniqueInput
    AND?: entrepreneur_companyWhereInput | entrepreneur_companyWhereInput[]
    OR?: entrepreneur_companyWhereInput[]
    NOT?: entrepreneur_companyWhereInput | entrepreneur_companyWhereInput[]
    company_id?: UuidNullableFilter<"entrepreneur_company"> | string | null
    entrepreneur_id?: UuidNullableFilter<"entrepreneur_company"> | string | null
    is_leader?: BoolNullableFilter<"entrepreneur_company"> | boolean | null
    created_at?: DateTimeNullableFilter<"entrepreneur_company"> | Date | string | null
    company?: XOR<CompanyNullableScalarRelationFilter, companyWhereInput> | null
    entrepreneur?: XOR<EntrepreneurNullableScalarRelationFilter, entrepreneurWhereInput> | null
  }, "id" | "company_id_entrepreneur_id">

  export type entrepreneur_companyOrderByWithAggregationInput = {
    id?: SortOrder
    company_id?: SortOrderInput | SortOrder
    entrepreneur_id?: SortOrderInput | SortOrder
    is_leader?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: entrepreneur_companyCountOrderByAggregateInput
    _max?: entrepreneur_companyMaxOrderByAggregateInput
    _min?: entrepreneur_companyMinOrderByAggregateInput
  }

  export type entrepreneur_companyScalarWhereWithAggregatesInput = {
    AND?: entrepreneur_companyScalarWhereWithAggregatesInput | entrepreneur_companyScalarWhereWithAggregatesInput[]
    OR?: entrepreneur_companyScalarWhereWithAggregatesInput[]
    NOT?: entrepreneur_companyScalarWhereWithAggregatesInput | entrepreneur_companyScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"entrepreneur_company"> | string
    company_id?: UuidNullableWithAggregatesFilter<"entrepreneur_company"> | string | null
    entrepreneur_id?: UuidNullableWithAggregatesFilter<"entrepreneur_company"> | string | null
    is_leader?: BoolNullableWithAggregatesFilter<"entrepreneur_company"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"entrepreneur_company"> | Date | string | null
  }

  export type programWhereInput = {
    AND?: programWhereInput | programWhereInput[]
    OR?: programWhereInput[]
    NOT?: programWhereInput | programWhereInput[]
    id?: UuidFilter<"program"> | string
    name?: StringFilter<"program"> | string
    objective?: StringNullableFilter<"program"> | string | null
    duration?: StringNullableFilter<"program"> | string | null
    eligibility_conditions?: StringNullableFilter<"program"> | string | null
    support_type?: StringFilter<"program"> | string
    budget?: StringNullableFilter<"program"> | string | null
    launch_date?: DateTimeNullableFilter<"program"> | Date | string | null
    created_at?: DateTimeNullableFilter<"program"> | Date | string | null
    company_program?: Company_programListRelationFilter
  }

  export type programOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    objective?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    eligibility_conditions?: SortOrderInput | SortOrder
    support_type?: SortOrder
    budget?: SortOrderInput | SortOrder
    launch_date?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    company_program?: company_programOrderByRelationAggregateInput
  }

  export type programWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: programWhereInput | programWhereInput[]
    OR?: programWhereInput[]
    NOT?: programWhereInput | programWhereInput[]
    name?: StringFilter<"program"> | string
    objective?: StringNullableFilter<"program"> | string | null
    duration?: StringNullableFilter<"program"> | string | null
    eligibility_conditions?: StringNullableFilter<"program"> | string | null
    support_type?: StringFilter<"program"> | string
    budget?: StringNullableFilter<"program"> | string | null
    launch_date?: DateTimeNullableFilter<"program"> | Date | string | null
    created_at?: DateTimeNullableFilter<"program"> | Date | string | null
    company_program?: Company_programListRelationFilter
  }, "id">

  export type programOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    objective?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    eligibility_conditions?: SortOrderInput | SortOrder
    support_type?: SortOrder
    budget?: SortOrderInput | SortOrder
    launch_date?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: programCountOrderByAggregateInput
    _max?: programMaxOrderByAggregateInput
    _min?: programMinOrderByAggregateInput
  }

  export type programScalarWhereWithAggregatesInput = {
    AND?: programScalarWhereWithAggregatesInput | programScalarWhereWithAggregatesInput[]
    OR?: programScalarWhereWithAggregatesInput[]
    NOT?: programScalarWhereWithAggregatesInput | programScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"program"> | string
    name?: StringWithAggregatesFilter<"program"> | string
    objective?: StringNullableWithAggregatesFilter<"program"> | string | null
    duration?: StringNullableWithAggregatesFilter<"program"> | string | null
    eligibility_conditions?: StringNullableWithAggregatesFilter<"program"> | string | null
    support_type?: StringWithAggregatesFilter<"program"> | string
    budget?: StringNullableWithAggregatesFilter<"program"> | string | null
    launch_date?: DateTimeNullableWithAggregatesFilter<"program"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"program"> | Date | string | null
  }

  export type companyCreateInput = {
    id?: string
    name: string
    phone?: string | null
    email?: string | null
    logo_url?: string | null
    status?: string | null
    sector?: string | null
    creation_date?: Date | string | null
    location_city?: string | null
    description?: string | null
    revenue?: Decimal | DecimalJsLike | number | string | null
    project_deck_url?: string | null
    created_at?: Date | string | null
    company_program?: company_programCreateNestedManyWithoutCompanyInput
    entrepreneur_company?: entrepreneur_companyCreateNestedManyWithoutCompanyInput
  }

  export type companyUncheckedCreateInput = {
    id?: string
    name: string
    phone?: string | null
    email?: string | null
    logo_url?: string | null
    status?: string | null
    sector?: string | null
    creation_date?: Date | string | null
    location_city?: string | null
    description?: string | null
    revenue?: Decimal | DecimalJsLike | number | string | null
    project_deck_url?: string | null
    created_at?: Date | string | null
    company_program?: company_programUncheckedCreateNestedManyWithoutCompanyInput
    entrepreneur_company?: entrepreneur_companyUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    creation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location_city?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    revenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    project_deck_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_program?: company_programUpdateManyWithoutCompanyNestedInput
    entrepreneur_company?: entrepreneur_companyUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    creation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location_city?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    revenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    project_deck_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_program?: company_programUncheckedUpdateManyWithoutCompanyNestedInput
    entrepreneur_company?: entrepreneur_companyUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type companyCreateManyInput = {
    id?: string
    name: string
    phone?: string | null
    email?: string | null
    logo_url?: string | null
    status?: string | null
    sector?: string | null
    creation_date?: Date | string | null
    location_city?: string | null
    description?: string | null
    revenue?: Decimal | DecimalJsLike | number | string | null
    project_deck_url?: string | null
    created_at?: Date | string | null
  }

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    creation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location_city?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    revenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    project_deck_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    creation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location_city?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    revenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    project_deck_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type company_programCreateInput = {
    id?: string
    support_type?: string | null
    funding_amount?: number | null
    funding_date?: Date | string | null
    created_at?: Date | string | null
    company?: companyCreateNestedOneWithoutCompany_programInput
    program?: programCreateNestedOneWithoutCompany_programInput
  }

  export type company_programUncheckedCreateInput = {
    id?: string
    company_id?: string | null
    program_id?: string | null
    support_type?: string | null
    funding_amount?: number | null
    funding_date?: Date | string | null
    created_at?: Date | string | null
  }

  export type company_programUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    support_type?: NullableStringFieldUpdateOperationsInput | string | null
    funding_amount?: NullableIntFieldUpdateOperationsInput | number | null
    funding_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: companyUpdateOneWithoutCompany_programNestedInput
    program?: programUpdateOneWithoutCompany_programNestedInput
  }

  export type company_programUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    program_id?: NullableStringFieldUpdateOperationsInput | string | null
    support_type?: NullableStringFieldUpdateOperationsInput | string | null
    funding_amount?: NullableIntFieldUpdateOperationsInput | number | null
    funding_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type company_programCreateManyInput = {
    id?: string
    company_id?: string | null
    program_id?: string | null
    support_type?: string | null
    funding_amount?: number | null
    funding_date?: Date | string | null
    created_at?: Date | string | null
  }

  export type company_programUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    support_type?: NullableStringFieldUpdateOperationsInput | string | null
    funding_amount?: NullableIntFieldUpdateOperationsInput | number | null
    funding_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type company_programUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    program_id?: NullableStringFieldUpdateOperationsInput | string | null
    support_type?: NullableStringFieldUpdateOperationsInput | string | null
    funding_amount?: NullableIntFieldUpdateOperationsInput | number | null
    funding_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type entrepreneurCreateInput = {
    id?: string
    last_name: string
    first_name: string
    gender: string
    phone: string
    email: string
    photo_url?: string | null
    cv_url?: string | null
    created_at?: Date | string | null
    entrepreneur_company?: entrepreneur_companyCreateNestedManyWithoutEntrepreneurInput
  }

  export type entrepreneurUncheckedCreateInput = {
    id?: string
    last_name: string
    first_name: string
    gender: string
    phone: string
    email: string
    photo_url?: string | null
    cv_url?: string | null
    created_at?: Date | string | null
    entrepreneur_company?: entrepreneur_companyUncheckedCreateNestedManyWithoutEntrepreneurInput
  }

  export type entrepreneurUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    entrepreneur_company?: entrepreneur_companyUpdateManyWithoutEntrepreneurNestedInput
  }

  export type entrepreneurUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    entrepreneur_company?: entrepreneur_companyUncheckedUpdateManyWithoutEntrepreneurNestedInput
  }

  export type entrepreneurCreateManyInput = {
    id?: string
    last_name: string
    first_name: string
    gender: string
    phone: string
    email: string
    photo_url?: string | null
    cv_url?: string | null
    created_at?: Date | string | null
  }

  export type entrepreneurUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type entrepreneurUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type entrepreneur_companyCreateInput = {
    id?: string
    is_leader?: boolean | null
    created_at?: Date | string | null
    company?: companyCreateNestedOneWithoutEntrepreneur_companyInput
    entrepreneur?: entrepreneurCreateNestedOneWithoutEntrepreneur_companyInput
  }

  export type entrepreneur_companyUncheckedCreateInput = {
    id?: string
    company_id?: string | null
    entrepreneur_id?: string | null
    is_leader?: boolean | null
    created_at?: Date | string | null
  }

  export type entrepreneur_companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_leader?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: companyUpdateOneWithoutEntrepreneur_companyNestedInput
    entrepreneur?: entrepreneurUpdateOneWithoutEntrepreneur_companyNestedInput
  }

  export type entrepreneur_companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    entrepreneur_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_leader?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type entrepreneur_companyCreateManyInput = {
    id?: string
    company_id?: string | null
    entrepreneur_id?: string | null
    is_leader?: boolean | null
    created_at?: Date | string | null
  }

  export type entrepreneur_companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_leader?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type entrepreneur_companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    entrepreneur_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_leader?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type programCreateInput = {
    id?: string
    name: string
    objective?: string | null
    duration?: string | null
    eligibility_conditions?: string | null
    support_type: string
    budget?: string | null
    launch_date?: Date | string | null
    created_at?: Date | string | null
    company_program?: company_programCreateNestedManyWithoutProgramInput
  }

  export type programUncheckedCreateInput = {
    id?: string
    name: string
    objective?: string | null
    duration?: string | null
    eligibility_conditions?: string | null
    support_type: string
    budget?: string | null
    launch_date?: Date | string | null
    created_at?: Date | string | null
    company_program?: company_programUncheckedCreateNestedManyWithoutProgramInput
  }

  export type programUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    eligibility_conditions?: NullableStringFieldUpdateOperationsInput | string | null
    support_type?: StringFieldUpdateOperationsInput | string
    budget?: NullableStringFieldUpdateOperationsInput | string | null
    launch_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_program?: company_programUpdateManyWithoutProgramNestedInput
  }

  export type programUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    eligibility_conditions?: NullableStringFieldUpdateOperationsInput | string | null
    support_type?: StringFieldUpdateOperationsInput | string
    budget?: NullableStringFieldUpdateOperationsInput | string | null
    launch_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_program?: company_programUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type programCreateManyInput = {
    id?: string
    name: string
    objective?: string | null
    duration?: string | null
    eligibility_conditions?: string | null
    support_type: string
    budget?: string | null
    launch_date?: Date | string | null
    created_at?: Date | string | null
  }

  export type programUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    eligibility_conditions?: NullableStringFieldUpdateOperationsInput | string | null
    support_type?: StringFieldUpdateOperationsInput | string
    budget?: NullableStringFieldUpdateOperationsInput | string | null
    launch_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type programUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    eligibility_conditions?: NullableStringFieldUpdateOperationsInput | string | null
    support_type?: StringFieldUpdateOperationsInput | string
    budget?: NullableStringFieldUpdateOperationsInput | string | null
    launch_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type Company_programListRelationFilter = {
    every?: company_programWhereInput
    some?: company_programWhereInput
    none?: company_programWhereInput
  }

  export type Entrepreneur_companyListRelationFilter = {
    every?: entrepreneur_companyWhereInput
    some?: entrepreneur_companyWhereInput
    none?: entrepreneur_companyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type company_programOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type entrepreneur_companyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    logo_url?: SortOrder
    status?: SortOrder
    sector?: SortOrder
    creation_date?: SortOrder
    location_city?: SortOrder
    description?: SortOrder
    revenue?: SortOrder
    project_deck_url?: SortOrder
    created_at?: SortOrder
  }

  export type companyAvgOrderByAggregateInput = {
    revenue?: SortOrder
  }

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    logo_url?: SortOrder
    status?: SortOrder
    sector?: SortOrder
    creation_date?: SortOrder
    location_city?: SortOrder
    description?: SortOrder
    revenue?: SortOrder
    project_deck_url?: SortOrder
    created_at?: SortOrder
  }

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    logo_url?: SortOrder
    status?: SortOrder
    sector?: SortOrder
    creation_date?: SortOrder
    location_city?: SortOrder
    description?: SortOrder
    revenue?: SortOrder
    project_deck_url?: SortOrder
    created_at?: SortOrder
  }

  export type companySumOrderByAggregateInput = {
    revenue?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CompanyNullableScalarRelationFilter = {
    is?: companyWhereInput | null
    isNot?: companyWhereInput | null
  }

  export type ProgramNullableScalarRelationFilter = {
    is?: programWhereInput | null
    isNot?: programWhereInput | null
  }

  export type company_programCompany_idProgram_idCompoundUniqueInput = {
    company_id: string
    program_id: string
  }

  export type company_programCountOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    program_id?: SortOrder
    support_type?: SortOrder
    funding_amount?: SortOrder
    funding_date?: SortOrder
    created_at?: SortOrder
  }

  export type company_programAvgOrderByAggregateInput = {
    funding_amount?: SortOrder
  }

  export type company_programMaxOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    program_id?: SortOrder
    support_type?: SortOrder
    funding_amount?: SortOrder
    funding_date?: SortOrder
    created_at?: SortOrder
  }

  export type company_programMinOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    program_id?: SortOrder
    support_type?: SortOrder
    funding_amount?: SortOrder
    funding_date?: SortOrder
    created_at?: SortOrder
  }

  export type company_programSumOrderByAggregateInput = {
    funding_amount?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type entrepreneurCountOrderByAggregateInput = {
    id?: SortOrder
    last_name?: SortOrder
    first_name?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    photo_url?: SortOrder
    cv_url?: SortOrder
    created_at?: SortOrder
  }

  export type entrepreneurMaxOrderByAggregateInput = {
    id?: SortOrder
    last_name?: SortOrder
    first_name?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    photo_url?: SortOrder
    cv_url?: SortOrder
    created_at?: SortOrder
  }

  export type entrepreneurMinOrderByAggregateInput = {
    id?: SortOrder
    last_name?: SortOrder
    first_name?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    photo_url?: SortOrder
    cv_url?: SortOrder
    created_at?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type EntrepreneurNullableScalarRelationFilter = {
    is?: entrepreneurWhereInput | null
    isNot?: entrepreneurWhereInput | null
  }

  export type entrepreneur_companyCompany_idEntrepreneur_idCompoundUniqueInput = {
    company_id: string
    entrepreneur_id: string
  }

  export type entrepreneur_companyCountOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    entrepreneur_id?: SortOrder
    is_leader?: SortOrder
    created_at?: SortOrder
  }

  export type entrepreneur_companyMaxOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    entrepreneur_id?: SortOrder
    is_leader?: SortOrder
    created_at?: SortOrder
  }

  export type entrepreneur_companyMinOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    entrepreneur_id?: SortOrder
    is_leader?: SortOrder
    created_at?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type programCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    objective?: SortOrder
    duration?: SortOrder
    eligibility_conditions?: SortOrder
    support_type?: SortOrder
    budget?: SortOrder
    launch_date?: SortOrder
    created_at?: SortOrder
  }

  export type programMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    objective?: SortOrder
    duration?: SortOrder
    eligibility_conditions?: SortOrder
    support_type?: SortOrder
    budget?: SortOrder
    launch_date?: SortOrder
    created_at?: SortOrder
  }

  export type programMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    objective?: SortOrder
    duration?: SortOrder
    eligibility_conditions?: SortOrder
    support_type?: SortOrder
    budget?: SortOrder
    launch_date?: SortOrder
    created_at?: SortOrder
  }

  export type company_programCreateNestedManyWithoutCompanyInput = {
    create?: XOR<company_programCreateWithoutCompanyInput, company_programUncheckedCreateWithoutCompanyInput> | company_programCreateWithoutCompanyInput[] | company_programUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: company_programCreateOrConnectWithoutCompanyInput | company_programCreateOrConnectWithoutCompanyInput[]
    createMany?: company_programCreateManyCompanyInputEnvelope
    connect?: company_programWhereUniqueInput | company_programWhereUniqueInput[]
  }

  export type entrepreneur_companyCreateNestedManyWithoutCompanyInput = {
    create?: XOR<entrepreneur_companyCreateWithoutCompanyInput, entrepreneur_companyUncheckedCreateWithoutCompanyInput> | entrepreneur_companyCreateWithoutCompanyInput[] | entrepreneur_companyUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: entrepreneur_companyCreateOrConnectWithoutCompanyInput | entrepreneur_companyCreateOrConnectWithoutCompanyInput[]
    createMany?: entrepreneur_companyCreateManyCompanyInputEnvelope
    connect?: entrepreneur_companyWhereUniqueInput | entrepreneur_companyWhereUniqueInput[]
  }

  export type company_programUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<company_programCreateWithoutCompanyInput, company_programUncheckedCreateWithoutCompanyInput> | company_programCreateWithoutCompanyInput[] | company_programUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: company_programCreateOrConnectWithoutCompanyInput | company_programCreateOrConnectWithoutCompanyInput[]
    createMany?: company_programCreateManyCompanyInputEnvelope
    connect?: company_programWhereUniqueInput | company_programWhereUniqueInput[]
  }

  export type entrepreneur_companyUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<entrepreneur_companyCreateWithoutCompanyInput, entrepreneur_companyUncheckedCreateWithoutCompanyInput> | entrepreneur_companyCreateWithoutCompanyInput[] | entrepreneur_companyUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: entrepreneur_companyCreateOrConnectWithoutCompanyInput | entrepreneur_companyCreateOrConnectWithoutCompanyInput[]
    createMany?: entrepreneur_companyCreateManyCompanyInputEnvelope
    connect?: entrepreneur_companyWhereUniqueInput | entrepreneur_companyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type company_programUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<company_programCreateWithoutCompanyInput, company_programUncheckedCreateWithoutCompanyInput> | company_programCreateWithoutCompanyInput[] | company_programUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: company_programCreateOrConnectWithoutCompanyInput | company_programCreateOrConnectWithoutCompanyInput[]
    upsert?: company_programUpsertWithWhereUniqueWithoutCompanyInput | company_programUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: company_programCreateManyCompanyInputEnvelope
    set?: company_programWhereUniqueInput | company_programWhereUniqueInput[]
    disconnect?: company_programWhereUniqueInput | company_programWhereUniqueInput[]
    delete?: company_programWhereUniqueInput | company_programWhereUniqueInput[]
    connect?: company_programWhereUniqueInput | company_programWhereUniqueInput[]
    update?: company_programUpdateWithWhereUniqueWithoutCompanyInput | company_programUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: company_programUpdateManyWithWhereWithoutCompanyInput | company_programUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: company_programScalarWhereInput | company_programScalarWhereInput[]
  }

  export type entrepreneur_companyUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<entrepreneur_companyCreateWithoutCompanyInput, entrepreneur_companyUncheckedCreateWithoutCompanyInput> | entrepreneur_companyCreateWithoutCompanyInput[] | entrepreneur_companyUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: entrepreneur_companyCreateOrConnectWithoutCompanyInput | entrepreneur_companyCreateOrConnectWithoutCompanyInput[]
    upsert?: entrepreneur_companyUpsertWithWhereUniqueWithoutCompanyInput | entrepreneur_companyUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: entrepreneur_companyCreateManyCompanyInputEnvelope
    set?: entrepreneur_companyWhereUniqueInput | entrepreneur_companyWhereUniqueInput[]
    disconnect?: entrepreneur_companyWhereUniqueInput | entrepreneur_companyWhereUniqueInput[]
    delete?: entrepreneur_companyWhereUniqueInput | entrepreneur_companyWhereUniqueInput[]
    connect?: entrepreneur_companyWhereUniqueInput | entrepreneur_companyWhereUniqueInput[]
    update?: entrepreneur_companyUpdateWithWhereUniqueWithoutCompanyInput | entrepreneur_companyUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: entrepreneur_companyUpdateManyWithWhereWithoutCompanyInput | entrepreneur_companyUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: entrepreneur_companyScalarWhereInput | entrepreneur_companyScalarWhereInput[]
  }

  export type company_programUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<company_programCreateWithoutCompanyInput, company_programUncheckedCreateWithoutCompanyInput> | company_programCreateWithoutCompanyInput[] | company_programUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: company_programCreateOrConnectWithoutCompanyInput | company_programCreateOrConnectWithoutCompanyInput[]
    upsert?: company_programUpsertWithWhereUniqueWithoutCompanyInput | company_programUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: company_programCreateManyCompanyInputEnvelope
    set?: company_programWhereUniqueInput | company_programWhereUniqueInput[]
    disconnect?: company_programWhereUniqueInput | company_programWhereUniqueInput[]
    delete?: company_programWhereUniqueInput | company_programWhereUniqueInput[]
    connect?: company_programWhereUniqueInput | company_programWhereUniqueInput[]
    update?: company_programUpdateWithWhereUniqueWithoutCompanyInput | company_programUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: company_programUpdateManyWithWhereWithoutCompanyInput | company_programUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: company_programScalarWhereInput | company_programScalarWhereInput[]
  }

  export type entrepreneur_companyUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<entrepreneur_companyCreateWithoutCompanyInput, entrepreneur_companyUncheckedCreateWithoutCompanyInput> | entrepreneur_companyCreateWithoutCompanyInput[] | entrepreneur_companyUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: entrepreneur_companyCreateOrConnectWithoutCompanyInput | entrepreneur_companyCreateOrConnectWithoutCompanyInput[]
    upsert?: entrepreneur_companyUpsertWithWhereUniqueWithoutCompanyInput | entrepreneur_companyUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: entrepreneur_companyCreateManyCompanyInputEnvelope
    set?: entrepreneur_companyWhereUniqueInput | entrepreneur_companyWhereUniqueInput[]
    disconnect?: entrepreneur_companyWhereUniqueInput | entrepreneur_companyWhereUniqueInput[]
    delete?: entrepreneur_companyWhereUniqueInput | entrepreneur_companyWhereUniqueInput[]
    connect?: entrepreneur_companyWhereUniqueInput | entrepreneur_companyWhereUniqueInput[]
    update?: entrepreneur_companyUpdateWithWhereUniqueWithoutCompanyInput | entrepreneur_companyUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: entrepreneur_companyUpdateManyWithWhereWithoutCompanyInput | entrepreneur_companyUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: entrepreneur_companyScalarWhereInput | entrepreneur_companyScalarWhereInput[]
  }

  export type companyCreateNestedOneWithoutCompany_programInput = {
    create?: XOR<companyCreateWithoutCompany_programInput, companyUncheckedCreateWithoutCompany_programInput>
    connectOrCreate?: companyCreateOrConnectWithoutCompany_programInput
    connect?: companyWhereUniqueInput
  }

  export type programCreateNestedOneWithoutCompany_programInput = {
    create?: XOR<programCreateWithoutCompany_programInput, programUncheckedCreateWithoutCompany_programInput>
    connectOrCreate?: programCreateOrConnectWithoutCompany_programInput
    connect?: programWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type companyUpdateOneWithoutCompany_programNestedInput = {
    create?: XOR<companyCreateWithoutCompany_programInput, companyUncheckedCreateWithoutCompany_programInput>
    connectOrCreate?: companyCreateOrConnectWithoutCompany_programInput
    upsert?: companyUpsertWithoutCompany_programInput
    disconnect?: companyWhereInput | boolean
    delete?: companyWhereInput | boolean
    connect?: companyWhereUniqueInput
    update?: XOR<XOR<companyUpdateToOneWithWhereWithoutCompany_programInput, companyUpdateWithoutCompany_programInput>, companyUncheckedUpdateWithoutCompany_programInput>
  }

  export type programUpdateOneWithoutCompany_programNestedInput = {
    create?: XOR<programCreateWithoutCompany_programInput, programUncheckedCreateWithoutCompany_programInput>
    connectOrCreate?: programCreateOrConnectWithoutCompany_programInput
    upsert?: programUpsertWithoutCompany_programInput
    disconnect?: programWhereInput | boolean
    delete?: programWhereInput | boolean
    connect?: programWhereUniqueInput
    update?: XOR<XOR<programUpdateToOneWithWhereWithoutCompany_programInput, programUpdateWithoutCompany_programInput>, programUncheckedUpdateWithoutCompany_programInput>
  }

  export type entrepreneur_companyCreateNestedManyWithoutEntrepreneurInput = {
    create?: XOR<entrepreneur_companyCreateWithoutEntrepreneurInput, entrepreneur_companyUncheckedCreateWithoutEntrepreneurInput> | entrepreneur_companyCreateWithoutEntrepreneurInput[] | entrepreneur_companyUncheckedCreateWithoutEntrepreneurInput[]
    connectOrCreate?: entrepreneur_companyCreateOrConnectWithoutEntrepreneurInput | entrepreneur_companyCreateOrConnectWithoutEntrepreneurInput[]
    createMany?: entrepreneur_companyCreateManyEntrepreneurInputEnvelope
    connect?: entrepreneur_companyWhereUniqueInput | entrepreneur_companyWhereUniqueInput[]
  }

  export type entrepreneur_companyUncheckedCreateNestedManyWithoutEntrepreneurInput = {
    create?: XOR<entrepreneur_companyCreateWithoutEntrepreneurInput, entrepreneur_companyUncheckedCreateWithoutEntrepreneurInput> | entrepreneur_companyCreateWithoutEntrepreneurInput[] | entrepreneur_companyUncheckedCreateWithoutEntrepreneurInput[]
    connectOrCreate?: entrepreneur_companyCreateOrConnectWithoutEntrepreneurInput | entrepreneur_companyCreateOrConnectWithoutEntrepreneurInput[]
    createMany?: entrepreneur_companyCreateManyEntrepreneurInputEnvelope
    connect?: entrepreneur_companyWhereUniqueInput | entrepreneur_companyWhereUniqueInput[]
  }

  export type entrepreneur_companyUpdateManyWithoutEntrepreneurNestedInput = {
    create?: XOR<entrepreneur_companyCreateWithoutEntrepreneurInput, entrepreneur_companyUncheckedCreateWithoutEntrepreneurInput> | entrepreneur_companyCreateWithoutEntrepreneurInput[] | entrepreneur_companyUncheckedCreateWithoutEntrepreneurInput[]
    connectOrCreate?: entrepreneur_companyCreateOrConnectWithoutEntrepreneurInput | entrepreneur_companyCreateOrConnectWithoutEntrepreneurInput[]
    upsert?: entrepreneur_companyUpsertWithWhereUniqueWithoutEntrepreneurInput | entrepreneur_companyUpsertWithWhereUniqueWithoutEntrepreneurInput[]
    createMany?: entrepreneur_companyCreateManyEntrepreneurInputEnvelope
    set?: entrepreneur_companyWhereUniqueInput | entrepreneur_companyWhereUniqueInput[]
    disconnect?: entrepreneur_companyWhereUniqueInput | entrepreneur_companyWhereUniqueInput[]
    delete?: entrepreneur_companyWhereUniqueInput | entrepreneur_companyWhereUniqueInput[]
    connect?: entrepreneur_companyWhereUniqueInput | entrepreneur_companyWhereUniqueInput[]
    update?: entrepreneur_companyUpdateWithWhereUniqueWithoutEntrepreneurInput | entrepreneur_companyUpdateWithWhereUniqueWithoutEntrepreneurInput[]
    updateMany?: entrepreneur_companyUpdateManyWithWhereWithoutEntrepreneurInput | entrepreneur_companyUpdateManyWithWhereWithoutEntrepreneurInput[]
    deleteMany?: entrepreneur_companyScalarWhereInput | entrepreneur_companyScalarWhereInput[]
  }

  export type entrepreneur_companyUncheckedUpdateManyWithoutEntrepreneurNestedInput = {
    create?: XOR<entrepreneur_companyCreateWithoutEntrepreneurInput, entrepreneur_companyUncheckedCreateWithoutEntrepreneurInput> | entrepreneur_companyCreateWithoutEntrepreneurInput[] | entrepreneur_companyUncheckedCreateWithoutEntrepreneurInput[]
    connectOrCreate?: entrepreneur_companyCreateOrConnectWithoutEntrepreneurInput | entrepreneur_companyCreateOrConnectWithoutEntrepreneurInput[]
    upsert?: entrepreneur_companyUpsertWithWhereUniqueWithoutEntrepreneurInput | entrepreneur_companyUpsertWithWhereUniqueWithoutEntrepreneurInput[]
    createMany?: entrepreneur_companyCreateManyEntrepreneurInputEnvelope
    set?: entrepreneur_companyWhereUniqueInput | entrepreneur_companyWhereUniqueInput[]
    disconnect?: entrepreneur_companyWhereUniqueInput | entrepreneur_companyWhereUniqueInput[]
    delete?: entrepreneur_companyWhereUniqueInput | entrepreneur_companyWhereUniqueInput[]
    connect?: entrepreneur_companyWhereUniqueInput | entrepreneur_companyWhereUniqueInput[]
    update?: entrepreneur_companyUpdateWithWhereUniqueWithoutEntrepreneurInput | entrepreneur_companyUpdateWithWhereUniqueWithoutEntrepreneurInput[]
    updateMany?: entrepreneur_companyUpdateManyWithWhereWithoutEntrepreneurInput | entrepreneur_companyUpdateManyWithWhereWithoutEntrepreneurInput[]
    deleteMany?: entrepreneur_companyScalarWhereInput | entrepreneur_companyScalarWhereInput[]
  }

  export type companyCreateNestedOneWithoutEntrepreneur_companyInput = {
    create?: XOR<companyCreateWithoutEntrepreneur_companyInput, companyUncheckedCreateWithoutEntrepreneur_companyInput>
    connectOrCreate?: companyCreateOrConnectWithoutEntrepreneur_companyInput
    connect?: companyWhereUniqueInput
  }

  export type entrepreneurCreateNestedOneWithoutEntrepreneur_companyInput = {
    create?: XOR<entrepreneurCreateWithoutEntrepreneur_companyInput, entrepreneurUncheckedCreateWithoutEntrepreneur_companyInput>
    connectOrCreate?: entrepreneurCreateOrConnectWithoutEntrepreneur_companyInput
    connect?: entrepreneurWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type companyUpdateOneWithoutEntrepreneur_companyNestedInput = {
    create?: XOR<companyCreateWithoutEntrepreneur_companyInput, companyUncheckedCreateWithoutEntrepreneur_companyInput>
    connectOrCreate?: companyCreateOrConnectWithoutEntrepreneur_companyInput
    upsert?: companyUpsertWithoutEntrepreneur_companyInput
    disconnect?: companyWhereInput | boolean
    delete?: companyWhereInput | boolean
    connect?: companyWhereUniqueInput
    update?: XOR<XOR<companyUpdateToOneWithWhereWithoutEntrepreneur_companyInput, companyUpdateWithoutEntrepreneur_companyInput>, companyUncheckedUpdateWithoutEntrepreneur_companyInput>
  }

  export type entrepreneurUpdateOneWithoutEntrepreneur_companyNestedInput = {
    create?: XOR<entrepreneurCreateWithoutEntrepreneur_companyInput, entrepreneurUncheckedCreateWithoutEntrepreneur_companyInput>
    connectOrCreate?: entrepreneurCreateOrConnectWithoutEntrepreneur_companyInput
    upsert?: entrepreneurUpsertWithoutEntrepreneur_companyInput
    disconnect?: entrepreneurWhereInput | boolean
    delete?: entrepreneurWhereInput | boolean
    connect?: entrepreneurWhereUniqueInput
    update?: XOR<XOR<entrepreneurUpdateToOneWithWhereWithoutEntrepreneur_companyInput, entrepreneurUpdateWithoutEntrepreneur_companyInput>, entrepreneurUncheckedUpdateWithoutEntrepreneur_companyInput>
  }

  export type company_programCreateNestedManyWithoutProgramInput = {
    create?: XOR<company_programCreateWithoutProgramInput, company_programUncheckedCreateWithoutProgramInput> | company_programCreateWithoutProgramInput[] | company_programUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: company_programCreateOrConnectWithoutProgramInput | company_programCreateOrConnectWithoutProgramInput[]
    createMany?: company_programCreateManyProgramInputEnvelope
    connect?: company_programWhereUniqueInput | company_programWhereUniqueInput[]
  }

  export type company_programUncheckedCreateNestedManyWithoutProgramInput = {
    create?: XOR<company_programCreateWithoutProgramInput, company_programUncheckedCreateWithoutProgramInput> | company_programCreateWithoutProgramInput[] | company_programUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: company_programCreateOrConnectWithoutProgramInput | company_programCreateOrConnectWithoutProgramInput[]
    createMany?: company_programCreateManyProgramInputEnvelope
    connect?: company_programWhereUniqueInput | company_programWhereUniqueInput[]
  }

  export type company_programUpdateManyWithoutProgramNestedInput = {
    create?: XOR<company_programCreateWithoutProgramInput, company_programUncheckedCreateWithoutProgramInput> | company_programCreateWithoutProgramInput[] | company_programUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: company_programCreateOrConnectWithoutProgramInput | company_programCreateOrConnectWithoutProgramInput[]
    upsert?: company_programUpsertWithWhereUniqueWithoutProgramInput | company_programUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: company_programCreateManyProgramInputEnvelope
    set?: company_programWhereUniqueInput | company_programWhereUniqueInput[]
    disconnect?: company_programWhereUniqueInput | company_programWhereUniqueInput[]
    delete?: company_programWhereUniqueInput | company_programWhereUniqueInput[]
    connect?: company_programWhereUniqueInput | company_programWhereUniqueInput[]
    update?: company_programUpdateWithWhereUniqueWithoutProgramInput | company_programUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: company_programUpdateManyWithWhereWithoutProgramInput | company_programUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: company_programScalarWhereInput | company_programScalarWhereInput[]
  }

  export type company_programUncheckedUpdateManyWithoutProgramNestedInput = {
    create?: XOR<company_programCreateWithoutProgramInput, company_programUncheckedCreateWithoutProgramInput> | company_programCreateWithoutProgramInput[] | company_programUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: company_programCreateOrConnectWithoutProgramInput | company_programCreateOrConnectWithoutProgramInput[]
    upsert?: company_programUpsertWithWhereUniqueWithoutProgramInput | company_programUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: company_programCreateManyProgramInputEnvelope
    set?: company_programWhereUniqueInput | company_programWhereUniqueInput[]
    disconnect?: company_programWhereUniqueInput | company_programWhereUniqueInput[]
    delete?: company_programWhereUniqueInput | company_programWhereUniqueInput[]
    connect?: company_programWhereUniqueInput | company_programWhereUniqueInput[]
    update?: company_programUpdateWithWhereUniqueWithoutProgramInput | company_programUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: company_programUpdateManyWithWhereWithoutProgramInput | company_programUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: company_programScalarWhereInput | company_programScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type company_programCreateWithoutCompanyInput = {
    id?: string
    support_type?: string | null
    funding_amount?: number | null
    funding_date?: Date | string | null
    created_at?: Date | string | null
    program?: programCreateNestedOneWithoutCompany_programInput
  }

  export type company_programUncheckedCreateWithoutCompanyInput = {
    id?: string
    program_id?: string | null
    support_type?: string | null
    funding_amount?: number | null
    funding_date?: Date | string | null
    created_at?: Date | string | null
  }

  export type company_programCreateOrConnectWithoutCompanyInput = {
    where: company_programWhereUniqueInput
    create: XOR<company_programCreateWithoutCompanyInput, company_programUncheckedCreateWithoutCompanyInput>
  }

  export type company_programCreateManyCompanyInputEnvelope = {
    data: company_programCreateManyCompanyInput | company_programCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type entrepreneur_companyCreateWithoutCompanyInput = {
    id?: string
    is_leader?: boolean | null
    created_at?: Date | string | null
    entrepreneur?: entrepreneurCreateNestedOneWithoutEntrepreneur_companyInput
  }

  export type entrepreneur_companyUncheckedCreateWithoutCompanyInput = {
    id?: string
    entrepreneur_id?: string | null
    is_leader?: boolean | null
    created_at?: Date | string | null
  }

  export type entrepreneur_companyCreateOrConnectWithoutCompanyInput = {
    where: entrepreneur_companyWhereUniqueInput
    create: XOR<entrepreneur_companyCreateWithoutCompanyInput, entrepreneur_companyUncheckedCreateWithoutCompanyInput>
  }

  export type entrepreneur_companyCreateManyCompanyInputEnvelope = {
    data: entrepreneur_companyCreateManyCompanyInput | entrepreneur_companyCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type company_programUpsertWithWhereUniqueWithoutCompanyInput = {
    where: company_programWhereUniqueInput
    update: XOR<company_programUpdateWithoutCompanyInput, company_programUncheckedUpdateWithoutCompanyInput>
    create: XOR<company_programCreateWithoutCompanyInput, company_programUncheckedCreateWithoutCompanyInput>
  }

  export type company_programUpdateWithWhereUniqueWithoutCompanyInput = {
    where: company_programWhereUniqueInput
    data: XOR<company_programUpdateWithoutCompanyInput, company_programUncheckedUpdateWithoutCompanyInput>
  }

  export type company_programUpdateManyWithWhereWithoutCompanyInput = {
    where: company_programScalarWhereInput
    data: XOR<company_programUpdateManyMutationInput, company_programUncheckedUpdateManyWithoutCompanyInput>
  }

  export type company_programScalarWhereInput = {
    AND?: company_programScalarWhereInput | company_programScalarWhereInput[]
    OR?: company_programScalarWhereInput[]
    NOT?: company_programScalarWhereInput | company_programScalarWhereInput[]
    id?: UuidFilter<"company_program"> | string
    company_id?: UuidNullableFilter<"company_program"> | string | null
    program_id?: UuidNullableFilter<"company_program"> | string | null
    support_type?: StringNullableFilter<"company_program"> | string | null
    funding_amount?: IntNullableFilter<"company_program"> | number | null
    funding_date?: DateTimeNullableFilter<"company_program"> | Date | string | null
    created_at?: DateTimeNullableFilter<"company_program"> | Date | string | null
  }

  export type entrepreneur_companyUpsertWithWhereUniqueWithoutCompanyInput = {
    where: entrepreneur_companyWhereUniqueInput
    update: XOR<entrepreneur_companyUpdateWithoutCompanyInput, entrepreneur_companyUncheckedUpdateWithoutCompanyInput>
    create: XOR<entrepreneur_companyCreateWithoutCompanyInput, entrepreneur_companyUncheckedCreateWithoutCompanyInput>
  }

  export type entrepreneur_companyUpdateWithWhereUniqueWithoutCompanyInput = {
    where: entrepreneur_companyWhereUniqueInput
    data: XOR<entrepreneur_companyUpdateWithoutCompanyInput, entrepreneur_companyUncheckedUpdateWithoutCompanyInput>
  }

  export type entrepreneur_companyUpdateManyWithWhereWithoutCompanyInput = {
    where: entrepreneur_companyScalarWhereInput
    data: XOR<entrepreneur_companyUpdateManyMutationInput, entrepreneur_companyUncheckedUpdateManyWithoutCompanyInput>
  }

  export type entrepreneur_companyScalarWhereInput = {
    AND?: entrepreneur_companyScalarWhereInput | entrepreneur_companyScalarWhereInput[]
    OR?: entrepreneur_companyScalarWhereInput[]
    NOT?: entrepreneur_companyScalarWhereInput | entrepreneur_companyScalarWhereInput[]
    id?: UuidFilter<"entrepreneur_company"> | string
    company_id?: UuidNullableFilter<"entrepreneur_company"> | string | null
    entrepreneur_id?: UuidNullableFilter<"entrepreneur_company"> | string | null
    is_leader?: BoolNullableFilter<"entrepreneur_company"> | boolean | null
    created_at?: DateTimeNullableFilter<"entrepreneur_company"> | Date | string | null
  }

  export type companyCreateWithoutCompany_programInput = {
    id?: string
    name: string
    phone?: string | null
    email?: string | null
    logo_url?: string | null
    status?: string | null
    sector?: string | null
    creation_date?: Date | string | null
    location_city?: string | null
    description?: string | null
    revenue?: Decimal | DecimalJsLike | number | string | null
    project_deck_url?: string | null
    created_at?: Date | string | null
    entrepreneur_company?: entrepreneur_companyCreateNestedManyWithoutCompanyInput
  }

  export type companyUncheckedCreateWithoutCompany_programInput = {
    id?: string
    name: string
    phone?: string | null
    email?: string | null
    logo_url?: string | null
    status?: string | null
    sector?: string | null
    creation_date?: Date | string | null
    location_city?: string | null
    description?: string | null
    revenue?: Decimal | DecimalJsLike | number | string | null
    project_deck_url?: string | null
    created_at?: Date | string | null
    entrepreneur_company?: entrepreneur_companyUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companyCreateOrConnectWithoutCompany_programInput = {
    where: companyWhereUniqueInput
    create: XOR<companyCreateWithoutCompany_programInput, companyUncheckedCreateWithoutCompany_programInput>
  }

  export type programCreateWithoutCompany_programInput = {
    id?: string
    name: string
    objective?: string | null
    duration?: string | null
    eligibility_conditions?: string | null
    support_type: string
    budget?: string | null
    launch_date?: Date | string | null
    created_at?: Date | string | null
  }

  export type programUncheckedCreateWithoutCompany_programInput = {
    id?: string
    name: string
    objective?: string | null
    duration?: string | null
    eligibility_conditions?: string | null
    support_type: string
    budget?: string | null
    launch_date?: Date | string | null
    created_at?: Date | string | null
  }

  export type programCreateOrConnectWithoutCompany_programInput = {
    where: programWhereUniqueInput
    create: XOR<programCreateWithoutCompany_programInput, programUncheckedCreateWithoutCompany_programInput>
  }

  export type companyUpsertWithoutCompany_programInput = {
    update: XOR<companyUpdateWithoutCompany_programInput, companyUncheckedUpdateWithoutCompany_programInput>
    create: XOR<companyCreateWithoutCompany_programInput, companyUncheckedCreateWithoutCompany_programInput>
    where?: companyWhereInput
  }

  export type companyUpdateToOneWithWhereWithoutCompany_programInput = {
    where?: companyWhereInput
    data: XOR<companyUpdateWithoutCompany_programInput, companyUncheckedUpdateWithoutCompany_programInput>
  }

  export type companyUpdateWithoutCompany_programInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    creation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location_city?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    revenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    project_deck_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    entrepreneur_company?: entrepreneur_companyUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateWithoutCompany_programInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    creation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location_city?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    revenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    project_deck_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    entrepreneur_company?: entrepreneur_companyUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type programUpsertWithoutCompany_programInput = {
    update: XOR<programUpdateWithoutCompany_programInput, programUncheckedUpdateWithoutCompany_programInput>
    create: XOR<programCreateWithoutCompany_programInput, programUncheckedCreateWithoutCompany_programInput>
    where?: programWhereInput
  }

  export type programUpdateToOneWithWhereWithoutCompany_programInput = {
    where?: programWhereInput
    data: XOR<programUpdateWithoutCompany_programInput, programUncheckedUpdateWithoutCompany_programInput>
  }

  export type programUpdateWithoutCompany_programInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    eligibility_conditions?: NullableStringFieldUpdateOperationsInput | string | null
    support_type?: StringFieldUpdateOperationsInput | string
    budget?: NullableStringFieldUpdateOperationsInput | string | null
    launch_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type programUncheckedUpdateWithoutCompany_programInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    objective?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    eligibility_conditions?: NullableStringFieldUpdateOperationsInput | string | null
    support_type?: StringFieldUpdateOperationsInput | string
    budget?: NullableStringFieldUpdateOperationsInput | string | null
    launch_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type entrepreneur_companyCreateWithoutEntrepreneurInput = {
    id?: string
    is_leader?: boolean | null
    created_at?: Date | string | null
    company?: companyCreateNestedOneWithoutEntrepreneur_companyInput
  }

  export type entrepreneur_companyUncheckedCreateWithoutEntrepreneurInput = {
    id?: string
    company_id?: string | null
    is_leader?: boolean | null
    created_at?: Date | string | null
  }

  export type entrepreneur_companyCreateOrConnectWithoutEntrepreneurInput = {
    where: entrepreneur_companyWhereUniqueInput
    create: XOR<entrepreneur_companyCreateWithoutEntrepreneurInput, entrepreneur_companyUncheckedCreateWithoutEntrepreneurInput>
  }

  export type entrepreneur_companyCreateManyEntrepreneurInputEnvelope = {
    data: entrepreneur_companyCreateManyEntrepreneurInput | entrepreneur_companyCreateManyEntrepreneurInput[]
    skipDuplicates?: boolean
  }

  export type entrepreneur_companyUpsertWithWhereUniqueWithoutEntrepreneurInput = {
    where: entrepreneur_companyWhereUniqueInput
    update: XOR<entrepreneur_companyUpdateWithoutEntrepreneurInput, entrepreneur_companyUncheckedUpdateWithoutEntrepreneurInput>
    create: XOR<entrepreneur_companyCreateWithoutEntrepreneurInput, entrepreneur_companyUncheckedCreateWithoutEntrepreneurInput>
  }

  export type entrepreneur_companyUpdateWithWhereUniqueWithoutEntrepreneurInput = {
    where: entrepreneur_companyWhereUniqueInput
    data: XOR<entrepreneur_companyUpdateWithoutEntrepreneurInput, entrepreneur_companyUncheckedUpdateWithoutEntrepreneurInput>
  }

  export type entrepreneur_companyUpdateManyWithWhereWithoutEntrepreneurInput = {
    where: entrepreneur_companyScalarWhereInput
    data: XOR<entrepreneur_companyUpdateManyMutationInput, entrepreneur_companyUncheckedUpdateManyWithoutEntrepreneurInput>
  }

  export type companyCreateWithoutEntrepreneur_companyInput = {
    id?: string
    name: string
    phone?: string | null
    email?: string | null
    logo_url?: string | null
    status?: string | null
    sector?: string | null
    creation_date?: Date | string | null
    location_city?: string | null
    description?: string | null
    revenue?: Decimal | DecimalJsLike | number | string | null
    project_deck_url?: string | null
    created_at?: Date | string | null
    company_program?: company_programCreateNestedManyWithoutCompanyInput
  }

  export type companyUncheckedCreateWithoutEntrepreneur_companyInput = {
    id?: string
    name: string
    phone?: string | null
    email?: string | null
    logo_url?: string | null
    status?: string | null
    sector?: string | null
    creation_date?: Date | string | null
    location_city?: string | null
    description?: string | null
    revenue?: Decimal | DecimalJsLike | number | string | null
    project_deck_url?: string | null
    created_at?: Date | string | null
    company_program?: company_programUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companyCreateOrConnectWithoutEntrepreneur_companyInput = {
    where: companyWhereUniqueInput
    create: XOR<companyCreateWithoutEntrepreneur_companyInput, companyUncheckedCreateWithoutEntrepreneur_companyInput>
  }

  export type entrepreneurCreateWithoutEntrepreneur_companyInput = {
    id?: string
    last_name: string
    first_name: string
    gender: string
    phone: string
    email: string
    photo_url?: string | null
    cv_url?: string | null
    created_at?: Date | string | null
  }

  export type entrepreneurUncheckedCreateWithoutEntrepreneur_companyInput = {
    id?: string
    last_name: string
    first_name: string
    gender: string
    phone: string
    email: string
    photo_url?: string | null
    cv_url?: string | null
    created_at?: Date | string | null
  }

  export type entrepreneurCreateOrConnectWithoutEntrepreneur_companyInput = {
    where: entrepreneurWhereUniqueInput
    create: XOR<entrepreneurCreateWithoutEntrepreneur_companyInput, entrepreneurUncheckedCreateWithoutEntrepreneur_companyInput>
  }

  export type companyUpsertWithoutEntrepreneur_companyInput = {
    update: XOR<companyUpdateWithoutEntrepreneur_companyInput, companyUncheckedUpdateWithoutEntrepreneur_companyInput>
    create: XOR<companyCreateWithoutEntrepreneur_companyInput, companyUncheckedCreateWithoutEntrepreneur_companyInput>
    where?: companyWhereInput
  }

  export type companyUpdateToOneWithWhereWithoutEntrepreneur_companyInput = {
    where?: companyWhereInput
    data: XOR<companyUpdateWithoutEntrepreneur_companyInput, companyUncheckedUpdateWithoutEntrepreneur_companyInput>
  }

  export type companyUpdateWithoutEntrepreneur_companyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    creation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location_city?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    revenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    project_deck_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_program?: company_programUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateWithoutEntrepreneur_companyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    creation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location_city?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    revenue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    project_deck_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_program?: company_programUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type entrepreneurUpsertWithoutEntrepreneur_companyInput = {
    update: XOR<entrepreneurUpdateWithoutEntrepreneur_companyInput, entrepreneurUncheckedUpdateWithoutEntrepreneur_companyInput>
    create: XOR<entrepreneurCreateWithoutEntrepreneur_companyInput, entrepreneurUncheckedCreateWithoutEntrepreneur_companyInput>
    where?: entrepreneurWhereInput
  }

  export type entrepreneurUpdateToOneWithWhereWithoutEntrepreneur_companyInput = {
    where?: entrepreneurWhereInput
    data: XOR<entrepreneurUpdateWithoutEntrepreneur_companyInput, entrepreneurUncheckedUpdateWithoutEntrepreneur_companyInput>
  }

  export type entrepreneurUpdateWithoutEntrepreneur_companyInput = {
    id?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type entrepreneurUncheckedUpdateWithoutEntrepreneur_companyInput = {
    id?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type company_programCreateWithoutProgramInput = {
    id?: string
    support_type?: string | null
    funding_amount?: number | null
    funding_date?: Date | string | null
    created_at?: Date | string | null
    company?: companyCreateNestedOneWithoutCompany_programInput
  }

  export type company_programUncheckedCreateWithoutProgramInput = {
    id?: string
    company_id?: string | null
    support_type?: string | null
    funding_amount?: number | null
    funding_date?: Date | string | null
    created_at?: Date | string | null
  }

  export type company_programCreateOrConnectWithoutProgramInput = {
    where: company_programWhereUniqueInput
    create: XOR<company_programCreateWithoutProgramInput, company_programUncheckedCreateWithoutProgramInput>
  }

  export type company_programCreateManyProgramInputEnvelope = {
    data: company_programCreateManyProgramInput | company_programCreateManyProgramInput[]
    skipDuplicates?: boolean
  }

  export type company_programUpsertWithWhereUniqueWithoutProgramInput = {
    where: company_programWhereUniqueInput
    update: XOR<company_programUpdateWithoutProgramInput, company_programUncheckedUpdateWithoutProgramInput>
    create: XOR<company_programCreateWithoutProgramInput, company_programUncheckedCreateWithoutProgramInput>
  }

  export type company_programUpdateWithWhereUniqueWithoutProgramInput = {
    where: company_programWhereUniqueInput
    data: XOR<company_programUpdateWithoutProgramInput, company_programUncheckedUpdateWithoutProgramInput>
  }

  export type company_programUpdateManyWithWhereWithoutProgramInput = {
    where: company_programScalarWhereInput
    data: XOR<company_programUpdateManyMutationInput, company_programUncheckedUpdateManyWithoutProgramInput>
  }

  export type company_programCreateManyCompanyInput = {
    id?: string
    program_id?: string | null
    support_type?: string | null
    funding_amount?: number | null
    funding_date?: Date | string | null
    created_at?: Date | string | null
  }

  export type entrepreneur_companyCreateManyCompanyInput = {
    id?: string
    entrepreneur_id?: string | null
    is_leader?: boolean | null
    created_at?: Date | string | null
  }

  export type company_programUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    support_type?: NullableStringFieldUpdateOperationsInput | string | null
    funding_amount?: NullableIntFieldUpdateOperationsInput | number | null
    funding_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    program?: programUpdateOneWithoutCompany_programNestedInput
  }

  export type company_programUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    program_id?: NullableStringFieldUpdateOperationsInput | string | null
    support_type?: NullableStringFieldUpdateOperationsInput | string | null
    funding_amount?: NullableIntFieldUpdateOperationsInput | number | null
    funding_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type company_programUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    program_id?: NullableStringFieldUpdateOperationsInput | string | null
    support_type?: NullableStringFieldUpdateOperationsInput | string | null
    funding_amount?: NullableIntFieldUpdateOperationsInput | number | null
    funding_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type entrepreneur_companyUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_leader?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    entrepreneur?: entrepreneurUpdateOneWithoutEntrepreneur_companyNestedInput
  }

  export type entrepreneur_companyUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    entrepreneur_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_leader?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type entrepreneur_companyUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    entrepreneur_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_leader?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type entrepreneur_companyCreateManyEntrepreneurInput = {
    id?: string
    company_id?: string | null
    is_leader?: boolean | null
    created_at?: Date | string | null
  }

  export type entrepreneur_companyUpdateWithoutEntrepreneurInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_leader?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: companyUpdateOneWithoutEntrepreneur_companyNestedInput
  }

  export type entrepreneur_companyUncheckedUpdateWithoutEntrepreneurInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_leader?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type entrepreneur_companyUncheckedUpdateManyWithoutEntrepreneurInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_leader?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type company_programCreateManyProgramInput = {
    id?: string
    company_id?: string | null
    support_type?: string | null
    funding_amount?: number | null
    funding_date?: Date | string | null
    created_at?: Date | string | null
  }

  export type company_programUpdateWithoutProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    support_type?: NullableStringFieldUpdateOperationsInput | string | null
    funding_amount?: NullableIntFieldUpdateOperationsInput | number | null
    funding_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: companyUpdateOneWithoutCompany_programNestedInput
  }

  export type company_programUncheckedUpdateWithoutProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    support_type?: NullableStringFieldUpdateOperationsInput | string | null
    funding_amount?: NullableIntFieldUpdateOperationsInput | number | null
    funding_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type company_programUncheckedUpdateManyWithoutProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    support_type?: NullableStringFieldUpdateOperationsInput | string | null
    funding_amount?: NullableIntFieldUpdateOperationsInput | number | null
    funding_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}