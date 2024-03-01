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

export type AllCryptoRewardInUsd = {
  __typename?: 'AllCryptoRewardInUSD';
  amountUsd?: Maybe<Scalars['Float']>;
  profileId: Scalars['ProfileId'];
};

export type AverageSurveyCompletionRatesByUser = {
  __typename?: 'AverageSurveyCompletionRatesByUser';
  percentageCompletionAverage?: Maybe<Scalars['Float']>;
  profileId?: Maybe<Scalars['ProfileId']>;
};

export type CategoriesRequest = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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

/** Business Data Types */
export type CryptoIssued = {
  __typename?: 'CryptoIssued';
  amountCrypto?: Maybe<Scalars['Int']>;
  businessId: Scalars['ProfileId'];
  cryptoValueInUSD?: Maybe<Scalars['Float']>;
};

export type CryptoIssuedAllBlockchains = {
  __typename?: 'CryptoIssuedAllBlockchains';
  businessId: Scalars['ProfileId'];
  cryptoValueInUSD?: Maybe<Scalars['Float']>;
};

/** User Data Types */
export type CryptoReward = {
  __typename?: 'CryptoReward';
  amountCrypto?: Maybe<Scalars['Int']>;
  amountUsd?: Maybe<Scalars['Float']>;
  profileId: Scalars['ProfileId'];
};

export type DataBusiness = {
  __typename?: 'DataBusiness';
  highestConversionRate?: Maybe<Array<Maybe<HighestConversionRate>>>;
  highestNumberOfParticipantsEngaged?: Maybe<Array<Maybe<HighestNumberOfParticipantsEngaged>>>;
  highestNumberOfSuccessfulSurveyCampaigns?: Maybe<Array<Maybe<HighestNumberOfSuccessfulSurveyCampaigns>>>;
  mostCashValueIssuedViaSurveysViaStripe?: Maybe<Array<Maybe<MostCashValueIssuedViaSurveysViaStripe>>>;
  mostCompletedSurveys?: Maybe<MostCompletedSurveys>;
  mostCryptocurrencyValueIssuedViaSurveys?: Maybe<MostCryptocurrencyValueIssuedViaSurveys>;
  mostDiverseSurveyTopicsCovered?: Maybe<Array<Maybe<MostDiverseSurveyTopicsCovered>>>;
  mostIssuedSurveys?: Maybe<Array<Maybe<MostIssuedSurveys>>>;
};

export type DataUser = {
  __typename?: 'DataUser';
  highestAverageSurveyCompletionRate?: Maybe<HighestAverageSurveyCompletionRate>;
  highestNumberOfConsecutiveDaysWithSurveyCompletions?: Maybe<Array<Maybe<HighestNumberOfConsecutiveDaysWithSurveyCompletions>>>;
  mostActiveParticipationInSpecificTypesOfSurveys?: Maybe<MostActiveParticipationInSpecificTypesOfSurveys>;
  mostCompletedSurveysInSpecificCategory?: Maybe<Array<Maybe<MostCompletedSurveysInSpecificCategory>>>;
  mostConsistentSurveyCompletionFrequency?: Maybe<MostConsistentSurveyCompletionFrequency>;
  mostCreativeAndUniqueSurveyResponses?: Maybe<MostCreativeAndUniqueSurveyResponses>;
  mostCryptocurrencySpentNFTMarketplace?: Maybe<MostCryptocurrencySpentNftMarketplace>;
  mostDollarsSpentNFTMarketplace?: Maybe<Array<Maybe<MostDollarsSpentNftMarketplace>>>;
  mostEarnedCashRewards?: Maybe<Array<Maybe<MostEarnedCashRewards>>>;
  mostEarnedCryptocurrencyRewards?: Maybe<MostEarnedCryptocurrencyRewards>;
  mostEngagementWithCommunityFeatures?: Maybe<Array<Maybe<MostEngagementWithCommunityFeatures>>>;
  mostInvitedUsers?: Maybe<Array<Maybe<MostInvitedUsers>>>;
  mostReferralsConvertedIntoActiveSurveyParticipants?: Maybe<Array<Maybe<MostReferralsConvertedIntoActiveSurveyParticipants>>>;
  userMostCompletedSurveys?: Maybe<Array<Maybe<UserMostCompletedSurveys>>>;
};

export type GoodsOwnedMedia = {
  __typename?: 'GoodsOwnedMedia';
  mediaId?: Maybe<Scalars['String']>;
};

export type HighestAverageSurveyCompletionRate = {
  __typename?: 'HighestAverageSurveyCompletionRate';
  highestAverageSurveyCompletion?: Maybe<Array<Maybe<AverageSurveyCompletionRatesByUser>>>;
};

export type HighestConversionRate = {
  __typename?: 'HighestConversionRate';
  businessId: Scalars['Int'];
  conversionPercentageRate?: Maybe<Scalars['Float']>;
  convertedPurchasers?: Maybe<Scalars['Int']>;
  uniqueParticipants?: Maybe<Scalars['Int']>;
};

export type HighestNumberOfConsecutiveDaysWithSurveyCompletions = {
  __typename?: 'HighestNumberOfConsecutiveDaysWithSurveyCompletions';
  longestDailyStreak?: Maybe<Scalars['Int']>;
  profileId: Scalars['ProfileId'];
};

export type HighestNumberOfParticipantsEngaged = {
  __typename?: 'HighestNumberOfParticipantsEngaged';
  businessId: Scalars['ProfileId'];
  campaignId?: Maybe<Scalars['Int']>;
  numberOfParticipants?: Maybe<Scalars['Int']>;
};

export type HighestNumberOfSuccessfulSurveyCampaigns = {
  __typename?: 'HighestNumberOfSuccessfulSurveyCampaigns';
  businessId: Scalars['ProfileId'];
  numberOfSuccessfulCampaigns?: Maybe<Scalars['Int']>;
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

export type MostActiveParticipationInSpecificTypesOfSurveys = {
  __typename?: 'MostActiveParticipationInSpecificTypesOfSurveys';
  multipleChoiceSurveysRankings?: Maybe<Array<Maybe<MultipleChoiceSurveys>>>;
  openEndedSurveysRankings?: Maybe<Array<Maybe<OpenEndedSurveys>>>;
};

export type MostCashValueIssuedViaSurveysViaStripe = {
  __typename?: 'MostCashValueIssuedViaSurveysViaStripe';
  amountCash?: Maybe<Scalars['Float']>;
  businessId: Scalars['ProfileId'];
};

export type MostCompletedAll = {
  __typename?: 'MostCompletedAll';
  businessId?: Maybe<Scalars['ProfileId']>;
  totalCompleted?: Maybe<Scalars['Int']>;
};

export type MostCompletedNear = {
  __typename?: 'MostCompletedNear';
  businessId?: Maybe<Scalars['ProfileId']>;
  numberOfSurveysNear?: Maybe<Scalars['Int']>;
};

export type MostCompletedPolkadot = {
  __typename?: 'MostCompletedPolkadot';
  businessId?: Maybe<Scalars['ProfileId']>;
  numberOfSurveysPolkadot?: Maybe<Scalars['Int']>;
};

export type MostCompletedPolygon = {
  __typename?: 'MostCompletedPolygon';
  businessId?: Maybe<Scalars['ProfileId']>;
  numberOfSurveysPolygon?: Maybe<Scalars['Int']>;
};

export type MostCompletedSurveys = {
  __typename?: 'MostCompletedSurveys';
  mostCompletedAll?: Maybe<Array<Maybe<MostCompletedAll>>>;
  mostCompletedNear?: Maybe<Array<Maybe<MostCompletedNear>>>;
  mostCompletedPolkadot?: Maybe<Array<Maybe<MostCompletedPolkadot>>>;
  mostCompletedPolygon?: Maybe<Array<Maybe<MostCompletedPolygon>>>;
};

export type MostCompletedSurveysInSpecificCategory = {
  __typename?: 'MostCompletedSurveysInSpecificCategory';
  categoryName?: Maybe<Scalars['String']>;
  profileId: Scalars['ProfileId'];
  surveysCompleted?: Maybe<Scalars['Int']>;
};

export type MostConsistentSurveyCompletionFrequency = {
  __typename?: 'MostConsistentSurveyCompletionFrequency';
  daily?: Maybe<Array<Maybe<UserCompletionFrequency>>>;
  monthly?: Maybe<Array<Maybe<UserCompletionFrequency>>>;
  weekly?: Maybe<Array<Maybe<UserCompletionFrequency>>>;
  yearly?: Maybe<Array<Maybe<UserCompletionFrequency>>>;
};

export type MostCreativeAndUniqueSurveyResponses = {
  __typename?: 'MostCreativeAndUniqueSurveyResponses';
  mediaRating?: Maybe<Array<Maybe<Rating>>>;
  surveyResponseRating?: Maybe<Array<Maybe<Rating>>>;
};

export type MostCryptocurrencySpentNftMarketplace = {
  __typename?: 'MostCryptocurrencySpentNFTMarketplace';
  mostSpentNear?: Maybe<Array<Maybe<CryptoReward>>>;
  mostSpentPolkadot?: Maybe<Array<Maybe<CryptoReward>>>;
  mostSpentPolygon?: Maybe<Array<Maybe<CryptoReward>>>;
};

export type MostCryptocurrencyValueIssuedViaSurveys = {
  __typename?: 'MostCryptocurrencyValueIssuedViaSurveys';
  mostIssuedInTotal?: Maybe<Array<Maybe<CryptoIssuedAllBlockchains>>>;
  mostIssuedNear?: Maybe<Array<Maybe<CryptoIssued>>>;
  mostIssuedPolkadot?: Maybe<Array<Maybe<CryptoIssued>>>;
  mostIssuedPolygon?: Maybe<Array<Maybe<CryptoIssued>>>;
};

export type MostDiverseSurveyTopicsCovered = {
  __typename?: 'MostDiverseSurveyTopicsCovered';
  allTopics?: Maybe<Array<Maybe<Scalars['String']>>>;
  businessId: Scalars['ProfileId'];
  campaignId?: Maybe<Scalars['Int']>;
  numberOfTopics?: Maybe<Scalars['Int']>;
};

export type MostDollarsSpentNftMarketplace = {
  __typename?: 'MostDollarsSpentNFTMarketplace';
  profileId: Scalars['ProfileId'];
  realDollarsSpent?: Maybe<Scalars['Float']>;
};

export type MostEarnedCashRewards = {
  __typename?: 'MostEarnedCashRewards';
  mostCashViaStripe?: Maybe<Scalars['Float']>;
  profileId: Scalars['ProfileId'];
};

export type MostEarnedCryptocurrencyRewards = {
  __typename?: 'MostEarnedCryptocurrencyRewards';
  nearRewards?: Maybe<Array<Maybe<CryptoReward>>>;
  polkadotRewards?: Maybe<Array<Maybe<CryptoReward>>>;
  polygonRewards?: Maybe<Array<Maybe<CryptoReward>>>;
  totalCryptoInCash?: Maybe<Array<Maybe<AllCryptoRewardInUsd>>>;
};

export type MostEngagementWithCommunityFeatures = {
  __typename?: 'MostEngagementWithCommunityFeatures';
  profileId: Scalars['ProfileId'];
  totalPosts?: Maybe<Scalars['Int']>;
};

export type MostInvitedUsers = {
  __typename?: 'MostInvitedUsers';
  profileId: Scalars['ProfileId'];
  usersInvited?: Maybe<Scalars['Int']>;
};

export type MostIssuedSurveys = {
  __typename?: 'MostIssuedSurveys';
  businessId: Scalars['ProfileId'];
  numberOfSurveys?: Maybe<Scalars['Int']>;
};

export type MostReferralsConvertedIntoActiveSurveyParticipants = {
  __typename?: 'MostReferralsConvertedIntoActiveSurveyParticipants';
  profileId: Scalars['ProfileId'];
  referralsSent?: Maybe<Scalars['Int']>;
  referredParticipantCount?: Maybe<Scalars['Int']>;
};

export type MultipleChoiceSurveys = {
  __typename?: 'MultipleChoiceSurveys';
  multipleChoiceSurveys?: Maybe<Scalars['Int']>;
  profileId: Scalars['ProfileId'];
};

export type OpenEndedSurveys = {
  __typename?: 'OpenEndedSurveys';
  openEndedSurveys?: Maybe<Scalars['Int']>;
  profileId: Scalars['ProfileId'];
};

export type PurchaseHistory = {
  __typename?: 'PurchaseHistory';
  mediaId?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  allMediaBoughtAndSold?: Maybe<Array<Maybe<MediaBoughtAndSold>>>;
  dataBusiness?: Maybe<DataBusiness>;
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


export type QueryDataUserArgs = {
  request?: InputMaybe<CategoriesRequest>;
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

export type Rating = {
  __typename?: 'Rating';
  item_id?: Maybe<Scalars['Int']>;
  profileId: Scalars['ProfileId'];
  rating?: Maybe<Scalars['Int']>;
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

export type SurveyAnalyticsRequest = {
  /** The business profileIds */
  businessIds?: InputMaybe<Array<Scalars['ProfileId']>>;
};

export type TopBusinessRequest = {
  /** The business profileIds */
  businessIds?: InputMaybe<Array<Scalars['ProfileId']>>;
};

export type UserCompletionFrequency = {
  __typename?: 'UserCompletionFrequency';
  frequencyAverage?: Maybe<Scalars['Float']>;
  profileId: Scalars['ProfileId'];
};

export type UserMostCompletedSurveys = {
  __typename?: 'UserMostCompletedSurveys';
  numberOfSurveys?: Maybe<Scalars['Int']>;
  profileId: Scalars['ProfileId'];
};

export type PurchaseHistoryPerUserRequest = {
  profileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
};

export type ChartDataLabelsFieldsFragment = { __typename?: 'ChartDataLabels', labels?: Array<string> | null, data?: Array<number> | null, totalSurveys?: number | null, totalCompletions?: number | null, totalBusiness?: number | null, avgCompletionTime?: number | null, totalPageviews?: number | null, rankingCompletions?: Array<{ __typename?: 'RankTopCompletions', surveyId?: string | null, completions?: number | null } | null> | null };

export type DataUserFieldsFragment = { __typename?: 'DataUser', userMostCompletedSurveys?: Array<{ __typename?: 'UserMostCompletedSurveys', profileId: any, numberOfSurveys?: number | null } | null> | null, mostEarnedCashRewards?: Array<{ __typename?: 'MostEarnedCashRewards', profileId: any, mostCashViaStripe?: number | null } | null> | null, mostEarnedCryptocurrencyRewards?: { __typename?: 'MostEarnedCryptocurrencyRewards', nearRewards?: Array<{ __typename?: 'CryptoReward', profileId: any, amountCrypto?: number | null, amountUsd?: number | null } | null> | null, polkadotRewards?: Array<{ __typename?: 'CryptoReward', profileId: any, amountCrypto?: number | null, amountUsd?: number | null } | null> | null, polygonRewards?: Array<{ __typename?: 'CryptoReward', profileId: any, amountCrypto?: number | null, amountUsd?: number | null } | null> | null, totalCryptoInCash?: Array<{ __typename?: 'AllCryptoRewardInUSD', profileId: any, amountUsd?: number | null } | null> | null } | null, mostDollarsSpentNFTMarketplace?: Array<{ __typename?: 'MostDollarsSpentNFTMarketplace', profileId: any, realDollarsSpent?: number | null } | null> | null, mostCryptocurrencySpentNFTMarketplace?: { __typename?: 'MostCryptocurrencySpentNFTMarketplace', mostSpentNear?: Array<{ __typename?: 'CryptoReward', profileId: any, amountCrypto?: number | null, amountUsd?: number | null } | null> | null, mostSpentPolkadot?: Array<{ __typename?: 'CryptoReward', profileId: any, amountCrypto?: number | null, amountUsd?: number | null } | null> | null, mostSpentPolygon?: Array<{ __typename?: 'CryptoReward', profileId: any, amountCrypto?: number | null, amountUsd?: number | null } | null> | null } | null, mostInvitedUsers?: Array<{ __typename?: 'MostInvitedUsers', profileId: any, usersInvited?: number | null } | null> | null, mostCompletedSurveysInSpecificCategory?: Array<{ __typename?: 'MostCompletedSurveysInSpecificCategory', profileId: any, categoryName?: string | null, surveysCompleted?: number | null } | null> | null, highestAverageSurveyCompletionRate?: { __typename?: 'HighestAverageSurveyCompletionRate', highestAverageSurveyCompletion?: Array<{ __typename?: 'AverageSurveyCompletionRatesByUser', profileId?: any | null, percentageCompletionAverage?: number | null } | null> | null } | null, mostConsistentSurveyCompletionFrequency?: { __typename?: 'MostConsistentSurveyCompletionFrequency', daily?: Array<{ __typename?: 'UserCompletionFrequency', profileId: any, frequencyAverage?: number | null } | null> | null, weekly?: Array<{ __typename?: 'UserCompletionFrequency', profileId: any, frequencyAverage?: number | null } | null> | null, monthly?: Array<{ __typename?: 'UserCompletionFrequency', profileId: any, frequencyAverage?: number | null } | null> | null, yearly?: Array<{ __typename?: 'UserCompletionFrequency', profileId: any, frequencyAverage?: number | null } | null> | null } | null, highestNumberOfConsecutiveDaysWithSurveyCompletions?: Array<{ __typename?: 'HighestNumberOfConsecutiveDaysWithSurveyCompletions', profileId: any, longestDailyStreak?: number | null } | null> | null, mostActiveParticipationInSpecificTypesOfSurveys?: { __typename?: 'MostActiveParticipationInSpecificTypesOfSurveys', multipleChoiceSurveysRankings?: Array<{ __typename?: 'MultipleChoiceSurveys', profileId: any, multipleChoiceSurveys?: number | null } | null> | null, openEndedSurveysRankings?: Array<{ __typename?: 'OpenEndedSurveys', profileId: any, openEndedSurveys?: number | null } | null> | null } | null, mostReferralsConvertedIntoActiveSurveyParticipants?: Array<{ __typename?: 'MostReferralsConvertedIntoActiveSurveyParticipants', profileId: any, referralsSent?: number | null, referredParticipantCount?: number | null } | null> | null, mostEngagementWithCommunityFeatures?: Array<{ __typename?: 'MostEngagementWithCommunityFeatures', profileId: any, totalPosts?: number | null } | null> | null, mostCreativeAndUniqueSurveyResponses?: { __typename?: 'MostCreativeAndUniqueSurveyResponses', surveyResponseRating?: Array<{ __typename?: 'Rating', profileId: any, item_id?: number | null, rating?: number | null } | null> | null, mediaRating?: Array<{ __typename?: 'Rating', profileId: any, item_id?: number | null, rating?: number | null } | null> | null } | null };

export type SurveyAnalyticsQueryVariables = Exact<{
  request: SurveyAnalyticsRequest;
}>;


export type SurveyAnalyticsQuery = { __typename?: 'Query', surveyAnalytics: { __typename?: 'ChartDataLabels', labels?: Array<string> | null, data?: Array<number> | null, totalSurveys?: number | null, totalCompletions?: number | null, totalBusiness?: number | null, avgCompletionTime?: number | null, totalPageviews?: number | null, rankingCompletions?: Array<{ __typename?: 'RankTopCompletions', surveyId?: string | null, completions?: number | null } | null> | null } };

export type TopBusinessQueryVariables = Exact<{
  request: TopBusinessRequest;
}>;


export type TopBusinessQuery = { __typename?: 'Query', topBusiness: { __typename?: 'ChartDataLabels', labels?: Array<string> | null, data?: Array<number> | null, totalSurveys?: number | null, totalCompletions?: number | null, totalBusiness?: number | null, avgCompletionTime?: number | null, totalPageviews?: number | null, rankingCompletions?: Array<{ __typename?: 'RankTopCompletions', surveyId?: string | null, completions?: number | null } | null> | null } };

export type DataUserRequestQueryVariables = Exact<{
  request?: InputMaybe<CategoriesRequest>;
}>;


export type DataUserRequestQuery = { __typename?: 'Query', dataUser?: { __typename?: 'DataUser', userMostCompletedSurveys?: Array<{ __typename?: 'UserMostCompletedSurveys', profileId: any, numberOfSurveys?: number | null } | null> | null, mostEarnedCashRewards?: Array<{ __typename?: 'MostEarnedCashRewards', profileId: any, mostCashViaStripe?: number | null } | null> | null, mostEarnedCryptocurrencyRewards?: { __typename?: 'MostEarnedCryptocurrencyRewards', nearRewards?: Array<{ __typename?: 'CryptoReward', profileId: any, amountCrypto?: number | null, amountUsd?: number | null } | null> | null, polkadotRewards?: Array<{ __typename?: 'CryptoReward', profileId: any, amountCrypto?: number | null, amountUsd?: number | null } | null> | null, polygonRewards?: Array<{ __typename?: 'CryptoReward', profileId: any, amountCrypto?: number | null, amountUsd?: number | null } | null> | null, totalCryptoInCash?: Array<{ __typename?: 'AllCryptoRewardInUSD', profileId: any, amountUsd?: number | null } | null> | null } | null, mostDollarsSpentNFTMarketplace?: Array<{ __typename?: 'MostDollarsSpentNFTMarketplace', profileId: any, realDollarsSpent?: number | null } | null> | null, mostCryptocurrencySpentNFTMarketplace?: { __typename?: 'MostCryptocurrencySpentNFTMarketplace', mostSpentNear?: Array<{ __typename?: 'CryptoReward', profileId: any, amountCrypto?: number | null, amountUsd?: number | null } | null> | null, mostSpentPolkadot?: Array<{ __typename?: 'CryptoReward', profileId: any, amountCrypto?: number | null, amountUsd?: number | null } | null> | null, mostSpentPolygon?: Array<{ __typename?: 'CryptoReward', profileId: any, amountCrypto?: number | null, amountUsd?: number | null } | null> | null } | null, mostInvitedUsers?: Array<{ __typename?: 'MostInvitedUsers', profileId: any, usersInvited?: number | null } | null> | null, mostCompletedSurveysInSpecificCategory?: Array<{ __typename?: 'MostCompletedSurveysInSpecificCategory', profileId: any, categoryName?: string | null, surveysCompleted?: number | null } | null> | null, highestAverageSurveyCompletionRate?: { __typename?: 'HighestAverageSurveyCompletionRate', highestAverageSurveyCompletion?: Array<{ __typename?: 'AverageSurveyCompletionRatesByUser', profileId?: any | null, percentageCompletionAverage?: number | null } | null> | null } | null, mostConsistentSurveyCompletionFrequency?: { __typename?: 'MostConsistentSurveyCompletionFrequency', daily?: Array<{ __typename?: 'UserCompletionFrequency', profileId: any, frequencyAverage?: number | null } | null> | null, weekly?: Array<{ __typename?: 'UserCompletionFrequency', profileId: any, frequencyAverage?: number | null } | null> | null, monthly?: Array<{ __typename?: 'UserCompletionFrequency', profileId: any, frequencyAverage?: number | null } | null> | null, yearly?: Array<{ __typename?: 'UserCompletionFrequency', profileId: any, frequencyAverage?: number | null } | null> | null } | null, highestNumberOfConsecutiveDaysWithSurveyCompletions?: Array<{ __typename?: 'HighestNumberOfConsecutiveDaysWithSurveyCompletions', profileId: any, longestDailyStreak?: number | null } | null> | null, mostActiveParticipationInSpecificTypesOfSurveys?: { __typename?: 'MostActiveParticipationInSpecificTypesOfSurveys', multipleChoiceSurveysRankings?: Array<{ __typename?: 'MultipleChoiceSurveys', profileId: any, multipleChoiceSurveys?: number | null } | null> | null, openEndedSurveysRankings?: Array<{ __typename?: 'OpenEndedSurveys', profileId: any, openEndedSurveys?: number | null } | null> | null } | null, mostReferralsConvertedIntoActiveSurveyParticipants?: Array<{ __typename?: 'MostReferralsConvertedIntoActiveSurveyParticipants', profileId: any, referralsSent?: number | null, referredParticipantCount?: number | null } | null> | null, mostEngagementWithCommunityFeatures?: Array<{ __typename?: 'MostEngagementWithCommunityFeatures', profileId: any, totalPosts?: number | null } | null> | null, mostCreativeAndUniqueSurveyResponses?: { __typename?: 'MostCreativeAndUniqueSurveyResponses', surveyResponseRating?: Array<{ __typename?: 'Rating', profileId: any, item_id?: number | null, rating?: number | null } | null> | null, mediaRating?: Array<{ __typename?: 'Rating', profileId: any, item_id?: number | null, rating?: number | null } | null> | null } | null } | null };



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
  AllCryptoRewardInUSD: ResolverTypeWrapper<AllCryptoRewardInUsd>;
  AverageSurveyCompletionRatesByUser: ResolverTypeWrapper<AverageSurveyCompletionRatesByUser>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CategoriesRequest: CategoriesRequest;
  ChartDataLabels: ResolverTypeWrapper<ChartDataLabels>;
  CryptoIssued: ResolverTypeWrapper<CryptoIssued>;
  CryptoIssuedAllBlockchains: ResolverTypeWrapper<CryptoIssuedAllBlockchains>;
  CryptoReward: ResolverTypeWrapper<CryptoReward>;
  DataBusiness: ResolverTypeWrapper<DataBusiness>;
  DataUser: ResolverTypeWrapper<DataUser>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  GoodsOwnedMedia: ResolverTypeWrapper<GoodsOwnedMedia>;
  HighestAverageSurveyCompletionRate: ResolverTypeWrapper<HighestAverageSurveyCompletionRate>;
  HighestConversionRate: ResolverTypeWrapper<HighestConversionRate>;
  HighestNumberOfConsecutiveDaysWithSurveyCompletions: ResolverTypeWrapper<HighestNumberOfConsecutiveDaysWithSurveyCompletions>;
  HighestNumberOfParticipantsEngaged: ResolverTypeWrapper<HighestNumberOfParticipantsEngaged>;
  HighestNumberOfSuccessfulSurveyCampaigns: ResolverTypeWrapper<HighestNumberOfSuccessfulSurveyCampaigns>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  MediaBoughtAndSold: ResolverTypeWrapper<MediaBoughtAndSold>;
  MediaBoughtAndSoldRequest: MediaBoughtAndSoldRequest;
  MediaSold: ResolverTypeWrapper<MediaSold>;
  MostActiveParticipationInSpecificTypesOfSurveys: ResolverTypeWrapper<MostActiveParticipationInSpecificTypesOfSurveys>;
  MostCashValueIssuedViaSurveysViaStripe: ResolverTypeWrapper<MostCashValueIssuedViaSurveysViaStripe>;
  MostCompletedAll: ResolverTypeWrapper<MostCompletedAll>;
  MostCompletedNear: ResolverTypeWrapper<MostCompletedNear>;
  MostCompletedPolkadot: ResolverTypeWrapper<MostCompletedPolkadot>;
  MostCompletedPolygon: ResolverTypeWrapper<MostCompletedPolygon>;
  MostCompletedSurveys: ResolverTypeWrapper<MostCompletedSurveys>;
  MostCompletedSurveysInSpecificCategory: ResolverTypeWrapper<MostCompletedSurveysInSpecificCategory>;
  MostConsistentSurveyCompletionFrequency: ResolverTypeWrapper<MostConsistentSurveyCompletionFrequency>;
  MostCreativeAndUniqueSurveyResponses: ResolverTypeWrapper<MostCreativeAndUniqueSurveyResponses>;
  MostCryptocurrencySpentNFTMarketplace: ResolverTypeWrapper<MostCryptocurrencySpentNftMarketplace>;
  MostCryptocurrencyValueIssuedViaSurveys: ResolverTypeWrapper<MostCryptocurrencyValueIssuedViaSurveys>;
  MostDiverseSurveyTopicsCovered: ResolverTypeWrapper<MostDiverseSurveyTopicsCovered>;
  MostDollarsSpentNFTMarketplace: ResolverTypeWrapper<MostDollarsSpentNftMarketplace>;
  MostEarnedCashRewards: ResolverTypeWrapper<MostEarnedCashRewards>;
  MostEarnedCryptocurrencyRewards: ResolverTypeWrapper<MostEarnedCryptocurrencyRewards>;
  MostEngagementWithCommunityFeatures: ResolverTypeWrapper<MostEngagementWithCommunityFeatures>;
  MostInvitedUsers: ResolverTypeWrapper<MostInvitedUsers>;
  MostIssuedSurveys: ResolverTypeWrapper<MostIssuedSurveys>;
  MostReferralsConvertedIntoActiveSurveyParticipants: ResolverTypeWrapper<MostReferralsConvertedIntoActiveSurveyParticipants>;
  MultipleChoiceSurveys: ResolverTypeWrapper<MultipleChoiceSurveys>;
  OpenEndedSurveys: ResolverTypeWrapper<OpenEndedSurveys>;
  ProfileId: ResolverTypeWrapper<Scalars['ProfileId']>;
  PurchaseHistory: ResolverTypeWrapper<PurchaseHistory>;
  Query: ResolverTypeWrapper<{}>;
  RankTopCompletions: ResolverTypeWrapper<RankTopCompletions>;
  Rating: ResolverTypeWrapper<Rating>;
  SaleHistory: ResolverTypeWrapper<SaleHistory>;
  SaleHistoryPerBusinessRequest: SaleHistoryPerBusinessRequest;
  SaleItem: ResolverTypeWrapper<SaleItem>;
  String: ResolverTypeWrapper<Scalars['String']>;
  SurveyAnalyticsRequest: SurveyAnalyticsRequest;
  TopBusinessRequest: TopBusinessRequest;
  UserCompletionFrequency: ResolverTypeWrapper<UserCompletionFrequency>;
  UserMostCompletedSurveys: ResolverTypeWrapper<UserMostCompletedSurveys>;
  purchaseHistoryPerUserRequest: PurchaseHistoryPerUserRequest;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AllCryptoRewardInUSD: AllCryptoRewardInUsd;
  AverageSurveyCompletionRatesByUser: AverageSurveyCompletionRatesByUser;
  Boolean: Scalars['Boolean'];
  CategoriesRequest: CategoriesRequest;
  ChartDataLabels: ChartDataLabels;
  CryptoIssued: CryptoIssued;
  CryptoIssuedAllBlockchains: CryptoIssuedAllBlockchains;
  CryptoReward: CryptoReward;
  DataBusiness: DataBusiness;
  DataUser: DataUser;
  Date: Scalars['Date'];
  Float: Scalars['Float'];
  GoodsOwnedMedia: GoodsOwnedMedia;
  HighestAverageSurveyCompletionRate: HighestAverageSurveyCompletionRate;
  HighestConversionRate: HighestConversionRate;
  HighestNumberOfConsecutiveDaysWithSurveyCompletions: HighestNumberOfConsecutiveDaysWithSurveyCompletions;
  HighestNumberOfParticipantsEngaged: HighestNumberOfParticipantsEngaged;
  HighestNumberOfSuccessfulSurveyCampaigns: HighestNumberOfSuccessfulSurveyCampaigns;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  MediaBoughtAndSold: MediaBoughtAndSold;
  MediaBoughtAndSoldRequest: MediaBoughtAndSoldRequest;
  MediaSold: MediaSold;
  MostActiveParticipationInSpecificTypesOfSurveys: MostActiveParticipationInSpecificTypesOfSurveys;
  MostCashValueIssuedViaSurveysViaStripe: MostCashValueIssuedViaSurveysViaStripe;
  MostCompletedAll: MostCompletedAll;
  MostCompletedNear: MostCompletedNear;
  MostCompletedPolkadot: MostCompletedPolkadot;
  MostCompletedPolygon: MostCompletedPolygon;
  MostCompletedSurveys: MostCompletedSurveys;
  MostCompletedSurveysInSpecificCategory: MostCompletedSurveysInSpecificCategory;
  MostConsistentSurveyCompletionFrequency: MostConsistentSurveyCompletionFrequency;
  MostCreativeAndUniqueSurveyResponses: MostCreativeAndUniqueSurveyResponses;
  MostCryptocurrencySpentNFTMarketplace: MostCryptocurrencySpentNftMarketplace;
  MostCryptocurrencyValueIssuedViaSurveys: MostCryptocurrencyValueIssuedViaSurveys;
  MostDiverseSurveyTopicsCovered: MostDiverseSurveyTopicsCovered;
  MostDollarsSpentNFTMarketplace: MostDollarsSpentNftMarketplace;
  MostEarnedCashRewards: MostEarnedCashRewards;
  MostEarnedCryptocurrencyRewards: MostEarnedCryptocurrencyRewards;
  MostEngagementWithCommunityFeatures: MostEngagementWithCommunityFeatures;
  MostInvitedUsers: MostInvitedUsers;
  MostIssuedSurveys: MostIssuedSurveys;
  MostReferralsConvertedIntoActiveSurveyParticipants: MostReferralsConvertedIntoActiveSurveyParticipants;
  MultipleChoiceSurveys: MultipleChoiceSurveys;
  OpenEndedSurveys: OpenEndedSurveys;
  ProfileId: Scalars['ProfileId'];
  PurchaseHistory: PurchaseHistory;
  Query: {};
  RankTopCompletions: RankTopCompletions;
  Rating: Rating;
  SaleHistory: SaleHistory;
  SaleHistoryPerBusinessRequest: SaleHistoryPerBusinessRequest;
  SaleItem: SaleItem;
  String: Scalars['String'];
  SurveyAnalyticsRequest: SurveyAnalyticsRequest;
  TopBusinessRequest: TopBusinessRequest;
  UserCompletionFrequency: UserCompletionFrequency;
  UserMostCompletedSurveys: UserMostCompletedSurveys;
  purchaseHistoryPerUserRequest: PurchaseHistoryPerUserRequest;
};

export type AllCryptoRewardInUsdResolvers<ContextType = any, ParentType extends ResolversParentTypes['AllCryptoRewardInUSD'] = ResolversParentTypes['AllCryptoRewardInUSD']> = {
  amountUsd?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AverageSurveyCompletionRatesByUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['AverageSurveyCompletionRatesByUser'] = ResolversParentTypes['AverageSurveyCompletionRatesByUser']> = {
  percentageCompletionAverage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  profileId?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
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

export type CryptoIssuedResolvers<ContextType = any, ParentType extends ResolversParentTypes['CryptoIssued'] = ResolversParentTypes['CryptoIssued']> = {
  amountCrypto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  businessId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  cryptoValueInUSD?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CryptoIssuedAllBlockchainsResolvers<ContextType = any, ParentType extends ResolversParentTypes['CryptoIssuedAllBlockchains'] = ResolversParentTypes['CryptoIssuedAllBlockchains']> = {
  businessId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  cryptoValueInUSD?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CryptoRewardResolvers<ContextType = any, ParentType extends ResolversParentTypes['CryptoReward'] = ResolversParentTypes['CryptoReward']> = {
  amountCrypto?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  amountUsd?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataBusinessResolvers<ContextType = any, ParentType extends ResolversParentTypes['DataBusiness'] = ResolversParentTypes['DataBusiness']> = {
  highestConversionRate?: Resolver<Maybe<Array<Maybe<ResolversTypes['HighestConversionRate']>>>, ParentType, ContextType>;
  highestNumberOfParticipantsEngaged?: Resolver<Maybe<Array<Maybe<ResolversTypes['HighestNumberOfParticipantsEngaged']>>>, ParentType, ContextType>;
  highestNumberOfSuccessfulSurveyCampaigns?: Resolver<Maybe<Array<Maybe<ResolversTypes['HighestNumberOfSuccessfulSurveyCampaigns']>>>, ParentType, ContextType>;
  mostCashValueIssuedViaSurveysViaStripe?: Resolver<Maybe<Array<Maybe<ResolversTypes['MostCashValueIssuedViaSurveysViaStripe']>>>, ParentType, ContextType>;
  mostCompletedSurveys?: Resolver<Maybe<ResolversTypes['MostCompletedSurveys']>, ParentType, ContextType>;
  mostCryptocurrencyValueIssuedViaSurveys?: Resolver<Maybe<ResolversTypes['MostCryptocurrencyValueIssuedViaSurveys']>, ParentType, ContextType>;
  mostDiverseSurveyTopicsCovered?: Resolver<Maybe<Array<Maybe<ResolversTypes['MostDiverseSurveyTopicsCovered']>>>, ParentType, ContextType>;
  mostIssuedSurveys?: Resolver<Maybe<Array<Maybe<ResolversTypes['MostIssuedSurveys']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['DataUser'] = ResolversParentTypes['DataUser']> = {
  highestAverageSurveyCompletionRate?: Resolver<Maybe<ResolversTypes['HighestAverageSurveyCompletionRate']>, ParentType, ContextType>;
  highestNumberOfConsecutiveDaysWithSurveyCompletions?: Resolver<Maybe<Array<Maybe<ResolversTypes['HighestNumberOfConsecutiveDaysWithSurveyCompletions']>>>, ParentType, ContextType>;
  mostActiveParticipationInSpecificTypesOfSurveys?: Resolver<Maybe<ResolversTypes['MostActiveParticipationInSpecificTypesOfSurveys']>, ParentType, ContextType>;
  mostCompletedSurveysInSpecificCategory?: Resolver<Maybe<Array<Maybe<ResolversTypes['MostCompletedSurveysInSpecificCategory']>>>, ParentType, ContextType>;
  mostConsistentSurveyCompletionFrequency?: Resolver<Maybe<ResolversTypes['MostConsistentSurveyCompletionFrequency']>, ParentType, ContextType>;
  mostCreativeAndUniqueSurveyResponses?: Resolver<Maybe<ResolversTypes['MostCreativeAndUniqueSurveyResponses']>, ParentType, ContextType>;
  mostCryptocurrencySpentNFTMarketplace?: Resolver<Maybe<ResolversTypes['MostCryptocurrencySpentNFTMarketplace']>, ParentType, ContextType>;
  mostDollarsSpentNFTMarketplace?: Resolver<Maybe<Array<Maybe<ResolversTypes['MostDollarsSpentNFTMarketplace']>>>, ParentType, ContextType>;
  mostEarnedCashRewards?: Resolver<Maybe<Array<Maybe<ResolversTypes['MostEarnedCashRewards']>>>, ParentType, ContextType>;
  mostEarnedCryptocurrencyRewards?: Resolver<Maybe<ResolversTypes['MostEarnedCryptocurrencyRewards']>, ParentType, ContextType>;
  mostEngagementWithCommunityFeatures?: Resolver<Maybe<Array<Maybe<ResolversTypes['MostEngagementWithCommunityFeatures']>>>, ParentType, ContextType>;
  mostInvitedUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['MostInvitedUsers']>>>, ParentType, ContextType>;
  mostReferralsConvertedIntoActiveSurveyParticipants?: Resolver<Maybe<Array<Maybe<ResolversTypes['MostReferralsConvertedIntoActiveSurveyParticipants']>>>, ParentType, ContextType>;
  userMostCompletedSurveys?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserMostCompletedSurveys']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type GoodsOwnedMediaResolvers<ContextType = any, ParentType extends ResolversParentTypes['GoodsOwnedMedia'] = ResolversParentTypes['GoodsOwnedMedia']> = {
  mediaId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HighestAverageSurveyCompletionRateResolvers<ContextType = any, ParentType extends ResolversParentTypes['HighestAverageSurveyCompletionRate'] = ResolversParentTypes['HighestAverageSurveyCompletionRate']> = {
  highestAverageSurveyCompletion?: Resolver<Maybe<Array<Maybe<ResolversTypes['AverageSurveyCompletionRatesByUser']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HighestConversionRateResolvers<ContextType = any, ParentType extends ResolversParentTypes['HighestConversionRate'] = ResolversParentTypes['HighestConversionRate']> = {
  businessId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  conversionPercentageRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  convertedPurchasers?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  uniqueParticipants?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HighestNumberOfConsecutiveDaysWithSurveyCompletionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['HighestNumberOfConsecutiveDaysWithSurveyCompletions'] = ResolversParentTypes['HighestNumberOfConsecutiveDaysWithSurveyCompletions']> = {
  longestDailyStreak?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HighestNumberOfParticipantsEngagedResolvers<ContextType = any, ParentType extends ResolversParentTypes['HighestNumberOfParticipantsEngaged'] = ResolversParentTypes['HighestNumberOfParticipantsEngaged']> = {
  businessId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  campaignId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  numberOfParticipants?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HighestNumberOfSuccessfulSurveyCampaignsResolvers<ContextType = any, ParentType extends ResolversParentTypes['HighestNumberOfSuccessfulSurveyCampaigns'] = ResolversParentTypes['HighestNumberOfSuccessfulSurveyCampaigns']> = {
  businessId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  numberOfSuccessfulCampaigns?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
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

export type MostActiveParticipationInSpecificTypesOfSurveysResolvers<ContextType = any, ParentType extends ResolversParentTypes['MostActiveParticipationInSpecificTypesOfSurveys'] = ResolversParentTypes['MostActiveParticipationInSpecificTypesOfSurveys']> = {
  multipleChoiceSurveysRankings?: Resolver<Maybe<Array<Maybe<ResolversTypes['MultipleChoiceSurveys']>>>, ParentType, ContextType>;
  openEndedSurveysRankings?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenEndedSurveys']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MostCashValueIssuedViaSurveysViaStripeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MostCashValueIssuedViaSurveysViaStripe'] = ResolversParentTypes['MostCashValueIssuedViaSurveysViaStripe']> = {
  amountCash?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  businessId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MostCompletedAllResolvers<ContextType = any, ParentType extends ResolversParentTypes['MostCompletedAll'] = ResolversParentTypes['MostCompletedAll']> = {
  businessId?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  totalCompleted?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MostCompletedNearResolvers<ContextType = any, ParentType extends ResolversParentTypes['MostCompletedNear'] = ResolversParentTypes['MostCompletedNear']> = {
  businessId?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  numberOfSurveysNear?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MostCompletedPolkadotResolvers<ContextType = any, ParentType extends ResolversParentTypes['MostCompletedPolkadot'] = ResolversParentTypes['MostCompletedPolkadot']> = {
  businessId?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  numberOfSurveysPolkadot?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MostCompletedPolygonResolvers<ContextType = any, ParentType extends ResolversParentTypes['MostCompletedPolygon'] = ResolversParentTypes['MostCompletedPolygon']> = {
  businessId?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  numberOfSurveysPolygon?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MostCompletedSurveysResolvers<ContextType = any, ParentType extends ResolversParentTypes['MostCompletedSurveys'] = ResolversParentTypes['MostCompletedSurveys']> = {
  mostCompletedAll?: Resolver<Maybe<Array<Maybe<ResolversTypes['MostCompletedAll']>>>, ParentType, ContextType>;
  mostCompletedNear?: Resolver<Maybe<Array<Maybe<ResolversTypes['MostCompletedNear']>>>, ParentType, ContextType>;
  mostCompletedPolkadot?: Resolver<Maybe<Array<Maybe<ResolversTypes['MostCompletedPolkadot']>>>, ParentType, ContextType>;
  mostCompletedPolygon?: Resolver<Maybe<Array<Maybe<ResolversTypes['MostCompletedPolygon']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MostCompletedSurveysInSpecificCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['MostCompletedSurveysInSpecificCategory'] = ResolversParentTypes['MostCompletedSurveysInSpecificCategory']> = {
  categoryName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  surveysCompleted?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MostConsistentSurveyCompletionFrequencyResolvers<ContextType = any, ParentType extends ResolversParentTypes['MostConsistentSurveyCompletionFrequency'] = ResolversParentTypes['MostConsistentSurveyCompletionFrequency']> = {
  daily?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserCompletionFrequency']>>>, ParentType, ContextType>;
  monthly?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserCompletionFrequency']>>>, ParentType, ContextType>;
  weekly?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserCompletionFrequency']>>>, ParentType, ContextType>;
  yearly?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserCompletionFrequency']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MostCreativeAndUniqueSurveyResponsesResolvers<ContextType = any, ParentType extends ResolversParentTypes['MostCreativeAndUniqueSurveyResponses'] = ResolversParentTypes['MostCreativeAndUniqueSurveyResponses']> = {
  mediaRating?: Resolver<Maybe<Array<Maybe<ResolversTypes['Rating']>>>, ParentType, ContextType>;
  surveyResponseRating?: Resolver<Maybe<Array<Maybe<ResolversTypes['Rating']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MostCryptocurrencySpentNftMarketplaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['MostCryptocurrencySpentNFTMarketplace'] = ResolversParentTypes['MostCryptocurrencySpentNFTMarketplace']> = {
  mostSpentNear?: Resolver<Maybe<Array<Maybe<ResolversTypes['CryptoReward']>>>, ParentType, ContextType>;
  mostSpentPolkadot?: Resolver<Maybe<Array<Maybe<ResolversTypes['CryptoReward']>>>, ParentType, ContextType>;
  mostSpentPolygon?: Resolver<Maybe<Array<Maybe<ResolversTypes['CryptoReward']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MostCryptocurrencyValueIssuedViaSurveysResolvers<ContextType = any, ParentType extends ResolversParentTypes['MostCryptocurrencyValueIssuedViaSurveys'] = ResolversParentTypes['MostCryptocurrencyValueIssuedViaSurveys']> = {
  mostIssuedInTotal?: Resolver<Maybe<Array<Maybe<ResolversTypes['CryptoIssuedAllBlockchains']>>>, ParentType, ContextType>;
  mostIssuedNear?: Resolver<Maybe<Array<Maybe<ResolversTypes['CryptoIssued']>>>, ParentType, ContextType>;
  mostIssuedPolkadot?: Resolver<Maybe<Array<Maybe<ResolversTypes['CryptoIssued']>>>, ParentType, ContextType>;
  mostIssuedPolygon?: Resolver<Maybe<Array<Maybe<ResolversTypes['CryptoIssued']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MostDiverseSurveyTopicsCoveredResolvers<ContextType = any, ParentType extends ResolversParentTypes['MostDiverseSurveyTopicsCovered'] = ResolversParentTypes['MostDiverseSurveyTopicsCovered']> = {
  allTopics?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  businessId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  campaignId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  numberOfTopics?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MostDollarsSpentNftMarketplaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['MostDollarsSpentNFTMarketplace'] = ResolversParentTypes['MostDollarsSpentNFTMarketplace']> = {
  profileId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  realDollarsSpent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MostEarnedCashRewardsResolvers<ContextType = any, ParentType extends ResolversParentTypes['MostEarnedCashRewards'] = ResolversParentTypes['MostEarnedCashRewards']> = {
  mostCashViaStripe?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MostEarnedCryptocurrencyRewardsResolvers<ContextType = any, ParentType extends ResolversParentTypes['MostEarnedCryptocurrencyRewards'] = ResolversParentTypes['MostEarnedCryptocurrencyRewards']> = {
  nearRewards?: Resolver<Maybe<Array<Maybe<ResolversTypes['CryptoReward']>>>, ParentType, ContextType>;
  polkadotRewards?: Resolver<Maybe<Array<Maybe<ResolversTypes['CryptoReward']>>>, ParentType, ContextType>;
  polygonRewards?: Resolver<Maybe<Array<Maybe<ResolversTypes['CryptoReward']>>>, ParentType, ContextType>;
  totalCryptoInCash?: Resolver<Maybe<Array<Maybe<ResolversTypes['AllCryptoRewardInUSD']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MostEngagementWithCommunityFeaturesResolvers<ContextType = any, ParentType extends ResolversParentTypes['MostEngagementWithCommunityFeatures'] = ResolversParentTypes['MostEngagementWithCommunityFeatures']> = {
  profileId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  totalPosts?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MostInvitedUsersResolvers<ContextType = any, ParentType extends ResolversParentTypes['MostInvitedUsers'] = ResolversParentTypes['MostInvitedUsers']> = {
  profileId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  usersInvited?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MostIssuedSurveysResolvers<ContextType = any, ParentType extends ResolversParentTypes['MostIssuedSurveys'] = ResolversParentTypes['MostIssuedSurveys']> = {
  businessId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  numberOfSurveys?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MostReferralsConvertedIntoActiveSurveyParticipantsResolvers<ContextType = any, ParentType extends ResolversParentTypes['MostReferralsConvertedIntoActiveSurveyParticipants'] = ResolversParentTypes['MostReferralsConvertedIntoActiveSurveyParticipants']> = {
  profileId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  referralsSent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  referredParticipantCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MultipleChoiceSurveysResolvers<ContextType = any, ParentType extends ResolversParentTypes['MultipleChoiceSurveys'] = ResolversParentTypes['MultipleChoiceSurveys']> = {
  multipleChoiceSurveys?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OpenEndedSurveysResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpenEndedSurveys'] = ResolversParentTypes['OpenEndedSurveys']> = {
  openEndedSurveys?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface ProfileIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ProfileId'], any> {
  name: 'ProfileId';
}

export type PurchaseHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['PurchaseHistory'] = ResolversParentTypes['PurchaseHistory']> = {
  mediaId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  allMediaBoughtAndSold?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaBoughtAndSold']>>>, ParentType, ContextType>;
  dataBusiness?: Resolver<Maybe<ResolversTypes['DataBusiness']>, ParentType, ContextType>;
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

export type RatingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Rating'] = ResolversParentTypes['Rating']> = {
  item_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
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

export type UserCompletionFrequencyResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCompletionFrequency'] = ResolversParentTypes['UserCompletionFrequency']> = {
  frequencyAverage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserMostCompletedSurveysResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserMostCompletedSurveys'] = ResolversParentTypes['UserMostCompletedSurveys']> = {
  numberOfSurveys?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AllCryptoRewardInUSD?: AllCryptoRewardInUsdResolvers<ContextType>;
  AverageSurveyCompletionRatesByUser?: AverageSurveyCompletionRatesByUserResolvers<ContextType>;
  ChartDataLabels?: ChartDataLabelsResolvers<ContextType>;
  CryptoIssued?: CryptoIssuedResolvers<ContextType>;
  CryptoIssuedAllBlockchains?: CryptoIssuedAllBlockchainsResolvers<ContextType>;
  CryptoReward?: CryptoRewardResolvers<ContextType>;
  DataBusiness?: DataBusinessResolvers<ContextType>;
  DataUser?: DataUserResolvers<ContextType>;
  Date?: GraphQLScalarType;
  GoodsOwnedMedia?: GoodsOwnedMediaResolvers<ContextType>;
  HighestAverageSurveyCompletionRate?: HighestAverageSurveyCompletionRateResolvers<ContextType>;
  HighestConversionRate?: HighestConversionRateResolvers<ContextType>;
  HighestNumberOfConsecutiveDaysWithSurveyCompletions?: HighestNumberOfConsecutiveDaysWithSurveyCompletionsResolvers<ContextType>;
  HighestNumberOfParticipantsEngaged?: HighestNumberOfParticipantsEngagedResolvers<ContextType>;
  HighestNumberOfSuccessfulSurveyCampaigns?: HighestNumberOfSuccessfulSurveyCampaignsResolvers<ContextType>;
  MediaBoughtAndSold?: MediaBoughtAndSoldResolvers<ContextType>;
  MediaSold?: MediaSoldResolvers<ContextType>;
  MostActiveParticipationInSpecificTypesOfSurveys?: MostActiveParticipationInSpecificTypesOfSurveysResolvers<ContextType>;
  MostCashValueIssuedViaSurveysViaStripe?: MostCashValueIssuedViaSurveysViaStripeResolvers<ContextType>;
  MostCompletedAll?: MostCompletedAllResolvers<ContextType>;
  MostCompletedNear?: MostCompletedNearResolvers<ContextType>;
  MostCompletedPolkadot?: MostCompletedPolkadotResolvers<ContextType>;
  MostCompletedPolygon?: MostCompletedPolygonResolvers<ContextType>;
  MostCompletedSurveys?: MostCompletedSurveysResolvers<ContextType>;
  MostCompletedSurveysInSpecificCategory?: MostCompletedSurveysInSpecificCategoryResolvers<ContextType>;
  MostConsistentSurveyCompletionFrequency?: MostConsistentSurveyCompletionFrequencyResolvers<ContextType>;
  MostCreativeAndUniqueSurveyResponses?: MostCreativeAndUniqueSurveyResponsesResolvers<ContextType>;
  MostCryptocurrencySpentNFTMarketplace?: MostCryptocurrencySpentNftMarketplaceResolvers<ContextType>;
  MostCryptocurrencyValueIssuedViaSurveys?: MostCryptocurrencyValueIssuedViaSurveysResolvers<ContextType>;
  MostDiverseSurveyTopicsCovered?: MostDiverseSurveyTopicsCoveredResolvers<ContextType>;
  MostDollarsSpentNFTMarketplace?: MostDollarsSpentNftMarketplaceResolvers<ContextType>;
  MostEarnedCashRewards?: MostEarnedCashRewardsResolvers<ContextType>;
  MostEarnedCryptocurrencyRewards?: MostEarnedCryptocurrencyRewardsResolvers<ContextType>;
  MostEngagementWithCommunityFeatures?: MostEngagementWithCommunityFeaturesResolvers<ContextType>;
  MostInvitedUsers?: MostInvitedUsersResolvers<ContextType>;
  MostIssuedSurveys?: MostIssuedSurveysResolvers<ContextType>;
  MostReferralsConvertedIntoActiveSurveyParticipants?: MostReferralsConvertedIntoActiveSurveyParticipantsResolvers<ContextType>;
  MultipleChoiceSurveys?: MultipleChoiceSurveysResolvers<ContextType>;
  OpenEndedSurveys?: OpenEndedSurveysResolvers<ContextType>;
  ProfileId?: GraphQLScalarType;
  PurchaseHistory?: PurchaseHistoryResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RankTopCompletions?: RankTopCompletionsResolvers<ContextType>;
  Rating?: RatingResolvers<ContextType>;
  SaleHistory?: SaleHistoryResolvers<ContextType>;
  SaleItem?: SaleItemResolvers<ContextType>;
  UserCompletionFrequency?: UserCompletionFrequencyResolvers<ContextType>;
  UserMostCompletedSurveys?: UserMostCompletedSurveysResolvers<ContextType>;
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
export const DataUserFieldsFragmentDoc = gql`
    fragment DataUserFields on DataUser {
  userMostCompletedSurveys {
    profileId
    numberOfSurveys
  }
  mostEarnedCashRewards {
    profileId
    mostCashViaStripe
  }
  mostEarnedCryptocurrencyRewards {
    nearRewards {
      profileId
      amountCrypto
      amountUsd
    }
    polkadotRewards {
      profileId
      amountCrypto
      amountUsd
    }
    polygonRewards {
      profileId
      amountCrypto
      amountUsd
    }
    totalCryptoInCash {
      profileId
      amountUsd
    }
  }
  mostDollarsSpentNFTMarketplace {
    profileId
    realDollarsSpent
  }
  mostCryptocurrencySpentNFTMarketplace {
    mostSpentNear {
      profileId
      amountCrypto
      amountUsd
    }
    mostSpentPolkadot {
      profileId
      amountCrypto
      amountUsd
    }
    mostSpentPolygon {
      profileId
      amountCrypto
      amountUsd
    }
  }
  mostInvitedUsers {
    profileId
    usersInvited
  }
  mostCompletedSurveysInSpecificCategory {
    profileId
    categoryName
    surveysCompleted
  }
  highestAverageSurveyCompletionRate {
    highestAverageSurveyCompletion {
      profileId
      percentageCompletionAverage
    }
  }
  mostConsistentSurveyCompletionFrequency {
    daily {
      profileId
      frequencyAverage
    }
    weekly {
      profileId
      frequencyAverage
    }
    monthly {
      profileId
      frequencyAverage
    }
    yearly {
      profileId
      frequencyAverage
    }
  }
  highestNumberOfConsecutiveDaysWithSurveyCompletions {
    profileId
    longestDailyStreak
  }
  mostActiveParticipationInSpecificTypesOfSurveys {
    multipleChoiceSurveysRankings {
      profileId
      multipleChoiceSurveys
    }
    openEndedSurveysRankings {
      profileId
      openEndedSurveys
    }
  }
  mostReferralsConvertedIntoActiveSurveyParticipants {
    profileId
    referralsSent
    referredParticipantCount
  }
  mostEngagementWithCommunityFeatures {
    profileId
    totalPosts
  }
  mostCreativeAndUniqueSurveyResponses {
    surveyResponseRating {
      profileId
      item_id
      rating
    }
    mediaRating {
      profileId
      item_id
      rating
    }
  }
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
export const DataUserRequestDocument = gql`
    query DataUserRequest($request: CategoriesRequest) {
  dataUser(request: $request) {
    ...DataUserFields
  }
}
    ${DataUserFieldsFragmentDoc}`;

/**
 * __useDataUserRequestQuery__
 *
 * To run a query within a React component, call `useDataUserRequestQuery` and pass it any options that fit your needs.
 * When your component renders, `useDataUserRequestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDataUserRequestQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useDataUserRequestQuery(baseOptions?: Apollo.QueryHookOptions<DataUserRequestQuery, DataUserRequestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DataUserRequestQuery, DataUserRequestQueryVariables>(DataUserRequestDocument, options);
      }
export function useDataUserRequestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DataUserRequestQuery, DataUserRequestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DataUserRequestQuery, DataUserRequestQueryVariables>(DataUserRequestDocument, options);
        }
export type DataUserRequestQueryHookResult = ReturnType<typeof useDataUserRequestQuery>;
export type DataUserRequestLazyQueryHookResult = ReturnType<typeof useDataUserRequestLazyQuery>;
export type DataUserRequestQueryResult = Apollo.QueryResult<DataUserRequestQuery, DataUserRequestQueryVariables>;