import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};


export type Answer = {
  id: Scalars['String'],
  text: Scalars['String'],
};

export type Answers = {
  Answers: Maybe<Array<Maybe<Answer>>>,
};

export type Article = {
   __typename?: 'Article',
  title: Scalars['String'],
  type: Scalars['String'],
  url: Scalars['String'],
  videoUrl: Scalars['String'],
  imgUrl: Scalars['String'],
  categories: Array<Category>,
  introduction: Scalars['String'],
  text: Scalars['String'],
};

export type AuthPayload = {
   __typename?: 'AuthPayload',
  id: Scalars['ID'],
  token: Scalars['String'],
  email: Scalars['String'],
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Category = {
   __typename?: 'Category',
  id: Scalars['String'],
  label: Scalars['String'],
  introduction: Scalars['String'],
  information: Scalars['String'],
};

export type LogoutResponse = {
   __typename?: 'LogoutResponse',
  status: Scalars['String'],
  message: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  _empty: Maybe<Scalars['String']>,
  sendAnswers: Scalars['Boolean'],
  login: AuthPayload,
  register: AuthPayload,
};


export type MutationSendAnswersArgs = {
  input: Answers
};


export type MutationLoginArgs = {
  input: Maybe<UserInput>
};


export type MutationRegisterArgs = {
  input: UserInput
};

export type Query = {
   __typename?: 'Query',
  _empty: Maybe<Scalars['String']>,
  questions: Array<Question>,
  categories: Array<Category>,
  articles: Array<Article>,
};

export type Question = {
   __typename?: 'Question',
  id: Scalars['String'],
  question: Scalars['String'],
};

export type Subscription = {
   __typename?: 'Subscription',
  _empty: Maybe<Scalars['String']>,
};


export type UserInput = {
  email: Scalars['String'],
  password: Scalars['String'],
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Question: ResolverTypeWrapper<Question>,
  Category: ResolverTypeWrapper<Category>,
  Article: ResolverTypeWrapper<Article>,
  Mutation: ResolverTypeWrapper<{}>,
  Answers: Answers,
  Answer: Answer,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  userInput: UserInput,
  AuthPayload: ResolverTypeWrapper<AuthPayload>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Subscription: ResolverTypeWrapper<{}>,
  CacheControlScope: CacheControlScope,
  LogoutResponse: ResolverTypeWrapper<LogoutResponse>,
  Upload: ResolverTypeWrapper<Scalars['Upload']>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  String: Scalars['String'],
  Question: Question,
  Category: Category,
  Article: Article,
  Mutation: {},
  Answers: Answers,
  Answer: Answer,
  Boolean: Scalars['Boolean'],
  userInput: UserInput,
  AuthPayload: AuthPayload,
  ID: Scalars['ID'],
  Subscription: {},
  CacheControlScope: CacheControlScope,
  LogoutResponse: LogoutResponse,
  Upload: Scalars['Upload'],
  Int: Scalars['Int'],
};

export type CacheControlDirectiveResolver<Result, Parent, ContextType = any, Args = {   maxAge: Maybe<Maybe<Scalars['Int']>>,
  scope: Maybe<Maybe<CacheControlScope>> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ArticleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Article'] = ResolversParentTypes['Article']> = {
  title: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  type: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  url: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  videoUrl: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  imgUrl: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  categories: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType>,
  introduction: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  text: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type AuthPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = {
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  token: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  email: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  id: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  label: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  introduction: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  information: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type LogoutResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LogoutResponse'] = ResolversParentTypes['LogoutResponse']> = {
  status: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  message: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _empty: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  sendAnswers: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationSendAnswersArgs, 'input'>>,
  login: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, MutationLoginArgs>,
  register: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'input'>>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _empty: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  questions: Resolver<Array<ResolversTypes['Question']>, ParentType, ContextType>,
  categories: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType>,
  articles: Resolver<Array<ResolversTypes['Article']>, ParentType, ContextType>,
};

export type QuestionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Question'] = ResolversParentTypes['Question']> = {
  id: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  question: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  _empty: SubscriptionResolver<Maybe<ResolversTypes['String']>, "_empty", ParentType, ContextType>,
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload'
}

export type Resolvers<ContextType = any> = {
  Article: ArticleResolvers<ContextType>,
  AuthPayload: AuthPayloadResolvers<ContextType>,
  Category: CategoryResolvers<ContextType>,
  LogoutResponse: LogoutResponseResolvers<ContextType>,
  Mutation: MutationResolvers<ContextType>,
  Query: QueryResolvers<ContextType>,
  Question: QuestionResolvers<ContextType>,
  Subscription: SubscriptionResolvers<ContextType>,
  Upload: GraphQLScalarType,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  cacheControl: CacheControlDirectiveResolver<any, any, ContextType>,
};


/**
* @deprecated
* Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
*/
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;