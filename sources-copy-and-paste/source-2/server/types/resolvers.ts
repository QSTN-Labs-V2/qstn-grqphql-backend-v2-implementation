import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  /** ProfileId custom scalar type */
  ProfileId: any;
};

export type AverageInviteResponseTime = {
  __typename?: 'AverageInviteResponseTime';
  averageResponseTimeHrs?: Maybe<Scalars['Float']>;
  user?: Maybe<Scalars['ProfileId']>;
};

export type AverageTimeCompletingSurvey = {
  __typename?: 'AverageTimeCompletingSurvey';
  averageTimePerServey?: Maybe<Scalars['Float']>;
  user?: Maybe<Scalars['ProfileId']>;
};

export type AverageTimeDraftingSurvey = {
  __typename?: 'AverageTimeDraftingSurvey';
  averageTimePerServey?: Maybe<Scalars['Float']>;
  user?: Maybe<Scalars['ProfileId']>;
};

export type AverageTimePerSession = {
  __typename?: 'AverageTimePerSession';
  averageTimeHrs?: Maybe<Scalars['Float']>;
  user?: Maybe<Scalars['ProfileId']>;
};

export type AverageTimeWithdrawRewards = {
  __typename?: 'AverageTimeWithdrawRewards';
  avgHours?: Maybe<Scalars['Float']>;
  user?: Maybe<Scalars['ProfileId']>;
};

export type AverageUserRatingCompletedSurveys = {
  __typename?: 'AverageUserRatingCompletedSurveys';
  ratingAvg?: Maybe<Scalars['Float']>;
  user?: Maybe<Scalars['ProfileId']>;
};

export type AverageValueAccruedCashViaStripe = {
  __typename?: 'AverageValueAccruedCashViaStripe';
  lastSessionAccruedCashViaStripeValueInUSD?: Maybe<Scalars['Float']>;
  lifetimeCashViaStripeValueInUSD?: Maybe<Scalars['Float']>;
  sessionAverageAccruedCashViaStripeValueInUSD?: Maybe<Scalars['Float']>;
  user?: Maybe<Scalars['ProfileId']>;
};

export type AverageValueAccruedCryptocurrency = {
  __typename?: 'AverageValueAccruedCryptocurrency';
  lastSessionAccruedCryptoValueInUSD?: Maybe<Scalars['Float']>;
  lifetimeCryptoValueInUSD?: Maybe<Scalars['Float']>;
  sessionAverageAccruedCryptoValueInUSD?: Maybe<Scalars['Float']>;
  user?: Maybe<Scalars['ProfileId']>;
};

export type AverageValueSpentNftMarketplace = {
  __typename?: 'AverageValueSpentNFTMarketplace';
  avgCashAmount?: Maybe<Scalars['Float']>;
  user?: Maybe<Scalars['ProfileId']>;
};

/** Chart type data results */
export type ChartDataLabels = {
  __typename?: 'ChartDataLabels';
  avgCompletionTime?: Maybe<Scalars['Float']>;
  data?: Maybe<Array<Scalars['Int']>>;
  labels?: Maybe<Array<Scalars['String']>>;
  rankingCompletions?: Maybe<Array<Maybe<RankTopCompletions>>>;
  totalBusiness?: Maybe<Scalars['Int']>;
  totalCompletions?: Maybe<Scalars['Int']>;
  totalPageviews?: Maybe<Scalars['Int']>;
  totalSurveys?: Maybe<Scalars['Int']>;
};

export type CompletionTimeOfDay = {
  __typename?: 'CompletionTimeOfDay';
  surveyCount?: Maybe<Scalars['Int']>;
  timeOfDay?: Maybe<Scalars['Int']>;
};

export type CorrelationSurveyComplexityAndCompletion = {
  __typename?: 'CorrelationSurveyComplexityAndCompletion';
  completionRatio?: Maybe<Scalars['Float']>;
  questionCount?: Maybe<Scalars['Int']>;
  surveyId?: Maybe<Scalars['Int']>;
};

export type DataMarketplace = {
  __typename?: 'DataMarketplace';
  averageInviteResponseTime?: Maybe<Array<Maybe<AverageInviteResponseTime>>>;
  averageTimeDraftingSurvey?: Maybe<Array<Maybe<AverageTimeDraftingSurvey>>>;
  correlationSurveyComplexityAndCompletion?: Maybe<Array<Maybe<CorrelationSurveyComplexityAndCompletion>>>;
  fastestDraftSurvey?: Maybe<FastestDraftSurvey>;
  mostCommonSurveyLengthPreferred?: Maybe<Array<Maybe<MostCommonSurveyLengthPreferred>>>;
  rankedTagsIssuedSurveys?: Maybe<Array<Maybe<RankedTagsIssuedSurveys>>>;
  slowestTimeDraftSurvey?: Maybe<SlowestTimeDraftSurvey>;
  subscriptionHistoryMarketplace?: Maybe<Array<Maybe<SubscriptionHistory>>>;
  subscriptionLevelMarketplace?: Maybe<Array<Maybe<SubscriptionLevel>>>;
  unclaimedRewardStatusAndDuration?: Maybe<UnclaimedRewardStatusAndDuration>;
  userAverageSessionTime?: Maybe<Array<Maybe<UserAverageSessionTime>>>;
  walletsConnected?: Maybe<WalletsConnected>;
};

export type DataUser = {
  __typename?: 'DataUser';
  averageTimeCompletingSurvey?: Maybe<Array<Maybe<AverageTimeCompletingSurvey>>>;
  averageTimePerSession?: Maybe<Array<Maybe<AverageTimePerSession>>>;
  averageTimeWithdrawRewards?: Maybe<Array<Maybe<AverageTimeWithdrawRewards>>>;
  averageUserRatingCompletedSurveys?: Maybe<Array<Maybe<AverageUserRatingCompletedSurveys>>>;
  averageValueAccruedCashViaStripe?: Maybe<Array<Maybe<AverageValueAccruedCashViaStripe>>>;
  averageValueAccruedCryptocurrency?: Maybe<Array<Maybe<AverageValueAccruedCryptocurrency>>>;
  averageValueSpentNFTMarketplace?: Maybe<Array<Maybe<AverageValueSpentNftMarketplace>>>;
  fastestCompleteSurvey?: Maybe<FastestCompleteSurvey>;
  mostCommonTimeOfDaySurveyCompletitons?: Maybe<MostCommonTimeOfDaySurveyCompletitons>;
  nFTMarketplacePurchaseHistory?: Maybe<NftMarketplacePurchaseHistory>;
  rankedTagsCompletedSurveys?: Maybe<Array<Maybe<RankedTagsCompletedSurveys>>>;
  slowestCompleteSurvey?: Maybe<SlowestCompleteSurvey>;
  subscriptionHistory?: Maybe<Array<Maybe<SubscriptionHistory>>>;
  subscriptionLevel?: Maybe<Array<Maybe<SubscriptionLevel>>>;
  surveyCompletionBasedOnQuestionCount?: Maybe<Array<Maybe<SurveyCompletionBasedOnQuestionCount>>>;
  tutorialCompletitions?: Maybe<Array<Maybe<TutorialCompletitions>>>;
  unclaimedRewardStatusAndDuration?: Maybe<UnclaimedRewardStatusAndDuration>;
  userEngagementRateNFTMarketplace?: Maybe<Array<Maybe<UserEngagementRateNftMarketplace>>>;
  walletsConnectedPerBlockchain?: Maybe<WalletsConnectedPerBlockchain>;
};

export type FastestCompleteSurvey = {
  __typename?: 'FastestCompleteSurvey';
  near?: Maybe<Array<Maybe<SurveyTakerInfo>>>;
  polkadot?: Maybe<Array<Maybe<SurveyTakerInfo>>>;
  polygon?: Maybe<Array<Maybe<SurveyTakerInfo>>>;
  total?: Maybe<Array<Maybe<SurveyTakerInfo>>>;
};

export type FastestDraftSurvey = {
  __typename?: 'FastestDraftSurvey';
  near?: Maybe<Array<Maybe<SurveyDrafterInfo>>>;
  polkadot?: Maybe<Array<Maybe<SurveyDrafterInfo>>>;
  polygon?: Maybe<Array<Maybe<SurveyDrafterInfo>>>;
  total?: Maybe<Array<Maybe<SurveyDrafterInfo>>>;
};

export type GoodsOwnedMedia = {
  __typename?: 'GoodsOwnedMedia';
  mediaId?: Maybe<Scalars['String']>;
};

export type MarketplaceRequest = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MediaBoughtAndSold = {
  __typename?: 'MediaBoughtAndSold';
  mediaId: Scalars['String'];
};

export type MediaBoughtAndSoldRequest = {
  profileId: Scalars['ProfileId'];
};

export type MediaSold = {
  __typename?: 'MediaSold';
  mediaId?: Maybe<Scalars['String']>;
};

export type MostCommonSurveyLengthPreferred = {
  __typename?: 'MostCommonSurveyLengthPreferred';
  questionCount?: Maybe<Scalars['Int']>;
  surveysCompleted?: Maybe<Scalars['Int']>;
};

export type MostCommonTimeOfDaySurveyCompletitons = {
  __typename?: 'MostCommonTimeOfDaySurveyCompletitons';
  completionTimeOfDay?: Maybe<Array<Maybe<CompletionTimeOfDay>>>;
  userCompletionTimeOfDay?: Maybe<UserCompletionTimeOfDay>;
};

export type NftMarketplacePurchaseHistory = {
  __typename?: 'NFTMarketplacePurchaseHistory';
  purchaseAmountTotals?: Maybe<Array<Maybe<PurchaseAmountTotals>>>;
  purchaseInfoHistory?: Maybe<Array<Maybe<PurchaseInfoHistory>>>;
};

export type PurchaseAmountTotals = {
  __typename?: 'PurchaseAmountTotals';
  totalPurchasedConvertedInUSD?: Maybe<Scalars['Float']>;
  user?: Maybe<Scalars['ProfileId']>;
};

export type PurchaseHistory = {
  __typename?: 'PurchaseHistory';
  mediaId?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['ID']>;
};

export type PurchaseInfoHistory = {
  __typename?: 'PurchaseInfoHistory';
  createdAt?: Maybe<Scalars['String']>;
  orderAmountConvertedInUSD?: Maybe<Scalars['Float']>;
  orderId?: Maybe<Scalars['Int']>;
  orderStatus?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['ProfileId']>;
};

export type Query = {
  __typename?: 'Query';
  allMediaBoughtAndSold?: Maybe<Array<Maybe<MediaBoughtAndSold>>>;
  dataMarketplace?: Maybe<DataMarketplace>;
  dataUser?: Maybe<DataUser>;
  goodsOwnedPerUser?: Maybe<Array<Maybe<GoodsOwnedMedia>>>;
  mediaSoldByCompanyOrUser?: Maybe<Array<Maybe<MediaSold>>>;
  ping: Scalars['String'];
  purchaseHistoryPerUser?: Maybe<Array<Maybe<PurchaseHistory>>>;
  saleHistoryPerBusiness?: Maybe<SaleHistory>;
  /** Statistics and analytics for surveys */
  surveyAnalytics: ChartDataLabels;
  topBusiness: ChartDataLabels;
};


export type QueryDataMarketplaceArgs = {
  request?: InputMaybe<MarketplaceRequest>;
};


export type QueryDataUserArgs = {
  request?: InputMaybe<UserRequest>;
};


export type QueryMediaSoldByCompanyOrUserArgs = {
  request?: InputMaybe<MediaBoughtAndSoldRequest>;
};


export type QueryPurchaseHistoryPerUserArgs = {
  request?: InputMaybe<PurchaseHistoryPerUserRequest>;
};


export type QuerySaleHistoryPerBusinessArgs = {
  request?: InputMaybe<SaleHistoryPerBusinessRequest>;
};


export type QuerySurveyAnalyticsArgs = {
  request: SurveyAnalyticsRequest;
};


export type QueryTopBusinessArgs = {
  request: TopBusinessRequest;
};

export type RankTopCompletions = {
  __typename?: 'RankTopCompletions';
  completions?: Maybe<Scalars['Int']>;
  surveyId?: Maybe<Scalars['ID']>;
};

export type RankedTagsCompletedSurveys = {
  __typename?: 'RankedTagsCompletedSurveys';
  category_tags?: Maybe<Scalars['String']>;
  tag_count?: Maybe<Scalars['Int']>;
};

export type RankedTagsIssuedSurveys = {
  __typename?: 'RankedTagsIssuedSurveys';
  categoryTags?: Maybe<Scalars['String']>;
  tagCount?: Maybe<Scalars['Int']>;
};

export type SaleHistory = {
  __typename?: 'SaleHistory';
  items?: Maybe<Array<Maybe<SaleItem>>>;
  total?: Maybe<Scalars['Int']>;
};

export type SaleHistoryPerBusinessRequest = {
  profileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
};

export type SaleItem = {
  __typename?: 'SaleItem';
  buyerId?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  issuedAt?: Maybe<Scalars['Date']>;
  name?: Maybe<Scalars['String']>;
  orderAmount?: Maybe<Scalars['Float']>;
  orderStatus?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Int']>;
  sellerId?: Maybe<Scalars['Int']>;
};

export type SlowestCompleteSurvey = {
  __typename?: 'SlowestCompleteSurvey';
  near?: Maybe<Array<Maybe<SurveyTakerInfo>>>;
  polkadot?: Maybe<Array<Maybe<SurveyTakerInfo>>>;
  polygon?: Maybe<Array<Maybe<SurveyTakerInfo>>>;
  total?: Maybe<Array<Maybe<SurveyTakerInfo>>>;
};

export type SlowestTimeDraftSurvey = {
  __typename?: 'SlowestTimeDraftSurvey';
  near?: Maybe<Array<Maybe<SurveyDrafterInfo>>>;
  polkadot?: Maybe<Array<Maybe<SurveyDrafterInfo>>>;
  polygon?: Maybe<Array<Maybe<SurveyDrafterInfo>>>;
  total?: Maybe<Array<Maybe<SurveyDrafterInfo>>>;
};

export type StatusAndDuration = {
  __typename?: 'StatusAndDuration';
  claimed?: Maybe<Scalars['Boolean']>;
  duration?: Maybe<Scalars['Float']>;
  surveyId?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ProfileId']>;
};

export type SubscriptionHistory = {
  __typename?: 'SubscriptionHistory';
  began?: Maybe<Scalars['Date']>;
  ended?: Maybe<Scalars['Date']>;
  subscription?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['ProfileId']>;
};

export type SubscriptionLevel = {
  __typename?: 'SubscriptionLevel';
  subscription?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['ProfileId']>;
};

export type SurveyAnalyticsRequest = {
  /** The business profileIds */
  businessIds?: InputMaybe<Array<Scalars['ProfileId']>>;
};

export type SurveyCompletionBasedOnQuestionCount = {
  __typename?: 'SurveyCompletionBasedOnQuestionCount';
  completionRatio?: Maybe<Scalars['Float']>;
  questionCount?: Maybe<Scalars['Int']>;
};

export type SurveyDrafterInfo = {
  __typename?: 'SurveyDrafterInfo';
  hours?: Maybe<Scalars['Float']>;
  surveyId?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ProfileId']>;
};

export type SurveyTakerInfo = {
  __typename?: 'SurveyTakerInfo';
  hours?: Maybe<Scalars['Float']>;
  surveyId?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ProfileId']>;
};

export type TopBusinessRequest = {
  /** The business profileIds */
  businessIds?: InputMaybe<Array<Scalars['ProfileId']>>;
};

export type TutorialCompletitions = {
  __typename?: 'TutorialCompletitions';
  fillingStatus?: Maybe<Scalars['Boolean']>;
  user?: Maybe<Scalars['ProfileId']>;
};

export type UnclaimedRewardStatusAndDuration = {
  __typename?: 'UnclaimedRewardStatusAndDuration';
  near?: Maybe<Array<Maybe<StatusAndDuration>>>;
  polkadot?: Maybe<Array<Maybe<StatusAndDuration>>>;
  polygon?: Maybe<Array<Maybe<StatusAndDuration>>>;
  total?: Maybe<Array<Maybe<StatusAndDuration>>>;
};

export type UserAverageSessionTime = {
  __typename?: 'UserAverageSessionTime';
  averageTime?: Maybe<Scalars['Float']>;
  user?: Maybe<Scalars['ProfileId']>;
};

export type UserCompletionTimeOfDay = {
  __typename?: 'UserCompletionTimeOfDay';
  completionTimeOfDay?: Maybe<Array<Maybe<CompletionTimeOfDay>>>;
  user?: Maybe<Scalars['ProfileId']>;
};

export type UserEngagementRateNftMarketplace = {
  __typename?: 'UserEngagementRateNFTMarketplace';
  pageViews?: Maybe<Scalars['Int']>;
  productsSelling?: Maybe<Scalars['Int']>;
  purchaseCount?: Maybe<Scalars['Int']>;
  surveysCreated?: Maybe<Scalars['Int']>;
  surveysStarted?: Maybe<Scalars['Int']>;
  surveysTaken?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ProfileId']>;
};

export type UserRequest = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  profileIds?: InputMaybe<Array<InputMaybe<Scalars['ProfileId']>>>;
};

export type UserWalletsConnected = {
  __typename?: 'UserWalletsConnected';
  user?: Maybe<Scalars['ProfileId']>;
  walletCount?: Maybe<Scalars['Int']>;
};

export type WalletsConnected = {
  __typename?: 'WalletsConnected';
  near?: Maybe<Scalars['Int']>;
  polkadot?: Maybe<Scalars['Int']>;
  polygon?: Maybe<Scalars['Int']>;
};

export type WalletsConnectedPerBlockchain = {
  __typename?: 'WalletsConnectedPerBlockchain';
  near?: Maybe<Array<Maybe<UserWalletsConnected>>>;
  polkadot?: Maybe<Array<Maybe<UserWalletsConnected>>>;
  polygon?: Maybe<Array<Maybe<UserWalletsConnected>>>;
};

export type PurchaseHistoryPerUserRequest = {
  profileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
};

export type ChartDataLabelsFieldsFragment = { __typename?: 'ChartDataLabels', labels?: Array<string> | null, data?: Array<number> | null, totalSurveys?: number | null, totalCompletions?: number | null, totalBusiness?: number | null, avgCompletionTime?: number | null, totalPageviews?: number | null, rankingCompletions?: Array<{ __typename?: 'RankTopCompletions', surveyId?: string | null, completions?: number | null } | null> | null };

export type SurveyAnalyticsQueryVariables = Exact<{
  request: SurveyAnalyticsRequest;
}>;


export type SurveyAnalyticsQuery = { __typename?: 'Query', surveyAnalytics: { __typename?: 'ChartDataLabels', labels?: Array<string> | null, data?: Array<number> | null, totalSurveys?: number | null, totalCompletions?: number | null, totalBusiness?: number | null, avgCompletionTime?: number | null, totalPageviews?: number | null, rankingCompletions?: Array<{ __typename?: 'RankTopCompletions', surveyId?: string | null, completions?: number | null } | null> | null } };

export type TopBusinessQueryVariables = Exact<{
  request: TopBusinessRequest;
}>;


export type TopBusinessQuery = { __typename?: 'Query', topBusiness: { __typename?: 'ChartDataLabels', labels?: Array<string> | null, data?: Array<number> | null, totalSurveys?: number | null, totalCompletions?: number | null, totalBusiness?: number | null, avgCompletionTime?: number | null, totalPageviews?: number | null, rankingCompletions?: Array<{ __typename?: 'RankTopCompletions', surveyId?: string | null, completions?: number | null } | null> | null } };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

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
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

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
  AverageInviteResponseTime: ResolverTypeWrapper<AverageInviteResponseTime>;
  AverageTimeCompletingSurvey: ResolverTypeWrapper<AverageTimeCompletingSurvey>;
  AverageTimeDraftingSurvey: ResolverTypeWrapper<AverageTimeDraftingSurvey>;
  AverageTimePerSession: ResolverTypeWrapper<AverageTimePerSession>;
  AverageTimeWithdrawRewards: ResolverTypeWrapper<AverageTimeWithdrawRewards>;
  AverageUserRatingCompletedSurveys: ResolverTypeWrapper<AverageUserRatingCompletedSurveys>;
  AverageValueAccruedCashViaStripe: ResolverTypeWrapper<AverageValueAccruedCashViaStripe>;
  AverageValueAccruedCryptocurrency: ResolverTypeWrapper<AverageValueAccruedCryptocurrency>;
  AverageValueSpentNFTMarketplace: ResolverTypeWrapper<AverageValueSpentNftMarketplace>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ChartDataLabels: ResolverTypeWrapper<ChartDataLabels>;
  CompletionTimeOfDay: ResolverTypeWrapper<CompletionTimeOfDay>;
  CorrelationSurveyComplexityAndCompletion: ResolverTypeWrapper<CorrelationSurveyComplexityAndCompletion>;
  DataMarketplace: ResolverTypeWrapper<DataMarketplace>;
  DataUser: ResolverTypeWrapper<DataUser>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  FastestCompleteSurvey: ResolverTypeWrapper<FastestCompleteSurvey>;
  FastestDraftSurvey: ResolverTypeWrapper<FastestDraftSurvey>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  GoodsOwnedMedia: ResolverTypeWrapper<GoodsOwnedMedia>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  MarketplaceRequest: MarketplaceRequest;
  MediaBoughtAndSold: ResolverTypeWrapper<MediaBoughtAndSold>;
  MediaBoughtAndSoldRequest: MediaBoughtAndSoldRequest;
  MediaSold: ResolverTypeWrapper<MediaSold>;
  MostCommonSurveyLengthPreferred: ResolverTypeWrapper<MostCommonSurveyLengthPreferred>;
  MostCommonTimeOfDaySurveyCompletitons: ResolverTypeWrapper<MostCommonTimeOfDaySurveyCompletitons>;
  NFTMarketplacePurchaseHistory: ResolverTypeWrapper<NftMarketplacePurchaseHistory>;
  ProfileId: ResolverTypeWrapper<Scalars['ProfileId']>;
  PurchaseAmountTotals: ResolverTypeWrapper<PurchaseAmountTotals>;
  PurchaseHistory: ResolverTypeWrapper<PurchaseHistory>;
  PurchaseInfoHistory: ResolverTypeWrapper<PurchaseInfoHistory>;
  Query: ResolverTypeWrapper<{}>;
  RankTopCompletions: ResolverTypeWrapper<RankTopCompletions>;
  RankedTagsCompletedSurveys: ResolverTypeWrapper<RankedTagsCompletedSurveys>;
  RankedTagsIssuedSurveys: ResolverTypeWrapper<RankedTagsIssuedSurveys>;
  SaleHistory: ResolverTypeWrapper<SaleHistory>;
  SaleHistoryPerBusinessRequest: SaleHistoryPerBusinessRequest;
  SaleItem: ResolverTypeWrapper<SaleItem>;
  SlowestCompleteSurvey: ResolverTypeWrapper<SlowestCompleteSurvey>;
  SlowestTimeDraftSurvey: ResolverTypeWrapper<SlowestTimeDraftSurvey>;
  StatusAndDuration: ResolverTypeWrapper<StatusAndDuration>;
  String: ResolverTypeWrapper<Scalars['String']>;
  SubscriptionHistory: ResolverTypeWrapper<SubscriptionHistory>;
  SubscriptionLevel: ResolverTypeWrapper<SubscriptionLevel>;
  SurveyAnalyticsRequest: SurveyAnalyticsRequest;
  SurveyCompletionBasedOnQuestionCount: ResolverTypeWrapper<SurveyCompletionBasedOnQuestionCount>;
  SurveyDrafterInfo: ResolverTypeWrapper<SurveyDrafterInfo>;
  SurveyTakerInfo: ResolverTypeWrapper<SurveyTakerInfo>;
  TopBusinessRequest: TopBusinessRequest;
  TutorialCompletitions: ResolverTypeWrapper<TutorialCompletitions>;
  UnclaimedRewardStatusAndDuration: ResolverTypeWrapper<UnclaimedRewardStatusAndDuration>;
  UserAverageSessionTime: ResolverTypeWrapper<UserAverageSessionTime>;
  UserCompletionTimeOfDay: ResolverTypeWrapper<UserCompletionTimeOfDay>;
  UserEngagementRateNFTMarketplace: ResolverTypeWrapper<UserEngagementRateNftMarketplace>;
  UserRequest: UserRequest;
  UserWalletsConnected: ResolverTypeWrapper<UserWalletsConnected>;
  WalletsConnected: ResolverTypeWrapper<WalletsConnected>;
  WalletsConnectedPerBlockchain: ResolverTypeWrapper<WalletsConnectedPerBlockchain>;
  purchaseHistoryPerUserRequest: PurchaseHistoryPerUserRequest;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AverageInviteResponseTime: AverageInviteResponseTime;
  AverageTimeCompletingSurvey: AverageTimeCompletingSurvey;
  AverageTimeDraftingSurvey: AverageTimeDraftingSurvey;
  AverageTimePerSession: AverageTimePerSession;
  AverageTimeWithdrawRewards: AverageTimeWithdrawRewards;
  AverageUserRatingCompletedSurveys: AverageUserRatingCompletedSurveys;
  AverageValueAccruedCashViaStripe: AverageValueAccruedCashViaStripe;
  AverageValueAccruedCryptocurrency: AverageValueAccruedCryptocurrency;
  AverageValueSpentNFTMarketplace: AverageValueSpentNftMarketplace;
  Boolean: Scalars['Boolean'];
  ChartDataLabels: ChartDataLabels;
  CompletionTimeOfDay: CompletionTimeOfDay;
  CorrelationSurveyComplexityAndCompletion: CorrelationSurveyComplexityAndCompletion;
  DataMarketplace: DataMarketplace;
  DataUser: DataUser;
  Date: Scalars['Date'];
  FastestCompleteSurvey: FastestCompleteSurvey;
  FastestDraftSurvey: FastestDraftSurvey;
  Float: Scalars['Float'];
  GoodsOwnedMedia: GoodsOwnedMedia;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  MarketplaceRequest: MarketplaceRequest;
  MediaBoughtAndSold: MediaBoughtAndSold;
  MediaBoughtAndSoldRequest: MediaBoughtAndSoldRequest;
  MediaSold: MediaSold;
  MostCommonSurveyLengthPreferred: MostCommonSurveyLengthPreferred;
  MostCommonTimeOfDaySurveyCompletitons: MostCommonTimeOfDaySurveyCompletitons;
  NFTMarketplacePurchaseHistory: NftMarketplacePurchaseHistory;
  ProfileId: Scalars['ProfileId'];
  PurchaseAmountTotals: PurchaseAmountTotals;
  PurchaseHistory: PurchaseHistory;
  PurchaseInfoHistory: PurchaseInfoHistory;
  Query: {};
  RankTopCompletions: RankTopCompletions;
  RankedTagsCompletedSurveys: RankedTagsCompletedSurveys;
  RankedTagsIssuedSurveys: RankedTagsIssuedSurveys;
  SaleHistory: SaleHistory;
  SaleHistoryPerBusinessRequest: SaleHistoryPerBusinessRequest;
  SaleItem: SaleItem;
  SlowestCompleteSurvey: SlowestCompleteSurvey;
  SlowestTimeDraftSurvey: SlowestTimeDraftSurvey;
  StatusAndDuration: StatusAndDuration;
  String: Scalars['String'];
  SubscriptionHistory: SubscriptionHistory;
  SubscriptionLevel: SubscriptionLevel;
  SurveyAnalyticsRequest: SurveyAnalyticsRequest;
  SurveyCompletionBasedOnQuestionCount: SurveyCompletionBasedOnQuestionCount;
  SurveyDrafterInfo: SurveyDrafterInfo;
  SurveyTakerInfo: SurveyTakerInfo;
  TopBusinessRequest: TopBusinessRequest;
  TutorialCompletitions: TutorialCompletitions;
  UnclaimedRewardStatusAndDuration: UnclaimedRewardStatusAndDuration;
  UserAverageSessionTime: UserAverageSessionTime;
  UserCompletionTimeOfDay: UserCompletionTimeOfDay;
  UserEngagementRateNFTMarketplace: UserEngagementRateNftMarketplace;
  UserRequest: UserRequest;
  UserWalletsConnected: UserWalletsConnected;
  WalletsConnected: WalletsConnected;
  WalletsConnectedPerBlockchain: WalletsConnectedPerBlockchain;
  purchaseHistoryPerUserRequest: PurchaseHistoryPerUserRequest;
};

export type AverageInviteResponseTimeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AverageInviteResponseTime'] = ResolversParentTypes['AverageInviteResponseTime']> = {
  averageResponseTimeHrs?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AverageTimeCompletingSurveyResolvers<ContextType = any, ParentType extends ResolversParentTypes['AverageTimeCompletingSurvey'] = ResolversParentTypes['AverageTimeCompletingSurvey']> = {
  averageTimePerServey?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AverageTimeDraftingSurveyResolvers<ContextType = any, ParentType extends ResolversParentTypes['AverageTimeDraftingSurvey'] = ResolversParentTypes['AverageTimeDraftingSurvey']> = {
  averageTimePerServey?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AverageTimePerSessionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AverageTimePerSession'] = ResolversParentTypes['AverageTimePerSession']> = {
  averageTimeHrs?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AverageTimeWithdrawRewardsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AverageTimeWithdrawRewards'] = ResolversParentTypes['AverageTimeWithdrawRewards']> = {
  avgHours?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AverageUserRatingCompletedSurveysResolvers<ContextType = any, ParentType extends ResolversParentTypes['AverageUserRatingCompletedSurveys'] = ResolversParentTypes['AverageUserRatingCompletedSurveys']> = {
  ratingAvg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AverageValueAccruedCashViaStripeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AverageValueAccruedCashViaStripe'] = ResolversParentTypes['AverageValueAccruedCashViaStripe']> = {
  lastSessionAccruedCashViaStripeValueInUSD?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lifetimeCashViaStripeValueInUSD?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sessionAverageAccruedCashViaStripeValueInUSD?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AverageValueAccruedCryptocurrencyResolvers<ContextType = any, ParentType extends ResolversParentTypes['AverageValueAccruedCryptocurrency'] = ResolversParentTypes['AverageValueAccruedCryptocurrency']> = {
  lastSessionAccruedCryptoValueInUSD?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lifetimeCryptoValueInUSD?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sessionAverageAccruedCryptoValueInUSD?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AverageValueSpentNftMarketplaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['AverageValueSpentNFTMarketplace'] = ResolversParentTypes['AverageValueSpentNFTMarketplace']> = {
  avgCashAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChartDataLabelsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChartDataLabels'] = ResolversParentTypes['ChartDataLabels']> = {
  avgCompletionTime?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<ResolversTypes['Int']>>, ParentType, ContextType>;
  labels?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  rankingCompletions?: Resolver<Maybe<Array<Maybe<ResolversTypes['RankTopCompletions']>>>, ParentType, ContextType>;
  totalBusiness?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCompletions?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalPageviews?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalSurveys?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompletionTimeOfDayResolvers<ContextType = any, ParentType extends ResolversParentTypes['CompletionTimeOfDay'] = ResolversParentTypes['CompletionTimeOfDay']> = {
  surveyCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timeOfDay?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CorrelationSurveyComplexityAndCompletionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CorrelationSurveyComplexityAndCompletion'] = ResolversParentTypes['CorrelationSurveyComplexityAndCompletion']> = {
  completionRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  questionCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  surveyId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataMarketplaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['DataMarketplace'] = ResolversParentTypes['DataMarketplace']> = {
  averageInviteResponseTime?: Resolver<Maybe<Array<Maybe<ResolversTypes['AverageInviteResponseTime']>>>, ParentType, ContextType>;
  averageTimeDraftingSurvey?: Resolver<Maybe<Array<Maybe<ResolversTypes['AverageTimeDraftingSurvey']>>>, ParentType, ContextType>;
  correlationSurveyComplexityAndCompletion?: Resolver<Maybe<Array<Maybe<ResolversTypes['CorrelationSurveyComplexityAndCompletion']>>>, ParentType, ContextType>;
  fastestDraftSurvey?: Resolver<Maybe<ResolversTypes['FastestDraftSurvey']>, ParentType, ContextType>;
  mostCommonSurveyLengthPreferred?: Resolver<Maybe<Array<Maybe<ResolversTypes['MostCommonSurveyLengthPreferred']>>>, ParentType, ContextType>;
  rankedTagsIssuedSurveys?: Resolver<Maybe<Array<Maybe<ResolversTypes['RankedTagsIssuedSurveys']>>>, ParentType, ContextType>;
  slowestTimeDraftSurvey?: Resolver<Maybe<ResolversTypes['SlowestTimeDraftSurvey']>, ParentType, ContextType>;
  subscriptionHistoryMarketplace?: Resolver<Maybe<Array<Maybe<ResolversTypes['SubscriptionHistory']>>>, ParentType, ContextType>;
  subscriptionLevelMarketplace?: Resolver<Maybe<Array<Maybe<ResolversTypes['SubscriptionLevel']>>>, ParentType, ContextType>;
  unclaimedRewardStatusAndDuration?: Resolver<Maybe<ResolversTypes['UnclaimedRewardStatusAndDuration']>, ParentType, ContextType>;
  userAverageSessionTime?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserAverageSessionTime']>>>, ParentType, ContextType>;
  walletsConnected?: Resolver<Maybe<ResolversTypes['WalletsConnected']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['DataUser'] = ResolversParentTypes['DataUser']> = {
  averageTimeCompletingSurvey?: Resolver<Maybe<Array<Maybe<ResolversTypes['AverageTimeCompletingSurvey']>>>, ParentType, ContextType>;
  averageTimePerSession?: Resolver<Maybe<Array<Maybe<ResolversTypes['AverageTimePerSession']>>>, ParentType, ContextType>;
  averageTimeWithdrawRewards?: Resolver<Maybe<Array<Maybe<ResolversTypes['AverageTimeWithdrawRewards']>>>, ParentType, ContextType>;
  averageUserRatingCompletedSurveys?: Resolver<Maybe<Array<Maybe<ResolversTypes['AverageUserRatingCompletedSurveys']>>>, ParentType, ContextType>;
  averageValueAccruedCashViaStripe?: Resolver<Maybe<Array<Maybe<ResolversTypes['AverageValueAccruedCashViaStripe']>>>, ParentType, ContextType>;
  averageValueAccruedCryptocurrency?: Resolver<Maybe<Array<Maybe<ResolversTypes['AverageValueAccruedCryptocurrency']>>>, ParentType, ContextType>;
  averageValueSpentNFTMarketplace?: Resolver<Maybe<Array<Maybe<ResolversTypes['AverageValueSpentNFTMarketplace']>>>, ParentType, ContextType>;
  fastestCompleteSurvey?: Resolver<Maybe<ResolversTypes['FastestCompleteSurvey']>, ParentType, ContextType>;
  mostCommonTimeOfDaySurveyCompletitons?: Resolver<Maybe<ResolversTypes['MostCommonTimeOfDaySurveyCompletitons']>, ParentType, ContextType>;
  nFTMarketplacePurchaseHistory?: Resolver<Maybe<ResolversTypes['NFTMarketplacePurchaseHistory']>, ParentType, ContextType>;
  rankedTagsCompletedSurveys?: Resolver<Maybe<Array<Maybe<ResolversTypes['RankedTagsCompletedSurveys']>>>, ParentType, ContextType>;
  slowestCompleteSurvey?: Resolver<Maybe<ResolversTypes['SlowestCompleteSurvey']>, ParentType, ContextType>;
  subscriptionHistory?: Resolver<Maybe<Array<Maybe<ResolversTypes['SubscriptionHistory']>>>, ParentType, ContextType>;
  subscriptionLevel?: Resolver<Maybe<Array<Maybe<ResolversTypes['SubscriptionLevel']>>>, ParentType, ContextType>;
  surveyCompletionBasedOnQuestionCount?: Resolver<Maybe<Array<Maybe<ResolversTypes['SurveyCompletionBasedOnQuestionCount']>>>, ParentType, ContextType>;
  tutorialCompletitions?: Resolver<Maybe<Array<Maybe<ResolversTypes['TutorialCompletitions']>>>, ParentType, ContextType>;
  unclaimedRewardStatusAndDuration?: Resolver<Maybe<ResolversTypes['UnclaimedRewardStatusAndDuration']>, ParentType, ContextType>;
  userEngagementRateNFTMarketplace?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserEngagementRateNFTMarketplace']>>>, ParentType, ContextType>;
  walletsConnectedPerBlockchain?: Resolver<Maybe<ResolversTypes['WalletsConnectedPerBlockchain']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type FastestCompleteSurveyResolvers<ContextType = any, ParentType extends ResolversParentTypes['FastestCompleteSurvey'] = ResolversParentTypes['FastestCompleteSurvey']> = {
  near?: Resolver<Maybe<Array<Maybe<ResolversTypes['SurveyTakerInfo']>>>, ParentType, ContextType>;
  polkadot?: Resolver<Maybe<Array<Maybe<ResolversTypes['SurveyTakerInfo']>>>, ParentType, ContextType>;
  polygon?: Resolver<Maybe<Array<Maybe<ResolversTypes['SurveyTakerInfo']>>>, ParentType, ContextType>;
  total?: Resolver<Maybe<Array<Maybe<ResolversTypes['SurveyTakerInfo']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FastestDraftSurveyResolvers<ContextType = any, ParentType extends ResolversParentTypes['FastestDraftSurvey'] = ResolversParentTypes['FastestDraftSurvey']> = {
  near?: Resolver<Maybe<Array<Maybe<ResolversTypes['SurveyDrafterInfo']>>>, ParentType, ContextType>;
  polkadot?: Resolver<Maybe<Array<Maybe<ResolversTypes['SurveyDrafterInfo']>>>, ParentType, ContextType>;
  polygon?: Resolver<Maybe<Array<Maybe<ResolversTypes['SurveyDrafterInfo']>>>, ParentType, ContextType>;
  total?: Resolver<Maybe<Array<Maybe<ResolversTypes['SurveyDrafterInfo']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GoodsOwnedMediaResolvers<ContextType = any, ParentType extends ResolversParentTypes['GoodsOwnedMedia'] = ResolversParentTypes['GoodsOwnedMedia']> = {
  mediaId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaBoughtAndSoldResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaBoughtAndSold'] = ResolversParentTypes['MediaBoughtAndSold']> = {
  mediaId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaSoldResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaSold'] = ResolversParentTypes['MediaSold']> = {
  mediaId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MostCommonSurveyLengthPreferredResolvers<ContextType = any, ParentType extends ResolversParentTypes['MostCommonSurveyLengthPreferred'] = ResolversParentTypes['MostCommonSurveyLengthPreferred']> = {
  questionCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  surveysCompleted?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MostCommonTimeOfDaySurveyCompletitonsResolvers<ContextType = any, ParentType extends ResolversParentTypes['MostCommonTimeOfDaySurveyCompletitons'] = ResolversParentTypes['MostCommonTimeOfDaySurveyCompletitons']> = {
  completionTimeOfDay?: Resolver<Maybe<Array<Maybe<ResolversTypes['CompletionTimeOfDay']>>>, ParentType, ContextType>;
  userCompletionTimeOfDay?: Resolver<Maybe<ResolversTypes['UserCompletionTimeOfDay']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NftMarketplacePurchaseHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['NFTMarketplacePurchaseHistory'] = ResolversParentTypes['NFTMarketplacePurchaseHistory']> = {
  purchaseAmountTotals?: Resolver<Maybe<Array<Maybe<ResolversTypes['PurchaseAmountTotals']>>>, ParentType, ContextType>;
  purchaseInfoHistory?: Resolver<Maybe<Array<Maybe<ResolversTypes['PurchaseInfoHistory']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface ProfileIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ProfileId'], any> {
  name: 'ProfileId';
}

export type PurchaseAmountTotalsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PurchaseAmountTotals'] = ResolversParentTypes['PurchaseAmountTotals']> = {
  totalPurchasedConvertedInUSD?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PurchaseHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['PurchaseHistory'] = ResolversParentTypes['PurchaseHistory']> = {
  mediaId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PurchaseInfoHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['PurchaseInfoHistory'] = ResolversParentTypes['PurchaseInfoHistory']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderAmountConvertedInUSD?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  orderId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  orderStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  allMediaBoughtAndSold?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaBoughtAndSold']>>>, ParentType, ContextType>;
  dataMarketplace?: Resolver<Maybe<ResolversTypes['DataMarketplace']>, ParentType, ContextType, Partial<QueryDataMarketplaceArgs>>;
  dataUser?: Resolver<Maybe<ResolversTypes['DataUser']>, ParentType, ContextType, Partial<QueryDataUserArgs>>;
  goodsOwnedPerUser?: Resolver<Maybe<Array<Maybe<ResolversTypes['GoodsOwnedMedia']>>>, ParentType, ContextType>;
  mediaSoldByCompanyOrUser?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaSold']>>>, ParentType, ContextType, Partial<QueryMediaSoldByCompanyOrUserArgs>>;
  ping?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  purchaseHistoryPerUser?: Resolver<Maybe<Array<Maybe<ResolversTypes['PurchaseHistory']>>>, ParentType, ContextType, Partial<QueryPurchaseHistoryPerUserArgs>>;
  saleHistoryPerBusiness?: Resolver<Maybe<ResolversTypes['SaleHistory']>, ParentType, ContextType, Partial<QuerySaleHistoryPerBusinessArgs>>;
  surveyAnalytics?: Resolver<ResolversTypes['ChartDataLabels'], ParentType, ContextType, RequireFields<QuerySurveyAnalyticsArgs, 'request'>>;
  topBusiness?: Resolver<ResolversTypes['ChartDataLabels'], ParentType, ContextType, RequireFields<QueryTopBusinessArgs, 'request'>>;
};

export type RankTopCompletionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['RankTopCompletions'] = ResolversParentTypes['RankTopCompletions']> = {
  completions?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  surveyId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RankedTagsCompletedSurveysResolvers<ContextType = any, ParentType extends ResolversParentTypes['RankedTagsCompletedSurveys'] = ResolversParentTypes['RankedTagsCompletedSurveys']> = {
  category_tags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tag_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RankedTagsIssuedSurveysResolvers<ContextType = any, ParentType extends ResolversParentTypes['RankedTagsIssuedSurveys'] = ResolversParentTypes['RankedTagsIssuedSurveys']> = {
  categoryTags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tagCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SaleHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['SaleHistory'] = ResolversParentTypes['SaleHistory']> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['SaleItem']>>>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SaleItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['SaleItem'] = ResolversParentTypes['SaleItem']> = {
  buyerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  issuedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  orderStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sellerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SlowestCompleteSurveyResolvers<ContextType = any, ParentType extends ResolversParentTypes['SlowestCompleteSurvey'] = ResolversParentTypes['SlowestCompleteSurvey']> = {
  near?: Resolver<Maybe<Array<Maybe<ResolversTypes['SurveyTakerInfo']>>>, ParentType, ContextType>;
  polkadot?: Resolver<Maybe<Array<Maybe<ResolversTypes['SurveyTakerInfo']>>>, ParentType, ContextType>;
  polygon?: Resolver<Maybe<Array<Maybe<ResolversTypes['SurveyTakerInfo']>>>, ParentType, ContextType>;
  total?: Resolver<Maybe<Array<Maybe<ResolversTypes['SurveyTakerInfo']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SlowestTimeDraftSurveyResolvers<ContextType = any, ParentType extends ResolversParentTypes['SlowestTimeDraftSurvey'] = ResolversParentTypes['SlowestTimeDraftSurvey']> = {
  near?: Resolver<Maybe<Array<Maybe<ResolversTypes['SurveyDrafterInfo']>>>, ParentType, ContextType>;
  polkadot?: Resolver<Maybe<Array<Maybe<ResolversTypes['SurveyDrafterInfo']>>>, ParentType, ContextType>;
  polygon?: Resolver<Maybe<Array<Maybe<ResolversTypes['SurveyDrafterInfo']>>>, ParentType, ContextType>;
  total?: Resolver<Maybe<Array<Maybe<ResolversTypes['SurveyDrafterInfo']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StatusAndDurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['StatusAndDuration'] = ResolversParentTypes['StatusAndDuration']> = {
  claimed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  surveyId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubscriptionHistory'] = ResolversParentTypes['SubscriptionHistory']> = {
  began?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  ended?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  subscription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionLevelResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubscriptionLevel'] = ResolversParentTypes['SubscriptionLevel']> = {
  subscription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SurveyCompletionBasedOnQuestionCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['SurveyCompletionBasedOnQuestionCount'] = ResolversParentTypes['SurveyCompletionBasedOnQuestionCount']> = {
  completionRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  questionCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SurveyDrafterInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['SurveyDrafterInfo'] = ResolversParentTypes['SurveyDrafterInfo']> = {
  hours?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  surveyId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SurveyTakerInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['SurveyTakerInfo'] = ResolversParentTypes['SurveyTakerInfo']> = {
  hours?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  surveyId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TutorialCompletitionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['TutorialCompletitions'] = ResolversParentTypes['TutorialCompletitions']> = {
  fillingStatus?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UnclaimedRewardStatusAndDurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['UnclaimedRewardStatusAndDuration'] = ResolversParentTypes['UnclaimedRewardStatusAndDuration']> = {
  near?: Resolver<Maybe<Array<Maybe<ResolversTypes['StatusAndDuration']>>>, ParentType, ContextType>;
  polkadot?: Resolver<Maybe<Array<Maybe<ResolversTypes['StatusAndDuration']>>>, ParentType, ContextType>;
  polygon?: Resolver<Maybe<Array<Maybe<ResolversTypes['StatusAndDuration']>>>, ParentType, ContextType>;
  total?: Resolver<Maybe<Array<Maybe<ResolversTypes['StatusAndDuration']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAverageSessionTimeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAverageSessionTime'] = ResolversParentTypes['UserAverageSessionTime']> = {
  averageTime?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCompletionTimeOfDayResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCompletionTimeOfDay'] = ResolversParentTypes['UserCompletionTimeOfDay']> = {
  completionTimeOfDay?: Resolver<Maybe<Array<Maybe<ResolversTypes['CompletionTimeOfDay']>>>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserEngagementRateNftMarketplaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserEngagementRateNFTMarketplace'] = ResolversParentTypes['UserEngagementRateNFTMarketplace']> = {
  pageViews?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  productsSelling?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  purchaseCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  surveysCreated?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  surveysStarted?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  surveysTaken?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserWalletsConnectedResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserWalletsConnected'] = ResolversParentTypes['UserWalletsConnected']> = {
  user?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  walletCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WalletsConnectedResolvers<ContextType = any, ParentType extends ResolversParentTypes['WalletsConnected'] = ResolversParentTypes['WalletsConnected']> = {
  near?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  polkadot?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  polygon?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WalletsConnectedPerBlockchainResolvers<ContextType = any, ParentType extends ResolversParentTypes['WalletsConnectedPerBlockchain'] = ResolversParentTypes['WalletsConnectedPerBlockchain']> = {
  near?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserWalletsConnected']>>>, ParentType, ContextType>;
  polkadot?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserWalletsConnected']>>>, ParentType, ContextType>;
  polygon?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserWalletsConnected']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AverageInviteResponseTime?: AverageInviteResponseTimeResolvers<ContextType>;
  AverageTimeCompletingSurvey?: AverageTimeCompletingSurveyResolvers<ContextType>;
  AverageTimeDraftingSurvey?: AverageTimeDraftingSurveyResolvers<ContextType>;
  AverageTimePerSession?: AverageTimePerSessionResolvers<ContextType>;
  AverageTimeWithdrawRewards?: AverageTimeWithdrawRewardsResolvers<ContextType>;
  AverageUserRatingCompletedSurveys?: AverageUserRatingCompletedSurveysResolvers<ContextType>;
  AverageValueAccruedCashViaStripe?: AverageValueAccruedCashViaStripeResolvers<ContextType>;
  AverageValueAccruedCryptocurrency?: AverageValueAccruedCryptocurrencyResolvers<ContextType>;
  AverageValueSpentNFTMarketplace?: AverageValueSpentNftMarketplaceResolvers<ContextType>;
  ChartDataLabels?: ChartDataLabelsResolvers<ContextType>;
  CompletionTimeOfDay?: CompletionTimeOfDayResolvers<ContextType>;
  CorrelationSurveyComplexityAndCompletion?: CorrelationSurveyComplexityAndCompletionResolvers<ContextType>;
  DataMarketplace?: DataMarketplaceResolvers<ContextType>;
  DataUser?: DataUserResolvers<ContextType>;
  Date?: GraphQLScalarType;
  FastestCompleteSurvey?: FastestCompleteSurveyResolvers<ContextType>;
  FastestDraftSurvey?: FastestDraftSurveyResolvers<ContextType>;
  GoodsOwnedMedia?: GoodsOwnedMediaResolvers<ContextType>;
  MediaBoughtAndSold?: MediaBoughtAndSoldResolvers<ContextType>;
  MediaSold?: MediaSoldResolvers<ContextType>;
  MostCommonSurveyLengthPreferred?: MostCommonSurveyLengthPreferredResolvers<ContextType>;
  MostCommonTimeOfDaySurveyCompletitons?: MostCommonTimeOfDaySurveyCompletitonsResolvers<ContextType>;
  NFTMarketplacePurchaseHistory?: NftMarketplacePurchaseHistoryResolvers<ContextType>;
  ProfileId?: GraphQLScalarType;
  PurchaseAmountTotals?: PurchaseAmountTotalsResolvers<ContextType>;
  PurchaseHistory?: PurchaseHistoryResolvers<ContextType>;
  PurchaseInfoHistory?: PurchaseInfoHistoryResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RankTopCompletions?: RankTopCompletionsResolvers<ContextType>;
  RankedTagsCompletedSurveys?: RankedTagsCompletedSurveysResolvers<ContextType>;
  RankedTagsIssuedSurveys?: RankedTagsIssuedSurveysResolvers<ContextType>;
  SaleHistory?: SaleHistoryResolvers<ContextType>;
  SaleItem?: SaleItemResolvers<ContextType>;
  SlowestCompleteSurvey?: SlowestCompleteSurveyResolvers<ContextType>;
  SlowestTimeDraftSurvey?: SlowestTimeDraftSurveyResolvers<ContextType>;
  StatusAndDuration?: StatusAndDurationResolvers<ContextType>;
  SubscriptionHistory?: SubscriptionHistoryResolvers<ContextType>;
  SubscriptionLevel?: SubscriptionLevelResolvers<ContextType>;
  SurveyCompletionBasedOnQuestionCount?: SurveyCompletionBasedOnQuestionCountResolvers<ContextType>;
  SurveyDrafterInfo?: SurveyDrafterInfoResolvers<ContextType>;
  SurveyTakerInfo?: SurveyTakerInfoResolvers<ContextType>;
  TutorialCompletitions?: TutorialCompletitionsResolvers<ContextType>;
  UnclaimedRewardStatusAndDuration?: UnclaimedRewardStatusAndDurationResolvers<ContextType>;
  UserAverageSessionTime?: UserAverageSessionTimeResolvers<ContextType>;
  UserCompletionTimeOfDay?: UserCompletionTimeOfDayResolvers<ContextType>;
  UserEngagementRateNFTMarketplace?: UserEngagementRateNftMarketplaceResolvers<ContextType>;
  UserWalletsConnected?: UserWalletsConnectedResolvers<ContextType>;
  WalletsConnected?: WalletsConnectedResolvers<ContextType>;
  WalletsConnectedPerBlockchain?: WalletsConnectedPerBlockchainResolvers<ContextType>;
};



      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    
export const ChartDataLabelsFieldsFragmentDoc = gql`
    fragment ChartDataLabelsFields on ChartDataLabels {
  labels
  data
  totalSurveys
  totalCompletions
  totalBusiness
  rankingCompletions {
    surveyId
    completions
  }
  avgCompletionTime
  totalPageviews
}
    `;
export const SurveyAnalyticsDocument = gql`
    query SurveyAnalytics($request: SurveyAnalyticsRequest!) {
  surveyAnalytics(request: $request) {
    ...ChartDataLabelsFields
  }
}
    ${ChartDataLabelsFieldsFragmentDoc}`;

/**
 * __useSurveyAnalyticsQuery__
 *
 * To run a query within a React component, call `useSurveyAnalyticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSurveyAnalyticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSurveyAnalyticsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSurveyAnalyticsQuery(baseOptions: Apollo.QueryHookOptions<SurveyAnalyticsQuery, SurveyAnalyticsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SurveyAnalyticsQuery, SurveyAnalyticsQueryVariables>(SurveyAnalyticsDocument, options);
      }
export function useSurveyAnalyticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SurveyAnalyticsQuery, SurveyAnalyticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SurveyAnalyticsQuery, SurveyAnalyticsQueryVariables>(SurveyAnalyticsDocument, options);
        }
export type SurveyAnalyticsQueryHookResult = ReturnType<typeof useSurveyAnalyticsQuery>;
export type SurveyAnalyticsLazyQueryHookResult = ReturnType<typeof useSurveyAnalyticsLazyQuery>;
export type SurveyAnalyticsQueryResult = Apollo.QueryResult<SurveyAnalyticsQuery, SurveyAnalyticsQueryVariables>;
export const TopBusinessDocument = gql`
    query TopBusiness($request: TopBusinessRequest!) {
  topBusiness(request: $request) {
    ...ChartDataLabelsFields
  }
}
    ${ChartDataLabelsFieldsFragmentDoc}`;

/**
 * __useTopBusinessQuery__
 *
 * To run a query within a React component, call `useTopBusinessQuery` and pass it any options that fit your needs.
 * When your component renders, `useTopBusinessQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTopBusinessQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useTopBusinessQuery(baseOptions: Apollo.QueryHookOptions<TopBusinessQuery, TopBusinessQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TopBusinessQuery, TopBusinessQueryVariables>(TopBusinessDocument, options);
      }
export function useTopBusinessLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TopBusinessQuery, TopBusinessQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TopBusinessQuery, TopBusinessQueryVariables>(TopBusinessDocument, options);
        }
export type TopBusinessQueryHookResult = ReturnType<typeof useTopBusinessQuery>;
export type TopBusinessLazyQueryHookResult = ReturnType<typeof useTopBusinessLazyQuery>;
export type TopBusinessQueryResult = Apollo.QueryResult<TopBusinessQuery, TopBusinessQueryVariables>;