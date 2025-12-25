
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Part
 * 
 */
export type Part = $Result.DefaultSelection<Prisma.$PartPayload>
/**
 * Model Movement
 * 
 */
export type Movement = $Result.DefaultSelection<Prisma.$MovementPayload>
/**
 * Model ProductionOrder
 * 
 */
export type ProductionOrder = $Result.DefaultSelection<Prisma.$ProductionOrderPayload>
/**
 * Model BOMItem
 * 
 */
export type BOMItem = $Result.DefaultSelection<Prisma.$BOMItemPayload>
/**
 * Model InboundInvoice
 * 
 */
export type InboundInvoice = $Result.DefaultSelection<Prisma.$InboundInvoicePayload>
/**
 * Model InboundItem
 * 
 */
export type InboundItem = $Result.DefaultSelection<Prisma.$InboundItemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.part`: Exposes CRUD operations for the **Part** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parts
    * const parts = await prisma.part.findMany()
    * ```
    */
  get part(): Prisma.PartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movement`: Exposes CRUD operations for the **Movement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movements
    * const movements = await prisma.movement.findMany()
    * ```
    */
  get movement(): Prisma.MovementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productionOrder`: Exposes CRUD operations for the **ProductionOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductionOrders
    * const productionOrders = await prisma.productionOrder.findMany()
    * ```
    */
  get productionOrder(): Prisma.ProductionOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bOMItem`: Exposes CRUD operations for the **BOMItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BOMItems
    * const bOMItems = await prisma.bOMItem.findMany()
    * ```
    */
  get bOMItem(): Prisma.BOMItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inboundInvoice`: Exposes CRUD operations for the **InboundInvoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InboundInvoices
    * const inboundInvoices = await prisma.inboundInvoice.findMany()
    * ```
    */
  get inboundInvoice(): Prisma.InboundInvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inboundItem`: Exposes CRUD operations for the **InboundItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InboundItems
    * const inboundItems = await prisma.inboundItem.findMany()
    * ```
    */
  get inboundItem(): Prisma.InboundItemDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.1
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Session: 'Session',
    Part: 'Part',
    Movement: 'Movement',
    ProductionOrder: 'ProductionOrder',
    BOMItem: 'BOMItem',
    InboundInvoice: 'InboundInvoice',
    InboundItem: 'InboundItem'
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
      modelProps: "user" | "session" | "part" | "movement" | "productionOrder" | "bOMItem" | "inboundInvoice" | "inboundItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Part: {
        payload: Prisma.$PartPayload<ExtArgs>
        fields: Prisma.PartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          findFirst: {
            args: Prisma.PartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          findMany: {
            args: Prisma.PartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>[]
          }
          create: {
            args: Prisma.PartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          createMany: {
            args: Prisma.PartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>[]
          }
          delete: {
            args: Prisma.PartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          update: {
            args: Prisma.PartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          deleteMany: {
            args: Prisma.PartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>[]
          }
          upsert: {
            args: Prisma.PartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          aggregate: {
            args: Prisma.PartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePart>
          }
          groupBy: {
            args: Prisma.PartGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartCountArgs<ExtArgs>
            result: $Utils.Optional<PartCountAggregateOutputType> | number
          }
        }
      }
      Movement: {
        payload: Prisma.$MovementPayload<ExtArgs>
        fields: Prisma.MovementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>
          }
          findFirst: {
            args: Prisma.MovementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>
          }
          findMany: {
            args: Prisma.MovementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>[]
          }
          create: {
            args: Prisma.MovementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>
          }
          createMany: {
            args: Prisma.MovementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>[]
          }
          delete: {
            args: Prisma.MovementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>
          }
          update: {
            args: Prisma.MovementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>
          }
          deleteMany: {
            args: Prisma.MovementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MovementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>[]
          }
          upsert: {
            args: Prisma.MovementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>
          }
          aggregate: {
            args: Prisma.MovementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovement>
          }
          groupBy: {
            args: Prisma.MovementGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovementGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovementCountArgs<ExtArgs>
            result: $Utils.Optional<MovementCountAggregateOutputType> | number
          }
        }
      }
      ProductionOrder: {
        payload: Prisma.$ProductionOrderPayload<ExtArgs>
        fields: Prisma.ProductionOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductionOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductionOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderPayload>
          }
          findFirst: {
            args: Prisma.ProductionOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductionOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderPayload>
          }
          findMany: {
            args: Prisma.ProductionOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderPayload>[]
          }
          create: {
            args: Prisma.ProductionOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderPayload>
          }
          createMany: {
            args: Prisma.ProductionOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductionOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderPayload>[]
          }
          delete: {
            args: Prisma.ProductionOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderPayload>
          }
          update: {
            args: Prisma.ProductionOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderPayload>
          }
          deleteMany: {
            args: Prisma.ProductionOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductionOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductionOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderPayload>[]
          }
          upsert: {
            args: Prisma.ProductionOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductionOrderPayload>
          }
          aggregate: {
            args: Prisma.ProductionOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductionOrder>
          }
          groupBy: {
            args: Prisma.ProductionOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductionOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductionOrderCountArgs<ExtArgs>
            result: $Utils.Optional<ProductionOrderCountAggregateOutputType> | number
          }
        }
      }
      BOMItem: {
        payload: Prisma.$BOMItemPayload<ExtArgs>
        fields: Prisma.BOMItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BOMItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BOMItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BOMItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BOMItemPayload>
          }
          findFirst: {
            args: Prisma.BOMItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BOMItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BOMItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BOMItemPayload>
          }
          findMany: {
            args: Prisma.BOMItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BOMItemPayload>[]
          }
          create: {
            args: Prisma.BOMItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BOMItemPayload>
          }
          createMany: {
            args: Prisma.BOMItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BOMItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BOMItemPayload>[]
          }
          delete: {
            args: Prisma.BOMItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BOMItemPayload>
          }
          update: {
            args: Prisma.BOMItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BOMItemPayload>
          }
          deleteMany: {
            args: Prisma.BOMItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BOMItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BOMItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BOMItemPayload>[]
          }
          upsert: {
            args: Prisma.BOMItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BOMItemPayload>
          }
          aggregate: {
            args: Prisma.BOMItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBOMItem>
          }
          groupBy: {
            args: Prisma.BOMItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<BOMItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.BOMItemCountArgs<ExtArgs>
            result: $Utils.Optional<BOMItemCountAggregateOutputType> | number
          }
        }
      }
      InboundInvoice: {
        payload: Prisma.$InboundInvoicePayload<ExtArgs>
        fields: Prisma.InboundInvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InboundInvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundInvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InboundInvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundInvoicePayload>
          }
          findFirst: {
            args: Prisma.InboundInvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundInvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InboundInvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundInvoicePayload>
          }
          findMany: {
            args: Prisma.InboundInvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundInvoicePayload>[]
          }
          create: {
            args: Prisma.InboundInvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundInvoicePayload>
          }
          createMany: {
            args: Prisma.InboundInvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InboundInvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundInvoicePayload>[]
          }
          delete: {
            args: Prisma.InboundInvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundInvoicePayload>
          }
          update: {
            args: Prisma.InboundInvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundInvoicePayload>
          }
          deleteMany: {
            args: Prisma.InboundInvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InboundInvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InboundInvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundInvoicePayload>[]
          }
          upsert: {
            args: Prisma.InboundInvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundInvoicePayload>
          }
          aggregate: {
            args: Prisma.InboundInvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInboundInvoice>
          }
          groupBy: {
            args: Prisma.InboundInvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InboundInvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InboundInvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InboundInvoiceCountAggregateOutputType> | number
          }
        }
      }
      InboundItem: {
        payload: Prisma.$InboundItemPayload<ExtArgs>
        fields: Prisma.InboundItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InboundItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InboundItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundItemPayload>
          }
          findFirst: {
            args: Prisma.InboundItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InboundItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundItemPayload>
          }
          findMany: {
            args: Prisma.InboundItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundItemPayload>[]
          }
          create: {
            args: Prisma.InboundItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundItemPayload>
          }
          createMany: {
            args: Prisma.InboundItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InboundItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundItemPayload>[]
          }
          delete: {
            args: Prisma.InboundItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundItemPayload>
          }
          update: {
            args: Prisma.InboundItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundItemPayload>
          }
          deleteMany: {
            args: Prisma.InboundItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InboundItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InboundItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundItemPayload>[]
          }
          upsert: {
            args: Prisma.InboundItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundItemPayload>
          }
          aggregate: {
            args: Prisma.InboundItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInboundItem>
          }
          groupBy: {
            args: Prisma.InboundItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<InboundItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.InboundItemCountArgs<ExtArgs>
            result: $Utils.Optional<InboundItemCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    session?: SessionOmit
    part?: PartOmit
    movement?: MovementOmit
    productionOrder?: ProductionOrderOmit
    bOMItem?: BOMItemOmit
    inboundInvoice?: InboundInvoiceOmit
    inboundItem?: InboundItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type PartCountOutputType
   */

  export type PartCountOutputType = {
    movements: number
  }

  export type PartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movements?: boolean | PartCountOutputTypeCountMovementsArgs
  }

  // Custom InputTypes
  /**
   * PartCountOutputType without action
   */
  export type PartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartCountOutputType
     */
    select?: PartCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PartCountOutputType without action
   */
  export type PartCountOutputTypeCountMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovementWhereInput
  }


  /**
   * Count Type ProductionOrderCountOutputType
   */

  export type ProductionOrderCountOutputType = {
    parts: number
  }

  export type ProductionOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parts?: boolean | ProductionOrderCountOutputTypeCountPartsArgs
  }

  // Custom InputTypes
  /**
   * ProductionOrderCountOutputType without action
   */
  export type ProductionOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrderCountOutputType
     */
    select?: ProductionOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductionOrderCountOutputType without action
   */
  export type ProductionOrderCountOutputTypeCountPartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BOMItemWhereInput
  }


  /**
   * Count Type InboundInvoiceCountOutputType
   */

  export type InboundInvoiceCountOutputType = {
    items: number
  }

  export type InboundInvoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | InboundInvoiceCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * InboundInvoiceCountOutputType without action
   */
  export type InboundInvoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundInvoiceCountOutputType
     */
    select?: InboundInvoiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InboundInvoiceCountOutputType without action
   */
  export type InboundInvoiceCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InboundItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    role: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    token: string
    expiresAt: Date
    createdAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "expiresAt" | "createdAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly token: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Part
   */

  export type AggregatePart = {
    _count: PartCountAggregateOutputType | null
    _avg: PartAvgAggregateOutputType | null
    _sum: PartSumAggregateOutputType | null
    _min: PartMinAggregateOutputType | null
    _max: PartMaxAggregateOutputType | null
  }

  export type PartAvgAggregateOutputType = {
    qty: number | null
  }

  export type PartSumAggregateOutputType = {
    qty: number | null
  }

  export type PartMinAggregateOutputType = {
    id: string | null
    name: string | null
    qty: number | null
    unit: string | null
    status: string | null
    icon: string | null
    sku: string | null
    location: string | null
    locationStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartMaxAggregateOutputType = {
    id: string | null
    name: string | null
    qty: number | null
    unit: string | null
    status: string | null
    icon: string | null
    sku: string | null
    location: string | null
    locationStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartCountAggregateOutputType = {
    id: number
    name: number
    qty: number
    unit: number
    status: number
    icon: number
    sku: number
    location: number
    locationStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PartAvgAggregateInputType = {
    qty?: true
  }

  export type PartSumAggregateInputType = {
    qty?: true
  }

  export type PartMinAggregateInputType = {
    id?: true
    name?: true
    qty?: true
    unit?: true
    status?: true
    icon?: true
    sku?: true
    location?: true
    locationStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartMaxAggregateInputType = {
    id?: true
    name?: true
    qty?: true
    unit?: true
    status?: true
    icon?: true
    sku?: true
    location?: true
    locationStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartCountAggregateInputType = {
    id?: true
    name?: true
    qty?: true
    unit?: true
    status?: true
    icon?: true
    sku?: true
    location?: true
    locationStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Part to aggregate.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parts
    **/
    _count?: true | PartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartMaxAggregateInputType
  }

  export type GetPartAggregateType<T extends PartAggregateArgs> = {
        [P in keyof T & keyof AggregatePart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePart[P]>
      : GetScalarType<T[P], AggregatePart[P]>
  }




  export type PartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartWhereInput
    orderBy?: PartOrderByWithAggregationInput | PartOrderByWithAggregationInput[]
    by: PartScalarFieldEnum[] | PartScalarFieldEnum
    having?: PartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartCountAggregateInputType | true
    _avg?: PartAvgAggregateInputType
    _sum?: PartSumAggregateInputType
    _min?: PartMinAggregateInputType
    _max?: PartMaxAggregateInputType
  }

  export type PartGroupByOutputType = {
    id: string
    name: string
    qty: number
    unit: string
    status: string
    icon: string
    sku: string
    location: string
    locationStatus: string
    createdAt: Date
    updatedAt: Date
    _count: PartCountAggregateOutputType | null
    _avg: PartAvgAggregateOutputType | null
    _sum: PartSumAggregateOutputType | null
    _min: PartMinAggregateOutputType | null
    _max: PartMaxAggregateOutputType | null
  }

  type GetPartGroupByPayload<T extends PartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartGroupByOutputType[P]>
            : GetScalarType<T[P], PartGroupByOutputType[P]>
        }
      >
    >


  export type PartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    qty?: boolean
    unit?: boolean
    status?: boolean
    icon?: boolean
    sku?: boolean
    location?: boolean
    locationStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    movements?: boolean | Part$movementsArgs<ExtArgs>
    _count?: boolean | PartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["part"]>

  export type PartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    qty?: boolean
    unit?: boolean
    status?: boolean
    icon?: boolean
    sku?: boolean
    location?: boolean
    locationStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["part"]>

  export type PartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    qty?: boolean
    unit?: boolean
    status?: boolean
    icon?: boolean
    sku?: boolean
    location?: boolean
    locationStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["part"]>

  export type PartSelectScalar = {
    id?: boolean
    name?: boolean
    qty?: boolean
    unit?: boolean
    status?: boolean
    icon?: boolean
    sku?: boolean
    location?: boolean
    locationStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "qty" | "unit" | "status" | "icon" | "sku" | "location" | "locationStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["part"]>
  export type PartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movements?: boolean | Part$movementsArgs<ExtArgs>
    _count?: boolean | PartCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Part"
    objects: {
      movements: Prisma.$MovementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      qty: number
      unit: string
      status: string
      icon: string
      sku: string
      location: string
      locationStatus: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["part"]>
    composites: {}
  }

  type PartGetPayload<S extends boolean | null | undefined | PartDefaultArgs> = $Result.GetResult<Prisma.$PartPayload, S>

  type PartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartCountAggregateInputType | true
    }

  export interface PartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Part'], meta: { name: 'Part' } }
    /**
     * Find zero or one Part that matches the filter.
     * @param {PartFindUniqueArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartFindUniqueArgs>(args: SelectSubset<T, PartFindUniqueArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Part that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartFindUniqueOrThrowArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartFindUniqueOrThrowArgs>(args: SelectSubset<T, PartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Part that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartFindFirstArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartFindFirstArgs>(args?: SelectSubset<T, PartFindFirstArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Part that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartFindFirstOrThrowArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartFindFirstOrThrowArgs>(args?: SelectSubset<T, PartFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parts
     * const parts = await prisma.part.findMany()
     * 
     * // Get first 10 Parts
     * const parts = await prisma.part.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partWithIdOnly = await prisma.part.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartFindManyArgs>(args?: SelectSubset<T, PartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Part.
     * @param {PartCreateArgs} args - Arguments to create a Part.
     * @example
     * // Create one Part
     * const Part = await prisma.part.create({
     *   data: {
     *     // ... data to create a Part
     *   }
     * })
     * 
     */
    create<T extends PartCreateArgs>(args: SelectSubset<T, PartCreateArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parts.
     * @param {PartCreateManyArgs} args - Arguments to create many Parts.
     * @example
     * // Create many Parts
     * const part = await prisma.part.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartCreateManyArgs>(args?: SelectSubset<T, PartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parts and returns the data saved in the database.
     * @param {PartCreateManyAndReturnArgs} args - Arguments to create many Parts.
     * @example
     * // Create many Parts
     * const part = await prisma.part.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parts and only return the `id`
     * const partWithIdOnly = await prisma.part.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartCreateManyAndReturnArgs>(args?: SelectSubset<T, PartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Part.
     * @param {PartDeleteArgs} args - Arguments to delete one Part.
     * @example
     * // Delete one Part
     * const Part = await prisma.part.delete({
     *   where: {
     *     // ... filter to delete one Part
     *   }
     * })
     * 
     */
    delete<T extends PartDeleteArgs>(args: SelectSubset<T, PartDeleteArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Part.
     * @param {PartUpdateArgs} args - Arguments to update one Part.
     * @example
     * // Update one Part
     * const part = await prisma.part.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartUpdateArgs>(args: SelectSubset<T, PartUpdateArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parts.
     * @param {PartDeleteManyArgs} args - Arguments to filter Parts to delete.
     * @example
     * // Delete a few Parts
     * const { count } = await prisma.part.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartDeleteManyArgs>(args?: SelectSubset<T, PartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parts
     * const part = await prisma.part.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartUpdateManyArgs>(args: SelectSubset<T, PartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parts and returns the data updated in the database.
     * @param {PartUpdateManyAndReturnArgs} args - Arguments to update many Parts.
     * @example
     * // Update many Parts
     * const part = await prisma.part.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parts and only return the `id`
     * const partWithIdOnly = await prisma.part.updateManyAndReturn({
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
    updateManyAndReturn<T extends PartUpdateManyAndReturnArgs>(args: SelectSubset<T, PartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Part.
     * @param {PartUpsertArgs} args - Arguments to update or create a Part.
     * @example
     * // Update or create a Part
     * const part = await prisma.part.upsert({
     *   create: {
     *     // ... data to create a Part
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Part we want to update
     *   }
     * })
     */
    upsert<T extends PartUpsertArgs>(args: SelectSubset<T, PartUpsertArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartCountArgs} args - Arguments to filter Parts to count.
     * @example
     * // Count the number of Parts
     * const count = await prisma.part.count({
     *   where: {
     *     // ... the filter for the Parts we want to count
     *   }
     * })
    **/
    count<T extends PartCountArgs>(
      args?: Subset<T, PartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Part.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PartAggregateArgs>(args: Subset<T, PartAggregateArgs>): Prisma.PrismaPromise<GetPartAggregateType<T>>

    /**
     * Group by Part.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartGroupByArgs} args - Group by arguments.
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
      T extends PartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartGroupByArgs['orderBy'] }
        : { orderBy?: PartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Part model
   */
  readonly fields: PartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Part.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movements<T extends Part$movementsArgs<ExtArgs> = {}>(args?: Subset<T, Part$movementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Part model
   */
  interface PartFieldRefs {
    readonly id: FieldRef<"Part", 'String'>
    readonly name: FieldRef<"Part", 'String'>
    readonly qty: FieldRef<"Part", 'Int'>
    readonly unit: FieldRef<"Part", 'String'>
    readonly status: FieldRef<"Part", 'String'>
    readonly icon: FieldRef<"Part", 'String'>
    readonly sku: FieldRef<"Part", 'String'>
    readonly location: FieldRef<"Part", 'String'>
    readonly locationStatus: FieldRef<"Part", 'String'>
    readonly createdAt: FieldRef<"Part", 'DateTime'>
    readonly updatedAt: FieldRef<"Part", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Part findUnique
   */
  export type PartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part findUniqueOrThrow
   */
  export type PartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part findFirst
   */
  export type PartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parts.
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parts.
     */
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * Part findFirstOrThrow
   */
  export type PartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parts.
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parts.
     */
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * Part findMany
   */
  export type PartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Parts to fetch.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parts.
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * Part create
   */
  export type PartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * The data needed to create a Part.
     */
    data: XOR<PartCreateInput, PartUncheckedCreateInput>
  }

  /**
   * Part createMany
   */
  export type PartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parts.
     */
    data: PartCreateManyInput | PartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Part createManyAndReturn
   */
  export type PartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * The data used to create many Parts.
     */
    data: PartCreateManyInput | PartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Part update
   */
  export type PartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * The data needed to update a Part.
     */
    data: XOR<PartUpdateInput, PartUncheckedUpdateInput>
    /**
     * Choose, which Part to update.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part updateMany
   */
  export type PartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parts.
     */
    data: XOR<PartUpdateManyMutationInput, PartUncheckedUpdateManyInput>
    /**
     * Filter which Parts to update
     */
    where?: PartWhereInput
    /**
     * Limit how many Parts to update.
     */
    limit?: number
  }

  /**
   * Part updateManyAndReturn
   */
  export type PartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * The data used to update Parts.
     */
    data: XOR<PartUpdateManyMutationInput, PartUncheckedUpdateManyInput>
    /**
     * Filter which Parts to update
     */
    where?: PartWhereInput
    /**
     * Limit how many Parts to update.
     */
    limit?: number
  }

  /**
   * Part upsert
   */
  export type PartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * The filter to search for the Part to update in case it exists.
     */
    where: PartWhereUniqueInput
    /**
     * In case the Part found by the `where` argument doesn't exist, create a new Part with this data.
     */
    create: XOR<PartCreateInput, PartUncheckedCreateInput>
    /**
     * In case the Part was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartUpdateInput, PartUncheckedUpdateInput>
  }

  /**
   * Part delete
   */
  export type PartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter which Part to delete.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part deleteMany
   */
  export type PartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parts to delete
     */
    where?: PartWhereInput
    /**
     * Limit how many Parts to delete.
     */
    limit?: number
  }

  /**
   * Part.movements
   */
  export type Part$movementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movement
     */
    omit?: MovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    where?: MovementWhereInput
    orderBy?: MovementOrderByWithRelationInput | MovementOrderByWithRelationInput[]
    cursor?: MovementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovementScalarFieldEnum | MovementScalarFieldEnum[]
  }

  /**
   * Part without action
   */
  export type PartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
  }


  /**
   * Model Movement
   */

  export type AggregateMovement = {
    _count: MovementCountAggregateOutputType | null
    _avg: MovementAvgAggregateOutputType | null
    _sum: MovementSumAggregateOutputType | null
    _min: MovementMinAggregateOutputType | null
    _max: MovementMaxAggregateOutputType | null
  }

  export type MovementAvgAggregateOutputType = {
    qty: number | null
  }

  export type MovementSumAggregateOutputType = {
    qty: number | null
  }

  export type MovementMinAggregateOutputType = {
    id: string | null
    date: Date | null
    qty: number | null
    source: string | null
    destination: string | null
    type: string | null
    partId: string | null
    createdAt: Date | null
  }

  export type MovementMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    qty: number | null
    source: string | null
    destination: string | null
    type: string | null
    partId: string | null
    createdAt: Date | null
  }

  export type MovementCountAggregateOutputType = {
    id: number
    date: number
    qty: number
    source: number
    destination: number
    type: number
    partId: number
    createdAt: number
    _all: number
  }


  export type MovementAvgAggregateInputType = {
    qty?: true
  }

  export type MovementSumAggregateInputType = {
    qty?: true
  }

  export type MovementMinAggregateInputType = {
    id?: true
    date?: true
    qty?: true
    source?: true
    destination?: true
    type?: true
    partId?: true
    createdAt?: true
  }

  export type MovementMaxAggregateInputType = {
    id?: true
    date?: true
    qty?: true
    source?: true
    destination?: true
    type?: true
    partId?: true
    createdAt?: true
  }

  export type MovementCountAggregateInputType = {
    id?: true
    date?: true
    qty?: true
    source?: true
    destination?: true
    type?: true
    partId?: true
    createdAt?: true
    _all?: true
  }

  export type MovementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movement to aggregate.
     */
    where?: MovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movements to fetch.
     */
    orderBy?: MovementOrderByWithRelationInput | MovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movements
    **/
    _count?: true | MovementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovementMaxAggregateInputType
  }

  export type GetMovementAggregateType<T extends MovementAggregateArgs> = {
        [P in keyof T & keyof AggregateMovement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovement[P]>
      : GetScalarType<T[P], AggregateMovement[P]>
  }




  export type MovementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovementWhereInput
    orderBy?: MovementOrderByWithAggregationInput | MovementOrderByWithAggregationInput[]
    by: MovementScalarFieldEnum[] | MovementScalarFieldEnum
    having?: MovementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovementCountAggregateInputType | true
    _avg?: MovementAvgAggregateInputType
    _sum?: MovementSumAggregateInputType
    _min?: MovementMinAggregateInputType
    _max?: MovementMaxAggregateInputType
  }

  export type MovementGroupByOutputType = {
    id: string
    date: Date
    qty: number
    source: string
    destination: string
    type: string
    partId: string
    createdAt: Date
    _count: MovementCountAggregateOutputType | null
    _avg: MovementAvgAggregateOutputType | null
    _sum: MovementSumAggregateOutputType | null
    _min: MovementMinAggregateOutputType | null
    _max: MovementMaxAggregateOutputType | null
  }

  type GetMovementGroupByPayload<T extends MovementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovementGroupByOutputType[P]>
            : GetScalarType<T[P], MovementGroupByOutputType[P]>
        }
      >
    >


  export type MovementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    qty?: boolean
    source?: boolean
    destination?: boolean
    type?: boolean
    partId?: boolean
    createdAt?: boolean
    part?: boolean | PartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movement"]>

  export type MovementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    qty?: boolean
    source?: boolean
    destination?: boolean
    type?: boolean
    partId?: boolean
    createdAt?: boolean
    part?: boolean | PartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movement"]>

  export type MovementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    qty?: boolean
    source?: boolean
    destination?: boolean
    type?: boolean
    partId?: boolean
    createdAt?: boolean
    part?: boolean | PartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movement"]>

  export type MovementSelectScalar = {
    id?: boolean
    date?: boolean
    qty?: boolean
    source?: boolean
    destination?: boolean
    type?: boolean
    partId?: boolean
    createdAt?: boolean
  }

  export type MovementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "qty" | "source" | "destination" | "type" | "partId" | "createdAt", ExtArgs["result"]["movement"]>
  export type MovementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    part?: boolean | PartDefaultArgs<ExtArgs>
  }
  export type MovementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    part?: boolean | PartDefaultArgs<ExtArgs>
  }
  export type MovementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    part?: boolean | PartDefaultArgs<ExtArgs>
  }

  export type $MovementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movement"
    objects: {
      part: Prisma.$PartPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      qty: number
      source: string
      destination: string
      type: string
      partId: string
      createdAt: Date
    }, ExtArgs["result"]["movement"]>
    composites: {}
  }

  type MovementGetPayload<S extends boolean | null | undefined | MovementDefaultArgs> = $Result.GetResult<Prisma.$MovementPayload, S>

  type MovementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovementCountAggregateInputType | true
    }

  export interface MovementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movement'], meta: { name: 'Movement' } }
    /**
     * Find zero or one Movement that matches the filter.
     * @param {MovementFindUniqueArgs} args - Arguments to find a Movement
     * @example
     * // Get one Movement
     * const movement = await prisma.movement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovementFindUniqueArgs>(args: SelectSubset<T, MovementFindUniqueArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovementFindUniqueOrThrowArgs} args - Arguments to find a Movement
     * @example
     * // Get one Movement
     * const movement = await prisma.movement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovementFindUniqueOrThrowArgs>(args: SelectSubset<T, MovementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementFindFirstArgs} args - Arguments to find a Movement
     * @example
     * // Get one Movement
     * const movement = await prisma.movement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovementFindFirstArgs>(args?: SelectSubset<T, MovementFindFirstArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementFindFirstOrThrowArgs} args - Arguments to find a Movement
     * @example
     * // Get one Movement
     * const movement = await prisma.movement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovementFindFirstOrThrowArgs>(args?: SelectSubset<T, MovementFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movements
     * const movements = await prisma.movement.findMany()
     * 
     * // Get first 10 Movements
     * const movements = await prisma.movement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movementWithIdOnly = await prisma.movement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovementFindManyArgs>(args?: SelectSubset<T, MovementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movement.
     * @param {MovementCreateArgs} args - Arguments to create a Movement.
     * @example
     * // Create one Movement
     * const Movement = await prisma.movement.create({
     *   data: {
     *     // ... data to create a Movement
     *   }
     * })
     * 
     */
    create<T extends MovementCreateArgs>(args: SelectSubset<T, MovementCreateArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movements.
     * @param {MovementCreateManyArgs} args - Arguments to create many Movements.
     * @example
     * // Create many Movements
     * const movement = await prisma.movement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovementCreateManyArgs>(args?: SelectSubset<T, MovementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Movements and returns the data saved in the database.
     * @param {MovementCreateManyAndReturnArgs} args - Arguments to create many Movements.
     * @example
     * // Create many Movements
     * const movement = await prisma.movement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Movements and only return the `id`
     * const movementWithIdOnly = await prisma.movement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovementCreateManyAndReturnArgs>(args?: SelectSubset<T, MovementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Movement.
     * @param {MovementDeleteArgs} args - Arguments to delete one Movement.
     * @example
     * // Delete one Movement
     * const Movement = await prisma.movement.delete({
     *   where: {
     *     // ... filter to delete one Movement
     *   }
     * })
     * 
     */
    delete<T extends MovementDeleteArgs>(args: SelectSubset<T, MovementDeleteArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movement.
     * @param {MovementUpdateArgs} args - Arguments to update one Movement.
     * @example
     * // Update one Movement
     * const movement = await prisma.movement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovementUpdateArgs>(args: SelectSubset<T, MovementUpdateArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movements.
     * @param {MovementDeleteManyArgs} args - Arguments to filter Movements to delete.
     * @example
     * // Delete a few Movements
     * const { count } = await prisma.movement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovementDeleteManyArgs>(args?: SelectSubset<T, MovementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movements
     * const movement = await prisma.movement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovementUpdateManyArgs>(args: SelectSubset<T, MovementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movements and returns the data updated in the database.
     * @param {MovementUpdateManyAndReturnArgs} args - Arguments to update many Movements.
     * @example
     * // Update many Movements
     * const movement = await prisma.movement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Movements and only return the `id`
     * const movementWithIdOnly = await prisma.movement.updateManyAndReturn({
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
    updateManyAndReturn<T extends MovementUpdateManyAndReturnArgs>(args: SelectSubset<T, MovementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Movement.
     * @param {MovementUpsertArgs} args - Arguments to update or create a Movement.
     * @example
     * // Update or create a Movement
     * const movement = await prisma.movement.upsert({
     *   create: {
     *     // ... data to create a Movement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movement we want to update
     *   }
     * })
     */
    upsert<T extends MovementUpsertArgs>(args: SelectSubset<T, MovementUpsertArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Movements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementCountArgs} args - Arguments to filter Movements to count.
     * @example
     * // Count the number of Movements
     * const count = await prisma.movement.count({
     *   where: {
     *     // ... the filter for the Movements we want to count
     *   }
     * })
    **/
    count<T extends MovementCountArgs>(
      args?: Subset<T, MovementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovementAggregateArgs>(args: Subset<T, MovementAggregateArgs>): Prisma.PrismaPromise<GetMovementAggregateType<T>>

    /**
     * Group by Movement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementGroupByArgs} args - Group by arguments.
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
      T extends MovementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovementGroupByArgs['orderBy'] }
        : { orderBy?: MovementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MovementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movement model
   */
  readonly fields: MovementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    part<T extends PartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PartDefaultArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Movement model
   */
  interface MovementFieldRefs {
    readonly id: FieldRef<"Movement", 'String'>
    readonly date: FieldRef<"Movement", 'DateTime'>
    readonly qty: FieldRef<"Movement", 'Int'>
    readonly source: FieldRef<"Movement", 'String'>
    readonly destination: FieldRef<"Movement", 'String'>
    readonly type: FieldRef<"Movement", 'String'>
    readonly partId: FieldRef<"Movement", 'String'>
    readonly createdAt: FieldRef<"Movement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Movement findUnique
   */
  export type MovementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movement
     */
    omit?: MovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * Filter, which Movement to fetch.
     */
    where: MovementWhereUniqueInput
  }

  /**
   * Movement findUniqueOrThrow
   */
  export type MovementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movement
     */
    omit?: MovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * Filter, which Movement to fetch.
     */
    where: MovementWhereUniqueInput
  }

  /**
   * Movement findFirst
   */
  export type MovementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movement
     */
    omit?: MovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * Filter, which Movement to fetch.
     */
    where?: MovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movements to fetch.
     */
    orderBy?: MovementOrderByWithRelationInput | MovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movements.
     */
    cursor?: MovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movements.
     */
    distinct?: MovementScalarFieldEnum | MovementScalarFieldEnum[]
  }

  /**
   * Movement findFirstOrThrow
   */
  export type MovementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movement
     */
    omit?: MovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * Filter, which Movement to fetch.
     */
    where?: MovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movements to fetch.
     */
    orderBy?: MovementOrderByWithRelationInput | MovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movements.
     */
    cursor?: MovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movements.
     */
    distinct?: MovementScalarFieldEnum | MovementScalarFieldEnum[]
  }

  /**
   * Movement findMany
   */
  export type MovementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movement
     */
    omit?: MovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * Filter, which Movements to fetch.
     */
    where?: MovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movements to fetch.
     */
    orderBy?: MovementOrderByWithRelationInput | MovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movements.
     */
    cursor?: MovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movements.
     */
    skip?: number
    distinct?: MovementScalarFieldEnum | MovementScalarFieldEnum[]
  }

  /**
   * Movement create
   */
  export type MovementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movement
     */
    omit?: MovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * The data needed to create a Movement.
     */
    data: XOR<MovementCreateInput, MovementUncheckedCreateInput>
  }

  /**
   * Movement createMany
   */
  export type MovementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movements.
     */
    data: MovementCreateManyInput | MovementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movement createManyAndReturn
   */
  export type MovementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Movement
     */
    omit?: MovementOmit<ExtArgs> | null
    /**
     * The data used to create many Movements.
     */
    data: MovementCreateManyInput | MovementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Movement update
   */
  export type MovementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movement
     */
    omit?: MovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * The data needed to update a Movement.
     */
    data: XOR<MovementUpdateInput, MovementUncheckedUpdateInput>
    /**
     * Choose, which Movement to update.
     */
    where: MovementWhereUniqueInput
  }

  /**
   * Movement updateMany
   */
  export type MovementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movements.
     */
    data: XOR<MovementUpdateManyMutationInput, MovementUncheckedUpdateManyInput>
    /**
     * Filter which Movements to update
     */
    where?: MovementWhereInput
    /**
     * Limit how many Movements to update.
     */
    limit?: number
  }

  /**
   * Movement updateManyAndReturn
   */
  export type MovementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Movement
     */
    omit?: MovementOmit<ExtArgs> | null
    /**
     * The data used to update Movements.
     */
    data: XOR<MovementUpdateManyMutationInput, MovementUncheckedUpdateManyInput>
    /**
     * Filter which Movements to update
     */
    where?: MovementWhereInput
    /**
     * Limit how many Movements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Movement upsert
   */
  export type MovementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movement
     */
    omit?: MovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * The filter to search for the Movement to update in case it exists.
     */
    where: MovementWhereUniqueInput
    /**
     * In case the Movement found by the `where` argument doesn't exist, create a new Movement with this data.
     */
    create: XOR<MovementCreateInput, MovementUncheckedCreateInput>
    /**
     * In case the Movement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovementUpdateInput, MovementUncheckedUpdateInput>
  }

  /**
   * Movement delete
   */
  export type MovementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movement
     */
    omit?: MovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * Filter which Movement to delete.
     */
    where: MovementWhereUniqueInput
  }

  /**
   * Movement deleteMany
   */
  export type MovementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movements to delete
     */
    where?: MovementWhereInput
    /**
     * Limit how many Movements to delete.
     */
    limit?: number
  }

  /**
   * Movement without action
   */
  export type MovementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movement
     */
    omit?: MovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
  }


  /**
   * Model ProductionOrder
   */

  export type AggregateProductionOrder = {
    _count: ProductionOrderCountAggregateOutputType | null
    _avg: ProductionOrderAvgAggregateOutputType | null
    _sum: ProductionOrderSumAggregateOutputType | null
    _min: ProductionOrderMinAggregateOutputType | null
    _max: ProductionOrderMaxAggregateOutputType | null
  }

  export type ProductionOrderAvgAggregateOutputType = {
    progress: number | null
  }

  export type ProductionOrderSumAggregateOutputType = {
    progress: number | null
  }

  export type ProductionOrderMinAggregateOutputType = {
    id: string | null
    status: string | null
    line: string | null
    description: string | null
    dueTime: string | null
    progress: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductionOrderMaxAggregateOutputType = {
    id: string | null
    status: string | null
    line: string | null
    description: string | null
    dueTime: string | null
    progress: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductionOrderCountAggregateOutputType = {
    id: number
    status: number
    line: number
    description: number
    dueTime: number
    progress: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductionOrderAvgAggregateInputType = {
    progress?: true
  }

  export type ProductionOrderSumAggregateInputType = {
    progress?: true
  }

  export type ProductionOrderMinAggregateInputType = {
    id?: true
    status?: true
    line?: true
    description?: true
    dueTime?: true
    progress?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductionOrderMaxAggregateInputType = {
    id?: true
    status?: true
    line?: true
    description?: true
    dueTime?: true
    progress?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductionOrderCountAggregateInputType = {
    id?: true
    status?: true
    line?: true
    description?: true
    dueTime?: true
    progress?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductionOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductionOrder to aggregate.
     */
    where?: ProductionOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionOrders to fetch.
     */
    orderBy?: ProductionOrderOrderByWithRelationInput | ProductionOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductionOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductionOrders
    **/
    _count?: true | ProductionOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductionOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductionOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductionOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductionOrderMaxAggregateInputType
  }

  export type GetProductionOrderAggregateType<T extends ProductionOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateProductionOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductionOrder[P]>
      : GetScalarType<T[P], AggregateProductionOrder[P]>
  }




  export type ProductionOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductionOrderWhereInput
    orderBy?: ProductionOrderOrderByWithAggregationInput | ProductionOrderOrderByWithAggregationInput[]
    by: ProductionOrderScalarFieldEnum[] | ProductionOrderScalarFieldEnum
    having?: ProductionOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductionOrderCountAggregateInputType | true
    _avg?: ProductionOrderAvgAggregateInputType
    _sum?: ProductionOrderSumAggregateInputType
    _min?: ProductionOrderMinAggregateInputType
    _max?: ProductionOrderMaxAggregateInputType
  }

  export type ProductionOrderGroupByOutputType = {
    id: string
    status: string
    line: string
    description: string
    dueTime: string
    progress: number
    createdAt: Date
    updatedAt: Date
    _count: ProductionOrderCountAggregateOutputType | null
    _avg: ProductionOrderAvgAggregateOutputType | null
    _sum: ProductionOrderSumAggregateOutputType | null
    _min: ProductionOrderMinAggregateOutputType | null
    _max: ProductionOrderMaxAggregateOutputType | null
  }

  type GetProductionOrderGroupByPayload<T extends ProductionOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductionOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductionOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductionOrderGroupByOutputType[P]>
            : GetScalarType<T[P], ProductionOrderGroupByOutputType[P]>
        }
      >
    >


  export type ProductionOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    line?: boolean
    description?: boolean
    dueTime?: boolean
    progress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parts?: boolean | ProductionOrder$partsArgs<ExtArgs>
    _count?: boolean | ProductionOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productionOrder"]>

  export type ProductionOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    line?: boolean
    description?: boolean
    dueTime?: boolean
    progress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["productionOrder"]>

  export type ProductionOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    line?: boolean
    description?: boolean
    dueTime?: boolean
    progress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["productionOrder"]>

  export type ProductionOrderSelectScalar = {
    id?: boolean
    status?: boolean
    line?: boolean
    description?: boolean
    dueTime?: boolean
    progress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductionOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "line" | "description" | "dueTime" | "progress" | "createdAt" | "updatedAt", ExtArgs["result"]["productionOrder"]>
  export type ProductionOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parts?: boolean | ProductionOrder$partsArgs<ExtArgs>
    _count?: boolean | ProductionOrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductionOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductionOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductionOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductionOrder"
    objects: {
      parts: Prisma.$BOMItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: string
      line: string
      description: string
      dueTime: string
      progress: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productionOrder"]>
    composites: {}
  }

  type ProductionOrderGetPayload<S extends boolean | null | undefined | ProductionOrderDefaultArgs> = $Result.GetResult<Prisma.$ProductionOrderPayload, S>

  type ProductionOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductionOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductionOrderCountAggregateInputType | true
    }

  export interface ProductionOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductionOrder'], meta: { name: 'ProductionOrder' } }
    /**
     * Find zero or one ProductionOrder that matches the filter.
     * @param {ProductionOrderFindUniqueArgs} args - Arguments to find a ProductionOrder
     * @example
     * // Get one ProductionOrder
     * const productionOrder = await prisma.productionOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductionOrderFindUniqueArgs>(args: SelectSubset<T, ProductionOrderFindUniqueArgs<ExtArgs>>): Prisma__ProductionOrderClient<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductionOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductionOrderFindUniqueOrThrowArgs} args - Arguments to find a ProductionOrder
     * @example
     * // Get one ProductionOrder
     * const productionOrder = await prisma.productionOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductionOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductionOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductionOrderClient<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductionOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderFindFirstArgs} args - Arguments to find a ProductionOrder
     * @example
     * // Get one ProductionOrder
     * const productionOrder = await prisma.productionOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductionOrderFindFirstArgs>(args?: SelectSubset<T, ProductionOrderFindFirstArgs<ExtArgs>>): Prisma__ProductionOrderClient<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductionOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderFindFirstOrThrowArgs} args - Arguments to find a ProductionOrder
     * @example
     * // Get one ProductionOrder
     * const productionOrder = await prisma.productionOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductionOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductionOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductionOrderClient<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductionOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductionOrders
     * const productionOrders = await prisma.productionOrder.findMany()
     * 
     * // Get first 10 ProductionOrders
     * const productionOrders = await prisma.productionOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productionOrderWithIdOnly = await prisma.productionOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductionOrderFindManyArgs>(args?: SelectSubset<T, ProductionOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductionOrder.
     * @param {ProductionOrderCreateArgs} args - Arguments to create a ProductionOrder.
     * @example
     * // Create one ProductionOrder
     * const ProductionOrder = await prisma.productionOrder.create({
     *   data: {
     *     // ... data to create a ProductionOrder
     *   }
     * })
     * 
     */
    create<T extends ProductionOrderCreateArgs>(args: SelectSubset<T, ProductionOrderCreateArgs<ExtArgs>>): Prisma__ProductionOrderClient<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductionOrders.
     * @param {ProductionOrderCreateManyArgs} args - Arguments to create many ProductionOrders.
     * @example
     * // Create many ProductionOrders
     * const productionOrder = await prisma.productionOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductionOrderCreateManyArgs>(args?: SelectSubset<T, ProductionOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductionOrders and returns the data saved in the database.
     * @param {ProductionOrderCreateManyAndReturnArgs} args - Arguments to create many ProductionOrders.
     * @example
     * // Create many ProductionOrders
     * const productionOrder = await prisma.productionOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductionOrders and only return the `id`
     * const productionOrderWithIdOnly = await prisma.productionOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductionOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductionOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductionOrder.
     * @param {ProductionOrderDeleteArgs} args - Arguments to delete one ProductionOrder.
     * @example
     * // Delete one ProductionOrder
     * const ProductionOrder = await prisma.productionOrder.delete({
     *   where: {
     *     // ... filter to delete one ProductionOrder
     *   }
     * })
     * 
     */
    delete<T extends ProductionOrderDeleteArgs>(args: SelectSubset<T, ProductionOrderDeleteArgs<ExtArgs>>): Prisma__ProductionOrderClient<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductionOrder.
     * @param {ProductionOrderUpdateArgs} args - Arguments to update one ProductionOrder.
     * @example
     * // Update one ProductionOrder
     * const productionOrder = await prisma.productionOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductionOrderUpdateArgs>(args: SelectSubset<T, ProductionOrderUpdateArgs<ExtArgs>>): Prisma__ProductionOrderClient<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductionOrders.
     * @param {ProductionOrderDeleteManyArgs} args - Arguments to filter ProductionOrders to delete.
     * @example
     * // Delete a few ProductionOrders
     * const { count } = await prisma.productionOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductionOrderDeleteManyArgs>(args?: SelectSubset<T, ProductionOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductionOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductionOrders
     * const productionOrder = await prisma.productionOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductionOrderUpdateManyArgs>(args: SelectSubset<T, ProductionOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductionOrders and returns the data updated in the database.
     * @param {ProductionOrderUpdateManyAndReturnArgs} args - Arguments to update many ProductionOrders.
     * @example
     * // Update many ProductionOrders
     * const productionOrder = await prisma.productionOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductionOrders and only return the `id`
     * const productionOrderWithIdOnly = await prisma.productionOrder.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductionOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductionOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductionOrder.
     * @param {ProductionOrderUpsertArgs} args - Arguments to update or create a ProductionOrder.
     * @example
     * // Update or create a ProductionOrder
     * const productionOrder = await prisma.productionOrder.upsert({
     *   create: {
     *     // ... data to create a ProductionOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductionOrder we want to update
     *   }
     * })
     */
    upsert<T extends ProductionOrderUpsertArgs>(args: SelectSubset<T, ProductionOrderUpsertArgs<ExtArgs>>): Prisma__ProductionOrderClient<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductionOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderCountArgs} args - Arguments to filter ProductionOrders to count.
     * @example
     * // Count the number of ProductionOrders
     * const count = await prisma.productionOrder.count({
     *   where: {
     *     // ... the filter for the ProductionOrders we want to count
     *   }
     * })
    **/
    count<T extends ProductionOrderCountArgs>(
      args?: Subset<T, ProductionOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductionOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductionOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductionOrderAggregateArgs>(args: Subset<T, ProductionOrderAggregateArgs>): Prisma.PrismaPromise<GetProductionOrderAggregateType<T>>

    /**
     * Group by ProductionOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductionOrderGroupByArgs} args - Group by arguments.
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
      T extends ProductionOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductionOrderGroupByArgs['orderBy'] }
        : { orderBy?: ProductionOrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductionOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductionOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductionOrder model
   */
  readonly fields: ProductionOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductionOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductionOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parts<T extends ProductionOrder$partsArgs<ExtArgs> = {}>(args?: Subset<T, ProductionOrder$partsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BOMItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProductionOrder model
   */
  interface ProductionOrderFieldRefs {
    readonly id: FieldRef<"ProductionOrder", 'String'>
    readonly status: FieldRef<"ProductionOrder", 'String'>
    readonly line: FieldRef<"ProductionOrder", 'String'>
    readonly description: FieldRef<"ProductionOrder", 'String'>
    readonly dueTime: FieldRef<"ProductionOrder", 'String'>
    readonly progress: FieldRef<"ProductionOrder", 'Int'>
    readonly createdAt: FieldRef<"ProductionOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductionOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductionOrder findUnique
   */
  export type ProductionOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductionOrder to fetch.
     */
    where: ProductionOrderWhereUniqueInput
  }

  /**
   * ProductionOrder findUniqueOrThrow
   */
  export type ProductionOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductionOrder to fetch.
     */
    where: ProductionOrderWhereUniqueInput
  }

  /**
   * ProductionOrder findFirst
   */
  export type ProductionOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductionOrder to fetch.
     */
    where?: ProductionOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionOrders to fetch.
     */
    orderBy?: ProductionOrderOrderByWithRelationInput | ProductionOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductionOrders.
     */
    cursor?: ProductionOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductionOrders.
     */
    distinct?: ProductionOrderScalarFieldEnum | ProductionOrderScalarFieldEnum[]
  }

  /**
   * ProductionOrder findFirstOrThrow
   */
  export type ProductionOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductionOrder to fetch.
     */
    where?: ProductionOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionOrders to fetch.
     */
    orderBy?: ProductionOrderOrderByWithRelationInput | ProductionOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductionOrders.
     */
    cursor?: ProductionOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductionOrders.
     */
    distinct?: ProductionOrderScalarFieldEnum | ProductionOrderScalarFieldEnum[]
  }

  /**
   * ProductionOrder findMany
   */
  export type ProductionOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductionOrders to fetch.
     */
    where?: ProductionOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductionOrders to fetch.
     */
    orderBy?: ProductionOrderOrderByWithRelationInput | ProductionOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductionOrders.
     */
    cursor?: ProductionOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductionOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductionOrders.
     */
    skip?: number
    distinct?: ProductionOrderScalarFieldEnum | ProductionOrderScalarFieldEnum[]
  }

  /**
   * ProductionOrder create
   */
  export type ProductionOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductionOrder.
     */
    data: XOR<ProductionOrderCreateInput, ProductionOrderUncheckedCreateInput>
  }

  /**
   * ProductionOrder createMany
   */
  export type ProductionOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductionOrders.
     */
    data: ProductionOrderCreateManyInput | ProductionOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductionOrder createManyAndReturn
   */
  export type ProductionOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * The data used to create many ProductionOrders.
     */
    data: ProductionOrderCreateManyInput | ProductionOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductionOrder update
   */
  export type ProductionOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductionOrder.
     */
    data: XOR<ProductionOrderUpdateInput, ProductionOrderUncheckedUpdateInput>
    /**
     * Choose, which ProductionOrder to update.
     */
    where: ProductionOrderWhereUniqueInput
  }

  /**
   * ProductionOrder updateMany
   */
  export type ProductionOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductionOrders.
     */
    data: XOR<ProductionOrderUpdateManyMutationInput, ProductionOrderUncheckedUpdateManyInput>
    /**
     * Filter which ProductionOrders to update
     */
    where?: ProductionOrderWhereInput
    /**
     * Limit how many ProductionOrders to update.
     */
    limit?: number
  }

  /**
   * ProductionOrder updateManyAndReturn
   */
  export type ProductionOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * The data used to update ProductionOrders.
     */
    data: XOR<ProductionOrderUpdateManyMutationInput, ProductionOrderUncheckedUpdateManyInput>
    /**
     * Filter which ProductionOrders to update
     */
    where?: ProductionOrderWhereInput
    /**
     * Limit how many ProductionOrders to update.
     */
    limit?: number
  }

  /**
   * ProductionOrder upsert
   */
  export type ProductionOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductionOrder to update in case it exists.
     */
    where: ProductionOrderWhereUniqueInput
    /**
     * In case the ProductionOrder found by the `where` argument doesn't exist, create a new ProductionOrder with this data.
     */
    create: XOR<ProductionOrderCreateInput, ProductionOrderUncheckedCreateInput>
    /**
     * In case the ProductionOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductionOrderUpdateInput, ProductionOrderUncheckedUpdateInput>
  }

  /**
   * ProductionOrder delete
   */
  export type ProductionOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
    /**
     * Filter which ProductionOrder to delete.
     */
    where: ProductionOrderWhereUniqueInput
  }

  /**
   * ProductionOrder deleteMany
   */
  export type ProductionOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductionOrders to delete
     */
    where?: ProductionOrderWhereInput
    /**
     * Limit how many ProductionOrders to delete.
     */
    limit?: number
  }

  /**
   * ProductionOrder.parts
   */
  export type ProductionOrder$partsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BOMItem
     */
    select?: BOMItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BOMItem
     */
    omit?: BOMItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BOMItemInclude<ExtArgs> | null
    where?: BOMItemWhereInput
    orderBy?: BOMItemOrderByWithRelationInput | BOMItemOrderByWithRelationInput[]
    cursor?: BOMItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BOMItemScalarFieldEnum | BOMItemScalarFieldEnum[]
  }

  /**
   * ProductionOrder without action
   */
  export type ProductionOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductionOrder
     */
    select?: ProductionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductionOrder
     */
    omit?: ProductionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductionOrderInclude<ExtArgs> | null
  }


  /**
   * Model BOMItem
   */

  export type AggregateBOMItem = {
    _count: BOMItemCountAggregateOutputType | null
    _avg: BOMItemAvgAggregateOutputType | null
    _sum: BOMItemSumAggregateOutputType | null
    _min: BOMItemMinAggregateOutputType | null
    _max: BOMItemMaxAggregateOutputType | null
  }

  export type BOMItemAvgAggregateOutputType = {
    requiredQty: number | null
  }

  export type BOMItemSumAggregateOutputType = {
    requiredQty: number | null
  }

  export type BOMItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    requiredQty: number | null
    picked: boolean | null
    unit: string | null
    moId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BOMItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    requiredQty: number | null
    picked: boolean | null
    unit: string | null
    moId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BOMItemCountAggregateOutputType = {
    id: number
    name: number
    requiredQty: number
    picked: number
    unit: number
    moId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BOMItemAvgAggregateInputType = {
    requiredQty?: true
  }

  export type BOMItemSumAggregateInputType = {
    requiredQty?: true
  }

  export type BOMItemMinAggregateInputType = {
    id?: true
    name?: true
    requiredQty?: true
    picked?: true
    unit?: true
    moId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BOMItemMaxAggregateInputType = {
    id?: true
    name?: true
    requiredQty?: true
    picked?: true
    unit?: true
    moId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BOMItemCountAggregateInputType = {
    id?: true
    name?: true
    requiredQty?: true
    picked?: true
    unit?: true
    moId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BOMItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BOMItem to aggregate.
     */
    where?: BOMItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BOMItems to fetch.
     */
    orderBy?: BOMItemOrderByWithRelationInput | BOMItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BOMItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BOMItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BOMItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BOMItems
    **/
    _count?: true | BOMItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BOMItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BOMItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BOMItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BOMItemMaxAggregateInputType
  }

  export type GetBOMItemAggregateType<T extends BOMItemAggregateArgs> = {
        [P in keyof T & keyof AggregateBOMItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBOMItem[P]>
      : GetScalarType<T[P], AggregateBOMItem[P]>
  }




  export type BOMItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BOMItemWhereInput
    orderBy?: BOMItemOrderByWithAggregationInput | BOMItemOrderByWithAggregationInput[]
    by: BOMItemScalarFieldEnum[] | BOMItemScalarFieldEnum
    having?: BOMItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BOMItemCountAggregateInputType | true
    _avg?: BOMItemAvgAggregateInputType
    _sum?: BOMItemSumAggregateInputType
    _min?: BOMItemMinAggregateInputType
    _max?: BOMItemMaxAggregateInputType
  }

  export type BOMItemGroupByOutputType = {
    id: string
    name: string
    requiredQty: number
    picked: boolean
    unit: string
    moId: string
    createdAt: Date
    updatedAt: Date
    _count: BOMItemCountAggregateOutputType | null
    _avg: BOMItemAvgAggregateOutputType | null
    _sum: BOMItemSumAggregateOutputType | null
    _min: BOMItemMinAggregateOutputType | null
    _max: BOMItemMaxAggregateOutputType | null
  }

  type GetBOMItemGroupByPayload<T extends BOMItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BOMItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BOMItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BOMItemGroupByOutputType[P]>
            : GetScalarType<T[P], BOMItemGroupByOutputType[P]>
        }
      >
    >


  export type BOMItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    requiredQty?: boolean
    picked?: boolean
    unit?: boolean
    moId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mo?: boolean | ProductionOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bOMItem"]>

  export type BOMItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    requiredQty?: boolean
    picked?: boolean
    unit?: boolean
    moId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mo?: boolean | ProductionOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bOMItem"]>

  export type BOMItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    requiredQty?: boolean
    picked?: boolean
    unit?: boolean
    moId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mo?: boolean | ProductionOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bOMItem"]>

  export type BOMItemSelectScalar = {
    id?: boolean
    name?: boolean
    requiredQty?: boolean
    picked?: boolean
    unit?: boolean
    moId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BOMItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "requiredQty" | "picked" | "unit" | "moId" | "createdAt" | "updatedAt", ExtArgs["result"]["bOMItem"]>
  export type BOMItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mo?: boolean | ProductionOrderDefaultArgs<ExtArgs>
  }
  export type BOMItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mo?: boolean | ProductionOrderDefaultArgs<ExtArgs>
  }
  export type BOMItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mo?: boolean | ProductionOrderDefaultArgs<ExtArgs>
  }

  export type $BOMItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BOMItem"
    objects: {
      mo: Prisma.$ProductionOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      requiredQty: number
      picked: boolean
      unit: string
      moId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bOMItem"]>
    composites: {}
  }

  type BOMItemGetPayload<S extends boolean | null | undefined | BOMItemDefaultArgs> = $Result.GetResult<Prisma.$BOMItemPayload, S>

  type BOMItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BOMItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BOMItemCountAggregateInputType | true
    }

  export interface BOMItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BOMItem'], meta: { name: 'BOMItem' } }
    /**
     * Find zero or one BOMItem that matches the filter.
     * @param {BOMItemFindUniqueArgs} args - Arguments to find a BOMItem
     * @example
     * // Get one BOMItem
     * const bOMItem = await prisma.bOMItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BOMItemFindUniqueArgs>(args: SelectSubset<T, BOMItemFindUniqueArgs<ExtArgs>>): Prisma__BOMItemClient<$Result.GetResult<Prisma.$BOMItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BOMItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BOMItemFindUniqueOrThrowArgs} args - Arguments to find a BOMItem
     * @example
     * // Get one BOMItem
     * const bOMItem = await prisma.bOMItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BOMItemFindUniqueOrThrowArgs>(args: SelectSubset<T, BOMItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BOMItemClient<$Result.GetResult<Prisma.$BOMItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BOMItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BOMItemFindFirstArgs} args - Arguments to find a BOMItem
     * @example
     * // Get one BOMItem
     * const bOMItem = await prisma.bOMItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BOMItemFindFirstArgs>(args?: SelectSubset<T, BOMItemFindFirstArgs<ExtArgs>>): Prisma__BOMItemClient<$Result.GetResult<Prisma.$BOMItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BOMItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BOMItemFindFirstOrThrowArgs} args - Arguments to find a BOMItem
     * @example
     * // Get one BOMItem
     * const bOMItem = await prisma.bOMItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BOMItemFindFirstOrThrowArgs>(args?: SelectSubset<T, BOMItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__BOMItemClient<$Result.GetResult<Prisma.$BOMItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BOMItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BOMItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BOMItems
     * const bOMItems = await prisma.bOMItem.findMany()
     * 
     * // Get first 10 BOMItems
     * const bOMItems = await prisma.bOMItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bOMItemWithIdOnly = await prisma.bOMItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BOMItemFindManyArgs>(args?: SelectSubset<T, BOMItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BOMItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BOMItem.
     * @param {BOMItemCreateArgs} args - Arguments to create a BOMItem.
     * @example
     * // Create one BOMItem
     * const BOMItem = await prisma.bOMItem.create({
     *   data: {
     *     // ... data to create a BOMItem
     *   }
     * })
     * 
     */
    create<T extends BOMItemCreateArgs>(args: SelectSubset<T, BOMItemCreateArgs<ExtArgs>>): Prisma__BOMItemClient<$Result.GetResult<Prisma.$BOMItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BOMItems.
     * @param {BOMItemCreateManyArgs} args - Arguments to create many BOMItems.
     * @example
     * // Create many BOMItems
     * const bOMItem = await prisma.bOMItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BOMItemCreateManyArgs>(args?: SelectSubset<T, BOMItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BOMItems and returns the data saved in the database.
     * @param {BOMItemCreateManyAndReturnArgs} args - Arguments to create many BOMItems.
     * @example
     * // Create many BOMItems
     * const bOMItem = await prisma.bOMItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BOMItems and only return the `id`
     * const bOMItemWithIdOnly = await prisma.bOMItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BOMItemCreateManyAndReturnArgs>(args?: SelectSubset<T, BOMItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BOMItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BOMItem.
     * @param {BOMItemDeleteArgs} args - Arguments to delete one BOMItem.
     * @example
     * // Delete one BOMItem
     * const BOMItem = await prisma.bOMItem.delete({
     *   where: {
     *     // ... filter to delete one BOMItem
     *   }
     * })
     * 
     */
    delete<T extends BOMItemDeleteArgs>(args: SelectSubset<T, BOMItemDeleteArgs<ExtArgs>>): Prisma__BOMItemClient<$Result.GetResult<Prisma.$BOMItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BOMItem.
     * @param {BOMItemUpdateArgs} args - Arguments to update one BOMItem.
     * @example
     * // Update one BOMItem
     * const bOMItem = await prisma.bOMItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BOMItemUpdateArgs>(args: SelectSubset<T, BOMItemUpdateArgs<ExtArgs>>): Prisma__BOMItemClient<$Result.GetResult<Prisma.$BOMItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BOMItems.
     * @param {BOMItemDeleteManyArgs} args - Arguments to filter BOMItems to delete.
     * @example
     * // Delete a few BOMItems
     * const { count } = await prisma.bOMItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BOMItemDeleteManyArgs>(args?: SelectSubset<T, BOMItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BOMItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BOMItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BOMItems
     * const bOMItem = await prisma.bOMItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BOMItemUpdateManyArgs>(args: SelectSubset<T, BOMItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BOMItems and returns the data updated in the database.
     * @param {BOMItemUpdateManyAndReturnArgs} args - Arguments to update many BOMItems.
     * @example
     * // Update many BOMItems
     * const bOMItem = await prisma.bOMItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BOMItems and only return the `id`
     * const bOMItemWithIdOnly = await prisma.bOMItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends BOMItemUpdateManyAndReturnArgs>(args: SelectSubset<T, BOMItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BOMItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BOMItem.
     * @param {BOMItemUpsertArgs} args - Arguments to update or create a BOMItem.
     * @example
     * // Update or create a BOMItem
     * const bOMItem = await prisma.bOMItem.upsert({
     *   create: {
     *     // ... data to create a BOMItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BOMItem we want to update
     *   }
     * })
     */
    upsert<T extends BOMItemUpsertArgs>(args: SelectSubset<T, BOMItemUpsertArgs<ExtArgs>>): Prisma__BOMItemClient<$Result.GetResult<Prisma.$BOMItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BOMItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BOMItemCountArgs} args - Arguments to filter BOMItems to count.
     * @example
     * // Count the number of BOMItems
     * const count = await prisma.bOMItem.count({
     *   where: {
     *     // ... the filter for the BOMItems we want to count
     *   }
     * })
    **/
    count<T extends BOMItemCountArgs>(
      args?: Subset<T, BOMItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BOMItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BOMItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BOMItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BOMItemAggregateArgs>(args: Subset<T, BOMItemAggregateArgs>): Prisma.PrismaPromise<GetBOMItemAggregateType<T>>

    /**
     * Group by BOMItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BOMItemGroupByArgs} args - Group by arguments.
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
      T extends BOMItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BOMItemGroupByArgs['orderBy'] }
        : { orderBy?: BOMItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BOMItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBOMItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BOMItem model
   */
  readonly fields: BOMItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BOMItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BOMItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mo<T extends ProductionOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductionOrderDefaultArgs<ExtArgs>>): Prisma__ProductionOrderClient<$Result.GetResult<Prisma.$ProductionOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BOMItem model
   */
  interface BOMItemFieldRefs {
    readonly id: FieldRef<"BOMItem", 'String'>
    readonly name: FieldRef<"BOMItem", 'String'>
    readonly requiredQty: FieldRef<"BOMItem", 'Int'>
    readonly picked: FieldRef<"BOMItem", 'Boolean'>
    readonly unit: FieldRef<"BOMItem", 'String'>
    readonly moId: FieldRef<"BOMItem", 'String'>
    readonly createdAt: FieldRef<"BOMItem", 'DateTime'>
    readonly updatedAt: FieldRef<"BOMItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BOMItem findUnique
   */
  export type BOMItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BOMItem
     */
    select?: BOMItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BOMItem
     */
    omit?: BOMItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BOMItemInclude<ExtArgs> | null
    /**
     * Filter, which BOMItem to fetch.
     */
    where: BOMItemWhereUniqueInput
  }

  /**
   * BOMItem findUniqueOrThrow
   */
  export type BOMItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BOMItem
     */
    select?: BOMItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BOMItem
     */
    omit?: BOMItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BOMItemInclude<ExtArgs> | null
    /**
     * Filter, which BOMItem to fetch.
     */
    where: BOMItemWhereUniqueInput
  }

  /**
   * BOMItem findFirst
   */
  export type BOMItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BOMItem
     */
    select?: BOMItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BOMItem
     */
    omit?: BOMItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BOMItemInclude<ExtArgs> | null
    /**
     * Filter, which BOMItem to fetch.
     */
    where?: BOMItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BOMItems to fetch.
     */
    orderBy?: BOMItemOrderByWithRelationInput | BOMItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BOMItems.
     */
    cursor?: BOMItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BOMItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BOMItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BOMItems.
     */
    distinct?: BOMItemScalarFieldEnum | BOMItemScalarFieldEnum[]
  }

  /**
   * BOMItem findFirstOrThrow
   */
  export type BOMItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BOMItem
     */
    select?: BOMItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BOMItem
     */
    omit?: BOMItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BOMItemInclude<ExtArgs> | null
    /**
     * Filter, which BOMItem to fetch.
     */
    where?: BOMItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BOMItems to fetch.
     */
    orderBy?: BOMItemOrderByWithRelationInput | BOMItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BOMItems.
     */
    cursor?: BOMItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BOMItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BOMItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BOMItems.
     */
    distinct?: BOMItemScalarFieldEnum | BOMItemScalarFieldEnum[]
  }

  /**
   * BOMItem findMany
   */
  export type BOMItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BOMItem
     */
    select?: BOMItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BOMItem
     */
    omit?: BOMItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BOMItemInclude<ExtArgs> | null
    /**
     * Filter, which BOMItems to fetch.
     */
    where?: BOMItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BOMItems to fetch.
     */
    orderBy?: BOMItemOrderByWithRelationInput | BOMItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BOMItems.
     */
    cursor?: BOMItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BOMItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BOMItems.
     */
    skip?: number
    distinct?: BOMItemScalarFieldEnum | BOMItemScalarFieldEnum[]
  }

  /**
   * BOMItem create
   */
  export type BOMItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BOMItem
     */
    select?: BOMItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BOMItem
     */
    omit?: BOMItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BOMItemInclude<ExtArgs> | null
    /**
     * The data needed to create a BOMItem.
     */
    data: XOR<BOMItemCreateInput, BOMItemUncheckedCreateInput>
  }

  /**
   * BOMItem createMany
   */
  export type BOMItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BOMItems.
     */
    data: BOMItemCreateManyInput | BOMItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BOMItem createManyAndReturn
   */
  export type BOMItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BOMItem
     */
    select?: BOMItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BOMItem
     */
    omit?: BOMItemOmit<ExtArgs> | null
    /**
     * The data used to create many BOMItems.
     */
    data: BOMItemCreateManyInput | BOMItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BOMItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BOMItem update
   */
  export type BOMItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BOMItem
     */
    select?: BOMItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BOMItem
     */
    omit?: BOMItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BOMItemInclude<ExtArgs> | null
    /**
     * The data needed to update a BOMItem.
     */
    data: XOR<BOMItemUpdateInput, BOMItemUncheckedUpdateInput>
    /**
     * Choose, which BOMItem to update.
     */
    where: BOMItemWhereUniqueInput
  }

  /**
   * BOMItem updateMany
   */
  export type BOMItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BOMItems.
     */
    data: XOR<BOMItemUpdateManyMutationInput, BOMItemUncheckedUpdateManyInput>
    /**
     * Filter which BOMItems to update
     */
    where?: BOMItemWhereInput
    /**
     * Limit how many BOMItems to update.
     */
    limit?: number
  }

  /**
   * BOMItem updateManyAndReturn
   */
  export type BOMItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BOMItem
     */
    select?: BOMItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BOMItem
     */
    omit?: BOMItemOmit<ExtArgs> | null
    /**
     * The data used to update BOMItems.
     */
    data: XOR<BOMItemUpdateManyMutationInput, BOMItemUncheckedUpdateManyInput>
    /**
     * Filter which BOMItems to update
     */
    where?: BOMItemWhereInput
    /**
     * Limit how many BOMItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BOMItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BOMItem upsert
   */
  export type BOMItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BOMItem
     */
    select?: BOMItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BOMItem
     */
    omit?: BOMItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BOMItemInclude<ExtArgs> | null
    /**
     * The filter to search for the BOMItem to update in case it exists.
     */
    where: BOMItemWhereUniqueInput
    /**
     * In case the BOMItem found by the `where` argument doesn't exist, create a new BOMItem with this data.
     */
    create: XOR<BOMItemCreateInput, BOMItemUncheckedCreateInput>
    /**
     * In case the BOMItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BOMItemUpdateInput, BOMItemUncheckedUpdateInput>
  }

  /**
   * BOMItem delete
   */
  export type BOMItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BOMItem
     */
    select?: BOMItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BOMItem
     */
    omit?: BOMItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BOMItemInclude<ExtArgs> | null
    /**
     * Filter which BOMItem to delete.
     */
    where: BOMItemWhereUniqueInput
  }

  /**
   * BOMItem deleteMany
   */
  export type BOMItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BOMItems to delete
     */
    where?: BOMItemWhereInput
    /**
     * Limit how many BOMItems to delete.
     */
    limit?: number
  }

  /**
   * BOMItem without action
   */
  export type BOMItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BOMItem
     */
    select?: BOMItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BOMItem
     */
    omit?: BOMItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BOMItemInclude<ExtArgs> | null
  }


  /**
   * Model InboundInvoice
   */

  export type AggregateInboundInvoice = {
    _count: InboundInvoiceCountAggregateOutputType | null
    _min: InboundInvoiceMinAggregateOutputType | null
    _max: InboundInvoiceMaxAggregateOutputType | null
  }

  export type InboundInvoiceMinAggregateOutputType = {
    id: string | null
    vendor: string | null
    po: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InboundInvoiceMaxAggregateOutputType = {
    id: string | null
    vendor: string | null
    po: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InboundInvoiceCountAggregateOutputType = {
    id: number
    vendor: number
    po: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InboundInvoiceMinAggregateInputType = {
    id?: true
    vendor?: true
    po?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InboundInvoiceMaxAggregateInputType = {
    id?: true
    vendor?: true
    po?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InboundInvoiceCountAggregateInputType = {
    id?: true
    vendor?: true
    po?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InboundInvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InboundInvoice to aggregate.
     */
    where?: InboundInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InboundInvoices to fetch.
     */
    orderBy?: InboundInvoiceOrderByWithRelationInput | InboundInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InboundInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InboundInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InboundInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InboundInvoices
    **/
    _count?: true | InboundInvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InboundInvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InboundInvoiceMaxAggregateInputType
  }

  export type GetInboundInvoiceAggregateType<T extends InboundInvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInboundInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInboundInvoice[P]>
      : GetScalarType<T[P], AggregateInboundInvoice[P]>
  }




  export type InboundInvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InboundInvoiceWhereInput
    orderBy?: InboundInvoiceOrderByWithAggregationInput | InboundInvoiceOrderByWithAggregationInput[]
    by: InboundInvoiceScalarFieldEnum[] | InboundInvoiceScalarFieldEnum
    having?: InboundInvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InboundInvoiceCountAggregateInputType | true
    _min?: InboundInvoiceMinAggregateInputType
    _max?: InboundInvoiceMaxAggregateInputType
  }

  export type InboundInvoiceGroupByOutputType = {
    id: string
    vendor: string
    po: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: InboundInvoiceCountAggregateOutputType | null
    _min: InboundInvoiceMinAggregateOutputType | null
    _max: InboundInvoiceMaxAggregateOutputType | null
  }

  type GetInboundInvoiceGroupByPayload<T extends InboundInvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InboundInvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InboundInvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InboundInvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InboundInvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InboundInvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendor?: boolean
    po?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | InboundInvoice$itemsArgs<ExtArgs>
    _count?: boolean | InboundInvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inboundInvoice"]>

  export type InboundInvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendor?: boolean
    po?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["inboundInvoice"]>

  export type InboundInvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendor?: boolean
    po?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["inboundInvoice"]>

  export type InboundInvoiceSelectScalar = {
    id?: boolean
    vendor?: boolean
    po?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InboundInvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vendor" | "po" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["inboundInvoice"]>
  export type InboundInvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | InboundInvoice$itemsArgs<ExtArgs>
    _count?: boolean | InboundInvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InboundInvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InboundInvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InboundInvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InboundInvoice"
    objects: {
      items: Prisma.$InboundItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vendor: string
      po: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["inboundInvoice"]>
    composites: {}
  }

  type InboundInvoiceGetPayload<S extends boolean | null | undefined | InboundInvoiceDefaultArgs> = $Result.GetResult<Prisma.$InboundInvoicePayload, S>

  type InboundInvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InboundInvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InboundInvoiceCountAggregateInputType | true
    }

  export interface InboundInvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InboundInvoice'], meta: { name: 'InboundInvoice' } }
    /**
     * Find zero or one InboundInvoice that matches the filter.
     * @param {InboundInvoiceFindUniqueArgs} args - Arguments to find a InboundInvoice
     * @example
     * // Get one InboundInvoice
     * const inboundInvoice = await prisma.inboundInvoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InboundInvoiceFindUniqueArgs>(args: SelectSubset<T, InboundInvoiceFindUniqueArgs<ExtArgs>>): Prisma__InboundInvoiceClient<$Result.GetResult<Prisma.$InboundInvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InboundInvoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InboundInvoiceFindUniqueOrThrowArgs} args - Arguments to find a InboundInvoice
     * @example
     * // Get one InboundInvoice
     * const inboundInvoice = await prisma.inboundInvoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InboundInvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InboundInvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InboundInvoiceClient<$Result.GetResult<Prisma.$InboundInvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InboundInvoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundInvoiceFindFirstArgs} args - Arguments to find a InboundInvoice
     * @example
     * // Get one InboundInvoice
     * const inboundInvoice = await prisma.inboundInvoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InboundInvoiceFindFirstArgs>(args?: SelectSubset<T, InboundInvoiceFindFirstArgs<ExtArgs>>): Prisma__InboundInvoiceClient<$Result.GetResult<Prisma.$InboundInvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InboundInvoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundInvoiceFindFirstOrThrowArgs} args - Arguments to find a InboundInvoice
     * @example
     * // Get one InboundInvoice
     * const inboundInvoice = await prisma.inboundInvoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InboundInvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InboundInvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InboundInvoiceClient<$Result.GetResult<Prisma.$InboundInvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InboundInvoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundInvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InboundInvoices
     * const inboundInvoices = await prisma.inboundInvoice.findMany()
     * 
     * // Get first 10 InboundInvoices
     * const inboundInvoices = await prisma.inboundInvoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inboundInvoiceWithIdOnly = await prisma.inboundInvoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InboundInvoiceFindManyArgs>(args?: SelectSubset<T, InboundInvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InboundInvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InboundInvoice.
     * @param {InboundInvoiceCreateArgs} args - Arguments to create a InboundInvoice.
     * @example
     * // Create one InboundInvoice
     * const InboundInvoice = await prisma.inboundInvoice.create({
     *   data: {
     *     // ... data to create a InboundInvoice
     *   }
     * })
     * 
     */
    create<T extends InboundInvoiceCreateArgs>(args: SelectSubset<T, InboundInvoiceCreateArgs<ExtArgs>>): Prisma__InboundInvoiceClient<$Result.GetResult<Prisma.$InboundInvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InboundInvoices.
     * @param {InboundInvoiceCreateManyArgs} args - Arguments to create many InboundInvoices.
     * @example
     * // Create many InboundInvoices
     * const inboundInvoice = await prisma.inboundInvoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InboundInvoiceCreateManyArgs>(args?: SelectSubset<T, InboundInvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InboundInvoices and returns the data saved in the database.
     * @param {InboundInvoiceCreateManyAndReturnArgs} args - Arguments to create many InboundInvoices.
     * @example
     * // Create many InboundInvoices
     * const inboundInvoice = await prisma.inboundInvoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InboundInvoices and only return the `id`
     * const inboundInvoiceWithIdOnly = await prisma.inboundInvoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InboundInvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InboundInvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InboundInvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InboundInvoice.
     * @param {InboundInvoiceDeleteArgs} args - Arguments to delete one InboundInvoice.
     * @example
     * // Delete one InboundInvoice
     * const InboundInvoice = await prisma.inboundInvoice.delete({
     *   where: {
     *     // ... filter to delete one InboundInvoice
     *   }
     * })
     * 
     */
    delete<T extends InboundInvoiceDeleteArgs>(args: SelectSubset<T, InboundInvoiceDeleteArgs<ExtArgs>>): Prisma__InboundInvoiceClient<$Result.GetResult<Prisma.$InboundInvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InboundInvoice.
     * @param {InboundInvoiceUpdateArgs} args - Arguments to update one InboundInvoice.
     * @example
     * // Update one InboundInvoice
     * const inboundInvoice = await prisma.inboundInvoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InboundInvoiceUpdateArgs>(args: SelectSubset<T, InboundInvoiceUpdateArgs<ExtArgs>>): Prisma__InboundInvoiceClient<$Result.GetResult<Prisma.$InboundInvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InboundInvoices.
     * @param {InboundInvoiceDeleteManyArgs} args - Arguments to filter InboundInvoices to delete.
     * @example
     * // Delete a few InboundInvoices
     * const { count } = await prisma.inboundInvoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InboundInvoiceDeleteManyArgs>(args?: SelectSubset<T, InboundInvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InboundInvoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundInvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InboundInvoices
     * const inboundInvoice = await prisma.inboundInvoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InboundInvoiceUpdateManyArgs>(args: SelectSubset<T, InboundInvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InboundInvoices and returns the data updated in the database.
     * @param {InboundInvoiceUpdateManyAndReturnArgs} args - Arguments to update many InboundInvoices.
     * @example
     * // Update many InboundInvoices
     * const inboundInvoice = await prisma.inboundInvoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InboundInvoices and only return the `id`
     * const inboundInvoiceWithIdOnly = await prisma.inboundInvoice.updateManyAndReturn({
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
    updateManyAndReturn<T extends InboundInvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, InboundInvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InboundInvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InboundInvoice.
     * @param {InboundInvoiceUpsertArgs} args - Arguments to update or create a InboundInvoice.
     * @example
     * // Update or create a InboundInvoice
     * const inboundInvoice = await prisma.inboundInvoice.upsert({
     *   create: {
     *     // ... data to create a InboundInvoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InboundInvoice we want to update
     *   }
     * })
     */
    upsert<T extends InboundInvoiceUpsertArgs>(args: SelectSubset<T, InboundInvoiceUpsertArgs<ExtArgs>>): Prisma__InboundInvoiceClient<$Result.GetResult<Prisma.$InboundInvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InboundInvoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundInvoiceCountArgs} args - Arguments to filter InboundInvoices to count.
     * @example
     * // Count the number of InboundInvoices
     * const count = await prisma.inboundInvoice.count({
     *   where: {
     *     // ... the filter for the InboundInvoices we want to count
     *   }
     * })
    **/
    count<T extends InboundInvoiceCountArgs>(
      args?: Subset<T, InboundInvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InboundInvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InboundInvoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundInvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InboundInvoiceAggregateArgs>(args: Subset<T, InboundInvoiceAggregateArgs>): Prisma.PrismaPromise<GetInboundInvoiceAggregateType<T>>

    /**
     * Group by InboundInvoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundInvoiceGroupByArgs} args - Group by arguments.
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
      T extends InboundInvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InboundInvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InboundInvoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InboundInvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInboundInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InboundInvoice model
   */
  readonly fields: InboundInvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InboundInvoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InboundInvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends InboundInvoice$itemsArgs<ExtArgs> = {}>(args?: Subset<T, InboundInvoice$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InboundItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the InboundInvoice model
   */
  interface InboundInvoiceFieldRefs {
    readonly id: FieldRef<"InboundInvoice", 'String'>
    readonly vendor: FieldRef<"InboundInvoice", 'String'>
    readonly po: FieldRef<"InboundInvoice", 'String'>
    readonly status: FieldRef<"InboundInvoice", 'String'>
    readonly createdAt: FieldRef<"InboundInvoice", 'DateTime'>
    readonly updatedAt: FieldRef<"InboundInvoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InboundInvoice findUnique
   */
  export type InboundInvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundInvoice
     */
    select?: InboundInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundInvoice
     */
    omit?: InboundInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which InboundInvoice to fetch.
     */
    where: InboundInvoiceWhereUniqueInput
  }

  /**
   * InboundInvoice findUniqueOrThrow
   */
  export type InboundInvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundInvoice
     */
    select?: InboundInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundInvoice
     */
    omit?: InboundInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which InboundInvoice to fetch.
     */
    where: InboundInvoiceWhereUniqueInput
  }

  /**
   * InboundInvoice findFirst
   */
  export type InboundInvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundInvoice
     */
    select?: InboundInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundInvoice
     */
    omit?: InboundInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which InboundInvoice to fetch.
     */
    where?: InboundInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InboundInvoices to fetch.
     */
    orderBy?: InboundInvoiceOrderByWithRelationInput | InboundInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InboundInvoices.
     */
    cursor?: InboundInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InboundInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InboundInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InboundInvoices.
     */
    distinct?: InboundInvoiceScalarFieldEnum | InboundInvoiceScalarFieldEnum[]
  }

  /**
   * InboundInvoice findFirstOrThrow
   */
  export type InboundInvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundInvoice
     */
    select?: InboundInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundInvoice
     */
    omit?: InboundInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which InboundInvoice to fetch.
     */
    where?: InboundInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InboundInvoices to fetch.
     */
    orderBy?: InboundInvoiceOrderByWithRelationInput | InboundInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InboundInvoices.
     */
    cursor?: InboundInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InboundInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InboundInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InboundInvoices.
     */
    distinct?: InboundInvoiceScalarFieldEnum | InboundInvoiceScalarFieldEnum[]
  }

  /**
   * InboundInvoice findMany
   */
  export type InboundInvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundInvoice
     */
    select?: InboundInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundInvoice
     */
    omit?: InboundInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which InboundInvoices to fetch.
     */
    where?: InboundInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InboundInvoices to fetch.
     */
    orderBy?: InboundInvoiceOrderByWithRelationInput | InboundInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InboundInvoices.
     */
    cursor?: InboundInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InboundInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InboundInvoices.
     */
    skip?: number
    distinct?: InboundInvoiceScalarFieldEnum | InboundInvoiceScalarFieldEnum[]
  }

  /**
   * InboundInvoice create
   */
  export type InboundInvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundInvoice
     */
    select?: InboundInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundInvoice
     */
    omit?: InboundInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundInvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a InboundInvoice.
     */
    data: XOR<InboundInvoiceCreateInput, InboundInvoiceUncheckedCreateInput>
  }

  /**
   * InboundInvoice createMany
   */
  export type InboundInvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InboundInvoices.
     */
    data: InboundInvoiceCreateManyInput | InboundInvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InboundInvoice createManyAndReturn
   */
  export type InboundInvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundInvoice
     */
    select?: InboundInvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InboundInvoice
     */
    omit?: InboundInvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many InboundInvoices.
     */
    data: InboundInvoiceCreateManyInput | InboundInvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InboundInvoice update
   */
  export type InboundInvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundInvoice
     */
    select?: InboundInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundInvoice
     */
    omit?: InboundInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundInvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a InboundInvoice.
     */
    data: XOR<InboundInvoiceUpdateInput, InboundInvoiceUncheckedUpdateInput>
    /**
     * Choose, which InboundInvoice to update.
     */
    where: InboundInvoiceWhereUniqueInput
  }

  /**
   * InboundInvoice updateMany
   */
  export type InboundInvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InboundInvoices.
     */
    data: XOR<InboundInvoiceUpdateManyMutationInput, InboundInvoiceUncheckedUpdateManyInput>
    /**
     * Filter which InboundInvoices to update
     */
    where?: InboundInvoiceWhereInput
    /**
     * Limit how many InboundInvoices to update.
     */
    limit?: number
  }

  /**
   * InboundInvoice updateManyAndReturn
   */
  export type InboundInvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundInvoice
     */
    select?: InboundInvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InboundInvoice
     */
    omit?: InboundInvoiceOmit<ExtArgs> | null
    /**
     * The data used to update InboundInvoices.
     */
    data: XOR<InboundInvoiceUpdateManyMutationInput, InboundInvoiceUncheckedUpdateManyInput>
    /**
     * Filter which InboundInvoices to update
     */
    where?: InboundInvoiceWhereInput
    /**
     * Limit how many InboundInvoices to update.
     */
    limit?: number
  }

  /**
   * InboundInvoice upsert
   */
  export type InboundInvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundInvoice
     */
    select?: InboundInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundInvoice
     */
    omit?: InboundInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundInvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the InboundInvoice to update in case it exists.
     */
    where: InboundInvoiceWhereUniqueInput
    /**
     * In case the InboundInvoice found by the `where` argument doesn't exist, create a new InboundInvoice with this data.
     */
    create: XOR<InboundInvoiceCreateInput, InboundInvoiceUncheckedCreateInput>
    /**
     * In case the InboundInvoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InboundInvoiceUpdateInput, InboundInvoiceUncheckedUpdateInput>
  }

  /**
   * InboundInvoice delete
   */
  export type InboundInvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundInvoice
     */
    select?: InboundInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundInvoice
     */
    omit?: InboundInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundInvoiceInclude<ExtArgs> | null
    /**
     * Filter which InboundInvoice to delete.
     */
    where: InboundInvoiceWhereUniqueInput
  }

  /**
   * InboundInvoice deleteMany
   */
  export type InboundInvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InboundInvoices to delete
     */
    where?: InboundInvoiceWhereInput
    /**
     * Limit how many InboundInvoices to delete.
     */
    limit?: number
  }

  /**
   * InboundInvoice.items
   */
  export type InboundInvoice$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundItem
     */
    select?: InboundItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundItem
     */
    omit?: InboundItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundItemInclude<ExtArgs> | null
    where?: InboundItemWhereInput
    orderBy?: InboundItemOrderByWithRelationInput | InboundItemOrderByWithRelationInput[]
    cursor?: InboundItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InboundItemScalarFieldEnum | InboundItemScalarFieldEnum[]
  }

  /**
   * InboundInvoice without action
   */
  export type InboundInvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundInvoice
     */
    select?: InboundInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundInvoice
     */
    omit?: InboundInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundInvoiceInclude<ExtArgs> | null
  }


  /**
   * Model InboundItem
   */

  export type AggregateInboundItem = {
    _count: InboundItemCountAggregateOutputType | null
    _avg: InboundItemAvgAggregateOutputType | null
    _sum: InboundItemSumAggregateOutputType | null
    _min: InboundItemMinAggregateOutputType | null
    _max: InboundItemMaxAggregateOutputType | null
  }

  export type InboundItemAvgAggregateOutputType = {
    qty: number | null
    receivedQty: number | null
  }

  export type InboundItemSumAggregateOutputType = {
    qty: number | null
    receivedQty: number | null
  }

  export type InboundItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    sku: string | null
    qty: number | null
    unit: string | null
    received: boolean | null
    receivedQty: number | null
    invoiceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InboundItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    sku: string | null
    qty: number | null
    unit: string | null
    received: boolean | null
    receivedQty: number | null
    invoiceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InboundItemCountAggregateOutputType = {
    id: number
    name: number
    sku: number
    qty: number
    unit: number
    received: number
    receivedQty: number
    invoiceId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InboundItemAvgAggregateInputType = {
    qty?: true
    receivedQty?: true
  }

  export type InboundItemSumAggregateInputType = {
    qty?: true
    receivedQty?: true
  }

  export type InboundItemMinAggregateInputType = {
    id?: true
    name?: true
    sku?: true
    qty?: true
    unit?: true
    received?: true
    receivedQty?: true
    invoiceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InboundItemMaxAggregateInputType = {
    id?: true
    name?: true
    sku?: true
    qty?: true
    unit?: true
    received?: true
    receivedQty?: true
    invoiceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InboundItemCountAggregateInputType = {
    id?: true
    name?: true
    sku?: true
    qty?: true
    unit?: true
    received?: true
    receivedQty?: true
    invoiceId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InboundItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InboundItem to aggregate.
     */
    where?: InboundItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InboundItems to fetch.
     */
    orderBy?: InboundItemOrderByWithRelationInput | InboundItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InboundItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InboundItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InboundItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InboundItems
    **/
    _count?: true | InboundItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InboundItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InboundItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InboundItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InboundItemMaxAggregateInputType
  }

  export type GetInboundItemAggregateType<T extends InboundItemAggregateArgs> = {
        [P in keyof T & keyof AggregateInboundItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInboundItem[P]>
      : GetScalarType<T[P], AggregateInboundItem[P]>
  }




  export type InboundItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InboundItemWhereInput
    orderBy?: InboundItemOrderByWithAggregationInput | InboundItemOrderByWithAggregationInput[]
    by: InboundItemScalarFieldEnum[] | InboundItemScalarFieldEnum
    having?: InboundItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InboundItemCountAggregateInputType | true
    _avg?: InboundItemAvgAggregateInputType
    _sum?: InboundItemSumAggregateInputType
    _min?: InboundItemMinAggregateInputType
    _max?: InboundItemMaxAggregateInputType
  }

  export type InboundItemGroupByOutputType = {
    id: string
    name: string
    sku: string
    qty: number
    unit: string
    received: boolean
    receivedQty: number
    invoiceId: string
    createdAt: Date
    updatedAt: Date
    _count: InboundItemCountAggregateOutputType | null
    _avg: InboundItemAvgAggregateOutputType | null
    _sum: InboundItemSumAggregateOutputType | null
    _min: InboundItemMinAggregateOutputType | null
    _max: InboundItemMaxAggregateOutputType | null
  }

  type GetInboundItemGroupByPayload<T extends InboundItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InboundItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InboundItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InboundItemGroupByOutputType[P]>
            : GetScalarType<T[P], InboundItemGroupByOutputType[P]>
        }
      >
    >


  export type InboundItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sku?: boolean
    qty?: boolean
    unit?: boolean
    received?: boolean
    receivedQty?: boolean
    invoiceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invoice?: boolean | InboundInvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inboundItem"]>

  export type InboundItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sku?: boolean
    qty?: boolean
    unit?: boolean
    received?: boolean
    receivedQty?: boolean
    invoiceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invoice?: boolean | InboundInvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inboundItem"]>

  export type InboundItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sku?: boolean
    qty?: boolean
    unit?: boolean
    received?: boolean
    receivedQty?: boolean
    invoiceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    invoice?: boolean | InboundInvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inboundItem"]>

  export type InboundItemSelectScalar = {
    id?: boolean
    name?: boolean
    sku?: boolean
    qty?: boolean
    unit?: boolean
    received?: boolean
    receivedQty?: boolean
    invoiceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InboundItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "sku" | "qty" | "unit" | "received" | "receivedQty" | "invoiceId" | "createdAt" | "updatedAt", ExtArgs["result"]["inboundItem"]>
  export type InboundItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InboundInvoiceDefaultArgs<ExtArgs>
  }
  export type InboundItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InboundInvoiceDefaultArgs<ExtArgs>
  }
  export type InboundItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InboundInvoiceDefaultArgs<ExtArgs>
  }

  export type $InboundItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InboundItem"
    objects: {
      invoice: Prisma.$InboundInvoicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      sku: string
      qty: number
      unit: string
      received: boolean
      receivedQty: number
      invoiceId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["inboundItem"]>
    composites: {}
  }

  type InboundItemGetPayload<S extends boolean | null | undefined | InboundItemDefaultArgs> = $Result.GetResult<Prisma.$InboundItemPayload, S>

  type InboundItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InboundItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InboundItemCountAggregateInputType | true
    }

  export interface InboundItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InboundItem'], meta: { name: 'InboundItem' } }
    /**
     * Find zero or one InboundItem that matches the filter.
     * @param {InboundItemFindUniqueArgs} args - Arguments to find a InboundItem
     * @example
     * // Get one InboundItem
     * const inboundItem = await prisma.inboundItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InboundItemFindUniqueArgs>(args: SelectSubset<T, InboundItemFindUniqueArgs<ExtArgs>>): Prisma__InboundItemClient<$Result.GetResult<Prisma.$InboundItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InboundItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InboundItemFindUniqueOrThrowArgs} args - Arguments to find a InboundItem
     * @example
     * // Get one InboundItem
     * const inboundItem = await prisma.inboundItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InboundItemFindUniqueOrThrowArgs>(args: SelectSubset<T, InboundItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InboundItemClient<$Result.GetResult<Prisma.$InboundItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InboundItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundItemFindFirstArgs} args - Arguments to find a InboundItem
     * @example
     * // Get one InboundItem
     * const inboundItem = await prisma.inboundItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InboundItemFindFirstArgs>(args?: SelectSubset<T, InboundItemFindFirstArgs<ExtArgs>>): Prisma__InboundItemClient<$Result.GetResult<Prisma.$InboundItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InboundItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundItemFindFirstOrThrowArgs} args - Arguments to find a InboundItem
     * @example
     * // Get one InboundItem
     * const inboundItem = await prisma.inboundItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InboundItemFindFirstOrThrowArgs>(args?: SelectSubset<T, InboundItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__InboundItemClient<$Result.GetResult<Prisma.$InboundItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InboundItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InboundItems
     * const inboundItems = await prisma.inboundItem.findMany()
     * 
     * // Get first 10 InboundItems
     * const inboundItems = await prisma.inboundItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inboundItemWithIdOnly = await prisma.inboundItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InboundItemFindManyArgs>(args?: SelectSubset<T, InboundItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InboundItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InboundItem.
     * @param {InboundItemCreateArgs} args - Arguments to create a InboundItem.
     * @example
     * // Create one InboundItem
     * const InboundItem = await prisma.inboundItem.create({
     *   data: {
     *     // ... data to create a InboundItem
     *   }
     * })
     * 
     */
    create<T extends InboundItemCreateArgs>(args: SelectSubset<T, InboundItemCreateArgs<ExtArgs>>): Prisma__InboundItemClient<$Result.GetResult<Prisma.$InboundItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InboundItems.
     * @param {InboundItemCreateManyArgs} args - Arguments to create many InboundItems.
     * @example
     * // Create many InboundItems
     * const inboundItem = await prisma.inboundItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InboundItemCreateManyArgs>(args?: SelectSubset<T, InboundItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InboundItems and returns the data saved in the database.
     * @param {InboundItemCreateManyAndReturnArgs} args - Arguments to create many InboundItems.
     * @example
     * // Create many InboundItems
     * const inboundItem = await prisma.inboundItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InboundItems and only return the `id`
     * const inboundItemWithIdOnly = await prisma.inboundItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InboundItemCreateManyAndReturnArgs>(args?: SelectSubset<T, InboundItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InboundItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InboundItem.
     * @param {InboundItemDeleteArgs} args - Arguments to delete one InboundItem.
     * @example
     * // Delete one InboundItem
     * const InboundItem = await prisma.inboundItem.delete({
     *   where: {
     *     // ... filter to delete one InboundItem
     *   }
     * })
     * 
     */
    delete<T extends InboundItemDeleteArgs>(args: SelectSubset<T, InboundItemDeleteArgs<ExtArgs>>): Prisma__InboundItemClient<$Result.GetResult<Prisma.$InboundItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InboundItem.
     * @param {InboundItemUpdateArgs} args - Arguments to update one InboundItem.
     * @example
     * // Update one InboundItem
     * const inboundItem = await prisma.inboundItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InboundItemUpdateArgs>(args: SelectSubset<T, InboundItemUpdateArgs<ExtArgs>>): Prisma__InboundItemClient<$Result.GetResult<Prisma.$InboundItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InboundItems.
     * @param {InboundItemDeleteManyArgs} args - Arguments to filter InboundItems to delete.
     * @example
     * // Delete a few InboundItems
     * const { count } = await prisma.inboundItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InboundItemDeleteManyArgs>(args?: SelectSubset<T, InboundItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InboundItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InboundItems
     * const inboundItem = await prisma.inboundItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InboundItemUpdateManyArgs>(args: SelectSubset<T, InboundItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InboundItems and returns the data updated in the database.
     * @param {InboundItemUpdateManyAndReturnArgs} args - Arguments to update many InboundItems.
     * @example
     * // Update many InboundItems
     * const inboundItem = await prisma.inboundItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InboundItems and only return the `id`
     * const inboundItemWithIdOnly = await prisma.inboundItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends InboundItemUpdateManyAndReturnArgs>(args: SelectSubset<T, InboundItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InboundItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InboundItem.
     * @param {InboundItemUpsertArgs} args - Arguments to update or create a InboundItem.
     * @example
     * // Update or create a InboundItem
     * const inboundItem = await prisma.inboundItem.upsert({
     *   create: {
     *     // ... data to create a InboundItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InboundItem we want to update
     *   }
     * })
     */
    upsert<T extends InboundItemUpsertArgs>(args: SelectSubset<T, InboundItemUpsertArgs<ExtArgs>>): Prisma__InboundItemClient<$Result.GetResult<Prisma.$InboundItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InboundItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundItemCountArgs} args - Arguments to filter InboundItems to count.
     * @example
     * // Count the number of InboundItems
     * const count = await prisma.inboundItem.count({
     *   where: {
     *     // ... the filter for the InboundItems we want to count
     *   }
     * })
    **/
    count<T extends InboundItemCountArgs>(
      args?: Subset<T, InboundItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InboundItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InboundItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InboundItemAggregateArgs>(args: Subset<T, InboundItemAggregateArgs>): Prisma.PrismaPromise<GetInboundItemAggregateType<T>>

    /**
     * Group by InboundItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundItemGroupByArgs} args - Group by arguments.
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
      T extends InboundItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InboundItemGroupByArgs['orderBy'] }
        : { orderBy?: InboundItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InboundItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInboundItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InboundItem model
   */
  readonly fields: InboundItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InboundItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InboundItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoice<T extends InboundInvoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InboundInvoiceDefaultArgs<ExtArgs>>): Prisma__InboundInvoiceClient<$Result.GetResult<Prisma.$InboundInvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InboundItem model
   */
  interface InboundItemFieldRefs {
    readonly id: FieldRef<"InboundItem", 'String'>
    readonly name: FieldRef<"InboundItem", 'String'>
    readonly sku: FieldRef<"InboundItem", 'String'>
    readonly qty: FieldRef<"InboundItem", 'Int'>
    readonly unit: FieldRef<"InboundItem", 'String'>
    readonly received: FieldRef<"InboundItem", 'Boolean'>
    readonly receivedQty: FieldRef<"InboundItem", 'Int'>
    readonly invoiceId: FieldRef<"InboundItem", 'String'>
    readonly createdAt: FieldRef<"InboundItem", 'DateTime'>
    readonly updatedAt: FieldRef<"InboundItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InboundItem findUnique
   */
  export type InboundItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundItem
     */
    select?: InboundItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundItem
     */
    omit?: InboundItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundItemInclude<ExtArgs> | null
    /**
     * Filter, which InboundItem to fetch.
     */
    where: InboundItemWhereUniqueInput
  }

  /**
   * InboundItem findUniqueOrThrow
   */
  export type InboundItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundItem
     */
    select?: InboundItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundItem
     */
    omit?: InboundItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundItemInclude<ExtArgs> | null
    /**
     * Filter, which InboundItem to fetch.
     */
    where: InboundItemWhereUniqueInput
  }

  /**
   * InboundItem findFirst
   */
  export type InboundItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundItem
     */
    select?: InboundItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundItem
     */
    omit?: InboundItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundItemInclude<ExtArgs> | null
    /**
     * Filter, which InboundItem to fetch.
     */
    where?: InboundItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InboundItems to fetch.
     */
    orderBy?: InboundItemOrderByWithRelationInput | InboundItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InboundItems.
     */
    cursor?: InboundItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InboundItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InboundItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InboundItems.
     */
    distinct?: InboundItemScalarFieldEnum | InboundItemScalarFieldEnum[]
  }

  /**
   * InboundItem findFirstOrThrow
   */
  export type InboundItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundItem
     */
    select?: InboundItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundItem
     */
    omit?: InboundItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundItemInclude<ExtArgs> | null
    /**
     * Filter, which InboundItem to fetch.
     */
    where?: InboundItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InboundItems to fetch.
     */
    orderBy?: InboundItemOrderByWithRelationInput | InboundItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InboundItems.
     */
    cursor?: InboundItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InboundItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InboundItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InboundItems.
     */
    distinct?: InboundItemScalarFieldEnum | InboundItemScalarFieldEnum[]
  }

  /**
   * InboundItem findMany
   */
  export type InboundItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundItem
     */
    select?: InboundItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundItem
     */
    omit?: InboundItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundItemInclude<ExtArgs> | null
    /**
     * Filter, which InboundItems to fetch.
     */
    where?: InboundItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InboundItems to fetch.
     */
    orderBy?: InboundItemOrderByWithRelationInput | InboundItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InboundItems.
     */
    cursor?: InboundItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InboundItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InboundItems.
     */
    skip?: number
    distinct?: InboundItemScalarFieldEnum | InboundItemScalarFieldEnum[]
  }

  /**
   * InboundItem create
   */
  export type InboundItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundItem
     */
    select?: InboundItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundItem
     */
    omit?: InboundItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundItemInclude<ExtArgs> | null
    /**
     * The data needed to create a InboundItem.
     */
    data: XOR<InboundItemCreateInput, InboundItemUncheckedCreateInput>
  }

  /**
   * InboundItem createMany
   */
  export type InboundItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InboundItems.
     */
    data: InboundItemCreateManyInput | InboundItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InboundItem createManyAndReturn
   */
  export type InboundItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundItem
     */
    select?: InboundItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InboundItem
     */
    omit?: InboundItemOmit<ExtArgs> | null
    /**
     * The data used to create many InboundItems.
     */
    data: InboundItemCreateManyInput | InboundItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InboundItem update
   */
  export type InboundItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundItem
     */
    select?: InboundItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundItem
     */
    omit?: InboundItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundItemInclude<ExtArgs> | null
    /**
     * The data needed to update a InboundItem.
     */
    data: XOR<InboundItemUpdateInput, InboundItemUncheckedUpdateInput>
    /**
     * Choose, which InboundItem to update.
     */
    where: InboundItemWhereUniqueInput
  }

  /**
   * InboundItem updateMany
   */
  export type InboundItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InboundItems.
     */
    data: XOR<InboundItemUpdateManyMutationInput, InboundItemUncheckedUpdateManyInput>
    /**
     * Filter which InboundItems to update
     */
    where?: InboundItemWhereInput
    /**
     * Limit how many InboundItems to update.
     */
    limit?: number
  }

  /**
   * InboundItem updateManyAndReturn
   */
  export type InboundItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundItem
     */
    select?: InboundItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InboundItem
     */
    omit?: InboundItemOmit<ExtArgs> | null
    /**
     * The data used to update InboundItems.
     */
    data: XOR<InboundItemUpdateManyMutationInput, InboundItemUncheckedUpdateManyInput>
    /**
     * Filter which InboundItems to update
     */
    where?: InboundItemWhereInput
    /**
     * Limit how many InboundItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InboundItem upsert
   */
  export type InboundItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundItem
     */
    select?: InboundItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundItem
     */
    omit?: InboundItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundItemInclude<ExtArgs> | null
    /**
     * The filter to search for the InboundItem to update in case it exists.
     */
    where: InboundItemWhereUniqueInput
    /**
     * In case the InboundItem found by the `where` argument doesn't exist, create a new InboundItem with this data.
     */
    create: XOR<InboundItemCreateInput, InboundItemUncheckedCreateInput>
    /**
     * In case the InboundItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InboundItemUpdateInput, InboundItemUncheckedUpdateInput>
  }

  /**
   * InboundItem delete
   */
  export type InboundItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundItem
     */
    select?: InboundItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundItem
     */
    omit?: InboundItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundItemInclude<ExtArgs> | null
    /**
     * Filter which InboundItem to delete.
     */
    where: InboundItemWhereUniqueInput
  }

  /**
   * InboundItem deleteMany
   */
  export type InboundItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InboundItems to delete
     */
    where?: InboundItemWhereInput
    /**
     * Limit how many InboundItems to delete.
     */
    limit?: number
  }

  /**
   * InboundItem without action
   */
  export type InboundItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundItem
     */
    select?: InboundItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundItem
     */
    omit?: InboundItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundItemInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const PartScalarFieldEnum: {
    id: 'id',
    name: 'name',
    qty: 'qty',
    unit: 'unit',
    status: 'status',
    icon: 'icon',
    sku: 'sku',
    location: 'location',
    locationStatus: 'locationStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PartScalarFieldEnum = (typeof PartScalarFieldEnum)[keyof typeof PartScalarFieldEnum]


  export const MovementScalarFieldEnum: {
    id: 'id',
    date: 'date',
    qty: 'qty',
    source: 'source',
    destination: 'destination',
    type: 'type',
    partId: 'partId',
    createdAt: 'createdAt'
  };

  export type MovementScalarFieldEnum = (typeof MovementScalarFieldEnum)[keyof typeof MovementScalarFieldEnum]


  export const ProductionOrderScalarFieldEnum: {
    id: 'id',
    status: 'status',
    line: 'line',
    description: 'description',
    dueTime: 'dueTime',
    progress: 'progress',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductionOrderScalarFieldEnum = (typeof ProductionOrderScalarFieldEnum)[keyof typeof ProductionOrderScalarFieldEnum]


  export const BOMItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    requiredQty: 'requiredQty',
    picked: 'picked',
    unit: 'unit',
    moId: 'moId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BOMItemScalarFieldEnum = (typeof BOMItemScalarFieldEnum)[keyof typeof BOMItemScalarFieldEnum]


  export const InboundInvoiceScalarFieldEnum: {
    id: 'id',
    vendor: 'vendor',
    po: 'po',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InboundInvoiceScalarFieldEnum = (typeof InboundInvoiceScalarFieldEnum)[keyof typeof InboundInvoiceScalarFieldEnum]


  export const InboundItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sku: 'sku',
    qty: 'qty',
    unit: 'unit',
    received: 'received',
    receivedQty: 'receivedQty',
    invoiceId: 'invoiceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InboundItemScalarFieldEnum = (typeof InboundItemScalarFieldEnum)[keyof typeof InboundItemScalarFieldEnum]


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    token?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type PartWhereInput = {
    AND?: PartWhereInput | PartWhereInput[]
    OR?: PartWhereInput[]
    NOT?: PartWhereInput | PartWhereInput[]
    id?: StringFilter<"Part"> | string
    name?: StringFilter<"Part"> | string
    qty?: IntFilter<"Part"> | number
    unit?: StringFilter<"Part"> | string
    status?: StringFilter<"Part"> | string
    icon?: StringFilter<"Part"> | string
    sku?: StringFilter<"Part"> | string
    location?: StringFilter<"Part"> | string
    locationStatus?: StringFilter<"Part"> | string
    createdAt?: DateTimeFilter<"Part"> | Date | string
    updatedAt?: DateTimeFilter<"Part"> | Date | string
    movements?: MovementListRelationFilter
  }

  export type PartOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    qty?: SortOrder
    unit?: SortOrder
    status?: SortOrder
    icon?: SortOrder
    sku?: SortOrder
    location?: SortOrder
    locationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movements?: MovementOrderByRelationAggregateInput
  }

  export type PartWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sku?: string
    AND?: PartWhereInput | PartWhereInput[]
    OR?: PartWhereInput[]
    NOT?: PartWhereInput | PartWhereInput[]
    name?: StringFilter<"Part"> | string
    qty?: IntFilter<"Part"> | number
    unit?: StringFilter<"Part"> | string
    status?: StringFilter<"Part"> | string
    icon?: StringFilter<"Part"> | string
    location?: StringFilter<"Part"> | string
    locationStatus?: StringFilter<"Part"> | string
    createdAt?: DateTimeFilter<"Part"> | Date | string
    updatedAt?: DateTimeFilter<"Part"> | Date | string
    movements?: MovementListRelationFilter
  }, "id" | "sku">

  export type PartOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    qty?: SortOrder
    unit?: SortOrder
    status?: SortOrder
    icon?: SortOrder
    sku?: SortOrder
    location?: SortOrder
    locationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PartCountOrderByAggregateInput
    _avg?: PartAvgOrderByAggregateInput
    _max?: PartMaxOrderByAggregateInput
    _min?: PartMinOrderByAggregateInput
    _sum?: PartSumOrderByAggregateInput
  }

  export type PartScalarWhereWithAggregatesInput = {
    AND?: PartScalarWhereWithAggregatesInput | PartScalarWhereWithAggregatesInput[]
    OR?: PartScalarWhereWithAggregatesInput[]
    NOT?: PartScalarWhereWithAggregatesInput | PartScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Part"> | string
    name?: StringWithAggregatesFilter<"Part"> | string
    qty?: IntWithAggregatesFilter<"Part"> | number
    unit?: StringWithAggregatesFilter<"Part"> | string
    status?: StringWithAggregatesFilter<"Part"> | string
    icon?: StringWithAggregatesFilter<"Part"> | string
    sku?: StringWithAggregatesFilter<"Part"> | string
    location?: StringWithAggregatesFilter<"Part"> | string
    locationStatus?: StringWithAggregatesFilter<"Part"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Part"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Part"> | Date | string
  }

  export type MovementWhereInput = {
    AND?: MovementWhereInput | MovementWhereInput[]
    OR?: MovementWhereInput[]
    NOT?: MovementWhereInput | MovementWhereInput[]
    id?: StringFilter<"Movement"> | string
    date?: DateTimeFilter<"Movement"> | Date | string
    qty?: IntFilter<"Movement"> | number
    source?: StringFilter<"Movement"> | string
    destination?: StringFilter<"Movement"> | string
    type?: StringFilter<"Movement"> | string
    partId?: StringFilter<"Movement"> | string
    createdAt?: DateTimeFilter<"Movement"> | Date | string
    part?: XOR<PartScalarRelationFilter, PartWhereInput>
  }

  export type MovementOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    qty?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    type?: SortOrder
    partId?: SortOrder
    createdAt?: SortOrder
    part?: PartOrderByWithRelationInput
  }

  export type MovementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MovementWhereInput | MovementWhereInput[]
    OR?: MovementWhereInput[]
    NOT?: MovementWhereInput | MovementWhereInput[]
    date?: DateTimeFilter<"Movement"> | Date | string
    qty?: IntFilter<"Movement"> | number
    source?: StringFilter<"Movement"> | string
    destination?: StringFilter<"Movement"> | string
    type?: StringFilter<"Movement"> | string
    partId?: StringFilter<"Movement"> | string
    createdAt?: DateTimeFilter<"Movement"> | Date | string
    part?: XOR<PartScalarRelationFilter, PartWhereInput>
  }, "id">

  export type MovementOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    qty?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    type?: SortOrder
    partId?: SortOrder
    createdAt?: SortOrder
    _count?: MovementCountOrderByAggregateInput
    _avg?: MovementAvgOrderByAggregateInput
    _max?: MovementMaxOrderByAggregateInput
    _min?: MovementMinOrderByAggregateInput
    _sum?: MovementSumOrderByAggregateInput
  }

  export type MovementScalarWhereWithAggregatesInput = {
    AND?: MovementScalarWhereWithAggregatesInput | MovementScalarWhereWithAggregatesInput[]
    OR?: MovementScalarWhereWithAggregatesInput[]
    NOT?: MovementScalarWhereWithAggregatesInput | MovementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Movement"> | string
    date?: DateTimeWithAggregatesFilter<"Movement"> | Date | string
    qty?: IntWithAggregatesFilter<"Movement"> | number
    source?: StringWithAggregatesFilter<"Movement"> | string
    destination?: StringWithAggregatesFilter<"Movement"> | string
    type?: StringWithAggregatesFilter<"Movement"> | string
    partId?: StringWithAggregatesFilter<"Movement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Movement"> | Date | string
  }

  export type ProductionOrderWhereInput = {
    AND?: ProductionOrderWhereInput | ProductionOrderWhereInput[]
    OR?: ProductionOrderWhereInput[]
    NOT?: ProductionOrderWhereInput | ProductionOrderWhereInput[]
    id?: StringFilter<"ProductionOrder"> | string
    status?: StringFilter<"ProductionOrder"> | string
    line?: StringFilter<"ProductionOrder"> | string
    description?: StringFilter<"ProductionOrder"> | string
    dueTime?: StringFilter<"ProductionOrder"> | string
    progress?: IntFilter<"ProductionOrder"> | number
    createdAt?: DateTimeFilter<"ProductionOrder"> | Date | string
    updatedAt?: DateTimeFilter<"ProductionOrder"> | Date | string
    parts?: BOMItemListRelationFilter
  }

  export type ProductionOrderOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    line?: SortOrder
    description?: SortOrder
    dueTime?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parts?: BOMItemOrderByRelationAggregateInput
  }

  export type ProductionOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductionOrderWhereInput | ProductionOrderWhereInput[]
    OR?: ProductionOrderWhereInput[]
    NOT?: ProductionOrderWhereInput | ProductionOrderWhereInput[]
    status?: StringFilter<"ProductionOrder"> | string
    line?: StringFilter<"ProductionOrder"> | string
    description?: StringFilter<"ProductionOrder"> | string
    dueTime?: StringFilter<"ProductionOrder"> | string
    progress?: IntFilter<"ProductionOrder"> | number
    createdAt?: DateTimeFilter<"ProductionOrder"> | Date | string
    updatedAt?: DateTimeFilter<"ProductionOrder"> | Date | string
    parts?: BOMItemListRelationFilter
  }, "id">

  export type ProductionOrderOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    line?: SortOrder
    description?: SortOrder
    dueTime?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductionOrderCountOrderByAggregateInput
    _avg?: ProductionOrderAvgOrderByAggregateInput
    _max?: ProductionOrderMaxOrderByAggregateInput
    _min?: ProductionOrderMinOrderByAggregateInput
    _sum?: ProductionOrderSumOrderByAggregateInput
  }

  export type ProductionOrderScalarWhereWithAggregatesInput = {
    AND?: ProductionOrderScalarWhereWithAggregatesInput | ProductionOrderScalarWhereWithAggregatesInput[]
    OR?: ProductionOrderScalarWhereWithAggregatesInput[]
    NOT?: ProductionOrderScalarWhereWithAggregatesInput | ProductionOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductionOrder"> | string
    status?: StringWithAggregatesFilter<"ProductionOrder"> | string
    line?: StringWithAggregatesFilter<"ProductionOrder"> | string
    description?: StringWithAggregatesFilter<"ProductionOrder"> | string
    dueTime?: StringWithAggregatesFilter<"ProductionOrder"> | string
    progress?: IntWithAggregatesFilter<"ProductionOrder"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProductionOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductionOrder"> | Date | string
  }

  export type BOMItemWhereInput = {
    AND?: BOMItemWhereInput | BOMItemWhereInput[]
    OR?: BOMItemWhereInput[]
    NOT?: BOMItemWhereInput | BOMItemWhereInput[]
    id?: StringFilter<"BOMItem"> | string
    name?: StringFilter<"BOMItem"> | string
    requiredQty?: IntFilter<"BOMItem"> | number
    picked?: BoolFilter<"BOMItem"> | boolean
    unit?: StringFilter<"BOMItem"> | string
    moId?: StringFilter<"BOMItem"> | string
    createdAt?: DateTimeFilter<"BOMItem"> | Date | string
    updatedAt?: DateTimeFilter<"BOMItem"> | Date | string
    mo?: XOR<ProductionOrderScalarRelationFilter, ProductionOrderWhereInput>
  }

  export type BOMItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    requiredQty?: SortOrder
    picked?: SortOrder
    unit?: SortOrder
    moId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mo?: ProductionOrderOrderByWithRelationInput
  }

  export type BOMItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BOMItemWhereInput | BOMItemWhereInput[]
    OR?: BOMItemWhereInput[]
    NOT?: BOMItemWhereInput | BOMItemWhereInput[]
    name?: StringFilter<"BOMItem"> | string
    requiredQty?: IntFilter<"BOMItem"> | number
    picked?: BoolFilter<"BOMItem"> | boolean
    unit?: StringFilter<"BOMItem"> | string
    moId?: StringFilter<"BOMItem"> | string
    createdAt?: DateTimeFilter<"BOMItem"> | Date | string
    updatedAt?: DateTimeFilter<"BOMItem"> | Date | string
    mo?: XOR<ProductionOrderScalarRelationFilter, ProductionOrderWhereInput>
  }, "id">

  export type BOMItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    requiredQty?: SortOrder
    picked?: SortOrder
    unit?: SortOrder
    moId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BOMItemCountOrderByAggregateInput
    _avg?: BOMItemAvgOrderByAggregateInput
    _max?: BOMItemMaxOrderByAggregateInput
    _min?: BOMItemMinOrderByAggregateInput
    _sum?: BOMItemSumOrderByAggregateInput
  }

  export type BOMItemScalarWhereWithAggregatesInput = {
    AND?: BOMItemScalarWhereWithAggregatesInput | BOMItemScalarWhereWithAggregatesInput[]
    OR?: BOMItemScalarWhereWithAggregatesInput[]
    NOT?: BOMItemScalarWhereWithAggregatesInput | BOMItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BOMItem"> | string
    name?: StringWithAggregatesFilter<"BOMItem"> | string
    requiredQty?: IntWithAggregatesFilter<"BOMItem"> | number
    picked?: BoolWithAggregatesFilter<"BOMItem"> | boolean
    unit?: StringWithAggregatesFilter<"BOMItem"> | string
    moId?: StringWithAggregatesFilter<"BOMItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BOMItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BOMItem"> | Date | string
  }

  export type InboundInvoiceWhereInput = {
    AND?: InboundInvoiceWhereInput | InboundInvoiceWhereInput[]
    OR?: InboundInvoiceWhereInput[]
    NOT?: InboundInvoiceWhereInput | InboundInvoiceWhereInput[]
    id?: StringFilter<"InboundInvoice"> | string
    vendor?: StringFilter<"InboundInvoice"> | string
    po?: StringFilter<"InboundInvoice"> | string
    status?: StringFilter<"InboundInvoice"> | string
    createdAt?: DateTimeFilter<"InboundInvoice"> | Date | string
    updatedAt?: DateTimeFilter<"InboundInvoice"> | Date | string
    items?: InboundItemListRelationFilter
  }

  export type InboundInvoiceOrderByWithRelationInput = {
    id?: SortOrder
    vendor?: SortOrder
    po?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: InboundItemOrderByRelationAggregateInput
  }

  export type InboundInvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InboundInvoiceWhereInput | InboundInvoiceWhereInput[]
    OR?: InboundInvoiceWhereInput[]
    NOT?: InboundInvoiceWhereInput | InboundInvoiceWhereInput[]
    vendor?: StringFilter<"InboundInvoice"> | string
    po?: StringFilter<"InboundInvoice"> | string
    status?: StringFilter<"InboundInvoice"> | string
    createdAt?: DateTimeFilter<"InboundInvoice"> | Date | string
    updatedAt?: DateTimeFilter<"InboundInvoice"> | Date | string
    items?: InboundItemListRelationFilter
  }, "id">

  export type InboundInvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    vendor?: SortOrder
    po?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InboundInvoiceCountOrderByAggregateInput
    _max?: InboundInvoiceMaxOrderByAggregateInput
    _min?: InboundInvoiceMinOrderByAggregateInput
  }

  export type InboundInvoiceScalarWhereWithAggregatesInput = {
    AND?: InboundInvoiceScalarWhereWithAggregatesInput | InboundInvoiceScalarWhereWithAggregatesInput[]
    OR?: InboundInvoiceScalarWhereWithAggregatesInput[]
    NOT?: InboundInvoiceScalarWhereWithAggregatesInput | InboundInvoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InboundInvoice"> | string
    vendor?: StringWithAggregatesFilter<"InboundInvoice"> | string
    po?: StringWithAggregatesFilter<"InboundInvoice"> | string
    status?: StringWithAggregatesFilter<"InboundInvoice"> | string
    createdAt?: DateTimeWithAggregatesFilter<"InboundInvoice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InboundInvoice"> | Date | string
  }

  export type InboundItemWhereInput = {
    AND?: InboundItemWhereInput | InboundItemWhereInput[]
    OR?: InboundItemWhereInput[]
    NOT?: InboundItemWhereInput | InboundItemWhereInput[]
    id?: StringFilter<"InboundItem"> | string
    name?: StringFilter<"InboundItem"> | string
    sku?: StringFilter<"InboundItem"> | string
    qty?: IntFilter<"InboundItem"> | number
    unit?: StringFilter<"InboundItem"> | string
    received?: BoolFilter<"InboundItem"> | boolean
    receivedQty?: IntFilter<"InboundItem"> | number
    invoiceId?: StringFilter<"InboundItem"> | string
    createdAt?: DateTimeFilter<"InboundItem"> | Date | string
    updatedAt?: DateTimeFilter<"InboundItem"> | Date | string
    invoice?: XOR<InboundInvoiceScalarRelationFilter, InboundInvoiceWhereInput>
  }

  export type InboundItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    qty?: SortOrder
    unit?: SortOrder
    received?: SortOrder
    receivedQty?: SortOrder
    invoiceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    invoice?: InboundInvoiceOrderByWithRelationInput
  }

  export type InboundItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InboundItemWhereInput | InboundItemWhereInput[]
    OR?: InboundItemWhereInput[]
    NOT?: InboundItemWhereInput | InboundItemWhereInput[]
    name?: StringFilter<"InboundItem"> | string
    sku?: StringFilter<"InboundItem"> | string
    qty?: IntFilter<"InboundItem"> | number
    unit?: StringFilter<"InboundItem"> | string
    received?: BoolFilter<"InboundItem"> | boolean
    receivedQty?: IntFilter<"InboundItem"> | number
    invoiceId?: StringFilter<"InboundItem"> | string
    createdAt?: DateTimeFilter<"InboundItem"> | Date | string
    updatedAt?: DateTimeFilter<"InboundItem"> | Date | string
    invoice?: XOR<InboundInvoiceScalarRelationFilter, InboundInvoiceWhereInput>
  }, "id">

  export type InboundItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    qty?: SortOrder
    unit?: SortOrder
    received?: SortOrder
    receivedQty?: SortOrder
    invoiceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InboundItemCountOrderByAggregateInput
    _avg?: InboundItemAvgOrderByAggregateInput
    _max?: InboundItemMaxOrderByAggregateInput
    _min?: InboundItemMinOrderByAggregateInput
    _sum?: InboundItemSumOrderByAggregateInput
  }

  export type InboundItemScalarWhereWithAggregatesInput = {
    AND?: InboundItemScalarWhereWithAggregatesInput | InboundItemScalarWhereWithAggregatesInput[]
    OR?: InboundItemScalarWhereWithAggregatesInput[]
    NOT?: InboundItemScalarWhereWithAggregatesInput | InboundItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InboundItem"> | string
    name?: StringWithAggregatesFilter<"InboundItem"> | string
    sku?: StringWithAggregatesFilter<"InboundItem"> | string
    qty?: IntWithAggregatesFilter<"InboundItem"> | number
    unit?: StringWithAggregatesFilter<"InboundItem"> | string
    received?: BoolWithAggregatesFilter<"InboundItem"> | boolean
    receivedQty?: IntWithAggregatesFilter<"InboundItem"> | number
    invoiceId?: StringWithAggregatesFilter<"InboundItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"InboundItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InboundItem"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartCreateInput = {
    id?: string
    name: string
    qty: number
    unit: string
    status: string
    icon: string
    sku: string
    location: string
    locationStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    movements?: MovementCreateNestedManyWithoutPartInput
  }

  export type PartUncheckedCreateInput = {
    id?: string
    name: string
    qty: number
    unit: string
    status: string
    icon: string
    sku: string
    location: string
    locationStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    movements?: MovementUncheckedCreateNestedManyWithoutPartInput
  }

  export type PartUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    locationStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movements?: MovementUpdateManyWithoutPartNestedInput
  }

  export type PartUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    locationStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movements?: MovementUncheckedUpdateManyWithoutPartNestedInput
  }

  export type PartCreateManyInput = {
    id?: string
    name: string
    qty: number
    unit: string
    status: string
    icon: string
    sku: string
    location: string
    locationStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    locationStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    locationStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementCreateInput = {
    id?: string
    date?: Date | string
    qty: number
    source: string
    destination: string
    type: string
    createdAt?: Date | string
    part: PartCreateNestedOneWithoutMovementsInput
  }

  export type MovementUncheckedCreateInput = {
    id?: string
    date?: Date | string
    qty: number
    source: string
    destination: string
    type: string
    partId: string
    createdAt?: Date | string
  }

  export type MovementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    qty?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    part?: PartUpdateOneRequiredWithoutMovementsNestedInput
  }

  export type MovementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    qty?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    partId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementCreateManyInput = {
    id?: string
    date?: Date | string
    qty: number
    source: string
    destination: string
    type: string
    partId: string
    createdAt?: Date | string
  }

  export type MovementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    qty?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    qty?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    partId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductionOrderCreateInput = {
    id: string
    status: string
    line: string
    description: string
    dueTime: string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parts?: BOMItemCreateNestedManyWithoutMoInput
  }

  export type ProductionOrderUncheckedCreateInput = {
    id: string
    status: string
    line: string
    description: string
    dueTime: string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parts?: BOMItemUncheckedCreateNestedManyWithoutMoInput
  }

  export type ProductionOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    line?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueTime?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parts?: BOMItemUpdateManyWithoutMoNestedInput
  }

  export type ProductionOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    line?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueTime?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parts?: BOMItemUncheckedUpdateManyWithoutMoNestedInput
  }

  export type ProductionOrderCreateManyInput = {
    id: string
    status: string
    line: string
    description: string
    dueTime: string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductionOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    line?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueTime?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductionOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    line?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueTime?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BOMItemCreateInput = {
    id?: string
    name: string
    requiredQty: number
    picked?: boolean
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mo: ProductionOrderCreateNestedOneWithoutPartsInput
  }

  export type BOMItemUncheckedCreateInput = {
    id?: string
    name: string
    requiredQty: number
    picked?: boolean
    unit: string
    moId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BOMItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    requiredQty?: IntFieldUpdateOperationsInput | number
    picked?: BoolFieldUpdateOperationsInput | boolean
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mo?: ProductionOrderUpdateOneRequiredWithoutPartsNestedInput
  }

  export type BOMItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    requiredQty?: IntFieldUpdateOperationsInput | number
    picked?: BoolFieldUpdateOperationsInput | boolean
    unit?: StringFieldUpdateOperationsInput | string
    moId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BOMItemCreateManyInput = {
    id?: string
    name: string
    requiredQty: number
    picked?: boolean
    unit: string
    moId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BOMItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    requiredQty?: IntFieldUpdateOperationsInput | number
    picked?: BoolFieldUpdateOperationsInput | boolean
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BOMItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    requiredQty?: IntFieldUpdateOperationsInput | number
    picked?: BoolFieldUpdateOperationsInput | boolean
    unit?: StringFieldUpdateOperationsInput | string
    moId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboundInvoiceCreateInput = {
    id: string
    vendor: string
    po: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: InboundItemCreateNestedManyWithoutInvoiceInput
  }

  export type InboundInvoiceUncheckedCreateInput = {
    id: string
    vendor: string
    po: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: InboundItemUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InboundInvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendor?: StringFieldUpdateOperationsInput | string
    po?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: InboundItemUpdateManyWithoutInvoiceNestedInput
  }

  export type InboundInvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendor?: StringFieldUpdateOperationsInput | string
    po?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: InboundItemUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InboundInvoiceCreateManyInput = {
    id: string
    vendor: string
    po: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InboundInvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendor?: StringFieldUpdateOperationsInput | string
    po?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboundInvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendor?: StringFieldUpdateOperationsInput | string
    po?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboundItemCreateInput = {
    id?: string
    name: string
    sku: string
    qty: number
    unit: string
    received?: boolean
    receivedQty?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    invoice: InboundInvoiceCreateNestedOneWithoutItemsInput
  }

  export type InboundItemUncheckedCreateInput = {
    id?: string
    name: string
    sku: string
    qty: number
    unit: string
    received?: boolean
    receivedQty?: number
    invoiceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InboundItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    received?: BoolFieldUpdateOperationsInput | boolean
    receivedQty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InboundInvoiceUpdateOneRequiredWithoutItemsNestedInput
  }

  export type InboundItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    received?: BoolFieldUpdateOperationsInput | boolean
    receivedQty?: IntFieldUpdateOperationsInput | number
    invoiceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboundItemCreateManyInput = {
    id?: string
    name: string
    sku: string
    qty: number
    unit: string
    received?: boolean
    receivedQty?: number
    invoiceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InboundItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    received?: BoolFieldUpdateOperationsInput | boolean
    receivedQty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboundItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    received?: BoolFieldUpdateOperationsInput | boolean
    receivedQty?: IntFieldUpdateOperationsInput | number
    invoiceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type MovementListRelationFilter = {
    every?: MovementWhereInput
    some?: MovementWhereInput
    none?: MovementWhereInput
  }

  export type MovementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PartCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    qty?: SortOrder
    unit?: SortOrder
    status?: SortOrder
    icon?: SortOrder
    sku?: SortOrder
    location?: SortOrder
    locationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartAvgOrderByAggregateInput = {
    qty?: SortOrder
  }

  export type PartMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    qty?: SortOrder
    unit?: SortOrder
    status?: SortOrder
    icon?: SortOrder
    sku?: SortOrder
    location?: SortOrder
    locationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    qty?: SortOrder
    unit?: SortOrder
    status?: SortOrder
    icon?: SortOrder
    sku?: SortOrder
    location?: SortOrder
    locationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartSumOrderByAggregateInput = {
    qty?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type PartScalarRelationFilter = {
    is?: PartWhereInput
    isNot?: PartWhereInput
  }

  export type MovementCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    qty?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    type?: SortOrder
    partId?: SortOrder
    createdAt?: SortOrder
  }

  export type MovementAvgOrderByAggregateInput = {
    qty?: SortOrder
  }

  export type MovementMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    qty?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    type?: SortOrder
    partId?: SortOrder
    createdAt?: SortOrder
  }

  export type MovementMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    qty?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    type?: SortOrder
    partId?: SortOrder
    createdAt?: SortOrder
  }

  export type MovementSumOrderByAggregateInput = {
    qty?: SortOrder
  }

  export type BOMItemListRelationFilter = {
    every?: BOMItemWhereInput
    some?: BOMItemWhereInput
    none?: BOMItemWhereInput
  }

  export type BOMItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductionOrderCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    line?: SortOrder
    description?: SortOrder
    dueTime?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductionOrderAvgOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type ProductionOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    line?: SortOrder
    description?: SortOrder
    dueTime?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductionOrderMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    line?: SortOrder
    description?: SortOrder
    dueTime?: SortOrder
    progress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductionOrderSumOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProductionOrderScalarRelationFilter = {
    is?: ProductionOrderWhereInput
    isNot?: ProductionOrderWhereInput
  }

  export type BOMItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    requiredQty?: SortOrder
    picked?: SortOrder
    unit?: SortOrder
    moId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BOMItemAvgOrderByAggregateInput = {
    requiredQty?: SortOrder
  }

  export type BOMItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    requiredQty?: SortOrder
    picked?: SortOrder
    unit?: SortOrder
    moId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BOMItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    requiredQty?: SortOrder
    picked?: SortOrder
    unit?: SortOrder
    moId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BOMItemSumOrderByAggregateInput = {
    requiredQty?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type InboundItemListRelationFilter = {
    every?: InboundItemWhereInput
    some?: InboundItemWhereInput
    none?: InboundItemWhereInput
  }

  export type InboundItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InboundInvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    vendor?: SortOrder
    po?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InboundInvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    vendor?: SortOrder
    po?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InboundInvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    vendor?: SortOrder
    po?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InboundInvoiceScalarRelationFilter = {
    is?: InboundInvoiceWhereInput
    isNot?: InboundInvoiceWhereInput
  }

  export type InboundItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    qty?: SortOrder
    unit?: SortOrder
    received?: SortOrder
    receivedQty?: SortOrder
    invoiceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InboundItemAvgOrderByAggregateInput = {
    qty?: SortOrder
    receivedQty?: SortOrder
  }

  export type InboundItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    qty?: SortOrder
    unit?: SortOrder
    received?: SortOrder
    receivedQty?: SortOrder
    invoiceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InboundItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    qty?: SortOrder
    unit?: SortOrder
    received?: SortOrder
    receivedQty?: SortOrder
    invoiceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InboundItemSumOrderByAggregateInput = {
    qty?: SortOrder
    receivedQty?: SortOrder
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type MovementCreateNestedManyWithoutPartInput = {
    create?: XOR<MovementCreateWithoutPartInput, MovementUncheckedCreateWithoutPartInput> | MovementCreateWithoutPartInput[] | MovementUncheckedCreateWithoutPartInput[]
    connectOrCreate?: MovementCreateOrConnectWithoutPartInput | MovementCreateOrConnectWithoutPartInput[]
    createMany?: MovementCreateManyPartInputEnvelope
    connect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
  }

  export type MovementUncheckedCreateNestedManyWithoutPartInput = {
    create?: XOR<MovementCreateWithoutPartInput, MovementUncheckedCreateWithoutPartInput> | MovementCreateWithoutPartInput[] | MovementUncheckedCreateWithoutPartInput[]
    connectOrCreate?: MovementCreateOrConnectWithoutPartInput | MovementCreateOrConnectWithoutPartInput[]
    createMany?: MovementCreateManyPartInputEnvelope
    connect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MovementUpdateManyWithoutPartNestedInput = {
    create?: XOR<MovementCreateWithoutPartInput, MovementUncheckedCreateWithoutPartInput> | MovementCreateWithoutPartInput[] | MovementUncheckedCreateWithoutPartInput[]
    connectOrCreate?: MovementCreateOrConnectWithoutPartInput | MovementCreateOrConnectWithoutPartInput[]
    upsert?: MovementUpsertWithWhereUniqueWithoutPartInput | MovementUpsertWithWhereUniqueWithoutPartInput[]
    createMany?: MovementCreateManyPartInputEnvelope
    set?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    disconnect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    delete?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    connect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    update?: MovementUpdateWithWhereUniqueWithoutPartInput | MovementUpdateWithWhereUniqueWithoutPartInput[]
    updateMany?: MovementUpdateManyWithWhereWithoutPartInput | MovementUpdateManyWithWhereWithoutPartInput[]
    deleteMany?: MovementScalarWhereInput | MovementScalarWhereInput[]
  }

  export type MovementUncheckedUpdateManyWithoutPartNestedInput = {
    create?: XOR<MovementCreateWithoutPartInput, MovementUncheckedCreateWithoutPartInput> | MovementCreateWithoutPartInput[] | MovementUncheckedCreateWithoutPartInput[]
    connectOrCreate?: MovementCreateOrConnectWithoutPartInput | MovementCreateOrConnectWithoutPartInput[]
    upsert?: MovementUpsertWithWhereUniqueWithoutPartInput | MovementUpsertWithWhereUniqueWithoutPartInput[]
    createMany?: MovementCreateManyPartInputEnvelope
    set?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    disconnect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    delete?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    connect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    update?: MovementUpdateWithWhereUniqueWithoutPartInput | MovementUpdateWithWhereUniqueWithoutPartInput[]
    updateMany?: MovementUpdateManyWithWhereWithoutPartInput | MovementUpdateManyWithWhereWithoutPartInput[]
    deleteMany?: MovementScalarWhereInput | MovementScalarWhereInput[]
  }

  export type PartCreateNestedOneWithoutMovementsInput = {
    create?: XOR<PartCreateWithoutMovementsInput, PartUncheckedCreateWithoutMovementsInput>
    connectOrCreate?: PartCreateOrConnectWithoutMovementsInput
    connect?: PartWhereUniqueInput
  }

  export type PartUpdateOneRequiredWithoutMovementsNestedInput = {
    create?: XOR<PartCreateWithoutMovementsInput, PartUncheckedCreateWithoutMovementsInput>
    connectOrCreate?: PartCreateOrConnectWithoutMovementsInput
    upsert?: PartUpsertWithoutMovementsInput
    connect?: PartWhereUniqueInput
    update?: XOR<XOR<PartUpdateToOneWithWhereWithoutMovementsInput, PartUpdateWithoutMovementsInput>, PartUncheckedUpdateWithoutMovementsInput>
  }

  export type BOMItemCreateNestedManyWithoutMoInput = {
    create?: XOR<BOMItemCreateWithoutMoInput, BOMItemUncheckedCreateWithoutMoInput> | BOMItemCreateWithoutMoInput[] | BOMItemUncheckedCreateWithoutMoInput[]
    connectOrCreate?: BOMItemCreateOrConnectWithoutMoInput | BOMItemCreateOrConnectWithoutMoInput[]
    createMany?: BOMItemCreateManyMoInputEnvelope
    connect?: BOMItemWhereUniqueInput | BOMItemWhereUniqueInput[]
  }

  export type BOMItemUncheckedCreateNestedManyWithoutMoInput = {
    create?: XOR<BOMItemCreateWithoutMoInput, BOMItemUncheckedCreateWithoutMoInput> | BOMItemCreateWithoutMoInput[] | BOMItemUncheckedCreateWithoutMoInput[]
    connectOrCreate?: BOMItemCreateOrConnectWithoutMoInput | BOMItemCreateOrConnectWithoutMoInput[]
    createMany?: BOMItemCreateManyMoInputEnvelope
    connect?: BOMItemWhereUniqueInput | BOMItemWhereUniqueInput[]
  }

  export type BOMItemUpdateManyWithoutMoNestedInput = {
    create?: XOR<BOMItemCreateWithoutMoInput, BOMItemUncheckedCreateWithoutMoInput> | BOMItemCreateWithoutMoInput[] | BOMItemUncheckedCreateWithoutMoInput[]
    connectOrCreate?: BOMItemCreateOrConnectWithoutMoInput | BOMItemCreateOrConnectWithoutMoInput[]
    upsert?: BOMItemUpsertWithWhereUniqueWithoutMoInput | BOMItemUpsertWithWhereUniqueWithoutMoInput[]
    createMany?: BOMItemCreateManyMoInputEnvelope
    set?: BOMItemWhereUniqueInput | BOMItemWhereUniqueInput[]
    disconnect?: BOMItemWhereUniqueInput | BOMItemWhereUniqueInput[]
    delete?: BOMItemWhereUniqueInput | BOMItemWhereUniqueInput[]
    connect?: BOMItemWhereUniqueInput | BOMItemWhereUniqueInput[]
    update?: BOMItemUpdateWithWhereUniqueWithoutMoInput | BOMItemUpdateWithWhereUniqueWithoutMoInput[]
    updateMany?: BOMItemUpdateManyWithWhereWithoutMoInput | BOMItemUpdateManyWithWhereWithoutMoInput[]
    deleteMany?: BOMItemScalarWhereInput | BOMItemScalarWhereInput[]
  }

  export type BOMItemUncheckedUpdateManyWithoutMoNestedInput = {
    create?: XOR<BOMItemCreateWithoutMoInput, BOMItemUncheckedCreateWithoutMoInput> | BOMItemCreateWithoutMoInput[] | BOMItemUncheckedCreateWithoutMoInput[]
    connectOrCreate?: BOMItemCreateOrConnectWithoutMoInput | BOMItemCreateOrConnectWithoutMoInput[]
    upsert?: BOMItemUpsertWithWhereUniqueWithoutMoInput | BOMItemUpsertWithWhereUniqueWithoutMoInput[]
    createMany?: BOMItemCreateManyMoInputEnvelope
    set?: BOMItemWhereUniqueInput | BOMItemWhereUniqueInput[]
    disconnect?: BOMItemWhereUniqueInput | BOMItemWhereUniqueInput[]
    delete?: BOMItemWhereUniqueInput | BOMItemWhereUniqueInput[]
    connect?: BOMItemWhereUniqueInput | BOMItemWhereUniqueInput[]
    update?: BOMItemUpdateWithWhereUniqueWithoutMoInput | BOMItemUpdateWithWhereUniqueWithoutMoInput[]
    updateMany?: BOMItemUpdateManyWithWhereWithoutMoInput | BOMItemUpdateManyWithWhereWithoutMoInput[]
    deleteMany?: BOMItemScalarWhereInput | BOMItemScalarWhereInput[]
  }

  export type ProductionOrderCreateNestedOneWithoutPartsInput = {
    create?: XOR<ProductionOrderCreateWithoutPartsInput, ProductionOrderUncheckedCreateWithoutPartsInput>
    connectOrCreate?: ProductionOrderCreateOrConnectWithoutPartsInput
    connect?: ProductionOrderWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProductionOrderUpdateOneRequiredWithoutPartsNestedInput = {
    create?: XOR<ProductionOrderCreateWithoutPartsInput, ProductionOrderUncheckedCreateWithoutPartsInput>
    connectOrCreate?: ProductionOrderCreateOrConnectWithoutPartsInput
    upsert?: ProductionOrderUpsertWithoutPartsInput
    connect?: ProductionOrderWhereUniqueInput
    update?: XOR<XOR<ProductionOrderUpdateToOneWithWhereWithoutPartsInput, ProductionOrderUpdateWithoutPartsInput>, ProductionOrderUncheckedUpdateWithoutPartsInput>
  }

  export type InboundItemCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<InboundItemCreateWithoutInvoiceInput, InboundItemUncheckedCreateWithoutInvoiceInput> | InboundItemCreateWithoutInvoiceInput[] | InboundItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InboundItemCreateOrConnectWithoutInvoiceInput | InboundItemCreateOrConnectWithoutInvoiceInput[]
    createMany?: InboundItemCreateManyInvoiceInputEnvelope
    connect?: InboundItemWhereUniqueInput | InboundItemWhereUniqueInput[]
  }

  export type InboundItemUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<InboundItemCreateWithoutInvoiceInput, InboundItemUncheckedCreateWithoutInvoiceInput> | InboundItemCreateWithoutInvoiceInput[] | InboundItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InboundItemCreateOrConnectWithoutInvoiceInput | InboundItemCreateOrConnectWithoutInvoiceInput[]
    createMany?: InboundItemCreateManyInvoiceInputEnvelope
    connect?: InboundItemWhereUniqueInput | InboundItemWhereUniqueInput[]
  }

  export type InboundItemUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<InboundItemCreateWithoutInvoiceInput, InboundItemUncheckedCreateWithoutInvoiceInput> | InboundItemCreateWithoutInvoiceInput[] | InboundItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InboundItemCreateOrConnectWithoutInvoiceInput | InboundItemCreateOrConnectWithoutInvoiceInput[]
    upsert?: InboundItemUpsertWithWhereUniqueWithoutInvoiceInput | InboundItemUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: InboundItemCreateManyInvoiceInputEnvelope
    set?: InboundItemWhereUniqueInput | InboundItemWhereUniqueInput[]
    disconnect?: InboundItemWhereUniqueInput | InboundItemWhereUniqueInput[]
    delete?: InboundItemWhereUniqueInput | InboundItemWhereUniqueInput[]
    connect?: InboundItemWhereUniqueInput | InboundItemWhereUniqueInput[]
    update?: InboundItemUpdateWithWhereUniqueWithoutInvoiceInput | InboundItemUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: InboundItemUpdateManyWithWhereWithoutInvoiceInput | InboundItemUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: InboundItemScalarWhereInput | InboundItemScalarWhereInput[]
  }

  export type InboundItemUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<InboundItemCreateWithoutInvoiceInput, InboundItemUncheckedCreateWithoutInvoiceInput> | InboundItemCreateWithoutInvoiceInput[] | InboundItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InboundItemCreateOrConnectWithoutInvoiceInput | InboundItemCreateOrConnectWithoutInvoiceInput[]
    upsert?: InboundItemUpsertWithWhereUniqueWithoutInvoiceInput | InboundItemUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: InboundItemCreateManyInvoiceInputEnvelope
    set?: InboundItemWhereUniqueInput | InboundItemWhereUniqueInput[]
    disconnect?: InboundItemWhereUniqueInput | InboundItemWhereUniqueInput[]
    delete?: InboundItemWhereUniqueInput | InboundItemWhereUniqueInput[]
    connect?: InboundItemWhereUniqueInput | InboundItemWhereUniqueInput[]
    update?: InboundItemUpdateWithWhereUniqueWithoutInvoiceInput | InboundItemUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: InboundItemUpdateManyWithWhereWithoutInvoiceInput | InboundItemUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: InboundItemScalarWhereInput | InboundItemScalarWhereInput[]
  }

  export type InboundInvoiceCreateNestedOneWithoutItemsInput = {
    create?: XOR<InboundInvoiceCreateWithoutItemsInput, InboundInvoiceUncheckedCreateWithoutItemsInput>
    connectOrCreate?: InboundInvoiceCreateOrConnectWithoutItemsInput
    connect?: InboundInvoiceWhereUniqueInput
  }

  export type InboundInvoiceUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<InboundInvoiceCreateWithoutItemsInput, InboundInvoiceUncheckedCreateWithoutItemsInput>
    connectOrCreate?: InboundInvoiceCreateOrConnectWithoutItemsInput
    upsert?: InboundInvoiceUpsertWithoutItemsInput
    connect?: InboundInvoiceWhereUniqueInput
    update?: XOR<XOR<InboundInvoiceUpdateToOneWithWhereWithoutItemsInput, InboundInvoiceUpdateWithoutItemsInput>, InboundInvoiceUncheckedUpdateWithoutItemsInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementCreateWithoutPartInput = {
    id?: string
    date?: Date | string
    qty: number
    source: string
    destination: string
    type: string
    createdAt?: Date | string
  }

  export type MovementUncheckedCreateWithoutPartInput = {
    id?: string
    date?: Date | string
    qty: number
    source: string
    destination: string
    type: string
    createdAt?: Date | string
  }

  export type MovementCreateOrConnectWithoutPartInput = {
    where: MovementWhereUniqueInput
    create: XOR<MovementCreateWithoutPartInput, MovementUncheckedCreateWithoutPartInput>
  }

  export type MovementCreateManyPartInputEnvelope = {
    data: MovementCreateManyPartInput | MovementCreateManyPartInput[]
    skipDuplicates?: boolean
  }

  export type MovementUpsertWithWhereUniqueWithoutPartInput = {
    where: MovementWhereUniqueInput
    update: XOR<MovementUpdateWithoutPartInput, MovementUncheckedUpdateWithoutPartInput>
    create: XOR<MovementCreateWithoutPartInput, MovementUncheckedCreateWithoutPartInput>
  }

  export type MovementUpdateWithWhereUniqueWithoutPartInput = {
    where: MovementWhereUniqueInput
    data: XOR<MovementUpdateWithoutPartInput, MovementUncheckedUpdateWithoutPartInput>
  }

  export type MovementUpdateManyWithWhereWithoutPartInput = {
    where: MovementScalarWhereInput
    data: XOR<MovementUpdateManyMutationInput, MovementUncheckedUpdateManyWithoutPartInput>
  }

  export type MovementScalarWhereInput = {
    AND?: MovementScalarWhereInput | MovementScalarWhereInput[]
    OR?: MovementScalarWhereInput[]
    NOT?: MovementScalarWhereInput | MovementScalarWhereInput[]
    id?: StringFilter<"Movement"> | string
    date?: DateTimeFilter<"Movement"> | Date | string
    qty?: IntFilter<"Movement"> | number
    source?: StringFilter<"Movement"> | string
    destination?: StringFilter<"Movement"> | string
    type?: StringFilter<"Movement"> | string
    partId?: StringFilter<"Movement"> | string
    createdAt?: DateTimeFilter<"Movement"> | Date | string
  }

  export type PartCreateWithoutMovementsInput = {
    id?: string
    name: string
    qty: number
    unit: string
    status: string
    icon: string
    sku: string
    location: string
    locationStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartUncheckedCreateWithoutMovementsInput = {
    id?: string
    name: string
    qty: number
    unit: string
    status: string
    icon: string
    sku: string
    location: string
    locationStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartCreateOrConnectWithoutMovementsInput = {
    where: PartWhereUniqueInput
    create: XOR<PartCreateWithoutMovementsInput, PartUncheckedCreateWithoutMovementsInput>
  }

  export type PartUpsertWithoutMovementsInput = {
    update: XOR<PartUpdateWithoutMovementsInput, PartUncheckedUpdateWithoutMovementsInput>
    create: XOR<PartCreateWithoutMovementsInput, PartUncheckedCreateWithoutMovementsInput>
    where?: PartWhereInput
  }

  export type PartUpdateToOneWithWhereWithoutMovementsInput = {
    where?: PartWhereInput
    data: XOR<PartUpdateWithoutMovementsInput, PartUncheckedUpdateWithoutMovementsInput>
  }

  export type PartUpdateWithoutMovementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    locationStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartUncheckedUpdateWithoutMovementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    locationStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BOMItemCreateWithoutMoInput = {
    id?: string
    name: string
    requiredQty: number
    picked?: boolean
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BOMItemUncheckedCreateWithoutMoInput = {
    id?: string
    name: string
    requiredQty: number
    picked?: boolean
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BOMItemCreateOrConnectWithoutMoInput = {
    where: BOMItemWhereUniqueInput
    create: XOR<BOMItemCreateWithoutMoInput, BOMItemUncheckedCreateWithoutMoInput>
  }

  export type BOMItemCreateManyMoInputEnvelope = {
    data: BOMItemCreateManyMoInput | BOMItemCreateManyMoInput[]
    skipDuplicates?: boolean
  }

  export type BOMItemUpsertWithWhereUniqueWithoutMoInput = {
    where: BOMItemWhereUniqueInput
    update: XOR<BOMItemUpdateWithoutMoInput, BOMItemUncheckedUpdateWithoutMoInput>
    create: XOR<BOMItemCreateWithoutMoInput, BOMItemUncheckedCreateWithoutMoInput>
  }

  export type BOMItemUpdateWithWhereUniqueWithoutMoInput = {
    where: BOMItemWhereUniqueInput
    data: XOR<BOMItemUpdateWithoutMoInput, BOMItemUncheckedUpdateWithoutMoInput>
  }

  export type BOMItemUpdateManyWithWhereWithoutMoInput = {
    where: BOMItemScalarWhereInput
    data: XOR<BOMItemUpdateManyMutationInput, BOMItemUncheckedUpdateManyWithoutMoInput>
  }

  export type BOMItemScalarWhereInput = {
    AND?: BOMItemScalarWhereInput | BOMItemScalarWhereInput[]
    OR?: BOMItemScalarWhereInput[]
    NOT?: BOMItemScalarWhereInput | BOMItemScalarWhereInput[]
    id?: StringFilter<"BOMItem"> | string
    name?: StringFilter<"BOMItem"> | string
    requiredQty?: IntFilter<"BOMItem"> | number
    picked?: BoolFilter<"BOMItem"> | boolean
    unit?: StringFilter<"BOMItem"> | string
    moId?: StringFilter<"BOMItem"> | string
    createdAt?: DateTimeFilter<"BOMItem"> | Date | string
    updatedAt?: DateTimeFilter<"BOMItem"> | Date | string
  }

  export type ProductionOrderCreateWithoutPartsInput = {
    id: string
    status: string
    line: string
    description: string
    dueTime: string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductionOrderUncheckedCreateWithoutPartsInput = {
    id: string
    status: string
    line: string
    description: string
    dueTime: string
    progress?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductionOrderCreateOrConnectWithoutPartsInput = {
    where: ProductionOrderWhereUniqueInput
    create: XOR<ProductionOrderCreateWithoutPartsInput, ProductionOrderUncheckedCreateWithoutPartsInput>
  }

  export type ProductionOrderUpsertWithoutPartsInput = {
    update: XOR<ProductionOrderUpdateWithoutPartsInput, ProductionOrderUncheckedUpdateWithoutPartsInput>
    create: XOR<ProductionOrderCreateWithoutPartsInput, ProductionOrderUncheckedCreateWithoutPartsInput>
    where?: ProductionOrderWhereInput
  }

  export type ProductionOrderUpdateToOneWithWhereWithoutPartsInput = {
    where?: ProductionOrderWhereInput
    data: XOR<ProductionOrderUpdateWithoutPartsInput, ProductionOrderUncheckedUpdateWithoutPartsInput>
  }

  export type ProductionOrderUpdateWithoutPartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    line?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueTime?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductionOrderUncheckedUpdateWithoutPartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    line?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    dueTime?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboundItemCreateWithoutInvoiceInput = {
    id?: string
    name: string
    sku: string
    qty: number
    unit: string
    received?: boolean
    receivedQty?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InboundItemUncheckedCreateWithoutInvoiceInput = {
    id?: string
    name: string
    sku: string
    qty: number
    unit: string
    received?: boolean
    receivedQty?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InboundItemCreateOrConnectWithoutInvoiceInput = {
    where: InboundItemWhereUniqueInput
    create: XOR<InboundItemCreateWithoutInvoiceInput, InboundItemUncheckedCreateWithoutInvoiceInput>
  }

  export type InboundItemCreateManyInvoiceInputEnvelope = {
    data: InboundItemCreateManyInvoiceInput | InboundItemCreateManyInvoiceInput[]
    skipDuplicates?: boolean
  }

  export type InboundItemUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: InboundItemWhereUniqueInput
    update: XOR<InboundItemUpdateWithoutInvoiceInput, InboundItemUncheckedUpdateWithoutInvoiceInput>
    create: XOR<InboundItemCreateWithoutInvoiceInput, InboundItemUncheckedCreateWithoutInvoiceInput>
  }

  export type InboundItemUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: InboundItemWhereUniqueInput
    data: XOR<InboundItemUpdateWithoutInvoiceInput, InboundItemUncheckedUpdateWithoutInvoiceInput>
  }

  export type InboundItemUpdateManyWithWhereWithoutInvoiceInput = {
    where: InboundItemScalarWhereInput
    data: XOR<InboundItemUpdateManyMutationInput, InboundItemUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type InboundItemScalarWhereInput = {
    AND?: InboundItemScalarWhereInput | InboundItemScalarWhereInput[]
    OR?: InboundItemScalarWhereInput[]
    NOT?: InboundItemScalarWhereInput | InboundItemScalarWhereInput[]
    id?: StringFilter<"InboundItem"> | string
    name?: StringFilter<"InboundItem"> | string
    sku?: StringFilter<"InboundItem"> | string
    qty?: IntFilter<"InboundItem"> | number
    unit?: StringFilter<"InboundItem"> | string
    received?: BoolFilter<"InboundItem"> | boolean
    receivedQty?: IntFilter<"InboundItem"> | number
    invoiceId?: StringFilter<"InboundItem"> | string
    createdAt?: DateTimeFilter<"InboundItem"> | Date | string
    updatedAt?: DateTimeFilter<"InboundItem"> | Date | string
  }

  export type InboundInvoiceCreateWithoutItemsInput = {
    id: string
    vendor: string
    po: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InboundInvoiceUncheckedCreateWithoutItemsInput = {
    id: string
    vendor: string
    po: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InboundInvoiceCreateOrConnectWithoutItemsInput = {
    where: InboundInvoiceWhereUniqueInput
    create: XOR<InboundInvoiceCreateWithoutItemsInput, InboundInvoiceUncheckedCreateWithoutItemsInput>
  }

  export type InboundInvoiceUpsertWithoutItemsInput = {
    update: XOR<InboundInvoiceUpdateWithoutItemsInput, InboundInvoiceUncheckedUpdateWithoutItemsInput>
    create: XOR<InboundInvoiceCreateWithoutItemsInput, InboundInvoiceUncheckedCreateWithoutItemsInput>
    where?: InboundInvoiceWhereInput
  }

  export type InboundInvoiceUpdateToOneWithWhereWithoutItemsInput = {
    where?: InboundInvoiceWhereInput
    data: XOR<InboundInvoiceUpdateWithoutItemsInput, InboundInvoiceUncheckedUpdateWithoutItemsInput>
  }

  export type InboundInvoiceUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendor?: StringFieldUpdateOperationsInput | string
    po?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboundInvoiceUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendor?: StringFieldUpdateOperationsInput | string
    po?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementCreateManyPartInput = {
    id?: string
    date?: Date | string
    qty: number
    source: string
    destination: string
    type: string
    createdAt?: Date | string
  }

  export type MovementUpdateWithoutPartInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    qty?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementUncheckedUpdateWithoutPartInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    qty?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementUncheckedUpdateManyWithoutPartInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    qty?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BOMItemCreateManyMoInput = {
    id?: string
    name: string
    requiredQty: number
    picked?: boolean
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BOMItemUpdateWithoutMoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    requiredQty?: IntFieldUpdateOperationsInput | number
    picked?: BoolFieldUpdateOperationsInput | boolean
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BOMItemUncheckedUpdateWithoutMoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    requiredQty?: IntFieldUpdateOperationsInput | number
    picked?: BoolFieldUpdateOperationsInput | boolean
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BOMItemUncheckedUpdateManyWithoutMoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    requiredQty?: IntFieldUpdateOperationsInput | number
    picked?: BoolFieldUpdateOperationsInput | boolean
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboundItemCreateManyInvoiceInput = {
    id?: string
    name: string
    sku: string
    qty: number
    unit: string
    received?: boolean
    receivedQty?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InboundItemUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    received?: BoolFieldUpdateOperationsInput | boolean
    receivedQty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboundItemUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    received?: BoolFieldUpdateOperationsInput | boolean
    receivedQty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboundItemUncheckedUpdateManyWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    received?: BoolFieldUpdateOperationsInput | boolean
    receivedQty?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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