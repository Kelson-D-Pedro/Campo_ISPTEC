
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
 * Model Estudante
 * 
 */
export type Estudante = $Result.DefaultSelection<Prisma.$EstudantePayload>
/**
 * Model Externo
 * 
 */
export type Externo = $Result.DefaultSelection<Prisma.$ExternoPayload>
/**
 * Model Equipe
 * 
 */
export type Equipe = $Result.DefaultSelection<Prisma.$EquipePayload>
/**
 * Model Evento
 * 
 */
export type Evento = $Result.DefaultSelection<Prisma.$EventoPayload>
/**
 * Model Jogo
 * 
 */
export type Jogo = $Result.DefaultSelection<Prisma.$JogoPayload>
/**
 * Model Marcacao
 * 
 */
export type Marcacao = $Result.DefaultSelection<Prisma.$MarcacaoPayload>
/**
 * Model ParticipacaoEquipe
 * 
 */
export type ParticipacaoEquipe = $Result.DefaultSelection<Prisma.$ParticipacaoEquipePayload>
/**
 * Model Technician
 * 
 */
export type Technician = $Result.DefaultSelection<Prisma.$TechnicianPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Estudantes
 * const estudantes = await prisma.estudante.findMany()
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
   * // Fetch zero or more Estudantes
   * const estudantes = await prisma.estudante.findMany()
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
   * `prisma.estudante`: Exposes CRUD operations for the **Estudante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estudantes
    * const estudantes = await prisma.estudante.findMany()
    * ```
    */
  get estudante(): Prisma.EstudanteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.externo`: Exposes CRUD operations for the **Externo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Externos
    * const externos = await prisma.externo.findMany()
    * ```
    */
  get externo(): Prisma.ExternoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipe`: Exposes CRUD operations for the **Equipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipes
    * const equipes = await prisma.equipe.findMany()
    * ```
    */
  get equipe(): Prisma.EquipeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evento`: Exposes CRUD operations for the **Evento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eventos
    * const eventos = await prisma.evento.findMany()
    * ```
    */
  get evento(): Prisma.EventoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jogo`: Exposes CRUD operations for the **Jogo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jogos
    * const jogos = await prisma.jogo.findMany()
    * ```
    */
  get jogo(): Prisma.JogoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marcacao`: Exposes CRUD operations for the **Marcacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Marcacaos
    * const marcacaos = await prisma.marcacao.findMany()
    * ```
    */
  get marcacao(): Prisma.MarcacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participacaoEquipe`: Exposes CRUD operations for the **ParticipacaoEquipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParticipacaoEquipes
    * const participacaoEquipes = await prisma.participacaoEquipe.findMany()
    * ```
    */
  get participacaoEquipe(): Prisma.ParticipacaoEquipeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.technician`: Exposes CRUD operations for the **Technician** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Technicians
    * const technicians = await prisma.technician.findMany()
    * ```
    */
  get technician(): Prisma.TechnicianDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
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
    Estudante: 'Estudante',
    Externo: 'Externo',
    Equipe: 'Equipe',
    Evento: 'Evento',
    Jogo: 'Jogo',
    Marcacao: 'Marcacao',
    ParticipacaoEquipe: 'ParticipacaoEquipe',
    Technician: 'Technician',
    User: 'User'
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
      modelProps: "estudante" | "externo" | "equipe" | "evento" | "jogo" | "marcacao" | "participacaoEquipe" | "technician" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Estudante: {
        payload: Prisma.$EstudantePayload<ExtArgs>
        fields: Prisma.EstudanteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstudanteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstudanteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudantePayload>
          }
          findFirst: {
            args: Prisma.EstudanteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstudanteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudantePayload>
          }
          findMany: {
            args: Prisma.EstudanteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudantePayload>[]
          }
          create: {
            args: Prisma.EstudanteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudantePayload>
          }
          createMany: {
            args: Prisma.EstudanteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstudanteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudantePayload>[]
          }
          delete: {
            args: Prisma.EstudanteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudantePayload>
          }
          update: {
            args: Prisma.EstudanteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudantePayload>
          }
          deleteMany: {
            args: Prisma.EstudanteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstudanteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EstudanteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudantePayload>[]
          }
          upsert: {
            args: Prisma.EstudanteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudantePayload>
          }
          aggregate: {
            args: Prisma.EstudanteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstudante>
          }
          groupBy: {
            args: Prisma.EstudanteGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstudanteGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstudanteCountArgs<ExtArgs>
            result: $Utils.Optional<EstudanteCountAggregateOutputType> | number
          }
        }
      }
      Externo: {
        payload: Prisma.$ExternoPayload<ExtArgs>
        fields: Prisma.ExternoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExternoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExternoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternoPayload>
          }
          findFirst: {
            args: Prisma.ExternoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExternoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternoPayload>
          }
          findMany: {
            args: Prisma.ExternoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternoPayload>[]
          }
          create: {
            args: Prisma.ExternoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternoPayload>
          }
          createMany: {
            args: Prisma.ExternoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExternoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternoPayload>[]
          }
          delete: {
            args: Prisma.ExternoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternoPayload>
          }
          update: {
            args: Prisma.ExternoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternoPayload>
          }
          deleteMany: {
            args: Prisma.ExternoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExternoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExternoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternoPayload>[]
          }
          upsert: {
            args: Prisma.ExternoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternoPayload>
          }
          aggregate: {
            args: Prisma.ExternoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExterno>
          }
          groupBy: {
            args: Prisma.ExternoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExternoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExternoCountArgs<ExtArgs>
            result: $Utils.Optional<ExternoCountAggregateOutputType> | number
          }
        }
      }
      Equipe: {
        payload: Prisma.$EquipePayload<ExtArgs>
        fields: Prisma.EquipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>
          }
          findFirst: {
            args: Prisma.EquipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>
          }
          findMany: {
            args: Prisma.EquipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>[]
          }
          create: {
            args: Prisma.EquipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>
          }
          createMany: {
            args: Prisma.EquipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>[]
          }
          delete: {
            args: Prisma.EquipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>
          }
          update: {
            args: Prisma.EquipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>
          }
          deleteMany: {
            args: Prisma.EquipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>[]
          }
          upsert: {
            args: Prisma.EquipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>
          }
          aggregate: {
            args: Prisma.EquipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipe>
          }
          groupBy: {
            args: Prisma.EquipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipeCountArgs<ExtArgs>
            result: $Utils.Optional<EquipeCountAggregateOutputType> | number
          }
        }
      }
      Evento: {
        payload: Prisma.$EventoPayload<ExtArgs>
        fields: Prisma.EventoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          findFirst: {
            args: Prisma.EventoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          findMany: {
            args: Prisma.EventoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          create: {
            args: Prisma.EventoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          createMany: {
            args: Prisma.EventoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          delete: {
            args: Prisma.EventoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          update: {
            args: Prisma.EventoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          deleteMany: {
            args: Prisma.EventoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          upsert: {
            args: Prisma.EventoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          aggregate: {
            args: Prisma.EventoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvento>
          }
          groupBy: {
            args: Prisma.EventoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventoCountArgs<ExtArgs>
            result: $Utils.Optional<EventoCountAggregateOutputType> | number
          }
        }
      }
      Jogo: {
        payload: Prisma.$JogoPayload<ExtArgs>
        fields: Prisma.JogoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JogoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JogoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>
          }
          findFirst: {
            args: Prisma.JogoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JogoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>
          }
          findMany: {
            args: Prisma.JogoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>[]
          }
          create: {
            args: Prisma.JogoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>
          }
          createMany: {
            args: Prisma.JogoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JogoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>[]
          }
          delete: {
            args: Prisma.JogoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>
          }
          update: {
            args: Prisma.JogoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>
          }
          deleteMany: {
            args: Prisma.JogoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JogoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JogoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>[]
          }
          upsert: {
            args: Prisma.JogoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoPayload>
          }
          aggregate: {
            args: Prisma.JogoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJogo>
          }
          groupBy: {
            args: Prisma.JogoGroupByArgs<ExtArgs>
            result: $Utils.Optional<JogoGroupByOutputType>[]
          }
          count: {
            args: Prisma.JogoCountArgs<ExtArgs>
            result: $Utils.Optional<JogoCountAggregateOutputType> | number
          }
        }
      }
      Marcacao: {
        payload: Prisma.$MarcacaoPayload<ExtArgs>
        fields: Prisma.MarcacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarcacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarcacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcacaoPayload>
          }
          findFirst: {
            args: Prisma.MarcacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarcacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcacaoPayload>
          }
          findMany: {
            args: Prisma.MarcacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcacaoPayload>[]
          }
          create: {
            args: Prisma.MarcacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcacaoPayload>
          }
          createMany: {
            args: Prisma.MarcacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarcacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcacaoPayload>[]
          }
          delete: {
            args: Prisma.MarcacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcacaoPayload>
          }
          update: {
            args: Prisma.MarcacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcacaoPayload>
          }
          deleteMany: {
            args: Prisma.MarcacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarcacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarcacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcacaoPayload>[]
          }
          upsert: {
            args: Prisma.MarcacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarcacaoPayload>
          }
          aggregate: {
            args: Prisma.MarcacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarcacao>
          }
          groupBy: {
            args: Prisma.MarcacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarcacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarcacaoCountArgs<ExtArgs>
            result: $Utils.Optional<MarcacaoCountAggregateOutputType> | number
          }
        }
      }
      ParticipacaoEquipe: {
        payload: Prisma.$ParticipacaoEquipePayload<ExtArgs>
        fields: Prisma.ParticipacaoEquipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipacaoEquipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoEquipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipacaoEquipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoEquipePayload>
          }
          findFirst: {
            args: Prisma.ParticipacaoEquipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoEquipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipacaoEquipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoEquipePayload>
          }
          findMany: {
            args: Prisma.ParticipacaoEquipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoEquipePayload>[]
          }
          create: {
            args: Prisma.ParticipacaoEquipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoEquipePayload>
          }
          createMany: {
            args: Prisma.ParticipacaoEquipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipacaoEquipeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoEquipePayload>[]
          }
          delete: {
            args: Prisma.ParticipacaoEquipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoEquipePayload>
          }
          update: {
            args: Prisma.ParticipacaoEquipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoEquipePayload>
          }
          deleteMany: {
            args: Prisma.ParticipacaoEquipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipacaoEquipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipacaoEquipeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoEquipePayload>[]
          }
          upsert: {
            args: Prisma.ParticipacaoEquipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoEquipePayload>
          }
          aggregate: {
            args: Prisma.ParticipacaoEquipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipacaoEquipe>
          }
          groupBy: {
            args: Prisma.ParticipacaoEquipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipacaoEquipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipacaoEquipeCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipacaoEquipeCountAggregateOutputType> | number
          }
        }
      }
      Technician: {
        payload: Prisma.$TechnicianPayload<ExtArgs>
        fields: Prisma.TechnicianFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TechnicianFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TechnicianFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload>
          }
          findFirst: {
            args: Prisma.TechnicianFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TechnicianFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload>
          }
          findMany: {
            args: Prisma.TechnicianFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload>[]
          }
          create: {
            args: Prisma.TechnicianCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload>
          }
          createMany: {
            args: Prisma.TechnicianCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TechnicianCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload>[]
          }
          delete: {
            args: Prisma.TechnicianDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload>
          }
          update: {
            args: Prisma.TechnicianUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload>
          }
          deleteMany: {
            args: Prisma.TechnicianDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TechnicianUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TechnicianUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload>[]
          }
          upsert: {
            args: Prisma.TechnicianUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechnicianPayload>
          }
          aggregate: {
            args: Prisma.TechnicianAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTechnician>
          }
          groupBy: {
            args: Prisma.TechnicianGroupByArgs<ExtArgs>
            result: $Utils.Optional<TechnicianGroupByOutputType>[]
          }
          count: {
            args: Prisma.TechnicianCountArgs<ExtArgs>
            result: $Utils.Optional<TechnicianCountAggregateOutputType> | number
          }
        }
      }
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
    estudante?: EstudanteOmit
    externo?: ExternoOmit
    equipe?: EquipeOmit
    evento?: EventoOmit
    jogo?: JogoOmit
    marcacao?: MarcacaoOmit
    participacaoEquipe?: ParticipacaoEquipeOmit
    technician?: TechnicianOmit
    user?: UserOmit
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
   * Count Type EquipeCountOutputType
   */

  export type EquipeCountOutputType = {
    Jogo_Jogo_equipaAIdToEquipe: number
    Jogo_Jogo_equipaBIdToEquipe: number
    ParticipacaoEquipe: number
  }

  export type EquipeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Jogo_Jogo_equipaAIdToEquipe?: boolean | EquipeCountOutputTypeCountJogo_Jogo_equipaAIdToEquipeArgs
    Jogo_Jogo_equipaBIdToEquipe?: boolean | EquipeCountOutputTypeCountJogo_Jogo_equipaBIdToEquipeArgs
    ParticipacaoEquipe?: boolean | EquipeCountOutputTypeCountParticipacaoEquipeArgs
  }

  // Custom InputTypes
  /**
   * EquipeCountOutputType without action
   */
  export type EquipeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeCountOutputType
     */
    select?: EquipeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EquipeCountOutputType without action
   */
  export type EquipeCountOutputTypeCountJogo_Jogo_equipaAIdToEquipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JogoWhereInput
  }

  /**
   * EquipeCountOutputType without action
   */
  export type EquipeCountOutputTypeCountJogo_Jogo_equipaBIdToEquipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JogoWhereInput
  }

  /**
   * EquipeCountOutputType without action
   */
  export type EquipeCountOutputTypeCountParticipacaoEquipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipacaoEquipeWhereInput
  }


  /**
   * Count Type EventoCountOutputType
   */

  export type EventoCountOutputType = {
    Jogo: number
    Marcacao: number
    ParticipacaoEquipe: number
  }

  export type EventoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Jogo?: boolean | EventoCountOutputTypeCountJogoArgs
    Marcacao?: boolean | EventoCountOutputTypeCountMarcacaoArgs
    ParticipacaoEquipe?: boolean | EventoCountOutputTypeCountParticipacaoEquipeArgs
  }

  // Custom InputTypes
  /**
   * EventoCountOutputType without action
   */
  export type EventoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoCountOutputType
     */
    select?: EventoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventoCountOutputType without action
   */
  export type EventoCountOutputTypeCountJogoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JogoWhereInput
  }

  /**
   * EventoCountOutputType without action
   */
  export type EventoCountOutputTypeCountMarcacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarcacaoWhereInput
  }

  /**
   * EventoCountOutputType without action
   */
  export type EventoCountOutputTypeCountParticipacaoEquipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipacaoEquipeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Estudante
   */

  export type AggregateEstudante = {
    _count: EstudanteCountAggregateOutputType | null
    _avg: EstudanteAvgAggregateOutputType | null
    _sum: EstudanteSumAggregateOutputType | null
    _min: EstudanteMinAggregateOutputType | null
    _max: EstudanteMaxAggregateOutputType | null
  }

  export type EstudanteAvgAggregateOutputType = {
    id: number | null
  }

  export type EstudanteSumAggregateOutputType = {
    id: number | null
  }

  export type EstudanteMinAggregateOutputType = {
    id: number | null
    nomeCompleto: string | null
    turma: string | null
    curso: string | null
    numeroEstudante: string | null
    modalidade: string | null
    dataUtilizacao: Date | null
    horario: string | null
    periodo: string | null
    telefone: string | null
    status: string | null
  }

  export type EstudanteMaxAggregateOutputType = {
    id: number | null
    nomeCompleto: string | null
    turma: string | null
    curso: string | null
    numeroEstudante: string | null
    modalidade: string | null
    dataUtilizacao: Date | null
    horario: string | null
    periodo: string | null
    telefone: string | null
    status: string | null
  }

  export type EstudanteCountAggregateOutputType = {
    id: number
    nomeCompleto: number
    turma: number
    curso: number
    numeroEstudante: number
    modalidade: number
    dataUtilizacao: number
    horario: number
    periodo: number
    telefone: number
    status: number
    _all: number
  }


  export type EstudanteAvgAggregateInputType = {
    id?: true
  }

  export type EstudanteSumAggregateInputType = {
    id?: true
  }

  export type EstudanteMinAggregateInputType = {
    id?: true
    nomeCompleto?: true
    turma?: true
    curso?: true
    numeroEstudante?: true
    modalidade?: true
    dataUtilizacao?: true
    horario?: true
    periodo?: true
    telefone?: true
    status?: true
  }

  export type EstudanteMaxAggregateInputType = {
    id?: true
    nomeCompleto?: true
    turma?: true
    curso?: true
    numeroEstudante?: true
    modalidade?: true
    dataUtilizacao?: true
    horario?: true
    periodo?: true
    telefone?: true
    status?: true
  }

  export type EstudanteCountAggregateInputType = {
    id?: true
    nomeCompleto?: true
    turma?: true
    curso?: true
    numeroEstudante?: true
    modalidade?: true
    dataUtilizacao?: true
    horario?: true
    periodo?: true
    telefone?: true
    status?: true
    _all?: true
  }

  export type EstudanteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estudante to aggregate.
     */
    where?: EstudanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudantes to fetch.
     */
    orderBy?: EstudanteOrderByWithRelationInput | EstudanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstudanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estudantes
    **/
    _count?: true | EstudanteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstudanteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstudanteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstudanteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstudanteMaxAggregateInputType
  }

  export type GetEstudanteAggregateType<T extends EstudanteAggregateArgs> = {
        [P in keyof T & keyof AggregateEstudante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstudante[P]>
      : GetScalarType<T[P], AggregateEstudante[P]>
  }




  export type EstudanteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstudanteWhereInput
    orderBy?: EstudanteOrderByWithAggregationInput | EstudanteOrderByWithAggregationInput[]
    by: EstudanteScalarFieldEnum[] | EstudanteScalarFieldEnum
    having?: EstudanteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstudanteCountAggregateInputType | true
    _avg?: EstudanteAvgAggregateInputType
    _sum?: EstudanteSumAggregateInputType
    _min?: EstudanteMinAggregateInputType
    _max?: EstudanteMaxAggregateInputType
  }

  export type EstudanteGroupByOutputType = {
    id: number
    nomeCompleto: string
    turma: string
    curso: string
    numeroEstudante: string
    modalidade: string
    dataUtilizacao: Date
    horario: string
    periodo: string
    telefone: string
    status: string
    _count: EstudanteCountAggregateOutputType | null
    _avg: EstudanteAvgAggregateOutputType | null
    _sum: EstudanteSumAggregateOutputType | null
    _min: EstudanteMinAggregateOutputType | null
    _max: EstudanteMaxAggregateOutputType | null
  }

  type GetEstudanteGroupByPayload<T extends EstudanteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstudanteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstudanteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstudanteGroupByOutputType[P]>
            : GetScalarType<T[P], EstudanteGroupByOutputType[P]>
        }
      >
    >


  export type EstudanteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeCompleto?: boolean
    turma?: boolean
    curso?: boolean
    numeroEstudante?: boolean
    modalidade?: boolean
    dataUtilizacao?: boolean
    horario?: boolean
    periodo?: boolean
    telefone?: boolean
    status?: boolean
  }, ExtArgs["result"]["estudante"]>

  export type EstudanteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeCompleto?: boolean
    turma?: boolean
    curso?: boolean
    numeroEstudante?: boolean
    modalidade?: boolean
    dataUtilizacao?: boolean
    horario?: boolean
    periodo?: boolean
    telefone?: boolean
    status?: boolean
  }, ExtArgs["result"]["estudante"]>

  export type EstudanteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeCompleto?: boolean
    turma?: boolean
    curso?: boolean
    numeroEstudante?: boolean
    modalidade?: boolean
    dataUtilizacao?: boolean
    horario?: boolean
    periodo?: boolean
    telefone?: boolean
    status?: boolean
  }, ExtArgs["result"]["estudante"]>

  export type EstudanteSelectScalar = {
    id?: boolean
    nomeCompleto?: boolean
    turma?: boolean
    curso?: boolean
    numeroEstudante?: boolean
    modalidade?: boolean
    dataUtilizacao?: boolean
    horario?: boolean
    periodo?: boolean
    telefone?: boolean
    status?: boolean
  }

  export type EstudanteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeCompleto" | "turma" | "curso" | "numeroEstudante" | "modalidade" | "dataUtilizacao" | "horario" | "periodo" | "telefone" | "status", ExtArgs["result"]["estudante"]>

  export type $EstudantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estudante"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nomeCompleto: string
      turma: string
      curso: string
      numeroEstudante: string
      modalidade: string
      dataUtilizacao: Date
      horario: string
      periodo: string
      telefone: string
      status: string
    }, ExtArgs["result"]["estudante"]>
    composites: {}
  }

  type EstudanteGetPayload<S extends boolean | null | undefined | EstudanteDefaultArgs> = $Result.GetResult<Prisma.$EstudantePayload, S>

  type EstudanteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstudanteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstudanteCountAggregateInputType | true
    }

  export interface EstudanteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estudante'], meta: { name: 'Estudante' } }
    /**
     * Find zero or one Estudante that matches the filter.
     * @param {EstudanteFindUniqueArgs} args - Arguments to find a Estudante
     * @example
     * // Get one Estudante
     * const estudante = await prisma.estudante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstudanteFindUniqueArgs>(args: SelectSubset<T, EstudanteFindUniqueArgs<ExtArgs>>): Prisma__EstudanteClient<$Result.GetResult<Prisma.$EstudantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estudante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstudanteFindUniqueOrThrowArgs} args - Arguments to find a Estudante
     * @example
     * // Get one Estudante
     * const estudante = await prisma.estudante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstudanteFindUniqueOrThrowArgs>(args: SelectSubset<T, EstudanteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstudanteClient<$Result.GetResult<Prisma.$EstudantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estudante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudanteFindFirstArgs} args - Arguments to find a Estudante
     * @example
     * // Get one Estudante
     * const estudante = await prisma.estudante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstudanteFindFirstArgs>(args?: SelectSubset<T, EstudanteFindFirstArgs<ExtArgs>>): Prisma__EstudanteClient<$Result.GetResult<Prisma.$EstudantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estudante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudanteFindFirstOrThrowArgs} args - Arguments to find a Estudante
     * @example
     * // Get one Estudante
     * const estudante = await prisma.estudante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstudanteFindFirstOrThrowArgs>(args?: SelectSubset<T, EstudanteFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstudanteClient<$Result.GetResult<Prisma.$EstudantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estudantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudanteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estudantes
     * const estudantes = await prisma.estudante.findMany()
     * 
     * // Get first 10 Estudantes
     * const estudantes = await prisma.estudante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estudanteWithIdOnly = await prisma.estudante.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstudanteFindManyArgs>(args?: SelectSubset<T, EstudanteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estudante.
     * @param {EstudanteCreateArgs} args - Arguments to create a Estudante.
     * @example
     * // Create one Estudante
     * const Estudante = await prisma.estudante.create({
     *   data: {
     *     // ... data to create a Estudante
     *   }
     * })
     * 
     */
    create<T extends EstudanteCreateArgs>(args: SelectSubset<T, EstudanteCreateArgs<ExtArgs>>): Prisma__EstudanteClient<$Result.GetResult<Prisma.$EstudantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estudantes.
     * @param {EstudanteCreateManyArgs} args - Arguments to create many Estudantes.
     * @example
     * // Create many Estudantes
     * const estudante = await prisma.estudante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstudanteCreateManyArgs>(args?: SelectSubset<T, EstudanteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estudantes and returns the data saved in the database.
     * @param {EstudanteCreateManyAndReturnArgs} args - Arguments to create many Estudantes.
     * @example
     * // Create many Estudantes
     * const estudante = await prisma.estudante.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estudantes and only return the `id`
     * const estudanteWithIdOnly = await prisma.estudante.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstudanteCreateManyAndReturnArgs>(args?: SelectSubset<T, EstudanteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudantePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Estudante.
     * @param {EstudanteDeleteArgs} args - Arguments to delete one Estudante.
     * @example
     * // Delete one Estudante
     * const Estudante = await prisma.estudante.delete({
     *   where: {
     *     // ... filter to delete one Estudante
     *   }
     * })
     * 
     */
    delete<T extends EstudanteDeleteArgs>(args: SelectSubset<T, EstudanteDeleteArgs<ExtArgs>>): Prisma__EstudanteClient<$Result.GetResult<Prisma.$EstudantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estudante.
     * @param {EstudanteUpdateArgs} args - Arguments to update one Estudante.
     * @example
     * // Update one Estudante
     * const estudante = await prisma.estudante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstudanteUpdateArgs>(args: SelectSubset<T, EstudanteUpdateArgs<ExtArgs>>): Prisma__EstudanteClient<$Result.GetResult<Prisma.$EstudantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estudantes.
     * @param {EstudanteDeleteManyArgs} args - Arguments to filter Estudantes to delete.
     * @example
     * // Delete a few Estudantes
     * const { count } = await prisma.estudante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstudanteDeleteManyArgs>(args?: SelectSubset<T, EstudanteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estudantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudanteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estudantes
     * const estudante = await prisma.estudante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstudanteUpdateManyArgs>(args: SelectSubset<T, EstudanteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estudantes and returns the data updated in the database.
     * @param {EstudanteUpdateManyAndReturnArgs} args - Arguments to update many Estudantes.
     * @example
     * // Update many Estudantes
     * const estudante = await prisma.estudante.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Estudantes and only return the `id`
     * const estudanteWithIdOnly = await prisma.estudante.updateManyAndReturn({
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
    updateManyAndReturn<T extends EstudanteUpdateManyAndReturnArgs>(args: SelectSubset<T, EstudanteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudantePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Estudante.
     * @param {EstudanteUpsertArgs} args - Arguments to update or create a Estudante.
     * @example
     * // Update or create a Estudante
     * const estudante = await prisma.estudante.upsert({
     *   create: {
     *     // ... data to create a Estudante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estudante we want to update
     *   }
     * })
     */
    upsert<T extends EstudanteUpsertArgs>(args: SelectSubset<T, EstudanteUpsertArgs<ExtArgs>>): Prisma__EstudanteClient<$Result.GetResult<Prisma.$EstudantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estudantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudanteCountArgs} args - Arguments to filter Estudantes to count.
     * @example
     * // Count the number of Estudantes
     * const count = await prisma.estudante.count({
     *   where: {
     *     // ... the filter for the Estudantes we want to count
     *   }
     * })
    **/
    count<T extends EstudanteCountArgs>(
      args?: Subset<T, EstudanteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstudanteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estudante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudanteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstudanteAggregateArgs>(args: Subset<T, EstudanteAggregateArgs>): Prisma.PrismaPromise<GetEstudanteAggregateType<T>>

    /**
     * Group by Estudante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudanteGroupByArgs} args - Group by arguments.
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
      T extends EstudanteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstudanteGroupByArgs['orderBy'] }
        : { orderBy?: EstudanteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EstudanteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstudanteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estudante model
   */
  readonly fields: EstudanteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estudante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstudanteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Estudante model
   */
  interface EstudanteFieldRefs {
    readonly id: FieldRef<"Estudante", 'Int'>
    readonly nomeCompleto: FieldRef<"Estudante", 'String'>
    readonly turma: FieldRef<"Estudante", 'String'>
    readonly curso: FieldRef<"Estudante", 'String'>
    readonly numeroEstudante: FieldRef<"Estudante", 'String'>
    readonly modalidade: FieldRef<"Estudante", 'String'>
    readonly dataUtilizacao: FieldRef<"Estudante", 'DateTime'>
    readonly horario: FieldRef<"Estudante", 'String'>
    readonly periodo: FieldRef<"Estudante", 'String'>
    readonly telefone: FieldRef<"Estudante", 'String'>
    readonly status: FieldRef<"Estudante", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Estudante findUnique
   */
  export type EstudanteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudante
     */
    select?: EstudanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudante
     */
    omit?: EstudanteOmit<ExtArgs> | null
    /**
     * Filter, which Estudante to fetch.
     */
    where: EstudanteWhereUniqueInput
  }

  /**
   * Estudante findUniqueOrThrow
   */
  export type EstudanteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudante
     */
    select?: EstudanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudante
     */
    omit?: EstudanteOmit<ExtArgs> | null
    /**
     * Filter, which Estudante to fetch.
     */
    where: EstudanteWhereUniqueInput
  }

  /**
   * Estudante findFirst
   */
  export type EstudanteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudante
     */
    select?: EstudanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudante
     */
    omit?: EstudanteOmit<ExtArgs> | null
    /**
     * Filter, which Estudante to fetch.
     */
    where?: EstudanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudantes to fetch.
     */
    orderBy?: EstudanteOrderByWithRelationInput | EstudanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estudantes.
     */
    cursor?: EstudanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estudantes.
     */
    distinct?: EstudanteScalarFieldEnum | EstudanteScalarFieldEnum[]
  }

  /**
   * Estudante findFirstOrThrow
   */
  export type EstudanteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudante
     */
    select?: EstudanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudante
     */
    omit?: EstudanteOmit<ExtArgs> | null
    /**
     * Filter, which Estudante to fetch.
     */
    where?: EstudanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudantes to fetch.
     */
    orderBy?: EstudanteOrderByWithRelationInput | EstudanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estudantes.
     */
    cursor?: EstudanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estudantes.
     */
    distinct?: EstudanteScalarFieldEnum | EstudanteScalarFieldEnum[]
  }

  /**
   * Estudante findMany
   */
  export type EstudanteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudante
     */
    select?: EstudanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudante
     */
    omit?: EstudanteOmit<ExtArgs> | null
    /**
     * Filter, which Estudantes to fetch.
     */
    where?: EstudanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudantes to fetch.
     */
    orderBy?: EstudanteOrderByWithRelationInput | EstudanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estudantes.
     */
    cursor?: EstudanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudantes.
     */
    skip?: number
    distinct?: EstudanteScalarFieldEnum | EstudanteScalarFieldEnum[]
  }

  /**
   * Estudante create
   */
  export type EstudanteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudante
     */
    select?: EstudanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudante
     */
    omit?: EstudanteOmit<ExtArgs> | null
    /**
     * The data needed to create a Estudante.
     */
    data: XOR<EstudanteCreateInput, EstudanteUncheckedCreateInput>
  }

  /**
   * Estudante createMany
   */
  export type EstudanteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estudantes.
     */
    data: EstudanteCreateManyInput | EstudanteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estudante createManyAndReturn
   */
  export type EstudanteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudante
     */
    select?: EstudanteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estudante
     */
    omit?: EstudanteOmit<ExtArgs> | null
    /**
     * The data used to create many Estudantes.
     */
    data: EstudanteCreateManyInput | EstudanteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estudante update
   */
  export type EstudanteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudante
     */
    select?: EstudanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudante
     */
    omit?: EstudanteOmit<ExtArgs> | null
    /**
     * The data needed to update a Estudante.
     */
    data: XOR<EstudanteUpdateInput, EstudanteUncheckedUpdateInput>
    /**
     * Choose, which Estudante to update.
     */
    where: EstudanteWhereUniqueInput
  }

  /**
   * Estudante updateMany
   */
  export type EstudanteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estudantes.
     */
    data: XOR<EstudanteUpdateManyMutationInput, EstudanteUncheckedUpdateManyInput>
    /**
     * Filter which Estudantes to update
     */
    where?: EstudanteWhereInput
    /**
     * Limit how many Estudantes to update.
     */
    limit?: number
  }

  /**
   * Estudante updateManyAndReturn
   */
  export type EstudanteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudante
     */
    select?: EstudanteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estudante
     */
    omit?: EstudanteOmit<ExtArgs> | null
    /**
     * The data used to update Estudantes.
     */
    data: XOR<EstudanteUpdateManyMutationInput, EstudanteUncheckedUpdateManyInput>
    /**
     * Filter which Estudantes to update
     */
    where?: EstudanteWhereInput
    /**
     * Limit how many Estudantes to update.
     */
    limit?: number
  }

  /**
   * Estudante upsert
   */
  export type EstudanteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudante
     */
    select?: EstudanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudante
     */
    omit?: EstudanteOmit<ExtArgs> | null
    /**
     * The filter to search for the Estudante to update in case it exists.
     */
    where: EstudanteWhereUniqueInput
    /**
     * In case the Estudante found by the `where` argument doesn't exist, create a new Estudante with this data.
     */
    create: XOR<EstudanteCreateInput, EstudanteUncheckedCreateInput>
    /**
     * In case the Estudante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstudanteUpdateInput, EstudanteUncheckedUpdateInput>
  }

  /**
   * Estudante delete
   */
  export type EstudanteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudante
     */
    select?: EstudanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudante
     */
    omit?: EstudanteOmit<ExtArgs> | null
    /**
     * Filter which Estudante to delete.
     */
    where: EstudanteWhereUniqueInput
  }

  /**
   * Estudante deleteMany
   */
  export type EstudanteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estudantes to delete
     */
    where?: EstudanteWhereInput
    /**
     * Limit how many Estudantes to delete.
     */
    limit?: number
  }

  /**
   * Estudante without action
   */
  export type EstudanteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudante
     */
    select?: EstudanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudante
     */
    omit?: EstudanteOmit<ExtArgs> | null
  }


  /**
   * Model Externo
   */

  export type AggregateExterno = {
    _count: ExternoCountAggregateOutputType | null
    _avg: ExternoAvgAggregateOutputType | null
    _sum: ExternoSumAggregateOutputType | null
    _min: ExternoMinAggregateOutputType | null
    _max: ExternoMaxAggregateOutputType | null
  }

  export type ExternoAvgAggregateOutputType = {
    id: number | null
  }

  export type ExternoSumAggregateOutputType = {
    id: number | null
  }

  export type ExternoMinAggregateOutputType = {
    id: number | null
    nomeCompleto: string | null
    contacto: string | null
    email: string | null
    dataUtilizacao: Date | null
    horario: string | null
    periodo: string | null
    modalidade: string | null
    status: string | null
  }

  export type ExternoMaxAggregateOutputType = {
    id: number | null
    nomeCompleto: string | null
    contacto: string | null
    email: string | null
    dataUtilizacao: Date | null
    horario: string | null
    periodo: string | null
    modalidade: string | null
    status: string | null
  }

  export type ExternoCountAggregateOutputType = {
    id: number
    nomeCompleto: number
    contacto: number
    email: number
    dataUtilizacao: number
    horario: number
    periodo: number
    modalidade: number
    status: number
    _all: number
  }


  export type ExternoAvgAggregateInputType = {
    id?: true
  }

  export type ExternoSumAggregateInputType = {
    id?: true
  }

  export type ExternoMinAggregateInputType = {
    id?: true
    nomeCompleto?: true
    contacto?: true
    email?: true
    dataUtilizacao?: true
    horario?: true
    periodo?: true
    modalidade?: true
    status?: true
  }

  export type ExternoMaxAggregateInputType = {
    id?: true
    nomeCompleto?: true
    contacto?: true
    email?: true
    dataUtilizacao?: true
    horario?: true
    periodo?: true
    modalidade?: true
    status?: true
  }

  export type ExternoCountAggregateInputType = {
    id?: true
    nomeCompleto?: true
    contacto?: true
    email?: true
    dataUtilizacao?: true
    horario?: true
    periodo?: true
    modalidade?: true
    status?: true
    _all?: true
  }

  export type ExternoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Externo to aggregate.
     */
    where?: ExternoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Externos to fetch.
     */
    orderBy?: ExternoOrderByWithRelationInput | ExternoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExternoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Externos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Externos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Externos
    **/
    _count?: true | ExternoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExternoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExternoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExternoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExternoMaxAggregateInputType
  }

  export type GetExternoAggregateType<T extends ExternoAggregateArgs> = {
        [P in keyof T & keyof AggregateExterno]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExterno[P]>
      : GetScalarType<T[P], AggregateExterno[P]>
  }




  export type ExternoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExternoWhereInput
    orderBy?: ExternoOrderByWithAggregationInput | ExternoOrderByWithAggregationInput[]
    by: ExternoScalarFieldEnum[] | ExternoScalarFieldEnum
    having?: ExternoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExternoCountAggregateInputType | true
    _avg?: ExternoAvgAggregateInputType
    _sum?: ExternoSumAggregateInputType
    _min?: ExternoMinAggregateInputType
    _max?: ExternoMaxAggregateInputType
  }

  export type ExternoGroupByOutputType = {
    id: number
    nomeCompleto: string
    contacto: string
    email: string
    dataUtilizacao: Date
    horario: string
    periodo: string
    modalidade: string
    status: string
    _count: ExternoCountAggregateOutputType | null
    _avg: ExternoAvgAggregateOutputType | null
    _sum: ExternoSumAggregateOutputType | null
    _min: ExternoMinAggregateOutputType | null
    _max: ExternoMaxAggregateOutputType | null
  }

  type GetExternoGroupByPayload<T extends ExternoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExternoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExternoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExternoGroupByOutputType[P]>
            : GetScalarType<T[P], ExternoGroupByOutputType[P]>
        }
      >
    >


  export type ExternoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeCompleto?: boolean
    contacto?: boolean
    email?: boolean
    dataUtilizacao?: boolean
    horario?: boolean
    periodo?: boolean
    modalidade?: boolean
    status?: boolean
  }, ExtArgs["result"]["externo"]>

  export type ExternoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeCompleto?: boolean
    contacto?: boolean
    email?: boolean
    dataUtilizacao?: boolean
    horario?: boolean
    periodo?: boolean
    modalidade?: boolean
    status?: boolean
  }, ExtArgs["result"]["externo"]>

  export type ExternoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeCompleto?: boolean
    contacto?: boolean
    email?: boolean
    dataUtilizacao?: boolean
    horario?: boolean
    periodo?: boolean
    modalidade?: boolean
    status?: boolean
  }, ExtArgs["result"]["externo"]>

  export type ExternoSelectScalar = {
    id?: boolean
    nomeCompleto?: boolean
    contacto?: boolean
    email?: boolean
    dataUtilizacao?: boolean
    horario?: boolean
    periodo?: boolean
    modalidade?: boolean
    status?: boolean
  }

  export type ExternoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeCompleto" | "contacto" | "email" | "dataUtilizacao" | "horario" | "periodo" | "modalidade" | "status", ExtArgs["result"]["externo"]>

  export type $ExternoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Externo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nomeCompleto: string
      contacto: string
      email: string
      dataUtilizacao: Date
      horario: string
      periodo: string
      modalidade: string
      status: string
    }, ExtArgs["result"]["externo"]>
    composites: {}
  }

  type ExternoGetPayload<S extends boolean | null | undefined | ExternoDefaultArgs> = $Result.GetResult<Prisma.$ExternoPayload, S>

  type ExternoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExternoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExternoCountAggregateInputType | true
    }

  export interface ExternoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Externo'], meta: { name: 'Externo' } }
    /**
     * Find zero or one Externo that matches the filter.
     * @param {ExternoFindUniqueArgs} args - Arguments to find a Externo
     * @example
     * // Get one Externo
     * const externo = await prisma.externo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExternoFindUniqueArgs>(args: SelectSubset<T, ExternoFindUniqueArgs<ExtArgs>>): Prisma__ExternoClient<$Result.GetResult<Prisma.$ExternoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Externo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExternoFindUniqueOrThrowArgs} args - Arguments to find a Externo
     * @example
     * // Get one Externo
     * const externo = await prisma.externo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExternoFindUniqueOrThrowArgs>(args: SelectSubset<T, ExternoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExternoClient<$Result.GetResult<Prisma.$ExternoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Externo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternoFindFirstArgs} args - Arguments to find a Externo
     * @example
     * // Get one Externo
     * const externo = await prisma.externo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExternoFindFirstArgs>(args?: SelectSubset<T, ExternoFindFirstArgs<ExtArgs>>): Prisma__ExternoClient<$Result.GetResult<Prisma.$ExternoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Externo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternoFindFirstOrThrowArgs} args - Arguments to find a Externo
     * @example
     * // Get one Externo
     * const externo = await prisma.externo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExternoFindFirstOrThrowArgs>(args?: SelectSubset<T, ExternoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExternoClient<$Result.GetResult<Prisma.$ExternoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Externos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Externos
     * const externos = await prisma.externo.findMany()
     * 
     * // Get first 10 Externos
     * const externos = await prisma.externo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const externoWithIdOnly = await prisma.externo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExternoFindManyArgs>(args?: SelectSubset<T, ExternoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExternoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Externo.
     * @param {ExternoCreateArgs} args - Arguments to create a Externo.
     * @example
     * // Create one Externo
     * const Externo = await prisma.externo.create({
     *   data: {
     *     // ... data to create a Externo
     *   }
     * })
     * 
     */
    create<T extends ExternoCreateArgs>(args: SelectSubset<T, ExternoCreateArgs<ExtArgs>>): Prisma__ExternoClient<$Result.GetResult<Prisma.$ExternoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Externos.
     * @param {ExternoCreateManyArgs} args - Arguments to create many Externos.
     * @example
     * // Create many Externos
     * const externo = await prisma.externo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExternoCreateManyArgs>(args?: SelectSubset<T, ExternoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Externos and returns the data saved in the database.
     * @param {ExternoCreateManyAndReturnArgs} args - Arguments to create many Externos.
     * @example
     * // Create many Externos
     * const externo = await prisma.externo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Externos and only return the `id`
     * const externoWithIdOnly = await prisma.externo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExternoCreateManyAndReturnArgs>(args?: SelectSubset<T, ExternoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExternoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Externo.
     * @param {ExternoDeleteArgs} args - Arguments to delete one Externo.
     * @example
     * // Delete one Externo
     * const Externo = await prisma.externo.delete({
     *   where: {
     *     // ... filter to delete one Externo
     *   }
     * })
     * 
     */
    delete<T extends ExternoDeleteArgs>(args: SelectSubset<T, ExternoDeleteArgs<ExtArgs>>): Prisma__ExternoClient<$Result.GetResult<Prisma.$ExternoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Externo.
     * @param {ExternoUpdateArgs} args - Arguments to update one Externo.
     * @example
     * // Update one Externo
     * const externo = await prisma.externo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExternoUpdateArgs>(args: SelectSubset<T, ExternoUpdateArgs<ExtArgs>>): Prisma__ExternoClient<$Result.GetResult<Prisma.$ExternoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Externos.
     * @param {ExternoDeleteManyArgs} args - Arguments to filter Externos to delete.
     * @example
     * // Delete a few Externos
     * const { count } = await prisma.externo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExternoDeleteManyArgs>(args?: SelectSubset<T, ExternoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Externos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Externos
     * const externo = await prisma.externo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExternoUpdateManyArgs>(args: SelectSubset<T, ExternoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Externos and returns the data updated in the database.
     * @param {ExternoUpdateManyAndReturnArgs} args - Arguments to update many Externos.
     * @example
     * // Update many Externos
     * const externo = await prisma.externo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Externos and only return the `id`
     * const externoWithIdOnly = await prisma.externo.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExternoUpdateManyAndReturnArgs>(args: SelectSubset<T, ExternoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExternoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Externo.
     * @param {ExternoUpsertArgs} args - Arguments to update or create a Externo.
     * @example
     * // Update or create a Externo
     * const externo = await prisma.externo.upsert({
     *   create: {
     *     // ... data to create a Externo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Externo we want to update
     *   }
     * })
     */
    upsert<T extends ExternoUpsertArgs>(args: SelectSubset<T, ExternoUpsertArgs<ExtArgs>>): Prisma__ExternoClient<$Result.GetResult<Prisma.$ExternoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Externos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternoCountArgs} args - Arguments to filter Externos to count.
     * @example
     * // Count the number of Externos
     * const count = await prisma.externo.count({
     *   where: {
     *     // ... the filter for the Externos we want to count
     *   }
     * })
    **/
    count<T extends ExternoCountArgs>(
      args?: Subset<T, ExternoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExternoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Externo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExternoAggregateArgs>(args: Subset<T, ExternoAggregateArgs>): Prisma.PrismaPromise<GetExternoAggregateType<T>>

    /**
     * Group by Externo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternoGroupByArgs} args - Group by arguments.
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
      T extends ExternoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExternoGroupByArgs['orderBy'] }
        : { orderBy?: ExternoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExternoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExternoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Externo model
   */
  readonly fields: ExternoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Externo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExternoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Externo model
   */
  interface ExternoFieldRefs {
    readonly id: FieldRef<"Externo", 'Int'>
    readonly nomeCompleto: FieldRef<"Externo", 'String'>
    readonly contacto: FieldRef<"Externo", 'String'>
    readonly email: FieldRef<"Externo", 'String'>
    readonly dataUtilizacao: FieldRef<"Externo", 'DateTime'>
    readonly horario: FieldRef<"Externo", 'String'>
    readonly periodo: FieldRef<"Externo", 'String'>
    readonly modalidade: FieldRef<"Externo", 'String'>
    readonly status: FieldRef<"Externo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Externo findUnique
   */
  export type ExternoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Externo
     */
    select?: ExternoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Externo
     */
    omit?: ExternoOmit<ExtArgs> | null
    /**
     * Filter, which Externo to fetch.
     */
    where: ExternoWhereUniqueInput
  }

  /**
   * Externo findUniqueOrThrow
   */
  export type ExternoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Externo
     */
    select?: ExternoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Externo
     */
    omit?: ExternoOmit<ExtArgs> | null
    /**
     * Filter, which Externo to fetch.
     */
    where: ExternoWhereUniqueInput
  }

  /**
   * Externo findFirst
   */
  export type ExternoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Externo
     */
    select?: ExternoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Externo
     */
    omit?: ExternoOmit<ExtArgs> | null
    /**
     * Filter, which Externo to fetch.
     */
    where?: ExternoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Externos to fetch.
     */
    orderBy?: ExternoOrderByWithRelationInput | ExternoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Externos.
     */
    cursor?: ExternoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Externos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Externos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Externos.
     */
    distinct?: ExternoScalarFieldEnum | ExternoScalarFieldEnum[]
  }

  /**
   * Externo findFirstOrThrow
   */
  export type ExternoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Externo
     */
    select?: ExternoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Externo
     */
    omit?: ExternoOmit<ExtArgs> | null
    /**
     * Filter, which Externo to fetch.
     */
    where?: ExternoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Externos to fetch.
     */
    orderBy?: ExternoOrderByWithRelationInput | ExternoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Externos.
     */
    cursor?: ExternoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Externos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Externos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Externos.
     */
    distinct?: ExternoScalarFieldEnum | ExternoScalarFieldEnum[]
  }

  /**
   * Externo findMany
   */
  export type ExternoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Externo
     */
    select?: ExternoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Externo
     */
    omit?: ExternoOmit<ExtArgs> | null
    /**
     * Filter, which Externos to fetch.
     */
    where?: ExternoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Externos to fetch.
     */
    orderBy?: ExternoOrderByWithRelationInput | ExternoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Externos.
     */
    cursor?: ExternoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Externos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Externos.
     */
    skip?: number
    distinct?: ExternoScalarFieldEnum | ExternoScalarFieldEnum[]
  }

  /**
   * Externo create
   */
  export type ExternoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Externo
     */
    select?: ExternoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Externo
     */
    omit?: ExternoOmit<ExtArgs> | null
    /**
     * The data needed to create a Externo.
     */
    data: XOR<ExternoCreateInput, ExternoUncheckedCreateInput>
  }

  /**
   * Externo createMany
   */
  export type ExternoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Externos.
     */
    data: ExternoCreateManyInput | ExternoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Externo createManyAndReturn
   */
  export type ExternoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Externo
     */
    select?: ExternoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Externo
     */
    omit?: ExternoOmit<ExtArgs> | null
    /**
     * The data used to create many Externos.
     */
    data: ExternoCreateManyInput | ExternoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Externo update
   */
  export type ExternoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Externo
     */
    select?: ExternoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Externo
     */
    omit?: ExternoOmit<ExtArgs> | null
    /**
     * The data needed to update a Externo.
     */
    data: XOR<ExternoUpdateInput, ExternoUncheckedUpdateInput>
    /**
     * Choose, which Externo to update.
     */
    where: ExternoWhereUniqueInput
  }

  /**
   * Externo updateMany
   */
  export type ExternoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Externos.
     */
    data: XOR<ExternoUpdateManyMutationInput, ExternoUncheckedUpdateManyInput>
    /**
     * Filter which Externos to update
     */
    where?: ExternoWhereInput
    /**
     * Limit how many Externos to update.
     */
    limit?: number
  }

  /**
   * Externo updateManyAndReturn
   */
  export type ExternoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Externo
     */
    select?: ExternoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Externo
     */
    omit?: ExternoOmit<ExtArgs> | null
    /**
     * The data used to update Externos.
     */
    data: XOR<ExternoUpdateManyMutationInput, ExternoUncheckedUpdateManyInput>
    /**
     * Filter which Externos to update
     */
    where?: ExternoWhereInput
    /**
     * Limit how many Externos to update.
     */
    limit?: number
  }

  /**
   * Externo upsert
   */
  export type ExternoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Externo
     */
    select?: ExternoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Externo
     */
    omit?: ExternoOmit<ExtArgs> | null
    /**
     * The filter to search for the Externo to update in case it exists.
     */
    where: ExternoWhereUniqueInput
    /**
     * In case the Externo found by the `where` argument doesn't exist, create a new Externo with this data.
     */
    create: XOR<ExternoCreateInput, ExternoUncheckedCreateInput>
    /**
     * In case the Externo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExternoUpdateInput, ExternoUncheckedUpdateInput>
  }

  /**
   * Externo delete
   */
  export type ExternoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Externo
     */
    select?: ExternoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Externo
     */
    omit?: ExternoOmit<ExtArgs> | null
    /**
     * Filter which Externo to delete.
     */
    where: ExternoWhereUniqueInput
  }

  /**
   * Externo deleteMany
   */
  export type ExternoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Externos to delete
     */
    where?: ExternoWhereInput
    /**
     * Limit how many Externos to delete.
     */
    limit?: number
  }

  /**
   * Externo without action
   */
  export type ExternoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Externo
     */
    select?: ExternoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Externo
     */
    omit?: ExternoOmit<ExtArgs> | null
  }


  /**
   * Model Equipe
   */

  export type AggregateEquipe = {
    _count: EquipeCountAggregateOutputType | null
    _avg: EquipeAvgAggregateOutputType | null
    _sum: EquipeSumAggregateOutputType | null
    _min: EquipeMinAggregateOutputType | null
    _max: EquipeMaxAggregateOutputType | null
  }

  export type EquipeAvgAggregateOutputType = {
    id: number | null
  }

  export type EquipeSumAggregateOutputType = {
    id: number | null
  }

  export type EquipeMinAggregateOutputType = {
    id: number | null
    nome: string | null
    categoria: string | null
  }

  export type EquipeMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    categoria: string | null
  }

  export type EquipeCountAggregateOutputType = {
    id: number
    nome: number
    categoria: number
    _all: number
  }


  export type EquipeAvgAggregateInputType = {
    id?: true
  }

  export type EquipeSumAggregateInputType = {
    id?: true
  }

  export type EquipeMinAggregateInputType = {
    id?: true
    nome?: true
    categoria?: true
  }

  export type EquipeMaxAggregateInputType = {
    id?: true
    nome?: true
    categoria?: true
  }

  export type EquipeCountAggregateInputType = {
    id?: true
    nome?: true
    categoria?: true
    _all?: true
  }

  export type EquipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipe to aggregate.
     */
    where?: EquipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipes to fetch.
     */
    orderBy?: EquipeOrderByWithRelationInput | EquipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Equipes
    **/
    _count?: true | EquipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipeMaxAggregateInputType
  }

  export type GetEquipeAggregateType<T extends EquipeAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipe[P]>
      : GetScalarType<T[P], AggregateEquipe[P]>
  }




  export type EquipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipeWhereInput
    orderBy?: EquipeOrderByWithAggregationInput | EquipeOrderByWithAggregationInput[]
    by: EquipeScalarFieldEnum[] | EquipeScalarFieldEnum
    having?: EquipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipeCountAggregateInputType | true
    _avg?: EquipeAvgAggregateInputType
    _sum?: EquipeSumAggregateInputType
    _min?: EquipeMinAggregateInputType
    _max?: EquipeMaxAggregateInputType
  }

  export type EquipeGroupByOutputType = {
    id: number
    nome: string
    categoria: string
    _count: EquipeCountAggregateOutputType | null
    _avg: EquipeAvgAggregateOutputType | null
    _sum: EquipeSumAggregateOutputType | null
    _min: EquipeMinAggregateOutputType | null
    _max: EquipeMaxAggregateOutputType | null
  }

  type GetEquipeGroupByPayload<T extends EquipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipeGroupByOutputType[P]>
            : GetScalarType<T[P], EquipeGroupByOutputType[P]>
        }
      >
    >


  export type EquipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    categoria?: boolean
    Jogo_Jogo_equipaAIdToEquipe?: boolean | Equipe$Jogo_Jogo_equipaAIdToEquipeArgs<ExtArgs>
    Jogo_Jogo_equipaBIdToEquipe?: boolean | Equipe$Jogo_Jogo_equipaBIdToEquipeArgs<ExtArgs>
    ParticipacaoEquipe?: boolean | Equipe$ParticipacaoEquipeArgs<ExtArgs>
    _count?: boolean | EquipeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipe"]>

  export type EquipeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    categoria?: boolean
  }, ExtArgs["result"]["equipe"]>

  export type EquipeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    categoria?: boolean
  }, ExtArgs["result"]["equipe"]>

  export type EquipeSelectScalar = {
    id?: boolean
    nome?: boolean
    categoria?: boolean
  }

  export type EquipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "categoria", ExtArgs["result"]["equipe"]>
  export type EquipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Jogo_Jogo_equipaAIdToEquipe?: boolean | Equipe$Jogo_Jogo_equipaAIdToEquipeArgs<ExtArgs>
    Jogo_Jogo_equipaBIdToEquipe?: boolean | Equipe$Jogo_Jogo_equipaBIdToEquipeArgs<ExtArgs>
    ParticipacaoEquipe?: boolean | Equipe$ParticipacaoEquipeArgs<ExtArgs>
    _count?: boolean | EquipeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EquipeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EquipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipe"
    objects: {
      Jogo_Jogo_equipaAIdToEquipe: Prisma.$JogoPayload<ExtArgs>[]
      Jogo_Jogo_equipaBIdToEquipe: Prisma.$JogoPayload<ExtArgs>[]
      ParticipacaoEquipe: Prisma.$ParticipacaoEquipePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      categoria: string
    }, ExtArgs["result"]["equipe"]>
    composites: {}
  }

  type EquipeGetPayload<S extends boolean | null | undefined | EquipeDefaultArgs> = $Result.GetResult<Prisma.$EquipePayload, S>

  type EquipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipeCountAggregateInputType | true
    }

  export interface EquipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Equipe'], meta: { name: 'Equipe' } }
    /**
     * Find zero or one Equipe that matches the filter.
     * @param {EquipeFindUniqueArgs} args - Arguments to find a Equipe
     * @example
     * // Get one Equipe
     * const equipe = await prisma.equipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipeFindUniqueArgs>(args: SelectSubset<T, EquipeFindUniqueArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Equipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipeFindUniqueOrThrowArgs} args - Arguments to find a Equipe
     * @example
     * // Get one Equipe
     * const equipe = await prisma.equipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipeFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeFindFirstArgs} args - Arguments to find a Equipe
     * @example
     * // Get one Equipe
     * const equipe = await prisma.equipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipeFindFirstArgs>(args?: SelectSubset<T, EquipeFindFirstArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeFindFirstOrThrowArgs} args - Arguments to find a Equipe
     * @example
     * // Get one Equipe
     * const equipe = await prisma.equipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipeFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Equipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipes
     * const equipes = await prisma.equipe.findMany()
     * 
     * // Get first 10 Equipes
     * const equipes = await prisma.equipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipeWithIdOnly = await prisma.equipe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipeFindManyArgs>(args?: SelectSubset<T, EquipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Equipe.
     * @param {EquipeCreateArgs} args - Arguments to create a Equipe.
     * @example
     * // Create one Equipe
     * const Equipe = await prisma.equipe.create({
     *   data: {
     *     // ... data to create a Equipe
     *   }
     * })
     * 
     */
    create<T extends EquipeCreateArgs>(args: SelectSubset<T, EquipeCreateArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Equipes.
     * @param {EquipeCreateManyArgs} args - Arguments to create many Equipes.
     * @example
     * // Create many Equipes
     * const equipe = await prisma.equipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipeCreateManyArgs>(args?: SelectSubset<T, EquipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Equipes and returns the data saved in the database.
     * @param {EquipeCreateManyAndReturnArgs} args - Arguments to create many Equipes.
     * @example
     * // Create many Equipes
     * const equipe = await prisma.equipe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Equipes and only return the `id`
     * const equipeWithIdOnly = await prisma.equipe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipeCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Equipe.
     * @param {EquipeDeleteArgs} args - Arguments to delete one Equipe.
     * @example
     * // Delete one Equipe
     * const Equipe = await prisma.equipe.delete({
     *   where: {
     *     // ... filter to delete one Equipe
     *   }
     * })
     * 
     */
    delete<T extends EquipeDeleteArgs>(args: SelectSubset<T, EquipeDeleteArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Equipe.
     * @param {EquipeUpdateArgs} args - Arguments to update one Equipe.
     * @example
     * // Update one Equipe
     * const equipe = await prisma.equipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipeUpdateArgs>(args: SelectSubset<T, EquipeUpdateArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Equipes.
     * @param {EquipeDeleteManyArgs} args - Arguments to filter Equipes to delete.
     * @example
     * // Delete a few Equipes
     * const { count } = await prisma.equipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipeDeleteManyArgs>(args?: SelectSubset<T, EquipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipes
     * const equipe = await prisma.equipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipeUpdateManyArgs>(args: SelectSubset<T, EquipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipes and returns the data updated in the database.
     * @param {EquipeUpdateManyAndReturnArgs} args - Arguments to update many Equipes.
     * @example
     * // Update many Equipes
     * const equipe = await prisma.equipe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Equipes and only return the `id`
     * const equipeWithIdOnly = await prisma.equipe.updateManyAndReturn({
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
    updateManyAndReturn<T extends EquipeUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Equipe.
     * @param {EquipeUpsertArgs} args - Arguments to update or create a Equipe.
     * @example
     * // Update or create a Equipe
     * const equipe = await prisma.equipe.upsert({
     *   create: {
     *     // ... data to create a Equipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipe we want to update
     *   }
     * })
     */
    upsert<T extends EquipeUpsertArgs>(args: SelectSubset<T, EquipeUpsertArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Equipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeCountArgs} args - Arguments to filter Equipes to count.
     * @example
     * // Count the number of Equipes
     * const count = await prisma.equipe.count({
     *   where: {
     *     // ... the filter for the Equipes we want to count
     *   }
     * })
    **/
    count<T extends EquipeCountArgs>(
      args?: Subset<T, EquipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EquipeAggregateArgs>(args: Subset<T, EquipeAggregateArgs>): Prisma.PrismaPromise<GetEquipeAggregateType<T>>

    /**
     * Group by Equipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeGroupByArgs} args - Group by arguments.
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
      T extends EquipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipeGroupByArgs['orderBy'] }
        : { orderBy?: EquipeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EquipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Equipe model
   */
  readonly fields: EquipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Jogo_Jogo_equipaAIdToEquipe<T extends Equipe$Jogo_Jogo_equipaAIdToEquipeArgs<ExtArgs> = {}>(args?: Subset<T, Equipe$Jogo_Jogo_equipaAIdToEquipeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Jogo_Jogo_equipaBIdToEquipe<T extends Equipe$Jogo_Jogo_equipaBIdToEquipeArgs<ExtArgs> = {}>(args?: Subset<T, Equipe$Jogo_Jogo_equipaBIdToEquipeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ParticipacaoEquipe<T extends Equipe$ParticipacaoEquipeArgs<ExtArgs> = {}>(args?: Subset<T, Equipe$ParticipacaoEquipeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipacaoEquipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Equipe model
   */
  interface EquipeFieldRefs {
    readonly id: FieldRef<"Equipe", 'Int'>
    readonly nome: FieldRef<"Equipe", 'String'>
    readonly categoria: FieldRef<"Equipe", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Equipe findUnique
   */
  export type EquipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * Filter, which Equipe to fetch.
     */
    where: EquipeWhereUniqueInput
  }

  /**
   * Equipe findUniqueOrThrow
   */
  export type EquipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * Filter, which Equipe to fetch.
     */
    where: EquipeWhereUniqueInput
  }

  /**
   * Equipe findFirst
   */
  export type EquipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * Filter, which Equipe to fetch.
     */
    where?: EquipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipes to fetch.
     */
    orderBy?: EquipeOrderByWithRelationInput | EquipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipes.
     */
    cursor?: EquipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipes.
     */
    distinct?: EquipeScalarFieldEnum | EquipeScalarFieldEnum[]
  }

  /**
   * Equipe findFirstOrThrow
   */
  export type EquipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * Filter, which Equipe to fetch.
     */
    where?: EquipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipes to fetch.
     */
    orderBy?: EquipeOrderByWithRelationInput | EquipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipes.
     */
    cursor?: EquipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipes.
     */
    distinct?: EquipeScalarFieldEnum | EquipeScalarFieldEnum[]
  }

  /**
   * Equipe findMany
   */
  export type EquipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * Filter, which Equipes to fetch.
     */
    where?: EquipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipes to fetch.
     */
    orderBy?: EquipeOrderByWithRelationInput | EquipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipes.
     */
    cursor?: EquipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipes.
     */
    skip?: number
    distinct?: EquipeScalarFieldEnum | EquipeScalarFieldEnum[]
  }

  /**
   * Equipe create
   */
  export type EquipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * The data needed to create a Equipe.
     */
    data: XOR<EquipeCreateInput, EquipeUncheckedCreateInput>
  }

  /**
   * Equipe createMany
   */
  export type EquipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipes.
     */
    data: EquipeCreateManyInput | EquipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipe createManyAndReturn
   */
  export type EquipeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * The data used to create many Equipes.
     */
    data: EquipeCreateManyInput | EquipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipe update
   */
  export type EquipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * The data needed to update a Equipe.
     */
    data: XOR<EquipeUpdateInput, EquipeUncheckedUpdateInput>
    /**
     * Choose, which Equipe to update.
     */
    where: EquipeWhereUniqueInput
  }

  /**
   * Equipe updateMany
   */
  export type EquipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipes.
     */
    data: XOR<EquipeUpdateManyMutationInput, EquipeUncheckedUpdateManyInput>
    /**
     * Filter which Equipes to update
     */
    where?: EquipeWhereInput
    /**
     * Limit how many Equipes to update.
     */
    limit?: number
  }

  /**
   * Equipe updateManyAndReturn
   */
  export type EquipeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * The data used to update Equipes.
     */
    data: XOR<EquipeUpdateManyMutationInput, EquipeUncheckedUpdateManyInput>
    /**
     * Filter which Equipes to update
     */
    where?: EquipeWhereInput
    /**
     * Limit how many Equipes to update.
     */
    limit?: number
  }

  /**
   * Equipe upsert
   */
  export type EquipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * The filter to search for the Equipe to update in case it exists.
     */
    where: EquipeWhereUniqueInput
    /**
     * In case the Equipe found by the `where` argument doesn't exist, create a new Equipe with this data.
     */
    create: XOR<EquipeCreateInput, EquipeUncheckedCreateInput>
    /**
     * In case the Equipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipeUpdateInput, EquipeUncheckedUpdateInput>
  }

  /**
   * Equipe delete
   */
  export type EquipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * Filter which Equipe to delete.
     */
    where: EquipeWhereUniqueInput
  }

  /**
   * Equipe deleteMany
   */
  export type EquipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipes to delete
     */
    where?: EquipeWhereInput
    /**
     * Limit how many Equipes to delete.
     */
    limit?: number
  }

  /**
   * Equipe.Jogo_Jogo_equipaAIdToEquipe
   */
  export type Equipe$Jogo_Jogo_equipaAIdToEquipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    where?: JogoWhereInput
    orderBy?: JogoOrderByWithRelationInput | JogoOrderByWithRelationInput[]
    cursor?: JogoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JogoScalarFieldEnum | JogoScalarFieldEnum[]
  }

  /**
   * Equipe.Jogo_Jogo_equipaBIdToEquipe
   */
  export type Equipe$Jogo_Jogo_equipaBIdToEquipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    where?: JogoWhereInput
    orderBy?: JogoOrderByWithRelationInput | JogoOrderByWithRelationInput[]
    cursor?: JogoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JogoScalarFieldEnum | JogoScalarFieldEnum[]
  }

  /**
   * Equipe.ParticipacaoEquipe
   */
  export type Equipe$ParticipacaoEquipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipacaoEquipe
     */
    select?: ParticipacaoEquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipacaoEquipe
     */
    omit?: ParticipacaoEquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoEquipeInclude<ExtArgs> | null
    where?: ParticipacaoEquipeWhereInput
    orderBy?: ParticipacaoEquipeOrderByWithRelationInput | ParticipacaoEquipeOrderByWithRelationInput[]
    cursor?: ParticipacaoEquipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipacaoEquipeScalarFieldEnum | ParticipacaoEquipeScalarFieldEnum[]
  }

  /**
   * Equipe without action
   */
  export type EquipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
  }


  /**
   * Model Evento
   */

  export type AggregateEvento = {
    _count: EventoCountAggregateOutputType | null
    _avg: EventoAvgAggregateOutputType | null
    _sum: EventoSumAggregateOutputType | null
    _min: EventoMinAggregateOutputType | null
    _max: EventoMaxAggregateOutputType | null
  }

  export type EventoAvgAggregateOutputType = {
    id: number | null
  }

  export type EventoSumAggregateOutputType = {
    id: number | null
  }

  export type EventoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    contacto: string | null
    email: string | null
    tipoEvento: string | null
    dataInicio: Date | null
    dataFim: Date | null
    formato: string | null
    estado: string | null
    criadoEm: Date | null
  }

  export type EventoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    contacto: string | null
    email: string | null
    tipoEvento: string | null
    dataInicio: Date | null
    dataFim: Date | null
    formato: string | null
    estado: string | null
    criadoEm: Date | null
  }

  export type EventoCountAggregateOutputType = {
    id: number
    nome: number
    contacto: number
    email: number
    tipoEvento: number
    dataInicio: number
    dataFim: number
    formato: number
    estado: number
    criadoEm: number
    _all: number
  }


  export type EventoAvgAggregateInputType = {
    id?: true
  }

  export type EventoSumAggregateInputType = {
    id?: true
  }

  export type EventoMinAggregateInputType = {
    id?: true
    nome?: true
    contacto?: true
    email?: true
    tipoEvento?: true
    dataInicio?: true
    dataFim?: true
    formato?: true
    estado?: true
    criadoEm?: true
  }

  export type EventoMaxAggregateInputType = {
    id?: true
    nome?: true
    contacto?: true
    email?: true
    tipoEvento?: true
    dataInicio?: true
    dataFim?: true
    formato?: true
    estado?: true
    criadoEm?: true
  }

  export type EventoCountAggregateInputType = {
    id?: true
    nome?: true
    contacto?: true
    email?: true
    tipoEvento?: true
    dataInicio?: true
    dataFim?: true
    formato?: true
    estado?: true
    criadoEm?: true
    _all?: true
  }

  export type EventoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evento to aggregate.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Eventos
    **/
    _count?: true | EventoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventoMaxAggregateInputType
  }

  export type GetEventoAggregateType<T extends EventoAggregateArgs> = {
        [P in keyof T & keyof AggregateEvento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvento[P]>
      : GetScalarType<T[P], AggregateEvento[P]>
  }




  export type EventoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventoWhereInput
    orderBy?: EventoOrderByWithAggregationInput | EventoOrderByWithAggregationInput[]
    by: EventoScalarFieldEnum[] | EventoScalarFieldEnum
    having?: EventoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventoCountAggregateInputType | true
    _avg?: EventoAvgAggregateInputType
    _sum?: EventoSumAggregateInputType
    _min?: EventoMinAggregateInputType
    _max?: EventoMaxAggregateInputType
  }

  export type EventoGroupByOutputType = {
    id: number
    nome: string
    contacto: string
    email: string
    tipoEvento: string
    dataInicio: Date
    dataFim: Date
    formato: string
    estado: string
    criadoEm: Date
    _count: EventoCountAggregateOutputType | null
    _avg: EventoAvgAggregateOutputType | null
    _sum: EventoSumAggregateOutputType | null
    _min: EventoMinAggregateOutputType | null
    _max: EventoMaxAggregateOutputType | null
  }

  type GetEventoGroupByPayload<T extends EventoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventoGroupByOutputType[P]>
            : GetScalarType<T[P], EventoGroupByOutputType[P]>
        }
      >
    >


  export type EventoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    contacto?: boolean
    email?: boolean
    tipoEvento?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    formato?: boolean
    estado?: boolean
    criadoEm?: boolean
    Jogo?: boolean | Evento$JogoArgs<ExtArgs>
    Marcacao?: boolean | Evento$MarcacaoArgs<ExtArgs>
    ParticipacaoEquipe?: boolean | Evento$ParticipacaoEquipeArgs<ExtArgs>
    _count?: boolean | EventoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    contacto?: boolean
    email?: boolean
    tipoEvento?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    formato?: boolean
    estado?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    contacto?: boolean
    email?: boolean
    tipoEvento?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    formato?: boolean
    estado?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectScalar = {
    id?: boolean
    nome?: boolean
    contacto?: boolean
    email?: boolean
    tipoEvento?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    formato?: boolean
    estado?: boolean
    criadoEm?: boolean
  }

  export type EventoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "contacto" | "email" | "tipoEvento" | "dataInicio" | "dataFim" | "formato" | "estado" | "criadoEm", ExtArgs["result"]["evento"]>
  export type EventoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Jogo?: boolean | Evento$JogoArgs<ExtArgs>
    Marcacao?: boolean | Evento$MarcacaoArgs<ExtArgs>
    ParticipacaoEquipe?: boolean | Evento$ParticipacaoEquipeArgs<ExtArgs>
    _count?: boolean | EventoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EventoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Evento"
    objects: {
      Jogo: Prisma.$JogoPayload<ExtArgs>[]
      Marcacao: Prisma.$MarcacaoPayload<ExtArgs>[]
      ParticipacaoEquipe: Prisma.$ParticipacaoEquipePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      contacto: string
      email: string
      tipoEvento: string
      dataInicio: Date
      dataFim: Date
      formato: string
      estado: string
      criadoEm: Date
    }, ExtArgs["result"]["evento"]>
    composites: {}
  }

  type EventoGetPayload<S extends boolean | null | undefined | EventoDefaultArgs> = $Result.GetResult<Prisma.$EventoPayload, S>

  type EventoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventoCountAggregateInputType | true
    }

  export interface EventoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Evento'], meta: { name: 'Evento' } }
    /**
     * Find zero or one Evento that matches the filter.
     * @param {EventoFindUniqueArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventoFindUniqueArgs>(args: SelectSubset<T, EventoFindUniqueArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventoFindUniqueOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventoFindUniqueOrThrowArgs>(args: SelectSubset<T, EventoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindFirstArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventoFindFirstArgs>(args?: SelectSubset<T, EventoFindFirstArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindFirstOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventoFindFirstOrThrowArgs>(args?: SelectSubset<T, EventoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eventos
     * const eventos = await prisma.evento.findMany()
     * 
     * // Get first 10 Eventos
     * const eventos = await prisma.evento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventoWithIdOnly = await prisma.evento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventoFindManyArgs>(args?: SelectSubset<T, EventoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evento.
     * @param {EventoCreateArgs} args - Arguments to create a Evento.
     * @example
     * // Create one Evento
     * const Evento = await prisma.evento.create({
     *   data: {
     *     // ... data to create a Evento
     *   }
     * })
     * 
     */
    create<T extends EventoCreateArgs>(args: SelectSubset<T, EventoCreateArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eventos.
     * @param {EventoCreateManyArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const evento = await prisma.evento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventoCreateManyArgs>(args?: SelectSubset<T, EventoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Eventos and returns the data saved in the database.
     * @param {EventoCreateManyAndReturnArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const evento = await prisma.evento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Eventos and only return the `id`
     * const eventoWithIdOnly = await prisma.evento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventoCreateManyAndReturnArgs>(args?: SelectSubset<T, EventoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Evento.
     * @param {EventoDeleteArgs} args - Arguments to delete one Evento.
     * @example
     * // Delete one Evento
     * const Evento = await prisma.evento.delete({
     *   where: {
     *     // ... filter to delete one Evento
     *   }
     * })
     * 
     */
    delete<T extends EventoDeleteArgs>(args: SelectSubset<T, EventoDeleteArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evento.
     * @param {EventoUpdateArgs} args - Arguments to update one Evento.
     * @example
     * // Update one Evento
     * const evento = await prisma.evento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventoUpdateArgs>(args: SelectSubset<T, EventoUpdateArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eventos.
     * @param {EventoDeleteManyArgs} args - Arguments to filter Eventos to delete.
     * @example
     * // Delete a few Eventos
     * const { count } = await prisma.evento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventoDeleteManyArgs>(args?: SelectSubset<T, EventoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eventos
     * const evento = await prisma.evento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventoUpdateManyArgs>(args: SelectSubset<T, EventoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos and returns the data updated in the database.
     * @param {EventoUpdateManyAndReturnArgs} args - Arguments to update many Eventos.
     * @example
     * // Update many Eventos
     * const evento = await prisma.evento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Eventos and only return the `id`
     * const eventoWithIdOnly = await prisma.evento.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventoUpdateManyAndReturnArgs>(args: SelectSubset<T, EventoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Evento.
     * @param {EventoUpsertArgs} args - Arguments to update or create a Evento.
     * @example
     * // Update or create a Evento
     * const evento = await prisma.evento.upsert({
     *   create: {
     *     // ... data to create a Evento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evento we want to update
     *   }
     * })
     */
    upsert<T extends EventoUpsertArgs>(args: SelectSubset<T, EventoUpsertArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoCountArgs} args - Arguments to filter Eventos to count.
     * @example
     * // Count the number of Eventos
     * const count = await prisma.evento.count({
     *   where: {
     *     // ... the filter for the Eventos we want to count
     *   }
     * })
    **/
    count<T extends EventoCountArgs>(
      args?: Subset<T, EventoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventoAggregateArgs>(args: Subset<T, EventoAggregateArgs>): Prisma.PrismaPromise<GetEventoAggregateType<T>>

    /**
     * Group by Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoGroupByArgs} args - Group by arguments.
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
      T extends EventoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventoGroupByArgs['orderBy'] }
        : { orderBy?: EventoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Evento model
   */
  readonly fields: EventoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Jogo<T extends Evento$JogoArgs<ExtArgs> = {}>(args?: Subset<T, Evento$JogoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Marcacao<T extends Evento$MarcacaoArgs<ExtArgs> = {}>(args?: Subset<T, Evento$MarcacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarcacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ParticipacaoEquipe<T extends Evento$ParticipacaoEquipeArgs<ExtArgs> = {}>(args?: Subset<T, Evento$ParticipacaoEquipeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipacaoEquipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Evento model
   */
  interface EventoFieldRefs {
    readonly id: FieldRef<"Evento", 'Int'>
    readonly nome: FieldRef<"Evento", 'String'>
    readonly contacto: FieldRef<"Evento", 'String'>
    readonly email: FieldRef<"Evento", 'String'>
    readonly tipoEvento: FieldRef<"Evento", 'String'>
    readonly dataInicio: FieldRef<"Evento", 'DateTime'>
    readonly dataFim: FieldRef<"Evento", 'DateTime'>
    readonly formato: FieldRef<"Evento", 'String'>
    readonly estado: FieldRef<"Evento", 'String'>
    readonly criadoEm: FieldRef<"Evento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Evento findUnique
   */
  export type EventoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento findUniqueOrThrow
   */
  export type EventoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento findFirst
   */
  export type EventoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento findFirstOrThrow
   */
  export type EventoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento findMany
   */
  export type EventoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Eventos to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento create
   */
  export type EventoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The data needed to create a Evento.
     */
    data: XOR<EventoCreateInput, EventoUncheckedCreateInput>
  }

  /**
   * Evento createMany
   */
  export type EventoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Eventos.
     */
    data: EventoCreateManyInput | EventoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Evento createManyAndReturn
   */
  export type EventoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * The data used to create many Eventos.
     */
    data: EventoCreateManyInput | EventoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Evento update
   */
  export type EventoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The data needed to update a Evento.
     */
    data: XOR<EventoUpdateInput, EventoUncheckedUpdateInput>
    /**
     * Choose, which Evento to update.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento updateMany
   */
  export type EventoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Eventos.
     */
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyInput>
    /**
     * Filter which Eventos to update
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to update.
     */
    limit?: number
  }

  /**
   * Evento updateManyAndReturn
   */
  export type EventoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * The data used to update Eventos.
     */
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyInput>
    /**
     * Filter which Eventos to update
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to update.
     */
    limit?: number
  }

  /**
   * Evento upsert
   */
  export type EventoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The filter to search for the Evento to update in case it exists.
     */
    where: EventoWhereUniqueInput
    /**
     * In case the Evento found by the `where` argument doesn't exist, create a new Evento with this data.
     */
    create: XOR<EventoCreateInput, EventoUncheckedCreateInput>
    /**
     * In case the Evento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventoUpdateInput, EventoUncheckedUpdateInput>
  }

  /**
   * Evento delete
   */
  export type EventoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter which Evento to delete.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento deleteMany
   */
  export type EventoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Eventos to delete
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to delete.
     */
    limit?: number
  }

  /**
   * Evento.Jogo
   */
  export type Evento$JogoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    where?: JogoWhereInput
    orderBy?: JogoOrderByWithRelationInput | JogoOrderByWithRelationInput[]
    cursor?: JogoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JogoScalarFieldEnum | JogoScalarFieldEnum[]
  }

  /**
   * Evento.Marcacao
   */
  export type Evento$MarcacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marcacao
     */
    select?: MarcacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marcacao
     */
    omit?: MarcacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcacaoInclude<ExtArgs> | null
    where?: MarcacaoWhereInput
    orderBy?: MarcacaoOrderByWithRelationInput | MarcacaoOrderByWithRelationInput[]
    cursor?: MarcacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarcacaoScalarFieldEnum | MarcacaoScalarFieldEnum[]
  }

  /**
   * Evento.ParticipacaoEquipe
   */
  export type Evento$ParticipacaoEquipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipacaoEquipe
     */
    select?: ParticipacaoEquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipacaoEquipe
     */
    omit?: ParticipacaoEquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoEquipeInclude<ExtArgs> | null
    where?: ParticipacaoEquipeWhereInput
    orderBy?: ParticipacaoEquipeOrderByWithRelationInput | ParticipacaoEquipeOrderByWithRelationInput[]
    cursor?: ParticipacaoEquipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipacaoEquipeScalarFieldEnum | ParticipacaoEquipeScalarFieldEnum[]
  }

  /**
   * Evento without action
   */
  export type EventoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
  }


  /**
   * Model Jogo
   */

  export type AggregateJogo = {
    _count: JogoCountAggregateOutputType | null
    _avg: JogoAvgAggregateOutputType | null
    _sum: JogoSumAggregateOutputType | null
    _min: JogoMinAggregateOutputType | null
    _max: JogoMaxAggregateOutputType | null
  }

  export type JogoAvgAggregateOutputType = {
    id: number | null
    eventoId: number | null
    equipaAId: number | null
    equipaBId: number | null
  }

  export type JogoSumAggregateOutputType = {
    id: number | null
    eventoId: number | null
    equipaAId: number | null
    equipaBId: number | null
  }

  export type JogoMinAggregateOutputType = {
    id: number | null
    eventoId: number | null
    equipaAId: number | null
    equipaBId: number | null
    resultado: string | null
  }

  export type JogoMaxAggregateOutputType = {
    id: number | null
    eventoId: number | null
    equipaAId: number | null
    equipaBId: number | null
    resultado: string | null
  }

  export type JogoCountAggregateOutputType = {
    id: number
    eventoId: number
    equipaAId: number
    equipaBId: number
    resultado: number
    _all: number
  }


  export type JogoAvgAggregateInputType = {
    id?: true
    eventoId?: true
    equipaAId?: true
    equipaBId?: true
  }

  export type JogoSumAggregateInputType = {
    id?: true
    eventoId?: true
    equipaAId?: true
    equipaBId?: true
  }

  export type JogoMinAggregateInputType = {
    id?: true
    eventoId?: true
    equipaAId?: true
    equipaBId?: true
    resultado?: true
  }

  export type JogoMaxAggregateInputType = {
    id?: true
    eventoId?: true
    equipaAId?: true
    equipaBId?: true
    resultado?: true
  }

  export type JogoCountAggregateInputType = {
    id?: true
    eventoId?: true
    equipaAId?: true
    equipaBId?: true
    resultado?: true
    _all?: true
  }

  export type JogoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jogo to aggregate.
     */
    where?: JogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jogos to fetch.
     */
    orderBy?: JogoOrderByWithRelationInput | JogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jogos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jogos
    **/
    _count?: true | JogoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JogoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JogoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JogoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JogoMaxAggregateInputType
  }

  export type GetJogoAggregateType<T extends JogoAggregateArgs> = {
        [P in keyof T & keyof AggregateJogo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJogo[P]>
      : GetScalarType<T[P], AggregateJogo[P]>
  }




  export type JogoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JogoWhereInput
    orderBy?: JogoOrderByWithAggregationInput | JogoOrderByWithAggregationInput[]
    by: JogoScalarFieldEnum[] | JogoScalarFieldEnum
    having?: JogoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JogoCountAggregateInputType | true
    _avg?: JogoAvgAggregateInputType
    _sum?: JogoSumAggregateInputType
    _min?: JogoMinAggregateInputType
    _max?: JogoMaxAggregateInputType
  }

  export type JogoGroupByOutputType = {
    id: number
    eventoId: number
    equipaAId: number
    equipaBId: number
    resultado: string | null
    _count: JogoCountAggregateOutputType | null
    _avg: JogoAvgAggregateOutputType | null
    _sum: JogoSumAggregateOutputType | null
    _min: JogoMinAggregateOutputType | null
    _max: JogoMaxAggregateOutputType | null
  }

  type GetJogoGroupByPayload<T extends JogoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JogoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JogoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JogoGroupByOutputType[P]>
            : GetScalarType<T[P], JogoGroupByOutputType[P]>
        }
      >
    >


  export type JogoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventoId?: boolean
    equipaAId?: boolean
    equipaBId?: boolean
    resultado?: boolean
    Equipe_Jogo_equipaAIdToEquipe?: boolean | EquipeDefaultArgs<ExtArgs>
    Equipe_Jogo_equipaBIdToEquipe?: boolean | EquipeDefaultArgs<ExtArgs>
    Evento?: boolean | EventoDefaultArgs<ExtArgs>
    Marcacao?: boolean | Jogo$MarcacaoArgs<ExtArgs>
  }, ExtArgs["result"]["jogo"]>

  export type JogoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventoId?: boolean
    equipaAId?: boolean
    equipaBId?: boolean
    resultado?: boolean
    Equipe_Jogo_equipaAIdToEquipe?: boolean | EquipeDefaultArgs<ExtArgs>
    Equipe_Jogo_equipaBIdToEquipe?: boolean | EquipeDefaultArgs<ExtArgs>
    Evento?: boolean | EventoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jogo"]>

  export type JogoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventoId?: boolean
    equipaAId?: boolean
    equipaBId?: boolean
    resultado?: boolean
    Equipe_Jogo_equipaAIdToEquipe?: boolean | EquipeDefaultArgs<ExtArgs>
    Equipe_Jogo_equipaBIdToEquipe?: boolean | EquipeDefaultArgs<ExtArgs>
    Evento?: boolean | EventoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jogo"]>

  export type JogoSelectScalar = {
    id?: boolean
    eventoId?: boolean
    equipaAId?: boolean
    equipaBId?: boolean
    resultado?: boolean
  }

  export type JogoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventoId" | "equipaAId" | "equipaBId" | "resultado", ExtArgs["result"]["jogo"]>
  export type JogoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Equipe_Jogo_equipaAIdToEquipe?: boolean | EquipeDefaultArgs<ExtArgs>
    Equipe_Jogo_equipaBIdToEquipe?: boolean | EquipeDefaultArgs<ExtArgs>
    Evento?: boolean | EventoDefaultArgs<ExtArgs>
    Marcacao?: boolean | Jogo$MarcacaoArgs<ExtArgs>
  }
  export type JogoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Equipe_Jogo_equipaAIdToEquipe?: boolean | EquipeDefaultArgs<ExtArgs>
    Equipe_Jogo_equipaBIdToEquipe?: boolean | EquipeDefaultArgs<ExtArgs>
    Evento?: boolean | EventoDefaultArgs<ExtArgs>
  }
  export type JogoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Equipe_Jogo_equipaAIdToEquipe?: boolean | EquipeDefaultArgs<ExtArgs>
    Equipe_Jogo_equipaBIdToEquipe?: boolean | EquipeDefaultArgs<ExtArgs>
    Evento?: boolean | EventoDefaultArgs<ExtArgs>
  }

  export type $JogoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jogo"
    objects: {
      Equipe_Jogo_equipaAIdToEquipe: Prisma.$EquipePayload<ExtArgs>
      Equipe_Jogo_equipaBIdToEquipe: Prisma.$EquipePayload<ExtArgs>
      Evento: Prisma.$EventoPayload<ExtArgs>
      Marcacao: Prisma.$MarcacaoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      eventoId: number
      equipaAId: number
      equipaBId: number
      resultado: string | null
    }, ExtArgs["result"]["jogo"]>
    composites: {}
  }

  type JogoGetPayload<S extends boolean | null | undefined | JogoDefaultArgs> = $Result.GetResult<Prisma.$JogoPayload, S>

  type JogoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JogoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JogoCountAggregateInputType | true
    }

  export interface JogoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jogo'], meta: { name: 'Jogo' } }
    /**
     * Find zero or one Jogo that matches the filter.
     * @param {JogoFindUniqueArgs} args - Arguments to find a Jogo
     * @example
     * // Get one Jogo
     * const jogo = await prisma.jogo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JogoFindUniqueArgs>(args: SelectSubset<T, JogoFindUniqueArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jogo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JogoFindUniqueOrThrowArgs} args - Arguments to find a Jogo
     * @example
     * // Get one Jogo
     * const jogo = await prisma.jogo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JogoFindUniqueOrThrowArgs>(args: SelectSubset<T, JogoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jogo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoFindFirstArgs} args - Arguments to find a Jogo
     * @example
     * // Get one Jogo
     * const jogo = await prisma.jogo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JogoFindFirstArgs>(args?: SelectSubset<T, JogoFindFirstArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jogo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoFindFirstOrThrowArgs} args - Arguments to find a Jogo
     * @example
     * // Get one Jogo
     * const jogo = await prisma.jogo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JogoFindFirstOrThrowArgs>(args?: SelectSubset<T, JogoFindFirstOrThrowArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jogos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jogos
     * const jogos = await prisma.jogo.findMany()
     * 
     * // Get first 10 Jogos
     * const jogos = await prisma.jogo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jogoWithIdOnly = await prisma.jogo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JogoFindManyArgs>(args?: SelectSubset<T, JogoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jogo.
     * @param {JogoCreateArgs} args - Arguments to create a Jogo.
     * @example
     * // Create one Jogo
     * const Jogo = await prisma.jogo.create({
     *   data: {
     *     // ... data to create a Jogo
     *   }
     * })
     * 
     */
    create<T extends JogoCreateArgs>(args: SelectSubset<T, JogoCreateArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jogos.
     * @param {JogoCreateManyArgs} args - Arguments to create many Jogos.
     * @example
     * // Create many Jogos
     * const jogo = await prisma.jogo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JogoCreateManyArgs>(args?: SelectSubset<T, JogoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jogos and returns the data saved in the database.
     * @param {JogoCreateManyAndReturnArgs} args - Arguments to create many Jogos.
     * @example
     * // Create many Jogos
     * const jogo = await prisma.jogo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jogos and only return the `id`
     * const jogoWithIdOnly = await prisma.jogo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JogoCreateManyAndReturnArgs>(args?: SelectSubset<T, JogoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Jogo.
     * @param {JogoDeleteArgs} args - Arguments to delete one Jogo.
     * @example
     * // Delete one Jogo
     * const Jogo = await prisma.jogo.delete({
     *   where: {
     *     // ... filter to delete one Jogo
     *   }
     * })
     * 
     */
    delete<T extends JogoDeleteArgs>(args: SelectSubset<T, JogoDeleteArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jogo.
     * @param {JogoUpdateArgs} args - Arguments to update one Jogo.
     * @example
     * // Update one Jogo
     * const jogo = await prisma.jogo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JogoUpdateArgs>(args: SelectSubset<T, JogoUpdateArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jogos.
     * @param {JogoDeleteManyArgs} args - Arguments to filter Jogos to delete.
     * @example
     * // Delete a few Jogos
     * const { count } = await prisma.jogo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JogoDeleteManyArgs>(args?: SelectSubset<T, JogoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jogos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jogos
     * const jogo = await prisma.jogo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JogoUpdateManyArgs>(args: SelectSubset<T, JogoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jogos and returns the data updated in the database.
     * @param {JogoUpdateManyAndReturnArgs} args - Arguments to update many Jogos.
     * @example
     * // Update many Jogos
     * const jogo = await prisma.jogo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jogos and only return the `id`
     * const jogoWithIdOnly = await prisma.jogo.updateManyAndReturn({
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
    updateManyAndReturn<T extends JogoUpdateManyAndReturnArgs>(args: SelectSubset<T, JogoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Jogo.
     * @param {JogoUpsertArgs} args - Arguments to update or create a Jogo.
     * @example
     * // Update or create a Jogo
     * const jogo = await prisma.jogo.upsert({
     *   create: {
     *     // ... data to create a Jogo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jogo we want to update
     *   }
     * })
     */
    upsert<T extends JogoUpsertArgs>(args: SelectSubset<T, JogoUpsertArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jogos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoCountArgs} args - Arguments to filter Jogos to count.
     * @example
     * // Count the number of Jogos
     * const count = await prisma.jogo.count({
     *   where: {
     *     // ... the filter for the Jogos we want to count
     *   }
     * })
    **/
    count<T extends JogoCountArgs>(
      args?: Subset<T, JogoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JogoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jogo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JogoAggregateArgs>(args: Subset<T, JogoAggregateArgs>): Prisma.PrismaPromise<GetJogoAggregateType<T>>

    /**
     * Group by Jogo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoGroupByArgs} args - Group by arguments.
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
      T extends JogoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JogoGroupByArgs['orderBy'] }
        : { orderBy?: JogoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JogoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJogoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jogo model
   */
  readonly fields: JogoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jogo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JogoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Equipe_Jogo_equipaAIdToEquipe<T extends EquipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipeDefaultArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Equipe_Jogo_equipaBIdToEquipe<T extends EquipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipeDefaultArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Evento<T extends EventoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventoDefaultArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Marcacao<T extends Jogo$MarcacaoArgs<ExtArgs> = {}>(args?: Subset<T, Jogo$MarcacaoArgs<ExtArgs>>): Prisma__MarcacaoClient<$Result.GetResult<Prisma.$MarcacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Jogo model
   */
  interface JogoFieldRefs {
    readonly id: FieldRef<"Jogo", 'Int'>
    readonly eventoId: FieldRef<"Jogo", 'Int'>
    readonly equipaAId: FieldRef<"Jogo", 'Int'>
    readonly equipaBId: FieldRef<"Jogo", 'Int'>
    readonly resultado: FieldRef<"Jogo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Jogo findUnique
   */
  export type JogoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * Filter, which Jogo to fetch.
     */
    where: JogoWhereUniqueInput
  }

  /**
   * Jogo findUniqueOrThrow
   */
  export type JogoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * Filter, which Jogo to fetch.
     */
    where: JogoWhereUniqueInput
  }

  /**
   * Jogo findFirst
   */
  export type JogoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * Filter, which Jogo to fetch.
     */
    where?: JogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jogos to fetch.
     */
    orderBy?: JogoOrderByWithRelationInput | JogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jogos.
     */
    cursor?: JogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jogos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jogos.
     */
    distinct?: JogoScalarFieldEnum | JogoScalarFieldEnum[]
  }

  /**
   * Jogo findFirstOrThrow
   */
  export type JogoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * Filter, which Jogo to fetch.
     */
    where?: JogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jogos to fetch.
     */
    orderBy?: JogoOrderByWithRelationInput | JogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jogos.
     */
    cursor?: JogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jogos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jogos.
     */
    distinct?: JogoScalarFieldEnum | JogoScalarFieldEnum[]
  }

  /**
   * Jogo findMany
   */
  export type JogoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * Filter, which Jogos to fetch.
     */
    where?: JogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jogos to fetch.
     */
    orderBy?: JogoOrderByWithRelationInput | JogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jogos.
     */
    cursor?: JogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jogos.
     */
    skip?: number
    distinct?: JogoScalarFieldEnum | JogoScalarFieldEnum[]
  }

  /**
   * Jogo create
   */
  export type JogoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * The data needed to create a Jogo.
     */
    data: XOR<JogoCreateInput, JogoUncheckedCreateInput>
  }

  /**
   * Jogo createMany
   */
  export type JogoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jogos.
     */
    data: JogoCreateManyInput | JogoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jogo createManyAndReturn
   */
  export type JogoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * The data used to create many Jogos.
     */
    data: JogoCreateManyInput | JogoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Jogo update
   */
  export type JogoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * The data needed to update a Jogo.
     */
    data: XOR<JogoUpdateInput, JogoUncheckedUpdateInput>
    /**
     * Choose, which Jogo to update.
     */
    where: JogoWhereUniqueInput
  }

  /**
   * Jogo updateMany
   */
  export type JogoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jogos.
     */
    data: XOR<JogoUpdateManyMutationInput, JogoUncheckedUpdateManyInput>
    /**
     * Filter which Jogos to update
     */
    where?: JogoWhereInput
    /**
     * Limit how many Jogos to update.
     */
    limit?: number
  }

  /**
   * Jogo updateManyAndReturn
   */
  export type JogoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * The data used to update Jogos.
     */
    data: XOR<JogoUpdateManyMutationInput, JogoUncheckedUpdateManyInput>
    /**
     * Filter which Jogos to update
     */
    where?: JogoWhereInput
    /**
     * Limit how many Jogos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Jogo upsert
   */
  export type JogoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * The filter to search for the Jogo to update in case it exists.
     */
    where: JogoWhereUniqueInput
    /**
     * In case the Jogo found by the `where` argument doesn't exist, create a new Jogo with this data.
     */
    create: XOR<JogoCreateInput, JogoUncheckedCreateInput>
    /**
     * In case the Jogo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JogoUpdateInput, JogoUncheckedUpdateInput>
  }

  /**
   * Jogo delete
   */
  export type JogoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    /**
     * Filter which Jogo to delete.
     */
    where: JogoWhereUniqueInput
  }

  /**
   * Jogo deleteMany
   */
  export type JogoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jogos to delete
     */
    where?: JogoWhereInput
    /**
     * Limit how many Jogos to delete.
     */
    limit?: number
  }

  /**
   * Jogo.Marcacao
   */
  export type Jogo$MarcacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marcacao
     */
    select?: MarcacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marcacao
     */
    omit?: MarcacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcacaoInclude<ExtArgs> | null
    where?: MarcacaoWhereInput
  }

  /**
   * Jogo without action
   */
  export type JogoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
  }


  /**
   * Model Marcacao
   */

  export type AggregateMarcacao = {
    _count: MarcacaoCountAggregateOutputType | null
    _avg: MarcacaoAvgAggregateOutputType | null
    _sum: MarcacaoSumAggregateOutputType | null
    _min: MarcacaoMinAggregateOutputType | null
    _max: MarcacaoMaxAggregateOutputType | null
  }

  export type MarcacaoAvgAggregateOutputType = {
    id: number | null
    eventoId: number | null
    jogoId: number | null
  }

  export type MarcacaoSumAggregateOutputType = {
    id: number | null
    eventoId: number | null
    jogoId: number | null
  }

  export type MarcacaoMinAggregateOutputType = {
    id: number | null
    eventoId: number | null
    titulo: string | null
    tipo: string | null
    dataInicio: Date | null
    dataFim: Date | null
    jogoId: number | null
    criadoEm: Date | null
  }

  export type MarcacaoMaxAggregateOutputType = {
    id: number | null
    eventoId: number | null
    titulo: string | null
    tipo: string | null
    dataInicio: Date | null
    dataFim: Date | null
    jogoId: number | null
    criadoEm: Date | null
  }

  export type MarcacaoCountAggregateOutputType = {
    id: number
    eventoId: number
    titulo: number
    tipo: number
    dataInicio: number
    dataFim: number
    jogoId: number
    criadoEm: number
    _all: number
  }


  export type MarcacaoAvgAggregateInputType = {
    id?: true
    eventoId?: true
    jogoId?: true
  }

  export type MarcacaoSumAggregateInputType = {
    id?: true
    eventoId?: true
    jogoId?: true
  }

  export type MarcacaoMinAggregateInputType = {
    id?: true
    eventoId?: true
    titulo?: true
    tipo?: true
    dataInicio?: true
    dataFim?: true
    jogoId?: true
    criadoEm?: true
  }

  export type MarcacaoMaxAggregateInputType = {
    id?: true
    eventoId?: true
    titulo?: true
    tipo?: true
    dataInicio?: true
    dataFim?: true
    jogoId?: true
    criadoEm?: true
  }

  export type MarcacaoCountAggregateInputType = {
    id?: true
    eventoId?: true
    titulo?: true
    tipo?: true
    dataInicio?: true
    dataFim?: true
    jogoId?: true
    criadoEm?: true
    _all?: true
  }

  export type MarcacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Marcacao to aggregate.
     */
    where?: MarcacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marcacaos to fetch.
     */
    orderBy?: MarcacaoOrderByWithRelationInput | MarcacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarcacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marcacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marcacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Marcacaos
    **/
    _count?: true | MarcacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarcacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarcacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarcacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarcacaoMaxAggregateInputType
  }

  export type GetMarcacaoAggregateType<T extends MarcacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateMarcacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarcacao[P]>
      : GetScalarType<T[P], AggregateMarcacao[P]>
  }




  export type MarcacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarcacaoWhereInput
    orderBy?: MarcacaoOrderByWithAggregationInput | MarcacaoOrderByWithAggregationInput[]
    by: MarcacaoScalarFieldEnum[] | MarcacaoScalarFieldEnum
    having?: MarcacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarcacaoCountAggregateInputType | true
    _avg?: MarcacaoAvgAggregateInputType
    _sum?: MarcacaoSumAggregateInputType
    _min?: MarcacaoMinAggregateInputType
    _max?: MarcacaoMaxAggregateInputType
  }

  export type MarcacaoGroupByOutputType = {
    id: number
    eventoId: number
    titulo: string
    tipo: string
    dataInicio: Date
    dataFim: Date
    jogoId: number | null
    criadoEm: Date
    _count: MarcacaoCountAggregateOutputType | null
    _avg: MarcacaoAvgAggregateOutputType | null
    _sum: MarcacaoSumAggregateOutputType | null
    _min: MarcacaoMinAggregateOutputType | null
    _max: MarcacaoMaxAggregateOutputType | null
  }

  type GetMarcacaoGroupByPayload<T extends MarcacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarcacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarcacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarcacaoGroupByOutputType[P]>
            : GetScalarType<T[P], MarcacaoGroupByOutputType[P]>
        }
      >
    >


  export type MarcacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventoId?: boolean
    titulo?: boolean
    tipo?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    jogoId?: boolean
    criadoEm?: boolean
    Evento?: boolean | EventoDefaultArgs<ExtArgs>
    Jogo?: boolean | Marcacao$JogoArgs<ExtArgs>
  }, ExtArgs["result"]["marcacao"]>

  export type MarcacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventoId?: boolean
    titulo?: boolean
    tipo?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    jogoId?: boolean
    criadoEm?: boolean
    Evento?: boolean | EventoDefaultArgs<ExtArgs>
    Jogo?: boolean | Marcacao$JogoArgs<ExtArgs>
  }, ExtArgs["result"]["marcacao"]>

  export type MarcacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventoId?: boolean
    titulo?: boolean
    tipo?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    jogoId?: boolean
    criadoEm?: boolean
    Evento?: boolean | EventoDefaultArgs<ExtArgs>
    Jogo?: boolean | Marcacao$JogoArgs<ExtArgs>
  }, ExtArgs["result"]["marcacao"]>

  export type MarcacaoSelectScalar = {
    id?: boolean
    eventoId?: boolean
    titulo?: boolean
    tipo?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    jogoId?: boolean
    criadoEm?: boolean
  }

  export type MarcacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventoId" | "titulo" | "tipo" | "dataInicio" | "dataFim" | "jogoId" | "criadoEm", ExtArgs["result"]["marcacao"]>
  export type MarcacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Evento?: boolean | EventoDefaultArgs<ExtArgs>
    Jogo?: boolean | Marcacao$JogoArgs<ExtArgs>
  }
  export type MarcacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Evento?: boolean | EventoDefaultArgs<ExtArgs>
    Jogo?: boolean | Marcacao$JogoArgs<ExtArgs>
  }
  export type MarcacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Evento?: boolean | EventoDefaultArgs<ExtArgs>
    Jogo?: boolean | Marcacao$JogoArgs<ExtArgs>
  }

  export type $MarcacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Marcacao"
    objects: {
      Evento: Prisma.$EventoPayload<ExtArgs>
      Jogo: Prisma.$JogoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      eventoId: number
      titulo: string
      tipo: string
      dataInicio: Date
      dataFim: Date
      jogoId: number | null
      criadoEm: Date
    }, ExtArgs["result"]["marcacao"]>
    composites: {}
  }

  type MarcacaoGetPayload<S extends boolean | null | undefined | MarcacaoDefaultArgs> = $Result.GetResult<Prisma.$MarcacaoPayload, S>

  type MarcacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarcacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarcacaoCountAggregateInputType | true
    }

  export interface MarcacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Marcacao'], meta: { name: 'Marcacao' } }
    /**
     * Find zero or one Marcacao that matches the filter.
     * @param {MarcacaoFindUniqueArgs} args - Arguments to find a Marcacao
     * @example
     * // Get one Marcacao
     * const marcacao = await prisma.marcacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarcacaoFindUniqueArgs>(args: SelectSubset<T, MarcacaoFindUniqueArgs<ExtArgs>>): Prisma__MarcacaoClient<$Result.GetResult<Prisma.$MarcacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Marcacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarcacaoFindUniqueOrThrowArgs} args - Arguments to find a Marcacao
     * @example
     * // Get one Marcacao
     * const marcacao = await prisma.marcacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarcacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, MarcacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarcacaoClient<$Result.GetResult<Prisma.$MarcacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Marcacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcacaoFindFirstArgs} args - Arguments to find a Marcacao
     * @example
     * // Get one Marcacao
     * const marcacao = await prisma.marcacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarcacaoFindFirstArgs>(args?: SelectSubset<T, MarcacaoFindFirstArgs<ExtArgs>>): Prisma__MarcacaoClient<$Result.GetResult<Prisma.$MarcacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Marcacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcacaoFindFirstOrThrowArgs} args - Arguments to find a Marcacao
     * @example
     * // Get one Marcacao
     * const marcacao = await prisma.marcacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarcacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, MarcacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarcacaoClient<$Result.GetResult<Prisma.$MarcacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Marcacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Marcacaos
     * const marcacaos = await prisma.marcacao.findMany()
     * 
     * // Get first 10 Marcacaos
     * const marcacaos = await prisma.marcacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marcacaoWithIdOnly = await prisma.marcacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarcacaoFindManyArgs>(args?: SelectSubset<T, MarcacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarcacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Marcacao.
     * @param {MarcacaoCreateArgs} args - Arguments to create a Marcacao.
     * @example
     * // Create one Marcacao
     * const Marcacao = await prisma.marcacao.create({
     *   data: {
     *     // ... data to create a Marcacao
     *   }
     * })
     * 
     */
    create<T extends MarcacaoCreateArgs>(args: SelectSubset<T, MarcacaoCreateArgs<ExtArgs>>): Prisma__MarcacaoClient<$Result.GetResult<Prisma.$MarcacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Marcacaos.
     * @param {MarcacaoCreateManyArgs} args - Arguments to create many Marcacaos.
     * @example
     * // Create many Marcacaos
     * const marcacao = await prisma.marcacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarcacaoCreateManyArgs>(args?: SelectSubset<T, MarcacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Marcacaos and returns the data saved in the database.
     * @param {MarcacaoCreateManyAndReturnArgs} args - Arguments to create many Marcacaos.
     * @example
     * // Create many Marcacaos
     * const marcacao = await prisma.marcacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Marcacaos and only return the `id`
     * const marcacaoWithIdOnly = await prisma.marcacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarcacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, MarcacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarcacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Marcacao.
     * @param {MarcacaoDeleteArgs} args - Arguments to delete one Marcacao.
     * @example
     * // Delete one Marcacao
     * const Marcacao = await prisma.marcacao.delete({
     *   where: {
     *     // ... filter to delete one Marcacao
     *   }
     * })
     * 
     */
    delete<T extends MarcacaoDeleteArgs>(args: SelectSubset<T, MarcacaoDeleteArgs<ExtArgs>>): Prisma__MarcacaoClient<$Result.GetResult<Prisma.$MarcacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Marcacao.
     * @param {MarcacaoUpdateArgs} args - Arguments to update one Marcacao.
     * @example
     * // Update one Marcacao
     * const marcacao = await prisma.marcacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarcacaoUpdateArgs>(args: SelectSubset<T, MarcacaoUpdateArgs<ExtArgs>>): Prisma__MarcacaoClient<$Result.GetResult<Prisma.$MarcacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Marcacaos.
     * @param {MarcacaoDeleteManyArgs} args - Arguments to filter Marcacaos to delete.
     * @example
     * // Delete a few Marcacaos
     * const { count } = await prisma.marcacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarcacaoDeleteManyArgs>(args?: SelectSubset<T, MarcacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marcacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Marcacaos
     * const marcacao = await prisma.marcacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarcacaoUpdateManyArgs>(args: SelectSubset<T, MarcacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marcacaos and returns the data updated in the database.
     * @param {MarcacaoUpdateManyAndReturnArgs} args - Arguments to update many Marcacaos.
     * @example
     * // Update many Marcacaos
     * const marcacao = await prisma.marcacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Marcacaos and only return the `id`
     * const marcacaoWithIdOnly = await prisma.marcacao.updateManyAndReturn({
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
    updateManyAndReturn<T extends MarcacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, MarcacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarcacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Marcacao.
     * @param {MarcacaoUpsertArgs} args - Arguments to update or create a Marcacao.
     * @example
     * // Update or create a Marcacao
     * const marcacao = await prisma.marcacao.upsert({
     *   create: {
     *     // ... data to create a Marcacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Marcacao we want to update
     *   }
     * })
     */
    upsert<T extends MarcacaoUpsertArgs>(args: SelectSubset<T, MarcacaoUpsertArgs<ExtArgs>>): Prisma__MarcacaoClient<$Result.GetResult<Prisma.$MarcacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Marcacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcacaoCountArgs} args - Arguments to filter Marcacaos to count.
     * @example
     * // Count the number of Marcacaos
     * const count = await prisma.marcacao.count({
     *   where: {
     *     // ... the filter for the Marcacaos we want to count
     *   }
     * })
    **/
    count<T extends MarcacaoCountArgs>(
      args?: Subset<T, MarcacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarcacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Marcacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarcacaoAggregateArgs>(args: Subset<T, MarcacaoAggregateArgs>): Prisma.PrismaPromise<GetMarcacaoAggregateType<T>>

    /**
     * Group by Marcacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcacaoGroupByArgs} args - Group by arguments.
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
      T extends MarcacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarcacaoGroupByArgs['orderBy'] }
        : { orderBy?: MarcacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarcacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarcacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Marcacao model
   */
  readonly fields: MarcacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Marcacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarcacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Evento<T extends EventoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventoDefaultArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Jogo<T extends Marcacao$JogoArgs<ExtArgs> = {}>(args?: Subset<T, Marcacao$JogoArgs<ExtArgs>>): Prisma__JogoClient<$Result.GetResult<Prisma.$JogoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Marcacao model
   */
  interface MarcacaoFieldRefs {
    readonly id: FieldRef<"Marcacao", 'Int'>
    readonly eventoId: FieldRef<"Marcacao", 'Int'>
    readonly titulo: FieldRef<"Marcacao", 'String'>
    readonly tipo: FieldRef<"Marcacao", 'String'>
    readonly dataInicio: FieldRef<"Marcacao", 'DateTime'>
    readonly dataFim: FieldRef<"Marcacao", 'DateTime'>
    readonly jogoId: FieldRef<"Marcacao", 'Int'>
    readonly criadoEm: FieldRef<"Marcacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Marcacao findUnique
   */
  export type MarcacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marcacao
     */
    select?: MarcacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marcacao
     */
    omit?: MarcacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcacaoInclude<ExtArgs> | null
    /**
     * Filter, which Marcacao to fetch.
     */
    where: MarcacaoWhereUniqueInput
  }

  /**
   * Marcacao findUniqueOrThrow
   */
  export type MarcacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marcacao
     */
    select?: MarcacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marcacao
     */
    omit?: MarcacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcacaoInclude<ExtArgs> | null
    /**
     * Filter, which Marcacao to fetch.
     */
    where: MarcacaoWhereUniqueInput
  }

  /**
   * Marcacao findFirst
   */
  export type MarcacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marcacao
     */
    select?: MarcacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marcacao
     */
    omit?: MarcacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcacaoInclude<ExtArgs> | null
    /**
     * Filter, which Marcacao to fetch.
     */
    where?: MarcacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marcacaos to fetch.
     */
    orderBy?: MarcacaoOrderByWithRelationInput | MarcacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Marcacaos.
     */
    cursor?: MarcacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marcacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marcacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marcacaos.
     */
    distinct?: MarcacaoScalarFieldEnum | MarcacaoScalarFieldEnum[]
  }

  /**
   * Marcacao findFirstOrThrow
   */
  export type MarcacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marcacao
     */
    select?: MarcacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marcacao
     */
    omit?: MarcacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcacaoInclude<ExtArgs> | null
    /**
     * Filter, which Marcacao to fetch.
     */
    where?: MarcacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marcacaos to fetch.
     */
    orderBy?: MarcacaoOrderByWithRelationInput | MarcacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Marcacaos.
     */
    cursor?: MarcacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marcacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marcacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marcacaos.
     */
    distinct?: MarcacaoScalarFieldEnum | MarcacaoScalarFieldEnum[]
  }

  /**
   * Marcacao findMany
   */
  export type MarcacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marcacao
     */
    select?: MarcacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marcacao
     */
    omit?: MarcacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcacaoInclude<ExtArgs> | null
    /**
     * Filter, which Marcacaos to fetch.
     */
    where?: MarcacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marcacaos to fetch.
     */
    orderBy?: MarcacaoOrderByWithRelationInput | MarcacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Marcacaos.
     */
    cursor?: MarcacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marcacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marcacaos.
     */
    skip?: number
    distinct?: MarcacaoScalarFieldEnum | MarcacaoScalarFieldEnum[]
  }

  /**
   * Marcacao create
   */
  export type MarcacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marcacao
     */
    select?: MarcacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marcacao
     */
    omit?: MarcacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Marcacao.
     */
    data: XOR<MarcacaoCreateInput, MarcacaoUncheckedCreateInput>
  }

  /**
   * Marcacao createMany
   */
  export type MarcacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Marcacaos.
     */
    data: MarcacaoCreateManyInput | MarcacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Marcacao createManyAndReturn
   */
  export type MarcacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marcacao
     */
    select?: MarcacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Marcacao
     */
    omit?: MarcacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Marcacaos.
     */
    data: MarcacaoCreateManyInput | MarcacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Marcacao update
   */
  export type MarcacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marcacao
     */
    select?: MarcacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marcacao
     */
    omit?: MarcacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Marcacao.
     */
    data: XOR<MarcacaoUpdateInput, MarcacaoUncheckedUpdateInput>
    /**
     * Choose, which Marcacao to update.
     */
    where: MarcacaoWhereUniqueInput
  }

  /**
   * Marcacao updateMany
   */
  export type MarcacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Marcacaos.
     */
    data: XOR<MarcacaoUpdateManyMutationInput, MarcacaoUncheckedUpdateManyInput>
    /**
     * Filter which Marcacaos to update
     */
    where?: MarcacaoWhereInput
    /**
     * Limit how many Marcacaos to update.
     */
    limit?: number
  }

  /**
   * Marcacao updateManyAndReturn
   */
  export type MarcacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marcacao
     */
    select?: MarcacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Marcacao
     */
    omit?: MarcacaoOmit<ExtArgs> | null
    /**
     * The data used to update Marcacaos.
     */
    data: XOR<MarcacaoUpdateManyMutationInput, MarcacaoUncheckedUpdateManyInput>
    /**
     * Filter which Marcacaos to update
     */
    where?: MarcacaoWhereInput
    /**
     * Limit how many Marcacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Marcacao upsert
   */
  export type MarcacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marcacao
     */
    select?: MarcacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marcacao
     */
    omit?: MarcacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Marcacao to update in case it exists.
     */
    where: MarcacaoWhereUniqueInput
    /**
     * In case the Marcacao found by the `where` argument doesn't exist, create a new Marcacao with this data.
     */
    create: XOR<MarcacaoCreateInput, MarcacaoUncheckedCreateInput>
    /**
     * In case the Marcacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarcacaoUpdateInput, MarcacaoUncheckedUpdateInput>
  }

  /**
   * Marcacao delete
   */
  export type MarcacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marcacao
     */
    select?: MarcacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marcacao
     */
    omit?: MarcacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcacaoInclude<ExtArgs> | null
    /**
     * Filter which Marcacao to delete.
     */
    where: MarcacaoWhereUniqueInput
  }

  /**
   * Marcacao deleteMany
   */
  export type MarcacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Marcacaos to delete
     */
    where?: MarcacaoWhereInput
    /**
     * Limit how many Marcacaos to delete.
     */
    limit?: number
  }

  /**
   * Marcacao.Jogo
   */
  export type Marcacao$JogoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jogo
     */
    select?: JogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jogo
     */
    omit?: JogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoInclude<ExtArgs> | null
    where?: JogoWhereInput
  }

  /**
   * Marcacao without action
   */
  export type MarcacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marcacao
     */
    select?: MarcacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marcacao
     */
    omit?: MarcacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarcacaoInclude<ExtArgs> | null
  }


  /**
   * Model ParticipacaoEquipe
   */

  export type AggregateParticipacaoEquipe = {
    _count: ParticipacaoEquipeCountAggregateOutputType | null
    _avg: ParticipacaoEquipeAvgAggregateOutputType | null
    _sum: ParticipacaoEquipeSumAggregateOutputType | null
    _min: ParticipacaoEquipeMinAggregateOutputType | null
    _max: ParticipacaoEquipeMaxAggregateOutputType | null
  }

  export type ParticipacaoEquipeAvgAggregateOutputType = {
    id: number | null
    eventoId: number | null
    equipeId: number | null
  }

  export type ParticipacaoEquipeSumAggregateOutputType = {
    id: number | null
    eventoId: number | null
    equipeId: number | null
  }

  export type ParticipacaoEquipeMinAggregateOutputType = {
    id: number | null
    eventoId: number | null
    equipeId: number | null
  }

  export type ParticipacaoEquipeMaxAggregateOutputType = {
    id: number | null
    eventoId: number | null
    equipeId: number | null
  }

  export type ParticipacaoEquipeCountAggregateOutputType = {
    id: number
    eventoId: number
    equipeId: number
    _all: number
  }


  export type ParticipacaoEquipeAvgAggregateInputType = {
    id?: true
    eventoId?: true
    equipeId?: true
  }

  export type ParticipacaoEquipeSumAggregateInputType = {
    id?: true
    eventoId?: true
    equipeId?: true
  }

  export type ParticipacaoEquipeMinAggregateInputType = {
    id?: true
    eventoId?: true
    equipeId?: true
  }

  export type ParticipacaoEquipeMaxAggregateInputType = {
    id?: true
    eventoId?: true
    equipeId?: true
  }

  export type ParticipacaoEquipeCountAggregateInputType = {
    id?: true
    eventoId?: true
    equipeId?: true
    _all?: true
  }

  export type ParticipacaoEquipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParticipacaoEquipe to aggregate.
     */
    where?: ParticipacaoEquipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipacaoEquipes to fetch.
     */
    orderBy?: ParticipacaoEquipeOrderByWithRelationInput | ParticipacaoEquipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipacaoEquipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipacaoEquipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipacaoEquipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParticipacaoEquipes
    **/
    _count?: true | ParticipacaoEquipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticipacaoEquipeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticipacaoEquipeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipacaoEquipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipacaoEquipeMaxAggregateInputType
  }

  export type GetParticipacaoEquipeAggregateType<T extends ParticipacaoEquipeAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipacaoEquipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipacaoEquipe[P]>
      : GetScalarType<T[P], AggregateParticipacaoEquipe[P]>
  }




  export type ParticipacaoEquipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipacaoEquipeWhereInput
    orderBy?: ParticipacaoEquipeOrderByWithAggregationInput | ParticipacaoEquipeOrderByWithAggregationInput[]
    by: ParticipacaoEquipeScalarFieldEnum[] | ParticipacaoEquipeScalarFieldEnum
    having?: ParticipacaoEquipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipacaoEquipeCountAggregateInputType | true
    _avg?: ParticipacaoEquipeAvgAggregateInputType
    _sum?: ParticipacaoEquipeSumAggregateInputType
    _min?: ParticipacaoEquipeMinAggregateInputType
    _max?: ParticipacaoEquipeMaxAggregateInputType
  }

  export type ParticipacaoEquipeGroupByOutputType = {
    id: number
    eventoId: number
    equipeId: number
    _count: ParticipacaoEquipeCountAggregateOutputType | null
    _avg: ParticipacaoEquipeAvgAggregateOutputType | null
    _sum: ParticipacaoEquipeSumAggregateOutputType | null
    _min: ParticipacaoEquipeMinAggregateOutputType | null
    _max: ParticipacaoEquipeMaxAggregateOutputType | null
  }

  type GetParticipacaoEquipeGroupByPayload<T extends ParticipacaoEquipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipacaoEquipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipacaoEquipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipacaoEquipeGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipacaoEquipeGroupByOutputType[P]>
        }
      >
    >


  export type ParticipacaoEquipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventoId?: boolean
    equipeId?: boolean
    Equipe?: boolean | EquipeDefaultArgs<ExtArgs>
    Evento?: boolean | EventoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participacaoEquipe"]>

  export type ParticipacaoEquipeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventoId?: boolean
    equipeId?: boolean
    Equipe?: boolean | EquipeDefaultArgs<ExtArgs>
    Evento?: boolean | EventoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participacaoEquipe"]>

  export type ParticipacaoEquipeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventoId?: boolean
    equipeId?: boolean
    Equipe?: boolean | EquipeDefaultArgs<ExtArgs>
    Evento?: boolean | EventoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participacaoEquipe"]>

  export type ParticipacaoEquipeSelectScalar = {
    id?: boolean
    eventoId?: boolean
    equipeId?: boolean
  }

  export type ParticipacaoEquipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventoId" | "equipeId", ExtArgs["result"]["participacaoEquipe"]>
  export type ParticipacaoEquipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Equipe?: boolean | EquipeDefaultArgs<ExtArgs>
    Evento?: boolean | EventoDefaultArgs<ExtArgs>
  }
  export type ParticipacaoEquipeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Equipe?: boolean | EquipeDefaultArgs<ExtArgs>
    Evento?: boolean | EventoDefaultArgs<ExtArgs>
  }
  export type ParticipacaoEquipeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Equipe?: boolean | EquipeDefaultArgs<ExtArgs>
    Evento?: boolean | EventoDefaultArgs<ExtArgs>
  }

  export type $ParticipacaoEquipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParticipacaoEquipe"
    objects: {
      Equipe: Prisma.$EquipePayload<ExtArgs>
      Evento: Prisma.$EventoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      eventoId: number
      equipeId: number
    }, ExtArgs["result"]["participacaoEquipe"]>
    composites: {}
  }

  type ParticipacaoEquipeGetPayload<S extends boolean | null | undefined | ParticipacaoEquipeDefaultArgs> = $Result.GetResult<Prisma.$ParticipacaoEquipePayload, S>

  type ParticipacaoEquipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipacaoEquipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipacaoEquipeCountAggregateInputType | true
    }

  export interface ParticipacaoEquipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParticipacaoEquipe'], meta: { name: 'ParticipacaoEquipe' } }
    /**
     * Find zero or one ParticipacaoEquipe that matches the filter.
     * @param {ParticipacaoEquipeFindUniqueArgs} args - Arguments to find a ParticipacaoEquipe
     * @example
     * // Get one ParticipacaoEquipe
     * const participacaoEquipe = await prisma.participacaoEquipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipacaoEquipeFindUniqueArgs>(args: SelectSubset<T, ParticipacaoEquipeFindUniqueArgs<ExtArgs>>): Prisma__ParticipacaoEquipeClient<$Result.GetResult<Prisma.$ParticipacaoEquipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParticipacaoEquipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipacaoEquipeFindUniqueOrThrowArgs} args - Arguments to find a ParticipacaoEquipe
     * @example
     * // Get one ParticipacaoEquipe
     * const participacaoEquipe = await prisma.participacaoEquipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipacaoEquipeFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipacaoEquipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipacaoEquipeClient<$Result.GetResult<Prisma.$ParticipacaoEquipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParticipacaoEquipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoEquipeFindFirstArgs} args - Arguments to find a ParticipacaoEquipe
     * @example
     * // Get one ParticipacaoEquipe
     * const participacaoEquipe = await prisma.participacaoEquipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipacaoEquipeFindFirstArgs>(args?: SelectSubset<T, ParticipacaoEquipeFindFirstArgs<ExtArgs>>): Prisma__ParticipacaoEquipeClient<$Result.GetResult<Prisma.$ParticipacaoEquipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParticipacaoEquipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoEquipeFindFirstOrThrowArgs} args - Arguments to find a ParticipacaoEquipe
     * @example
     * // Get one ParticipacaoEquipe
     * const participacaoEquipe = await prisma.participacaoEquipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipacaoEquipeFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipacaoEquipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipacaoEquipeClient<$Result.GetResult<Prisma.$ParticipacaoEquipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParticipacaoEquipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoEquipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParticipacaoEquipes
     * const participacaoEquipes = await prisma.participacaoEquipe.findMany()
     * 
     * // Get first 10 ParticipacaoEquipes
     * const participacaoEquipes = await prisma.participacaoEquipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participacaoEquipeWithIdOnly = await prisma.participacaoEquipe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipacaoEquipeFindManyArgs>(args?: SelectSubset<T, ParticipacaoEquipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipacaoEquipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParticipacaoEquipe.
     * @param {ParticipacaoEquipeCreateArgs} args - Arguments to create a ParticipacaoEquipe.
     * @example
     * // Create one ParticipacaoEquipe
     * const ParticipacaoEquipe = await prisma.participacaoEquipe.create({
     *   data: {
     *     // ... data to create a ParticipacaoEquipe
     *   }
     * })
     * 
     */
    create<T extends ParticipacaoEquipeCreateArgs>(args: SelectSubset<T, ParticipacaoEquipeCreateArgs<ExtArgs>>): Prisma__ParticipacaoEquipeClient<$Result.GetResult<Prisma.$ParticipacaoEquipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParticipacaoEquipes.
     * @param {ParticipacaoEquipeCreateManyArgs} args - Arguments to create many ParticipacaoEquipes.
     * @example
     * // Create many ParticipacaoEquipes
     * const participacaoEquipe = await prisma.participacaoEquipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipacaoEquipeCreateManyArgs>(args?: SelectSubset<T, ParticipacaoEquipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParticipacaoEquipes and returns the data saved in the database.
     * @param {ParticipacaoEquipeCreateManyAndReturnArgs} args - Arguments to create many ParticipacaoEquipes.
     * @example
     * // Create many ParticipacaoEquipes
     * const participacaoEquipe = await prisma.participacaoEquipe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParticipacaoEquipes and only return the `id`
     * const participacaoEquipeWithIdOnly = await prisma.participacaoEquipe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipacaoEquipeCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipacaoEquipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipacaoEquipePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParticipacaoEquipe.
     * @param {ParticipacaoEquipeDeleteArgs} args - Arguments to delete one ParticipacaoEquipe.
     * @example
     * // Delete one ParticipacaoEquipe
     * const ParticipacaoEquipe = await prisma.participacaoEquipe.delete({
     *   where: {
     *     // ... filter to delete one ParticipacaoEquipe
     *   }
     * })
     * 
     */
    delete<T extends ParticipacaoEquipeDeleteArgs>(args: SelectSubset<T, ParticipacaoEquipeDeleteArgs<ExtArgs>>): Prisma__ParticipacaoEquipeClient<$Result.GetResult<Prisma.$ParticipacaoEquipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParticipacaoEquipe.
     * @param {ParticipacaoEquipeUpdateArgs} args - Arguments to update one ParticipacaoEquipe.
     * @example
     * // Update one ParticipacaoEquipe
     * const participacaoEquipe = await prisma.participacaoEquipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipacaoEquipeUpdateArgs>(args: SelectSubset<T, ParticipacaoEquipeUpdateArgs<ExtArgs>>): Prisma__ParticipacaoEquipeClient<$Result.GetResult<Prisma.$ParticipacaoEquipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParticipacaoEquipes.
     * @param {ParticipacaoEquipeDeleteManyArgs} args - Arguments to filter ParticipacaoEquipes to delete.
     * @example
     * // Delete a few ParticipacaoEquipes
     * const { count } = await prisma.participacaoEquipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipacaoEquipeDeleteManyArgs>(args?: SelectSubset<T, ParticipacaoEquipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParticipacaoEquipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoEquipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParticipacaoEquipes
     * const participacaoEquipe = await prisma.participacaoEquipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipacaoEquipeUpdateManyArgs>(args: SelectSubset<T, ParticipacaoEquipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParticipacaoEquipes and returns the data updated in the database.
     * @param {ParticipacaoEquipeUpdateManyAndReturnArgs} args - Arguments to update many ParticipacaoEquipes.
     * @example
     * // Update many ParticipacaoEquipes
     * const participacaoEquipe = await prisma.participacaoEquipe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParticipacaoEquipes and only return the `id`
     * const participacaoEquipeWithIdOnly = await prisma.participacaoEquipe.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParticipacaoEquipeUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipacaoEquipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipacaoEquipePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParticipacaoEquipe.
     * @param {ParticipacaoEquipeUpsertArgs} args - Arguments to update or create a ParticipacaoEquipe.
     * @example
     * // Update or create a ParticipacaoEquipe
     * const participacaoEquipe = await prisma.participacaoEquipe.upsert({
     *   create: {
     *     // ... data to create a ParticipacaoEquipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParticipacaoEquipe we want to update
     *   }
     * })
     */
    upsert<T extends ParticipacaoEquipeUpsertArgs>(args: SelectSubset<T, ParticipacaoEquipeUpsertArgs<ExtArgs>>): Prisma__ParticipacaoEquipeClient<$Result.GetResult<Prisma.$ParticipacaoEquipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParticipacaoEquipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoEquipeCountArgs} args - Arguments to filter ParticipacaoEquipes to count.
     * @example
     * // Count the number of ParticipacaoEquipes
     * const count = await prisma.participacaoEquipe.count({
     *   where: {
     *     // ... the filter for the ParticipacaoEquipes we want to count
     *   }
     * })
    **/
    count<T extends ParticipacaoEquipeCountArgs>(
      args?: Subset<T, ParticipacaoEquipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipacaoEquipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParticipacaoEquipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoEquipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParticipacaoEquipeAggregateArgs>(args: Subset<T, ParticipacaoEquipeAggregateArgs>): Prisma.PrismaPromise<GetParticipacaoEquipeAggregateType<T>>

    /**
     * Group by ParticipacaoEquipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoEquipeGroupByArgs} args - Group by arguments.
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
      T extends ParticipacaoEquipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipacaoEquipeGroupByArgs['orderBy'] }
        : { orderBy?: ParticipacaoEquipeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParticipacaoEquipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipacaoEquipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParticipacaoEquipe model
   */
  readonly fields: ParticipacaoEquipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParticipacaoEquipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipacaoEquipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Equipe<T extends EquipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipeDefaultArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Evento<T extends EventoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventoDefaultArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ParticipacaoEquipe model
   */
  interface ParticipacaoEquipeFieldRefs {
    readonly id: FieldRef<"ParticipacaoEquipe", 'Int'>
    readonly eventoId: FieldRef<"ParticipacaoEquipe", 'Int'>
    readonly equipeId: FieldRef<"ParticipacaoEquipe", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ParticipacaoEquipe findUnique
   */
  export type ParticipacaoEquipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipacaoEquipe
     */
    select?: ParticipacaoEquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipacaoEquipe
     */
    omit?: ParticipacaoEquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoEquipeInclude<ExtArgs> | null
    /**
     * Filter, which ParticipacaoEquipe to fetch.
     */
    where: ParticipacaoEquipeWhereUniqueInput
  }

  /**
   * ParticipacaoEquipe findUniqueOrThrow
   */
  export type ParticipacaoEquipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipacaoEquipe
     */
    select?: ParticipacaoEquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipacaoEquipe
     */
    omit?: ParticipacaoEquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoEquipeInclude<ExtArgs> | null
    /**
     * Filter, which ParticipacaoEquipe to fetch.
     */
    where: ParticipacaoEquipeWhereUniqueInput
  }

  /**
   * ParticipacaoEquipe findFirst
   */
  export type ParticipacaoEquipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipacaoEquipe
     */
    select?: ParticipacaoEquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipacaoEquipe
     */
    omit?: ParticipacaoEquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoEquipeInclude<ExtArgs> | null
    /**
     * Filter, which ParticipacaoEquipe to fetch.
     */
    where?: ParticipacaoEquipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipacaoEquipes to fetch.
     */
    orderBy?: ParticipacaoEquipeOrderByWithRelationInput | ParticipacaoEquipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParticipacaoEquipes.
     */
    cursor?: ParticipacaoEquipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipacaoEquipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipacaoEquipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParticipacaoEquipes.
     */
    distinct?: ParticipacaoEquipeScalarFieldEnum | ParticipacaoEquipeScalarFieldEnum[]
  }

  /**
   * ParticipacaoEquipe findFirstOrThrow
   */
  export type ParticipacaoEquipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipacaoEquipe
     */
    select?: ParticipacaoEquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipacaoEquipe
     */
    omit?: ParticipacaoEquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoEquipeInclude<ExtArgs> | null
    /**
     * Filter, which ParticipacaoEquipe to fetch.
     */
    where?: ParticipacaoEquipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipacaoEquipes to fetch.
     */
    orderBy?: ParticipacaoEquipeOrderByWithRelationInput | ParticipacaoEquipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParticipacaoEquipes.
     */
    cursor?: ParticipacaoEquipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipacaoEquipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipacaoEquipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParticipacaoEquipes.
     */
    distinct?: ParticipacaoEquipeScalarFieldEnum | ParticipacaoEquipeScalarFieldEnum[]
  }

  /**
   * ParticipacaoEquipe findMany
   */
  export type ParticipacaoEquipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipacaoEquipe
     */
    select?: ParticipacaoEquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipacaoEquipe
     */
    omit?: ParticipacaoEquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoEquipeInclude<ExtArgs> | null
    /**
     * Filter, which ParticipacaoEquipes to fetch.
     */
    where?: ParticipacaoEquipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipacaoEquipes to fetch.
     */
    orderBy?: ParticipacaoEquipeOrderByWithRelationInput | ParticipacaoEquipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParticipacaoEquipes.
     */
    cursor?: ParticipacaoEquipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipacaoEquipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipacaoEquipes.
     */
    skip?: number
    distinct?: ParticipacaoEquipeScalarFieldEnum | ParticipacaoEquipeScalarFieldEnum[]
  }

  /**
   * ParticipacaoEquipe create
   */
  export type ParticipacaoEquipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipacaoEquipe
     */
    select?: ParticipacaoEquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipacaoEquipe
     */
    omit?: ParticipacaoEquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoEquipeInclude<ExtArgs> | null
    /**
     * The data needed to create a ParticipacaoEquipe.
     */
    data: XOR<ParticipacaoEquipeCreateInput, ParticipacaoEquipeUncheckedCreateInput>
  }

  /**
   * ParticipacaoEquipe createMany
   */
  export type ParticipacaoEquipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParticipacaoEquipes.
     */
    data: ParticipacaoEquipeCreateManyInput | ParticipacaoEquipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParticipacaoEquipe createManyAndReturn
   */
  export type ParticipacaoEquipeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipacaoEquipe
     */
    select?: ParticipacaoEquipeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipacaoEquipe
     */
    omit?: ParticipacaoEquipeOmit<ExtArgs> | null
    /**
     * The data used to create many ParticipacaoEquipes.
     */
    data: ParticipacaoEquipeCreateManyInput | ParticipacaoEquipeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoEquipeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParticipacaoEquipe update
   */
  export type ParticipacaoEquipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipacaoEquipe
     */
    select?: ParticipacaoEquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipacaoEquipe
     */
    omit?: ParticipacaoEquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoEquipeInclude<ExtArgs> | null
    /**
     * The data needed to update a ParticipacaoEquipe.
     */
    data: XOR<ParticipacaoEquipeUpdateInput, ParticipacaoEquipeUncheckedUpdateInput>
    /**
     * Choose, which ParticipacaoEquipe to update.
     */
    where: ParticipacaoEquipeWhereUniqueInput
  }

  /**
   * ParticipacaoEquipe updateMany
   */
  export type ParticipacaoEquipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParticipacaoEquipes.
     */
    data: XOR<ParticipacaoEquipeUpdateManyMutationInput, ParticipacaoEquipeUncheckedUpdateManyInput>
    /**
     * Filter which ParticipacaoEquipes to update
     */
    where?: ParticipacaoEquipeWhereInput
    /**
     * Limit how many ParticipacaoEquipes to update.
     */
    limit?: number
  }

  /**
   * ParticipacaoEquipe updateManyAndReturn
   */
  export type ParticipacaoEquipeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipacaoEquipe
     */
    select?: ParticipacaoEquipeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipacaoEquipe
     */
    omit?: ParticipacaoEquipeOmit<ExtArgs> | null
    /**
     * The data used to update ParticipacaoEquipes.
     */
    data: XOR<ParticipacaoEquipeUpdateManyMutationInput, ParticipacaoEquipeUncheckedUpdateManyInput>
    /**
     * Filter which ParticipacaoEquipes to update
     */
    where?: ParticipacaoEquipeWhereInput
    /**
     * Limit how many ParticipacaoEquipes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoEquipeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParticipacaoEquipe upsert
   */
  export type ParticipacaoEquipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipacaoEquipe
     */
    select?: ParticipacaoEquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipacaoEquipe
     */
    omit?: ParticipacaoEquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoEquipeInclude<ExtArgs> | null
    /**
     * The filter to search for the ParticipacaoEquipe to update in case it exists.
     */
    where: ParticipacaoEquipeWhereUniqueInput
    /**
     * In case the ParticipacaoEquipe found by the `where` argument doesn't exist, create a new ParticipacaoEquipe with this data.
     */
    create: XOR<ParticipacaoEquipeCreateInput, ParticipacaoEquipeUncheckedCreateInput>
    /**
     * In case the ParticipacaoEquipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipacaoEquipeUpdateInput, ParticipacaoEquipeUncheckedUpdateInput>
  }

  /**
   * ParticipacaoEquipe delete
   */
  export type ParticipacaoEquipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipacaoEquipe
     */
    select?: ParticipacaoEquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipacaoEquipe
     */
    omit?: ParticipacaoEquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoEquipeInclude<ExtArgs> | null
    /**
     * Filter which ParticipacaoEquipe to delete.
     */
    where: ParticipacaoEquipeWhereUniqueInput
  }

  /**
   * ParticipacaoEquipe deleteMany
   */
  export type ParticipacaoEquipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParticipacaoEquipes to delete
     */
    where?: ParticipacaoEquipeWhereInput
    /**
     * Limit how many ParticipacaoEquipes to delete.
     */
    limit?: number
  }

  /**
   * ParticipacaoEquipe without action
   */
  export type ParticipacaoEquipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipacaoEquipe
     */
    select?: ParticipacaoEquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipacaoEquipe
     */
    omit?: ParticipacaoEquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoEquipeInclude<ExtArgs> | null
  }


  /**
   * Model Technician
   */

  export type AggregateTechnician = {
    _count: TechnicianCountAggregateOutputType | null
    _avg: TechnicianAvgAggregateOutputType | null
    _sum: TechnicianSumAggregateOutputType | null
    _min: TechnicianMinAggregateOutputType | null
    _max: TechnicianMaxAggregateOutputType | null
  }

  export type TechnicianAvgAggregateOutputType = {
    id: number | null
  }

  export type TechnicianSumAggregateOutputType = {
    id: number | null
  }

  export type TechnicianMinAggregateOutputType = {
    id: number | null
    nome: string | null
    especialidade: string | null
    disponivel: boolean | null
  }

  export type TechnicianMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    especialidade: string | null
    disponivel: boolean | null
  }

  export type TechnicianCountAggregateOutputType = {
    id: number
    nome: number
    especialidade: number
    disponivel: number
    _all: number
  }


  export type TechnicianAvgAggregateInputType = {
    id?: true
  }

  export type TechnicianSumAggregateInputType = {
    id?: true
  }

  export type TechnicianMinAggregateInputType = {
    id?: true
    nome?: true
    especialidade?: true
    disponivel?: true
  }

  export type TechnicianMaxAggregateInputType = {
    id?: true
    nome?: true
    especialidade?: true
    disponivel?: true
  }

  export type TechnicianCountAggregateInputType = {
    id?: true
    nome?: true
    especialidade?: true
    disponivel?: true
    _all?: true
  }

  export type TechnicianAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Technician to aggregate.
     */
    where?: TechnicianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Technicians to fetch.
     */
    orderBy?: TechnicianOrderByWithRelationInput | TechnicianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TechnicianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Technicians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Technicians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Technicians
    **/
    _count?: true | TechnicianCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TechnicianAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TechnicianSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TechnicianMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TechnicianMaxAggregateInputType
  }

  export type GetTechnicianAggregateType<T extends TechnicianAggregateArgs> = {
        [P in keyof T & keyof AggregateTechnician]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTechnician[P]>
      : GetScalarType<T[P], AggregateTechnician[P]>
  }




  export type TechnicianGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TechnicianWhereInput
    orderBy?: TechnicianOrderByWithAggregationInput | TechnicianOrderByWithAggregationInput[]
    by: TechnicianScalarFieldEnum[] | TechnicianScalarFieldEnum
    having?: TechnicianScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TechnicianCountAggregateInputType | true
    _avg?: TechnicianAvgAggregateInputType
    _sum?: TechnicianSumAggregateInputType
    _min?: TechnicianMinAggregateInputType
    _max?: TechnicianMaxAggregateInputType
  }

  export type TechnicianGroupByOutputType = {
    id: number
    nome: string
    especialidade: string
    disponivel: boolean
    _count: TechnicianCountAggregateOutputType | null
    _avg: TechnicianAvgAggregateOutputType | null
    _sum: TechnicianSumAggregateOutputType | null
    _min: TechnicianMinAggregateOutputType | null
    _max: TechnicianMaxAggregateOutputType | null
  }

  type GetTechnicianGroupByPayload<T extends TechnicianGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TechnicianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TechnicianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TechnicianGroupByOutputType[P]>
            : GetScalarType<T[P], TechnicianGroupByOutputType[P]>
        }
      >
    >


  export type TechnicianSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    especialidade?: boolean
    disponivel?: boolean
  }, ExtArgs["result"]["technician"]>

  export type TechnicianSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    especialidade?: boolean
    disponivel?: boolean
  }, ExtArgs["result"]["technician"]>

  export type TechnicianSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    especialidade?: boolean
    disponivel?: boolean
  }, ExtArgs["result"]["technician"]>

  export type TechnicianSelectScalar = {
    id?: boolean
    nome?: boolean
    especialidade?: boolean
    disponivel?: boolean
  }

  export type TechnicianOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "especialidade" | "disponivel", ExtArgs["result"]["technician"]>

  export type $TechnicianPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Technician"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      especialidade: string
      disponivel: boolean
    }, ExtArgs["result"]["technician"]>
    composites: {}
  }

  type TechnicianGetPayload<S extends boolean | null | undefined | TechnicianDefaultArgs> = $Result.GetResult<Prisma.$TechnicianPayload, S>

  type TechnicianCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TechnicianFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TechnicianCountAggregateInputType | true
    }

  export interface TechnicianDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Technician'], meta: { name: 'Technician' } }
    /**
     * Find zero or one Technician that matches the filter.
     * @param {TechnicianFindUniqueArgs} args - Arguments to find a Technician
     * @example
     * // Get one Technician
     * const technician = await prisma.technician.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TechnicianFindUniqueArgs>(args: SelectSubset<T, TechnicianFindUniqueArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Technician that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TechnicianFindUniqueOrThrowArgs} args - Arguments to find a Technician
     * @example
     * // Get one Technician
     * const technician = await prisma.technician.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TechnicianFindUniqueOrThrowArgs>(args: SelectSubset<T, TechnicianFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Technician that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianFindFirstArgs} args - Arguments to find a Technician
     * @example
     * // Get one Technician
     * const technician = await prisma.technician.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TechnicianFindFirstArgs>(args?: SelectSubset<T, TechnicianFindFirstArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Technician that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianFindFirstOrThrowArgs} args - Arguments to find a Technician
     * @example
     * // Get one Technician
     * const technician = await prisma.technician.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TechnicianFindFirstOrThrowArgs>(args?: SelectSubset<T, TechnicianFindFirstOrThrowArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Technicians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Technicians
     * const technicians = await prisma.technician.findMany()
     * 
     * // Get first 10 Technicians
     * const technicians = await prisma.technician.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const technicianWithIdOnly = await prisma.technician.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TechnicianFindManyArgs>(args?: SelectSubset<T, TechnicianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Technician.
     * @param {TechnicianCreateArgs} args - Arguments to create a Technician.
     * @example
     * // Create one Technician
     * const Technician = await prisma.technician.create({
     *   data: {
     *     // ... data to create a Technician
     *   }
     * })
     * 
     */
    create<T extends TechnicianCreateArgs>(args: SelectSubset<T, TechnicianCreateArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Technicians.
     * @param {TechnicianCreateManyArgs} args - Arguments to create many Technicians.
     * @example
     * // Create many Technicians
     * const technician = await prisma.technician.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TechnicianCreateManyArgs>(args?: SelectSubset<T, TechnicianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Technicians and returns the data saved in the database.
     * @param {TechnicianCreateManyAndReturnArgs} args - Arguments to create many Technicians.
     * @example
     * // Create many Technicians
     * const technician = await prisma.technician.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Technicians and only return the `id`
     * const technicianWithIdOnly = await prisma.technician.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TechnicianCreateManyAndReturnArgs>(args?: SelectSubset<T, TechnicianCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Technician.
     * @param {TechnicianDeleteArgs} args - Arguments to delete one Technician.
     * @example
     * // Delete one Technician
     * const Technician = await prisma.technician.delete({
     *   where: {
     *     // ... filter to delete one Technician
     *   }
     * })
     * 
     */
    delete<T extends TechnicianDeleteArgs>(args: SelectSubset<T, TechnicianDeleteArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Technician.
     * @param {TechnicianUpdateArgs} args - Arguments to update one Technician.
     * @example
     * // Update one Technician
     * const technician = await prisma.technician.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TechnicianUpdateArgs>(args: SelectSubset<T, TechnicianUpdateArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Technicians.
     * @param {TechnicianDeleteManyArgs} args - Arguments to filter Technicians to delete.
     * @example
     * // Delete a few Technicians
     * const { count } = await prisma.technician.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TechnicianDeleteManyArgs>(args?: SelectSubset<T, TechnicianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Technicians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Technicians
     * const technician = await prisma.technician.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TechnicianUpdateManyArgs>(args: SelectSubset<T, TechnicianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Technicians and returns the data updated in the database.
     * @param {TechnicianUpdateManyAndReturnArgs} args - Arguments to update many Technicians.
     * @example
     * // Update many Technicians
     * const technician = await prisma.technician.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Technicians and only return the `id`
     * const technicianWithIdOnly = await prisma.technician.updateManyAndReturn({
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
    updateManyAndReturn<T extends TechnicianUpdateManyAndReturnArgs>(args: SelectSubset<T, TechnicianUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Technician.
     * @param {TechnicianUpsertArgs} args - Arguments to update or create a Technician.
     * @example
     * // Update or create a Technician
     * const technician = await prisma.technician.upsert({
     *   create: {
     *     // ... data to create a Technician
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Technician we want to update
     *   }
     * })
     */
    upsert<T extends TechnicianUpsertArgs>(args: SelectSubset<T, TechnicianUpsertArgs<ExtArgs>>): Prisma__TechnicianClient<$Result.GetResult<Prisma.$TechnicianPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Technicians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianCountArgs} args - Arguments to filter Technicians to count.
     * @example
     * // Count the number of Technicians
     * const count = await prisma.technician.count({
     *   where: {
     *     // ... the filter for the Technicians we want to count
     *   }
     * })
    **/
    count<T extends TechnicianCountArgs>(
      args?: Subset<T, TechnicianCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TechnicianCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Technician.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TechnicianAggregateArgs>(args: Subset<T, TechnicianAggregateArgs>): Prisma.PrismaPromise<GetTechnicianAggregateType<T>>

    /**
     * Group by Technician.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechnicianGroupByArgs} args - Group by arguments.
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
      T extends TechnicianGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TechnicianGroupByArgs['orderBy'] }
        : { orderBy?: TechnicianGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TechnicianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTechnicianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Technician model
   */
  readonly fields: TechnicianFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Technician.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TechnicianClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Technician model
   */
  interface TechnicianFieldRefs {
    readonly id: FieldRef<"Technician", 'Int'>
    readonly nome: FieldRef<"Technician", 'String'>
    readonly especialidade: FieldRef<"Technician", 'String'>
    readonly disponivel: FieldRef<"Technician", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Technician findUnique
   */
  export type TechnicianFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * Filter, which Technician to fetch.
     */
    where: TechnicianWhereUniqueInput
  }

  /**
   * Technician findUniqueOrThrow
   */
  export type TechnicianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * Filter, which Technician to fetch.
     */
    where: TechnicianWhereUniqueInput
  }

  /**
   * Technician findFirst
   */
  export type TechnicianFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * Filter, which Technician to fetch.
     */
    where?: TechnicianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Technicians to fetch.
     */
    orderBy?: TechnicianOrderByWithRelationInput | TechnicianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Technicians.
     */
    cursor?: TechnicianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Technicians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Technicians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Technicians.
     */
    distinct?: TechnicianScalarFieldEnum | TechnicianScalarFieldEnum[]
  }

  /**
   * Technician findFirstOrThrow
   */
  export type TechnicianFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * Filter, which Technician to fetch.
     */
    where?: TechnicianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Technicians to fetch.
     */
    orderBy?: TechnicianOrderByWithRelationInput | TechnicianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Technicians.
     */
    cursor?: TechnicianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Technicians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Technicians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Technicians.
     */
    distinct?: TechnicianScalarFieldEnum | TechnicianScalarFieldEnum[]
  }

  /**
   * Technician findMany
   */
  export type TechnicianFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * Filter, which Technicians to fetch.
     */
    where?: TechnicianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Technicians to fetch.
     */
    orderBy?: TechnicianOrderByWithRelationInput | TechnicianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Technicians.
     */
    cursor?: TechnicianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Technicians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Technicians.
     */
    skip?: number
    distinct?: TechnicianScalarFieldEnum | TechnicianScalarFieldEnum[]
  }

  /**
   * Technician create
   */
  export type TechnicianCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * The data needed to create a Technician.
     */
    data: XOR<TechnicianCreateInput, TechnicianUncheckedCreateInput>
  }

  /**
   * Technician createMany
   */
  export type TechnicianCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Technicians.
     */
    data: TechnicianCreateManyInput | TechnicianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Technician createManyAndReturn
   */
  export type TechnicianCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * The data used to create many Technicians.
     */
    data: TechnicianCreateManyInput | TechnicianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Technician update
   */
  export type TechnicianUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * The data needed to update a Technician.
     */
    data: XOR<TechnicianUpdateInput, TechnicianUncheckedUpdateInput>
    /**
     * Choose, which Technician to update.
     */
    where: TechnicianWhereUniqueInput
  }

  /**
   * Technician updateMany
   */
  export type TechnicianUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Technicians.
     */
    data: XOR<TechnicianUpdateManyMutationInput, TechnicianUncheckedUpdateManyInput>
    /**
     * Filter which Technicians to update
     */
    where?: TechnicianWhereInput
    /**
     * Limit how many Technicians to update.
     */
    limit?: number
  }

  /**
   * Technician updateManyAndReturn
   */
  export type TechnicianUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * The data used to update Technicians.
     */
    data: XOR<TechnicianUpdateManyMutationInput, TechnicianUncheckedUpdateManyInput>
    /**
     * Filter which Technicians to update
     */
    where?: TechnicianWhereInput
    /**
     * Limit how many Technicians to update.
     */
    limit?: number
  }

  /**
   * Technician upsert
   */
  export type TechnicianUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * The filter to search for the Technician to update in case it exists.
     */
    where: TechnicianWhereUniqueInput
    /**
     * In case the Technician found by the `where` argument doesn't exist, create a new Technician with this data.
     */
    create: XOR<TechnicianCreateInput, TechnicianUncheckedCreateInput>
    /**
     * In case the Technician was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TechnicianUpdateInput, TechnicianUncheckedUpdateInput>
  }

  /**
   * Technician delete
   */
  export type TechnicianDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
    /**
     * Filter which Technician to delete.
     */
    where: TechnicianWhereUniqueInput
  }

  /**
   * Technician deleteMany
   */
  export type TechnicianDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Technicians to delete
     */
    where?: TechnicianWhereInput
    /**
     * Limit how many Technicians to delete.
     */
    limit?: number
  }

  /**
   * Technician without action
   */
  export type TechnicianDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Technician
     */
    select?: TechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Technician
     */
    omit?: TechnicianOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    nomeCompleto: string | null
    numeroEstudante: string | null
    fullemail: string | null
    senha: string | null
    contacto: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    nomeCompleto: string | null
    numeroEstudante: string | null
    fullemail: string | null
    senha: string | null
    contacto: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nomeCompleto: number
    numeroEstudante: number
    fullemail: number
    senha: number
    contacto: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    nomeCompleto?: true
    numeroEstudante?: true
    fullemail?: true
    senha?: true
    contacto?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nomeCompleto?: true
    numeroEstudante?: true
    fullemail?: true
    senha?: true
    contacto?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nomeCompleto?: true
    numeroEstudante?: true
    fullemail?: true
    senha?: true
    contacto?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    nomeCompleto: string
    numeroEstudante: string
    fullemail: string | null
    senha: string
    contacto: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    nomeCompleto?: boolean
    numeroEstudante?: boolean
    fullemail?: boolean
    senha?: boolean
    contacto?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeCompleto?: boolean
    numeroEstudante?: boolean
    fullemail?: boolean
    senha?: boolean
    contacto?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeCompleto?: boolean
    numeroEstudante?: boolean
    fullemail?: boolean
    senha?: boolean
    contacto?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nomeCompleto?: boolean
    numeroEstudante?: boolean
    fullemail?: boolean
    senha?: boolean
    contacto?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeCompleto" | "numeroEstudante" | "fullemail" | "senha" | "contacto", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nomeCompleto: string
      numeroEstudante: string
      fullemail: string | null
      senha: string
      contacto: string
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
    readonly id: FieldRef<"User", 'Int'>
    readonly nomeCompleto: FieldRef<"User", 'String'>
    readonly numeroEstudante: FieldRef<"User", 'String'>
    readonly fullemail: FieldRef<"User", 'String'>
    readonly senha: FieldRef<"User", 'String'>
    readonly contacto: FieldRef<"User", 'String'>
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


  export const EstudanteScalarFieldEnum: {
    id: 'id',
    nomeCompleto: 'nomeCompleto',
    turma: 'turma',
    curso: 'curso',
    numeroEstudante: 'numeroEstudante',
    modalidade: 'modalidade',
    dataUtilizacao: 'dataUtilizacao',
    horario: 'horario',
    periodo: 'periodo',
    telefone: 'telefone',
    status: 'status'
  };

  export type EstudanteScalarFieldEnum = (typeof EstudanteScalarFieldEnum)[keyof typeof EstudanteScalarFieldEnum]


  export const ExternoScalarFieldEnum: {
    id: 'id',
    nomeCompleto: 'nomeCompleto',
    contacto: 'contacto',
    email: 'email',
    dataUtilizacao: 'dataUtilizacao',
    horario: 'horario',
    periodo: 'periodo',
    modalidade: 'modalidade',
    status: 'status'
  };

  export type ExternoScalarFieldEnum = (typeof ExternoScalarFieldEnum)[keyof typeof ExternoScalarFieldEnum]


  export const EquipeScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    categoria: 'categoria'
  };

  export type EquipeScalarFieldEnum = (typeof EquipeScalarFieldEnum)[keyof typeof EquipeScalarFieldEnum]


  export const EventoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    contacto: 'contacto',
    email: 'email',
    tipoEvento: 'tipoEvento',
    dataInicio: 'dataInicio',
    dataFim: 'dataFim',
    formato: 'formato',
    estado: 'estado',
    criadoEm: 'criadoEm'
  };

  export type EventoScalarFieldEnum = (typeof EventoScalarFieldEnum)[keyof typeof EventoScalarFieldEnum]


  export const JogoScalarFieldEnum: {
    id: 'id',
    eventoId: 'eventoId',
    equipaAId: 'equipaAId',
    equipaBId: 'equipaBId',
    resultado: 'resultado'
  };

  export type JogoScalarFieldEnum = (typeof JogoScalarFieldEnum)[keyof typeof JogoScalarFieldEnum]


  export const MarcacaoScalarFieldEnum: {
    id: 'id',
    eventoId: 'eventoId',
    titulo: 'titulo',
    tipo: 'tipo',
    dataInicio: 'dataInicio',
    dataFim: 'dataFim',
    jogoId: 'jogoId',
    criadoEm: 'criadoEm'
  };

  export type MarcacaoScalarFieldEnum = (typeof MarcacaoScalarFieldEnum)[keyof typeof MarcacaoScalarFieldEnum]


  export const ParticipacaoEquipeScalarFieldEnum: {
    id: 'id',
    eventoId: 'eventoId',
    equipeId: 'equipeId'
  };

  export type ParticipacaoEquipeScalarFieldEnum = (typeof ParticipacaoEquipeScalarFieldEnum)[keyof typeof ParticipacaoEquipeScalarFieldEnum]


  export const TechnicianScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    especialidade: 'especialidade',
    disponivel: 'disponivel'
  };

  export type TechnicianScalarFieldEnum = (typeof TechnicianScalarFieldEnum)[keyof typeof TechnicianScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    nomeCompleto: 'nomeCompleto',
    numeroEstudante: 'numeroEstudante',
    fullemail: 'fullemail',
    senha: 'senha',
    contacto: 'contacto'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type EstudanteWhereInput = {
    AND?: EstudanteWhereInput | EstudanteWhereInput[]
    OR?: EstudanteWhereInput[]
    NOT?: EstudanteWhereInput | EstudanteWhereInput[]
    id?: IntFilter<"Estudante"> | number
    nomeCompleto?: StringFilter<"Estudante"> | string
    turma?: StringFilter<"Estudante"> | string
    curso?: StringFilter<"Estudante"> | string
    numeroEstudante?: StringFilter<"Estudante"> | string
    modalidade?: StringFilter<"Estudante"> | string
    dataUtilizacao?: DateTimeFilter<"Estudante"> | Date | string
    horario?: StringFilter<"Estudante"> | string
    periodo?: StringFilter<"Estudante"> | string
    telefone?: StringFilter<"Estudante"> | string
    status?: StringFilter<"Estudante"> | string
  }

  export type EstudanteOrderByWithRelationInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    turma?: SortOrder
    curso?: SortOrder
    numeroEstudante?: SortOrder
    modalidade?: SortOrder
    dataUtilizacao?: SortOrder
    horario?: SortOrder
    periodo?: SortOrder
    telefone?: SortOrder
    status?: SortOrder
  }

  export type EstudanteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EstudanteWhereInput | EstudanteWhereInput[]
    OR?: EstudanteWhereInput[]
    NOT?: EstudanteWhereInput | EstudanteWhereInput[]
    nomeCompleto?: StringFilter<"Estudante"> | string
    turma?: StringFilter<"Estudante"> | string
    curso?: StringFilter<"Estudante"> | string
    numeroEstudante?: StringFilter<"Estudante"> | string
    modalidade?: StringFilter<"Estudante"> | string
    dataUtilizacao?: DateTimeFilter<"Estudante"> | Date | string
    horario?: StringFilter<"Estudante"> | string
    periodo?: StringFilter<"Estudante"> | string
    telefone?: StringFilter<"Estudante"> | string
    status?: StringFilter<"Estudante"> | string
  }, "id">

  export type EstudanteOrderByWithAggregationInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    turma?: SortOrder
    curso?: SortOrder
    numeroEstudante?: SortOrder
    modalidade?: SortOrder
    dataUtilizacao?: SortOrder
    horario?: SortOrder
    periodo?: SortOrder
    telefone?: SortOrder
    status?: SortOrder
    _count?: EstudanteCountOrderByAggregateInput
    _avg?: EstudanteAvgOrderByAggregateInput
    _max?: EstudanteMaxOrderByAggregateInput
    _min?: EstudanteMinOrderByAggregateInput
    _sum?: EstudanteSumOrderByAggregateInput
  }

  export type EstudanteScalarWhereWithAggregatesInput = {
    AND?: EstudanteScalarWhereWithAggregatesInput | EstudanteScalarWhereWithAggregatesInput[]
    OR?: EstudanteScalarWhereWithAggregatesInput[]
    NOT?: EstudanteScalarWhereWithAggregatesInput | EstudanteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Estudante"> | number
    nomeCompleto?: StringWithAggregatesFilter<"Estudante"> | string
    turma?: StringWithAggregatesFilter<"Estudante"> | string
    curso?: StringWithAggregatesFilter<"Estudante"> | string
    numeroEstudante?: StringWithAggregatesFilter<"Estudante"> | string
    modalidade?: StringWithAggregatesFilter<"Estudante"> | string
    dataUtilizacao?: DateTimeWithAggregatesFilter<"Estudante"> | Date | string
    horario?: StringWithAggregatesFilter<"Estudante"> | string
    periodo?: StringWithAggregatesFilter<"Estudante"> | string
    telefone?: StringWithAggregatesFilter<"Estudante"> | string
    status?: StringWithAggregatesFilter<"Estudante"> | string
  }

  export type ExternoWhereInput = {
    AND?: ExternoWhereInput | ExternoWhereInput[]
    OR?: ExternoWhereInput[]
    NOT?: ExternoWhereInput | ExternoWhereInput[]
    id?: IntFilter<"Externo"> | number
    nomeCompleto?: StringFilter<"Externo"> | string
    contacto?: StringFilter<"Externo"> | string
    email?: StringFilter<"Externo"> | string
    dataUtilizacao?: DateTimeFilter<"Externo"> | Date | string
    horario?: StringFilter<"Externo"> | string
    periodo?: StringFilter<"Externo"> | string
    modalidade?: StringFilter<"Externo"> | string
    status?: StringFilter<"Externo"> | string
  }

  export type ExternoOrderByWithRelationInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    contacto?: SortOrder
    email?: SortOrder
    dataUtilizacao?: SortOrder
    horario?: SortOrder
    periodo?: SortOrder
    modalidade?: SortOrder
    status?: SortOrder
  }

  export type ExternoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExternoWhereInput | ExternoWhereInput[]
    OR?: ExternoWhereInput[]
    NOT?: ExternoWhereInput | ExternoWhereInput[]
    nomeCompleto?: StringFilter<"Externo"> | string
    contacto?: StringFilter<"Externo"> | string
    email?: StringFilter<"Externo"> | string
    dataUtilizacao?: DateTimeFilter<"Externo"> | Date | string
    horario?: StringFilter<"Externo"> | string
    periodo?: StringFilter<"Externo"> | string
    modalidade?: StringFilter<"Externo"> | string
    status?: StringFilter<"Externo"> | string
  }, "id">

  export type ExternoOrderByWithAggregationInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    contacto?: SortOrder
    email?: SortOrder
    dataUtilizacao?: SortOrder
    horario?: SortOrder
    periodo?: SortOrder
    modalidade?: SortOrder
    status?: SortOrder
    _count?: ExternoCountOrderByAggregateInput
    _avg?: ExternoAvgOrderByAggregateInput
    _max?: ExternoMaxOrderByAggregateInput
    _min?: ExternoMinOrderByAggregateInput
    _sum?: ExternoSumOrderByAggregateInput
  }

  export type ExternoScalarWhereWithAggregatesInput = {
    AND?: ExternoScalarWhereWithAggregatesInput | ExternoScalarWhereWithAggregatesInput[]
    OR?: ExternoScalarWhereWithAggregatesInput[]
    NOT?: ExternoScalarWhereWithAggregatesInput | ExternoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Externo"> | number
    nomeCompleto?: StringWithAggregatesFilter<"Externo"> | string
    contacto?: StringWithAggregatesFilter<"Externo"> | string
    email?: StringWithAggregatesFilter<"Externo"> | string
    dataUtilizacao?: DateTimeWithAggregatesFilter<"Externo"> | Date | string
    horario?: StringWithAggregatesFilter<"Externo"> | string
    periodo?: StringWithAggregatesFilter<"Externo"> | string
    modalidade?: StringWithAggregatesFilter<"Externo"> | string
    status?: StringWithAggregatesFilter<"Externo"> | string
  }

  export type EquipeWhereInput = {
    AND?: EquipeWhereInput | EquipeWhereInput[]
    OR?: EquipeWhereInput[]
    NOT?: EquipeWhereInput | EquipeWhereInput[]
    id?: IntFilter<"Equipe"> | number
    nome?: StringFilter<"Equipe"> | string
    categoria?: StringFilter<"Equipe"> | string
    Jogo_Jogo_equipaAIdToEquipe?: JogoListRelationFilter
    Jogo_Jogo_equipaBIdToEquipe?: JogoListRelationFilter
    ParticipacaoEquipe?: ParticipacaoEquipeListRelationFilter
  }

  export type EquipeOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    Jogo_Jogo_equipaAIdToEquipe?: JogoOrderByRelationAggregateInput
    Jogo_Jogo_equipaBIdToEquipe?: JogoOrderByRelationAggregateInput
    ParticipacaoEquipe?: ParticipacaoEquipeOrderByRelationAggregateInput
  }

  export type EquipeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EquipeWhereInput | EquipeWhereInput[]
    OR?: EquipeWhereInput[]
    NOT?: EquipeWhereInput | EquipeWhereInput[]
    nome?: StringFilter<"Equipe"> | string
    categoria?: StringFilter<"Equipe"> | string
    Jogo_Jogo_equipaAIdToEquipe?: JogoListRelationFilter
    Jogo_Jogo_equipaBIdToEquipe?: JogoListRelationFilter
    ParticipacaoEquipe?: ParticipacaoEquipeListRelationFilter
  }, "id">

  export type EquipeOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    _count?: EquipeCountOrderByAggregateInput
    _avg?: EquipeAvgOrderByAggregateInput
    _max?: EquipeMaxOrderByAggregateInput
    _min?: EquipeMinOrderByAggregateInput
    _sum?: EquipeSumOrderByAggregateInput
  }

  export type EquipeScalarWhereWithAggregatesInput = {
    AND?: EquipeScalarWhereWithAggregatesInput | EquipeScalarWhereWithAggregatesInput[]
    OR?: EquipeScalarWhereWithAggregatesInput[]
    NOT?: EquipeScalarWhereWithAggregatesInput | EquipeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Equipe"> | number
    nome?: StringWithAggregatesFilter<"Equipe"> | string
    categoria?: StringWithAggregatesFilter<"Equipe"> | string
  }

  export type EventoWhereInput = {
    AND?: EventoWhereInput | EventoWhereInput[]
    OR?: EventoWhereInput[]
    NOT?: EventoWhereInput | EventoWhereInput[]
    id?: IntFilter<"Evento"> | number
    nome?: StringFilter<"Evento"> | string
    contacto?: StringFilter<"Evento"> | string
    email?: StringFilter<"Evento"> | string
    tipoEvento?: StringFilter<"Evento"> | string
    dataInicio?: DateTimeFilter<"Evento"> | Date | string
    dataFim?: DateTimeFilter<"Evento"> | Date | string
    formato?: StringFilter<"Evento"> | string
    estado?: StringFilter<"Evento"> | string
    criadoEm?: DateTimeFilter<"Evento"> | Date | string
    Jogo?: JogoListRelationFilter
    Marcacao?: MarcacaoListRelationFilter
    ParticipacaoEquipe?: ParticipacaoEquipeListRelationFilter
  }

  export type EventoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    contacto?: SortOrder
    email?: SortOrder
    tipoEvento?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    formato?: SortOrder
    estado?: SortOrder
    criadoEm?: SortOrder
    Jogo?: JogoOrderByRelationAggregateInput
    Marcacao?: MarcacaoOrderByRelationAggregateInput
    ParticipacaoEquipe?: ParticipacaoEquipeOrderByRelationAggregateInput
  }

  export type EventoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventoWhereInput | EventoWhereInput[]
    OR?: EventoWhereInput[]
    NOT?: EventoWhereInput | EventoWhereInput[]
    nome?: StringFilter<"Evento"> | string
    contacto?: StringFilter<"Evento"> | string
    email?: StringFilter<"Evento"> | string
    tipoEvento?: StringFilter<"Evento"> | string
    dataInicio?: DateTimeFilter<"Evento"> | Date | string
    dataFim?: DateTimeFilter<"Evento"> | Date | string
    formato?: StringFilter<"Evento"> | string
    estado?: StringFilter<"Evento"> | string
    criadoEm?: DateTimeFilter<"Evento"> | Date | string
    Jogo?: JogoListRelationFilter
    Marcacao?: MarcacaoListRelationFilter
    ParticipacaoEquipe?: ParticipacaoEquipeListRelationFilter
  }, "id">

  export type EventoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    contacto?: SortOrder
    email?: SortOrder
    tipoEvento?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    formato?: SortOrder
    estado?: SortOrder
    criadoEm?: SortOrder
    _count?: EventoCountOrderByAggregateInput
    _avg?: EventoAvgOrderByAggregateInput
    _max?: EventoMaxOrderByAggregateInput
    _min?: EventoMinOrderByAggregateInput
    _sum?: EventoSumOrderByAggregateInput
  }

  export type EventoScalarWhereWithAggregatesInput = {
    AND?: EventoScalarWhereWithAggregatesInput | EventoScalarWhereWithAggregatesInput[]
    OR?: EventoScalarWhereWithAggregatesInput[]
    NOT?: EventoScalarWhereWithAggregatesInput | EventoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Evento"> | number
    nome?: StringWithAggregatesFilter<"Evento"> | string
    contacto?: StringWithAggregatesFilter<"Evento"> | string
    email?: StringWithAggregatesFilter<"Evento"> | string
    tipoEvento?: StringWithAggregatesFilter<"Evento"> | string
    dataInicio?: DateTimeWithAggregatesFilter<"Evento"> | Date | string
    dataFim?: DateTimeWithAggregatesFilter<"Evento"> | Date | string
    formato?: StringWithAggregatesFilter<"Evento"> | string
    estado?: StringWithAggregatesFilter<"Evento"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"Evento"> | Date | string
  }

  export type JogoWhereInput = {
    AND?: JogoWhereInput | JogoWhereInput[]
    OR?: JogoWhereInput[]
    NOT?: JogoWhereInput | JogoWhereInput[]
    id?: IntFilter<"Jogo"> | number
    eventoId?: IntFilter<"Jogo"> | number
    equipaAId?: IntFilter<"Jogo"> | number
    equipaBId?: IntFilter<"Jogo"> | number
    resultado?: StringNullableFilter<"Jogo"> | string | null
    Equipe_Jogo_equipaAIdToEquipe?: XOR<EquipeScalarRelationFilter, EquipeWhereInput>
    Equipe_Jogo_equipaBIdToEquipe?: XOR<EquipeScalarRelationFilter, EquipeWhereInput>
    Evento?: XOR<EventoScalarRelationFilter, EventoWhereInput>
    Marcacao?: XOR<MarcacaoNullableScalarRelationFilter, MarcacaoWhereInput> | null
  }

  export type JogoOrderByWithRelationInput = {
    id?: SortOrder
    eventoId?: SortOrder
    equipaAId?: SortOrder
    equipaBId?: SortOrder
    resultado?: SortOrderInput | SortOrder
    Equipe_Jogo_equipaAIdToEquipe?: EquipeOrderByWithRelationInput
    Equipe_Jogo_equipaBIdToEquipe?: EquipeOrderByWithRelationInput
    Evento?: EventoOrderByWithRelationInput
    Marcacao?: MarcacaoOrderByWithRelationInput
  }

  export type JogoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JogoWhereInput | JogoWhereInput[]
    OR?: JogoWhereInput[]
    NOT?: JogoWhereInput | JogoWhereInput[]
    eventoId?: IntFilter<"Jogo"> | number
    equipaAId?: IntFilter<"Jogo"> | number
    equipaBId?: IntFilter<"Jogo"> | number
    resultado?: StringNullableFilter<"Jogo"> | string | null
    Equipe_Jogo_equipaAIdToEquipe?: XOR<EquipeScalarRelationFilter, EquipeWhereInput>
    Equipe_Jogo_equipaBIdToEquipe?: XOR<EquipeScalarRelationFilter, EquipeWhereInput>
    Evento?: XOR<EventoScalarRelationFilter, EventoWhereInput>
    Marcacao?: XOR<MarcacaoNullableScalarRelationFilter, MarcacaoWhereInput> | null
  }, "id">

  export type JogoOrderByWithAggregationInput = {
    id?: SortOrder
    eventoId?: SortOrder
    equipaAId?: SortOrder
    equipaBId?: SortOrder
    resultado?: SortOrderInput | SortOrder
    _count?: JogoCountOrderByAggregateInput
    _avg?: JogoAvgOrderByAggregateInput
    _max?: JogoMaxOrderByAggregateInput
    _min?: JogoMinOrderByAggregateInput
    _sum?: JogoSumOrderByAggregateInput
  }

  export type JogoScalarWhereWithAggregatesInput = {
    AND?: JogoScalarWhereWithAggregatesInput | JogoScalarWhereWithAggregatesInput[]
    OR?: JogoScalarWhereWithAggregatesInput[]
    NOT?: JogoScalarWhereWithAggregatesInput | JogoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Jogo"> | number
    eventoId?: IntWithAggregatesFilter<"Jogo"> | number
    equipaAId?: IntWithAggregatesFilter<"Jogo"> | number
    equipaBId?: IntWithAggregatesFilter<"Jogo"> | number
    resultado?: StringNullableWithAggregatesFilter<"Jogo"> | string | null
  }

  export type MarcacaoWhereInput = {
    AND?: MarcacaoWhereInput | MarcacaoWhereInput[]
    OR?: MarcacaoWhereInput[]
    NOT?: MarcacaoWhereInput | MarcacaoWhereInput[]
    id?: IntFilter<"Marcacao"> | number
    eventoId?: IntFilter<"Marcacao"> | number
    titulo?: StringFilter<"Marcacao"> | string
    tipo?: StringFilter<"Marcacao"> | string
    dataInicio?: DateTimeFilter<"Marcacao"> | Date | string
    dataFim?: DateTimeFilter<"Marcacao"> | Date | string
    jogoId?: IntNullableFilter<"Marcacao"> | number | null
    criadoEm?: DateTimeFilter<"Marcacao"> | Date | string
    Evento?: XOR<EventoScalarRelationFilter, EventoWhereInput>
    Jogo?: XOR<JogoNullableScalarRelationFilter, JogoWhereInput> | null
  }

  export type MarcacaoOrderByWithRelationInput = {
    id?: SortOrder
    eventoId?: SortOrder
    titulo?: SortOrder
    tipo?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    jogoId?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    Evento?: EventoOrderByWithRelationInput
    Jogo?: JogoOrderByWithRelationInput
  }

  export type MarcacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    jogoId?: number
    AND?: MarcacaoWhereInput | MarcacaoWhereInput[]
    OR?: MarcacaoWhereInput[]
    NOT?: MarcacaoWhereInput | MarcacaoWhereInput[]
    eventoId?: IntFilter<"Marcacao"> | number
    titulo?: StringFilter<"Marcacao"> | string
    tipo?: StringFilter<"Marcacao"> | string
    dataInicio?: DateTimeFilter<"Marcacao"> | Date | string
    dataFim?: DateTimeFilter<"Marcacao"> | Date | string
    criadoEm?: DateTimeFilter<"Marcacao"> | Date | string
    Evento?: XOR<EventoScalarRelationFilter, EventoWhereInput>
    Jogo?: XOR<JogoNullableScalarRelationFilter, JogoWhereInput> | null
  }, "id" | "jogoId">

  export type MarcacaoOrderByWithAggregationInput = {
    id?: SortOrder
    eventoId?: SortOrder
    titulo?: SortOrder
    tipo?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    jogoId?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    _count?: MarcacaoCountOrderByAggregateInput
    _avg?: MarcacaoAvgOrderByAggregateInput
    _max?: MarcacaoMaxOrderByAggregateInput
    _min?: MarcacaoMinOrderByAggregateInput
    _sum?: MarcacaoSumOrderByAggregateInput
  }

  export type MarcacaoScalarWhereWithAggregatesInput = {
    AND?: MarcacaoScalarWhereWithAggregatesInput | MarcacaoScalarWhereWithAggregatesInput[]
    OR?: MarcacaoScalarWhereWithAggregatesInput[]
    NOT?: MarcacaoScalarWhereWithAggregatesInput | MarcacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Marcacao"> | number
    eventoId?: IntWithAggregatesFilter<"Marcacao"> | number
    titulo?: StringWithAggregatesFilter<"Marcacao"> | string
    tipo?: StringWithAggregatesFilter<"Marcacao"> | string
    dataInicio?: DateTimeWithAggregatesFilter<"Marcacao"> | Date | string
    dataFim?: DateTimeWithAggregatesFilter<"Marcacao"> | Date | string
    jogoId?: IntNullableWithAggregatesFilter<"Marcacao"> | number | null
    criadoEm?: DateTimeWithAggregatesFilter<"Marcacao"> | Date | string
  }

  export type ParticipacaoEquipeWhereInput = {
    AND?: ParticipacaoEquipeWhereInput | ParticipacaoEquipeWhereInput[]
    OR?: ParticipacaoEquipeWhereInput[]
    NOT?: ParticipacaoEquipeWhereInput | ParticipacaoEquipeWhereInput[]
    id?: IntFilter<"ParticipacaoEquipe"> | number
    eventoId?: IntFilter<"ParticipacaoEquipe"> | number
    equipeId?: IntFilter<"ParticipacaoEquipe"> | number
    Equipe?: XOR<EquipeScalarRelationFilter, EquipeWhereInput>
    Evento?: XOR<EventoScalarRelationFilter, EventoWhereInput>
  }

  export type ParticipacaoEquipeOrderByWithRelationInput = {
    id?: SortOrder
    eventoId?: SortOrder
    equipeId?: SortOrder
    Equipe?: EquipeOrderByWithRelationInput
    Evento?: EventoOrderByWithRelationInput
  }

  export type ParticipacaoEquipeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ParticipacaoEquipeWhereInput | ParticipacaoEquipeWhereInput[]
    OR?: ParticipacaoEquipeWhereInput[]
    NOT?: ParticipacaoEquipeWhereInput | ParticipacaoEquipeWhereInput[]
    eventoId?: IntFilter<"ParticipacaoEquipe"> | number
    equipeId?: IntFilter<"ParticipacaoEquipe"> | number
    Equipe?: XOR<EquipeScalarRelationFilter, EquipeWhereInput>
    Evento?: XOR<EventoScalarRelationFilter, EventoWhereInput>
  }, "id">

  export type ParticipacaoEquipeOrderByWithAggregationInput = {
    id?: SortOrder
    eventoId?: SortOrder
    equipeId?: SortOrder
    _count?: ParticipacaoEquipeCountOrderByAggregateInput
    _avg?: ParticipacaoEquipeAvgOrderByAggregateInput
    _max?: ParticipacaoEquipeMaxOrderByAggregateInput
    _min?: ParticipacaoEquipeMinOrderByAggregateInput
    _sum?: ParticipacaoEquipeSumOrderByAggregateInput
  }

  export type ParticipacaoEquipeScalarWhereWithAggregatesInput = {
    AND?: ParticipacaoEquipeScalarWhereWithAggregatesInput | ParticipacaoEquipeScalarWhereWithAggregatesInput[]
    OR?: ParticipacaoEquipeScalarWhereWithAggregatesInput[]
    NOT?: ParticipacaoEquipeScalarWhereWithAggregatesInput | ParticipacaoEquipeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ParticipacaoEquipe"> | number
    eventoId?: IntWithAggregatesFilter<"ParticipacaoEquipe"> | number
    equipeId?: IntWithAggregatesFilter<"ParticipacaoEquipe"> | number
  }

  export type TechnicianWhereInput = {
    AND?: TechnicianWhereInput | TechnicianWhereInput[]
    OR?: TechnicianWhereInput[]
    NOT?: TechnicianWhereInput | TechnicianWhereInput[]
    id?: IntFilter<"Technician"> | number
    nome?: StringFilter<"Technician"> | string
    especialidade?: StringFilter<"Technician"> | string
    disponivel?: BoolFilter<"Technician"> | boolean
  }

  export type TechnicianOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    especialidade?: SortOrder
    disponivel?: SortOrder
  }

  export type TechnicianWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TechnicianWhereInput | TechnicianWhereInput[]
    OR?: TechnicianWhereInput[]
    NOT?: TechnicianWhereInput | TechnicianWhereInput[]
    nome?: StringFilter<"Technician"> | string
    especialidade?: StringFilter<"Technician"> | string
    disponivel?: BoolFilter<"Technician"> | boolean
  }, "id">

  export type TechnicianOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    especialidade?: SortOrder
    disponivel?: SortOrder
    _count?: TechnicianCountOrderByAggregateInput
    _avg?: TechnicianAvgOrderByAggregateInput
    _max?: TechnicianMaxOrderByAggregateInput
    _min?: TechnicianMinOrderByAggregateInput
    _sum?: TechnicianSumOrderByAggregateInput
  }

  export type TechnicianScalarWhereWithAggregatesInput = {
    AND?: TechnicianScalarWhereWithAggregatesInput | TechnicianScalarWhereWithAggregatesInput[]
    OR?: TechnicianScalarWhereWithAggregatesInput[]
    NOT?: TechnicianScalarWhereWithAggregatesInput | TechnicianScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Technician"> | number
    nome?: StringWithAggregatesFilter<"Technician"> | string
    especialidade?: StringWithAggregatesFilter<"Technician"> | string
    disponivel?: BoolWithAggregatesFilter<"Technician"> | boolean
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    nomeCompleto?: StringFilter<"User"> | string
    numeroEstudante?: StringFilter<"User"> | string
    fullemail?: StringNullableFilter<"User"> | string | null
    senha?: StringFilter<"User"> | string
    contacto?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    numeroEstudante?: SortOrder
    fullemail?: SortOrderInput | SortOrder
    senha?: SortOrder
    contacto?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    numeroEstudante?: string
    fullemail?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nomeCompleto?: StringFilter<"User"> | string
    senha?: StringFilter<"User"> | string
    contacto?: StringFilter<"User"> | string
  }, "id" | "numeroEstudante" | "fullemail">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    numeroEstudante?: SortOrder
    fullemail?: SortOrderInput | SortOrder
    senha?: SortOrder
    contacto?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    nomeCompleto?: StringWithAggregatesFilter<"User"> | string
    numeroEstudante?: StringWithAggregatesFilter<"User"> | string
    fullemail?: StringNullableWithAggregatesFilter<"User"> | string | null
    senha?: StringWithAggregatesFilter<"User"> | string
    contacto?: StringWithAggregatesFilter<"User"> | string
  }

  export type EstudanteCreateInput = {
    nomeCompleto: string
    turma: string
    curso: string
    numeroEstudante: string
    modalidade: string
    dataUtilizacao: Date | string
    horario: string
    periodo: string
    telefone: string
    status?: string
  }

  export type EstudanteUncheckedCreateInput = {
    id?: number
    nomeCompleto: string
    turma: string
    curso: string
    numeroEstudante: string
    modalidade: string
    dataUtilizacao: Date | string
    horario: string
    periodo: string
    telefone: string
    status?: string
  }

  export type EstudanteUpdateInput = {
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    turma?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    numeroEstudante?: StringFieldUpdateOperationsInput | string
    modalidade?: StringFieldUpdateOperationsInput | string
    dataUtilizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: StringFieldUpdateOperationsInput | string
    periodo?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type EstudanteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    turma?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    numeroEstudante?: StringFieldUpdateOperationsInput | string
    modalidade?: StringFieldUpdateOperationsInput | string
    dataUtilizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: StringFieldUpdateOperationsInput | string
    periodo?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type EstudanteCreateManyInput = {
    id?: number
    nomeCompleto: string
    turma: string
    curso: string
    numeroEstudante: string
    modalidade: string
    dataUtilizacao: Date | string
    horario: string
    periodo: string
    telefone: string
    status?: string
  }

  export type EstudanteUpdateManyMutationInput = {
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    turma?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    numeroEstudante?: StringFieldUpdateOperationsInput | string
    modalidade?: StringFieldUpdateOperationsInput | string
    dataUtilizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: StringFieldUpdateOperationsInput | string
    periodo?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type EstudanteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    turma?: StringFieldUpdateOperationsInput | string
    curso?: StringFieldUpdateOperationsInput | string
    numeroEstudante?: StringFieldUpdateOperationsInput | string
    modalidade?: StringFieldUpdateOperationsInput | string
    dataUtilizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: StringFieldUpdateOperationsInput | string
    periodo?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ExternoCreateInput = {
    nomeCompleto: string
    contacto: string
    email: string
    dataUtilizacao: Date | string
    horario: string
    periodo: string
    modalidade: string
    status?: string
  }

  export type ExternoUncheckedCreateInput = {
    id?: number
    nomeCompleto: string
    contacto: string
    email: string
    dataUtilizacao: Date | string
    horario: string
    periodo: string
    modalidade: string
    status?: string
  }

  export type ExternoUpdateInput = {
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dataUtilizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: StringFieldUpdateOperationsInput | string
    periodo?: StringFieldUpdateOperationsInput | string
    modalidade?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ExternoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dataUtilizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: StringFieldUpdateOperationsInput | string
    periodo?: StringFieldUpdateOperationsInput | string
    modalidade?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ExternoCreateManyInput = {
    id?: number
    nomeCompleto: string
    contacto: string
    email: string
    dataUtilizacao: Date | string
    horario: string
    periodo: string
    modalidade: string
    status?: string
  }

  export type ExternoUpdateManyMutationInput = {
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dataUtilizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: StringFieldUpdateOperationsInput | string
    periodo?: StringFieldUpdateOperationsInput | string
    modalidade?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ExternoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dataUtilizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: StringFieldUpdateOperationsInput | string
    periodo?: StringFieldUpdateOperationsInput | string
    modalidade?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type EquipeCreateInput = {
    nome: string
    categoria: string
    Jogo_Jogo_equipaAIdToEquipe?: JogoCreateNestedManyWithoutEquipe_Jogo_equipaAIdToEquipeInput
    Jogo_Jogo_equipaBIdToEquipe?: JogoCreateNestedManyWithoutEquipe_Jogo_equipaBIdToEquipeInput
    ParticipacaoEquipe?: ParticipacaoEquipeCreateNestedManyWithoutEquipeInput
  }

  export type EquipeUncheckedCreateInput = {
    id?: number
    nome: string
    categoria: string
    Jogo_Jogo_equipaAIdToEquipe?: JogoUncheckedCreateNestedManyWithoutEquipe_Jogo_equipaAIdToEquipeInput
    Jogo_Jogo_equipaBIdToEquipe?: JogoUncheckedCreateNestedManyWithoutEquipe_Jogo_equipaBIdToEquipeInput
    ParticipacaoEquipe?: ParticipacaoEquipeUncheckedCreateNestedManyWithoutEquipeInput
  }

  export type EquipeUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    Jogo_Jogo_equipaAIdToEquipe?: JogoUpdateManyWithoutEquipe_Jogo_equipaAIdToEquipeNestedInput
    Jogo_Jogo_equipaBIdToEquipe?: JogoUpdateManyWithoutEquipe_Jogo_equipaBIdToEquipeNestedInput
    ParticipacaoEquipe?: ParticipacaoEquipeUpdateManyWithoutEquipeNestedInput
  }

  export type EquipeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    Jogo_Jogo_equipaAIdToEquipe?: JogoUncheckedUpdateManyWithoutEquipe_Jogo_equipaAIdToEquipeNestedInput
    Jogo_Jogo_equipaBIdToEquipe?: JogoUncheckedUpdateManyWithoutEquipe_Jogo_equipaBIdToEquipeNestedInput
    ParticipacaoEquipe?: ParticipacaoEquipeUncheckedUpdateManyWithoutEquipeNestedInput
  }

  export type EquipeCreateManyInput = {
    id?: number
    nome: string
    categoria: string
  }

  export type EquipeUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
  }

  export type EquipeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
  }

  export type EventoCreateInput = {
    nome: string
    contacto: string
    email: string
    tipoEvento: string
    dataInicio: Date | string
    dataFim: Date | string
    formato: string
    estado?: string
    criadoEm?: Date | string
    Jogo?: JogoCreateNestedManyWithoutEventoInput
    Marcacao?: MarcacaoCreateNestedManyWithoutEventoInput
    ParticipacaoEquipe?: ParticipacaoEquipeCreateNestedManyWithoutEventoInput
  }

  export type EventoUncheckedCreateInput = {
    id?: number
    nome: string
    contacto: string
    email: string
    tipoEvento: string
    dataInicio: Date | string
    dataFim: Date | string
    formato: string
    estado?: string
    criadoEm?: Date | string
    Jogo?: JogoUncheckedCreateNestedManyWithoutEventoInput
    Marcacao?: MarcacaoUncheckedCreateNestedManyWithoutEventoInput
    ParticipacaoEquipe?: ParticipacaoEquipeUncheckedCreateNestedManyWithoutEventoInput
  }

  export type EventoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tipoEvento?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    formato?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    Jogo?: JogoUpdateManyWithoutEventoNestedInput
    Marcacao?: MarcacaoUpdateManyWithoutEventoNestedInput
    ParticipacaoEquipe?: ParticipacaoEquipeUpdateManyWithoutEventoNestedInput
  }

  export type EventoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tipoEvento?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    formato?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    Jogo?: JogoUncheckedUpdateManyWithoutEventoNestedInput
    Marcacao?: MarcacaoUncheckedUpdateManyWithoutEventoNestedInput
    ParticipacaoEquipe?: ParticipacaoEquipeUncheckedUpdateManyWithoutEventoNestedInput
  }

  export type EventoCreateManyInput = {
    id?: number
    nome: string
    contacto: string
    email: string
    tipoEvento: string
    dataInicio: Date | string
    dataFim: Date | string
    formato: string
    estado?: string
    criadoEm?: Date | string
  }

  export type EventoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tipoEvento?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    formato?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tipoEvento?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    formato?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JogoCreateInput = {
    resultado?: string | null
    Equipe_Jogo_equipaAIdToEquipe: EquipeCreateNestedOneWithoutJogo_Jogo_equipaAIdToEquipeInput
    Equipe_Jogo_equipaBIdToEquipe: EquipeCreateNestedOneWithoutJogo_Jogo_equipaBIdToEquipeInput
    Evento: EventoCreateNestedOneWithoutJogoInput
    Marcacao?: MarcacaoCreateNestedOneWithoutJogoInput
  }

  export type JogoUncheckedCreateInput = {
    id?: number
    eventoId: number
    equipaAId: number
    equipaBId: number
    resultado?: string | null
    Marcacao?: MarcacaoUncheckedCreateNestedOneWithoutJogoInput
  }

  export type JogoUpdateInput = {
    resultado?: NullableStringFieldUpdateOperationsInput | string | null
    Equipe_Jogo_equipaAIdToEquipe?: EquipeUpdateOneRequiredWithoutJogo_Jogo_equipaAIdToEquipeNestedInput
    Equipe_Jogo_equipaBIdToEquipe?: EquipeUpdateOneRequiredWithoutJogo_Jogo_equipaBIdToEquipeNestedInput
    Evento?: EventoUpdateOneRequiredWithoutJogoNestedInput
    Marcacao?: MarcacaoUpdateOneWithoutJogoNestedInput
  }

  export type JogoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventoId?: IntFieldUpdateOperationsInput | number
    equipaAId?: IntFieldUpdateOperationsInput | number
    equipaBId?: IntFieldUpdateOperationsInput | number
    resultado?: NullableStringFieldUpdateOperationsInput | string | null
    Marcacao?: MarcacaoUncheckedUpdateOneWithoutJogoNestedInput
  }

  export type JogoCreateManyInput = {
    id?: number
    eventoId: number
    equipaAId: number
    equipaBId: number
    resultado?: string | null
  }

  export type JogoUpdateManyMutationInput = {
    resultado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JogoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventoId?: IntFieldUpdateOperationsInput | number
    equipaAId?: IntFieldUpdateOperationsInput | number
    equipaBId?: IntFieldUpdateOperationsInput | number
    resultado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MarcacaoCreateInput = {
    titulo: string
    tipo: string
    dataInicio: Date | string
    dataFim: Date | string
    criadoEm?: Date | string
    Evento: EventoCreateNestedOneWithoutMarcacaoInput
    Jogo?: JogoCreateNestedOneWithoutMarcacaoInput
  }

  export type MarcacaoUncheckedCreateInput = {
    id?: number
    eventoId: number
    titulo: string
    tipo: string
    dataInicio: Date | string
    dataFim: Date | string
    jogoId?: number | null
    criadoEm?: Date | string
  }

  export type MarcacaoUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    Evento?: EventoUpdateOneRequiredWithoutMarcacaoNestedInput
    Jogo?: JogoUpdateOneWithoutMarcacaoNestedInput
  }

  export type MarcacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventoId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    jogoId?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarcacaoCreateManyInput = {
    id?: number
    eventoId: number
    titulo: string
    tipo: string
    dataInicio: Date | string
    dataFim: Date | string
    jogoId?: number | null
    criadoEm?: Date | string
  }

  export type MarcacaoUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarcacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventoId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    jogoId?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipacaoEquipeCreateInput = {
    Equipe: EquipeCreateNestedOneWithoutParticipacaoEquipeInput
    Evento: EventoCreateNestedOneWithoutParticipacaoEquipeInput
  }

  export type ParticipacaoEquipeUncheckedCreateInput = {
    id?: number
    eventoId: number
    equipeId: number
  }

  export type ParticipacaoEquipeUpdateInput = {
    Equipe?: EquipeUpdateOneRequiredWithoutParticipacaoEquipeNestedInput
    Evento?: EventoUpdateOneRequiredWithoutParticipacaoEquipeNestedInput
  }

  export type ParticipacaoEquipeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventoId?: IntFieldUpdateOperationsInput | number
    equipeId?: IntFieldUpdateOperationsInput | number
  }

  export type ParticipacaoEquipeCreateManyInput = {
    id?: number
    eventoId: number
    equipeId: number
  }

  export type ParticipacaoEquipeUpdateManyMutationInput = {

  }

  export type ParticipacaoEquipeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventoId?: IntFieldUpdateOperationsInput | number
    equipeId?: IntFieldUpdateOperationsInput | number
  }

  export type TechnicianCreateInput = {
    nome: string
    especialidade: string
    disponivel?: boolean
  }

  export type TechnicianUncheckedCreateInput = {
    id?: number
    nome: string
    especialidade: string
    disponivel?: boolean
  }

  export type TechnicianUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    disponivel?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TechnicianUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    disponivel?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TechnicianCreateManyInput = {
    id?: number
    nome: string
    especialidade: string
    disponivel?: boolean
  }

  export type TechnicianUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    disponivel?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TechnicianUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    disponivel?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateInput = {
    nomeCompleto: string
    numeroEstudante: string
    fullemail?: string | null
    senha: string
    contacto: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    nomeCompleto: string
    numeroEstudante: string
    fullemail?: string | null
    senha: string
    contacto: string
  }

  export type UserUpdateInput = {
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    numeroEstudante?: StringFieldUpdateOperationsInput | string
    fullemail?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    numeroEstudante?: StringFieldUpdateOperationsInput | string
    fullemail?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    nomeCompleto: string
    numeroEstudante: string
    fullemail?: string | null
    senha: string
    contacto: string
  }

  export type UserUpdateManyMutationInput = {
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    numeroEstudante?: StringFieldUpdateOperationsInput | string
    fullemail?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeCompleto?: StringFieldUpdateOperationsInput | string
    numeroEstudante?: StringFieldUpdateOperationsInput | string
    fullemail?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
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

  export type EstudanteCountOrderByAggregateInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    turma?: SortOrder
    curso?: SortOrder
    numeroEstudante?: SortOrder
    modalidade?: SortOrder
    dataUtilizacao?: SortOrder
    horario?: SortOrder
    periodo?: SortOrder
    telefone?: SortOrder
    status?: SortOrder
  }

  export type EstudanteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EstudanteMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    turma?: SortOrder
    curso?: SortOrder
    numeroEstudante?: SortOrder
    modalidade?: SortOrder
    dataUtilizacao?: SortOrder
    horario?: SortOrder
    periodo?: SortOrder
    telefone?: SortOrder
    status?: SortOrder
  }

  export type EstudanteMinOrderByAggregateInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    turma?: SortOrder
    curso?: SortOrder
    numeroEstudante?: SortOrder
    modalidade?: SortOrder
    dataUtilizacao?: SortOrder
    horario?: SortOrder
    periodo?: SortOrder
    telefone?: SortOrder
    status?: SortOrder
  }

  export type EstudanteSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ExternoCountOrderByAggregateInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    contacto?: SortOrder
    email?: SortOrder
    dataUtilizacao?: SortOrder
    horario?: SortOrder
    periodo?: SortOrder
    modalidade?: SortOrder
    status?: SortOrder
  }

  export type ExternoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExternoMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    contacto?: SortOrder
    email?: SortOrder
    dataUtilizacao?: SortOrder
    horario?: SortOrder
    periodo?: SortOrder
    modalidade?: SortOrder
    status?: SortOrder
  }

  export type ExternoMinOrderByAggregateInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    contacto?: SortOrder
    email?: SortOrder
    dataUtilizacao?: SortOrder
    horario?: SortOrder
    periodo?: SortOrder
    modalidade?: SortOrder
    status?: SortOrder
  }

  export type ExternoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type JogoListRelationFilter = {
    every?: JogoWhereInput
    some?: JogoWhereInput
    none?: JogoWhereInput
  }

  export type ParticipacaoEquipeListRelationFilter = {
    every?: ParticipacaoEquipeWhereInput
    some?: ParticipacaoEquipeWhereInput
    none?: ParticipacaoEquipeWhereInput
  }

  export type JogoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParticipacaoEquipeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EquipeCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
  }

  export type EquipeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EquipeMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
  }

  export type EquipeMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
  }

  export type EquipeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MarcacaoListRelationFilter = {
    every?: MarcacaoWhereInput
    some?: MarcacaoWhereInput
    none?: MarcacaoWhereInput
  }

  export type MarcacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    contacto?: SortOrder
    email?: SortOrder
    tipoEvento?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    formato?: SortOrder
    estado?: SortOrder
    criadoEm?: SortOrder
  }

  export type EventoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EventoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    contacto?: SortOrder
    email?: SortOrder
    tipoEvento?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    formato?: SortOrder
    estado?: SortOrder
    criadoEm?: SortOrder
  }

  export type EventoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    contacto?: SortOrder
    email?: SortOrder
    tipoEvento?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    formato?: SortOrder
    estado?: SortOrder
    criadoEm?: SortOrder
  }

  export type EventoSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EquipeScalarRelationFilter = {
    is?: EquipeWhereInput
    isNot?: EquipeWhereInput
  }

  export type EventoScalarRelationFilter = {
    is?: EventoWhereInput
    isNot?: EventoWhereInput
  }

  export type MarcacaoNullableScalarRelationFilter = {
    is?: MarcacaoWhereInput | null
    isNot?: MarcacaoWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type JogoCountOrderByAggregateInput = {
    id?: SortOrder
    eventoId?: SortOrder
    equipaAId?: SortOrder
    equipaBId?: SortOrder
    resultado?: SortOrder
  }

  export type JogoAvgOrderByAggregateInput = {
    id?: SortOrder
    eventoId?: SortOrder
    equipaAId?: SortOrder
    equipaBId?: SortOrder
  }

  export type JogoMaxOrderByAggregateInput = {
    id?: SortOrder
    eventoId?: SortOrder
    equipaAId?: SortOrder
    equipaBId?: SortOrder
    resultado?: SortOrder
  }

  export type JogoMinOrderByAggregateInput = {
    id?: SortOrder
    eventoId?: SortOrder
    equipaAId?: SortOrder
    equipaBId?: SortOrder
    resultado?: SortOrder
  }

  export type JogoSumOrderByAggregateInput = {
    id?: SortOrder
    eventoId?: SortOrder
    equipaAId?: SortOrder
    equipaBId?: SortOrder
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

  export type JogoNullableScalarRelationFilter = {
    is?: JogoWhereInput | null
    isNot?: JogoWhereInput | null
  }

  export type MarcacaoCountOrderByAggregateInput = {
    id?: SortOrder
    eventoId?: SortOrder
    titulo?: SortOrder
    tipo?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    jogoId?: SortOrder
    criadoEm?: SortOrder
  }

  export type MarcacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    eventoId?: SortOrder
    jogoId?: SortOrder
  }

  export type MarcacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    eventoId?: SortOrder
    titulo?: SortOrder
    tipo?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    jogoId?: SortOrder
    criadoEm?: SortOrder
  }

  export type MarcacaoMinOrderByAggregateInput = {
    id?: SortOrder
    eventoId?: SortOrder
    titulo?: SortOrder
    tipo?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    jogoId?: SortOrder
    criadoEm?: SortOrder
  }

  export type MarcacaoSumOrderByAggregateInput = {
    id?: SortOrder
    eventoId?: SortOrder
    jogoId?: SortOrder
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

  export type ParticipacaoEquipeCountOrderByAggregateInput = {
    id?: SortOrder
    eventoId?: SortOrder
    equipeId?: SortOrder
  }

  export type ParticipacaoEquipeAvgOrderByAggregateInput = {
    id?: SortOrder
    eventoId?: SortOrder
    equipeId?: SortOrder
  }

  export type ParticipacaoEquipeMaxOrderByAggregateInput = {
    id?: SortOrder
    eventoId?: SortOrder
    equipeId?: SortOrder
  }

  export type ParticipacaoEquipeMinOrderByAggregateInput = {
    id?: SortOrder
    eventoId?: SortOrder
    equipeId?: SortOrder
  }

  export type ParticipacaoEquipeSumOrderByAggregateInput = {
    id?: SortOrder
    eventoId?: SortOrder
    equipeId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TechnicianCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    especialidade?: SortOrder
    disponivel?: SortOrder
  }

  export type TechnicianAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TechnicianMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    especialidade?: SortOrder
    disponivel?: SortOrder
  }

  export type TechnicianMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    especialidade?: SortOrder
    disponivel?: SortOrder
  }

  export type TechnicianSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    numeroEstudante?: SortOrder
    fullemail?: SortOrder
    senha?: SortOrder
    contacto?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    numeroEstudante?: SortOrder
    fullemail?: SortOrder
    senha?: SortOrder
    contacto?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nomeCompleto?: SortOrder
    numeroEstudante?: SortOrder
    fullemail?: SortOrder
    senha?: SortOrder
    contacto?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type JogoCreateNestedManyWithoutEquipe_Jogo_equipaAIdToEquipeInput = {
    create?: XOR<JogoCreateWithoutEquipe_Jogo_equipaAIdToEquipeInput, JogoUncheckedCreateWithoutEquipe_Jogo_equipaAIdToEquipeInput> | JogoCreateWithoutEquipe_Jogo_equipaAIdToEquipeInput[] | JogoUncheckedCreateWithoutEquipe_Jogo_equipaAIdToEquipeInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutEquipe_Jogo_equipaAIdToEquipeInput | JogoCreateOrConnectWithoutEquipe_Jogo_equipaAIdToEquipeInput[]
    createMany?: JogoCreateManyEquipe_Jogo_equipaAIdToEquipeInputEnvelope
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
  }

  export type JogoCreateNestedManyWithoutEquipe_Jogo_equipaBIdToEquipeInput = {
    create?: XOR<JogoCreateWithoutEquipe_Jogo_equipaBIdToEquipeInput, JogoUncheckedCreateWithoutEquipe_Jogo_equipaBIdToEquipeInput> | JogoCreateWithoutEquipe_Jogo_equipaBIdToEquipeInput[] | JogoUncheckedCreateWithoutEquipe_Jogo_equipaBIdToEquipeInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutEquipe_Jogo_equipaBIdToEquipeInput | JogoCreateOrConnectWithoutEquipe_Jogo_equipaBIdToEquipeInput[]
    createMany?: JogoCreateManyEquipe_Jogo_equipaBIdToEquipeInputEnvelope
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
  }

  export type ParticipacaoEquipeCreateNestedManyWithoutEquipeInput = {
    create?: XOR<ParticipacaoEquipeCreateWithoutEquipeInput, ParticipacaoEquipeUncheckedCreateWithoutEquipeInput> | ParticipacaoEquipeCreateWithoutEquipeInput[] | ParticipacaoEquipeUncheckedCreateWithoutEquipeInput[]
    connectOrCreate?: ParticipacaoEquipeCreateOrConnectWithoutEquipeInput | ParticipacaoEquipeCreateOrConnectWithoutEquipeInput[]
    createMany?: ParticipacaoEquipeCreateManyEquipeInputEnvelope
    connect?: ParticipacaoEquipeWhereUniqueInput | ParticipacaoEquipeWhereUniqueInput[]
  }

  export type JogoUncheckedCreateNestedManyWithoutEquipe_Jogo_equipaAIdToEquipeInput = {
    create?: XOR<JogoCreateWithoutEquipe_Jogo_equipaAIdToEquipeInput, JogoUncheckedCreateWithoutEquipe_Jogo_equipaAIdToEquipeInput> | JogoCreateWithoutEquipe_Jogo_equipaAIdToEquipeInput[] | JogoUncheckedCreateWithoutEquipe_Jogo_equipaAIdToEquipeInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutEquipe_Jogo_equipaAIdToEquipeInput | JogoCreateOrConnectWithoutEquipe_Jogo_equipaAIdToEquipeInput[]
    createMany?: JogoCreateManyEquipe_Jogo_equipaAIdToEquipeInputEnvelope
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
  }

  export type JogoUncheckedCreateNestedManyWithoutEquipe_Jogo_equipaBIdToEquipeInput = {
    create?: XOR<JogoCreateWithoutEquipe_Jogo_equipaBIdToEquipeInput, JogoUncheckedCreateWithoutEquipe_Jogo_equipaBIdToEquipeInput> | JogoCreateWithoutEquipe_Jogo_equipaBIdToEquipeInput[] | JogoUncheckedCreateWithoutEquipe_Jogo_equipaBIdToEquipeInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutEquipe_Jogo_equipaBIdToEquipeInput | JogoCreateOrConnectWithoutEquipe_Jogo_equipaBIdToEquipeInput[]
    createMany?: JogoCreateManyEquipe_Jogo_equipaBIdToEquipeInputEnvelope
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
  }

  export type ParticipacaoEquipeUncheckedCreateNestedManyWithoutEquipeInput = {
    create?: XOR<ParticipacaoEquipeCreateWithoutEquipeInput, ParticipacaoEquipeUncheckedCreateWithoutEquipeInput> | ParticipacaoEquipeCreateWithoutEquipeInput[] | ParticipacaoEquipeUncheckedCreateWithoutEquipeInput[]
    connectOrCreate?: ParticipacaoEquipeCreateOrConnectWithoutEquipeInput | ParticipacaoEquipeCreateOrConnectWithoutEquipeInput[]
    createMany?: ParticipacaoEquipeCreateManyEquipeInputEnvelope
    connect?: ParticipacaoEquipeWhereUniqueInput | ParticipacaoEquipeWhereUniqueInput[]
  }

  export type JogoUpdateManyWithoutEquipe_Jogo_equipaAIdToEquipeNestedInput = {
    create?: XOR<JogoCreateWithoutEquipe_Jogo_equipaAIdToEquipeInput, JogoUncheckedCreateWithoutEquipe_Jogo_equipaAIdToEquipeInput> | JogoCreateWithoutEquipe_Jogo_equipaAIdToEquipeInput[] | JogoUncheckedCreateWithoutEquipe_Jogo_equipaAIdToEquipeInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutEquipe_Jogo_equipaAIdToEquipeInput | JogoCreateOrConnectWithoutEquipe_Jogo_equipaAIdToEquipeInput[]
    upsert?: JogoUpsertWithWhereUniqueWithoutEquipe_Jogo_equipaAIdToEquipeInput | JogoUpsertWithWhereUniqueWithoutEquipe_Jogo_equipaAIdToEquipeInput[]
    createMany?: JogoCreateManyEquipe_Jogo_equipaAIdToEquipeInputEnvelope
    set?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    disconnect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    delete?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    update?: JogoUpdateWithWhereUniqueWithoutEquipe_Jogo_equipaAIdToEquipeInput | JogoUpdateWithWhereUniqueWithoutEquipe_Jogo_equipaAIdToEquipeInput[]
    updateMany?: JogoUpdateManyWithWhereWithoutEquipe_Jogo_equipaAIdToEquipeInput | JogoUpdateManyWithWhereWithoutEquipe_Jogo_equipaAIdToEquipeInput[]
    deleteMany?: JogoScalarWhereInput | JogoScalarWhereInput[]
  }

  export type JogoUpdateManyWithoutEquipe_Jogo_equipaBIdToEquipeNestedInput = {
    create?: XOR<JogoCreateWithoutEquipe_Jogo_equipaBIdToEquipeInput, JogoUncheckedCreateWithoutEquipe_Jogo_equipaBIdToEquipeInput> | JogoCreateWithoutEquipe_Jogo_equipaBIdToEquipeInput[] | JogoUncheckedCreateWithoutEquipe_Jogo_equipaBIdToEquipeInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutEquipe_Jogo_equipaBIdToEquipeInput | JogoCreateOrConnectWithoutEquipe_Jogo_equipaBIdToEquipeInput[]
    upsert?: JogoUpsertWithWhereUniqueWithoutEquipe_Jogo_equipaBIdToEquipeInput | JogoUpsertWithWhereUniqueWithoutEquipe_Jogo_equipaBIdToEquipeInput[]
    createMany?: JogoCreateManyEquipe_Jogo_equipaBIdToEquipeInputEnvelope
    set?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    disconnect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    delete?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    update?: JogoUpdateWithWhereUniqueWithoutEquipe_Jogo_equipaBIdToEquipeInput | JogoUpdateWithWhereUniqueWithoutEquipe_Jogo_equipaBIdToEquipeInput[]
    updateMany?: JogoUpdateManyWithWhereWithoutEquipe_Jogo_equipaBIdToEquipeInput | JogoUpdateManyWithWhereWithoutEquipe_Jogo_equipaBIdToEquipeInput[]
    deleteMany?: JogoScalarWhereInput | JogoScalarWhereInput[]
  }

  export type ParticipacaoEquipeUpdateManyWithoutEquipeNestedInput = {
    create?: XOR<ParticipacaoEquipeCreateWithoutEquipeInput, ParticipacaoEquipeUncheckedCreateWithoutEquipeInput> | ParticipacaoEquipeCreateWithoutEquipeInput[] | ParticipacaoEquipeUncheckedCreateWithoutEquipeInput[]
    connectOrCreate?: ParticipacaoEquipeCreateOrConnectWithoutEquipeInput | ParticipacaoEquipeCreateOrConnectWithoutEquipeInput[]
    upsert?: ParticipacaoEquipeUpsertWithWhereUniqueWithoutEquipeInput | ParticipacaoEquipeUpsertWithWhereUniqueWithoutEquipeInput[]
    createMany?: ParticipacaoEquipeCreateManyEquipeInputEnvelope
    set?: ParticipacaoEquipeWhereUniqueInput | ParticipacaoEquipeWhereUniqueInput[]
    disconnect?: ParticipacaoEquipeWhereUniqueInput | ParticipacaoEquipeWhereUniqueInput[]
    delete?: ParticipacaoEquipeWhereUniqueInput | ParticipacaoEquipeWhereUniqueInput[]
    connect?: ParticipacaoEquipeWhereUniqueInput | ParticipacaoEquipeWhereUniqueInput[]
    update?: ParticipacaoEquipeUpdateWithWhereUniqueWithoutEquipeInput | ParticipacaoEquipeUpdateWithWhereUniqueWithoutEquipeInput[]
    updateMany?: ParticipacaoEquipeUpdateManyWithWhereWithoutEquipeInput | ParticipacaoEquipeUpdateManyWithWhereWithoutEquipeInput[]
    deleteMany?: ParticipacaoEquipeScalarWhereInput | ParticipacaoEquipeScalarWhereInput[]
  }

  export type JogoUncheckedUpdateManyWithoutEquipe_Jogo_equipaAIdToEquipeNestedInput = {
    create?: XOR<JogoCreateWithoutEquipe_Jogo_equipaAIdToEquipeInput, JogoUncheckedCreateWithoutEquipe_Jogo_equipaAIdToEquipeInput> | JogoCreateWithoutEquipe_Jogo_equipaAIdToEquipeInput[] | JogoUncheckedCreateWithoutEquipe_Jogo_equipaAIdToEquipeInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutEquipe_Jogo_equipaAIdToEquipeInput | JogoCreateOrConnectWithoutEquipe_Jogo_equipaAIdToEquipeInput[]
    upsert?: JogoUpsertWithWhereUniqueWithoutEquipe_Jogo_equipaAIdToEquipeInput | JogoUpsertWithWhereUniqueWithoutEquipe_Jogo_equipaAIdToEquipeInput[]
    createMany?: JogoCreateManyEquipe_Jogo_equipaAIdToEquipeInputEnvelope
    set?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    disconnect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    delete?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    update?: JogoUpdateWithWhereUniqueWithoutEquipe_Jogo_equipaAIdToEquipeInput | JogoUpdateWithWhereUniqueWithoutEquipe_Jogo_equipaAIdToEquipeInput[]
    updateMany?: JogoUpdateManyWithWhereWithoutEquipe_Jogo_equipaAIdToEquipeInput | JogoUpdateManyWithWhereWithoutEquipe_Jogo_equipaAIdToEquipeInput[]
    deleteMany?: JogoScalarWhereInput | JogoScalarWhereInput[]
  }

  export type JogoUncheckedUpdateManyWithoutEquipe_Jogo_equipaBIdToEquipeNestedInput = {
    create?: XOR<JogoCreateWithoutEquipe_Jogo_equipaBIdToEquipeInput, JogoUncheckedCreateWithoutEquipe_Jogo_equipaBIdToEquipeInput> | JogoCreateWithoutEquipe_Jogo_equipaBIdToEquipeInput[] | JogoUncheckedCreateWithoutEquipe_Jogo_equipaBIdToEquipeInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutEquipe_Jogo_equipaBIdToEquipeInput | JogoCreateOrConnectWithoutEquipe_Jogo_equipaBIdToEquipeInput[]
    upsert?: JogoUpsertWithWhereUniqueWithoutEquipe_Jogo_equipaBIdToEquipeInput | JogoUpsertWithWhereUniqueWithoutEquipe_Jogo_equipaBIdToEquipeInput[]
    createMany?: JogoCreateManyEquipe_Jogo_equipaBIdToEquipeInputEnvelope
    set?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    disconnect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    delete?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    update?: JogoUpdateWithWhereUniqueWithoutEquipe_Jogo_equipaBIdToEquipeInput | JogoUpdateWithWhereUniqueWithoutEquipe_Jogo_equipaBIdToEquipeInput[]
    updateMany?: JogoUpdateManyWithWhereWithoutEquipe_Jogo_equipaBIdToEquipeInput | JogoUpdateManyWithWhereWithoutEquipe_Jogo_equipaBIdToEquipeInput[]
    deleteMany?: JogoScalarWhereInput | JogoScalarWhereInput[]
  }

  export type ParticipacaoEquipeUncheckedUpdateManyWithoutEquipeNestedInput = {
    create?: XOR<ParticipacaoEquipeCreateWithoutEquipeInput, ParticipacaoEquipeUncheckedCreateWithoutEquipeInput> | ParticipacaoEquipeCreateWithoutEquipeInput[] | ParticipacaoEquipeUncheckedCreateWithoutEquipeInput[]
    connectOrCreate?: ParticipacaoEquipeCreateOrConnectWithoutEquipeInput | ParticipacaoEquipeCreateOrConnectWithoutEquipeInput[]
    upsert?: ParticipacaoEquipeUpsertWithWhereUniqueWithoutEquipeInput | ParticipacaoEquipeUpsertWithWhereUniqueWithoutEquipeInput[]
    createMany?: ParticipacaoEquipeCreateManyEquipeInputEnvelope
    set?: ParticipacaoEquipeWhereUniqueInput | ParticipacaoEquipeWhereUniqueInput[]
    disconnect?: ParticipacaoEquipeWhereUniqueInput | ParticipacaoEquipeWhereUniqueInput[]
    delete?: ParticipacaoEquipeWhereUniqueInput | ParticipacaoEquipeWhereUniqueInput[]
    connect?: ParticipacaoEquipeWhereUniqueInput | ParticipacaoEquipeWhereUniqueInput[]
    update?: ParticipacaoEquipeUpdateWithWhereUniqueWithoutEquipeInput | ParticipacaoEquipeUpdateWithWhereUniqueWithoutEquipeInput[]
    updateMany?: ParticipacaoEquipeUpdateManyWithWhereWithoutEquipeInput | ParticipacaoEquipeUpdateManyWithWhereWithoutEquipeInput[]
    deleteMany?: ParticipacaoEquipeScalarWhereInput | ParticipacaoEquipeScalarWhereInput[]
  }

  export type JogoCreateNestedManyWithoutEventoInput = {
    create?: XOR<JogoCreateWithoutEventoInput, JogoUncheckedCreateWithoutEventoInput> | JogoCreateWithoutEventoInput[] | JogoUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutEventoInput | JogoCreateOrConnectWithoutEventoInput[]
    createMany?: JogoCreateManyEventoInputEnvelope
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
  }

  export type MarcacaoCreateNestedManyWithoutEventoInput = {
    create?: XOR<MarcacaoCreateWithoutEventoInput, MarcacaoUncheckedCreateWithoutEventoInput> | MarcacaoCreateWithoutEventoInput[] | MarcacaoUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: MarcacaoCreateOrConnectWithoutEventoInput | MarcacaoCreateOrConnectWithoutEventoInput[]
    createMany?: MarcacaoCreateManyEventoInputEnvelope
    connect?: MarcacaoWhereUniqueInput | MarcacaoWhereUniqueInput[]
  }

  export type ParticipacaoEquipeCreateNestedManyWithoutEventoInput = {
    create?: XOR<ParticipacaoEquipeCreateWithoutEventoInput, ParticipacaoEquipeUncheckedCreateWithoutEventoInput> | ParticipacaoEquipeCreateWithoutEventoInput[] | ParticipacaoEquipeUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: ParticipacaoEquipeCreateOrConnectWithoutEventoInput | ParticipacaoEquipeCreateOrConnectWithoutEventoInput[]
    createMany?: ParticipacaoEquipeCreateManyEventoInputEnvelope
    connect?: ParticipacaoEquipeWhereUniqueInput | ParticipacaoEquipeWhereUniqueInput[]
  }

  export type JogoUncheckedCreateNestedManyWithoutEventoInput = {
    create?: XOR<JogoCreateWithoutEventoInput, JogoUncheckedCreateWithoutEventoInput> | JogoCreateWithoutEventoInput[] | JogoUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutEventoInput | JogoCreateOrConnectWithoutEventoInput[]
    createMany?: JogoCreateManyEventoInputEnvelope
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
  }

  export type MarcacaoUncheckedCreateNestedManyWithoutEventoInput = {
    create?: XOR<MarcacaoCreateWithoutEventoInput, MarcacaoUncheckedCreateWithoutEventoInput> | MarcacaoCreateWithoutEventoInput[] | MarcacaoUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: MarcacaoCreateOrConnectWithoutEventoInput | MarcacaoCreateOrConnectWithoutEventoInput[]
    createMany?: MarcacaoCreateManyEventoInputEnvelope
    connect?: MarcacaoWhereUniqueInput | MarcacaoWhereUniqueInput[]
  }

  export type ParticipacaoEquipeUncheckedCreateNestedManyWithoutEventoInput = {
    create?: XOR<ParticipacaoEquipeCreateWithoutEventoInput, ParticipacaoEquipeUncheckedCreateWithoutEventoInput> | ParticipacaoEquipeCreateWithoutEventoInput[] | ParticipacaoEquipeUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: ParticipacaoEquipeCreateOrConnectWithoutEventoInput | ParticipacaoEquipeCreateOrConnectWithoutEventoInput[]
    createMany?: ParticipacaoEquipeCreateManyEventoInputEnvelope
    connect?: ParticipacaoEquipeWhereUniqueInput | ParticipacaoEquipeWhereUniqueInput[]
  }

  export type JogoUpdateManyWithoutEventoNestedInput = {
    create?: XOR<JogoCreateWithoutEventoInput, JogoUncheckedCreateWithoutEventoInput> | JogoCreateWithoutEventoInput[] | JogoUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutEventoInput | JogoCreateOrConnectWithoutEventoInput[]
    upsert?: JogoUpsertWithWhereUniqueWithoutEventoInput | JogoUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: JogoCreateManyEventoInputEnvelope
    set?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    disconnect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    delete?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    update?: JogoUpdateWithWhereUniqueWithoutEventoInput | JogoUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: JogoUpdateManyWithWhereWithoutEventoInput | JogoUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: JogoScalarWhereInput | JogoScalarWhereInput[]
  }

  export type MarcacaoUpdateManyWithoutEventoNestedInput = {
    create?: XOR<MarcacaoCreateWithoutEventoInput, MarcacaoUncheckedCreateWithoutEventoInput> | MarcacaoCreateWithoutEventoInput[] | MarcacaoUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: MarcacaoCreateOrConnectWithoutEventoInput | MarcacaoCreateOrConnectWithoutEventoInput[]
    upsert?: MarcacaoUpsertWithWhereUniqueWithoutEventoInput | MarcacaoUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: MarcacaoCreateManyEventoInputEnvelope
    set?: MarcacaoWhereUniqueInput | MarcacaoWhereUniqueInput[]
    disconnect?: MarcacaoWhereUniqueInput | MarcacaoWhereUniqueInput[]
    delete?: MarcacaoWhereUniqueInput | MarcacaoWhereUniqueInput[]
    connect?: MarcacaoWhereUniqueInput | MarcacaoWhereUniqueInput[]
    update?: MarcacaoUpdateWithWhereUniqueWithoutEventoInput | MarcacaoUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: MarcacaoUpdateManyWithWhereWithoutEventoInput | MarcacaoUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: MarcacaoScalarWhereInput | MarcacaoScalarWhereInput[]
  }

  export type ParticipacaoEquipeUpdateManyWithoutEventoNestedInput = {
    create?: XOR<ParticipacaoEquipeCreateWithoutEventoInput, ParticipacaoEquipeUncheckedCreateWithoutEventoInput> | ParticipacaoEquipeCreateWithoutEventoInput[] | ParticipacaoEquipeUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: ParticipacaoEquipeCreateOrConnectWithoutEventoInput | ParticipacaoEquipeCreateOrConnectWithoutEventoInput[]
    upsert?: ParticipacaoEquipeUpsertWithWhereUniqueWithoutEventoInput | ParticipacaoEquipeUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: ParticipacaoEquipeCreateManyEventoInputEnvelope
    set?: ParticipacaoEquipeWhereUniqueInput | ParticipacaoEquipeWhereUniqueInput[]
    disconnect?: ParticipacaoEquipeWhereUniqueInput | ParticipacaoEquipeWhereUniqueInput[]
    delete?: ParticipacaoEquipeWhereUniqueInput | ParticipacaoEquipeWhereUniqueInput[]
    connect?: ParticipacaoEquipeWhereUniqueInput | ParticipacaoEquipeWhereUniqueInput[]
    update?: ParticipacaoEquipeUpdateWithWhereUniqueWithoutEventoInput | ParticipacaoEquipeUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: ParticipacaoEquipeUpdateManyWithWhereWithoutEventoInput | ParticipacaoEquipeUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: ParticipacaoEquipeScalarWhereInput | ParticipacaoEquipeScalarWhereInput[]
  }

  export type JogoUncheckedUpdateManyWithoutEventoNestedInput = {
    create?: XOR<JogoCreateWithoutEventoInput, JogoUncheckedCreateWithoutEventoInput> | JogoCreateWithoutEventoInput[] | JogoUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: JogoCreateOrConnectWithoutEventoInput | JogoCreateOrConnectWithoutEventoInput[]
    upsert?: JogoUpsertWithWhereUniqueWithoutEventoInput | JogoUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: JogoCreateManyEventoInputEnvelope
    set?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    disconnect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    delete?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    connect?: JogoWhereUniqueInput | JogoWhereUniqueInput[]
    update?: JogoUpdateWithWhereUniqueWithoutEventoInput | JogoUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: JogoUpdateManyWithWhereWithoutEventoInput | JogoUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: JogoScalarWhereInput | JogoScalarWhereInput[]
  }

  export type MarcacaoUncheckedUpdateManyWithoutEventoNestedInput = {
    create?: XOR<MarcacaoCreateWithoutEventoInput, MarcacaoUncheckedCreateWithoutEventoInput> | MarcacaoCreateWithoutEventoInput[] | MarcacaoUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: MarcacaoCreateOrConnectWithoutEventoInput | MarcacaoCreateOrConnectWithoutEventoInput[]
    upsert?: MarcacaoUpsertWithWhereUniqueWithoutEventoInput | MarcacaoUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: MarcacaoCreateManyEventoInputEnvelope
    set?: MarcacaoWhereUniqueInput | MarcacaoWhereUniqueInput[]
    disconnect?: MarcacaoWhereUniqueInput | MarcacaoWhereUniqueInput[]
    delete?: MarcacaoWhereUniqueInput | MarcacaoWhereUniqueInput[]
    connect?: MarcacaoWhereUniqueInput | MarcacaoWhereUniqueInput[]
    update?: MarcacaoUpdateWithWhereUniqueWithoutEventoInput | MarcacaoUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: MarcacaoUpdateManyWithWhereWithoutEventoInput | MarcacaoUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: MarcacaoScalarWhereInput | MarcacaoScalarWhereInput[]
  }

  export type ParticipacaoEquipeUncheckedUpdateManyWithoutEventoNestedInput = {
    create?: XOR<ParticipacaoEquipeCreateWithoutEventoInput, ParticipacaoEquipeUncheckedCreateWithoutEventoInput> | ParticipacaoEquipeCreateWithoutEventoInput[] | ParticipacaoEquipeUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: ParticipacaoEquipeCreateOrConnectWithoutEventoInput | ParticipacaoEquipeCreateOrConnectWithoutEventoInput[]
    upsert?: ParticipacaoEquipeUpsertWithWhereUniqueWithoutEventoInput | ParticipacaoEquipeUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: ParticipacaoEquipeCreateManyEventoInputEnvelope
    set?: ParticipacaoEquipeWhereUniqueInput | ParticipacaoEquipeWhereUniqueInput[]
    disconnect?: ParticipacaoEquipeWhereUniqueInput | ParticipacaoEquipeWhereUniqueInput[]
    delete?: ParticipacaoEquipeWhereUniqueInput | ParticipacaoEquipeWhereUniqueInput[]
    connect?: ParticipacaoEquipeWhereUniqueInput | ParticipacaoEquipeWhereUniqueInput[]
    update?: ParticipacaoEquipeUpdateWithWhereUniqueWithoutEventoInput | ParticipacaoEquipeUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: ParticipacaoEquipeUpdateManyWithWhereWithoutEventoInput | ParticipacaoEquipeUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: ParticipacaoEquipeScalarWhereInput | ParticipacaoEquipeScalarWhereInput[]
  }

  export type EquipeCreateNestedOneWithoutJogo_Jogo_equipaAIdToEquipeInput = {
    create?: XOR<EquipeCreateWithoutJogo_Jogo_equipaAIdToEquipeInput, EquipeUncheckedCreateWithoutJogo_Jogo_equipaAIdToEquipeInput>
    connectOrCreate?: EquipeCreateOrConnectWithoutJogo_Jogo_equipaAIdToEquipeInput
    connect?: EquipeWhereUniqueInput
  }

  export type EquipeCreateNestedOneWithoutJogo_Jogo_equipaBIdToEquipeInput = {
    create?: XOR<EquipeCreateWithoutJogo_Jogo_equipaBIdToEquipeInput, EquipeUncheckedCreateWithoutJogo_Jogo_equipaBIdToEquipeInput>
    connectOrCreate?: EquipeCreateOrConnectWithoutJogo_Jogo_equipaBIdToEquipeInput
    connect?: EquipeWhereUniqueInput
  }

  export type EventoCreateNestedOneWithoutJogoInput = {
    create?: XOR<EventoCreateWithoutJogoInput, EventoUncheckedCreateWithoutJogoInput>
    connectOrCreate?: EventoCreateOrConnectWithoutJogoInput
    connect?: EventoWhereUniqueInput
  }

  export type MarcacaoCreateNestedOneWithoutJogoInput = {
    create?: XOR<MarcacaoCreateWithoutJogoInput, MarcacaoUncheckedCreateWithoutJogoInput>
    connectOrCreate?: MarcacaoCreateOrConnectWithoutJogoInput
    connect?: MarcacaoWhereUniqueInput
  }

  export type MarcacaoUncheckedCreateNestedOneWithoutJogoInput = {
    create?: XOR<MarcacaoCreateWithoutJogoInput, MarcacaoUncheckedCreateWithoutJogoInput>
    connectOrCreate?: MarcacaoCreateOrConnectWithoutJogoInput
    connect?: MarcacaoWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EquipeUpdateOneRequiredWithoutJogo_Jogo_equipaAIdToEquipeNestedInput = {
    create?: XOR<EquipeCreateWithoutJogo_Jogo_equipaAIdToEquipeInput, EquipeUncheckedCreateWithoutJogo_Jogo_equipaAIdToEquipeInput>
    connectOrCreate?: EquipeCreateOrConnectWithoutJogo_Jogo_equipaAIdToEquipeInput
    upsert?: EquipeUpsertWithoutJogo_Jogo_equipaAIdToEquipeInput
    connect?: EquipeWhereUniqueInput
    update?: XOR<XOR<EquipeUpdateToOneWithWhereWithoutJogo_Jogo_equipaAIdToEquipeInput, EquipeUpdateWithoutJogo_Jogo_equipaAIdToEquipeInput>, EquipeUncheckedUpdateWithoutJogo_Jogo_equipaAIdToEquipeInput>
  }

  export type EquipeUpdateOneRequiredWithoutJogo_Jogo_equipaBIdToEquipeNestedInput = {
    create?: XOR<EquipeCreateWithoutJogo_Jogo_equipaBIdToEquipeInput, EquipeUncheckedCreateWithoutJogo_Jogo_equipaBIdToEquipeInput>
    connectOrCreate?: EquipeCreateOrConnectWithoutJogo_Jogo_equipaBIdToEquipeInput
    upsert?: EquipeUpsertWithoutJogo_Jogo_equipaBIdToEquipeInput
    connect?: EquipeWhereUniqueInput
    update?: XOR<XOR<EquipeUpdateToOneWithWhereWithoutJogo_Jogo_equipaBIdToEquipeInput, EquipeUpdateWithoutJogo_Jogo_equipaBIdToEquipeInput>, EquipeUncheckedUpdateWithoutJogo_Jogo_equipaBIdToEquipeInput>
  }

  export type EventoUpdateOneRequiredWithoutJogoNestedInput = {
    create?: XOR<EventoCreateWithoutJogoInput, EventoUncheckedCreateWithoutJogoInput>
    connectOrCreate?: EventoCreateOrConnectWithoutJogoInput
    upsert?: EventoUpsertWithoutJogoInput
    connect?: EventoWhereUniqueInput
    update?: XOR<XOR<EventoUpdateToOneWithWhereWithoutJogoInput, EventoUpdateWithoutJogoInput>, EventoUncheckedUpdateWithoutJogoInput>
  }

  export type MarcacaoUpdateOneWithoutJogoNestedInput = {
    create?: XOR<MarcacaoCreateWithoutJogoInput, MarcacaoUncheckedCreateWithoutJogoInput>
    connectOrCreate?: MarcacaoCreateOrConnectWithoutJogoInput
    upsert?: MarcacaoUpsertWithoutJogoInput
    disconnect?: MarcacaoWhereInput | boolean
    delete?: MarcacaoWhereInput | boolean
    connect?: MarcacaoWhereUniqueInput
    update?: XOR<XOR<MarcacaoUpdateToOneWithWhereWithoutJogoInput, MarcacaoUpdateWithoutJogoInput>, MarcacaoUncheckedUpdateWithoutJogoInput>
  }

  export type MarcacaoUncheckedUpdateOneWithoutJogoNestedInput = {
    create?: XOR<MarcacaoCreateWithoutJogoInput, MarcacaoUncheckedCreateWithoutJogoInput>
    connectOrCreate?: MarcacaoCreateOrConnectWithoutJogoInput
    upsert?: MarcacaoUpsertWithoutJogoInput
    disconnect?: MarcacaoWhereInput | boolean
    delete?: MarcacaoWhereInput | boolean
    connect?: MarcacaoWhereUniqueInput
    update?: XOR<XOR<MarcacaoUpdateToOneWithWhereWithoutJogoInput, MarcacaoUpdateWithoutJogoInput>, MarcacaoUncheckedUpdateWithoutJogoInput>
  }

  export type EventoCreateNestedOneWithoutMarcacaoInput = {
    create?: XOR<EventoCreateWithoutMarcacaoInput, EventoUncheckedCreateWithoutMarcacaoInput>
    connectOrCreate?: EventoCreateOrConnectWithoutMarcacaoInput
    connect?: EventoWhereUniqueInput
  }

  export type JogoCreateNestedOneWithoutMarcacaoInput = {
    create?: XOR<JogoCreateWithoutMarcacaoInput, JogoUncheckedCreateWithoutMarcacaoInput>
    connectOrCreate?: JogoCreateOrConnectWithoutMarcacaoInput
    connect?: JogoWhereUniqueInput
  }

  export type EventoUpdateOneRequiredWithoutMarcacaoNestedInput = {
    create?: XOR<EventoCreateWithoutMarcacaoInput, EventoUncheckedCreateWithoutMarcacaoInput>
    connectOrCreate?: EventoCreateOrConnectWithoutMarcacaoInput
    upsert?: EventoUpsertWithoutMarcacaoInput
    connect?: EventoWhereUniqueInput
    update?: XOR<XOR<EventoUpdateToOneWithWhereWithoutMarcacaoInput, EventoUpdateWithoutMarcacaoInput>, EventoUncheckedUpdateWithoutMarcacaoInput>
  }

  export type JogoUpdateOneWithoutMarcacaoNestedInput = {
    create?: XOR<JogoCreateWithoutMarcacaoInput, JogoUncheckedCreateWithoutMarcacaoInput>
    connectOrCreate?: JogoCreateOrConnectWithoutMarcacaoInput
    upsert?: JogoUpsertWithoutMarcacaoInput
    disconnect?: JogoWhereInput | boolean
    delete?: JogoWhereInput | boolean
    connect?: JogoWhereUniqueInput
    update?: XOR<XOR<JogoUpdateToOneWithWhereWithoutMarcacaoInput, JogoUpdateWithoutMarcacaoInput>, JogoUncheckedUpdateWithoutMarcacaoInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EquipeCreateNestedOneWithoutParticipacaoEquipeInput = {
    create?: XOR<EquipeCreateWithoutParticipacaoEquipeInput, EquipeUncheckedCreateWithoutParticipacaoEquipeInput>
    connectOrCreate?: EquipeCreateOrConnectWithoutParticipacaoEquipeInput
    connect?: EquipeWhereUniqueInput
  }

  export type EventoCreateNestedOneWithoutParticipacaoEquipeInput = {
    create?: XOR<EventoCreateWithoutParticipacaoEquipeInput, EventoUncheckedCreateWithoutParticipacaoEquipeInput>
    connectOrCreate?: EventoCreateOrConnectWithoutParticipacaoEquipeInput
    connect?: EventoWhereUniqueInput
  }

  export type EquipeUpdateOneRequiredWithoutParticipacaoEquipeNestedInput = {
    create?: XOR<EquipeCreateWithoutParticipacaoEquipeInput, EquipeUncheckedCreateWithoutParticipacaoEquipeInput>
    connectOrCreate?: EquipeCreateOrConnectWithoutParticipacaoEquipeInput
    upsert?: EquipeUpsertWithoutParticipacaoEquipeInput
    connect?: EquipeWhereUniqueInput
    update?: XOR<XOR<EquipeUpdateToOneWithWhereWithoutParticipacaoEquipeInput, EquipeUpdateWithoutParticipacaoEquipeInput>, EquipeUncheckedUpdateWithoutParticipacaoEquipeInput>
  }

  export type EventoUpdateOneRequiredWithoutParticipacaoEquipeNestedInput = {
    create?: XOR<EventoCreateWithoutParticipacaoEquipeInput, EventoUncheckedCreateWithoutParticipacaoEquipeInput>
    connectOrCreate?: EventoCreateOrConnectWithoutParticipacaoEquipeInput
    upsert?: EventoUpsertWithoutParticipacaoEquipeInput
    connect?: EventoWhereUniqueInput
    update?: XOR<XOR<EventoUpdateToOneWithWhereWithoutParticipacaoEquipeInput, EventoUpdateWithoutParticipacaoEquipeInput>, EventoUncheckedUpdateWithoutParticipacaoEquipeInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type JogoCreateWithoutEquipe_Jogo_equipaAIdToEquipeInput = {
    resultado?: string | null
    Equipe_Jogo_equipaBIdToEquipe: EquipeCreateNestedOneWithoutJogo_Jogo_equipaBIdToEquipeInput
    Evento: EventoCreateNestedOneWithoutJogoInput
    Marcacao?: MarcacaoCreateNestedOneWithoutJogoInput
  }

  export type JogoUncheckedCreateWithoutEquipe_Jogo_equipaAIdToEquipeInput = {
    id?: number
    eventoId: number
    equipaBId: number
    resultado?: string | null
    Marcacao?: MarcacaoUncheckedCreateNestedOneWithoutJogoInput
  }

  export type JogoCreateOrConnectWithoutEquipe_Jogo_equipaAIdToEquipeInput = {
    where: JogoWhereUniqueInput
    create: XOR<JogoCreateWithoutEquipe_Jogo_equipaAIdToEquipeInput, JogoUncheckedCreateWithoutEquipe_Jogo_equipaAIdToEquipeInput>
  }

  export type JogoCreateManyEquipe_Jogo_equipaAIdToEquipeInputEnvelope = {
    data: JogoCreateManyEquipe_Jogo_equipaAIdToEquipeInput | JogoCreateManyEquipe_Jogo_equipaAIdToEquipeInput[]
    skipDuplicates?: boolean
  }

  export type JogoCreateWithoutEquipe_Jogo_equipaBIdToEquipeInput = {
    resultado?: string | null
    Equipe_Jogo_equipaAIdToEquipe: EquipeCreateNestedOneWithoutJogo_Jogo_equipaAIdToEquipeInput
    Evento: EventoCreateNestedOneWithoutJogoInput
    Marcacao?: MarcacaoCreateNestedOneWithoutJogoInput
  }

  export type JogoUncheckedCreateWithoutEquipe_Jogo_equipaBIdToEquipeInput = {
    id?: number
    eventoId: number
    equipaAId: number
    resultado?: string | null
    Marcacao?: MarcacaoUncheckedCreateNestedOneWithoutJogoInput
  }

  export type JogoCreateOrConnectWithoutEquipe_Jogo_equipaBIdToEquipeInput = {
    where: JogoWhereUniqueInput
    create: XOR<JogoCreateWithoutEquipe_Jogo_equipaBIdToEquipeInput, JogoUncheckedCreateWithoutEquipe_Jogo_equipaBIdToEquipeInput>
  }

  export type JogoCreateManyEquipe_Jogo_equipaBIdToEquipeInputEnvelope = {
    data: JogoCreateManyEquipe_Jogo_equipaBIdToEquipeInput | JogoCreateManyEquipe_Jogo_equipaBIdToEquipeInput[]
    skipDuplicates?: boolean
  }

  export type ParticipacaoEquipeCreateWithoutEquipeInput = {
    Evento: EventoCreateNestedOneWithoutParticipacaoEquipeInput
  }

  export type ParticipacaoEquipeUncheckedCreateWithoutEquipeInput = {
    id?: number
    eventoId: number
  }

  export type ParticipacaoEquipeCreateOrConnectWithoutEquipeInput = {
    where: ParticipacaoEquipeWhereUniqueInput
    create: XOR<ParticipacaoEquipeCreateWithoutEquipeInput, ParticipacaoEquipeUncheckedCreateWithoutEquipeInput>
  }

  export type ParticipacaoEquipeCreateManyEquipeInputEnvelope = {
    data: ParticipacaoEquipeCreateManyEquipeInput | ParticipacaoEquipeCreateManyEquipeInput[]
    skipDuplicates?: boolean
  }

  export type JogoUpsertWithWhereUniqueWithoutEquipe_Jogo_equipaAIdToEquipeInput = {
    where: JogoWhereUniqueInput
    update: XOR<JogoUpdateWithoutEquipe_Jogo_equipaAIdToEquipeInput, JogoUncheckedUpdateWithoutEquipe_Jogo_equipaAIdToEquipeInput>
    create: XOR<JogoCreateWithoutEquipe_Jogo_equipaAIdToEquipeInput, JogoUncheckedCreateWithoutEquipe_Jogo_equipaAIdToEquipeInput>
  }

  export type JogoUpdateWithWhereUniqueWithoutEquipe_Jogo_equipaAIdToEquipeInput = {
    where: JogoWhereUniqueInput
    data: XOR<JogoUpdateWithoutEquipe_Jogo_equipaAIdToEquipeInput, JogoUncheckedUpdateWithoutEquipe_Jogo_equipaAIdToEquipeInput>
  }

  export type JogoUpdateManyWithWhereWithoutEquipe_Jogo_equipaAIdToEquipeInput = {
    where: JogoScalarWhereInput
    data: XOR<JogoUpdateManyMutationInput, JogoUncheckedUpdateManyWithoutEquipe_Jogo_equipaAIdToEquipeInput>
  }

  export type JogoScalarWhereInput = {
    AND?: JogoScalarWhereInput | JogoScalarWhereInput[]
    OR?: JogoScalarWhereInput[]
    NOT?: JogoScalarWhereInput | JogoScalarWhereInput[]
    id?: IntFilter<"Jogo"> | number
    eventoId?: IntFilter<"Jogo"> | number
    equipaAId?: IntFilter<"Jogo"> | number
    equipaBId?: IntFilter<"Jogo"> | number
    resultado?: StringNullableFilter<"Jogo"> | string | null
  }

  export type JogoUpsertWithWhereUniqueWithoutEquipe_Jogo_equipaBIdToEquipeInput = {
    where: JogoWhereUniqueInput
    update: XOR<JogoUpdateWithoutEquipe_Jogo_equipaBIdToEquipeInput, JogoUncheckedUpdateWithoutEquipe_Jogo_equipaBIdToEquipeInput>
    create: XOR<JogoCreateWithoutEquipe_Jogo_equipaBIdToEquipeInput, JogoUncheckedCreateWithoutEquipe_Jogo_equipaBIdToEquipeInput>
  }

  export type JogoUpdateWithWhereUniqueWithoutEquipe_Jogo_equipaBIdToEquipeInput = {
    where: JogoWhereUniqueInput
    data: XOR<JogoUpdateWithoutEquipe_Jogo_equipaBIdToEquipeInput, JogoUncheckedUpdateWithoutEquipe_Jogo_equipaBIdToEquipeInput>
  }

  export type JogoUpdateManyWithWhereWithoutEquipe_Jogo_equipaBIdToEquipeInput = {
    where: JogoScalarWhereInput
    data: XOR<JogoUpdateManyMutationInput, JogoUncheckedUpdateManyWithoutEquipe_Jogo_equipaBIdToEquipeInput>
  }

  export type ParticipacaoEquipeUpsertWithWhereUniqueWithoutEquipeInput = {
    where: ParticipacaoEquipeWhereUniqueInput
    update: XOR<ParticipacaoEquipeUpdateWithoutEquipeInput, ParticipacaoEquipeUncheckedUpdateWithoutEquipeInput>
    create: XOR<ParticipacaoEquipeCreateWithoutEquipeInput, ParticipacaoEquipeUncheckedCreateWithoutEquipeInput>
  }

  export type ParticipacaoEquipeUpdateWithWhereUniqueWithoutEquipeInput = {
    where: ParticipacaoEquipeWhereUniqueInput
    data: XOR<ParticipacaoEquipeUpdateWithoutEquipeInput, ParticipacaoEquipeUncheckedUpdateWithoutEquipeInput>
  }

  export type ParticipacaoEquipeUpdateManyWithWhereWithoutEquipeInput = {
    where: ParticipacaoEquipeScalarWhereInput
    data: XOR<ParticipacaoEquipeUpdateManyMutationInput, ParticipacaoEquipeUncheckedUpdateManyWithoutEquipeInput>
  }

  export type ParticipacaoEquipeScalarWhereInput = {
    AND?: ParticipacaoEquipeScalarWhereInput | ParticipacaoEquipeScalarWhereInput[]
    OR?: ParticipacaoEquipeScalarWhereInput[]
    NOT?: ParticipacaoEquipeScalarWhereInput | ParticipacaoEquipeScalarWhereInput[]
    id?: IntFilter<"ParticipacaoEquipe"> | number
    eventoId?: IntFilter<"ParticipacaoEquipe"> | number
    equipeId?: IntFilter<"ParticipacaoEquipe"> | number
  }

  export type JogoCreateWithoutEventoInput = {
    resultado?: string | null
    Equipe_Jogo_equipaAIdToEquipe: EquipeCreateNestedOneWithoutJogo_Jogo_equipaAIdToEquipeInput
    Equipe_Jogo_equipaBIdToEquipe: EquipeCreateNestedOneWithoutJogo_Jogo_equipaBIdToEquipeInput
    Marcacao?: MarcacaoCreateNestedOneWithoutJogoInput
  }

  export type JogoUncheckedCreateWithoutEventoInput = {
    id?: number
    equipaAId: number
    equipaBId: number
    resultado?: string | null
    Marcacao?: MarcacaoUncheckedCreateNestedOneWithoutJogoInput
  }

  export type JogoCreateOrConnectWithoutEventoInput = {
    where: JogoWhereUniqueInput
    create: XOR<JogoCreateWithoutEventoInput, JogoUncheckedCreateWithoutEventoInput>
  }

  export type JogoCreateManyEventoInputEnvelope = {
    data: JogoCreateManyEventoInput | JogoCreateManyEventoInput[]
    skipDuplicates?: boolean
  }

  export type MarcacaoCreateWithoutEventoInput = {
    titulo: string
    tipo: string
    dataInicio: Date | string
    dataFim: Date | string
    criadoEm?: Date | string
    Jogo?: JogoCreateNestedOneWithoutMarcacaoInput
  }

  export type MarcacaoUncheckedCreateWithoutEventoInput = {
    id?: number
    titulo: string
    tipo: string
    dataInicio: Date | string
    dataFim: Date | string
    jogoId?: number | null
    criadoEm?: Date | string
  }

  export type MarcacaoCreateOrConnectWithoutEventoInput = {
    where: MarcacaoWhereUniqueInput
    create: XOR<MarcacaoCreateWithoutEventoInput, MarcacaoUncheckedCreateWithoutEventoInput>
  }

  export type MarcacaoCreateManyEventoInputEnvelope = {
    data: MarcacaoCreateManyEventoInput | MarcacaoCreateManyEventoInput[]
    skipDuplicates?: boolean
  }

  export type ParticipacaoEquipeCreateWithoutEventoInput = {
    Equipe: EquipeCreateNestedOneWithoutParticipacaoEquipeInput
  }

  export type ParticipacaoEquipeUncheckedCreateWithoutEventoInput = {
    id?: number
    equipeId: number
  }

  export type ParticipacaoEquipeCreateOrConnectWithoutEventoInput = {
    where: ParticipacaoEquipeWhereUniqueInput
    create: XOR<ParticipacaoEquipeCreateWithoutEventoInput, ParticipacaoEquipeUncheckedCreateWithoutEventoInput>
  }

  export type ParticipacaoEquipeCreateManyEventoInputEnvelope = {
    data: ParticipacaoEquipeCreateManyEventoInput | ParticipacaoEquipeCreateManyEventoInput[]
    skipDuplicates?: boolean
  }

  export type JogoUpsertWithWhereUniqueWithoutEventoInput = {
    where: JogoWhereUniqueInput
    update: XOR<JogoUpdateWithoutEventoInput, JogoUncheckedUpdateWithoutEventoInput>
    create: XOR<JogoCreateWithoutEventoInput, JogoUncheckedCreateWithoutEventoInput>
  }

  export type JogoUpdateWithWhereUniqueWithoutEventoInput = {
    where: JogoWhereUniqueInput
    data: XOR<JogoUpdateWithoutEventoInput, JogoUncheckedUpdateWithoutEventoInput>
  }

  export type JogoUpdateManyWithWhereWithoutEventoInput = {
    where: JogoScalarWhereInput
    data: XOR<JogoUpdateManyMutationInput, JogoUncheckedUpdateManyWithoutEventoInput>
  }

  export type MarcacaoUpsertWithWhereUniqueWithoutEventoInput = {
    where: MarcacaoWhereUniqueInput
    update: XOR<MarcacaoUpdateWithoutEventoInput, MarcacaoUncheckedUpdateWithoutEventoInput>
    create: XOR<MarcacaoCreateWithoutEventoInput, MarcacaoUncheckedCreateWithoutEventoInput>
  }

  export type MarcacaoUpdateWithWhereUniqueWithoutEventoInput = {
    where: MarcacaoWhereUniqueInput
    data: XOR<MarcacaoUpdateWithoutEventoInput, MarcacaoUncheckedUpdateWithoutEventoInput>
  }

  export type MarcacaoUpdateManyWithWhereWithoutEventoInput = {
    where: MarcacaoScalarWhereInput
    data: XOR<MarcacaoUpdateManyMutationInput, MarcacaoUncheckedUpdateManyWithoutEventoInput>
  }

  export type MarcacaoScalarWhereInput = {
    AND?: MarcacaoScalarWhereInput | MarcacaoScalarWhereInput[]
    OR?: MarcacaoScalarWhereInput[]
    NOT?: MarcacaoScalarWhereInput | MarcacaoScalarWhereInput[]
    id?: IntFilter<"Marcacao"> | number
    eventoId?: IntFilter<"Marcacao"> | number
    titulo?: StringFilter<"Marcacao"> | string
    tipo?: StringFilter<"Marcacao"> | string
    dataInicio?: DateTimeFilter<"Marcacao"> | Date | string
    dataFim?: DateTimeFilter<"Marcacao"> | Date | string
    jogoId?: IntNullableFilter<"Marcacao"> | number | null
    criadoEm?: DateTimeFilter<"Marcacao"> | Date | string
  }

  export type ParticipacaoEquipeUpsertWithWhereUniqueWithoutEventoInput = {
    where: ParticipacaoEquipeWhereUniqueInput
    update: XOR<ParticipacaoEquipeUpdateWithoutEventoInput, ParticipacaoEquipeUncheckedUpdateWithoutEventoInput>
    create: XOR<ParticipacaoEquipeCreateWithoutEventoInput, ParticipacaoEquipeUncheckedCreateWithoutEventoInput>
  }

  export type ParticipacaoEquipeUpdateWithWhereUniqueWithoutEventoInput = {
    where: ParticipacaoEquipeWhereUniqueInput
    data: XOR<ParticipacaoEquipeUpdateWithoutEventoInput, ParticipacaoEquipeUncheckedUpdateWithoutEventoInput>
  }

  export type ParticipacaoEquipeUpdateManyWithWhereWithoutEventoInput = {
    where: ParticipacaoEquipeScalarWhereInput
    data: XOR<ParticipacaoEquipeUpdateManyMutationInput, ParticipacaoEquipeUncheckedUpdateManyWithoutEventoInput>
  }

  export type EquipeCreateWithoutJogo_Jogo_equipaAIdToEquipeInput = {
    nome: string
    categoria: string
    Jogo_Jogo_equipaBIdToEquipe?: JogoCreateNestedManyWithoutEquipe_Jogo_equipaBIdToEquipeInput
    ParticipacaoEquipe?: ParticipacaoEquipeCreateNestedManyWithoutEquipeInput
  }

  export type EquipeUncheckedCreateWithoutJogo_Jogo_equipaAIdToEquipeInput = {
    id?: number
    nome: string
    categoria: string
    Jogo_Jogo_equipaBIdToEquipe?: JogoUncheckedCreateNestedManyWithoutEquipe_Jogo_equipaBIdToEquipeInput
    ParticipacaoEquipe?: ParticipacaoEquipeUncheckedCreateNestedManyWithoutEquipeInput
  }

  export type EquipeCreateOrConnectWithoutJogo_Jogo_equipaAIdToEquipeInput = {
    where: EquipeWhereUniqueInput
    create: XOR<EquipeCreateWithoutJogo_Jogo_equipaAIdToEquipeInput, EquipeUncheckedCreateWithoutJogo_Jogo_equipaAIdToEquipeInput>
  }

  export type EquipeCreateWithoutJogo_Jogo_equipaBIdToEquipeInput = {
    nome: string
    categoria: string
    Jogo_Jogo_equipaAIdToEquipe?: JogoCreateNestedManyWithoutEquipe_Jogo_equipaAIdToEquipeInput
    ParticipacaoEquipe?: ParticipacaoEquipeCreateNestedManyWithoutEquipeInput
  }

  export type EquipeUncheckedCreateWithoutJogo_Jogo_equipaBIdToEquipeInput = {
    id?: number
    nome: string
    categoria: string
    Jogo_Jogo_equipaAIdToEquipe?: JogoUncheckedCreateNestedManyWithoutEquipe_Jogo_equipaAIdToEquipeInput
    ParticipacaoEquipe?: ParticipacaoEquipeUncheckedCreateNestedManyWithoutEquipeInput
  }

  export type EquipeCreateOrConnectWithoutJogo_Jogo_equipaBIdToEquipeInput = {
    where: EquipeWhereUniqueInput
    create: XOR<EquipeCreateWithoutJogo_Jogo_equipaBIdToEquipeInput, EquipeUncheckedCreateWithoutJogo_Jogo_equipaBIdToEquipeInput>
  }

  export type EventoCreateWithoutJogoInput = {
    nome: string
    contacto: string
    email: string
    tipoEvento: string
    dataInicio: Date | string
    dataFim: Date | string
    formato: string
    estado?: string
    criadoEm?: Date | string
    Marcacao?: MarcacaoCreateNestedManyWithoutEventoInput
    ParticipacaoEquipe?: ParticipacaoEquipeCreateNestedManyWithoutEventoInput
  }

  export type EventoUncheckedCreateWithoutJogoInput = {
    id?: number
    nome: string
    contacto: string
    email: string
    tipoEvento: string
    dataInicio: Date | string
    dataFim: Date | string
    formato: string
    estado?: string
    criadoEm?: Date | string
    Marcacao?: MarcacaoUncheckedCreateNestedManyWithoutEventoInput
    ParticipacaoEquipe?: ParticipacaoEquipeUncheckedCreateNestedManyWithoutEventoInput
  }

  export type EventoCreateOrConnectWithoutJogoInput = {
    where: EventoWhereUniqueInput
    create: XOR<EventoCreateWithoutJogoInput, EventoUncheckedCreateWithoutJogoInput>
  }

  export type MarcacaoCreateWithoutJogoInput = {
    titulo: string
    tipo: string
    dataInicio: Date | string
    dataFim: Date | string
    criadoEm?: Date | string
    Evento: EventoCreateNestedOneWithoutMarcacaoInput
  }

  export type MarcacaoUncheckedCreateWithoutJogoInput = {
    id?: number
    eventoId: number
    titulo: string
    tipo: string
    dataInicio: Date | string
    dataFim: Date | string
    criadoEm?: Date | string
  }

  export type MarcacaoCreateOrConnectWithoutJogoInput = {
    where: MarcacaoWhereUniqueInput
    create: XOR<MarcacaoCreateWithoutJogoInput, MarcacaoUncheckedCreateWithoutJogoInput>
  }

  export type EquipeUpsertWithoutJogo_Jogo_equipaAIdToEquipeInput = {
    update: XOR<EquipeUpdateWithoutJogo_Jogo_equipaAIdToEquipeInput, EquipeUncheckedUpdateWithoutJogo_Jogo_equipaAIdToEquipeInput>
    create: XOR<EquipeCreateWithoutJogo_Jogo_equipaAIdToEquipeInput, EquipeUncheckedCreateWithoutJogo_Jogo_equipaAIdToEquipeInput>
    where?: EquipeWhereInput
  }

  export type EquipeUpdateToOneWithWhereWithoutJogo_Jogo_equipaAIdToEquipeInput = {
    where?: EquipeWhereInput
    data: XOR<EquipeUpdateWithoutJogo_Jogo_equipaAIdToEquipeInput, EquipeUncheckedUpdateWithoutJogo_Jogo_equipaAIdToEquipeInput>
  }

  export type EquipeUpdateWithoutJogo_Jogo_equipaAIdToEquipeInput = {
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    Jogo_Jogo_equipaBIdToEquipe?: JogoUpdateManyWithoutEquipe_Jogo_equipaBIdToEquipeNestedInput
    ParticipacaoEquipe?: ParticipacaoEquipeUpdateManyWithoutEquipeNestedInput
  }

  export type EquipeUncheckedUpdateWithoutJogo_Jogo_equipaAIdToEquipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    Jogo_Jogo_equipaBIdToEquipe?: JogoUncheckedUpdateManyWithoutEquipe_Jogo_equipaBIdToEquipeNestedInput
    ParticipacaoEquipe?: ParticipacaoEquipeUncheckedUpdateManyWithoutEquipeNestedInput
  }

  export type EquipeUpsertWithoutJogo_Jogo_equipaBIdToEquipeInput = {
    update: XOR<EquipeUpdateWithoutJogo_Jogo_equipaBIdToEquipeInput, EquipeUncheckedUpdateWithoutJogo_Jogo_equipaBIdToEquipeInput>
    create: XOR<EquipeCreateWithoutJogo_Jogo_equipaBIdToEquipeInput, EquipeUncheckedCreateWithoutJogo_Jogo_equipaBIdToEquipeInput>
    where?: EquipeWhereInput
  }

  export type EquipeUpdateToOneWithWhereWithoutJogo_Jogo_equipaBIdToEquipeInput = {
    where?: EquipeWhereInput
    data: XOR<EquipeUpdateWithoutJogo_Jogo_equipaBIdToEquipeInput, EquipeUncheckedUpdateWithoutJogo_Jogo_equipaBIdToEquipeInput>
  }

  export type EquipeUpdateWithoutJogo_Jogo_equipaBIdToEquipeInput = {
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    Jogo_Jogo_equipaAIdToEquipe?: JogoUpdateManyWithoutEquipe_Jogo_equipaAIdToEquipeNestedInput
    ParticipacaoEquipe?: ParticipacaoEquipeUpdateManyWithoutEquipeNestedInput
  }

  export type EquipeUncheckedUpdateWithoutJogo_Jogo_equipaBIdToEquipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    Jogo_Jogo_equipaAIdToEquipe?: JogoUncheckedUpdateManyWithoutEquipe_Jogo_equipaAIdToEquipeNestedInput
    ParticipacaoEquipe?: ParticipacaoEquipeUncheckedUpdateManyWithoutEquipeNestedInput
  }

  export type EventoUpsertWithoutJogoInput = {
    update: XOR<EventoUpdateWithoutJogoInput, EventoUncheckedUpdateWithoutJogoInput>
    create: XOR<EventoCreateWithoutJogoInput, EventoUncheckedCreateWithoutJogoInput>
    where?: EventoWhereInput
  }

  export type EventoUpdateToOneWithWhereWithoutJogoInput = {
    where?: EventoWhereInput
    data: XOR<EventoUpdateWithoutJogoInput, EventoUncheckedUpdateWithoutJogoInput>
  }

  export type EventoUpdateWithoutJogoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tipoEvento?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    formato?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    Marcacao?: MarcacaoUpdateManyWithoutEventoNestedInput
    ParticipacaoEquipe?: ParticipacaoEquipeUpdateManyWithoutEventoNestedInput
  }

  export type EventoUncheckedUpdateWithoutJogoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tipoEvento?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    formato?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    Marcacao?: MarcacaoUncheckedUpdateManyWithoutEventoNestedInput
    ParticipacaoEquipe?: ParticipacaoEquipeUncheckedUpdateManyWithoutEventoNestedInput
  }

  export type MarcacaoUpsertWithoutJogoInput = {
    update: XOR<MarcacaoUpdateWithoutJogoInput, MarcacaoUncheckedUpdateWithoutJogoInput>
    create: XOR<MarcacaoCreateWithoutJogoInput, MarcacaoUncheckedCreateWithoutJogoInput>
    where?: MarcacaoWhereInput
  }

  export type MarcacaoUpdateToOneWithWhereWithoutJogoInput = {
    where?: MarcacaoWhereInput
    data: XOR<MarcacaoUpdateWithoutJogoInput, MarcacaoUncheckedUpdateWithoutJogoInput>
  }

  export type MarcacaoUpdateWithoutJogoInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    Evento?: EventoUpdateOneRequiredWithoutMarcacaoNestedInput
  }

  export type MarcacaoUncheckedUpdateWithoutJogoInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventoId?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventoCreateWithoutMarcacaoInput = {
    nome: string
    contacto: string
    email: string
    tipoEvento: string
    dataInicio: Date | string
    dataFim: Date | string
    formato: string
    estado?: string
    criadoEm?: Date | string
    Jogo?: JogoCreateNestedManyWithoutEventoInput
    ParticipacaoEquipe?: ParticipacaoEquipeCreateNestedManyWithoutEventoInput
  }

  export type EventoUncheckedCreateWithoutMarcacaoInput = {
    id?: number
    nome: string
    contacto: string
    email: string
    tipoEvento: string
    dataInicio: Date | string
    dataFim: Date | string
    formato: string
    estado?: string
    criadoEm?: Date | string
    Jogo?: JogoUncheckedCreateNestedManyWithoutEventoInput
    ParticipacaoEquipe?: ParticipacaoEquipeUncheckedCreateNestedManyWithoutEventoInput
  }

  export type EventoCreateOrConnectWithoutMarcacaoInput = {
    where: EventoWhereUniqueInput
    create: XOR<EventoCreateWithoutMarcacaoInput, EventoUncheckedCreateWithoutMarcacaoInput>
  }

  export type JogoCreateWithoutMarcacaoInput = {
    resultado?: string | null
    Equipe_Jogo_equipaAIdToEquipe: EquipeCreateNestedOneWithoutJogo_Jogo_equipaAIdToEquipeInput
    Equipe_Jogo_equipaBIdToEquipe: EquipeCreateNestedOneWithoutJogo_Jogo_equipaBIdToEquipeInput
    Evento: EventoCreateNestedOneWithoutJogoInput
  }

  export type JogoUncheckedCreateWithoutMarcacaoInput = {
    id?: number
    eventoId: number
    equipaAId: number
    equipaBId: number
    resultado?: string | null
  }

  export type JogoCreateOrConnectWithoutMarcacaoInput = {
    where: JogoWhereUniqueInput
    create: XOR<JogoCreateWithoutMarcacaoInput, JogoUncheckedCreateWithoutMarcacaoInput>
  }

  export type EventoUpsertWithoutMarcacaoInput = {
    update: XOR<EventoUpdateWithoutMarcacaoInput, EventoUncheckedUpdateWithoutMarcacaoInput>
    create: XOR<EventoCreateWithoutMarcacaoInput, EventoUncheckedCreateWithoutMarcacaoInput>
    where?: EventoWhereInput
  }

  export type EventoUpdateToOneWithWhereWithoutMarcacaoInput = {
    where?: EventoWhereInput
    data: XOR<EventoUpdateWithoutMarcacaoInput, EventoUncheckedUpdateWithoutMarcacaoInput>
  }

  export type EventoUpdateWithoutMarcacaoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tipoEvento?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    formato?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    Jogo?: JogoUpdateManyWithoutEventoNestedInput
    ParticipacaoEquipe?: ParticipacaoEquipeUpdateManyWithoutEventoNestedInput
  }

  export type EventoUncheckedUpdateWithoutMarcacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tipoEvento?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    formato?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    Jogo?: JogoUncheckedUpdateManyWithoutEventoNestedInput
    ParticipacaoEquipe?: ParticipacaoEquipeUncheckedUpdateManyWithoutEventoNestedInput
  }

  export type JogoUpsertWithoutMarcacaoInput = {
    update: XOR<JogoUpdateWithoutMarcacaoInput, JogoUncheckedUpdateWithoutMarcacaoInput>
    create: XOR<JogoCreateWithoutMarcacaoInput, JogoUncheckedCreateWithoutMarcacaoInput>
    where?: JogoWhereInput
  }

  export type JogoUpdateToOneWithWhereWithoutMarcacaoInput = {
    where?: JogoWhereInput
    data: XOR<JogoUpdateWithoutMarcacaoInput, JogoUncheckedUpdateWithoutMarcacaoInput>
  }

  export type JogoUpdateWithoutMarcacaoInput = {
    resultado?: NullableStringFieldUpdateOperationsInput | string | null
    Equipe_Jogo_equipaAIdToEquipe?: EquipeUpdateOneRequiredWithoutJogo_Jogo_equipaAIdToEquipeNestedInput
    Equipe_Jogo_equipaBIdToEquipe?: EquipeUpdateOneRequiredWithoutJogo_Jogo_equipaBIdToEquipeNestedInput
    Evento?: EventoUpdateOneRequiredWithoutJogoNestedInput
  }

  export type JogoUncheckedUpdateWithoutMarcacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventoId?: IntFieldUpdateOperationsInput | number
    equipaAId?: IntFieldUpdateOperationsInput | number
    equipaBId?: IntFieldUpdateOperationsInput | number
    resultado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EquipeCreateWithoutParticipacaoEquipeInput = {
    nome: string
    categoria: string
    Jogo_Jogo_equipaAIdToEquipe?: JogoCreateNestedManyWithoutEquipe_Jogo_equipaAIdToEquipeInput
    Jogo_Jogo_equipaBIdToEquipe?: JogoCreateNestedManyWithoutEquipe_Jogo_equipaBIdToEquipeInput
  }

  export type EquipeUncheckedCreateWithoutParticipacaoEquipeInput = {
    id?: number
    nome: string
    categoria: string
    Jogo_Jogo_equipaAIdToEquipe?: JogoUncheckedCreateNestedManyWithoutEquipe_Jogo_equipaAIdToEquipeInput
    Jogo_Jogo_equipaBIdToEquipe?: JogoUncheckedCreateNestedManyWithoutEquipe_Jogo_equipaBIdToEquipeInput
  }

  export type EquipeCreateOrConnectWithoutParticipacaoEquipeInput = {
    where: EquipeWhereUniqueInput
    create: XOR<EquipeCreateWithoutParticipacaoEquipeInput, EquipeUncheckedCreateWithoutParticipacaoEquipeInput>
  }

  export type EventoCreateWithoutParticipacaoEquipeInput = {
    nome: string
    contacto: string
    email: string
    tipoEvento: string
    dataInicio: Date | string
    dataFim: Date | string
    formato: string
    estado?: string
    criadoEm?: Date | string
    Jogo?: JogoCreateNestedManyWithoutEventoInput
    Marcacao?: MarcacaoCreateNestedManyWithoutEventoInput
  }

  export type EventoUncheckedCreateWithoutParticipacaoEquipeInput = {
    id?: number
    nome: string
    contacto: string
    email: string
    tipoEvento: string
    dataInicio: Date | string
    dataFim: Date | string
    formato: string
    estado?: string
    criadoEm?: Date | string
    Jogo?: JogoUncheckedCreateNestedManyWithoutEventoInput
    Marcacao?: MarcacaoUncheckedCreateNestedManyWithoutEventoInput
  }

  export type EventoCreateOrConnectWithoutParticipacaoEquipeInput = {
    where: EventoWhereUniqueInput
    create: XOR<EventoCreateWithoutParticipacaoEquipeInput, EventoUncheckedCreateWithoutParticipacaoEquipeInput>
  }

  export type EquipeUpsertWithoutParticipacaoEquipeInput = {
    update: XOR<EquipeUpdateWithoutParticipacaoEquipeInput, EquipeUncheckedUpdateWithoutParticipacaoEquipeInput>
    create: XOR<EquipeCreateWithoutParticipacaoEquipeInput, EquipeUncheckedCreateWithoutParticipacaoEquipeInput>
    where?: EquipeWhereInput
  }

  export type EquipeUpdateToOneWithWhereWithoutParticipacaoEquipeInput = {
    where?: EquipeWhereInput
    data: XOR<EquipeUpdateWithoutParticipacaoEquipeInput, EquipeUncheckedUpdateWithoutParticipacaoEquipeInput>
  }

  export type EquipeUpdateWithoutParticipacaoEquipeInput = {
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    Jogo_Jogo_equipaAIdToEquipe?: JogoUpdateManyWithoutEquipe_Jogo_equipaAIdToEquipeNestedInput
    Jogo_Jogo_equipaBIdToEquipe?: JogoUpdateManyWithoutEquipe_Jogo_equipaBIdToEquipeNestedInput
  }

  export type EquipeUncheckedUpdateWithoutParticipacaoEquipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    Jogo_Jogo_equipaAIdToEquipe?: JogoUncheckedUpdateManyWithoutEquipe_Jogo_equipaAIdToEquipeNestedInput
    Jogo_Jogo_equipaBIdToEquipe?: JogoUncheckedUpdateManyWithoutEquipe_Jogo_equipaBIdToEquipeNestedInput
  }

  export type EventoUpsertWithoutParticipacaoEquipeInput = {
    update: XOR<EventoUpdateWithoutParticipacaoEquipeInput, EventoUncheckedUpdateWithoutParticipacaoEquipeInput>
    create: XOR<EventoCreateWithoutParticipacaoEquipeInput, EventoUncheckedCreateWithoutParticipacaoEquipeInput>
    where?: EventoWhereInput
  }

  export type EventoUpdateToOneWithWhereWithoutParticipacaoEquipeInput = {
    where?: EventoWhereInput
    data: XOR<EventoUpdateWithoutParticipacaoEquipeInput, EventoUncheckedUpdateWithoutParticipacaoEquipeInput>
  }

  export type EventoUpdateWithoutParticipacaoEquipeInput = {
    nome?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tipoEvento?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    formato?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    Jogo?: JogoUpdateManyWithoutEventoNestedInput
    Marcacao?: MarcacaoUpdateManyWithoutEventoNestedInput
  }

  export type EventoUncheckedUpdateWithoutParticipacaoEquipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    contacto?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tipoEvento?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    formato?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    Jogo?: JogoUncheckedUpdateManyWithoutEventoNestedInput
    Marcacao?: MarcacaoUncheckedUpdateManyWithoutEventoNestedInput
  }

  export type JogoCreateManyEquipe_Jogo_equipaAIdToEquipeInput = {
    id?: number
    eventoId: number
    equipaBId: number
    resultado?: string | null
  }

  export type JogoCreateManyEquipe_Jogo_equipaBIdToEquipeInput = {
    id?: number
    eventoId: number
    equipaAId: number
    resultado?: string | null
  }

  export type ParticipacaoEquipeCreateManyEquipeInput = {
    id?: number
    eventoId: number
  }

  export type JogoUpdateWithoutEquipe_Jogo_equipaAIdToEquipeInput = {
    resultado?: NullableStringFieldUpdateOperationsInput | string | null
    Equipe_Jogo_equipaBIdToEquipe?: EquipeUpdateOneRequiredWithoutJogo_Jogo_equipaBIdToEquipeNestedInput
    Evento?: EventoUpdateOneRequiredWithoutJogoNestedInput
    Marcacao?: MarcacaoUpdateOneWithoutJogoNestedInput
  }

  export type JogoUncheckedUpdateWithoutEquipe_Jogo_equipaAIdToEquipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventoId?: IntFieldUpdateOperationsInput | number
    equipaBId?: IntFieldUpdateOperationsInput | number
    resultado?: NullableStringFieldUpdateOperationsInput | string | null
    Marcacao?: MarcacaoUncheckedUpdateOneWithoutJogoNestedInput
  }

  export type JogoUncheckedUpdateManyWithoutEquipe_Jogo_equipaAIdToEquipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventoId?: IntFieldUpdateOperationsInput | number
    equipaBId?: IntFieldUpdateOperationsInput | number
    resultado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JogoUpdateWithoutEquipe_Jogo_equipaBIdToEquipeInput = {
    resultado?: NullableStringFieldUpdateOperationsInput | string | null
    Equipe_Jogo_equipaAIdToEquipe?: EquipeUpdateOneRequiredWithoutJogo_Jogo_equipaAIdToEquipeNestedInput
    Evento?: EventoUpdateOneRequiredWithoutJogoNestedInput
    Marcacao?: MarcacaoUpdateOneWithoutJogoNestedInput
  }

  export type JogoUncheckedUpdateWithoutEquipe_Jogo_equipaBIdToEquipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventoId?: IntFieldUpdateOperationsInput | number
    equipaAId?: IntFieldUpdateOperationsInput | number
    resultado?: NullableStringFieldUpdateOperationsInput | string | null
    Marcacao?: MarcacaoUncheckedUpdateOneWithoutJogoNestedInput
  }

  export type JogoUncheckedUpdateManyWithoutEquipe_Jogo_equipaBIdToEquipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventoId?: IntFieldUpdateOperationsInput | number
    equipaAId?: IntFieldUpdateOperationsInput | number
    resultado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParticipacaoEquipeUpdateWithoutEquipeInput = {
    Evento?: EventoUpdateOneRequiredWithoutParticipacaoEquipeNestedInput
  }

  export type ParticipacaoEquipeUncheckedUpdateWithoutEquipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventoId?: IntFieldUpdateOperationsInput | number
  }

  export type ParticipacaoEquipeUncheckedUpdateManyWithoutEquipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventoId?: IntFieldUpdateOperationsInput | number
  }

  export type JogoCreateManyEventoInput = {
    id?: number
    equipaAId: number
    equipaBId: number
    resultado?: string | null
  }

  export type MarcacaoCreateManyEventoInput = {
    id?: number
    titulo: string
    tipo: string
    dataInicio: Date | string
    dataFim: Date | string
    jogoId?: number | null
    criadoEm?: Date | string
  }

  export type ParticipacaoEquipeCreateManyEventoInput = {
    id?: number
    equipeId: number
  }

  export type JogoUpdateWithoutEventoInput = {
    resultado?: NullableStringFieldUpdateOperationsInput | string | null
    Equipe_Jogo_equipaAIdToEquipe?: EquipeUpdateOneRequiredWithoutJogo_Jogo_equipaAIdToEquipeNestedInput
    Equipe_Jogo_equipaBIdToEquipe?: EquipeUpdateOneRequiredWithoutJogo_Jogo_equipaBIdToEquipeNestedInput
    Marcacao?: MarcacaoUpdateOneWithoutJogoNestedInput
  }

  export type JogoUncheckedUpdateWithoutEventoInput = {
    id?: IntFieldUpdateOperationsInput | number
    equipaAId?: IntFieldUpdateOperationsInput | number
    equipaBId?: IntFieldUpdateOperationsInput | number
    resultado?: NullableStringFieldUpdateOperationsInput | string | null
    Marcacao?: MarcacaoUncheckedUpdateOneWithoutJogoNestedInput
  }

  export type JogoUncheckedUpdateManyWithoutEventoInput = {
    id?: IntFieldUpdateOperationsInput | number
    equipaAId?: IntFieldUpdateOperationsInput | number
    equipaBId?: IntFieldUpdateOperationsInput | number
    resultado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MarcacaoUpdateWithoutEventoInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    Jogo?: JogoUpdateOneWithoutMarcacaoNestedInput
  }

  export type MarcacaoUncheckedUpdateWithoutEventoInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    jogoId?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarcacaoUncheckedUpdateManyWithoutEventoInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    jogoId?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipacaoEquipeUpdateWithoutEventoInput = {
    Equipe?: EquipeUpdateOneRequiredWithoutParticipacaoEquipeNestedInput
  }

  export type ParticipacaoEquipeUncheckedUpdateWithoutEventoInput = {
    id?: IntFieldUpdateOperationsInput | number
    equipeId?: IntFieldUpdateOperationsInput | number
  }

  export type ParticipacaoEquipeUncheckedUpdateManyWithoutEventoInput = {
    id?: IntFieldUpdateOperationsInput | number
    equipeId?: IntFieldUpdateOperationsInput | number
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