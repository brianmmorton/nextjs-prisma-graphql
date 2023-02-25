import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateBookmarkedTool = {
  __typename?: 'AggregateBookmarkedTool';
  _count?: Maybe<BookmarkedToolCountAggregate>;
  _max?: Maybe<BookmarkedToolMaxAggregate>;
  _min?: Maybe<BookmarkedToolMinAggregate>;
};

export type AggregateTool = {
  __typename?: 'AggregateTool';
  _count?: Maybe<ToolCountAggregate>;
  _max?: Maybe<ToolMaxAggregate>;
  _min?: Maybe<ToolMinAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
};

export type BookmarkedTool = {
  __typename?: 'BookmarkedTool';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  tool: Tool;
  toolId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type BookmarkedToolCountAggregate = {
  __typename?: 'BookmarkedToolCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  toolId: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type BookmarkedToolCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  toolId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookmarkedToolCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  tool: ToolCreateNestedOneWithoutBookmarkedToolInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutBookmarkedToolsInput;
};

export type BookmarkedToolCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  toolId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type BookmarkedToolCreateManyToolInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type BookmarkedToolCreateManyToolInputEnvelope = {
  data: Array<BookmarkedToolCreateManyToolInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type BookmarkedToolCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  toolId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BookmarkedToolCreateManyUserInputEnvelope = {
  data: Array<BookmarkedToolCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type BookmarkedToolCreateNestedManyWithoutToolInput = {
  connect?: InputMaybe<Array<BookmarkedToolWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookmarkedToolCreateOrConnectWithoutToolInput>>;
  create?: InputMaybe<Array<BookmarkedToolCreateWithoutToolInput>>;
  createMany?: InputMaybe<BookmarkedToolCreateManyToolInputEnvelope>;
};

export type BookmarkedToolCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<BookmarkedToolWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookmarkedToolCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<BookmarkedToolCreateWithoutUserInput>>;
  createMany?: InputMaybe<BookmarkedToolCreateManyUserInputEnvelope>;
};

export type BookmarkedToolCreateOrConnectWithoutToolInput = {
  create: BookmarkedToolCreateWithoutToolInput;
  where: BookmarkedToolWhereUniqueInput;
};

export type BookmarkedToolCreateOrConnectWithoutUserInput = {
  create: BookmarkedToolCreateWithoutUserInput;
  where: BookmarkedToolWhereUniqueInput;
};

export type BookmarkedToolCreateWithoutToolInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutBookmarkedToolsInput;
};

export type BookmarkedToolCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  tool: ToolCreateNestedOneWithoutBookmarkedToolInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BookmarkedToolGroupBy = {
  __typename?: 'BookmarkedToolGroupBy';
  _count?: Maybe<BookmarkedToolCountAggregate>;
  _max?: Maybe<BookmarkedToolMaxAggregate>;
  _min?: Maybe<BookmarkedToolMinAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  toolId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type BookmarkedToolListRelationFilter = {
  every?: InputMaybe<BookmarkedToolWhereInput>;
  none?: InputMaybe<BookmarkedToolWhereInput>;
  some?: InputMaybe<BookmarkedToolWhereInput>;
};

export type BookmarkedToolMaxAggregate = {
  __typename?: 'BookmarkedToolMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  toolId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type BookmarkedToolMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  toolId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookmarkedToolMinAggregate = {
  __typename?: 'BookmarkedToolMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  toolId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type BookmarkedToolMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  toolId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookmarkedToolOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BookmarkedToolOrderByWithAggregationInput = {
  _count?: InputMaybe<BookmarkedToolCountOrderByAggregateInput>;
  _max?: InputMaybe<BookmarkedToolMaxOrderByAggregateInput>;
  _min?: InputMaybe<BookmarkedToolMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  toolId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookmarkedToolOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tool?: InputMaybe<ToolOrderByWithRelationInput>;
  toolId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum BookmarkedToolScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  ToolId = 'toolId',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type BookmarkedToolScalarWhereInput = {
  AND?: InputMaybe<Array<BookmarkedToolScalarWhereInput>>;
  NOT?: InputMaybe<Array<BookmarkedToolScalarWhereInput>>;
  OR?: InputMaybe<Array<BookmarkedToolScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  toolId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type BookmarkedToolScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<BookmarkedToolScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<BookmarkedToolScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<BookmarkedToolScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  toolId?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type BookmarkedToolUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  tool?: InputMaybe<ToolUpdateOneRequiredWithoutBookmarkedToolNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutBookmarkedToolsNestedInput>;
};

export type BookmarkedToolUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookmarkedToolUpdateManyWithWhereWithoutToolInput = {
  data: BookmarkedToolUpdateManyMutationInput;
  where: BookmarkedToolScalarWhereInput;
};

export type BookmarkedToolUpdateManyWithWhereWithoutUserInput = {
  data: BookmarkedToolUpdateManyMutationInput;
  where: BookmarkedToolScalarWhereInput;
};

export type BookmarkedToolUpdateManyWithoutToolNestedInput = {
  connect?: InputMaybe<Array<BookmarkedToolWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookmarkedToolCreateOrConnectWithoutToolInput>>;
  create?: InputMaybe<Array<BookmarkedToolCreateWithoutToolInput>>;
  createMany?: InputMaybe<BookmarkedToolCreateManyToolInputEnvelope>;
  delete?: InputMaybe<Array<BookmarkedToolWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BookmarkedToolScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BookmarkedToolWhereUniqueInput>>;
  set?: InputMaybe<Array<BookmarkedToolWhereUniqueInput>>;
  update?: InputMaybe<Array<BookmarkedToolUpdateWithWhereUniqueWithoutToolInput>>;
  updateMany?: InputMaybe<Array<BookmarkedToolUpdateManyWithWhereWithoutToolInput>>;
  upsert?: InputMaybe<Array<BookmarkedToolUpsertWithWhereUniqueWithoutToolInput>>;
};

export type BookmarkedToolUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<BookmarkedToolWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookmarkedToolCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<BookmarkedToolCreateWithoutUserInput>>;
  createMany?: InputMaybe<BookmarkedToolCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<BookmarkedToolWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BookmarkedToolScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BookmarkedToolWhereUniqueInput>>;
  set?: InputMaybe<Array<BookmarkedToolWhereUniqueInput>>;
  update?: InputMaybe<Array<BookmarkedToolUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<BookmarkedToolUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<BookmarkedToolUpsertWithWhereUniqueWithoutUserInput>>;
};

export type BookmarkedToolUpdateWithWhereUniqueWithoutToolInput = {
  data: BookmarkedToolUpdateWithoutToolInput;
  where: BookmarkedToolWhereUniqueInput;
};

export type BookmarkedToolUpdateWithWhereUniqueWithoutUserInput = {
  data: BookmarkedToolUpdateWithoutUserInput;
  where: BookmarkedToolWhereUniqueInput;
};

export type BookmarkedToolUpdateWithoutToolInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutBookmarkedToolsNestedInput>;
};

export type BookmarkedToolUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  tool?: InputMaybe<ToolUpdateOneRequiredWithoutBookmarkedToolNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookmarkedToolUpsertWithWhereUniqueWithoutToolInput = {
  create: BookmarkedToolCreateWithoutToolInput;
  update: BookmarkedToolUpdateWithoutToolInput;
  where: BookmarkedToolWhereUniqueInput;
};

export type BookmarkedToolUpsertWithWhereUniqueWithoutUserInput = {
  create: BookmarkedToolCreateWithoutUserInput;
  update: BookmarkedToolUpdateWithoutUserInput;
  where: BookmarkedToolWhereUniqueInput;
};

export type BookmarkedToolWhereInput = {
  AND?: InputMaybe<Array<BookmarkedToolWhereInput>>;
  NOT?: InputMaybe<Array<BookmarkedToolWhereInput>>;
  OR?: InputMaybe<Array<BookmarkedToolWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  tool?: InputMaybe<ToolRelationFilter>;
  toolId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type BookmarkedToolWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyBookmarkedTool: AffectedRowsOutput;
  createManyTool: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createOneBookmarkedTool: BookmarkedTool;
  createOneTool: Tool;
  createOneUser: User;
  deleteManyBookmarkedTool: AffectedRowsOutput;
  deleteManyTool: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteOneBookmarkedTool?: Maybe<BookmarkedTool>;
  deleteOneTool?: Maybe<Tool>;
  deleteOneUser?: Maybe<User>;
  pubSubMutation: Scalars['Boolean'];
  pubSubMutationToDynamicTopic: Scalars['Boolean'];
  publisherMutation: Scalars['Boolean'];
  updateManyBookmarkedTool: AffectedRowsOutput;
  updateManyTool: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateOneBookmarkedTool?: Maybe<BookmarkedTool>;
  updateOneTool?: Maybe<Tool>;
  updateOneUser?: Maybe<User>;
  upsertOneBookmarkedTool: BookmarkedTool;
  upsertOneTool: Tool;
  upsertOneUser: User;
};


export type MutationCreateManyBookmarkedToolArgs = {
  data: Array<BookmarkedToolCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyToolArgs = {
  data: Array<ToolCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateOneBookmarkedToolArgs = {
  data: BookmarkedToolCreateInput;
};


export type MutationCreateOneToolArgs = {
  data: ToolCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyBookmarkedToolArgs = {
  where?: InputMaybe<BookmarkedToolWhereInput>;
};


export type MutationDeleteManyToolArgs = {
  where?: InputMaybe<ToolWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteOneBookmarkedToolArgs = {
  where: BookmarkedToolWhereUniqueInput;
};


export type MutationDeleteOneToolArgs = {
  where: ToolWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationPubSubMutationArgs = {
  message?: InputMaybe<Scalars['String']>;
};


export type MutationPubSubMutationToDynamicTopicArgs = {
  message?: InputMaybe<Scalars['String']>;
  topic: Scalars['String'];
};


export type MutationPublisherMutationArgs = {
  message?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateManyBookmarkedToolArgs = {
  data: BookmarkedToolUpdateManyMutationInput;
  where?: InputMaybe<BookmarkedToolWhereInput>;
};


export type MutationUpdateManyToolArgs = {
  data: ToolUpdateManyMutationInput;
  where?: InputMaybe<ToolWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateOneBookmarkedToolArgs = {
  data: BookmarkedToolUpdateInput;
  where: BookmarkedToolWhereUniqueInput;
};


export type MutationUpdateOneToolArgs = {
  data: ToolUpdateInput;
  where: ToolWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneBookmarkedToolArgs = {
  create: BookmarkedToolCreateInput;
  update: BookmarkedToolUpdateInput;
  where: BookmarkedToolWhereUniqueInput;
};


export type MutationUpsertOneToolArgs = {
  create: ToolCreateInput;
  update: ToolUpdateInput;
  where: ToolWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Notification = {
  __typename?: 'Notification';
  date: Scalars['DateTime'];
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateBookmarkedTool: AggregateBookmarkedTool;
  aggregateTool: AggregateTool;
  aggregateUser: AggregateUser;
  bookmarkedTool?: Maybe<BookmarkedTool>;
  bookmarkedTools: Array<BookmarkedTool>;
  currentDate: Scalars['DateTime'];
  findFirstBookmarkedTool?: Maybe<BookmarkedTool>;
  findFirstTool?: Maybe<Tool>;
  findFirstUser?: Maybe<User>;
  groupByBookmarkedTool: Array<BookmarkedToolGroupBy>;
  groupByTool: Array<ToolGroupBy>;
  groupByUser: Array<UserGroupBy>;
  tool?: Maybe<Tool>;
  tools: Array<Tool>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAggregateBookmarkedToolArgs = {
  cursor?: InputMaybe<BookmarkedToolWhereUniqueInput>;
  orderBy?: InputMaybe<Array<BookmarkedToolOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookmarkedToolWhereInput>;
};


export type QueryAggregateToolArgs = {
  cursor?: InputMaybe<ToolWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ToolOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ToolWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryBookmarkedToolArgs = {
  where: BookmarkedToolWhereUniqueInput;
};


export type QueryBookmarkedToolsArgs = {
  cursor?: InputMaybe<BookmarkedToolWhereUniqueInput>;
  distinct?: InputMaybe<Array<BookmarkedToolScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BookmarkedToolOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookmarkedToolWhereInput>;
};


export type QueryFindFirstBookmarkedToolArgs = {
  cursor?: InputMaybe<BookmarkedToolWhereUniqueInput>;
  distinct?: InputMaybe<Array<BookmarkedToolScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BookmarkedToolOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookmarkedToolWhereInput>;
};


export type QueryFindFirstToolArgs = {
  cursor?: InputMaybe<ToolWhereUniqueInput>;
  distinct?: InputMaybe<Array<ToolScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ToolOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ToolWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByBookmarkedToolArgs = {
  by: Array<BookmarkedToolScalarFieldEnum>;
  having?: InputMaybe<BookmarkedToolScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<BookmarkedToolOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookmarkedToolWhereInput>;
};


export type QueryGroupByToolArgs = {
  by: Array<ToolScalarFieldEnum>;
  having?: InputMaybe<ToolScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ToolOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ToolWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryToolArgs = {
  where: ToolWhereUniqueInput;
};


export type QueryToolsArgs = {
  cursor?: InputMaybe<ToolWhereUniqueInput>;
  distinct?: InputMaybe<Array<ToolScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ToolOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ToolWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  bookmarkedToolCreated: BookmarkedTool;
  normalSubscription: Notification;
  subscriptionWithFilter: Notification;
  subscriptionWithFilterToDynamicTopic: Notification;
};


export type SubscriptionSubscriptionWithFilterToDynamicTopicArgs = {
  topic: Scalars['String'];
};

export type Tool = {
  __typename?: 'Tool';
  BookmarkedTool: Array<BookmarkedTool>;
  _count?: Maybe<ToolCount>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type ToolBookmarkedToolArgs = {
  cursor?: InputMaybe<BookmarkedToolWhereUniqueInput>;
  distinct?: InputMaybe<Array<BookmarkedToolScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BookmarkedToolOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookmarkedToolWhereInput>;
};

export type ToolCount = {
  __typename?: 'ToolCount';
  BookmarkedTool: Scalars['Int'];
};

export type ToolCountAggregate = {
  __typename?: 'ToolCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  image: Scalars['Int'];
  link: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type ToolCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ToolCreateInput = {
  BookmarkedTool?: InputMaybe<BookmarkedToolCreateNestedManyWithoutToolInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  link: Scalars['String'];
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ToolCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  link: Scalars['String'];
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ToolCreateNestedOneWithoutBookmarkedToolInput = {
  connect?: InputMaybe<ToolWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ToolCreateOrConnectWithoutBookmarkedToolInput>;
  create?: InputMaybe<ToolCreateWithoutBookmarkedToolInput>;
};

export type ToolCreateOrConnectWithoutBookmarkedToolInput = {
  create: ToolCreateWithoutBookmarkedToolInput;
  where: ToolWhereUniqueInput;
};

export type ToolCreateWithoutBookmarkedToolInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  link: Scalars['String'];
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ToolGroupBy = {
  __typename?: 'ToolGroupBy';
  _count?: Maybe<ToolCountAggregate>;
  _max?: Maybe<ToolMaxAggregate>;
  _min?: Maybe<ToolMinAggregate>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ToolMaxAggregate = {
  __typename?: 'ToolMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ToolMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ToolMinAggregate = {
  __typename?: 'ToolMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ToolMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ToolOrderByWithAggregationInput = {
  _count?: InputMaybe<ToolCountOrderByAggregateInput>;
  _max?: InputMaybe<ToolMaxOrderByAggregateInput>;
  _min?: InputMaybe<ToolMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ToolOrderByWithRelationInput = {
  BookmarkedTool?: InputMaybe<BookmarkedToolOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ToolRelationFilter = {
  is?: InputMaybe<ToolWhereInput>;
  isNot?: InputMaybe<ToolWhereInput>;
};

export enum ToolScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Image = 'image',
  Link = 'link',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type ToolScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ToolScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ToolScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ToolScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  image?: InputMaybe<StringNullableWithAggregatesFilter>;
  link?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type ToolUpdateInput = {
  BookmarkedTool?: InputMaybe<BookmarkedToolUpdateManyWithoutToolNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  link?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ToolUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  link?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ToolUpdateOneRequiredWithoutBookmarkedToolNestedInput = {
  connect?: InputMaybe<ToolWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ToolCreateOrConnectWithoutBookmarkedToolInput>;
  create?: InputMaybe<ToolCreateWithoutBookmarkedToolInput>;
  update?: InputMaybe<ToolUpdateWithoutBookmarkedToolInput>;
  upsert?: InputMaybe<ToolUpsertWithoutBookmarkedToolInput>;
};

export type ToolUpdateWithoutBookmarkedToolInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  link?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ToolUpsertWithoutBookmarkedToolInput = {
  create: ToolCreateWithoutBookmarkedToolInput;
  update: ToolUpdateWithoutBookmarkedToolInput;
};

export type ToolWhereInput = {
  AND?: InputMaybe<Array<ToolWhereInput>>;
  BookmarkedTool?: InputMaybe<BookmarkedToolListRelationFilter>;
  NOT?: InputMaybe<Array<ToolWhereInput>>;
  OR?: InputMaybe<Array<ToolWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringNullableFilter>;
  link?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ToolWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  avatarUrl: Scalars['String'];
  bookmarkedTools: Array<BookmarkedTool>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['String'];
  lastName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type UserBookmarkedToolsArgs = {
  cursor?: InputMaybe<BookmarkedToolWhereUniqueInput>;
  distinct?: InputMaybe<Array<BookmarkedToolScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BookmarkedToolOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookmarkedToolWhereInput>;
};

export type UserCount = {
  __typename?: 'UserCount';
  bookmarkedTools: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  avatarUrl: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  firstName: Scalars['Int'];
  id: Scalars['Int'];
  lastName: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  avatarUrl?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  avatarUrl: Scalars['String'];
  bookmarkedTools?: InputMaybe<BookmarkedToolCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateManyInput = {
  avatarUrl: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateNestedOneWithoutBookmarkedToolsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutBookmarkedToolsInput>;
  create?: InputMaybe<UserCreateWithoutBookmarkedToolsInput>;
};

export type UserCreateOrConnectWithoutBookmarkedToolsInput = {
  create: UserCreateWithoutBookmarkedToolsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutBookmarkedToolsInput = {
  avatarUrl: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  avatarUrl: Scalars['String'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['String'];
  lastName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMaxOrderByAggregateInput = {
  avatarUrl?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMinOrderByAggregateInput = {
  avatarUrl?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  avatarUrl?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  avatarUrl?: InputMaybe<SortOrder>;
  bookmarkedTools?: InputMaybe<BookmarkedToolOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  AvatarUrl = 'avatarUrl',
  CreatedAt = 'createdAt',
  Email = 'email',
  FirstName = 'firstName',
  Id = 'id',
  LastName = 'lastName',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  avatarUrl?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  firstName?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  lastName?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type UserUpdateInput = {
  avatarUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  bookmarkedTools?: InputMaybe<BookmarkedToolUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  avatarUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutBookmarkedToolsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutBookmarkedToolsInput>;
  create?: InputMaybe<UserCreateWithoutBookmarkedToolsInput>;
  update?: InputMaybe<UserUpdateWithoutBookmarkedToolsInput>;
  upsert?: InputMaybe<UserUpsertWithoutBookmarkedToolsInput>;
};

export type UserUpdateWithoutBookmarkedToolsInput = {
  avatarUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutBookmarkedToolsInput = {
  create: UserCreateWithoutBookmarkedToolsInput;
  update: UserUpdateWithoutBookmarkedToolsInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  avatarUrl?: InputMaybe<StringFilter>;
  bookmarkedTools?: InputMaybe<BookmarkedToolListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type ToolQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ToolQuery = { __typename?: 'Query', tool?: { __typename?: 'Tool', id: string, name: string, description: string, link: string, image?: string | null } | null };

export type CreateToolMutationVariables = Exact<{
  name: Scalars['String'];
  description: Scalars['String'];
  link: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
}>;


export type CreateToolMutation = { __typename?: 'Mutation', createOneTool: { __typename?: 'Tool', id: string } };

export type ToolsQueryVariables = Exact<{ [key: string]: never; }>;


export type ToolsQuery = { __typename?: 'Query', tools: Array<{ __typename?: 'Tool', id: string, name: string, description: string, link: string, image?: string | null }> };

export type BookmarkedToolCreatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type BookmarkedToolCreatedSubscription = { __typename?: 'Subscription', bookmarkedToolCreated: { __typename?: 'BookmarkedTool', id: string, userId: string, toolId: string } };

export type ToolPageQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ToolPageQuery = { __typename?: 'Query', tool?: { __typename?: 'Tool', id: string, name: string, description: string, link: string, image?: string | null } | null };

export type CreateOneBookmarkedToolMutationVariables = Exact<{
  idTool: Scalars['String'];
  idUser: Scalars['String'];
}>;


export type CreateOneBookmarkedToolMutation = { __typename?: 'Mutation', createOneBookmarkedTool: { __typename?: 'BookmarkedTool', id: string } };

export type DeleteOneBookmarkedToolMutationVariables = Exact<{
  idBookmarkedTool: Scalars['String'];
}>;


export type DeleteOneBookmarkedToolMutation = { __typename?: 'Mutation', deleteOneBookmarkedTool?: { __typename?: 'BookmarkedTool', id: string } | null };


export const ToolDocument = gql`
    query Tool($id: String!) {
  tool(where: {id: $id}) {
    id
    name
    description
    link
    image
  }
}
    `;

/**
 * __useToolQuery__
 *
 * To run a query within a React component, call `useToolQuery` and pass it any options that fit your needs.
 * When your component renders, `useToolQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useToolQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToolQuery(baseOptions: Apollo.QueryHookOptions<ToolQuery, ToolQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ToolQuery, ToolQueryVariables>(ToolDocument, options);
      }
export function useToolLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ToolQuery, ToolQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ToolQuery, ToolQueryVariables>(ToolDocument, options);
        }
export type ToolQueryHookResult = ReturnType<typeof useToolQuery>;
export type ToolLazyQueryHookResult = ReturnType<typeof useToolLazyQuery>;
export type ToolQueryResult = Apollo.QueryResult<ToolQuery, ToolQueryVariables>;
export const CreateToolDocument = gql`
    mutation CreateTool($name: String!, $description: String!, $link: String!, $image: String) {
  createOneTool(
    data: {name: $name, description: $description, link: $link, image: $image}
  ) {
    id
  }
}
    `;
export type CreateToolMutationFn = Apollo.MutationFunction<CreateToolMutation, CreateToolMutationVariables>;

/**
 * __useCreateToolMutation__
 *
 * To run a mutation, you first call `useCreateToolMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateToolMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createToolMutation, { data, loading, error }] = useCreateToolMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      link: // value for 'link'
 *      image: // value for 'image'
 *   },
 * });
 */
export function useCreateToolMutation(baseOptions?: Apollo.MutationHookOptions<CreateToolMutation, CreateToolMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateToolMutation, CreateToolMutationVariables>(CreateToolDocument, options);
      }
export type CreateToolMutationHookResult = ReturnType<typeof useCreateToolMutation>;
export type CreateToolMutationResult = Apollo.MutationResult<CreateToolMutation>;
export type CreateToolMutationOptions = Apollo.BaseMutationOptions<CreateToolMutation, CreateToolMutationVariables>;
export const ToolsDocument = gql`
    query Tools {
  tools(orderBy: {name: asc}) {
    id
    name
    description
    link
    image
  }
}
    `;

/**
 * __useToolsQuery__
 *
 * To run a query within a React component, call `useToolsQuery` and pass it any options that fit your needs.
 * When your component renders, `useToolsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useToolsQuery({
 *   variables: {
 *   },
 * });
 */
export function useToolsQuery(baseOptions?: Apollo.QueryHookOptions<ToolsQuery, ToolsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ToolsQuery, ToolsQueryVariables>(ToolsDocument, options);
      }
export function useToolsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ToolsQuery, ToolsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ToolsQuery, ToolsQueryVariables>(ToolsDocument, options);
        }
export type ToolsQueryHookResult = ReturnType<typeof useToolsQuery>;
export type ToolsLazyQueryHookResult = ReturnType<typeof useToolsLazyQuery>;
export type ToolsQueryResult = Apollo.QueryResult<ToolsQuery, ToolsQueryVariables>;
export const BookmarkedToolCreatedDocument = gql`
    subscription BookmarkedToolCreated {
  bookmarkedToolCreated {
    id
    userId
    toolId
  }
}
    `;

/**
 * __useBookmarkedToolCreatedSubscription__
 *
 * To run a query within a React component, call `useBookmarkedToolCreatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useBookmarkedToolCreatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookmarkedToolCreatedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useBookmarkedToolCreatedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<BookmarkedToolCreatedSubscription, BookmarkedToolCreatedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<BookmarkedToolCreatedSubscription, BookmarkedToolCreatedSubscriptionVariables>(BookmarkedToolCreatedDocument, options);
      }
export type BookmarkedToolCreatedSubscriptionHookResult = ReturnType<typeof useBookmarkedToolCreatedSubscription>;
export type BookmarkedToolCreatedSubscriptionResult = Apollo.SubscriptionResult<BookmarkedToolCreatedSubscription>;
export const ToolPageDocument = gql`
    query ToolPage($id: String!) {
  tool(where: {id: $id}) {
    id
    name
    description
    link
    image
  }
}
    `;

/**
 * __useToolPageQuery__
 *
 * To run a query within a React component, call `useToolPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useToolPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useToolPageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToolPageQuery(baseOptions: Apollo.QueryHookOptions<ToolPageQuery, ToolPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ToolPageQuery, ToolPageQueryVariables>(ToolPageDocument, options);
      }
export function useToolPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ToolPageQuery, ToolPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ToolPageQuery, ToolPageQueryVariables>(ToolPageDocument, options);
        }
export type ToolPageQueryHookResult = ReturnType<typeof useToolPageQuery>;
export type ToolPageLazyQueryHookResult = ReturnType<typeof useToolPageLazyQuery>;
export type ToolPageQueryResult = Apollo.QueryResult<ToolPageQuery, ToolPageQueryVariables>;
export const CreateOneBookmarkedToolDocument = gql`
    mutation CreateOneBookmarkedTool($idTool: String!, $idUser: String!) {
  createOneBookmarkedTool(
    data: {tool: {connect: {id: $idTool}}, user: {connect: {id: $idUser}}}
  ) {
    id
  }
}
    `;
export type CreateOneBookmarkedToolMutationFn = Apollo.MutationFunction<CreateOneBookmarkedToolMutation, CreateOneBookmarkedToolMutationVariables>;

/**
 * __useCreateOneBookmarkedToolMutation__
 *
 * To run a mutation, you first call `useCreateOneBookmarkedToolMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneBookmarkedToolMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneBookmarkedToolMutation, { data, loading, error }] = useCreateOneBookmarkedToolMutation({
 *   variables: {
 *      idTool: // value for 'idTool'
 *      idUser: // value for 'idUser'
 *   },
 * });
 */
export function useCreateOneBookmarkedToolMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneBookmarkedToolMutation, CreateOneBookmarkedToolMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneBookmarkedToolMutation, CreateOneBookmarkedToolMutationVariables>(CreateOneBookmarkedToolDocument, options);
      }
export type CreateOneBookmarkedToolMutationHookResult = ReturnType<typeof useCreateOneBookmarkedToolMutation>;
export type CreateOneBookmarkedToolMutationResult = Apollo.MutationResult<CreateOneBookmarkedToolMutation>;
export type CreateOneBookmarkedToolMutationOptions = Apollo.BaseMutationOptions<CreateOneBookmarkedToolMutation, CreateOneBookmarkedToolMutationVariables>;
export const DeleteOneBookmarkedToolDocument = gql`
    mutation DeleteOneBookmarkedTool($idBookmarkedTool: String!) {
  deleteOneBookmarkedTool(where: {id: $idBookmarkedTool}) {
    id
  }
}
    `;
export type DeleteOneBookmarkedToolMutationFn = Apollo.MutationFunction<DeleteOneBookmarkedToolMutation, DeleteOneBookmarkedToolMutationVariables>;

/**
 * __useDeleteOneBookmarkedToolMutation__
 *
 * To run a mutation, you first call `useDeleteOneBookmarkedToolMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneBookmarkedToolMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneBookmarkedToolMutation, { data, loading, error }] = useDeleteOneBookmarkedToolMutation({
 *   variables: {
 *      idBookmarkedTool: // value for 'idBookmarkedTool'
 *   },
 * });
 */
export function useDeleteOneBookmarkedToolMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneBookmarkedToolMutation, DeleteOneBookmarkedToolMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneBookmarkedToolMutation, DeleteOneBookmarkedToolMutationVariables>(DeleteOneBookmarkedToolDocument, options);
      }
export type DeleteOneBookmarkedToolMutationHookResult = ReturnType<typeof useDeleteOneBookmarkedToolMutation>;
export type DeleteOneBookmarkedToolMutationResult = Apollo.MutationResult<DeleteOneBookmarkedToolMutation>;
export type DeleteOneBookmarkedToolMutationOptions = Apollo.BaseMutationOptions<DeleteOneBookmarkedToolMutation, DeleteOneBookmarkedToolMutationVariables>;