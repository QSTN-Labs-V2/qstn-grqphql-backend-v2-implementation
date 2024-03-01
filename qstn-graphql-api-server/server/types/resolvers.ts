import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Access gating metadata */
  AccessGating: any;
  /** Blockchain data scalar type */
  BlockchainData: any;
  /** Business profile category */
  BusinessCategory: any;
  /** ChainId custom scalar type */
  ChainId: any;
  /** CID custom scalar type */
  Cid: any;
  /** ClaimId custom scalar type */
  ClaimId: any;
  /** ContentEncryptionKey scalar type */
  ContentEncryptionKey: any;
  /** Contract address custom scalar type */
  ContractAddress: any;
  /** Survey result credibility data scalar type */
  CredibilityScore: any;
  /** Cursor custom scalar type */
  Cursor: any;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** DID custom scalar type */
  Did: any;
  /** Email scalar type */
  Email: any;
  /** EncryptedValue custom scalar type */
  EncryptedValueScalar: any;
  /** Evm address custom scalar type */
  EvmAddress: any;
  /** Internal survey id custom scalar type */
  InternalSurveyId: any;
  /** jwt custom scalar type */
  Jwt: any;
  /** limit custom scalar type */
  LimitScalar: any;
  /** Locale scalar type */
  Locale: any;
  /** mimetype custom scalar type */
  MimeType: any;
  /** Near address custom scalar type */
  NearAddress: any;
  /** Nft gallery id type */
  NftGalleryId: any;
  /** Nft gallery name type */
  NftGalleryName: any;
  /** Nft id type */
  NftId: any;
  /** Nft ownership id type */
  NftOwnershipId: any;
  /** Nonce custom scalar type */
  Nonce: any;
  /** The notification id */
  NotificationId: any;
  /** ProfileId custom scalar type */
  ProfileId: any;
  /** Query search */
  Search: any;
  /** Relayer signature */
  Signature: any;
  /** Stripe account id custom scalar type */
  StripeAccountId: any;
  /** Survey result data scalar type */
  SurveyData: any;
  /** Survey id custom scalar type */
  SurveyId: any;
  /** Survey url scalar type */
  SurveyUrl: any;
  /** Tag scalar type */
  Tag: any;
  /** timestamp date custom scalar type */
  TimestampScalar: any;
  /** The NFT token id */
  TokenId: any;
  /** The tx hash */
  TxHash: any;
  /** The tx id */
  TxId: any;
  /** UnixTimestamp custom scalar type */
  UnixTimestamp: any;
  /** Url scalar type */
  Url: any;
  /** Represents NULL values */
  Void: any;
};

export enum AccountStatus {
  Authorized = 'AUTHORIZED',
  Banned = 'BANNED',
  Confirmed = 'CONFIRMED',
  Pending = 'PENDING'
}

export enum AccountType {
  Admin = 'ADMIN',
  Business = 'BUSINESS',
  Enduser = 'ENDUSER',
  Root = 'ROOT',
  Unknown = 'UNKNOWN',
  Unknownwallet = 'UNKNOWNWALLET'
}

export type AllCryptoRewardInUsd = {
  __typename?: 'AllCryptoRewardInUSD';
  amountUsd?: Maybe<Scalars['Float']>;
  profileId: Scalars['ProfileId'];
};

export type AnonymousUser = {
  __typename?: 'AnonymousUser';
  anonId: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  fingerprint: Scalars['String'];
  profileId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AnonymousUserQueryRequest = {
  fingerprint: Scalars['String'];
  profileId?: InputMaybe<Scalars['Int']>;
};

/** The auth challenge result */
export type AuthChallengeResult = {
  __typename?: 'AuthChallengeResult';
  /** The text to sign */
  text: Scalars['String'];
};

/** The authentication result */
export type AuthenticationResult = {
  __typename?: 'AuthenticationResult';
  /** The access token */
  accessToken: Scalars['Jwt'];
  /** The refresh token */
  refreshToken: Scalars['Jwt'];
};

export type AverageInviteResponseTime = {
  __typename?: 'AverageInviteResponseTime';
  averageResponseTimeHrs?: Maybe<Scalars['Float']>;
  user?: Maybe<Scalars['ProfileId']>;
};

export type AverageSurveyCompletionRatesByUser = {
  __typename?: 'AverageSurveyCompletionRatesByUser';
  percentageCompletionAverage?: Maybe<Scalars['Float']>;
  profileId?: Maybe<Scalars['ProfileId']>;
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

export type BanUnbanUserRequest = {
  /** The action ban/unban type */
  actionType: Scalars['String'];
  /** The user profile ID */
  profileId: Scalars['ProfileId'];
};

export type BooleanElement = {
  __typename?: 'BooleanElement';
  correctAnswer?: Maybe<Scalars['String']>;
  isRequired: Scalars['Boolean'];
  name: Scalars['String'];
  points?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type: SurveyElementType;
};

/** Business search results */
export type BusinessSearchResult = {
  __typename?: 'BusinessSearchResult';
  items: Array<User>;
  pageInfo: PaginatedResultInfo;
  type: SearchRequestTypes;
};

export type Campaign = {
  __typename?: 'Campaign';
  campaignId: Scalars['ID'];
  campaignType: SurveyCampaignType;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  surveys: Array<Survey>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: User;
};

export type CategoriesRequest = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  profileIds?: InputMaybe<Array<InputMaybe<Scalars['ProfileId']>>>;
};

/** The challenge request */
export type ChallengeRequest = {
  /** The email address you want to login with */
  email: Scalars['Email'];
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

export type ClaimMarketplaceOrderMediaRequest = {
  chainId?: InputMaybe<Scalars['ChainId']>;
  mediaId: Scalars['ID'];
  orderId?: InputMaybe<Scalars['ID']>;
  ownerAddress: Scalars['NearAddress'];
  profileId: Scalars['ProfileId'];
};

export type ClaimSurveyMediaRequest = {
  chainId?: InputMaybe<Scalars['ChainId']>;
  mediaId: Scalars['ID'];
  ownerAddress: Scalars['NearAddress'];
  profileId: Scalars['ProfileId'];
  surveyId: Scalars['SurveyId'];
};

export type ClaimSurveyRewardRequest = {
  chainId?: InputMaybe<Scalars['ChainId']>;
  mediaId?: InputMaybe<Scalars['ID']>;
  profileId: Scalars['ProfileId'];
  surveyId: Scalars['SurveyId'];
};

export type CommentElement = {
  __typename?: 'CommentElement';
  correctAnswer?: Maybe<Scalars['String']>;
  isRequired: Scalars['Boolean'];
  name: Scalars['String'];
  points?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type: SurveyElementType;
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

export type CreateAnonymousUserRequest = {
  fingerprint: Scalars['String'];
};

export type CreateEmbedSurveyResultRequest = {
  chainId?: InputMaybe<Scalars['ChainId']>;
  fingerprint: Scalars['String'];
  profileId?: InputMaybe<Scalars['ProfileId']>;
  result: Scalars['SurveyData'];
  rewardId?: InputMaybe<Scalars['ID']>;
  rewardType?: InputMaybe<Scalars['String']>;
  surveyId: Scalars['ID'];
};

export type CreateFillingQueueRequest = {
  metadata?: InputMaybe<Scalars['String']>;
  profileId: Scalars['ProfileId'];
  status: Scalars['String'];
  surveyId: Scalars['SurveyId'];
  type: Scalars['String'];
};

export type CreateMarketplaceOrderRequest = {
  chainId?: InputMaybe<Scalars['ChainId']>;
  metadata?: InputMaybe<Scalars['String']>;
  orderAmount: Scalars['Int'];
  orderStatus: Scalars['String'];
  orderType: Scalars['String'];
  productId: Scalars['Int'];
  profileId: Scalars['ProfileId'];
};

export type CreateProductRequest = {
  chainId?: InputMaybe<Scalars['ChainId']>;
  description: Scalars['String'];
  duration?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  mediaId?: InputMaybe<Scalars['ID']>;
  metadata?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  ownerId?: InputMaybe<Scalars['String']>;
  price: Scalars['Float'];
  productStatus: Scalars['String'];
  productType: Scalars['String'];
  profileId: Scalars['ProfileId'];
  sellerId?: InputMaybe<Scalars['ProfileId']>;
  whiteList?: InputMaybe<Scalars['String']>;
};

export type CreateProfileRequest = {
  /** The user account type */
  accountType?: InputMaybe<AccountType>;
  /** The user profile image */
  avatar?: InputMaybe<Scalars['String']>;
  /** The user bio */
  bio?: InputMaybe<Scalars['String']>;
  /** The business user name */
  businessName?: InputMaybe<Scalars['String']>;
  /** The business category */
  category?: InputMaybe<Scalars['BusinessCategory']>;
  /** The user display name */
  displayName?: InputMaybe<Scalars['String']>;
  /** The user email */
  email?: InputMaybe<Scalars['Email']>;
  /** The user first name */
  firstName?: InputMaybe<Scalars['String']>;
  /** The user Iden3 DID */
  iden3issuer?: InputMaybe<Scalars['Did']>;
  /** The enduser interests */
  interests?: InputMaybe<Array<Scalars['BusinessCategory']>>;
  /** The user DID */
  issuer?: InputMaybe<Scalars['Did']>;
  /** User last login */
  lastLoginAt: Scalars['UnixTimestamp'];
  /** The user last name */
  lastName?: InputMaybe<Scalars['String']>;
};

export type CreateSurveyGatingRequest = {
  /** The profile id of the creator */
  profileId: Scalars['ProfileId'];
  requirements: Scalars['AccessGating'];
  /** The Survey id */
  surveyId: Scalars['SurveyId'];
};

export type CreateSurveyReferralRequest = {
  invitedEmail: Scalars['Email'];
  profileId: Scalars['ProfileId'];
  surveyId?: InputMaybe<Scalars['SurveyId']>;
};

export type CreateSurveyResultRequest = {
  chainId?: InputMaybe<Scalars['ChainId']>;
  profileId: Scalars['ProfileId'];
  result: Scalars['SurveyData'];
  rewardId?: InputMaybe<Scalars['ID']>;
  rewardType?: InputMaybe<Scalars['String']>;
  surveyId: Scalars['ID'];
};

export type CreateSurveyRewardRequest = {
  chainId?: InputMaybe<Scalars['ChainId']>;
  mediaId?: InputMaybe<Scalars['ID']>;
  profileId: Scalars['ProfileId'];
  rewardType: Scalars['String'];
  surveyId: Scalars['SurveyId'];
};

export type CreateUserBoostRequest = {
  endAt: Scalars['DateTime'];
  /** The user profile ID */
  profileId: Scalars['ProfileId'];
};

export type CreateUserContractRequest = {
  contractAddress: Scalars['ContractAddress'];
  contractName: Scalars['String'];
  contractType: Scalars['String'];
  funcCall: Scalars['String'];
  input: Scalars['String'];
  network: Scalars['ChainId'];
  output: Scalars['String'];
  ownerAddress: Scalars['ContractAddress'];
  /** The user profile ID */
  profileId: Scalars['ProfileId'];
  surveyId?: InputMaybe<Scalars['SurveyId']>;
};

export type CreateUserMembershipRequest = {
  endAt: Scalars['DateTime'];
  /** The user profile ID */
  profileId: Scalars['ProfileId'];
};

export type CreateUserRefferalRequest = {
  invitedEmail: Scalars['Email'];
  profileId: Scalars['ProfileId'];
  surveyId?: InputMaybe<Scalars['SurveyId']>;
};

export type CreateWalletRequest = {
  credit: Scalars['Int'];
  profileId: Scalars['ProfileId'];
  recipient?: InputMaybe<Scalars['String']>;
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

/** The custom filters types */
export enum CustomFiltersTypes {
  Qstnstaff = 'QSTNSTAFF'
}

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
  highestAverageSurveyCompletionRate?: Maybe<HighestAverageSurveyCompletionRate>;
  highestNumberOfConsecutiveDaysWithSurveyCompletions?: Maybe<Array<Maybe<HighestNumberOfConsecutiveDaysWithSurveyCompletions>>>;
  mostActiveParticipationInSpecificTypesOfSurveys?: Maybe<MostActiveParticipationInSpecificTypesOfSurveys>;
  mostCommonTimeOfDaySurveyCompletitons?: Maybe<MostCommonTimeOfDaySurveyCompletitons>;
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
  nFTMarketplacePurchaseHistory?: Maybe<NftMarketplacePurchaseHistory>;
  rankedTagsCompletedSurveys?: Maybe<Array<Maybe<RankedTagsCompletedSurveys>>>;
  slowestCompleteSurvey?: Maybe<SlowestCompleteSurvey>;
  subscriptionHistory?: Maybe<Array<Maybe<SubscriptionHistory>>>;
  subscriptionLevel?: Maybe<Array<Maybe<SubscriptionLevel>>>;
  surveyCompletionBasedOnQuestionCount?: Maybe<Array<Maybe<SurveyCompletionBasedOnQuestionCount>>>;
  tutorialCompletitions?: Maybe<Array<Maybe<TutorialCompletitions>>>;
  unclaimedRewardStatusAndDuration?: Maybe<UnclaimedRewardStatusAndDuration>;
  userEngagementRateNFTMarketplace?: Maybe<Array<Maybe<UserEngagementRateNftMarketplace>>>;
  userMostCompletedSurveys?: Maybe<Array<Maybe<UserMostCompletedSurveys>>>;
  walletsConnectedPerBlockchain?: Maybe<WalletsConnectedPerBlockchain>;
};

export type DeleteFillingQueueRequest = {
  fillingId: Scalars['ID'];
};

export type DeleteProductRequest = {
  productId: Scalars['ID'];
};

export type DeleteSurveyResultRequest = {
  resultsId: Scalars['ID'];
};

export type DeleteTransactionCreditRequest = {
  transactionId: Scalars['ID'];
};

export type DeleteWalletRequest = {
  walletId: Scalars['ID'];
};

export type EmbedSurveyResult = {
  __typename?: 'EmbedSurveyResult';
  chainId?: Maybe<Scalars['ChainId']>;
  cidHash?: Maybe<Scalars['Cid']>;
  claimId?: Maybe<Scalars['ClaimId']>;
  createdAt: Scalars['DateTime'];
  embedResultsId: Scalars['ID'];
  fingerprint: Scalars['String'];
  mediaClaimed?: Maybe<Scalars['Boolean']>;
  mediaClaimedAt?: Maybe<Scalars['DateTime']>;
  mediaClaimedFrom?: Maybe<Scalars['NearAddress']>;
  result: Scalars['SurveyData'];
  rewardClaimed?: Maybe<Scalars['Boolean']>;
  rewardClaimedAt?: Maybe<Scalars['DateTime']>;
  rewardId?: Maybe<Scalars['ID']>;
  rewardType?: Maybe<Scalars['String']>;
  survey?: Maybe<Survey>;
};

export type EmbedSurveyResultQueryRequest = {
  /** The result creation date */
  createdAt?: InputMaybe<Scalars['DateTime']>;
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** The anon participants ids */
  fingerprints?: InputMaybe<Array<Scalars['String']>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The participants ids */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
  /** The results ids */
  resultsIds?: InputMaybe<Array<Scalars['ID']>>;
  /** The surveys ids */
  surveyIds?: InputMaybe<Array<Scalars['SurveyId']>>;
};

/** Enduser search results */
export type EnduserSearchResult = {
  __typename?: 'EnduserSearchResult';
  items: Array<User>;
  pageInfo: PaginatedResultInfo;
  type: SearchRequestTypes;
};

/** The nft type */
export type Erc721 = {
  __typename?: 'Erc721';
  /** aka "1"  */
  chainId: Scalars['ChainId'];
  /** aka "NearPunks"  */
  collectionName: Scalars['String'];
  /** aka "https://api.punks..."  */
  contentUri: Scalars['String'];
  /** aka genesis.nearpunksv10.near */
  contractAddress: Scalars['ContractAddress'];
  /** aka us NearPunks */
  contractName?: Maybe<Scalars['String']>;
  /** aka "Astalavista Baby. ....  */
  description: Scalars['String'];
  /** aka "ERC1155"  */
  ercType: Scalars['String'];
  /** aka "Terminator Punk"  */
  name: Scalars['String'];
  /** The NFT internal id */
  nftId: Scalars['NftId'];
  /** aka "{ uri:"https://ipfs....", metaType:"image/png" }"  */
  originalContent?: Maybe<NftContent>;
  /** aka { address: owner.nearpunksv10.near, amount:"1" }  */
  owners?: Maybe<Array<Owner>>;
  /** aka RARI */
  symbol: Scalars['String'];
  /** aka "13"  */
  tokenId?: Maybe<Scalars['String']>;
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

export type FillingQueue = {
  __typename?: 'FillingQueue';
  claimId?: Maybe<Scalars['String']>;
  completedAt?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  fillingId: Scalars['ID'];
  fillingStatus: FillingStatus;
  fillingType: FillingType;
  metadata?: Maybe<Scalars['EncryptedValueScalar']>;
  survey?: Maybe<Survey>;
  updatedAt?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type FillingQueueQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  isQueue?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The creators ids */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
  sorting?: InputMaybe<Scalars['String']>;
  /** The filling survey status */
  status?: InputMaybe<FillingStatus>;
  /** The surveys ids */
  surveyIds?: InputMaybe<Array<Scalars['SurveyId']>>;
  /** The filling survey type */
  type?: InputMaybe<FillingType>;
};

export enum FillingStatus {
  Complete = 'COMPLETE',
  Pending = 'PENDING',
  Started = 'STARTED'
}

export enum FillingType {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
  Tutorial = 'TUTORIAL'
}

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

export type Iden3IssuerProfileQueryRequest = {
  /** The email for the profile */
  email?: InputMaybe<Scalars['Email']>;
  /** The profile iden3 did */
  iden3issuer?: InputMaybe<Scalars['Did']>;
};

export type InviteUserRequest = {
  /** The user account type */
  accountType: AccountType;
  /** The user profile image */
  avatar?: InputMaybe<Scalars['String']>;
  /** The user bio */
  bio?: InputMaybe<Scalars['String']>;
  /** The user display name */
  displayName: Scalars['String'];
  /** The user email */
  email: Scalars['Email'];
};

export type IssuerProfileQueryRequest = {
  /** The email for the profile */
  email?: InputMaybe<Scalars['Email']>;
  /** The profile did */
  issuer?: InputMaybe<Scalars['Did']>;
};

export type LeaderboardEntriesRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  leaderboardId: Scalars['Int'];
  limit?: InputMaybe<Scalars['LimitScalar']>;
};

/** leaderboard entries result */
export type LeaderboardEntriesResult = {
  __typename?: 'LeaderboardEntriesResult';
  items?: Maybe<Array<LeaderboardEntry>>;
  pageInfo?: Maybe<PaginatedResultInfo>;
};

/** The leaderboard result info */
export type LeaderboardEntry = {
  __typename?: 'LeaderboardEntry';
  avatar?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  earnings?: Maybe<Scalars['Float']>;
  iden3issuer?: Maybe<Scalars['String']>;
  issuer?: Maybe<Scalars['String']>;
  leaderboardEntryId: Scalars['Int'];
  leaderboardId: Scalars['Int'];
  points?: Maybe<Scalars['Float']>;
  profileId: Scalars['Int'];
  rank?: Maybe<Scalars['Int']>;
  surveysuccess?: Maybe<Scalars['Int']>;
};

export type MarketplaceOrder = {
  __typename?: 'MarketplaceOrder';
  chainId?: Maybe<Scalars['ChainId']>;
  createdAt: Scalars['DateTime'];
  mediaClaimed?: Maybe<Scalars['Boolean']>;
  mediaClaimedAt?: Maybe<Scalars['DateTime']>;
  mediaClaimedFrom?: Maybe<Scalars['NearAddress']>;
  metadata?: Maybe<Scalars['String']>;
  orderAmount: Scalars['Float'];
  orderId: Scalars['ID'];
  orderStatus: Scalars['String'];
  orderType: Scalars['String'];
  paymentType: Scalars['String'];
  productId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};

export type MarketplaceOrderQueryRequest = {
  /** The order id */
  orderId?: InputMaybe<Scalars['ID']>;
  /** The product ids */
  productIds?: InputMaybe<Array<Scalars['Int']>>;
  /** The profile ids */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
  /** The order status */
  status?: InputMaybe<Scalars['String']>;
};

export type MarketplaceOrdersQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  status?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type MarketplaceProduct = {
  __typename?: 'MarketplaceProduct';
  chainId?: Maybe<Scalars['ChainId']>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  duration?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  mediaId?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  ownerId?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  productId: Scalars['ID'];
  productStatus: Scalars['String'];
  productType: Scalars['String'];
  sellerId?: Maybe<Scalars['ProfileId']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  whiteList?: Maybe<Scalars['String']>;
};

export type MarketplaceRequest = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Marketplace search results */
export type MarketplaceSearchResult = {
  __typename?: 'MarketplaceSearchResult';
  items: Array<MarketplaceProduct>;
  pageInfo?: Maybe<PaginatedResultInfo>;
  type: SearchRequestTypes;
};

export type Media = {
  __typename?: 'Media';
  cid?: Maybe<Scalars['Cid']>;
  copiesLimit: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  mediaId: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<User>;
  price: Scalars['Float'];
  type?: Maybe<MediaType>;
  whiteList?: Maybe<Array<Maybe<User>>>;
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

export enum MediaType {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Metadata = {
  __typename?: 'Metadata';
  copies?: Maybe<Scalars['Int']>;
  description: Scalars['String'];
  expiresAt?: Maybe<Scalars['DateTime']>;
  extra?: Maybe<Scalars['String']>;
  issuedAt?: Maybe<Scalars['DateTime']>;
  media: Scalars['String'];
  mediaHash?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  referenceHash?: Maybe<Scalars['String']>;
  startsAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
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

export type Mutation = {
  __typename?: 'Mutation';
  authenticate: AuthenticationResult;
  banUnbanUser: User;
  claimMarketplaceOrderMedia: MarketplaceOrder;
  claimSurveyMedia: SurveyReward;
  claimSurveyReward: SurveyReward;
  createAnonymousUser: AnonymousUser;
  createEmbedSurveyResult: EmbedSurveyResult;
  /** Create a new ERC721 NFT gallery */
  createErc721NftGallery: Scalars['NftGalleryId'];
  createFillingQueue?: Maybe<FillingQueue>;
  createMarketplaceOrder: MarketplaceOrder;
  /** Create a new NFT gallery */
  createNftGallery: Scalars['NftGalleryId'];
  createProduct: MarketplaceProduct;
  createProfile: User;
  createSurvey: Survey;
  createSurveyGating: SurveyGating;
  createSurveyReferral: SurveyReferral;
  createSurveyResult: SurveyResult;
  createSurveyReward: SurveyReward;
  createTransactionCredit: TransactionCredit;
  createTransactionDebit: TransactionCredit;
  createUserBoost: UserBoost;
  createUserContract: UserContract;
  createUserMembership: UserMembership;
  createUserRefferal: UserRefferal;
  createWallet: Wallet;
  deleteFillingQueue?: Maybe<Scalars['Void']>;
  /** Delete an NFT Gallery */
  deleteNftGallery?: Maybe<Scalars['Void']>;
  deleteProduct?: Maybe<Scalars['Void']>;
  deleteSurvey?: Maybe<Scalars['Void']>;
  deleteSurveyResult?: Maybe<Scalars['Void']>;
  deleteTransactionCredit?: Maybe<Scalars['Void']>;
  deleteWallet: Scalars['Boolean'];
  inviteUser: User;
  refresh: AuthenticationResult;
  refundMarketplaceOrder: MarketplaceOrder;
  registryUserPrize: UserPrize;
  scoreSurveyResult: SurveyResult;
  syncMediaProducts?: Maybe<Scalars['Void']>;
  syncNftGallery?: Maybe<Scalars['Void']>;
  syncPageviewSources?: Maybe<Scalars['Void']>;
  updateAnonymousUser: AnonymousUser;
  updateEmbedSurveyResult: EmbedSurveyResult;
  updateFillingQueue: FillingQueue;
  updateMarketplaceOrder: MarketplaceOrder;
  /** Update the name of an NFT gallery */
  updateNftGalleryInfo?: Maybe<Scalars['Void']>;
  /** Add and/or remove NFTs to a gallery */
  updateNftGalleryItems?: Maybe<Scalars['Void']>;
  /** Update the order of NFTs in a gallery */
  updateNftGalleryOrder?: Maybe<Scalars['Void']>;
  updateProduct: MarketplaceProduct;
  updateProfile: User;
  updateSurvey: Survey;
  updateSurveyGating: SurveyGating;
  updateSurveyReferral: SurveyReferral;
  updateSurveyResult: SurveyResult;
  updateSurveyReward: SurveyReward;
  updateTransactionCredit: TransactionCredit;
  updateUserBoost: UserBoost;
  updateUserMembership: UserMembership;
  updateUserRefferal: UserRefferal;
  updateWallet: Wallet;
  verifyUser: User;
};


export type MutationAuthenticateArgs = {
  request: SignedAuthChallenge;
};


export type MutationBanUnbanUserArgs = {
  request: BanUnbanUserRequest;
};


export type MutationClaimMarketplaceOrderMediaArgs = {
  request: ClaimMarketplaceOrderMediaRequest;
};


export type MutationClaimSurveyMediaArgs = {
  request: ClaimSurveyMediaRequest;
};


export type MutationClaimSurveyRewardArgs = {
  request: ClaimSurveyRewardRequest;
};


export type MutationCreateAnonymousUserArgs = {
  request: CreateAnonymousUserRequest;
};


export type MutationCreateEmbedSurveyResultArgs = {
  request: CreateEmbedSurveyResultRequest;
};


export type MutationCreateErc721NftGalleryArgs = {
  request: NftGalleryCreateRequest;
};


export type MutationCreateFillingQueueArgs = {
  request: CreateFillingQueueRequest;
};


export type MutationCreateMarketplaceOrderArgs = {
  request: CreateMarketplaceOrderRequest;
};


export type MutationCreateNftGalleryArgs = {
  request: NftGalleryCreateRequest;
};


export type MutationCreateProductArgs = {
  request: CreateProductRequest;
};


export type MutationCreateProfileArgs = {
  request: CreateProfileRequest;
};


export type MutationCreateSurveyArgs = {
  request: SurveyCreateRequest;
};


export type MutationCreateSurveyGatingArgs = {
  request: CreateSurveyGatingRequest;
};


export type MutationCreateSurveyReferralArgs = {
  request: CreateSurveyReferralRequest;
};


export type MutationCreateSurveyResultArgs = {
  request: CreateSurveyResultRequest;
};


export type MutationCreateSurveyRewardArgs = {
  request: CreateSurveyRewardRequest;
};


export type MutationCreateTransactionCreditArgs = {
  request: TransactionCreditRequest;
};


export type MutationCreateTransactionDebitArgs = {
  request: TransactionDebitRequest;
};


export type MutationCreateUserBoostArgs = {
  request: CreateUserBoostRequest;
};


export type MutationCreateUserContractArgs = {
  request: CreateUserContractRequest;
};


export type MutationCreateUserMembershipArgs = {
  request: CreateUserMembershipRequest;
};


export type MutationCreateUserRefferalArgs = {
  request: CreateUserRefferalRequest;
};


export type MutationCreateWalletArgs = {
  request: CreateWalletRequest;
};


export type MutationDeleteFillingQueueArgs = {
  request: DeleteFillingQueueRequest;
};


export type MutationDeleteNftGalleryArgs = {
  request: NftGalleryDeleteRequest;
};


export type MutationDeleteProductArgs = {
  request: DeleteProductRequest;
};


export type MutationDeleteSurveyArgs = {
  request: SurveyDeleteRequest;
};


export type MutationDeleteSurveyResultArgs = {
  request: DeleteSurveyResultRequest;
};


export type MutationDeleteTransactionCreditArgs = {
  request: DeleteTransactionCreditRequest;
};


export type MutationDeleteWalletArgs = {
  request: DeleteWalletRequest;
};


export type MutationInviteUserArgs = {
  request: InviteUserRequest;
};


export type MutationRefreshArgs = {
  request: RefreshRequest;
};


export type MutationRefundMarketplaceOrderArgs = {
  request: RefundMarketplaceOrderRequest;
};


export type MutationRegistryUserPrizeArgs = {
  request: RegistryUserPrizeRequest;
};


export type MutationScoreSurveyResultArgs = {
  request: ScoreSurveyResultRequest;
};


export type MutationSyncMediaProductsArgs = {
  request: SyncMediaProductsRequest;
};


export type MutationSyncNftGalleryArgs = {
  request: SyncNftGalleryRequest;
};


export type MutationSyncPageviewSourcesArgs = {
  request: SyncPageviewSourcesRequest;
};


export type MutationUpdateAnonymousUserArgs = {
  request: UpdateAnonymousUserRequest;
};


export type MutationUpdateEmbedSurveyResultArgs = {
  request: UpdateEmbedSurveyResultRequest;
};


export type MutationUpdateFillingQueueArgs = {
  request: UpdateFillingQueueRequest;
};


export type MutationUpdateMarketplaceOrderArgs = {
  request: UpdateMarketplaceOrderRequest;
};


export type MutationUpdateNftGalleryInfoArgs = {
  request: NftGalleryUpdateInfoRequest;
};


export type MutationUpdateNftGalleryItemsArgs = {
  request: NftGalleryUpdateItemsRequest;
};


export type MutationUpdateNftGalleryOrderArgs = {
  request: NftGalleryUpdateItemOrderRequest;
};


export type MutationUpdateProductArgs = {
  request: UpdateProductRequest;
};


export type MutationUpdateProfileArgs = {
  request: UpdateProfileRequest;
};


export type MutationUpdateSurveyArgs = {
  request: SurveyUpdateInfoRequest;
};


export type MutationUpdateSurveyGatingArgs = {
  request: UpdateSurveyGatingRequest;
};


export type MutationUpdateSurveyReferralArgs = {
  request: UpdateSurveyReferralRequest;
};


export type MutationUpdateSurveyResultArgs = {
  request: UpdateSurveyResultRequest;
};


export type MutationUpdateSurveyRewardArgs = {
  request: UpdateSurveyRewardRequest;
};


export type MutationUpdateTransactionCreditArgs = {
  request: UpdateTransactionCreditRequest;
};


export type MutationUpdateUserBoostArgs = {
  request: UpdateUserBoostRequest;
};


export type MutationUpdateUserMembershipArgs = {
  request: UpdateUserMembershipRequest;
};


export type MutationUpdateUserRefferalArgs = {
  request: UpdateUserRefferalRequest;
};


export type MutationUpdateWalletArgs = {
  request: UpdateWalletRequest;
};


export type MutationVerifyUserArgs = {
  request: VerifyUserRequest;
};

export type Nft = Erc721 | Nep171;

/** The NFT content uri */
export type NftContent = {
  __typename?: 'NFTContent';
  /** The animated url */
  animatedUrl?: Maybe<Scalars['String']>;
  /** The token uri  nft */
  contentUri?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  /** The meta type content */
  metaType?: Maybe<Scalars['String']>;
  /** The token uri  nft */
  uri?: Maybe<Scalars['String']>;
};

export type NftMarketplacePurchaseHistory = {
  __typename?: 'NFTMarketplacePurchaseHistory';
  purchaseAmountTotals?: Maybe<Array<Maybe<PurchaseAmountTotals>>>;
  purchaseInfoHistory?: Maybe<Array<Maybe<PurchaseInfoHistory>>>;
};

export type Nep171 = {
  __typename?: 'Nep171';
  chainId: Scalars['ChainId'];
  creatorId?: Maybe<Scalars['ProfileId']>;
  duration?: Maybe<Scalars['Int']>;
  evmContractAddress?: Maybe<Scalars['ContractAddress']>;
  mediaClaimed?: Maybe<Scalars['Boolean']>;
  mediaClaimedAt?: Maybe<Scalars['DateTime']>;
  mediaClaimedFrom?: Maybe<Scalars['NearAddress']>;
  metadata: Metadata;
  /** The NFT internal id */
  nftId: Scalars['NftId'];
  orderId?: Maybe<Scalars['ID']>;
  orderStatus?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['NearAddress']>;
  price?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Int']>;
  productStatus?: Maybe<Scalars['String']>;
  productType?: Maybe<Scalars['String']>;
  resultsId?: Maybe<Scalars['ID']>;
  royalty?: Maybe<Scalars['Float']>;
  sellerId?: Maybe<Scalars['ProfileId']>;
  seriesId: Scalars['Int'];
  surveyId?: Maybe<Scalars['SurveyId']>;
};

export type NftGalleriesQueryRequest = {
  /** The result creation date */
  createdAt?: InputMaybe<Scalars['DateTime']>;
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The user media ids */
  mediaIds?: InputMaybe<Array<Scalars['ID']>>;
  /** The surveys ids */
  nftGalleryIds?: InputMaybe<Array<Scalars['NftGalleryId']>>;
  /** The creators ids */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
};

/** The NFT gallery input */
export type NftGalleriesRequest = {
  /** The profile id */
  profileId?: InputMaybe<Scalars['ProfileId']>;
};

/** The NFT gallery */
export type NftGallery = {
  __typename?: 'NftGallery';
  chainId?: Maybe<Scalars['ChainId']>;
  /** The creation date */
  createdAt: Scalars['DateTime'];
  /** The NFTs in the gallery */
  items?: Maybe<Array<Nft>>;
  /** The NFT gallery name */
  name: Scalars['String'];
  /** The NFT gallery id */
  nftGalleryId: Scalars['NftGalleryId'];
  /** The owning profile id */
  profileId: Scalars['ProfileId'];
  /** The last update date */
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** The input for creating a new NFT gallery */
export type NftGalleryCreateRequest = {
  /** The chain ID of the NFT */
  chainId?: InputMaybe<Scalars['ChainId']>;
  /** The NFTs in the gallery */
  items: Array<NftInput>;
  /** The name of the NFT gallery */
  name: Scalars['NftGalleryName'];
  /** The owner profile id */
  profileId: Scalars['ProfileId'];
};

/** The input for deleting gallery */
export type NftGalleryDeleteRequest = {
  /** The NFT gallery id */
  galleryId: Scalars['NftGalleryId'];
  /** The profile id of the gallery owner */
  profileId: Scalars['ProfileId'];
};

/** The input for updating NFT gallery name */
export type NftGalleryUpdateInfoRequest = {
  /** The NFT gallery id */
  galleryId: Scalars['NftGalleryId'];
  /** The name of the NFT gallery */
  name: Scalars['NftGalleryName'];
  /** The profile id of the gallery owner */
  profileId: Scalars['ProfileId'];
};

/** The input for reordering gallery items */
export type NftGalleryUpdateItemOrderRequest = {
  /** The NFT gallery id */
  galleryId: Scalars['NftGalleryId'];
  /** The profile id of the gallery owner */
  profileId: Scalars['ProfileId'];
  /** The order of the NFTs in the gallery */
  updates: Array<NftUpdateItemOrder>;
};

/** The input for adding/removing gallery items */
export type NftGalleryUpdateItemsRequest = {
  /** The NFT gallery id */
  galleryId: Scalars['NftGalleryId'];
  /** The profile id of the gallery owner */
  profileId: Scalars['ProfileId'];
  /** The contents of the NFT gallery */
  toAdd?: InputMaybe<Array<NftInput>>;
  /** The contents of the NFT gallery */
  toRemove?: InputMaybe<Array<NftInput>>;
};

/** The NFT profile image */
export type NftImage = {
  __typename?: 'NftImage';
  /** The token image nft */
  chainId: Scalars['ChainId'];
  /** The contract address */
  contractAddress: Scalars['ContractAddress'];
  /** registered date in the marketplace */
  createdAt: Scalars['DateTime'];
  nftImageId: Scalars['ID'];
  /** The token id of the nft */
  tokenId: Scalars['String'];
  /** The token image nft */
  uri: Scalars['Url'];
  /** If the NFT is verified */
  verified: Scalars['Boolean'];
};

/** The NFT input for gallery */
export type NftInput = {
  /** The chain ID of the NFT */
  chainId: Scalars['ChainId'];
  /** The contents URI of the NFT */
  contentUri?: InputMaybe<Scalars['String']>;
  /** The contract address of the NFT */
  contractAddress: Scalars['ContractAddress'];
  /** The description of the NFT */
  description?: InputMaybe<Scalars['String']>;
  /** The erc type the NFT */
  ercType?: InputMaybe<Scalars['String']>;
  /** The name of the NFT */
  name?: InputMaybe<Scalars['String']>;
  /** The original contents of the NFT */
  originalContent?: InputMaybe<Scalars['String']>;
  /** The symbol of the NFT */
  symbol?: InputMaybe<Scalars['String']>;
  /** The token ID of the NFT */
  tokenId?: InputMaybe<Scalars['String']>;
};

export type NftOwnershipChallenge = {
  /** Chain Id */
  chainId: Scalars['ChainId'];
  /** ContractAddress for nft */
  contractAddress: Scalars['ContractAddress'];
  /** Token id for NFT */
  tokenId: Scalars['String'];
};

export type NftOwnershipChallengeRequest = {
  /** The wallet address which owns the NFT */
  nearAddress: Scalars['NearAddress'];
  nfts: Array<NftOwnershipChallenge>;
};

/** NFT ownership challenge result */
export type NftOwnershipChallengeResult = {
  __typename?: 'NftOwnershipChallengeResult';
  /** Id of the nft ownership challenge */
  id: Scalars['NftOwnershipId'];
  text: Scalars['String'];
  /** Timeout of the validation */
  timeout: Scalars['TimestampScalar'];
};

/** NFT search results */
export type NftSearchResult = {
  __typename?: 'NftSearchResult';
  items: Array<Nft>;
  pageInfo?: Maybe<PaginatedResultInfo>;
  type: SearchRequestTypes;
};

/** The input for updating the order of a NFT gallery item */
export type NftUpdateItemOrder = {
  /** The chain ID of the NFT */
  chainId: Scalars['ChainId'];
  /** The contract address of the NFT */
  contractAddress: Scalars['ContractAddress'];
  /** The new order of the NFT in the gallery */
  newOrder: Scalars['Int'];
  /** The token ID of the NFT */
  tokenId: Scalars['String'];
};

export type NftsRequest = {
  /** Chain Ids */
  chainIds?: InputMaybe<Array<Scalars['ChainId']>>;
  /** Filter by contract address */
  contractAddress?: InputMaybe<Scalars['ContractAddress']>;
  /** The creator id */
  creatorIds?: InputMaybe<Array<Scalars['ProfileId']>>;
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The user media ids */
  mediaIds?: InputMaybe<Array<Scalars['ID']>>;
  /** Filter by owner address */
  ownerAddress?: InputMaybe<Scalars['NearAddress']>;
  /** The profile id */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
};

/** The paginated nft result */
export type NftsResult = {
  __typename?: 'NftsResult';
  items: Array<Nft>;
  pageInfo: PaginatedResultInfo;
};

export enum OnBoardingStatus {
  Complete = 'COMPLETE',
  Pending = 'PENDING',
  Tutorial = 'TUTORIAL',
  Wallet = 'WALLET'
}

export type OpenEndedSurveys = {
  __typename?: 'OpenEndedSurveys';
  openEndedSurveys?: Maybe<Scalars['Int']>;
  profileId: Scalars['ProfileId'];
};

/** The nft type */
export type Owner = {
  __typename?: 'Owner';
  /** aka mintify.near  */
  address: Scalars['NearAddress'];
  /** number of tokens owner */
  amount: Scalars['Float'];
  /** The owner profile id */
  profileId?: Maybe<Scalars['ProfileId']>;
};

export type Pageview = {
  __typename?: 'Pageview';
  browser: Scalars['String'];
  browserVersion: Scalars['Int'];
  city: Scalars['String'];
  currentUrl: Scalars['String'];
  deviceId: Scalars['String'];
  distinctId: Scalars['String'];
  event: Scalars['String'];
  id: Scalars['ID'];
  initialReferrer: Scalars['String'];
  initialReferringDomain: Scalars['String'];
  insertId: Scalars['String'];
  libVersion: Scalars['String'];
  mpApiEndpoint: Scalars['String'];
  mpApiTimestampMs: Scalars['Int'];
  mpCountryCode: Scalars['String'];
  mpLib: Scalars['String'];
  mpProcessingTimeMs: Scalars['Int'];
  os: Scalars['String'];
  page: Scalars['String'];
  region: Scalars['String'];
  screenHeight: Scalars['Int'];
  screenWidth: Scalars['Int'];
  time: Scalars['Int'];
  userId: Scalars['String'];
};

/** The paginated user result */
export type PaginatedEmbedSurveyResult = {
  __typename?: 'PaginatedEmbedSurveyResult';
  items: Array<Survey>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated user filling queue result */
export type PaginatedEmbedSurveyResultResult = {
  __typename?: 'PaginatedEmbedSurveyResultResult';
  items: Array<EmbedSurveyResult>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated user filling queue result */
export type PaginatedFillingQueueResult = {
  __typename?: 'PaginatedFillingQueueResult';
  items: Array<FillingQueue>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated marketplace orders result */
export type PaginatedMarketplaceOrdersResult = {
  __typename?: 'PaginatedMarketplaceOrdersResult';
  items: Array<MarketplaceOrder>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated nft gallery result */
export type PaginatedNftGalleryResult = {
  __typename?: 'PaginatedNftGalleryResult';
  items: Array<NftGallery>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated marketplace products result */
export type PaginatedProductsResult = {
  __typename?: 'PaginatedProductsResult';
  items: Array<MarketplaceProduct>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated result info */
export type PaginatedResultInfo = {
  __typename?: 'PaginatedResultInfo';
  /** Cursor to query next results */
  next?: Maybe<Scalars['Cursor']>;
  /** Cursor to query the actual results */
  prev?: Maybe<Scalars['Cursor']>;
  /**
   * The total number of entities the pagination iterates over. If its null then its not been worked out due to it being an expensive query and not really needed for the client. All main counters are in counter tables to allow them to be faster fetching.
   * @deprecated Total counts is expensive and in dynamic nature of queries it slows stuff down. Most the time you do not need this you can just use the `next` property to see if there is more data. This will be removed soon. The only use case anyone is using this right now is on notification query, this should be changed to query the notifications and cache the last notification id. You can then keep checking if the id changes you know more notifications.
   */
  totalCount?: Maybe<Scalars['Int']>;
};

/** The paginated user transactions result */
export type PaginatedSurveyReferralResult = {
  __typename?: 'PaginatedSurveyReferralResult';
  items: Array<SurveyReferral>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated user result */
export type PaginatedSurveyResult = {
  __typename?: 'PaginatedSurveyResult';
  items: Array<Survey>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated user filling queue result */
export type PaginatedSurveyResultResult = {
  __typename?: 'PaginatedSurveyResultResult';
  items: Array<SurveyResult>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated user contracts result */
export type PaginatedUserContractResult = {
  __typename?: 'PaginatedUserContractResult';
  items: Array<UserContract>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated user transactions result */
export type PaginatedUserRefferalResult = {
  __typename?: 'PaginatedUserRefferalResult';
  items: Array<UserRefferal>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated user result */
export type PaginatedUserResult = {
  __typename?: 'PaginatedUserResult';
  items: Array<User>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated user transactions result */
export type PaginatedUserTransactionResult = {
  __typename?: 'PaginatedUserTransactionResult';
  items: Array<TransactionCredit>;
  pageInfo: PaginatedResultInfo;
};

export enum PaymentMethods {
  Americanexpress = 'AMERICANEXPRESS',
  Bitcoin = 'BITCOIN',
  Mastercard = 'MASTERCARD',
  Near = 'NEAR',
  Paypal = 'PAYPAL',
  Stripe = 'STRIPE',
  Usdt = 'USDT',
  Visa = 'VISA'
}

export type ProductQueryRequest = {
  /** The product id */
  productId: Scalars['ID'];
};

export type ProductsQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  sorting?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type ProfileQueryRequest = {
  /** The profile is boosted? */
  boosted?: InputMaybe<Scalars['Boolean']>;
  /** The business ids */
  businessIds?: InputMaybe<Array<Scalars['ProfileId']>>;
  /** The profile category (business) */
  category?: InputMaybe<Array<Scalars['BusinessCategory']>>;
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** The emails for the profile */
  emails?: InputMaybe<Array<Scalars['Email']>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The enduser total ansr earned */
  numberOfAnsrEarned?: InputMaybe<Scalars['Float']>;
  /** The enduser total rewards earned */
  numberOfRewardsEarned?: InputMaybe<Scalars['Float']>;
  /** The enduser total successful invites */
  numberOfSuccessInvites?: InputMaybe<Scalars['Float']>;
  /** The published surveys number */
  numberOfSurveys?: InputMaybe<Scalars['Int']>;
  /** The enduser completed surveys number */
  numberOfSurveysCompleted?: InputMaybe<Scalars['Int']>;
  /** The near addresses */
  ownedBy?: InputMaybe<Array<Scalars['NearAddress']>>;
  /** The profile ids */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
  /** Sorting asc / desc */
  sorting?: InputMaybe<Scalars['String']>;
  /** The profile status */
  status?: InputMaybe<Array<AccountStatus>>;
  /** The profile type */
  type?: InputMaybe<AccountType>;
  /** The profile type */
  verified?: InputMaybe<Scalars['String']>;
  /** The profile visibility/membership */
  visibility?: InputMaybe<Array<Visibility>>;
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

export type PurchaseHistoryPerUserRequest = {
  profileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
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
  allMediaBoughtAndSoldAnalytics?: Maybe<Array<Maybe<MediaBoughtAndSold>>>;
  anonymousUser?: Maybe<AnonymousUser>;
  challenge: AuthChallengeResult;
  checkTransaction?: Maybe<TransactionCredit>;
  dataBusiness?: Maybe<DataBusiness>;
  dataMarketplace?: Maybe<DataMarketplace>;
  dataUser?: Maybe<DataUser>;
  embedSurveyResults: PaginatedEmbedSurveyResultResult;
  fillingQueue: PaginatedFillingQueueResult;
  goodsOwnedPerUserAnalytics?: Maybe<Array<Maybe<GoodsOwnedMedia>>>;
  /** Leaderboards for surveys */
  leaderboardEntries: LeaderboardEntriesResult;
  marketplaceOrder?: Maybe<MarketplaceOrder>;
  /** Get all marketplace orders */
  marketplaceOrders: PaginatedMarketplaceOrdersResult;
  mediaSoldByCompanyOrUserAnalytics?: Maybe<Array<Maybe<MediaSold>>>;
  methodsPromotions?: Maybe<Array<Maybe<SurveyMethod>>>;
  /** Get all NFT galleries for a profile */
  nftGalleries: PaginatedNftGalleryResult;
  nftOwnershipChallenge: NftOwnershipChallengeResult;
  nftUserGalleries: PaginatedNftGalleryResult;
  nfts: NftsResult;
  pageviews: Array<Pageview>;
  ping: Scalars['String'];
  product?: Maybe<MarketplaceProduct>;
  /** Get all products and medias available in the marketplace */
  products: PaginatedProductsResult;
  purchaseHistoryPerUserAnalytics?: Maybe<Array<Maybe<PurchaseHistory>>>;
  saleHistoryPerBusinessAnalytics?: Maybe<SaleHistory>;
  search: SearchResult;
  subscriptionHistory?: Maybe<Array<Maybe<UserSubscription>>>;
  subscriptionLevel?: Maybe<UserSubscription>;
  survey?: Maybe<Survey>;
  /** Statistics and analytics for surveys */
  surveyAnalytics: ChartDataLabels;
  surveyGating: SurveyGating;
  surveyReferrals: PaginatedSurveyReferralResult;
  surveyResults: PaginatedSurveyResultResult;
  surveyReward?: Maybe<SurveyReward>;
  surveyRewardErc721?: Maybe<SurveyReward>;
  surveys: PaginatedSurveyResult;
  topBusiness: ChartDataLabels;
  user?: Maybe<User>;
  userContract?: Maybe<UserContract>;
  userContracts: PaginatedUserContractResult;
  userNfts: NftsResult;
  userRefferals: PaginatedUserRefferalResult;
  userTransactions: PaginatedUserTransactionResult;
  userWallet?: Maybe<Wallet>;
  userbyIssuer?: Maybe<User>;
  userbyWalletIssuer?: Maybe<User>;
  users: PaginatedUserResult;
  usersAdmin: PaginatedUserResult;
  verify: Scalars['Boolean'];
};


export type QueryAnonymousUserArgs = {
  request: AnonymousUserQueryRequest;
};


export type QueryChallengeArgs = {
  request: ChallengeRequest;
};


export type QueryCheckTransactionArgs = {
  request: TransactionHashRequest;
};


export type QueryDataMarketplaceArgs = {
  request?: InputMaybe<MarketplaceRequest>;
};


export type QueryDataUserArgs = {
  request?: InputMaybe<CategoriesRequest>;
};


export type QueryEmbedSurveyResultsArgs = {
  request: EmbedSurveyResultQueryRequest;
};


export type QueryFillingQueueArgs = {
  request: FillingQueueQueryRequest;
};


export type QueryLeaderboardEntriesArgs = {
  request: LeaderboardEntriesRequest;
};


export type QueryMarketplaceOrderArgs = {
  request: MarketplaceOrderQueryRequest;
};


export type QueryMarketplaceOrdersArgs = {
  request: MarketplaceOrdersQueryRequest;
};


export type QueryMediaSoldByCompanyOrUserAnalyticsArgs = {
  request: MediaBoughtAndSoldRequest;
};


export type QueryNftGalleriesArgs = {
  request: NftGalleriesQueryRequest;
};


export type QueryNftOwnershipChallengeArgs = {
  request: NftOwnershipChallengeRequest;
};


export type QueryNftUserGalleriesArgs = {
  request: NftGalleriesQueryRequest;
};


export type QueryNftsArgs = {
  request: NftsRequest;
};


export type QueryProductArgs = {
  request: ProductQueryRequest;
};


export type QueryProductsArgs = {
  request: ProductsQueryRequest;
};


export type QueryPurchaseHistoryPerUserAnalyticsArgs = {
  request: PurchaseHistoryPerUserRequest;
};


export type QuerySaleHistoryPerBusinessAnalyticsArgs = {
  request: SaleHistoryPerBusinessRequest;
};


export type QuerySearchArgs = {
  request: SearchQueryRequest;
};


export type QuerySubscriptionHistoryArgs = {
  request?: InputMaybe<SubscriptionHistoryRequest>;
};


export type QuerySubscriptionLevelArgs = {
  request?: InputMaybe<SubscriptionLevelRequest>;
};


export type QuerySurveyArgs = {
  request: SingleSurveyQueryRequest;
};


export type QuerySurveyAnalyticsArgs = {
  request: SurveyAnalyticsRequest;
};


export type QuerySurveyGatingArgs = {
  request: SurveyGatingQueryRequest;
};


export type QuerySurveyReferralsArgs = {
  request: SurveyReferralQueryRequest;
};


export type QuerySurveyResultsArgs = {
  request: SurveyResultQueryRequest;
};


export type QuerySurveyRewardArgs = {
  request: SurveyRewardQueryRequest;
};


export type QuerySurveyRewardErc721Args = {
  request: SurveyRewardQueryRequest;
};


export type QuerySurveysArgs = {
  request: SurveyQueryRequest;
};


export type QueryTopBusinessArgs = {
  request: TopBusinessRequest;
};


export type QueryUserArgs = {
  request: SingleProfileQueryRequest;
};


export type QueryUserContractArgs = {
  request: UserContractQueryRequest;
};


export type QueryUserContractsArgs = {
  request: UserContractsQueryRequest;
};


export type QueryUserNftsArgs = {
  request: NftsRequest;
};


export type QueryUserRefferalsArgs = {
  request: UserRefferalQueryRequest;
};


export type QueryUserTransactionsArgs = {
  request: UserTransactionQueryRequest;
};


export type QueryUserWalletArgs = {
  request: UserWalletQueryRequest;
};


export type QueryUserbyIssuerArgs = {
  request: IssuerProfileQueryRequest;
};


export type QueryUserbyWalletIssuerArgs = {
  request: Iden3IssuerProfileQueryRequest;
};


export type QueryUsersArgs = {
  request: ProfileQueryRequest;
};


export type QueryUsersAdminArgs = {
  request: ProfileQueryRequest;
};


export type QueryVerifyArgs = {
  request: VerifyRequest;
};

export type Question = {
  __typename?: 'Question';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  surveyId: Scalars['SurveyId'];
};

export type RadiogroupElement = {
  __typename?: 'RadiogroupElement';
  choices?: Maybe<Array<SurveyElementItemValueType>>;
  correctAnswer?: Maybe<Scalars['String']>;
  isRequired: Scalars['Boolean'];
  name: Scalars['String'];
  points?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type: SurveyElementType;
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

export type RankingElement = {
  __typename?: 'RankingElement';
  choices?: Maybe<Array<SurveyElementItemValueType>>;
  correctAnswer?: Maybe<Scalars['String']>;
  isRequired: Scalars['Boolean'];
  name: Scalars['String'];
  points?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type: SurveyElementType;
};

export type Rating = {
  __typename?: 'Rating';
  item_id?: Maybe<Scalars['Int']>;
  profileId: Scalars['ProfileId'];
  rating?: Maybe<Scalars['Int']>;
};

export type RatingElement = {
  __typename?: 'RatingElement';
  correctAnswer?: Maybe<Scalars['String']>;
  isRequired: Scalars['Boolean'];
  name: Scalars['String'];
  points?: Maybe<Scalars['Int']>;
  rateMax?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type: SurveyElementType;
};

/** The refresh request */
export type RefreshRequest = {
  /** The refresh token */
  refreshToken: Scalars['Jwt'];
};

export type RefundMarketplaceOrderRequest = {
  orderId: Scalars['ID'];
};

export type RegistryUserPrizeRequest = {
  profileId: Scalars['ProfileId'];
  resultsId: Scalars['ID'];
  rewardId: Scalars['ID'];
  surveyId: Scalars['SurveyId'];
};

export type Reward = {
  __typename?: 'Reward';
  createdAt: Scalars['DateTime'];
  mediaId?: Maybe<Scalars['ID']>;
  profileId: Scalars['ProfileId'];
  resultId?: Maybe<Scalars['ID']>;
  rewardId: Scalars['ID'];
  rewardType: Scalars['String'];
  surveyId?: Maybe<Scalars['SurveyId']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
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
  issuedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  orderAmount?: Maybe<Scalars['Float']>;
  orderStatus?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Int']>;
  sellerId?: Maybe<Scalars['Int']>;
};

export type ScoreSurveyResultRequest = {
  credibilityScore?: InputMaybe<Scalars['CredibilityScore']>;
  resultsId: Scalars['ID'];
  score?: InputMaybe<Scalars['Int']>;
};

export type SearchQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The search term */
  query: Scalars['Search'];
  type: SearchRequestTypes;
};

/** Search request types */
export enum SearchRequestTypes {
  Businesses = 'BUSINESSES',
  Endusers = 'ENDUSERS',
  Marketplace = 'MARKETPLACE',
  Nfts = 'NFTS',
  Surveys = 'SURVEYS',
  Tutorials = 'TUTORIALS'
}

export type SearchResult = BusinessSearchResult | EnduserSearchResult | MarketplaceSearchResult | NftSearchResult | SurveySearchResult | TutorialSearchResult;

/** The signed auth challenge */
export type SignedAuthChallenge = {
  /** The email you signed the signature with */
  email: Scalars['Email'];
  /** The signature */
  signature: Scalars['Signature'];
};

export type SingleProfileQueryRequest = {
  /** The profile did */
  did?: InputMaybe<Scalars['Did']>;
  /** The email for the profile */
  email?: InputMaybe<Scalars['Email']>;
  /** The profile id */
  profileId?: InputMaybe<Scalars['ProfileId']>;
};

export type SingleSurveyQueryRequest = {
  /** The survey creator */
  profileId?: InputMaybe<Scalars['ProfileId']>;
  /** The survey id */
  surveyId: Scalars['SurveyId'];
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

export type Subscription = {
  __typename?: 'Subscription';
  nftDataUpdated?: Maybe<Array<Maybe<Nep171>>>;
};

export type SubscriptionHistory = {
  __typename?: 'SubscriptionHistory';
  began?: Maybe<Scalars['DateTime']>;
  ended?: Maybe<Scalars['DateTime']>;
  subscription?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['ProfileId']>;
};

export type SubscriptionHistoryRequest = {
  profileId: Scalars['ProfileId'];
};

export type SubscriptionLevel = {
  __typename?: 'SubscriptionLevel';
  subscription?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['ProfileId']>;
};

export type SubscriptionLevelRequest = {
  profileId: Scalars['ProfileId'];
};

export type Survey = {
  __typename?: 'Survey';
  campaignType: SurveyCampaignType;
  cidHash?: Maybe<Scalars['Cid']>;
  claimId?: Maybe<Scalars['ClaimId']>;
  completeText?: Maybe<Scalars['String']>;
  completedHtml?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  fillingStatus?: Maybe<Scalars['String']>;
  firstPageIsStarted?: Maybe<Scalars['Boolean']>;
  funded?: Maybe<Scalars['Boolean']>;
  logo?: Maybe<Scalars['String']>;
  mediaClaimed?: Maybe<Scalars['Boolean']>;
  mediaClaimedAt?: Maybe<Scalars['DateTime']>;
  mediaClaimedFrom?: Maybe<Scalars['NearAddress']>;
  pageNextText?: Maybe<Scalars['String']>;
  pages?: Maybe<Array<SurveyPage>>;
  privateKey?: Maybe<Scalars['String']>;
  publicKey?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  results?: Maybe<Array<Maybe<SurveyResult>>>;
  resultsId?: Maybe<Scalars['ID']>;
  rewardClaimed?: Maybe<Scalars['Boolean']>;
  rewardClaimedAt?: Maybe<Scalars['DateTime']>;
  rewardId?: Maybe<Scalars['ID']>;
  rewardType?: Maybe<Scalars['String']>;
  rewards?: Maybe<Array<Maybe<SurveyReward>>>;
  showPrevButton?: Maybe<Scalars['Boolean']>;
  showPreviewBeforeComplete?: Maybe<Scalars['String']>;
  showQuestionNumbers?: Maybe<Scalars['String']>;
  startSurveyText?: Maybe<Scalars['String']>;
  surveyId: Scalars['SurveyId'];
  surveyStatus: SurveyStatus;
  surveyType: SurveyType;
  tags?: Maybe<Array<Maybe<Scalars['Tag']>>>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
  whiteList?: Maybe<Array<Maybe<Scalars['Email']>>>;
};

export type SurveyAnalyticsRequest = {
  /** The business profileIds */
  businessIds?: InputMaybe<Array<Scalars['ProfileId']>>;
};

export enum SurveyCampaignType {
  Qualitative = 'QUALITATIVE',
  Quantitative = 'QUANTITATIVE'
}

export type SurveyCompletionBasedOnQuestionCount = {
  __typename?: 'SurveyCompletionBasedOnQuestionCount';
  completionRatio?: Maybe<Scalars['Float']>;
  questionCount?: Maybe<Scalars['Int']>;
};

/** The input for creating a new Survey */
export type SurveyCreateRequest = {
  /** The survey campaign type */
  campaignType?: InputMaybe<SurveyCampaignType>;
  /** The description of the Survey */
  description?: InputMaybe<Scalars['String']>;
  /** The Survey logo */
  logo?: InputMaybe<Scalars['String']>;
  /** The Pages in the survey */
  pages: Array<SurveyPageInput>;
  /** The creator profile id */
  profileId: Scalars['ProfileId'];
  /** The survey status */
  status: SurveyStatus;
  /** The title of the Survey */
  title?: InputMaybe<Scalars['String']>;
  /** The survey type */
  type: SurveyType;
};

/** The input for deleting survey */
export type SurveyDeleteRequest = {
  /** The profile id of the creator */
  profileId?: InputMaybe<Scalars['ProfileId']>;
  /** The Survey id */
  surveyId: Scalars['SurveyId'];
};

export type SurveyDrafterInfo = {
  __typename?: 'SurveyDrafterInfo';
  hours?: Maybe<Scalars['Float']>;
  surveyId?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ProfileId']>;
};

export type SurveyElement = BooleanElement | CommentElement | RadiogroupElement | RankingElement | RatingElement | TextElement;

export type SurveyElementInput = {
  choices?: InputMaybe<Array<TextValueInput>>;
  correctAnswer?: InputMaybe<Scalars['String']>;
  isRequired: Scalars['Boolean'];
  name: Scalars['String'];
  points?: InputMaybe<Scalars['Int']>;
  rateMax?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  type: SurveyElementType;
};

export type SurveyElementItemValueType = TextValueType | ValueType;

export enum SurveyElementType {
  Boolean = 'BOOLEAN',
  Checkbox = 'CHECKBOX',
  Comment = 'COMMENT',
  Dropdown = 'DROPDOWN',
  File = 'FILE',
  Html = 'HTML',
  Image = 'IMAGE',
  Imagepicker = 'IMAGEPICKER',
  Input = 'INPUT',
  Matrixdropdown = 'MATRIXDROPDOWN',
  Panel = 'PANEL',
  Paneldynamic = 'PANELDYNAMIC',
  Radiogroup = 'RADIOGROUP',
  Ranking = 'RANKING',
  Rating = 'RATING',
  Signaturepad = 'SIGNATUREPAD',
  Tagbox = 'TAGBOX',
  Text = 'TEXT'
}

export type SurveyGating = {
  __typename?: 'SurveyGating';
  createdAt: Scalars['DateTime'];
  gateId: Scalars['ID'];
  profileId?: Maybe<Scalars['Int']>;
  requirements: Scalars['AccessGating'];
  surveyId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SurveyGatingQueryRequest = {
  /** The profile id of the creator */
  profileId?: InputMaybe<Scalars['ProfileId']>;
  /** The Survey id */
  surveyId: Scalars['SurveyId'];
};

export type SurveyMethod = {
  __typename?: 'SurveyMethod';
  effectiveness: Scalars['Float'];
  name: Scalars['String'];
  totalCount?: Maybe<Scalars['Int']>;
};

export type SurveyPage = {
  __typename?: 'SurveyPage';
  elements?: Maybe<Array<SurveyElement>>;
  name: Scalars['String'];
  pages?: Maybe<Array<SurveyPage>>;
  title?: Maybe<Scalars['String']>;
};

export type SurveyPageInput = {
  elements?: InputMaybe<Array<SurveyElementInput>>;
  name: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
};

export type SurveyQueryRequest = {
  /** The creators ids */
  businessIds?: InputMaybe<Array<Scalars['ProfileId']>>;
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** The survey ids to resume */
  fillingQueueIds?: InputMaybe<Array<Scalars['SurveyId']>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The endusers ids */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
  /** The survey status */
  status?: InputMaybe<Array<SurveyStatus>>;
  /** The survey title */
  title?: InputMaybe<Scalars['String']>;
  /** The survey type */
  type?: InputMaybe<Array<SurveyType>>;
};

export type SurveyReferral = {
  __typename?: 'SurveyReferral';
  /** @joined existing user profile status */
  accountStatus?: Maybe<AccountStatus>;
  /** @joined existing user avatar */
  avatar?: Maybe<Scalars['String']>;
  completedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  /** @joined existing user diplay name */
  displayName?: Maybe<Scalars['String']>;
  /** @joined existing user email */
  email?: Maybe<Scalars['Email']>;
  invitedAt?: Maybe<Scalars['DateTime']>;
  invitedEmail: Scalars['Email'];
  invitedId?: Maybe<Scalars['ProfileId']>;
  invitedStatus: Scalars['String'];
  profileId: Scalars['ProfileId'];
  referralId: Scalars['ID'];
  referralStatus: Scalars['String'];
  surveyId?: Maybe<Scalars['SurveyId']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SurveyReferralQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** invited email addresses */
  emailAddresses?: InputMaybe<Array<Scalars['Email']>>;
  inviteStatus?: InputMaybe<Scalars['String']>;
  /** The invited ids */
  invitedIds?: InputMaybe<Array<Scalars['ProfileId']>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The sender ids */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
  referralStatus?: InputMaybe<Scalars['String']>;
  /** The surveys ids */
  surveyIds?: InputMaybe<Array<Scalars['SurveyId']>>;
};

export type SurveyResult = {
  __typename?: 'SurveyResult';
  chainId?: Maybe<Scalars['ChainId']>;
  cidHash?: Maybe<Scalars['Cid']>;
  claimId?: Maybe<Scalars['ClaimId']>;
  createdAt: Scalars['DateTime'];
  credibilityScore?: Maybe<Scalars['CredibilityScore']>;
  mediaClaimed?: Maybe<Scalars['Boolean']>;
  mediaClaimedAt?: Maybe<Scalars['DateTime']>;
  mediaClaimedFrom?: Maybe<Scalars['NearAddress']>;
  result: Scalars['SurveyData'];
  resultsId: Scalars['ID'];
  rewardClaimed?: Maybe<Scalars['Boolean']>;
  rewardClaimedAt?: Maybe<Scalars['DateTime']>;
  rewardId?: Maybe<Scalars['ID']>;
  rewardType?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  survey?: Maybe<Survey>;
  user?: Maybe<User>;
};

export type SurveyResultQueryRequest = {
  /** The result creation date */
  createdAt?: InputMaybe<Scalars['DateTime']>;
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The creators ids */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
  /** The results ids */
  resultsIds?: InputMaybe<Array<Scalars['ID']>>;
  /** The surveys ids */
  surveyIds?: InputMaybe<Array<Scalars['SurveyId']>>;
};

export type SurveyReward = {
  __typename?: 'SurveyReward';
  chainId?: Maybe<Scalars['ChainId']>;
  createdAt: Scalars['DateTime'];
  mediaId?: Maybe<Scalars['ID']>;
  mediaPrize?: Maybe<Nft>;
  profileId: Scalars['ProfileId'];
  resultsId?: Maybe<Scalars['ID']>;
  rewardId: Scalars['ID'];
  rewardType: Scalars['String'];
  surveyId: Scalars['SurveyId'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SurveyRewardQueryRequest = {
  /** The survey id */
  surveyId: Scalars['SurveyId'];
};

/** Survey search results */
export type SurveySearchResult = {
  __typename?: 'SurveySearchResult';
  items: Array<Survey>;
  pageInfo: PaginatedResultInfo;
  type: SearchRequestTypes;
};

export enum SurveyStatus {
  Drafted = 'DRAFTED',
  Published = 'PUBLISHED'
}

export type SurveyTakerInfo = {
  __typename?: 'SurveyTakerInfo';
  hours?: Maybe<Scalars['Float']>;
  surveyId?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ProfileId']>;
};

export enum SurveyType {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
  Tutorial = 'TUTORIAL'
}

/** The input for updating Survey Information */
export type SurveyUpdateInfoRequest = {
  /** The survey campaign type */
  campaignType?: InputMaybe<SurveyCampaignType>;
  /** The description of the Survey */
  description?: InputMaybe<Scalars['String']>;
  /** The survey is paid */
  funded?: InputMaybe<Scalars['Boolean']>;
  /** The Survey logo */
  logo?: InputMaybe<Scalars['String']>;
  /** The Pages in the survey */
  pages?: InputMaybe<Array<SurveyPageInput>>;
  /** The profile id of the creator */
  profileId?: InputMaybe<Scalars['ProfileId']>;
  /** The survey status */
  status?: InputMaybe<SurveyStatus>;
  /** The Survey id */
  surveyId: Scalars['SurveyId'];
  /** The Survey tag/category */
  tags?: InputMaybe<Array<InputMaybe<Scalars['Tag']>>>;
  /** The title of the Survey */
  title?: InputMaybe<Scalars['String']>;
  /** The survey type */
  type?: InputMaybe<SurveyType>;
  /** The survey whitelist */
  whiteList?: InputMaybe<Array<InputMaybe<Scalars['Email']>>>;
};

export type SyncMediaProductsRequest = {
  contractAddress?: InputMaybe<Scalars['ContractAddress']>;
};

export type SyncNftGalleryRequest = {
  contractAddress?: InputMaybe<Scalars['ContractAddress']>;
  profileId: Scalars['ProfileId'];
};

export type SyncPageviewSourcesRequest = {
  time: Scalars['Int'];
};

export type TextElement = {
  __typename?: 'TextElement';
  correctAnswer?: Maybe<Scalars['String']>;
  isRequired: Scalars['Boolean'];
  name: Scalars['String'];
  points?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type: SurveyElementType;
};

export type TextValueInput = {
  text: Scalars['String'];
  value: Scalars['String'];
};

export type TextValueType = {
  __typename?: 'TextValueType';
  text: Scalars['String'];
  value: Scalars['String'];
};

export type TopBusinessRequest = {
  /** The business profileIds */
  businessIds?: InputMaybe<Array<Scalars['ProfileId']>>;
};

export type TransactionCredit = {
  __typename?: 'TransactionCredit';
  amount: Scalars['Float'];
  createdAt: Scalars['String'];
  orderId?: Maybe<Scalars['ID']>;
  receiver_id?: Maybe<Scalars['ProfileId']>;
  survey?: Maybe<Survey>;
  surveyResult?: Maybe<SurveyResult>;
  transactionHash?: Maybe<Scalars['TxHash']>;
  transactionId: Scalars['ID'];
  transactionSource?: Maybe<Scalars['String']>;
  transactionStatus: TransactionStatus;
  transactionType: TransactionType;
  user?: Maybe<User>;
};

export type TransactionCreditRequest = {
  amount: Scalars['Int'];
  hash?: InputMaybe<Scalars['TxHash']>;
  orderId?: InputMaybe<Scalars['ID']>;
  profileId: Scalars['ProfileId'];
  resultsId?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
  status: TransactionStatus;
  surveyId?: InputMaybe<Scalars['SurveyId']>;
  type: TransactionType;
};

export type TransactionDebitRequest = {
  amount: Scalars['Int'];
  hash?: InputMaybe<Scalars['TxHash']>;
  orderId?: InputMaybe<Scalars['ID']>;
  profileId: Scalars['ProfileId'];
  resultsId?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
  status: TransactionStatus;
  surveyId?: InputMaybe<Scalars['SurveyId']>;
  type: TransactionType;
};

/** The check transaction hash request */
export type TransactionHashRequest = {
  /** The transactionHash */
  transactionHash?: InputMaybe<Scalars['TxHash']>;
};

export enum TransactionStatus {
  Complete = 'COMPLETE',
  Pending = 'PENDING'
}

export enum TransactionType {
  Credit = 'CREDIT',
  Debit = 'DEBIT'
}

export type TutorialCompletitions = {
  __typename?: 'TutorialCompletitions';
  fillingStatus?: Maybe<Scalars['Boolean']>;
  user?: Maybe<Scalars['ProfileId']>;
};

/** Tutorial search results */
export type TutorialSearchResult = {
  __typename?: 'TutorialSearchResult';
  items: Array<Survey>;
  pageInfo: PaginatedResultInfo;
  type: SearchRequestTypes;
};

export type UnclaimedRewardStatusAndDuration = {
  __typename?: 'UnclaimedRewardStatusAndDuration';
  near?: Maybe<Array<Maybe<StatusAndDuration>>>;
  polkadot?: Maybe<Array<Maybe<StatusAndDuration>>>;
  polygon?: Maybe<Array<Maybe<StatusAndDuration>>>;
  total?: Maybe<Array<Maybe<StatusAndDuration>>>;
};

export type UpdateAnonymousUserRequest = {
  fingerprint: Scalars['String'];
  profileId: Scalars['Int'];
};

export type UpdateEmbedSurveyResultRequest = {
  chainId?: InputMaybe<Scalars['ChainId']>;
  cidHash?: InputMaybe<Scalars['Cid']>;
  embedResultsId: Scalars['ID'];
  mediaClaimed?: InputMaybe<Scalars['Boolean']>;
  mediaClaimedAt?: InputMaybe<Scalars['DateTime']>;
  mediaClaimedFrom?: InputMaybe<Scalars['NearAddress']>;
  result?: InputMaybe<Scalars['SurveyData']>;
  rewardClaimed?: InputMaybe<Scalars['Boolean']>;
  rewardClaimedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UpdateFillingQueueRequest = {
  claimId?: InputMaybe<Scalars['String']>;
  completedAt?: InputMaybe<Scalars['DateTime']>;
  fillingId: Scalars['ID'];
  metadata?: InputMaybe<Scalars['String']>;
  status: Scalars['String'];
  type: Scalars['String'];
};

export type UpdateMarketplaceOrderRequest = {
  metadata?: InputMaybe<Scalars['String']>;
  orderId: Scalars['ID'];
  orderStatus: Scalars['String'];
};

export type UpdateProductRequest = {
  chainId?: InputMaybe<Scalars['ChainId']>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  mediaId?: InputMaybe<Scalars['ID']>;
  metadata?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  ownerId?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  productId: Scalars['ID'];
  productStatus?: InputMaybe<Scalars['String']>;
  productType?: InputMaybe<Scalars['String']>;
  sellerId?: InputMaybe<Scalars['ProfileId']>;
  whiteList?: InputMaybe<Scalars['String']>;
};

export type UpdateProfileRequest = {
  /** The user account type */
  accountStatus?: InputMaybe<AccountStatus>;
  /** The user account type */
  accountType?: InputMaybe<AccountType>;
  /** The user age */
  age?: InputMaybe<Scalars['Int']>;
  /** The user profile image */
  avatar?: InputMaybe<Scalars['String']>;
  /** The user bio */
  bio?: InputMaybe<Scalars['String']>;
  /** The business user name */
  businessName?: InputMaybe<Scalars['String']>;
  /** The business category */
  category?: InputMaybe<Scalars['BusinessCategory']>;
  /** The user display name */
  displayName?: InputMaybe<Scalars['String']>;
  /** The user email */
  email?: InputMaybe<Scalars['Email']>;
  /** The user first name */
  firstName?: InputMaybe<Scalars['String']>;
  /** The user gender */
  gender?: InputMaybe<Scalars['String']>;
  /** The user Iden3 DID */
  iden3issuer?: InputMaybe<Scalars['Did']>;
  /** The enduser interests */
  interests?: InputMaybe<Array<Scalars['BusinessCategory']>>;
  /** The user DID */
  issuer?: InputMaybe<Scalars['Did']>;
  kycAttemptId?: InputMaybe<Scalars['String']>;
  /** User last login */
  lastLoginAt?: InputMaybe<Scalars['UnixTimestamp']>;
  /** The user last name */
  lastName?: InputMaybe<Scalars['String']>;
  /** The user location */
  location?: InputMaybe<Scalars['String']>;
  /** The user id */
  profileId?: InputMaybe<Scalars['ProfileId']>;
  /** The user verification status */
  verified?: InputMaybe<Scalars['Boolean']>;
  /** The user membership type */
  visibility?: InputMaybe<Visibility>;
};

export type UpdateSurveyGatingRequest = {
  gateId: Scalars['ID'];
  /** The profile id of the creator */
  profileId?: InputMaybe<Scalars['ProfileId']>;
  requirements: Scalars['AccessGating'];
  /** The Survey id */
  surveyId: Scalars['SurveyId'];
};

export type UpdateSurveyReferralRequest = {
  completedAt?: InputMaybe<Scalars['DateTime']>;
  invitedAt?: InputMaybe<Scalars['DateTime']>;
  invitedEmail?: InputMaybe<Scalars['Email']>;
  invitedId?: InputMaybe<Scalars['ProfileId']>;
  invitedStatus?: InputMaybe<Scalars['String']>;
  referralId: Scalars['ID'];
  referralStatus?: InputMaybe<Scalars['String']>;
};

export type UpdateSurveyResultRequest = {
  chainId?: InputMaybe<Scalars['ChainId']>;
  cidHash?: InputMaybe<Scalars['Cid']>;
  mediaClaimed?: InputMaybe<Scalars['Boolean']>;
  mediaClaimedAt?: InputMaybe<Scalars['DateTime']>;
  mediaClaimedFrom?: InputMaybe<Scalars['NearAddress']>;
  result?: InputMaybe<Scalars['SurveyData']>;
  resultsId: Scalars['ID'];
  rewardClaimed?: InputMaybe<Scalars['Boolean']>;
  rewardClaimedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UpdateSurveyRewardRequest = {
  chainId?: InputMaybe<Scalars['ChainId']>;
  mediaId?: InputMaybe<Scalars['ID']>;
  resultsId?: InputMaybe<Scalars['ID']>;
  rewardId?: InputMaybe<Scalars['ID']>;
};

export type UpdateTransactionCreditRequest = {
  amount: Scalars['Int'];
  status: TransactionStatus;
  transactionId: Scalars['ID'];
};

export type UpdateUserBoostRequest = {
  boostId: Scalars['ID'];
  boostStatus: Scalars['String'];
  endAt: Scalars['DateTime'];
  /** The user profile ID */
  profileId: Scalars['ProfileId'];
};

export type UpdateUserMembershipRequest = {
  endAt: Scalars['DateTime'];
  membershipId: Scalars['ID'];
  membershipStatus: Scalars['String'];
  /** The user profile ID */
  profileId: Scalars['ProfileId'];
};

export type UpdateUserRefferalRequest = {
  completedAt?: InputMaybe<Scalars['DateTime']>;
  invitedAt?: InputMaybe<Scalars['DateTime']>;
  invitedEmail?: InputMaybe<Scalars['Email']>;
  invitedId?: InputMaybe<Scalars['ProfileId']>;
  invitedStatus?: InputMaybe<Scalars['String']>;
  refferalId: Scalars['ID'];
  refferalStatus?: InputMaybe<Scalars['String']>;
};

export type UpdateWalletRequest = {
  auroraAddress?: InputMaybe<Scalars['EvmAddress']>;
  avaxAddress?: InputMaybe<Scalars['EvmAddress']>;
  baseAddress?: InputMaybe<Scalars['EvmAddress']>;
  bitfinityAddress?: InputMaybe<Scalars['EvmAddress']>;
  bobaAddress?: InputMaybe<Scalars['EvmAddress']>;
  bscAddress?: InputMaybe<Scalars['EvmAddress']>;
  credit?: InputMaybe<Scalars['Int']>;
  cronosAddress?: InputMaybe<Scalars['EvmAddress']>;
  ethereumAddress?: InputMaybe<Scalars['EvmAddress']>;
  filecoinAddress?: InputMaybe<Scalars['EvmAddress']>;
  hederaAddress?: InputMaybe<Scalars['EvmAddress']>;
  icpAddress?: InputMaybe<Scalars['String']>;
  moonbeamAddress?: InputMaybe<Scalars['EvmAddress']>;
  nearAddress?: InputMaybe<Scalars['NearAddress']>;
  opbnbAddress?: InputMaybe<Scalars['EvmAddress']>;
  polkadotAddress?: InputMaybe<Scalars['String']>;
  polygonAddress?: InputMaybe<Scalars['EvmAddress']>;
  profileId: Scalars['ProfileId'];
  recipient?: InputMaybe<Scalars['NearAddress']>;
  solanaAddress?: InputMaybe<Scalars['String']>;
  stellarAddress?: InputMaybe<Scalars['String']>;
  stripeAccountId?: InputMaybe<Scalars['StripeAccountId']>;
  tonAddress?: InputMaybe<Scalars['String']>;
  walletId: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  accountStatus: AccountStatus;
  accountType: AccountType;
  age?: Maybe<Scalars['Int']>;
  apiKey?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['Url']>;
  bio?: Maybe<Scalars['String']>;
  boosted?: Maybe<Scalars['Boolean']>;
  businessName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['BusinessCategory']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  displayName?: Maybe<Scalars['String']>;
  elegibleSurveys?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Email']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  iden3issuer?: Maybe<Scalars['String']>;
  interests?: Maybe<Array<Maybe<Scalars['BusinessCategory']>>>;
  inviter?: Maybe<Scalars['ProfileId']>;
  issuer?: Maybe<Scalars['String']>;
  kycAttemptId?: Maybe<Scalars['String']>;
  lastLoginAt?: Maybe<Scalars['DateTime']>;
  lastName?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  medias?: Maybe<Array<Maybe<Media>>>;
  ownedMedias?: Maybe<Array<Maybe<Media>>>;
  paymentMethod?: Maybe<PaymentMethods>;
  pinCode?: Maybe<Scalars['Int']>;
  profileId: Scalars['ProfileId'];
  publishedSurveys?: Maybe<Scalars['Int']>;
  referrals?: Maybe<Array<Maybe<Scalars['ProfileId']>>>;
  surveys?: Maybe<Array<Maybe<Survey>>>;
  surveysTaken?: Maybe<Array<Maybe<Survey>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  verified?: Maybe<Scalars['Boolean']>;
  visibility: Visibility;
  wallet?: Maybe<Wallet>;
};

export type UserAverageSessionTime = {
  __typename?: 'UserAverageSessionTime';
  averageTime?: Maybe<Scalars['Float']>;
  user?: Maybe<Scalars['ProfileId']>;
};

export type UserBanUnban = {
  __typename?: 'UserBanUnban';
  banunbanId: Scalars['ID'];
  banunbanStatus: Scalars['String'];
  createdAt: Scalars['DateTime'];
  profileId: Scalars['ProfileId'];
};

export type UserBoost = {
  __typename?: 'UserBoost';
  boostId: Scalars['ID'];
  boostStatus: Scalars['String'];
  createdAt: Scalars['DateTime'];
  endAt: Scalars['DateTime'];
  profileId: Scalars['ProfileId'];
  startAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCompletionFrequency = {
  __typename?: 'UserCompletionFrequency';
  frequencyAverage?: Maybe<Scalars['Float']>;
  profileId: Scalars['ProfileId'];
};

export type UserCompletionTimeOfDay = {
  __typename?: 'UserCompletionTimeOfDay';
  completionTimeOfDay?: Maybe<Array<Maybe<CompletionTimeOfDay>>>;
  user?: Maybe<Scalars['ProfileId']>;
};

export type UserContract = {
  __typename?: 'UserContract';
  contractAddress?: Maybe<Scalars['ContractAddress']>;
  contractId: Scalars['Int'];
  contractName?: Maybe<Scalars['String']>;
  contractType?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  funcCall?: Maybe<Scalars['String']>;
  input?: Maybe<Scalars['String']>;
  network?: Maybe<Scalars['String']>;
  output?: Maybe<Scalars['String']>;
  ownerAddress?: Maybe<Scalars['String']>;
  profileId: Scalars['Int'];
  surveyId?: Maybe<Scalars['Int']>;
};

export type UserContractQueryRequest = {
  network?: InputMaybe<Scalars['String']>;
  profileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
  surveyIds?: InputMaybe<Array<Scalars['SurveyId']>>;
};

export type UserContractsQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
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

export type UserMembership = {
  __typename?: 'UserMembership';
  createdAt: Scalars['DateTime'];
  endAt: Scalars['DateTime'];
  membershipId: Scalars['ID'];
  membershipStatus: Scalars['String'];
  profileId: Scalars['ProfileId'];
  startAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMostCompletedSurveys = {
  __typename?: 'UserMostCompletedSurveys';
  numberOfSurveys?: Maybe<Scalars['Int']>;
  profileId: Scalars['ProfileId'];
};

export type UserPrize = {
  __typename?: 'UserPrize';
  chainId?: Maybe<Scalars['ChainId']>;
  createdAt: Scalars['String'];
  prizeId: Scalars['ID'];
  profileId: Scalars['ProfileId'];
  resultId: Scalars['ID'];
  rewardId: Scalars['ID'];
  surveyId: Scalars['SurveyId'];
};

export type UserRefferal = {
  __typename?: 'UserRefferal';
  /** @joined existing user profile status */
  accountStatus?: Maybe<AccountStatus>;
  /** @joined existing user avatar */
  avatar?: Maybe<Scalars['String']>;
  completedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  /** @joined existing user diplay name */
  displayName?: Maybe<Scalars['String']>;
  /** @joined existing user email */
  email?: Maybe<Scalars['Email']>;
  invitedAt?: Maybe<Scalars['DateTime']>;
  invitedEmail: Scalars['Email'];
  invitedId?: Maybe<Scalars['ProfileId']>;
  invitedStatus: Scalars['String'];
  profileId: Scalars['ProfileId'];
  refferalId: Scalars['ID'];
  refferalStatus: Scalars['String'];
  surveyId?: Maybe<Scalars['SurveyId']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserRefferalQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** invited email addresses */
  emailAddresses?: InputMaybe<Array<Scalars['Email']>>;
  inviteStatus?: InputMaybe<Scalars['String']>;
  /** The invited ids */
  invitedIds?: InputMaybe<Array<Scalars['ProfileId']>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The sender ids */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
  referralStatus?: InputMaybe<Scalars['String']>;
  /** The surveys ids */
  surveyIds?: InputMaybe<Array<Scalars['SurveyId']>>;
};

export type UserSubscription = {
  __typename?: 'UserSubscription';
  endDate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  startDate?: Maybe<Scalars['String']>;
  subscriptionLevel: Scalars['String'];
};

export type UserTransactionQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** The user DID */
  did?: InputMaybe<Scalars['Did']>;
  hash?: InputMaybe<Scalars['TxHash']>;
  isBalance?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The sender ids */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
  /** The transaction credit status */
  status?: InputMaybe<TransactionStatus>;
  /** The surveys ids */
  surveyIds?: InputMaybe<Array<Scalars['SurveyId']>>;
  /** The transaction credit type */
  type?: InputMaybe<TransactionType>;
};

export type UserVerification = {
  __typename?: 'UserVerification';
  createdAt: Scalars['DateTime'];
  profileId: Scalars['ProfileId'];
  verificationId: Scalars['ID'];
  verificationStatus: Scalars['String'];
};

export type UserWalletQueryRequest = {
  did?: InputMaybe<Scalars['Did']>;
  profileId?: InputMaybe<Scalars['ProfileId']>;
};

export type UserWalletsConnected = {
  __typename?: 'UserWalletsConnected';
  user?: Maybe<Scalars['ProfileId']>;
  walletCount?: Maybe<Scalars['Int']>;
};

export type ValueType = {
  __typename?: 'ValueType';
  value: Scalars['String'];
};

/** The access request */
export type VerifyRequest = {
  /** The access token */
  accessToken: Scalars['Jwt'];
};

export type VerifyUserRequest = {
  /** The user profile ID */
  profileId: Scalars['ProfileId'];
};

export enum Visibility {
  Basic = 'BASIC',
  Premium = 'PREMIUM'
}

export type Wallet = {
  __typename?: 'Wallet';
  auroraAddress?: Maybe<Scalars['EvmAddress']>;
  avaxAddress?: Maybe<Scalars['EvmAddress']>;
  baseAddress?: Maybe<Scalars['EvmAddress']>;
  bitfinityAddress?: Maybe<Scalars['EvmAddress']>;
  bobaAddress?: Maybe<Scalars['EvmAddress']>;
  bscAddress?: Maybe<Scalars['EvmAddress']>;
  createdAt: Scalars['DateTime'];
  credit: Scalars['Float'];
  cronosAddress?: Maybe<Scalars['EvmAddress']>;
  ethereumAddress?: Maybe<Scalars['EvmAddress']>;
  filecoinAddress?: Maybe<Scalars['EvmAddress']>;
  hederaAddress?: Maybe<Scalars['EvmAddress']>;
  icpAddress?: Maybe<Scalars['String']>;
  moonbeamAddress?: Maybe<Scalars['EvmAddress']>;
  nearAddress?: Maybe<Scalars['NearAddress']>;
  opbnbAddress?: Maybe<Scalars['EvmAddress']>;
  polkadotAddress?: Maybe<Scalars['String']>;
  polygonAddress?: Maybe<Scalars['EvmAddress']>;
  recipient?: Maybe<Scalars['Email']>;
  solanaAddress?: Maybe<Scalars['String']>;
  stellarAddress?: Maybe<Scalars['String']>;
  stripeAccountId?: Maybe<Scalars['StripeAccountId']>;
  tonAddress?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
  walletId: Scalars['ID'];
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

export type AnonymousUserFieldsFragment = { __typename?: 'AnonymousUser', anonId: string, profileId?: number | null, fingerprint: string, createdAt: any, updatedAt?: any | null };

export type ChartDataLabelsFieldsFragment = { __typename?: 'ChartDataLabels', labels?: Array<string> | null, data?: Array<number> | null, totalSurveys?: number | null, totalCompletions?: number | null, totalBusiness?: number | null, avgCompletionTime?: number | null, totalPageviews?: number | null, rankingCompletions?: Array<{ __typename?: 'RankTopCompletions', surveyId?: string | null, completions?: number | null } | null> | null };

export type DataUserFieldsFragment = { __typename?: 'DataUser', userMostCompletedSurveys?: Array<{ __typename?: 'UserMostCompletedSurveys', profileId: any, numberOfSurveys?: number | null } | null> | null, mostEarnedCashRewards?: Array<{ __typename?: 'MostEarnedCashRewards', profileId: any, mostCashViaStripe?: number | null } | null> | null, mostEarnedCryptocurrencyRewards?: { __typename?: 'MostEarnedCryptocurrencyRewards', nearRewards?: Array<{ __typename?: 'CryptoReward', profileId: any, amountCrypto?: number | null, amountUsd?: number | null } | null> | null, polkadotRewards?: Array<{ __typename?: 'CryptoReward', profileId: any, amountCrypto?: number | null, amountUsd?: number | null } | null> | null, polygonRewards?: Array<{ __typename?: 'CryptoReward', profileId: any, amountCrypto?: number | null, amountUsd?: number | null } | null> | null, totalCryptoInCash?: Array<{ __typename?: 'AllCryptoRewardInUSD', profileId: any, amountUsd?: number | null } | null> | null } | null, mostDollarsSpentNFTMarketplace?: Array<{ __typename?: 'MostDollarsSpentNFTMarketplace', profileId: any, realDollarsSpent?: number | null } | null> | null, mostCryptocurrencySpentNFTMarketplace?: { __typename?: 'MostCryptocurrencySpentNFTMarketplace', mostSpentNear?: Array<{ __typename?: 'CryptoReward', profileId: any, amountCrypto?: number | null, amountUsd?: number | null } | null> | null, mostSpentPolkadot?: Array<{ __typename?: 'CryptoReward', profileId: any, amountCrypto?: number | null, amountUsd?: number | null } | null> | null, mostSpentPolygon?: Array<{ __typename?: 'CryptoReward', profileId: any, amountCrypto?: number | null, amountUsd?: number | null } | null> | null } | null, mostInvitedUsers?: Array<{ __typename?: 'MostInvitedUsers', profileId: any, usersInvited?: number | null } | null> | null, mostCompletedSurveysInSpecificCategory?: Array<{ __typename?: 'MostCompletedSurveysInSpecificCategory', profileId: any, categoryName?: string | null, surveysCompleted?: number | null } | null> | null, highestAverageSurveyCompletionRate?: { __typename?: 'HighestAverageSurveyCompletionRate', highestAverageSurveyCompletion?: Array<{ __typename?: 'AverageSurveyCompletionRatesByUser', profileId?: any | null, percentageCompletionAverage?: number | null } | null> | null } | null, mostConsistentSurveyCompletionFrequency?: { __typename?: 'MostConsistentSurveyCompletionFrequency', daily?: Array<{ __typename?: 'UserCompletionFrequency', profileId: any, frequencyAverage?: number | null } | null> | null, weekly?: Array<{ __typename?: 'UserCompletionFrequency', profileId: any, frequencyAverage?: number | null } | null> | null, monthly?: Array<{ __typename?: 'UserCompletionFrequency', profileId: any, frequencyAverage?: number | null } | null> | null, yearly?: Array<{ __typename?: 'UserCompletionFrequency', profileId: any, frequencyAverage?: number | null } | null> | null } | null, highestNumberOfConsecutiveDaysWithSurveyCompletions?: Array<{ __typename?: 'HighestNumberOfConsecutiveDaysWithSurveyCompletions', profileId: any, longestDailyStreak?: number | null } | null> | null, mostActiveParticipationInSpecificTypesOfSurveys?: { __typename?: 'MostActiveParticipationInSpecificTypesOfSurveys', multipleChoiceSurveysRankings?: Array<{ __typename?: 'MultipleChoiceSurveys', profileId: any, multipleChoiceSurveys?: number | null } | null> | null, openEndedSurveysRankings?: Array<{ __typename?: 'OpenEndedSurveys', profileId: any, openEndedSurveys?: number | null } | null> | null } | null, mostReferralsConvertedIntoActiveSurveyParticipants?: Array<{ __typename?: 'MostReferralsConvertedIntoActiveSurveyParticipants', profileId: any, referralsSent?: number | null, referredParticipantCount?: number | null } | null> | null, mostEngagementWithCommunityFeatures?: Array<{ __typename?: 'MostEngagementWithCommunityFeatures', profileId: any, totalPosts?: number | null } | null> | null, mostCreativeAndUniqueSurveyResponses?: { __typename?: 'MostCreativeAndUniqueSurveyResponses', surveyResponseRating?: Array<{ __typename?: 'Rating', profileId: any, item_id?: number | null, rating?: number | null } | null> | null, mediaRating?: Array<{ __typename?: 'Rating', profileId: any, item_id?: number | null, rating?: number | null } | null> | null } | null };

export type EmbedSurveyResultFieldsFragment = { __typename?: 'EmbedSurveyResult', embedResultsId: string, result: any, fingerprint: string, claimId?: any | null, rewardId?: string | null, rewardType?: string | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, chainId?: any | null, createdAt: any, survey?: { __typename?: 'Survey', surveyId: any, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, funded?: boolean | null } | null };

export type FillingQueueFieldsFragment = { __typename?: 'FillingQueue', fillingId: string, fillingType: FillingType, fillingStatus: FillingStatus, claimId?: string | null, metadata?: any | null, createdAt: string, updatedAt?: string | null, completedAt?: string | null, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, campaignType: SurveyCampaignType, fillingStatus?: string | null, rewardId?: string | null, rewardType?: string | null, cidHash?: any | null, tags?: Array<any | null> | null, claimId?: any | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, resultsId?: string | null, whiteList?: Array<any | null> | null, funded?: boolean | null, showQuestionNumbers?: string | null, pageNextText?: string | null, completeText?: string | null, showPrevButton?: boolean | null, firstPageIsStarted?: boolean | null, startSurveyText?: string | null, completedHtml?: string | null, showPreviewBeforeComplete?: string | null, privateKey?: string | null, publicKey?: string | null, createdAt: any, updatedAt?: any | null, publishedAt?: any | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null, elements?: Array<{ __typename?: 'BooleanElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'CommentElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'RadiogroupElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RankingElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RatingElement', name: string, title?: string | null, type: SurveyElementType, rateMax?: number | null, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'TextElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null }> | null }> | null, results?: Array<{ __typename?: 'SurveyResult', resultsId: string, result: any, claimId?: any | null, rewardId?: string | null, rewardType?: string | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, chainId?: any | null, score?: number | null, credibilityScore?: any | null, createdAt: any, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, resultsId?: string | null, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, funded?: boolean | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null }> | null } | null } | null> | null, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null } | null };

export type LeaderboardEntryFieldsFragment = { __typename?: 'LeaderboardEntry', leaderboardEntryId: number, leaderboardId: number, profileId: number, avatar?: string | null, issuer?: string | null, iden3issuer?: string | null, points?: number | null, rank?: number | null, surveysuccess?: number | null, earnings?: number | null, createdAt?: any | null };

export type MarketplaceOrderFieldsFragment = { __typename?: 'MarketplaceOrder', orderId: string, productId: number, orderStatus: string, orderType: string, paymentType: string, orderAmount: number, metadata?: string | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, chainId?: any | null, createdAt: any, updatedAt?: any | null, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null };

type NftFields_Erc721_Fragment = { __typename?: 'Erc721', nftId: any, contractName?: string | null, contractAddress: any, symbol: string, tokenId?: string | null, name: string, description: string, contentUri: string, chainId: any, collectionName: string, ercType: string, owners?: Array<{ __typename?: 'Owner', amount: number, address: any, profileId?: any | null }> | null, originalContent?: { __typename?: 'NFTContent', uri?: string | null, metaType?: string | null, animatedUrl?: string | null } | null };

type NftFields_Nep171_Fragment = { __typename?: 'Nep171', nftId: any, seriesId: number, price?: number | null, royalty?: number | null, creatorId?: any | null, sellerId?: any | null, ownerId?: any | null, productId?: number | null, productType?: string | null, productStatus?: string | null, orderId?: string | null, orderStatus?: string | null, surveyId?: any | null, resultsId?: string | null, evmContractAddress?: any | null, chainId: any, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, metadata: { __typename?: 'Metadata', title: string, description: string, media: string, mediaHash?: string | null, copies?: number | null, issuedAt?: any | null, expiresAt?: any | null, startsAt?: any | null, updatedAt?: any | null, extra?: string | null, reference?: string | null, referenceHash?: string | null } };

export type NftFieldsFragment = NftFields_Erc721_Fragment | NftFields_Nep171_Fragment;

export type NftGalleryFieldsFragment = { __typename?: 'NftGallery', nftGalleryId: any, name: string, profileId: any, chainId?: any | null, createdAt: any, updatedAt?: any | null, items?: Array<{ __typename?: 'Erc721', nftId: any, contractName?: string | null, contractAddress: any, symbol: string, tokenId?: string | null, name: string, description: string, contentUri: string, chainId: any, collectionName: string, ercType: string, owners?: Array<{ __typename?: 'Owner', amount: number, address: any, profileId?: any | null }> | null, originalContent?: { __typename?: 'NFTContent', uri?: string | null, metaType?: string | null, animatedUrl?: string | null } | null } | { __typename?: 'Nep171', nftId: any, seriesId: number, price?: number | null, royalty?: number | null, creatorId?: any | null, sellerId?: any | null, ownerId?: any | null, productId?: number | null, productType?: string | null, productStatus?: string | null, orderId?: string | null, orderStatus?: string | null, surveyId?: any | null, resultsId?: string | null, evmContractAddress?: any | null, chainId: any, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, metadata: { __typename?: 'Metadata', title: string, description: string, media: string, mediaHash?: string | null, copies?: number | null, issuedAt?: any | null, expiresAt?: any | null, startsAt?: any | null, updatedAt?: any | null, extra?: string | null, reference?: string | null, referenceHash?: string | null } }> | null };

export type NftImageFieldsFragment = { __typename?: 'NftImage', nftImageId: string, contractAddress: any, tokenId: string, uri: any, chainId: any, verified: boolean, createdAt: any };

export type ProductFieldsFragment = { __typename?: 'MarketplaceProduct', productId: string, name: string, description: string, image?: string | null, productType: string, price?: number | null, productStatus: string, duration?: number | null, mediaId?: string | null, metadata?: string | null, whiteList?: string | null, sellerId?: any | null, ownerId?: string | null, chainId?: any | null, createdAt: any, updatedAt?: any | null };

export type QuestionFieldsFragment = { __typename?: 'Question', surveyId: any, description: string, createdAt: any };

export type SaleItemFieldsFragment = { __typename?: 'SaleItem', productId?: number | null, name?: string | null, description?: string | null, sellerId?: number | null, buyerId?: number | null, issuedAt?: any | null, orderAmount?: number | null, price?: number | null, orderStatus?: string | null };

type SurveyElementFields_BooleanElement_Fragment = { __typename?: 'BooleanElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null };

type SurveyElementFields_CommentElement_Fragment = { __typename?: 'CommentElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null };

type SurveyElementFields_RadiogroupElement_Fragment = { __typename?: 'RadiogroupElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null };

type SurveyElementFields_RankingElement_Fragment = { __typename?: 'RankingElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null };

type SurveyElementFields_RatingElement_Fragment = { __typename?: 'RatingElement', name: string, title?: string | null, type: SurveyElementType, rateMax?: number | null, points?: number | null, isRequired: boolean, correctAnswer?: string | null };

type SurveyElementFields_TextElement_Fragment = { __typename?: 'TextElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null };

export type SurveyElementFieldsFragment = SurveyElementFields_BooleanElement_Fragment | SurveyElementFields_CommentElement_Fragment | SurveyElementFields_RadiogroupElement_Fragment | SurveyElementFields_RankingElement_Fragment | SurveyElementFields_RatingElement_Fragment | SurveyElementFields_TextElement_Fragment;

type SurveyElementItemValueTypeFields_TextValueType_Fragment = { __typename?: 'TextValueType', text: string, value: string };

type SurveyElementItemValueTypeFields_ValueType_Fragment = { __typename?: 'ValueType', value: string };

export type SurveyElementItemValueTypeFieldsFragment = SurveyElementItemValueTypeFields_TextValueType_Fragment | SurveyElementItemValueTypeFields_ValueType_Fragment;

export type SurveyFieldsFragment = { __typename?: 'Survey', surveyId: any, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, campaignType: SurveyCampaignType, fillingStatus?: string | null, rewardId?: string | null, rewardType?: string | null, cidHash?: any | null, tags?: Array<any | null> | null, claimId?: any | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, resultsId?: string | null, whiteList?: Array<any | null> | null, funded?: boolean | null, showQuestionNumbers?: string | null, pageNextText?: string | null, completeText?: string | null, showPrevButton?: boolean | null, firstPageIsStarted?: boolean | null, startSurveyText?: string | null, completedHtml?: string | null, showPreviewBeforeComplete?: string | null, privateKey?: string | null, publicKey?: string | null, createdAt: any, updatedAt?: any | null, publishedAt?: any | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null, elements?: Array<{ __typename?: 'BooleanElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'CommentElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'RadiogroupElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RankingElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RatingElement', name: string, title?: string | null, type: SurveyElementType, rateMax?: number | null, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'TextElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null }> | null }> | null, results?: Array<{ __typename?: 'SurveyResult', resultsId: string, result: any, claimId?: any | null, rewardId?: string | null, rewardType?: string | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, chainId?: any | null, score?: number | null, credibilityScore?: any | null, createdAt: any, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, resultsId?: string | null, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, funded?: boolean | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null }> | null } | null } | null> | null, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null };

export type SurveyGatingFieldsFragment = { __typename?: 'SurveyGating', gateId: string, surveyId: number, profileId?: number | null, requirements: any, createdAt: any, updatedAt?: any | null };

export type SurveyPageFieldsFragment = { __typename?: 'SurveyPage', name: string, title?: string | null, elements?: Array<{ __typename?: 'BooleanElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'CommentElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'RadiogroupElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RankingElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RatingElement', name: string, title?: string | null, type: SurveyElementType, rateMax?: number | null, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'TextElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null }> | null };

export type SurveyReferralFieldsFragment = { __typename?: 'SurveyReferral', referralId: string, surveyId?: any | null, profileId: any, invitedEmail: any, invitedStatus: string, invitedId?: any | null, referralStatus: string, accountStatus?: AccountStatus | null, displayName?: string | null, email?: any | null, avatar?: string | null, createdAt: any, updatedAt?: any | null, invitedAt?: any | null, completedAt?: any | null };

export type SurveyResultFieldsFragment = { __typename?: 'SurveyResult', resultsId: string, result: any, claimId?: any | null, rewardId?: string | null, rewardType?: string | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, chainId?: any | null, score?: number | null, credibilityScore?: any | null, createdAt: any, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, resultsId?: string | null, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, funded?: boolean | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null }> | null } | null };

export type SurveyRewardFieldsFragment = { __typename?: 'SurveyReward', rewardId: string, rewardType: string, mediaId?: string | null, surveyId: any, profileId: any, resultsId?: string | null, chainId?: any | null, createdAt: any, updatedAt?: any | null, mediaPrize?: { __typename?: 'Erc721', nftId: any, contractName?: string | null, contractAddress: any, symbol: string, tokenId?: string | null, name: string, description: string, contentUri: string, chainId: any, collectionName: string, ercType: string, owners?: Array<{ __typename?: 'Owner', amount: number, address: any, profileId?: any | null }> | null, originalContent?: { __typename?: 'NFTContent', uri?: string | null, metaType?: string | null, animatedUrl?: string | null } | null } | { __typename?: 'Nep171', nftId: any, seriesId: number, price?: number | null, royalty?: number | null, creatorId?: any | null, sellerId?: any | null, ownerId?: any | null, productId?: number | null, productType?: string | null, productStatus?: string | null, orderId?: string | null, orderStatus?: string | null, surveyId?: any | null, resultsId?: string | null, evmContractAddress?: any | null, chainId: any, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, metadata: { __typename?: 'Metadata', title: string, description: string, media: string, mediaHash?: string | null, copies?: number | null, issuedAt?: any | null, expiresAt?: any | null, startsAt?: any | null, updatedAt?: any | null, extra?: string | null, reference?: string | null, referenceHash?: string | null } } | null };

export type TransactionCreditFieldsFragment = { __typename?: 'TransactionCredit', transactionId: string, orderId?: string | null, amount: number, transactionHash?: any | null, transactionType: TransactionType, transactionStatus: TransactionStatus, transactionSource?: string | null, createdAt: string, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, campaignType: SurveyCampaignType, fillingStatus?: string | null, rewardId?: string | null, rewardType?: string | null, cidHash?: any | null, tags?: Array<any | null> | null, claimId?: any | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, resultsId?: string | null, whiteList?: Array<any | null> | null, funded?: boolean | null, showQuestionNumbers?: string | null, pageNextText?: string | null, completeText?: string | null, showPrevButton?: boolean | null, firstPageIsStarted?: boolean | null, startSurveyText?: string | null, completedHtml?: string | null, showPreviewBeforeComplete?: string | null, privateKey?: string | null, publicKey?: string | null, createdAt: any, updatedAt?: any | null, publishedAt?: any | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null, elements?: Array<{ __typename?: 'BooleanElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'CommentElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'RadiogroupElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RankingElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RatingElement', name: string, title?: string | null, type: SurveyElementType, rateMax?: number | null, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'TextElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null }> | null }> | null, results?: Array<{ __typename?: 'SurveyResult', resultsId: string, result: any, claimId?: any | null, rewardId?: string | null, rewardType?: string | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, chainId?: any | null, score?: number | null, credibilityScore?: any | null, createdAt: any, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, resultsId?: string | null, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, funded?: boolean | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null }> | null } | null } | null> | null, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null } | null, surveyResult?: { __typename?: 'SurveyResult', resultsId: string, result: any, claimId?: any | null, rewardId?: string | null, rewardType?: string | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, chainId?: any | null, score?: number | null, credibilityScore?: any | null, createdAt: any, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, resultsId?: string | null, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, funded?: boolean | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null }> | null } | null } | null };

export type UserBoostFieldsFragment = { __typename?: 'UserBoost', boostId: string, profileId: any, startAt: any, endAt: any, boostStatus: string, createdAt: any, updatedAt?: any | null };

export type UserContractFieldsFragment = { __typename?: 'UserContract', contractId: number, profileId: number, surveyId?: number | null, network?: string | null, contractType?: string | null, contractName?: string | null, contractAddress?: any | null, ownerAddress?: string | null, funcCall?: string | null, input?: string | null, output?: string | null, createdAt: any };

export type UserFieldsFragment = { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null };

export type UserMembershipFieldsFragment = { __typename?: 'UserMembership', membershipId: string, profileId: any, startAt: any, endAt: any, membershipStatus: string, createdAt: any, updatedAt?: any | null };

export type UserPrizeFieldsFragment = { __typename?: 'UserPrize', prizeId: string, rewardId: string, surveyId: any, resultId: string, profileId: any, chainId?: any | null, createdAt: string };

export type UserRefferalFieldsFragment = { __typename?: 'UserRefferal', refferalId: string, surveyId?: any | null, profileId: any, invitedEmail: any, invitedStatus: string, invitedId?: any | null, refferalStatus: string, accountStatus?: AccountStatus | null, displayName?: string | null, email?: any | null, avatar?: string | null, createdAt: any, updatedAt?: any | null, invitedAt?: any | null, completedAt?: any | null };

export type WalletFieldsFragment = { __typename?: 'Wallet', walletId: string, credit: number, recipient?: any | null, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null };

export type AuthenticateMutationVariables = Exact<{
  request: SignedAuthChallenge;
}>;


export type AuthenticateMutation = { __typename?: 'Mutation', authenticate: { __typename?: 'AuthenticationResult', accessToken: any, refreshToken: any } };

export type BanUnbanUserMutationVariables = Exact<{
  request: BanUnbanUserRequest;
}>;


export type BanUnbanUserMutation = { __typename?: 'Mutation', banUnbanUser: { __typename: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } };

export type ClaimMarketplaceOrderMediaMutationVariables = Exact<{
  request: ClaimMarketplaceOrderMediaRequest;
}>;


export type ClaimMarketplaceOrderMediaMutation = { __typename?: 'Mutation', claimMarketplaceOrderMedia: { __typename: 'MarketplaceOrder', orderId: string, productId: number, orderStatus: string, orderType: string, paymentType: string, orderAmount: number, metadata?: string | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, chainId?: any | null, createdAt: any, updatedAt?: any | null, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null } };

export type ClaimSurveyMediaMutationVariables = Exact<{
  request: ClaimSurveyMediaRequest;
}>;


export type ClaimSurveyMediaMutation = { __typename?: 'Mutation', claimSurveyMedia: { __typename: 'SurveyReward', rewardId: string, rewardType: string, mediaId?: string | null, surveyId: any, profileId: any, resultsId?: string | null, chainId?: any | null, createdAt: any, updatedAt?: any | null, mediaPrize?: { __typename?: 'Erc721', nftId: any, contractName?: string | null, contractAddress: any, symbol: string, tokenId?: string | null, name: string, description: string, contentUri: string, chainId: any, collectionName: string, ercType: string, owners?: Array<{ __typename?: 'Owner', amount: number, address: any, profileId?: any | null }> | null, originalContent?: { __typename?: 'NFTContent', uri?: string | null, metaType?: string | null, animatedUrl?: string | null } | null } | { __typename?: 'Nep171', nftId: any, seriesId: number, price?: number | null, royalty?: number | null, creatorId?: any | null, sellerId?: any | null, ownerId?: any | null, productId?: number | null, productType?: string | null, productStatus?: string | null, orderId?: string | null, orderStatus?: string | null, surveyId?: any | null, resultsId?: string | null, evmContractAddress?: any | null, chainId: any, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, metadata: { __typename?: 'Metadata', title: string, description: string, media: string, mediaHash?: string | null, copies?: number | null, issuedAt?: any | null, expiresAt?: any | null, startsAt?: any | null, updatedAt?: any | null, extra?: string | null, reference?: string | null, referenceHash?: string | null } } | null } };

export type ClaimSurveyRewardMutationVariables = Exact<{
  request: ClaimSurveyRewardRequest;
}>;


export type ClaimSurveyRewardMutation = { __typename?: 'Mutation', claimSurveyReward: { __typename: 'SurveyReward', rewardId: string, rewardType: string, mediaId?: string | null, surveyId: any, profileId: any, resultsId?: string | null, chainId?: any | null, createdAt: any, updatedAt?: any | null, mediaPrize?: { __typename?: 'Erc721', nftId: any, contractName?: string | null, contractAddress: any, symbol: string, tokenId?: string | null, name: string, description: string, contentUri: string, chainId: any, collectionName: string, ercType: string, owners?: Array<{ __typename?: 'Owner', amount: number, address: any, profileId?: any | null }> | null, originalContent?: { __typename?: 'NFTContent', uri?: string | null, metaType?: string | null, animatedUrl?: string | null } | null } | { __typename?: 'Nep171', nftId: any, seriesId: number, price?: number | null, royalty?: number | null, creatorId?: any | null, sellerId?: any | null, ownerId?: any | null, productId?: number | null, productType?: string | null, productStatus?: string | null, orderId?: string | null, orderStatus?: string | null, surveyId?: any | null, resultsId?: string | null, evmContractAddress?: any | null, chainId: any, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, metadata: { __typename?: 'Metadata', title: string, description: string, media: string, mediaHash?: string | null, copies?: number | null, issuedAt?: any | null, expiresAt?: any | null, startsAt?: any | null, updatedAt?: any | null, extra?: string | null, reference?: string | null, referenceHash?: string | null } } | null } };

export type CreateAnonymousUserMutationVariables = Exact<{
  request: CreateAnonymousUserRequest;
}>;


export type CreateAnonymousUserMutation = { __typename?: 'Mutation', createAnonymousUser: { __typename: 'AnonymousUser', anonId: string, profileId?: number | null, fingerprint: string, createdAt: any, updatedAt?: any | null } };

export type CreateEmbedSurveyResultMutationVariables = Exact<{
  request: CreateEmbedSurveyResultRequest;
}>;


export type CreateEmbedSurveyResultMutation = { __typename?: 'Mutation', createEmbedSurveyResult: { __typename: 'EmbedSurveyResult', embedResultsId: string, result: any, fingerprint: string, claimId?: any | null, rewardId?: string | null, rewardType?: string | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, chainId?: any | null, createdAt: any, survey?: { __typename?: 'Survey', surveyId: any, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, funded?: boolean | null } | null } };

export type CreateErc721NftGalleryMutationVariables = Exact<{
  request: NftGalleryCreateRequest;
}>;


export type CreateErc721NftGalleryMutation = { __typename?: 'Mutation', createErc721NftGallery: any };

export type CreateFillingQueueMutationVariables = Exact<{
  request: CreateFillingQueueRequest;
}>;


export type CreateFillingQueueMutation = { __typename?: 'Mutation', createFillingQueue?: { __typename: 'FillingQueue', fillingId: string, fillingType: FillingType, fillingStatus: FillingStatus, claimId?: string | null, metadata?: any | null, createdAt: string, updatedAt?: string | null, completedAt?: string | null, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, campaignType: SurveyCampaignType, fillingStatus?: string | null, rewardId?: string | null, rewardType?: string | null, cidHash?: any | null, tags?: Array<any | null> | null, claimId?: any | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, resultsId?: string | null, whiteList?: Array<any | null> | null, funded?: boolean | null, showQuestionNumbers?: string | null, pageNextText?: string | null, completeText?: string | null, showPrevButton?: boolean | null, firstPageIsStarted?: boolean | null, startSurveyText?: string | null, completedHtml?: string | null, showPreviewBeforeComplete?: string | null, privateKey?: string | null, publicKey?: string | null, createdAt: any, updatedAt?: any | null, publishedAt?: any | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null, elements?: Array<{ __typename?: 'BooleanElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'CommentElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'RadiogroupElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RankingElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RatingElement', name: string, title?: string | null, type: SurveyElementType, rateMax?: number | null, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'TextElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null }> | null }> | null, results?: Array<{ __typename?: 'SurveyResult', resultsId: string, result: any, claimId?: any | null, rewardId?: string | null, rewardType?: string | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, chainId?: any | null, score?: number | null, credibilityScore?: any | null, createdAt: any, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, resultsId?: string | null, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, funded?: boolean | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null }> | null } | null } | null> | null, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null } | null } | null };

export type CreateMarketplaceOrderMutationVariables = Exact<{
  request: CreateMarketplaceOrderRequest;
}>;


export type CreateMarketplaceOrderMutation = { __typename?: 'Mutation', createMarketplaceOrder: { __typename: 'MarketplaceOrder', orderId: string, productId: number, orderStatus: string, orderType: string, paymentType: string, orderAmount: number, metadata?: string | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, chainId?: any | null, createdAt: any, updatedAt?: any | null, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null } };

export type CreateNftGalleryMutationVariables = Exact<{
  request: NftGalleryCreateRequest;
}>;


export type CreateNftGalleryMutation = { __typename?: 'Mutation', createNftGallery: any };

export type CreateProductMutationVariables = Exact<{
  request: CreateProductRequest;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename: 'MarketplaceProduct', productId: string, name: string, description: string, image?: string | null, productType: string, price?: number | null, productStatus: string, duration?: number | null, mediaId?: string | null, metadata?: string | null, whiteList?: string | null, sellerId?: any | null, ownerId?: string | null, chainId?: any | null, createdAt: any, updatedAt?: any | null } };

export type CreateProfileMutationVariables = Exact<{
  request: CreateProfileRequest;
}>;


export type CreateProfileMutation = { __typename?: 'Mutation', createProfile: { __typename: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } };

export type CreateSurveyMutationVariables = Exact<{
  request: SurveyCreateRequest;
}>;


export type CreateSurveyMutation = { __typename?: 'Mutation', createSurvey: { __typename: 'Survey', surveyId: any, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, campaignType: SurveyCampaignType, fillingStatus?: string | null, rewardId?: string | null, rewardType?: string | null, cidHash?: any | null, tags?: Array<any | null> | null, claimId?: any | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, resultsId?: string | null, whiteList?: Array<any | null> | null, funded?: boolean | null, showQuestionNumbers?: string | null, pageNextText?: string | null, completeText?: string | null, showPrevButton?: boolean | null, firstPageIsStarted?: boolean | null, startSurveyText?: string | null, completedHtml?: string | null, showPreviewBeforeComplete?: string | null, privateKey?: string | null, publicKey?: string | null, createdAt: any, updatedAt?: any | null, publishedAt?: any | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null, elements?: Array<{ __typename?: 'BooleanElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'CommentElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'RadiogroupElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RankingElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RatingElement', name: string, title?: string | null, type: SurveyElementType, rateMax?: number | null, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'TextElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null }> | null }> | null, results?: Array<{ __typename?: 'SurveyResult', resultsId: string, result: any, claimId?: any | null, rewardId?: string | null, rewardType?: string | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, chainId?: any | null, score?: number | null, credibilityScore?: any | null, createdAt: any, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, resultsId?: string | null, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, funded?: boolean | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null }> | null } | null } | null> | null, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null } };

export type CreateSurveyGatingMutationVariables = Exact<{
  request: CreateSurveyGatingRequest;
}>;


export type CreateSurveyGatingMutation = { __typename?: 'Mutation', createSurveyGating: { __typename: 'SurveyGating', gateId: string, surveyId: number, profileId?: number | null, requirements: any, createdAt: any, updatedAt?: any | null } };

export type CreateSurveyReferralMutationVariables = Exact<{
  request: CreateSurveyReferralRequest;
}>;


export type CreateSurveyReferralMutation = { __typename?: 'Mutation', createSurveyReferral: { __typename: 'SurveyReferral', referralId: string, surveyId?: any | null, profileId: any, invitedEmail: any, invitedStatus: string, invitedId?: any | null, referralStatus: string, accountStatus?: AccountStatus | null, displayName?: string | null, email?: any | null, avatar?: string | null, createdAt: any, updatedAt?: any | null, invitedAt?: any | null, completedAt?: any | null } };

export type CreateSurveyResultMutationVariables = Exact<{
  request: CreateSurveyResultRequest;
}>;


export type CreateSurveyResultMutation = { __typename?: 'Mutation', createSurveyResult: { __typename: 'SurveyResult', resultsId: string, result: any, claimId?: any | null, rewardId?: string | null, rewardType?: string | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, chainId?: any | null, score?: number | null, credibilityScore?: any | null, createdAt: any, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, resultsId?: string | null, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, funded?: boolean | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null }> | null } | null } };

export type CreateSurveyRewardMutationVariables = Exact<{
  request: CreateSurveyRewardRequest;
}>;


export type CreateSurveyRewardMutation = { __typename?: 'Mutation', createSurveyReward: { __typename: 'SurveyReward', rewardId: string, rewardType: string, mediaId?: string | null, surveyId: any, profileId: any, resultsId?: string | null, chainId?: any | null, createdAt: any, updatedAt?: any | null, mediaPrize?: { __typename?: 'Erc721', nftId: any, contractName?: string | null, contractAddress: any, symbol: string, tokenId?: string | null, name: string, description: string, contentUri: string, chainId: any, collectionName: string, ercType: string, owners?: Array<{ __typename?: 'Owner', amount: number, address: any, profileId?: any | null }> | null, originalContent?: { __typename?: 'NFTContent', uri?: string | null, metaType?: string | null, animatedUrl?: string | null } | null } | { __typename?: 'Nep171', nftId: any, seriesId: number, price?: number | null, royalty?: number | null, creatorId?: any | null, sellerId?: any | null, ownerId?: any | null, productId?: number | null, productType?: string | null, productStatus?: string | null, orderId?: string | null, orderStatus?: string | null, surveyId?: any | null, resultsId?: string | null, evmContractAddress?: any | null, chainId: any, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, metadata: { __typename?: 'Metadata', title: string, description: string, media: string, mediaHash?: string | null, copies?: number | null, issuedAt?: any | null, expiresAt?: any | null, startsAt?: any | null, updatedAt?: any | null, extra?: string | null, reference?: string | null, referenceHash?: string | null } } | null } };

export type CreateTransactionCreditMutationVariables = Exact<{
  request: TransactionCreditRequest;
}>;


export type CreateTransactionCreditMutation = { __typename?: 'Mutation', createTransactionCredit: { __typename: 'TransactionCredit', transactionId: string, orderId?: string | null, amount: number, transactionHash?: any | null, transactionType: TransactionType, transactionStatus: TransactionStatus, transactionSource?: string | null, createdAt: string, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, campaignType: SurveyCampaignType, fillingStatus?: string | null, rewardId?: string | null, rewardType?: string | null, cidHash?: any | null, tags?: Array<any | null> | null, claimId?: any | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, resultsId?: string | null, whiteList?: Array<any | null> | null, funded?: boolean | null, showQuestionNumbers?: string | null, pageNextText?: string | null, completeText?: string | null, showPrevButton?: boolean | null, firstPageIsStarted?: boolean | null, startSurveyText?: string | null, completedHtml?: string | null, showPreviewBeforeComplete?: string | null, privateKey?: string | null, publicKey?: string | null, createdAt: any, updatedAt?: any | null, publishedAt?: any | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null, elements?: Array<{ __typename?: 'BooleanElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'CommentElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'RadiogroupElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RankingElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RatingElement', name: string, title?: string | null, type: SurveyElementType, rateMax?: number | null, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'TextElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null }> | null }> | null, results?: Array<{ __typename?: 'SurveyResult', resultsId: string, result: any, claimId?: any | null, rewardId?: string | null, rewardType?: string | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, chainId?: any | null, score?: number | null, credibilityScore?: any | null, createdAt: any, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, resultsId?: string | null, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, funded?: boolean | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null }> | null } | null } | null> | null, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null } | null, surveyResult?: { __typename?: 'SurveyResult', resultsId: string, result: any, claimId?: any | null, rewardId?: string | null, rewardType?: string | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, chainId?: any | null, score?: number | null, credibilityScore?: any | null, createdAt: any, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, resultsId?: string | null, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, funded?: boolean | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null }> | null } | null } | null } };

export type CreateTransactionDebitMutationVariables = Exact<{
  request: TransactionDebitRequest;
}>;


export type CreateTransactionDebitMutation = { __typename?: 'Mutation', createTransactionDebit: { __typename: 'TransactionCredit', transactionId: string, orderId?: string | null, amount: number, transactionHash?: any | null, transactionType: TransactionType, transactionStatus: TransactionStatus, transactionSource?: string | null, createdAt: string, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, campaignType: SurveyCampaignType, fillingStatus?: string | null, rewardId?: string | null, rewardType?: string | null, cidHash?: any | null, tags?: Array<any | null> | null, claimId?: any | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, resultsId?: string | null, whiteList?: Array<any | null> | null, funded?: boolean | null, showQuestionNumbers?: string | null, pageNextText?: string | null, completeText?: string | null, showPrevButton?: boolean | null, firstPageIsStarted?: boolean | null, startSurveyText?: string | null, completedHtml?: string | null, showPreviewBeforeComplete?: string | null, privateKey?: string | null, publicKey?: string | null, createdAt: any, updatedAt?: any | null, publishedAt?: any | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null, elements?: Array<{ __typename?: 'BooleanElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'CommentElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'RadiogroupElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RankingElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RatingElement', name: string, title?: string | null, type: SurveyElementType, rateMax?: number | null, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'TextElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null }> | null }> | null, results?: Array<{ __typename?: 'SurveyResult', resultsId: string, result: any, claimId?: any | null, rewardId?: string | null, rewardType?: string | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, chainId?: any | null, score?: number | null, credibilityScore?: any | null, createdAt: any, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, resultsId?: string | null, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, funded?: boolean | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null }> | null } | null } | null> | null, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null } | null, surveyResult?: { __typename?: 'SurveyResult', resultsId: string, result: any, claimId?: any | null, rewardId?: string | null, rewardType?: string | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, chainId?: any | null, score?: number | null, credibilityScore?: any | null, createdAt: any, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, resultsId?: string | null, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, funded?: boolean | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null }> | null } | null } | null } };

export type CreateUserBoostMutationVariables = Exact<{
  request: CreateUserBoostRequest;
}>;


export type CreateUserBoostMutation = { __typename?: 'Mutation', createUserBoost: { __typename: 'UserBoost', boostId: string, profileId: any, startAt: any, endAt: any, boostStatus: string, createdAt: any, updatedAt?: any | null } };

export type CreateUserContractMutationVariables = Exact<{
  request: CreateUserContractRequest;
}>;


export type CreateUserContractMutation = { __typename?: 'Mutation', createUserContract: { __typename: 'UserContract', contractId: number, profileId: number, surveyId?: number | null, network?: string | null, contractType?: string | null, contractName?: string | null, contractAddress?: any | null, ownerAddress?: string | null, funcCall?: string | null, input?: string | null, output?: string | null, createdAt: any } };

export type CreateUserMembershipMutationVariables = Exact<{
  request: CreateUserMembershipRequest;
}>;


export type CreateUserMembershipMutation = { __typename?: 'Mutation', createUserMembership: { __typename: 'UserMembership', membershipId: string, profileId: any, startAt: any, endAt: any, membershipStatus: string, createdAt: any, updatedAt?: any | null } };

export type CreateUserRefferalMutationVariables = Exact<{
  request: CreateUserRefferalRequest;
}>;


export type CreateUserRefferalMutation = { __typename?: 'Mutation', createUserRefferal: { __typename: 'UserRefferal', refferalId: string, surveyId?: any | null, profileId: any, invitedEmail: any, invitedStatus: string, invitedId?: any | null, refferalStatus: string, accountStatus?: AccountStatus | null, displayName?: string | null, email?: any | null, avatar?: string | null, createdAt: any, updatedAt?: any | null, invitedAt?: any | null, completedAt?: any | null } };

export type CreateWalletMutationVariables = Exact<{
  request: CreateWalletRequest;
}>;


export type CreateWalletMutation = { __typename?: 'Mutation', createWallet: { __typename: 'Wallet', walletId: string, credit: number, recipient?: any | null, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null } };

export type DeleteFillingQueueMutationVariables = Exact<{
  request: DeleteFillingQueueRequest;
}>;


export type DeleteFillingQueueMutation = { __typename?: 'Mutation', deleteFillingQueue?: any | null };

export type DeleteProductMutationVariables = Exact<{
  request: DeleteProductRequest;
}>;


export type DeleteProductMutation = { __typename?: 'Mutation', deleteProduct?: any | null };

export type DeleteSurveyMutationVariables = Exact<{
  request: SurveyDeleteRequest;
}>;


export type DeleteSurveyMutation = { __typename?: 'Mutation', deleteSurvey?: any | null };

export type DeleteSurveyResultMutationVariables = Exact<{
  request: DeleteSurveyResultRequest;
}>;


export type DeleteSurveyResultMutation = { __typename?: 'Mutation', deleteSurveyResult?: any | null };

export type DeleteTransactionCreditMutationVariables = Exact<{
  request: DeleteTransactionCreditRequest;
}>;


export type DeleteTransactionCreditMutation = { __typename?: 'Mutation', deleteTransactionCredit?: any | null };

export type DeleteWalletMutationVariables = Exact<{
  request: DeleteWalletRequest;
}>;


export type DeleteWalletMutation = { __typename?: 'Mutation', deleteWallet: boolean };

export type InviteUserMutationVariables = Exact<{
  request: InviteUserRequest;
}>;


export type InviteUserMutation = { __typename?: 'Mutation', inviteUser: { __typename: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } };

export type RefreshMutationVariables = Exact<{
  request: RefreshRequest;
}>;


export type RefreshMutation = { __typename?: 'Mutation', refresh: { __typename?: 'AuthenticationResult', accessToken: any, refreshToken: any } };

export type RefundMarketplaceOrderMutationVariables = Exact<{
  request: RefundMarketplaceOrderRequest;
}>;


export type RefundMarketplaceOrderMutation = { __typename?: 'Mutation', refundMarketplaceOrder: { __typename: 'MarketplaceOrder', orderId: string, productId: number, orderStatus: string, orderType: string, paymentType: string, orderAmount: number, metadata?: string | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, chainId?: any | null, createdAt: any, updatedAt?: any | null, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null } };

export type RegistryUserPrizeMutationVariables = Exact<{
  request: RegistryUserPrizeRequest;
}>;


export type RegistryUserPrizeMutation = { __typename?: 'Mutation', registryUserPrize: { __typename: 'UserPrize', prizeId: string, rewardId: string, surveyId: any, resultId: string, profileId: any, chainId?: any | null, createdAt: string } };

export type ScoreSurveyResultMutationVariables = Exact<{
  request: ScoreSurveyResultRequest;
}>;


export type ScoreSurveyResultMutation = { __typename?: 'Mutation', scoreSurveyResult: { __typename: 'SurveyResult', resultsId: string, result: any, claimId?: any | null, rewardId?: string | null, rewardType?: string | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, chainId?: any | null, score?: number | null, credibilityScore?: any | null, createdAt: any, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, resultsId?: string | null, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, funded?: boolean | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null }> | null } | null } };

export type SyncMediaProductsMutationVariables = Exact<{
  request: SyncMediaProductsRequest;
}>;


export type SyncMediaProductsMutation = { __typename?: 'Mutation', syncMediaProducts?: any | null };

export type SyncNftGalleryMutationVariables = Exact<{
  request: SyncNftGalleryRequest;
}>;


export type SyncNftGalleryMutation = { __typename?: 'Mutation', syncNftGallery?: any | null };

export type SyncPageviewSourcesMutationVariables = Exact<{
  request: SyncPageviewSourcesRequest;
}>;


export type SyncPageviewSourcesMutation = { __typename?: 'Mutation', syncPageviewSources?: any | null };

export type UpdateAnonymousUserMutationVariables = Exact<{
  request: UpdateAnonymousUserRequest;
}>;


export type UpdateAnonymousUserMutation = { __typename?: 'Mutation', updateAnonymousUser: { __typename: 'AnonymousUser', anonId: string, profileId?: number | null, fingerprint: string, createdAt: any, updatedAt?: any | null } };

export type UpdateEmbedSurveyResultMutationVariables = Exact<{
  request: UpdateEmbedSurveyResultRequest;
}>;


export type UpdateEmbedSurveyResultMutation = { __typename?: 'Mutation', updateEmbedSurveyResult: { __typename: 'EmbedSurveyResult', embedResultsId: string, result: any, fingerprint: string, claimId?: any | null, rewardId?: string | null, rewardType?: string | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, chainId?: any | null, createdAt: any, survey?: { __typename?: 'Survey', surveyId: any, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, funded?: boolean | null } | null } };

export type UpdateFillingQueueMutationVariables = Exact<{
  request: UpdateFillingQueueRequest;
}>;


export type UpdateFillingQueueMutation = { __typename?: 'Mutation', updateFillingQueue: { __typename: 'FillingQueue', fillingId: string, fillingType: FillingType, fillingStatus: FillingStatus, claimId?: string | null, metadata?: any | null, createdAt: string, updatedAt?: string | null, completedAt?: string | null, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, campaignType: SurveyCampaignType, fillingStatus?: string | null, rewardId?: string | null, rewardType?: string | null, cidHash?: any | null, tags?: Array<any | null> | null, claimId?: any | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, resultsId?: string | null, whiteList?: Array<any | null> | null, funded?: boolean | null, showQuestionNumbers?: string | null, pageNextText?: string | null, completeText?: string | null, showPrevButton?: boolean | null, firstPageIsStarted?: boolean | null, startSurveyText?: string | null, completedHtml?: string | null, showPreviewBeforeComplete?: string | null, privateKey?: string | null, publicKey?: string | null, createdAt: any, updatedAt?: any | null, publishedAt?: any | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null, elements?: Array<{ __typename?: 'BooleanElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'CommentElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'RadiogroupElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RankingElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RatingElement', name: string, title?: string | null, type: SurveyElementType, rateMax?: number | null, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'TextElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null }> | null }> | null, results?: Array<{ __typename?: 'SurveyResult', resultsId: string, result: any, claimId?: any | null, rewardId?: string | null, rewardType?: string | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, chainId?: any | null, score?: number | null, credibilityScore?: any | null, createdAt: any, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, resultsId?: string | null, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, funded?: boolean | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null }> | null } | null } | null> | null, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null } | null } };

export type UpdateMarketplaceOrderMutationVariables = Exact<{
  request: UpdateMarketplaceOrderRequest;
}>;


export type UpdateMarketplaceOrderMutation = { __typename?: 'Mutation', updateMarketplaceOrder: { __typename: 'MarketplaceOrder', orderId: string, productId: number, orderStatus: string, orderType: string, paymentType: string, orderAmount: number, metadata?: string | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, chainId?: any | null, createdAt: any, updatedAt?: any | null, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null } };

export type UpdateProductMutationVariables = Exact<{
  request: UpdateProductRequest;
}>;


export type UpdateProductMutation = { __typename?: 'Mutation', updateProduct: { __typename: 'MarketplaceProduct', productId: string, name: string, description: string, image?: string | null, productType: string, price?: number | null, productStatus: string, duration?: number | null, mediaId?: string | null, metadata?: string | null, whiteList?: string | null, sellerId?: any | null, ownerId?: string | null, chainId?: any | null, createdAt: any, updatedAt?: any | null } };

export type UpdateProfileMutationVariables = Exact<{
  request: UpdateProfileRequest;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateProfile: { __typename: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } };

export type UpdateSurveyMutationVariables = Exact<{
  request: SurveyUpdateInfoRequest;
}>;


export type UpdateSurveyMutation = { __typename?: 'Mutation', updateSurvey: { __typename: 'Survey', surveyId: any, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, campaignType: SurveyCampaignType, fillingStatus?: string | null, rewardId?: string | null, rewardType?: string | null, cidHash?: any | null, tags?: Array<any | null> | null, claimId?: any | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, resultsId?: string | null, whiteList?: Array<any | null> | null, funded?: boolean | null, showQuestionNumbers?: string | null, pageNextText?: string | null, completeText?: string | null, showPrevButton?: boolean | null, firstPageIsStarted?: boolean | null, startSurveyText?: string | null, completedHtml?: string | null, showPreviewBeforeComplete?: string | null, privateKey?: string | null, publicKey?: string | null, createdAt: any, updatedAt?: any | null, publishedAt?: any | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null, elements?: Array<{ __typename?: 'BooleanElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'CommentElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'RadiogroupElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RankingElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RatingElement', name: string, title?: string | null, type: SurveyElementType, rateMax?: number | null, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'TextElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null }> | null }> | null, results?: Array<{ __typename?: 'SurveyResult', resultsId: string, result: any, claimId?: any | null, rewardId?: string | null, rewardType?: string | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, chainId?: any | null, score?: number | null, credibilityScore?: any | null, createdAt: any, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, resultsId?: string | null, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, funded?: boolean | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null }> | null } | null } | null> | null, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null } };

export type UpdateSurveyGatingMutationVariables = Exact<{
  request: UpdateSurveyGatingRequest;
}>;


export type UpdateSurveyGatingMutation = { __typename?: 'Mutation', updateSurveyGating: { __typename: 'SurveyGating', gateId: string, surveyId: number, profileId?: number | null, requirements: any, createdAt: any, updatedAt?: any | null } };

export type UpdateSurveyReferralMutationVariables = Exact<{
  request: UpdateSurveyReferralRequest;
}>;


export type UpdateSurveyReferralMutation = { __typename?: 'Mutation', updateSurveyReferral: { __typename: 'SurveyReferral', referralId: string, surveyId?: any | null, profileId: any, invitedEmail: any, invitedStatus: string, invitedId?: any | null, referralStatus: string, accountStatus?: AccountStatus | null, displayName?: string | null, email?: any | null, avatar?: string | null, createdAt: any, updatedAt?: any | null, invitedAt?: any | null, completedAt?: any | null } };

export type UpdateSurveyResultMutationVariables = Exact<{
  request: UpdateSurveyResultRequest;
}>;


export type UpdateSurveyResultMutation = { __typename?: 'Mutation', updateSurveyResult: { __typename: 'SurveyResult', resultsId: string, result: any, claimId?: any | null, rewardId?: string | null, rewardType?: string | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, chainId?: any | null, score?: number | null, credibilityScore?: any | null, createdAt: any, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, resultsId?: string | null, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, funded?: boolean | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null }> | null } | null } };

export type UpdateSurveyRewardMutationVariables = Exact<{
  request: UpdateSurveyRewardRequest;
}>;


export type UpdateSurveyRewardMutation = { __typename?: 'Mutation', updateSurveyReward: { __typename: 'SurveyReward', rewardId: string, rewardType: string, mediaId?: string | null, surveyId: any, profileId: any, resultsId?: string | null, chainId?: any | null, createdAt: any, updatedAt?: any | null, mediaPrize?: { __typename?: 'Erc721', nftId: any, contractName?: string | null, contractAddress: any, symbol: string, tokenId?: string | null, name: string, description: string, contentUri: string, chainId: any, collectionName: string, ercType: string, owners?: Array<{ __typename?: 'Owner', amount: number, address: any, profileId?: any | null }> | null, originalContent?: { __typename?: 'NFTContent', uri?: string | null, metaType?: string | null, animatedUrl?: string | null } | null } | { __typename?: 'Nep171', nftId: any, seriesId: number, price?: number | null, royalty?: number | null, creatorId?: any | null, sellerId?: any | null, ownerId?: any | null, productId?: number | null, productType?: string | null, productStatus?: string | null, orderId?: string | null, orderStatus?: string | null, surveyId?: any | null, resultsId?: string | null, evmContractAddress?: any | null, chainId: any, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, metadata: { __typename?: 'Metadata', title: string, description: string, media: string, mediaHash?: string | null, copies?: number | null, issuedAt?: any | null, expiresAt?: any | null, startsAt?: any | null, updatedAt?: any | null, extra?: string | null, reference?: string | null, referenceHash?: string | null } } | null } };

export type UpdateTransactionCreditMutationVariables = Exact<{
  request: UpdateTransactionCreditRequest;
}>;


export type UpdateTransactionCreditMutation = { __typename?: 'Mutation', updateTransactionCredit: { __typename: 'TransactionCredit', transactionId: string, orderId?: string | null, amount: number, transactionHash?: any | null, transactionType: TransactionType, transactionStatus: TransactionStatus, transactionSource?: string | null, createdAt: string, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, campaignType: SurveyCampaignType, fillingStatus?: string | null, rewardId?: string | null, rewardType?: string | null, cidHash?: any | null, tags?: Array<any | null> | null, claimId?: any | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, resultsId?: string | null, whiteList?: Array<any | null> | null, funded?: boolean | null, showQuestionNumbers?: string | null, pageNextText?: string | null, completeText?: string | null, showPrevButton?: boolean | null, firstPageIsStarted?: boolean | null, startSurveyText?: string | null, completedHtml?: string | null, showPreviewBeforeComplete?: string | null, privateKey?: string | null, publicKey?: string | null, createdAt: any, updatedAt?: any | null, publishedAt?: any | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null, elements?: Array<{ __typename?: 'BooleanElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'CommentElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'RadiogroupElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RankingElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RatingElement', name: string, title?: string | null, type: SurveyElementType, rateMax?: number | null, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'TextElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null }> | null }> | null, results?: Array<{ __typename?: 'SurveyResult', resultsId: string, result: any, claimId?: any | null, rewardId?: string | null, rewardType?: string | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, chainId?: any | null, score?: number | null, credibilityScore?: any | null, createdAt: any, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, resultsId?: string | null, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, funded?: boolean | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null }> | null } | null } | null> | null, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null } | null, surveyResult?: { __typename?: 'SurveyResult', resultsId: string, result: any, claimId?: any | null, rewardId?: string | null, rewardType?: string | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, chainId?: any | null, score?: number | null, credibilityScore?: any | null, createdAt: any, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, resultsId?: string | null, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, funded?: boolean | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null }> | null } | null } | null } };

export type UpdateUserBoostMutationVariables = Exact<{
  request: UpdateUserBoostRequest;
}>;


export type UpdateUserBoostMutation = { __typename?: 'Mutation', updateUserBoost: { __typename: 'UserBoost', boostId: string, profileId: any, startAt: any, endAt: any, boostStatus: string, createdAt: any, updatedAt?: any | null } };

export type UpdateUserMembershipMutationVariables = Exact<{
  request: UpdateUserMembershipRequest;
}>;


export type UpdateUserMembershipMutation = { __typename?: 'Mutation', updateUserMembership: { __typename: 'UserMembership', membershipId: string, profileId: any, startAt: any, endAt: any, membershipStatus: string, createdAt: any, updatedAt?: any | null } };

export type UpdateUserRefferalMutationVariables = Exact<{
  request: UpdateUserRefferalRequest;
}>;


export type UpdateUserRefferalMutation = { __typename?: 'Mutation', updateUserRefferal: { __typename: 'UserRefferal', refferalId: string, surveyId?: any | null, profileId: any, invitedEmail: any, invitedStatus: string, invitedId?: any | null, refferalStatus: string, accountStatus?: AccountStatus | null, displayName?: string | null, email?: any | null, avatar?: string | null, createdAt: any, updatedAt?: any | null, invitedAt?: any | null, completedAt?: any | null } };

export type UpdateWalletMutationVariables = Exact<{
  request: UpdateWalletRequest;
}>;


export type UpdateWalletMutation = { __typename?: 'Mutation', updateWallet: { __typename: 'Wallet', walletId: string, credit: number, recipient?: any | null, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null } };

export type VerifyUserMutationVariables = Exact<{
  request: VerifyUserRequest;
}>;


export type VerifyUserMutation = { __typename?: 'Mutation', verifyUser: { __typename: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } };

export type AnonymousUserQueryVariables = Exact<{
  request: AnonymousUserQueryRequest;
}>;


export type AnonymousUserQuery = { __typename?: 'Query', anonymousUser?: { __typename?: 'AnonymousUser', anonId: string, profileId?: number | null, fingerprint: string, createdAt: any, updatedAt?: any | null } | null };

export type ChallengeQueryVariables = Exact<{
  request: ChallengeRequest;
}>;


export type ChallengeQuery = { __typename?: 'Query', challenge: { __typename?: 'AuthChallengeResult', text: string } };

export type CheckTransactionQueryVariables = Exact<{
  request: TransactionHashRequest;
}>;


export type CheckTransactionQuery = { __typename?: 'Query', checkTransaction?: { __typename?: 'TransactionCredit', transactionId: string, orderId?: string | null, amount: number, transactionHash?: any | null, transactionType: TransactionType, transactionStatus: TransactionStatus, transactionSource?: string | null, createdAt: string, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, campaignType: SurveyCampaignType, fillingStatus?: string | null, rewardId?: string | null, rewardType?: string | null, cidHash?: any | null, tags?: Array<any | null> | null, claimId?: any | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, resultsId?: string | null, whiteList?: Array<any | null> | null, funded?: boolean | null, showQuestionNumbers?: string | null, pageNextText?: string | null, completeText?: string | null, showPrevButton?: boolean | null, firstPageIsStarted?: boolean | null, startSurveyText?: string | null, completedHtml?: string | null, showPreviewBeforeComplete?: string | null, privateKey?: string | null, publicKey?: string | null, createdAt: any, updatedAt?: any | null, publishedAt?: any | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null, elements?: Array<{ __typename?: 'BooleanElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'CommentElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'RadiogroupElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RankingElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RatingElement', name: string, title?: string | null, type: SurveyElementType, rateMax?: number | null, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'TextElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null }> | null }> | null, results?: Array<{ __typename?: 'SurveyResult', resultsId: string, result: any, claimId?: any | null, rewardId?: string | null, rewardType?: string | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, chainId?: any | null, score?: number | null, credibilityScore?: any | null, createdAt: any, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, resultsId?: string | null, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, funded?: boolean | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null }> | null } | null } | null> | null, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null } | null, surveyResult?: { __typename?: 'SurveyResult', resultsId: string, result: any, claimId?: any | null, rewardId?: string | null, rewardType?: string | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, chainId?: any | null, score?: number | null, credibilityScore?: any | null, createdAt: any, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, resultsId?: string | null, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, funded?: boolean | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null }> | null } | null } | null } | null };

export type DataUserRequestQueryVariables = Exact<{
  request?: InputMaybe<CategoriesRequest>;
}>;


export type DataUserRequestQuery = { __typename?: 'Query', dataUser?: { __typename?: 'DataUser', userMostCompletedSurveys?: Array<{ __typename?: 'UserMostCompletedSurveys', profileId: any, numberOfSurveys?: number | null } | null> | null, mostEarnedCashRewards?: Array<{ __typename?: 'MostEarnedCashRewards', profileId: any, mostCashViaStripe?: number | null } | null> | null, mostEarnedCryptocurrencyRewards?: { __typename?: 'MostEarnedCryptocurrencyRewards', nearRewards?: Array<{ __typename?: 'CryptoReward', profileId: any, amountCrypto?: number | null, amountUsd?: number | null } | null> | null, polkadotRewards?: Array<{ __typename?: 'CryptoReward', profileId: any, amountCrypto?: number | null, amountUsd?: number | null } | null> | null, polygonRewards?: Array<{ __typename?: 'CryptoReward', profileId: any, amountCrypto?: number | null, amountUsd?: number | null } | null> | null, totalCryptoInCash?: Array<{ __typename?: 'AllCryptoRewardInUSD', profileId: any, amountUsd?: number | null } | null> | null } | null, mostDollarsSpentNFTMarketplace?: Array<{ __typename?: 'MostDollarsSpentNFTMarketplace', profileId: any, realDollarsSpent?: number | null } | null> | null, mostCryptocurrencySpentNFTMarketplace?: { __typename?: 'MostCryptocurrencySpentNFTMarketplace', mostSpentNear?: Array<{ __typename?: 'CryptoReward', profileId: any, amountCrypto?: number | null, amountUsd?: number | null } | null> | null, mostSpentPolkadot?: Array<{ __typename?: 'CryptoReward', profileId: any, amountCrypto?: number | null, amountUsd?: number | null } | null> | null, mostSpentPolygon?: Array<{ __typename?: 'CryptoReward', profileId: any, amountCrypto?: number | null, amountUsd?: number | null } | null> | null } | null, mostInvitedUsers?: Array<{ __typename?: 'MostInvitedUsers', profileId: any, usersInvited?: number | null } | null> | null, mostCompletedSurveysInSpecificCategory?: Array<{ __typename?: 'MostCompletedSurveysInSpecificCategory', profileId: any, categoryName?: string | null, surveysCompleted?: number | null } | null> | null, highestAverageSurveyCompletionRate?: { __typename?: 'HighestAverageSurveyCompletionRate', highestAverageSurveyCompletion?: Array<{ __typename?: 'AverageSurveyCompletionRatesByUser', profileId?: any | null, percentageCompletionAverage?: number | null } | null> | null } | null, mostConsistentSurveyCompletionFrequency?: { __typename?: 'MostConsistentSurveyCompletionFrequency', daily?: Array<{ __typename?: 'UserCompletionFrequency', profileId: any, frequencyAverage?: number | null } | null> | null, weekly?: Array<{ __typename?: 'UserCompletionFrequency', profileId: any, frequencyAverage?: number | null } | null> | null, monthly?: Array<{ __typename?: 'UserCompletionFrequency', profileId: any, frequencyAverage?: number | null } | null> | null, yearly?: Array<{ __typename?: 'UserCompletionFrequency', profileId: any, frequencyAverage?: number | null } | null> | null } | null, highestNumberOfConsecutiveDaysWithSurveyCompletions?: Array<{ __typename?: 'HighestNumberOfConsecutiveDaysWithSurveyCompletions', profileId: any, longestDailyStreak?: number | null } | null> | null, mostActiveParticipationInSpecificTypesOfSurveys?: { __typename?: 'MostActiveParticipationInSpecificTypesOfSurveys', multipleChoiceSurveysRankings?: Array<{ __typename?: 'MultipleChoiceSurveys', profileId: any, multipleChoiceSurveys?: number | null } | null> | null, openEndedSurveysRankings?: Array<{ __typename?: 'OpenEndedSurveys', profileId: any, openEndedSurveys?: number | null } | null> | null } | null, mostReferralsConvertedIntoActiveSurveyParticipants?: Array<{ __typename?: 'MostReferralsConvertedIntoActiveSurveyParticipants', profileId: any, referralsSent?: number | null, referredParticipantCount?: number | null } | null> | null, mostEngagementWithCommunityFeatures?: Array<{ __typename?: 'MostEngagementWithCommunityFeatures', profileId: any, totalPosts?: number | null } | null> | null, mostCreativeAndUniqueSurveyResponses?: { __typename?: 'MostCreativeAndUniqueSurveyResponses', surveyResponseRating?: Array<{ __typename?: 'Rating', profileId: any, item_id?: number | null, rating?: number | null } | null> | null, mediaRating?: Array<{ __typename?: 'Rating', profileId: any, item_id?: number | null, rating?: number | null } | null> | null } | null } | null };

export type EmbedSurveyResultsQueryVariables = Exact<{
  request: EmbedSurveyResultQueryRequest;
}>;


export type EmbedSurveyResultsQuery = { __typename?: 'Query', embedSurveyResults: { __typename?: 'PaginatedEmbedSurveyResultResult', items: Array<{ __typename?: 'EmbedSurveyResult', embedResultsId: string, result: any, fingerprint: string, claimId?: any | null, rewardId?: string | null, rewardType?: string | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, chainId?: any | null, createdAt: any, survey?: { __typename?: 'Survey', surveyId: any, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, funded?: boolean | null } | null }> } };

export type FillingQueueQueryVariables = Exact<{
  request: FillingQueueQueryRequest;
}>;


export type FillingQueueQuery = { __typename?: 'Query', fillingQueue: { __typename?: 'PaginatedFillingQueueResult', items: Array<{ __typename?: 'FillingQueue', fillingId: string, fillingType: FillingType, fillingStatus: FillingStatus, claimId?: string | null, metadata?: any | null, createdAt: string, updatedAt?: string | null, completedAt?: string | null, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, campaignType: SurveyCampaignType, fillingStatus?: string | null, rewardId?: string | null, rewardType?: string | null, cidHash?: any | null, tags?: Array<any | null> | null, claimId?: any | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, resultsId?: string | null, whiteList?: Array<any | null> | null, funded?: boolean | null, showQuestionNumbers?: string | null, pageNextText?: string | null, completeText?: string | null, showPrevButton?: boolean | null, firstPageIsStarted?: boolean | null, startSurveyText?: string | null, completedHtml?: string | null, showPreviewBeforeComplete?: string | null, privateKey?: string | null, publicKey?: string | null, createdAt: any, updatedAt?: any | null, publishedAt?: any | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null, elements?: Array<{ __typename?: 'BooleanElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'CommentElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'RadiogroupElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RankingElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RatingElement', name: string, title?: string | null, type: SurveyElementType, rateMax?: number | null, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'TextElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null }> | null }> | null, results?: Array<{ __typename?: 'SurveyResult', resultsId: string, result: any, claimId?: any | null, rewardId?: string | null, rewardType?: string | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, chainId?: any | null, score?: number | null, credibilityScore?: any | null, createdAt: any, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, resultsId?: string | null, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, funded?: boolean | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null }> | null } | null } | null> | null, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null } | null }> } };

export type LeaderboardEntriesQueryVariables = Exact<{
  request: LeaderboardEntriesRequest;
}>;


export type LeaderboardEntriesQuery = { __typename?: 'Query', leaderboardEntries: { __typename?: 'LeaderboardEntriesResult', items?: Array<{ __typename?: 'LeaderboardEntry', leaderboardEntryId: number, leaderboardId: number, profileId: number, avatar?: string | null, issuer?: string | null, iden3issuer?: string | null, points?: number | null, rank?: number | null, surveysuccess?: number | null, earnings?: number | null, createdAt?: any | null }> | null } };

export type MarketplaceOrderQueryVariables = Exact<{
  request: MarketplaceOrderQueryRequest;
}>;


export type MarketplaceOrderQuery = { __typename?: 'Query', marketplaceOrder?: { __typename?: 'MarketplaceOrder', orderId: string, productId: number, orderStatus: string, orderType: string, paymentType: string, orderAmount: number, metadata?: string | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, chainId?: any | null, createdAt: any, updatedAt?: any | null, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null } | null };

export type MarketplaceOrdersQueryVariables = Exact<{
  request: MarketplaceOrdersQueryRequest;
}>;


export type MarketplaceOrdersQuery = { __typename?: 'Query', marketplaceOrders: { __typename?: 'PaginatedMarketplaceOrdersResult', items: Array<{ __typename?: 'MarketplaceOrder', orderId: string, productId: number, orderStatus: string, orderType: string, paymentType: string, orderAmount: number, metadata?: string | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, chainId?: any | null, createdAt: any, updatedAt?: any | null, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null }> } };

export type MethodsPromotionQueryVariables = Exact<{ [key: string]: never; }>;


export type MethodsPromotionQuery = { __typename?: 'Query', methodsPromotions?: Array<{ __typename?: 'SurveyMethod', name: string, totalCount?: number | null, effectiveness: number } | null> | null };

export type NftGalleriesQueryVariables = Exact<{
  request: NftGalleriesQueryRequest;
}>;


export type NftGalleriesQuery = { __typename?: 'Query', nftGalleries: { __typename?: 'PaginatedNftGalleryResult', items: Array<{ __typename?: 'NftGallery', nftGalleryId: any, name: string, profileId: any, chainId?: any | null, createdAt: any, updatedAt?: any | null, items?: Array<{ __typename?: 'Erc721', nftId: any, contractName?: string | null, contractAddress: any, symbol: string, tokenId?: string | null, name: string, description: string, contentUri: string, chainId: any, collectionName: string, ercType: string, owners?: Array<{ __typename?: 'Owner', amount: number, address: any, profileId?: any | null }> | null, originalContent?: { __typename?: 'NFTContent', uri?: string | null, metaType?: string | null, animatedUrl?: string | null } | null } | { __typename?: 'Nep171', nftId: any, seriesId: number, price?: number | null, royalty?: number | null, creatorId?: any | null, sellerId?: any | null, ownerId?: any | null, productId?: number | null, productType?: string | null, productStatus?: string | null, orderId?: string | null, orderStatus?: string | null, surveyId?: any | null, resultsId?: string | null, evmContractAddress?: any | null, chainId: any, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, metadata: { __typename?: 'Metadata', title: string, description: string, media: string, mediaHash?: string | null, copies?: number | null, issuedAt?: any | null, expiresAt?: any | null, startsAt?: any | null, updatedAt?: any | null, extra?: string | null, reference?: string | null, referenceHash?: string | null } }> | null }> } };

export type NftUserGalleriesQueryVariables = Exact<{
  request: NftGalleriesQueryRequest;
}>;


export type NftUserGalleriesQuery = { __typename?: 'Query', nftUserGalleries: { __typename?: 'PaginatedNftGalleryResult', items: Array<{ __typename?: 'NftGallery', nftGalleryId: any, name: string, profileId: any, chainId?: any | null, createdAt: any, updatedAt?: any | null, items?: Array<{ __typename?: 'Erc721', nftId: any, contractName?: string | null, contractAddress: any, symbol: string, tokenId?: string | null, name: string, description: string, contentUri: string, chainId: any, collectionName: string, ercType: string, owners?: Array<{ __typename?: 'Owner', amount: number, address: any, profileId?: any | null }> | null, originalContent?: { __typename?: 'NFTContent', uri?: string | null, metaType?: string | null, animatedUrl?: string | null } | null } | { __typename?: 'Nep171', nftId: any, seriesId: number, price?: number | null, royalty?: number | null, creatorId?: any | null, sellerId?: any | null, ownerId?: any | null, productId?: number | null, productType?: string | null, productStatus?: string | null, orderId?: string | null, orderStatus?: string | null, surveyId?: any | null, resultsId?: string | null, evmContractAddress?: any | null, chainId: any, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, metadata: { __typename?: 'Metadata', title: string, description: string, media: string, mediaHash?: string | null, copies?: number | null, issuedAt?: any | null, expiresAt?: any | null, startsAt?: any | null, updatedAt?: any | null, extra?: string | null, reference?: string | null, referenceHash?: string | null } }> | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', totalCount?: number | null, next?: any | null } } };

export type NftsQueryVariables = Exact<{
  request: NftsRequest;
}>;


export type NftsQuery = { __typename?: 'Query', nfts: { __typename?: 'NftsResult', items: Array<{ __typename?: 'Erc721', nftId: any, contractName?: string | null, contractAddress: any, symbol: string, tokenId?: string | null, name: string, description: string, contentUri: string, chainId: any, collectionName: string, ercType: string, owners?: Array<{ __typename?: 'Owner', amount: number, address: any, profileId?: any | null }> | null, originalContent?: { __typename?: 'NFTContent', uri?: string | null, metaType?: string | null, animatedUrl?: string | null } | null } | { __typename?: 'Nep171', nftId: any, seriesId: number, price?: number | null, royalty?: number | null, creatorId?: any | null, sellerId?: any | null, ownerId?: any | null, productId?: number | null, productType?: string | null, productStatus?: string | null, orderId?: string | null, orderStatus?: string | null, surveyId?: any | null, resultsId?: string | null, evmContractAddress?: any | null, chainId: any, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, metadata: { __typename?: 'Metadata', title: string, description: string, media: string, mediaHash?: string | null, copies?: number | null, issuedAt?: any | null, expiresAt?: any | null, startsAt?: any | null, updatedAt?: any | null, extra?: string | null, reference?: string | null, referenceHash?: string | null } }>, pageInfo: { __typename?: 'PaginatedResultInfo', totalCount?: number | null, next?: any | null } } };

export type ProductQueryVariables = Exact<{
  request: ProductQueryRequest;
}>;


export type ProductQuery = { __typename?: 'Query', product?: { __typename?: 'MarketplaceProduct', productId: string, name: string, description: string, image?: string | null, productType: string, price?: number | null, productStatus: string, duration?: number | null, mediaId?: string | null, metadata?: string | null, whiteList?: string | null, sellerId?: any | null, ownerId?: string | null, chainId?: any | null, createdAt: any, updatedAt?: any | null } | null };

export type ProductsQueryVariables = Exact<{
  request: ProductsQueryRequest;
}>;


export type ProductsQuery = { __typename?: 'Query', products: { __typename?: 'PaginatedProductsResult', items: Array<{ __typename?: 'MarketplaceProduct', productId: string, name: string, description: string, image?: string | null, productType: string, price?: number | null, productStatus: string, duration?: number | null, mediaId?: string | null, metadata?: string | null, whiteList?: string | null, sellerId?: any | null, ownerId?: string | null, chainId?: any | null, createdAt: any, updatedAt?: any | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', totalCount?: number | null, next?: any | null } } };

export type SaleHistoryPerBusinessAnalyticsQueryVariables = Exact<{
  request: SaleHistoryPerBusinessRequest;
}>;


export type SaleHistoryPerBusinessAnalyticsQuery = { __typename?: 'Query', saleHistoryPerBusinessAnalytics?: { __typename?: 'SaleHistory', total?: number | null, items?: Array<{ __typename?: 'SaleItem', productId?: number | null, name?: string | null, description?: string | null, sellerId?: number | null, buyerId?: number | null, issuedAt?: any | null, orderAmount?: number | null, price?: number | null, orderStatus?: string | null } | null> | null } | null };

export type SearchBusinessQueryVariables = Exact<{
  request: SearchQueryRequest;
}>;


export type SearchBusinessQuery = { __typename?: 'Query', search: { __typename?: 'BusinessSearchResult', items: Array<{ __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', totalCount?: number | null, next?: any | null } } | { __typename?: 'EnduserSearchResult' } | { __typename?: 'MarketplaceSearchResult' } | { __typename?: 'NftSearchResult' } | { __typename?: 'SurveySearchResult' } | { __typename?: 'TutorialSearchResult' } };

export type SearchEndusersQueryVariables = Exact<{
  request: SearchQueryRequest;
}>;


export type SearchEndusersQuery = { __typename?: 'Query', search: { __typename?: 'BusinessSearchResult' } | { __typename?: 'EnduserSearchResult', items: Array<{ __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', totalCount?: number | null, next?: any | null } } | { __typename?: 'MarketplaceSearchResult' } | { __typename?: 'NftSearchResult' } | { __typename?: 'SurveySearchResult' } | { __typename?: 'TutorialSearchResult' } };

export type SearchMarketplaceQueryVariables = Exact<{
  request: SearchQueryRequest;
}>;


export type SearchMarketplaceQuery = { __typename?: 'Query', search: { __typename?: 'BusinessSearchResult' } | { __typename?: 'EnduserSearchResult' } | { __typename?: 'MarketplaceSearchResult', items: Array<{ __typename?: 'MarketplaceProduct', productId: string, name: string, description: string, image?: string | null, productType: string, price?: number | null, productStatus: string, duration?: number | null, mediaId?: string | null, metadata?: string | null, whiteList?: string | null, sellerId?: any | null, ownerId?: string | null, chainId?: any | null, createdAt: any, updatedAt?: any | null }>, pageInfo?: { __typename?: 'PaginatedResultInfo', next?: any | null } | null } | { __typename?: 'NftSearchResult' } | { __typename?: 'SurveySearchResult' } | { __typename?: 'TutorialSearchResult' } };

export type SearchNftsQueryVariables = Exact<{
  request: SearchQueryRequest;
}>;


export type SearchNftsQuery = { __typename?: 'Query', search: { __typename?: 'BusinessSearchResult' } | { __typename?: 'EnduserSearchResult' } | { __typename?: 'MarketplaceSearchResult' } | { __typename?: 'NftSearchResult', items: Array<{ __typename?: 'Erc721', nftId: any, contractName?: string | null, contractAddress: any, symbol: string, tokenId?: string | null, name: string, description: string, contentUri: string, chainId: any, collectionName: string, ercType: string, owners?: Array<{ __typename?: 'Owner', amount: number, address: any, profileId?: any | null }> | null, originalContent?: { __typename?: 'NFTContent', uri?: string | null, metaType?: string | null, animatedUrl?: string | null } | null } | { __typename?: 'Nep171', nftId: any, seriesId: number, price?: number | null, royalty?: number | null, creatorId?: any | null, sellerId?: any | null, ownerId?: any | null, productId?: number | null, productType?: string | null, productStatus?: string | null, orderId?: string | null, orderStatus?: string | null, surveyId?: any | null, resultsId?: string | null, evmContractAddress?: any | null, chainId: any, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, metadata: { __typename?: 'Metadata', title: string, description: string, media: string, mediaHash?: string | null, copies?: number | null, issuedAt?: any | null, expiresAt?: any | null, startsAt?: any | null, updatedAt?: any | null, extra?: string | null, reference?: string | null, referenceHash?: string | null } }>, pageInfo?: { __typename?: 'PaginatedResultInfo', next?: any | null } | null } | { __typename?: 'SurveySearchResult' } | { __typename?: 'TutorialSearchResult' } };

export type SearchSurveysQueryVariables = Exact<{
  request: SearchQueryRequest;
}>;


export type SearchSurveysQuery = { __typename?: 'Query', search: { __typename?: 'BusinessSearchResult' } | { __typename?: 'EnduserSearchResult' } | { __typename?: 'MarketplaceSearchResult' } | { __typename?: 'NftSearchResult' } | { __typename?: 'SurveySearchResult', items: Array<{ __typename?: 'Survey', surveyId: any, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, campaignType: SurveyCampaignType, fillingStatus?: string | null, rewardId?: string | null, rewardType?: string | null, cidHash?: any | null, tags?: Array<any | null> | null, claimId?: any | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, resultsId?: string | null, whiteList?: Array<any | null> | null, funded?: boolean | null, showQuestionNumbers?: string | null, pageNextText?: string | null, completeText?: string | null, showPrevButton?: boolean | null, firstPageIsStarted?: boolean | null, startSurveyText?: string | null, completedHtml?: string | null, showPreviewBeforeComplete?: string | null, privateKey?: string | null, publicKey?: string | null, createdAt: any, updatedAt?: any | null, publishedAt?: any | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null, elements?: Array<{ __typename?: 'BooleanElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'CommentElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'RadiogroupElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RankingElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RatingElement', name: string, title?: string | null, type: SurveyElementType, rateMax?: number | null, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'TextElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null }> | null }> | null, results?: Array<{ __typename?: 'SurveyResult', resultsId: string, result: any, claimId?: any | null, rewardId?: string | null, rewardType?: string | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, chainId?: any | null, score?: number | null, credibilityScore?: any | null, createdAt: any, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, resultsId?: string | null, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, funded?: boolean | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null }> | null } | null } | null> | null, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', next?: any | null } } | { __typename?: 'TutorialSearchResult' } };

export type SearchTutorialsQueryVariables = Exact<{
  request: SearchQueryRequest;
}>;


export type SearchTutorialsQuery = { __typename?: 'Query', search: { __typename?: 'BusinessSearchResult' } | { __typename?: 'EnduserSearchResult' } | { __typename?: 'MarketplaceSearchResult' } | { __typename?: 'NftSearchResult' } | { __typename?: 'SurveySearchResult' } | { __typename?: 'TutorialSearchResult', items: Array<{ __typename?: 'Survey', surveyId: any, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, campaignType: SurveyCampaignType, fillingStatus?: string | null, rewardId?: string | null, rewardType?: string | null, cidHash?: any | null, tags?: Array<any | null> | null, claimId?: any | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, resultsId?: string | null, whiteList?: Array<any | null> | null, funded?: boolean | null, showQuestionNumbers?: string | null, pageNextText?: string | null, completeText?: string | null, showPrevButton?: boolean | null, firstPageIsStarted?: boolean | null, startSurveyText?: string | null, completedHtml?: string | null, showPreviewBeforeComplete?: string | null, privateKey?: string | null, publicKey?: string | null, createdAt: any, updatedAt?: any | null, publishedAt?: any | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null, elements?: Array<{ __typename?: 'BooleanElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'CommentElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'RadiogroupElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RankingElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RatingElement', name: string, title?: string | null, type: SurveyElementType, rateMax?: number | null, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'TextElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null }> | null }> | null, results?: Array<{ __typename?: 'SurveyResult', resultsId: string, result: any, claimId?: any | null, rewardId?: string | null, rewardType?: string | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, chainId?: any | null, score?: number | null, credibilityScore?: any | null, createdAt: any, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, resultsId?: string | null, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, funded?: boolean | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null }> | null } | null } | null> | null, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', next?: any | null } } };

export type SubscriptionHistoryQueryVariables = Exact<{
  request: SubscriptionHistoryRequest;
}>;


export type SubscriptionHistoryQuery = { __typename?: 'Query', subscriptionHistory?: Array<{ __typename?: 'UserSubscription', id?: string | null, subscriptionLevel: string, startDate?: string | null, endDate?: string | null } | null> | null };

export type SubscriptionLevelQueryVariables = Exact<{
  request: SubscriptionLevelRequest;
}>;


export type SubscriptionLevelQuery = { __typename?: 'Query', subscriptionLevel?: { __typename?: 'UserSubscription', id?: string | null, subscriptionLevel: string } | null };

export type SurveyQueryVariables = Exact<{
  request: SingleSurveyQueryRequest;
}>;


export type SurveyQuery = { __typename?: 'Query', survey?: { __typename?: 'Survey', surveyId: any, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, campaignType: SurveyCampaignType, fillingStatus?: string | null, rewardId?: string | null, rewardType?: string | null, cidHash?: any | null, tags?: Array<any | null> | null, claimId?: any | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, resultsId?: string | null, whiteList?: Array<any | null> | null, funded?: boolean | null, showQuestionNumbers?: string | null, pageNextText?: string | null, completeText?: string | null, showPrevButton?: boolean | null, firstPageIsStarted?: boolean | null, startSurveyText?: string | null, completedHtml?: string | null, showPreviewBeforeComplete?: string | null, privateKey?: string | null, publicKey?: string | null, createdAt: any, updatedAt?: any | null, publishedAt?: any | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null, elements?: Array<{ __typename?: 'BooleanElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'CommentElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'RadiogroupElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RankingElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RatingElement', name: string, title?: string | null, type: SurveyElementType, rateMax?: number | null, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'TextElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null }> | null }> | null, results?: Array<{ __typename?: 'SurveyResult', resultsId: string, result: any, claimId?: any | null, rewardId?: string | null, rewardType?: string | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, chainId?: any | null, score?: number | null, credibilityScore?: any | null, createdAt: any, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, resultsId?: string | null, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, funded?: boolean | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null }> | null } | null } | null> | null, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null } | null };

export type SurveyAnalyticsQueryVariables = Exact<{
  request: SurveyAnalyticsRequest;
}>;


export type SurveyAnalyticsQuery = { __typename?: 'Query', surveyAnalytics: { __typename?: 'ChartDataLabels', labels?: Array<string> | null, data?: Array<number> | null, totalSurveys?: number | null, totalCompletions?: number | null, totalBusiness?: number | null, avgCompletionTime?: number | null, totalPageviews?: number | null, rankingCompletions?: Array<{ __typename?: 'RankTopCompletions', surveyId?: string | null, completions?: number | null } | null> | null } };

export type SurveyGatingQueryVariables = Exact<{
  request: SurveyGatingQueryRequest;
}>;


export type SurveyGatingQuery = { __typename?: 'Query', surveyGating: { __typename?: 'SurveyGating', gateId: string, surveyId: number, profileId?: number | null, requirements: any, createdAt: any, updatedAt?: any | null } };

export type SurveyReferralsQueryVariables = Exact<{
  request: SurveyReferralQueryRequest;
}>;


export type SurveyReferralsQuery = { __typename?: 'Query', surveyReferrals: { __typename?: 'PaginatedSurveyReferralResult', items: Array<{ __typename?: 'SurveyReferral', referralId: string, surveyId?: any | null, profileId: any, invitedEmail: any, invitedStatus: string, invitedId?: any | null, referralStatus: string, accountStatus?: AccountStatus | null, displayName?: string | null, email?: any | null, avatar?: string | null, createdAt: any, updatedAt?: any | null, invitedAt?: any | null, completedAt?: any | null }> } };

export type SurveyResultsQueryVariables = Exact<{
  request: SurveyResultQueryRequest;
}>;


export type SurveyResultsQuery = { __typename?: 'Query', surveyResults: { __typename?: 'PaginatedSurveyResultResult', items: Array<{ __typename?: 'SurveyResult', resultsId: string, result: any, claimId?: any | null, rewardId?: string | null, rewardType?: string | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, chainId?: any | null, score?: number | null, credibilityScore?: any | null, createdAt: any, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, resultsId?: string | null, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, funded?: boolean | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null }> | null } | null }> } };

export type SurveyRewardQueryVariables = Exact<{
  request: SurveyRewardQueryRequest;
}>;


export type SurveyRewardQuery = { __typename?: 'Query', surveyReward?: { __typename?: 'SurveyReward', rewardId: string, rewardType: string, mediaId?: string | null, surveyId: any, profileId: any, resultsId?: string | null, chainId?: any | null, createdAt: any, updatedAt?: any | null, mediaPrize?: { __typename?: 'Erc721', nftId: any, contractName?: string | null, contractAddress: any, symbol: string, tokenId?: string | null, name: string, description: string, contentUri: string, chainId: any, collectionName: string, ercType: string, owners?: Array<{ __typename?: 'Owner', amount: number, address: any, profileId?: any | null }> | null, originalContent?: { __typename?: 'NFTContent', uri?: string | null, metaType?: string | null, animatedUrl?: string | null } | null } | { __typename?: 'Nep171', nftId: any, seriesId: number, price?: number | null, royalty?: number | null, creatorId?: any | null, sellerId?: any | null, ownerId?: any | null, productId?: number | null, productType?: string | null, productStatus?: string | null, orderId?: string | null, orderStatus?: string | null, surveyId?: any | null, resultsId?: string | null, evmContractAddress?: any | null, chainId: any, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, metadata: { __typename?: 'Metadata', title: string, description: string, media: string, mediaHash?: string | null, copies?: number | null, issuedAt?: any | null, expiresAt?: any | null, startsAt?: any | null, updatedAt?: any | null, extra?: string | null, reference?: string | null, referenceHash?: string | null } } | null } | null };

export type SurveyRewardErc721QueryVariables = Exact<{
  request: SurveyRewardQueryRequest;
}>;


export type SurveyRewardErc721Query = { __typename?: 'Query', surveyRewardErc721?: { __typename?: 'SurveyReward', rewardId: string, rewardType: string, mediaId?: string | null, surveyId: any, profileId: any, resultsId?: string | null, chainId?: any | null, createdAt: any, updatedAt?: any | null, mediaPrize?: { __typename?: 'Erc721', nftId: any, contractName?: string | null, contractAddress: any, symbol: string, tokenId?: string | null, name: string, description: string, contentUri: string, chainId: any, collectionName: string, ercType: string, owners?: Array<{ __typename?: 'Owner', amount: number, address: any, profileId?: any | null }> | null, originalContent?: { __typename?: 'NFTContent', uri?: string | null, metaType?: string | null, animatedUrl?: string | null } | null } | { __typename?: 'Nep171', nftId: any, seriesId: number, price?: number | null, royalty?: number | null, creatorId?: any | null, sellerId?: any | null, ownerId?: any | null, productId?: number | null, productType?: string | null, productStatus?: string | null, orderId?: string | null, orderStatus?: string | null, surveyId?: any | null, resultsId?: string | null, evmContractAddress?: any | null, chainId: any, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, metadata: { __typename?: 'Metadata', title: string, description: string, media: string, mediaHash?: string | null, copies?: number | null, issuedAt?: any | null, expiresAt?: any | null, startsAt?: any | null, updatedAt?: any | null, extra?: string | null, reference?: string | null, referenceHash?: string | null } } | null } | null };

export type SurveysQueryVariables = Exact<{
  request: SurveyQueryRequest;
}>;


export type SurveysQuery = { __typename?: 'Query', surveys: { __typename?: 'PaginatedSurveyResult', items: Array<{ __typename?: 'Survey', surveyId: any, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, campaignType: SurveyCampaignType, fillingStatus?: string | null, rewardId?: string | null, rewardType?: string | null, cidHash?: any | null, tags?: Array<any | null> | null, claimId?: any | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, resultsId?: string | null, whiteList?: Array<any | null> | null, funded?: boolean | null, showQuestionNumbers?: string | null, pageNextText?: string | null, completeText?: string | null, showPrevButton?: boolean | null, firstPageIsStarted?: boolean | null, startSurveyText?: string | null, completedHtml?: string | null, showPreviewBeforeComplete?: string | null, privateKey?: string | null, publicKey?: string | null, createdAt: any, updatedAt?: any | null, publishedAt?: any | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null, elements?: Array<{ __typename?: 'BooleanElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'CommentElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'RadiogroupElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RankingElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RatingElement', name: string, title?: string | null, type: SurveyElementType, rateMax?: number | null, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'TextElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null }> | null }> | null, results?: Array<{ __typename?: 'SurveyResult', resultsId: string, result: any, claimId?: any | null, rewardId?: string | null, rewardType?: string | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, chainId?: any | null, score?: number | null, credibilityScore?: any | null, createdAt: any, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, resultsId?: string | null, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, funded?: boolean | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null }> | null } | null } | null> | null, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null }> } };

export type TopBusinessQueryVariables = Exact<{
  request: TopBusinessRequest;
}>;


export type TopBusinessQuery = { __typename?: 'Query', topBusiness: { __typename?: 'ChartDataLabels', labels?: Array<string> | null, data?: Array<number> | null, totalSurveys?: number | null, totalCompletions?: number | null, totalBusiness?: number | null, avgCompletionTime?: number | null, totalPageviews?: number | null, rankingCompletions?: Array<{ __typename?: 'RankTopCompletions', surveyId?: string | null, completions?: number | null } | null> | null } };

export type UserQueryVariables = Exact<{
  request: SingleProfileQueryRequest;
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null };

export type UserByIssuerQueryVariables = Exact<{
  request: IssuerProfileQueryRequest;
}>;


export type UserByIssuerQuery = { __typename?: 'Query', userbyIssuer?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null };

export type UserByWalletIssuerQueryVariables = Exact<{
  request: Iden3IssuerProfileQueryRequest;
}>;


export type UserByWalletIssuerQuery = { __typename?: 'Query', userbyWalletIssuer?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null };

export type UserContractQueryVariables = Exact<{
  request: UserContractQueryRequest;
}>;


export type UserContractQuery = { __typename?: 'Query', userContract?: { __typename?: 'UserContract', contractId: number, profileId: number, surveyId?: number | null, network?: string | null, contractType?: string | null, contractName?: string | null, contractAddress?: any | null, ownerAddress?: string | null, funcCall?: string | null, input?: string | null, output?: string | null, createdAt: any } | null };

export type UserContractsQueryVariables = Exact<{
  request: UserContractsQueryRequest;
}>;


export type UserContractsQuery = { __typename?: 'Query', userContracts: { __typename?: 'PaginatedUserContractResult', items: Array<{ __typename?: 'UserContract', contractId: number, profileId: number, surveyId?: number | null, network?: string | null, contractType?: string | null, contractName?: string | null, contractAddress?: any | null, ownerAddress?: string | null, funcCall?: string | null, input?: string | null, output?: string | null, createdAt: any }> } };

export type UserNftsQueryVariables = Exact<{
  request: NftsRequest;
}>;


export type UserNftsQuery = { __typename?: 'Query', userNfts: { __typename?: 'NftsResult', items: Array<{ __typename?: 'Erc721', nftId: any, contractName?: string | null, contractAddress: any, symbol: string, tokenId?: string | null, name: string, description: string, contentUri: string, chainId: any, collectionName: string, ercType: string, owners?: Array<{ __typename?: 'Owner', amount: number, address: any, profileId?: any | null }> | null, originalContent?: { __typename?: 'NFTContent', uri?: string | null, metaType?: string | null, animatedUrl?: string | null } | null } | { __typename?: 'Nep171', nftId: any, seriesId: number, price?: number | null, royalty?: number | null, creatorId?: any | null, sellerId?: any | null, ownerId?: any | null, productId?: number | null, productType?: string | null, productStatus?: string | null, orderId?: string | null, orderStatus?: string | null, surveyId?: any | null, resultsId?: string | null, evmContractAddress?: any | null, chainId: any, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, metadata: { __typename?: 'Metadata', title: string, description: string, media: string, mediaHash?: string | null, copies?: number | null, issuedAt?: any | null, expiresAt?: any | null, startsAt?: any | null, updatedAt?: any | null, extra?: string | null, reference?: string | null, referenceHash?: string | null } }> } };

export type UserRefferalsQueryVariables = Exact<{
  request: UserRefferalQueryRequest;
}>;


export type UserRefferalsQuery = { __typename?: 'Query', userRefferals: { __typename?: 'PaginatedUserRefferalResult', items: Array<{ __typename?: 'UserRefferal', refferalId: string, surveyId?: any | null, profileId: any, invitedEmail: any, invitedStatus: string, invitedId?: any | null, refferalStatus: string, accountStatus?: AccountStatus | null, displayName?: string | null, email?: any | null, avatar?: string | null, createdAt: any, updatedAt?: any | null, invitedAt?: any | null, completedAt?: any | null }> } };

export type UserTransactionsQueryVariables = Exact<{
  request: UserTransactionQueryRequest;
}>;


export type UserTransactionsQuery = { __typename?: 'Query', userTransactions: { __typename?: 'PaginatedUserTransactionResult', items: Array<{ __typename?: 'TransactionCredit', transactionId: string, orderId?: string | null, amount: number, transactionHash?: any | null, transactionType: TransactionType, transactionStatus: TransactionStatus, transactionSource?: string | null, createdAt: string, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, campaignType: SurveyCampaignType, fillingStatus?: string | null, rewardId?: string | null, rewardType?: string | null, cidHash?: any | null, tags?: Array<any | null> | null, claimId?: any | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, mediaClaimedFrom?: any | null, resultsId?: string | null, whiteList?: Array<any | null> | null, funded?: boolean | null, showQuestionNumbers?: string | null, pageNextText?: string | null, completeText?: string | null, showPrevButton?: boolean | null, firstPageIsStarted?: boolean | null, startSurveyText?: string | null, completedHtml?: string | null, showPreviewBeforeComplete?: string | null, privateKey?: string | null, publicKey?: string | null, createdAt: any, updatedAt?: any | null, publishedAt?: any | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null, elements?: Array<{ __typename?: 'BooleanElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'CommentElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'RadiogroupElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RankingElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null, choices?: Array<{ __typename?: 'TextValueType', text: string, value: string } | { __typename?: 'ValueType', value: string }> | null } | { __typename?: 'RatingElement', name: string, title?: string | null, type: SurveyElementType, rateMax?: number | null, points?: number | null, isRequired: boolean, correctAnswer?: string | null } | { __typename?: 'TextElement', name: string, title?: string | null, type: SurveyElementType, points?: number | null, isRequired: boolean, correctAnswer?: string | null }> | null }> | null, results?: Array<{ __typename?: 'SurveyResult', resultsId: string, result: any, claimId?: any | null, rewardId?: string | null, rewardType?: string | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, chainId?: any | null, score?: number | null, credibilityScore?: any | null, createdAt: any, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, resultsId?: string | null, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, funded?: boolean | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null }> | null } | null } | null> | null, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null } | null, surveyResult?: { __typename?: 'SurveyResult', resultsId: string, result: any, claimId?: any | null, rewardId?: string | null, rewardType?: string | null, rewardClaimed?: boolean | null, rewardClaimedAt?: any | null, mediaClaimed?: boolean | null, mediaClaimedAt?: any | null, chainId?: any | null, score?: number | null, credibilityScore?: any | null, createdAt: any, user?: { __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null } | null, survey?: { __typename?: 'Survey', surveyId: any, resultsId?: string | null, title?: string | null, description?: string | null, logo?: string | null, surveyType: SurveyType, surveyStatus: SurveyStatus, funded?: boolean | null, pages?: Array<{ __typename?: 'SurveyPage', name: string, title?: string | null }> | null } | null } | null }> } };

export type UserWalletQueryVariables = Exact<{
  request: UserWalletQueryRequest;
}>;


export type UserWalletQuery = { __typename?: 'Query', userWallet?: { __typename?: 'Wallet', walletId: string, credit: number, recipient?: any | null, nearAddress?: any | null, auroraAddress?: any | null, avaxAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null };

export type UsersQueryVariables = Exact<{
  request: ProfileQueryRequest;
}>;


export type UsersQuery = { __typename?: 'Query', users: { __typename?: 'PaginatedUserResult', items: Array<{ __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', totalCount?: number | null, next?: any | null } } };

export type UsersAdminQueryVariables = Exact<{
  request: ProfileQueryRequest;
}>;


export type UsersAdminQuery = { __typename?: 'Query', usersAdmin: { __typename?: 'PaginatedUserResult', items: Array<{ __typename?: 'User', profileId: any, firstName?: string | null, lastName?: string | null, businessName?: string | null, displayName?: string | null, bio?: string | null, location?: string | null, age?: number | null, gender?: string | null, email?: any | null, avatar?: any | null, category?: any | null, interests?: Array<any | null> | null, accountType: AccountType, accountStatus: AccountStatus, inviter?: any | null, verified?: boolean | null, boosted?: boolean | null, visibility: Visibility, issuer?: string | null, iden3issuer?: string | null, elegibleSurveys?: number | null, publishedSurveys?: number | null, apiKey?: string | null, kycAttemptId?: string | null, createdAt?: any | null, lastLoginAt?: any | null, wallet?: { __typename?: 'Wallet', walletId: string, recipient?: any | null, credit: number, nearAddress?: any | null, avaxAddress?: any | null, auroraAddress?: any | null, polygonAddress?: any | null, moonbeamAddress?: any | null, ethereumAddress?: any | null, tonAddress?: string | null, cronosAddress?: any | null, bobaAddress?: any | null, bscAddress?: any | null, opbnbAddress?: any | null, filecoinAddress?: any | null, baseAddress?: any | null, hederaAddress?: any | null, stellarAddress?: string | null, solanaAddress?: string | null, polkadotAddress?: string | null, icpAddress?: string | null, bitfinityAddress?: any | null, stripeAccountId?: any | null, createdAt: any, updatedAt?: any | null } | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', totalCount?: number | null, next?: any | null } } };

export type VerifyQueryVariables = Exact<{
  request: VerifyRequest;
}>;


export type VerifyQuery = { __typename?: 'Query', verify: boolean };

export type PingQueryVariables = Exact<{ [key: string]: never; }>;


export type PingQuery = { __typename?: 'Query', ping: string };

export type NftDataUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NftDataUpdatedSubscription = { __typename?: 'Subscription', nftDataUpdated?: Array<{ __typename?: 'Nep171', nftId: any, seriesId: number, royalty?: number | null, ownerId?: any | null, metadata: { __typename?: 'Metadata', title: string, description: string, media: string, mediaHash?: string | null, copies?: number | null, issuedAt?: any | null, expiresAt?: any | null, startsAt?: any | null, updatedAt?: any | null, extra?: string | null, reference?: string | null, referenceHash?: string | null } } | null> | null };



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

/** Mapping of union types */
export type ResolversUnionTypes = {
  NFT: ( Erc721 ) | ( Nep171 );
  SearchResult: ( BusinessSearchResult ) | ( EnduserSearchResult ) | ( MarketplaceSearchResult ) | ( Omit<NftSearchResult, 'items'> & { items: Array<ResolversTypes['NFT']> } ) | ( SurveySearchResult ) | ( TutorialSearchResult );
  SurveyElement: ( BooleanElement ) | ( CommentElement ) | ( Omit<RadiogroupElement, 'choices'> & { choices?: Maybe<Array<ResolversTypes['SurveyElementItemValueType']>> } ) | ( Omit<RankingElement, 'choices'> & { choices?: Maybe<Array<ResolversTypes['SurveyElementItemValueType']>> } ) | ( RatingElement ) | ( TextElement );
  SurveyElementItemValueType: ( TextValueType ) | ( ValueType );
};

/** Mapping of union parent types */
export type ResolversUnionParentTypes = {
  NFT: ( Erc721 ) | ( Nep171 );
  SearchResult: ( BusinessSearchResult ) | ( EnduserSearchResult ) | ( MarketplaceSearchResult ) | ( Omit<NftSearchResult, 'items'> & { items: Array<ResolversParentTypes['NFT']> } ) | ( SurveySearchResult ) | ( TutorialSearchResult );
  SurveyElement: ( BooleanElement ) | ( CommentElement ) | ( Omit<RadiogroupElement, 'choices'> & { choices?: Maybe<Array<ResolversParentTypes['SurveyElementItemValueType']>> } ) | ( Omit<RankingElement, 'choices'> & { choices?: Maybe<Array<ResolversParentTypes['SurveyElementItemValueType']>> } ) | ( RatingElement ) | ( TextElement );
  SurveyElementItemValueType: ( TextValueType ) | ( ValueType );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AccessGating: ResolverTypeWrapper<Scalars['AccessGating']>;
  AccountStatus: AccountStatus;
  AccountType: AccountType;
  AllCryptoRewardInUSD: ResolverTypeWrapper<AllCryptoRewardInUsd>;
  AnonymousUser: ResolverTypeWrapper<AnonymousUser>;
  AnonymousUserQueryRequest: AnonymousUserQueryRequest;
  AuthChallengeResult: ResolverTypeWrapper<AuthChallengeResult>;
  AuthenticationResult: ResolverTypeWrapper<AuthenticationResult>;
  AverageInviteResponseTime: ResolverTypeWrapper<AverageInviteResponseTime>;
  AverageSurveyCompletionRatesByUser: ResolverTypeWrapper<AverageSurveyCompletionRatesByUser>;
  AverageTimeCompletingSurvey: ResolverTypeWrapper<AverageTimeCompletingSurvey>;
  AverageTimeDraftingSurvey: ResolverTypeWrapper<AverageTimeDraftingSurvey>;
  AverageTimePerSession: ResolverTypeWrapper<AverageTimePerSession>;
  AverageTimeWithdrawRewards: ResolverTypeWrapper<AverageTimeWithdrawRewards>;
  AverageUserRatingCompletedSurveys: ResolverTypeWrapper<AverageUserRatingCompletedSurveys>;
  AverageValueAccruedCashViaStripe: ResolverTypeWrapper<AverageValueAccruedCashViaStripe>;
  AverageValueAccruedCryptocurrency: ResolverTypeWrapper<AverageValueAccruedCryptocurrency>;
  AverageValueSpentNFTMarketplace: ResolverTypeWrapper<AverageValueSpentNftMarketplace>;
  BanUnbanUserRequest: BanUnbanUserRequest;
  BlockchainData: ResolverTypeWrapper<Scalars['BlockchainData']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BooleanElement: ResolverTypeWrapper<BooleanElement>;
  BusinessCategory: ResolverTypeWrapper<Scalars['BusinessCategory']>;
  BusinessSearchResult: ResolverTypeWrapper<BusinessSearchResult>;
  Campaign: ResolverTypeWrapper<Campaign>;
  CategoriesRequest: CategoriesRequest;
  ChainId: ResolverTypeWrapper<Scalars['ChainId']>;
  ChallengeRequest: ChallengeRequest;
  ChartDataLabels: ResolverTypeWrapper<ChartDataLabels>;
  Cid: ResolverTypeWrapper<Scalars['Cid']>;
  ClaimId: ResolverTypeWrapper<Scalars['ClaimId']>;
  ClaimMarketplaceOrderMediaRequest: ClaimMarketplaceOrderMediaRequest;
  ClaimSurveyMediaRequest: ClaimSurveyMediaRequest;
  ClaimSurveyRewardRequest: ClaimSurveyRewardRequest;
  CommentElement: ResolverTypeWrapper<CommentElement>;
  CompletionTimeOfDay: ResolverTypeWrapper<CompletionTimeOfDay>;
  ContentEncryptionKey: ResolverTypeWrapper<Scalars['ContentEncryptionKey']>;
  ContractAddress: ResolverTypeWrapper<Scalars['ContractAddress']>;
  CorrelationSurveyComplexityAndCompletion: ResolverTypeWrapper<CorrelationSurveyComplexityAndCompletion>;
  CreateAnonymousUserRequest: CreateAnonymousUserRequest;
  CreateEmbedSurveyResultRequest: CreateEmbedSurveyResultRequest;
  CreateFillingQueueRequest: CreateFillingQueueRequest;
  CreateMarketplaceOrderRequest: CreateMarketplaceOrderRequest;
  CreateProductRequest: CreateProductRequest;
  CreateProfileRequest: CreateProfileRequest;
  CreateSurveyGatingRequest: CreateSurveyGatingRequest;
  CreateSurveyReferralRequest: CreateSurveyReferralRequest;
  CreateSurveyResultRequest: CreateSurveyResultRequest;
  CreateSurveyRewardRequest: CreateSurveyRewardRequest;
  CreateUserBoostRequest: CreateUserBoostRequest;
  CreateUserContractRequest: CreateUserContractRequest;
  CreateUserMembershipRequest: CreateUserMembershipRequest;
  CreateUserRefferalRequest: CreateUserRefferalRequest;
  CreateWalletRequest: CreateWalletRequest;
  CredibilityScore: ResolverTypeWrapper<Scalars['CredibilityScore']>;
  CryptoIssued: ResolverTypeWrapper<CryptoIssued>;
  CryptoIssuedAllBlockchains: ResolverTypeWrapper<CryptoIssuedAllBlockchains>;
  CryptoReward: ResolverTypeWrapper<CryptoReward>;
  Cursor: ResolverTypeWrapper<Scalars['Cursor']>;
  CustomFiltersTypes: CustomFiltersTypes;
  DataBusiness: ResolverTypeWrapper<DataBusiness>;
  DataMarketplace: ResolverTypeWrapper<DataMarketplace>;
  DataUser: ResolverTypeWrapper<DataUser>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DeleteFillingQueueRequest: DeleteFillingQueueRequest;
  DeleteProductRequest: DeleteProductRequest;
  DeleteSurveyResultRequest: DeleteSurveyResultRequest;
  DeleteTransactionCreditRequest: DeleteTransactionCreditRequest;
  DeleteWalletRequest: DeleteWalletRequest;
  Did: ResolverTypeWrapper<Scalars['Did']>;
  Email: ResolverTypeWrapper<Scalars['Email']>;
  EmbedSurveyResult: ResolverTypeWrapper<EmbedSurveyResult>;
  EmbedSurveyResultQueryRequest: EmbedSurveyResultQueryRequest;
  EncryptedValueScalar: ResolverTypeWrapper<Scalars['EncryptedValueScalar']>;
  EnduserSearchResult: ResolverTypeWrapper<EnduserSearchResult>;
  Erc721: ResolverTypeWrapper<Erc721>;
  EvmAddress: ResolverTypeWrapper<Scalars['EvmAddress']>;
  FastestCompleteSurvey: ResolverTypeWrapper<FastestCompleteSurvey>;
  FastestDraftSurvey: ResolverTypeWrapper<FastestDraftSurvey>;
  FillingQueue: ResolverTypeWrapper<FillingQueue>;
  FillingQueueQueryRequest: FillingQueueQueryRequest;
  FillingStatus: FillingStatus;
  FillingType: FillingType;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  GoodsOwnedMedia: ResolverTypeWrapper<GoodsOwnedMedia>;
  HighestAverageSurveyCompletionRate: ResolverTypeWrapper<HighestAverageSurveyCompletionRate>;
  HighestConversionRate: ResolverTypeWrapper<HighestConversionRate>;
  HighestNumberOfConsecutiveDaysWithSurveyCompletions: ResolverTypeWrapper<HighestNumberOfConsecutiveDaysWithSurveyCompletions>;
  HighestNumberOfParticipantsEngaged: ResolverTypeWrapper<HighestNumberOfParticipantsEngaged>;
  HighestNumberOfSuccessfulSurveyCampaigns: ResolverTypeWrapper<HighestNumberOfSuccessfulSurveyCampaigns>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Iden3IssuerProfileQueryRequest: Iden3IssuerProfileQueryRequest;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  InternalSurveyId: ResolverTypeWrapper<Scalars['InternalSurveyId']>;
  InviteUserRequest: InviteUserRequest;
  IssuerProfileQueryRequest: IssuerProfileQueryRequest;
  Jwt: ResolverTypeWrapper<Scalars['Jwt']>;
  LeaderboardEntriesRequest: LeaderboardEntriesRequest;
  LeaderboardEntriesResult: ResolverTypeWrapper<LeaderboardEntriesResult>;
  LeaderboardEntry: ResolverTypeWrapper<LeaderboardEntry>;
  LimitScalar: ResolverTypeWrapper<Scalars['LimitScalar']>;
  Locale: ResolverTypeWrapper<Scalars['Locale']>;
  MarketplaceOrder: ResolverTypeWrapper<MarketplaceOrder>;
  MarketplaceOrderQueryRequest: MarketplaceOrderQueryRequest;
  MarketplaceOrdersQueryRequest: MarketplaceOrdersQueryRequest;
  MarketplaceProduct: ResolverTypeWrapper<MarketplaceProduct>;
  MarketplaceRequest: MarketplaceRequest;
  MarketplaceSearchResult: ResolverTypeWrapper<MarketplaceSearchResult>;
  Media: ResolverTypeWrapper<Media>;
  MediaBoughtAndSold: ResolverTypeWrapper<MediaBoughtAndSold>;
  MediaBoughtAndSoldRequest: MediaBoughtAndSoldRequest;
  MediaSold: ResolverTypeWrapper<MediaSold>;
  MediaType: MediaType;
  Metadata: ResolverTypeWrapper<Metadata>;
  MimeType: ResolverTypeWrapper<Scalars['MimeType']>;
  MostActiveParticipationInSpecificTypesOfSurveys: ResolverTypeWrapper<MostActiveParticipationInSpecificTypesOfSurveys>;
  MostCashValueIssuedViaSurveysViaStripe: ResolverTypeWrapper<MostCashValueIssuedViaSurveysViaStripe>;
  MostCommonSurveyLengthPreferred: ResolverTypeWrapper<MostCommonSurveyLengthPreferred>;
  MostCommonTimeOfDaySurveyCompletitons: ResolverTypeWrapper<MostCommonTimeOfDaySurveyCompletitons>;
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
  Mutation: ResolverTypeWrapper<{}>;
  NFT: ResolverTypeWrapper<ResolversUnionTypes['NFT']>;
  NFTContent: ResolverTypeWrapper<NftContent>;
  NFTMarketplacePurchaseHistory: ResolverTypeWrapper<NftMarketplacePurchaseHistory>;
  NearAddress: ResolverTypeWrapper<Scalars['NearAddress']>;
  Nep171: ResolverTypeWrapper<Nep171>;
  NftGalleriesQueryRequest: NftGalleriesQueryRequest;
  NftGalleriesRequest: NftGalleriesRequest;
  NftGallery: ResolverTypeWrapper<Omit<NftGallery, 'items'> & { items?: Maybe<Array<ResolversTypes['NFT']>> }>;
  NftGalleryCreateRequest: NftGalleryCreateRequest;
  NftGalleryDeleteRequest: NftGalleryDeleteRequest;
  NftGalleryId: ResolverTypeWrapper<Scalars['NftGalleryId']>;
  NftGalleryName: ResolverTypeWrapper<Scalars['NftGalleryName']>;
  NftGalleryUpdateInfoRequest: NftGalleryUpdateInfoRequest;
  NftGalleryUpdateItemOrderRequest: NftGalleryUpdateItemOrderRequest;
  NftGalleryUpdateItemsRequest: NftGalleryUpdateItemsRequest;
  NftId: ResolverTypeWrapper<Scalars['NftId']>;
  NftImage: ResolverTypeWrapper<NftImage>;
  NftInput: NftInput;
  NftOwnershipChallenge: NftOwnershipChallenge;
  NftOwnershipChallengeRequest: NftOwnershipChallengeRequest;
  NftOwnershipChallengeResult: ResolverTypeWrapper<NftOwnershipChallengeResult>;
  NftOwnershipId: ResolverTypeWrapper<Scalars['NftOwnershipId']>;
  NftSearchResult: ResolverTypeWrapper<Omit<NftSearchResult, 'items'> & { items: Array<ResolversTypes['NFT']> }>;
  NftUpdateItemOrder: NftUpdateItemOrder;
  NftsRequest: NftsRequest;
  NftsResult: ResolverTypeWrapper<Omit<NftsResult, 'items'> & { items: Array<ResolversTypes['NFT']> }>;
  Nonce: ResolverTypeWrapper<Scalars['Nonce']>;
  NotificationId: ResolverTypeWrapper<Scalars['NotificationId']>;
  OnBoardingStatus: OnBoardingStatus;
  OpenEndedSurveys: ResolverTypeWrapper<OpenEndedSurveys>;
  Owner: ResolverTypeWrapper<Owner>;
  Pageview: ResolverTypeWrapper<Pageview>;
  PaginatedEmbedSurveyResult: ResolverTypeWrapper<PaginatedEmbedSurveyResult>;
  PaginatedEmbedSurveyResultResult: ResolverTypeWrapper<PaginatedEmbedSurveyResultResult>;
  PaginatedFillingQueueResult: ResolverTypeWrapper<PaginatedFillingQueueResult>;
  PaginatedMarketplaceOrdersResult: ResolverTypeWrapper<PaginatedMarketplaceOrdersResult>;
  PaginatedNftGalleryResult: ResolverTypeWrapper<PaginatedNftGalleryResult>;
  PaginatedProductsResult: ResolverTypeWrapper<PaginatedProductsResult>;
  PaginatedResultInfo: ResolverTypeWrapper<PaginatedResultInfo>;
  PaginatedSurveyReferralResult: ResolverTypeWrapper<PaginatedSurveyReferralResult>;
  PaginatedSurveyResult: ResolverTypeWrapper<PaginatedSurveyResult>;
  PaginatedSurveyResultResult: ResolverTypeWrapper<PaginatedSurveyResultResult>;
  PaginatedUserContractResult: ResolverTypeWrapper<PaginatedUserContractResult>;
  PaginatedUserRefferalResult: ResolverTypeWrapper<PaginatedUserRefferalResult>;
  PaginatedUserResult: ResolverTypeWrapper<PaginatedUserResult>;
  PaginatedUserTransactionResult: ResolverTypeWrapper<PaginatedUserTransactionResult>;
  PaymentMethods: PaymentMethods;
  ProductQueryRequest: ProductQueryRequest;
  ProductsQueryRequest: ProductsQueryRequest;
  ProfileId: ResolverTypeWrapper<Scalars['ProfileId']>;
  ProfileQueryRequest: ProfileQueryRequest;
  PurchaseAmountTotals: ResolverTypeWrapper<PurchaseAmountTotals>;
  PurchaseHistory: ResolverTypeWrapper<PurchaseHistory>;
  PurchaseHistoryPerUserRequest: PurchaseHistoryPerUserRequest;
  PurchaseInfoHistory: ResolverTypeWrapper<PurchaseInfoHistory>;
  Query: ResolverTypeWrapper<{}>;
  Question: ResolverTypeWrapper<Question>;
  RadiogroupElement: ResolverTypeWrapper<Omit<RadiogroupElement, 'choices'> & { choices?: Maybe<Array<ResolversTypes['SurveyElementItemValueType']>> }>;
  RankTopCompletions: ResolverTypeWrapper<RankTopCompletions>;
  RankedTagsCompletedSurveys: ResolverTypeWrapper<RankedTagsCompletedSurveys>;
  RankedTagsIssuedSurveys: ResolverTypeWrapper<RankedTagsIssuedSurveys>;
  RankingElement: ResolverTypeWrapper<Omit<RankingElement, 'choices'> & { choices?: Maybe<Array<ResolversTypes['SurveyElementItemValueType']>> }>;
  Rating: ResolverTypeWrapper<Rating>;
  RatingElement: ResolverTypeWrapper<RatingElement>;
  RefreshRequest: RefreshRequest;
  RefundMarketplaceOrderRequest: RefundMarketplaceOrderRequest;
  RegistryUserPrizeRequest: RegistryUserPrizeRequest;
  Reward: ResolverTypeWrapper<Reward>;
  SaleHistory: ResolverTypeWrapper<SaleHistory>;
  SaleHistoryPerBusinessRequest: SaleHistoryPerBusinessRequest;
  SaleItem: ResolverTypeWrapper<SaleItem>;
  ScoreSurveyResultRequest: ScoreSurveyResultRequest;
  Search: ResolverTypeWrapper<Scalars['Search']>;
  SearchQueryRequest: SearchQueryRequest;
  SearchRequestTypes: SearchRequestTypes;
  SearchResult: ResolverTypeWrapper<ResolversUnionTypes['SearchResult']>;
  Signature: ResolverTypeWrapper<Scalars['Signature']>;
  SignedAuthChallenge: SignedAuthChallenge;
  SingleProfileQueryRequest: SingleProfileQueryRequest;
  SingleSurveyQueryRequest: SingleSurveyQueryRequest;
  SlowestCompleteSurvey: ResolverTypeWrapper<SlowestCompleteSurvey>;
  SlowestTimeDraftSurvey: ResolverTypeWrapper<SlowestTimeDraftSurvey>;
  StatusAndDuration: ResolverTypeWrapper<StatusAndDuration>;
  String: ResolverTypeWrapper<Scalars['String']>;
  StripeAccountId: ResolverTypeWrapper<Scalars['StripeAccountId']>;
  Subscription: ResolverTypeWrapper<{}>;
  SubscriptionHistory: ResolverTypeWrapper<SubscriptionHistory>;
  SubscriptionHistoryRequest: SubscriptionHistoryRequest;
  SubscriptionLevel: ResolverTypeWrapper<SubscriptionLevel>;
  SubscriptionLevelRequest: SubscriptionLevelRequest;
  Survey: ResolverTypeWrapper<Survey>;
  SurveyAnalyticsRequest: SurveyAnalyticsRequest;
  SurveyCampaignType: SurveyCampaignType;
  SurveyCompletionBasedOnQuestionCount: ResolverTypeWrapper<SurveyCompletionBasedOnQuestionCount>;
  SurveyCreateRequest: SurveyCreateRequest;
  SurveyData: ResolverTypeWrapper<Scalars['SurveyData']>;
  SurveyDeleteRequest: SurveyDeleteRequest;
  SurveyDrafterInfo: ResolverTypeWrapper<SurveyDrafterInfo>;
  SurveyElement: ResolverTypeWrapper<ResolversUnionTypes['SurveyElement']>;
  SurveyElementInput: SurveyElementInput;
  SurveyElementItemValueType: ResolverTypeWrapper<ResolversUnionTypes['SurveyElementItemValueType']>;
  SurveyElementType: SurveyElementType;
  SurveyGating: ResolverTypeWrapper<SurveyGating>;
  SurveyGatingQueryRequest: SurveyGatingQueryRequest;
  SurveyId: ResolverTypeWrapper<Scalars['SurveyId']>;
  SurveyMethod: ResolverTypeWrapper<SurveyMethod>;
  SurveyPage: ResolverTypeWrapper<Omit<SurveyPage, 'elements'> & { elements?: Maybe<Array<ResolversTypes['SurveyElement']>> }>;
  SurveyPageInput: SurveyPageInput;
  SurveyQueryRequest: SurveyQueryRequest;
  SurveyReferral: ResolverTypeWrapper<SurveyReferral>;
  SurveyReferralQueryRequest: SurveyReferralQueryRequest;
  SurveyResult: ResolverTypeWrapper<SurveyResult>;
  SurveyResultQueryRequest: SurveyResultQueryRequest;
  SurveyReward: ResolverTypeWrapper<Omit<SurveyReward, 'mediaPrize'> & { mediaPrize?: Maybe<ResolversTypes['NFT']> }>;
  SurveyRewardQueryRequest: SurveyRewardQueryRequest;
  SurveySearchResult: ResolverTypeWrapper<SurveySearchResult>;
  SurveyStatus: SurveyStatus;
  SurveyTakerInfo: ResolverTypeWrapper<SurveyTakerInfo>;
  SurveyType: SurveyType;
  SurveyUpdateInfoRequest: SurveyUpdateInfoRequest;
  SurveyUrl: ResolverTypeWrapper<Scalars['SurveyUrl']>;
  SyncMediaProductsRequest: SyncMediaProductsRequest;
  SyncNftGalleryRequest: SyncNftGalleryRequest;
  SyncPageviewSourcesRequest: SyncPageviewSourcesRequest;
  Tag: ResolverTypeWrapper<Scalars['Tag']>;
  TextElement: ResolverTypeWrapper<TextElement>;
  TextValueInput: TextValueInput;
  TextValueType: ResolverTypeWrapper<TextValueType>;
  TimestampScalar: ResolverTypeWrapper<Scalars['TimestampScalar']>;
  TokenId: ResolverTypeWrapper<Scalars['TokenId']>;
  TopBusinessRequest: TopBusinessRequest;
  TransactionCredit: ResolverTypeWrapper<TransactionCredit>;
  TransactionCreditRequest: TransactionCreditRequest;
  TransactionDebitRequest: TransactionDebitRequest;
  TransactionHashRequest: TransactionHashRequest;
  TransactionStatus: TransactionStatus;
  TransactionType: TransactionType;
  TutorialCompletitions: ResolverTypeWrapper<TutorialCompletitions>;
  TutorialSearchResult: ResolverTypeWrapper<TutorialSearchResult>;
  TxHash: ResolverTypeWrapper<Scalars['TxHash']>;
  TxId: ResolverTypeWrapper<Scalars['TxId']>;
  UnclaimedRewardStatusAndDuration: ResolverTypeWrapper<UnclaimedRewardStatusAndDuration>;
  UnixTimestamp: ResolverTypeWrapper<Scalars['UnixTimestamp']>;
  UpdateAnonymousUserRequest: UpdateAnonymousUserRequest;
  UpdateEmbedSurveyResultRequest: UpdateEmbedSurveyResultRequest;
  UpdateFillingQueueRequest: UpdateFillingQueueRequest;
  UpdateMarketplaceOrderRequest: UpdateMarketplaceOrderRequest;
  UpdateProductRequest: UpdateProductRequest;
  UpdateProfileRequest: UpdateProfileRequest;
  UpdateSurveyGatingRequest: UpdateSurveyGatingRequest;
  UpdateSurveyReferralRequest: UpdateSurveyReferralRequest;
  UpdateSurveyResultRequest: UpdateSurveyResultRequest;
  UpdateSurveyRewardRequest: UpdateSurveyRewardRequest;
  UpdateTransactionCreditRequest: UpdateTransactionCreditRequest;
  UpdateUserBoostRequest: UpdateUserBoostRequest;
  UpdateUserMembershipRequest: UpdateUserMembershipRequest;
  UpdateUserRefferalRequest: UpdateUserRefferalRequest;
  UpdateWalletRequest: UpdateWalletRequest;
  Url: ResolverTypeWrapper<Scalars['Url']>;
  User: ResolverTypeWrapper<User>;
  UserAverageSessionTime: ResolverTypeWrapper<UserAverageSessionTime>;
  UserBanUnban: ResolverTypeWrapper<UserBanUnban>;
  UserBoost: ResolverTypeWrapper<UserBoost>;
  UserCompletionFrequency: ResolverTypeWrapper<UserCompletionFrequency>;
  UserCompletionTimeOfDay: ResolverTypeWrapper<UserCompletionTimeOfDay>;
  UserContract: ResolverTypeWrapper<UserContract>;
  UserContractQueryRequest: UserContractQueryRequest;
  UserContractsQueryRequest: UserContractsQueryRequest;
  UserEngagementRateNFTMarketplace: ResolverTypeWrapper<UserEngagementRateNftMarketplace>;
  UserMembership: ResolverTypeWrapper<UserMembership>;
  UserMostCompletedSurveys: ResolverTypeWrapper<UserMostCompletedSurveys>;
  UserPrize: ResolverTypeWrapper<UserPrize>;
  UserRefferal: ResolverTypeWrapper<UserRefferal>;
  UserRefferalQueryRequest: UserRefferalQueryRequest;
  UserSubscription: ResolverTypeWrapper<UserSubscription>;
  UserTransactionQueryRequest: UserTransactionQueryRequest;
  UserVerification: ResolverTypeWrapper<UserVerification>;
  UserWalletQueryRequest: UserWalletQueryRequest;
  UserWalletsConnected: ResolverTypeWrapper<UserWalletsConnected>;
  ValueType: ResolverTypeWrapper<ValueType>;
  VerifyRequest: VerifyRequest;
  VerifyUserRequest: VerifyUserRequest;
  Visibility: Visibility;
  Void: ResolverTypeWrapper<Scalars['Void']>;
  Wallet: ResolverTypeWrapper<Wallet>;
  WalletsConnected: ResolverTypeWrapper<WalletsConnected>;
  WalletsConnectedPerBlockchain: ResolverTypeWrapper<WalletsConnectedPerBlockchain>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AccessGating: Scalars['AccessGating'];
  AllCryptoRewardInUSD: AllCryptoRewardInUsd;
  AnonymousUser: AnonymousUser;
  AnonymousUserQueryRequest: AnonymousUserQueryRequest;
  AuthChallengeResult: AuthChallengeResult;
  AuthenticationResult: AuthenticationResult;
  AverageInviteResponseTime: AverageInviteResponseTime;
  AverageSurveyCompletionRatesByUser: AverageSurveyCompletionRatesByUser;
  AverageTimeCompletingSurvey: AverageTimeCompletingSurvey;
  AverageTimeDraftingSurvey: AverageTimeDraftingSurvey;
  AverageTimePerSession: AverageTimePerSession;
  AverageTimeWithdrawRewards: AverageTimeWithdrawRewards;
  AverageUserRatingCompletedSurveys: AverageUserRatingCompletedSurveys;
  AverageValueAccruedCashViaStripe: AverageValueAccruedCashViaStripe;
  AverageValueAccruedCryptocurrency: AverageValueAccruedCryptocurrency;
  AverageValueSpentNFTMarketplace: AverageValueSpentNftMarketplace;
  BanUnbanUserRequest: BanUnbanUserRequest;
  BlockchainData: Scalars['BlockchainData'];
  Boolean: Scalars['Boolean'];
  BooleanElement: BooleanElement;
  BusinessCategory: Scalars['BusinessCategory'];
  BusinessSearchResult: BusinessSearchResult;
  Campaign: Campaign;
  CategoriesRequest: CategoriesRequest;
  ChainId: Scalars['ChainId'];
  ChallengeRequest: ChallengeRequest;
  ChartDataLabels: ChartDataLabels;
  Cid: Scalars['Cid'];
  ClaimId: Scalars['ClaimId'];
  ClaimMarketplaceOrderMediaRequest: ClaimMarketplaceOrderMediaRequest;
  ClaimSurveyMediaRequest: ClaimSurveyMediaRequest;
  ClaimSurveyRewardRequest: ClaimSurveyRewardRequest;
  CommentElement: CommentElement;
  CompletionTimeOfDay: CompletionTimeOfDay;
  ContentEncryptionKey: Scalars['ContentEncryptionKey'];
  ContractAddress: Scalars['ContractAddress'];
  CorrelationSurveyComplexityAndCompletion: CorrelationSurveyComplexityAndCompletion;
  CreateAnonymousUserRequest: CreateAnonymousUserRequest;
  CreateEmbedSurveyResultRequest: CreateEmbedSurveyResultRequest;
  CreateFillingQueueRequest: CreateFillingQueueRequest;
  CreateMarketplaceOrderRequest: CreateMarketplaceOrderRequest;
  CreateProductRequest: CreateProductRequest;
  CreateProfileRequest: CreateProfileRequest;
  CreateSurveyGatingRequest: CreateSurveyGatingRequest;
  CreateSurveyReferralRequest: CreateSurveyReferralRequest;
  CreateSurveyResultRequest: CreateSurveyResultRequest;
  CreateSurveyRewardRequest: CreateSurveyRewardRequest;
  CreateUserBoostRequest: CreateUserBoostRequest;
  CreateUserContractRequest: CreateUserContractRequest;
  CreateUserMembershipRequest: CreateUserMembershipRequest;
  CreateUserRefferalRequest: CreateUserRefferalRequest;
  CreateWalletRequest: CreateWalletRequest;
  CredibilityScore: Scalars['CredibilityScore'];
  CryptoIssued: CryptoIssued;
  CryptoIssuedAllBlockchains: CryptoIssuedAllBlockchains;
  CryptoReward: CryptoReward;
  Cursor: Scalars['Cursor'];
  DataBusiness: DataBusiness;
  DataMarketplace: DataMarketplace;
  DataUser: DataUser;
  DateTime: Scalars['DateTime'];
  DeleteFillingQueueRequest: DeleteFillingQueueRequest;
  DeleteProductRequest: DeleteProductRequest;
  DeleteSurveyResultRequest: DeleteSurveyResultRequest;
  DeleteTransactionCreditRequest: DeleteTransactionCreditRequest;
  DeleteWalletRequest: DeleteWalletRequest;
  Did: Scalars['Did'];
  Email: Scalars['Email'];
  EmbedSurveyResult: EmbedSurveyResult;
  EmbedSurveyResultQueryRequest: EmbedSurveyResultQueryRequest;
  EncryptedValueScalar: Scalars['EncryptedValueScalar'];
  EnduserSearchResult: EnduserSearchResult;
  Erc721: Erc721;
  EvmAddress: Scalars['EvmAddress'];
  FastestCompleteSurvey: FastestCompleteSurvey;
  FastestDraftSurvey: FastestDraftSurvey;
  FillingQueue: FillingQueue;
  FillingQueueQueryRequest: FillingQueueQueryRequest;
  Float: Scalars['Float'];
  GoodsOwnedMedia: GoodsOwnedMedia;
  HighestAverageSurveyCompletionRate: HighestAverageSurveyCompletionRate;
  HighestConversionRate: HighestConversionRate;
  HighestNumberOfConsecutiveDaysWithSurveyCompletions: HighestNumberOfConsecutiveDaysWithSurveyCompletions;
  HighestNumberOfParticipantsEngaged: HighestNumberOfParticipantsEngaged;
  HighestNumberOfSuccessfulSurveyCampaigns: HighestNumberOfSuccessfulSurveyCampaigns;
  ID: Scalars['ID'];
  Iden3IssuerProfileQueryRequest: Iden3IssuerProfileQueryRequest;
  Int: Scalars['Int'];
  InternalSurveyId: Scalars['InternalSurveyId'];
  InviteUserRequest: InviteUserRequest;
  IssuerProfileQueryRequest: IssuerProfileQueryRequest;
  Jwt: Scalars['Jwt'];
  LeaderboardEntriesRequest: LeaderboardEntriesRequest;
  LeaderboardEntriesResult: LeaderboardEntriesResult;
  LeaderboardEntry: LeaderboardEntry;
  LimitScalar: Scalars['LimitScalar'];
  Locale: Scalars['Locale'];
  MarketplaceOrder: MarketplaceOrder;
  MarketplaceOrderQueryRequest: MarketplaceOrderQueryRequest;
  MarketplaceOrdersQueryRequest: MarketplaceOrdersQueryRequest;
  MarketplaceProduct: MarketplaceProduct;
  MarketplaceRequest: MarketplaceRequest;
  MarketplaceSearchResult: MarketplaceSearchResult;
  Media: Media;
  MediaBoughtAndSold: MediaBoughtAndSold;
  MediaBoughtAndSoldRequest: MediaBoughtAndSoldRequest;
  MediaSold: MediaSold;
  Metadata: Metadata;
  MimeType: Scalars['MimeType'];
  MostActiveParticipationInSpecificTypesOfSurveys: MostActiveParticipationInSpecificTypesOfSurveys;
  MostCashValueIssuedViaSurveysViaStripe: MostCashValueIssuedViaSurveysViaStripe;
  MostCommonSurveyLengthPreferred: MostCommonSurveyLengthPreferred;
  MostCommonTimeOfDaySurveyCompletitons: MostCommonTimeOfDaySurveyCompletitons;
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
  Mutation: {};
  NFT: ResolversUnionParentTypes['NFT'];
  NFTContent: NftContent;
  NFTMarketplacePurchaseHistory: NftMarketplacePurchaseHistory;
  NearAddress: Scalars['NearAddress'];
  Nep171: Nep171;
  NftGalleriesQueryRequest: NftGalleriesQueryRequest;
  NftGalleriesRequest: NftGalleriesRequest;
  NftGallery: Omit<NftGallery, 'items'> & { items?: Maybe<Array<ResolversParentTypes['NFT']>> };
  NftGalleryCreateRequest: NftGalleryCreateRequest;
  NftGalleryDeleteRequest: NftGalleryDeleteRequest;
  NftGalleryId: Scalars['NftGalleryId'];
  NftGalleryName: Scalars['NftGalleryName'];
  NftGalleryUpdateInfoRequest: NftGalleryUpdateInfoRequest;
  NftGalleryUpdateItemOrderRequest: NftGalleryUpdateItemOrderRequest;
  NftGalleryUpdateItemsRequest: NftGalleryUpdateItemsRequest;
  NftId: Scalars['NftId'];
  NftImage: NftImage;
  NftInput: NftInput;
  NftOwnershipChallenge: NftOwnershipChallenge;
  NftOwnershipChallengeRequest: NftOwnershipChallengeRequest;
  NftOwnershipChallengeResult: NftOwnershipChallengeResult;
  NftOwnershipId: Scalars['NftOwnershipId'];
  NftSearchResult: Omit<NftSearchResult, 'items'> & { items: Array<ResolversParentTypes['NFT']> };
  NftUpdateItemOrder: NftUpdateItemOrder;
  NftsRequest: NftsRequest;
  NftsResult: Omit<NftsResult, 'items'> & { items: Array<ResolversParentTypes['NFT']> };
  Nonce: Scalars['Nonce'];
  NotificationId: Scalars['NotificationId'];
  OpenEndedSurveys: OpenEndedSurveys;
  Owner: Owner;
  Pageview: Pageview;
  PaginatedEmbedSurveyResult: PaginatedEmbedSurveyResult;
  PaginatedEmbedSurveyResultResult: PaginatedEmbedSurveyResultResult;
  PaginatedFillingQueueResult: PaginatedFillingQueueResult;
  PaginatedMarketplaceOrdersResult: PaginatedMarketplaceOrdersResult;
  PaginatedNftGalleryResult: PaginatedNftGalleryResult;
  PaginatedProductsResult: PaginatedProductsResult;
  PaginatedResultInfo: PaginatedResultInfo;
  PaginatedSurveyReferralResult: PaginatedSurveyReferralResult;
  PaginatedSurveyResult: PaginatedSurveyResult;
  PaginatedSurveyResultResult: PaginatedSurveyResultResult;
  PaginatedUserContractResult: PaginatedUserContractResult;
  PaginatedUserRefferalResult: PaginatedUserRefferalResult;
  PaginatedUserResult: PaginatedUserResult;
  PaginatedUserTransactionResult: PaginatedUserTransactionResult;
  ProductQueryRequest: ProductQueryRequest;
  ProductsQueryRequest: ProductsQueryRequest;
  ProfileId: Scalars['ProfileId'];
  ProfileQueryRequest: ProfileQueryRequest;
  PurchaseAmountTotals: PurchaseAmountTotals;
  PurchaseHistory: PurchaseHistory;
  PurchaseHistoryPerUserRequest: PurchaseHistoryPerUserRequest;
  PurchaseInfoHistory: PurchaseInfoHistory;
  Query: {};
  Question: Question;
  RadiogroupElement: Omit<RadiogroupElement, 'choices'> & { choices?: Maybe<Array<ResolversParentTypes['SurveyElementItemValueType']>> };
  RankTopCompletions: RankTopCompletions;
  RankedTagsCompletedSurveys: RankedTagsCompletedSurveys;
  RankedTagsIssuedSurveys: RankedTagsIssuedSurveys;
  RankingElement: Omit<RankingElement, 'choices'> & { choices?: Maybe<Array<ResolversParentTypes['SurveyElementItemValueType']>> };
  Rating: Rating;
  RatingElement: RatingElement;
  RefreshRequest: RefreshRequest;
  RefundMarketplaceOrderRequest: RefundMarketplaceOrderRequest;
  RegistryUserPrizeRequest: RegistryUserPrizeRequest;
  Reward: Reward;
  SaleHistory: SaleHistory;
  SaleHistoryPerBusinessRequest: SaleHistoryPerBusinessRequest;
  SaleItem: SaleItem;
  ScoreSurveyResultRequest: ScoreSurveyResultRequest;
  Search: Scalars['Search'];
  SearchQueryRequest: SearchQueryRequest;
  SearchResult: ResolversUnionParentTypes['SearchResult'];
  Signature: Scalars['Signature'];
  SignedAuthChallenge: SignedAuthChallenge;
  SingleProfileQueryRequest: SingleProfileQueryRequest;
  SingleSurveyQueryRequest: SingleSurveyQueryRequest;
  SlowestCompleteSurvey: SlowestCompleteSurvey;
  SlowestTimeDraftSurvey: SlowestTimeDraftSurvey;
  StatusAndDuration: StatusAndDuration;
  String: Scalars['String'];
  StripeAccountId: Scalars['StripeAccountId'];
  Subscription: {};
  SubscriptionHistory: SubscriptionHistory;
  SubscriptionHistoryRequest: SubscriptionHistoryRequest;
  SubscriptionLevel: SubscriptionLevel;
  SubscriptionLevelRequest: SubscriptionLevelRequest;
  Survey: Survey;
  SurveyAnalyticsRequest: SurveyAnalyticsRequest;
  SurveyCompletionBasedOnQuestionCount: SurveyCompletionBasedOnQuestionCount;
  SurveyCreateRequest: SurveyCreateRequest;
  SurveyData: Scalars['SurveyData'];
  SurveyDeleteRequest: SurveyDeleteRequest;
  SurveyDrafterInfo: SurveyDrafterInfo;
  SurveyElement: ResolversUnionParentTypes['SurveyElement'];
  SurveyElementInput: SurveyElementInput;
  SurveyElementItemValueType: ResolversUnionParentTypes['SurveyElementItemValueType'];
  SurveyGating: SurveyGating;
  SurveyGatingQueryRequest: SurveyGatingQueryRequest;
  SurveyId: Scalars['SurveyId'];
  SurveyMethod: SurveyMethod;
  SurveyPage: Omit<SurveyPage, 'elements'> & { elements?: Maybe<Array<ResolversParentTypes['SurveyElement']>> };
  SurveyPageInput: SurveyPageInput;
  SurveyQueryRequest: SurveyQueryRequest;
  SurveyReferral: SurveyReferral;
  SurveyReferralQueryRequest: SurveyReferralQueryRequest;
  SurveyResult: SurveyResult;
  SurveyResultQueryRequest: SurveyResultQueryRequest;
  SurveyReward: Omit<SurveyReward, 'mediaPrize'> & { mediaPrize?: Maybe<ResolversParentTypes['NFT']> };
  SurveyRewardQueryRequest: SurveyRewardQueryRequest;
  SurveySearchResult: SurveySearchResult;
  SurveyTakerInfo: SurveyTakerInfo;
  SurveyUpdateInfoRequest: SurveyUpdateInfoRequest;
  SurveyUrl: Scalars['SurveyUrl'];
  SyncMediaProductsRequest: SyncMediaProductsRequest;
  SyncNftGalleryRequest: SyncNftGalleryRequest;
  SyncPageviewSourcesRequest: SyncPageviewSourcesRequest;
  Tag: Scalars['Tag'];
  TextElement: TextElement;
  TextValueInput: TextValueInput;
  TextValueType: TextValueType;
  TimestampScalar: Scalars['TimestampScalar'];
  TokenId: Scalars['TokenId'];
  TopBusinessRequest: TopBusinessRequest;
  TransactionCredit: TransactionCredit;
  TransactionCreditRequest: TransactionCreditRequest;
  TransactionDebitRequest: TransactionDebitRequest;
  TransactionHashRequest: TransactionHashRequest;
  TutorialCompletitions: TutorialCompletitions;
  TutorialSearchResult: TutorialSearchResult;
  TxHash: Scalars['TxHash'];
  TxId: Scalars['TxId'];
  UnclaimedRewardStatusAndDuration: UnclaimedRewardStatusAndDuration;
  UnixTimestamp: Scalars['UnixTimestamp'];
  UpdateAnonymousUserRequest: UpdateAnonymousUserRequest;
  UpdateEmbedSurveyResultRequest: UpdateEmbedSurveyResultRequest;
  UpdateFillingQueueRequest: UpdateFillingQueueRequest;
  UpdateMarketplaceOrderRequest: UpdateMarketplaceOrderRequest;
  UpdateProductRequest: UpdateProductRequest;
  UpdateProfileRequest: UpdateProfileRequest;
  UpdateSurveyGatingRequest: UpdateSurveyGatingRequest;
  UpdateSurveyReferralRequest: UpdateSurveyReferralRequest;
  UpdateSurveyResultRequest: UpdateSurveyResultRequest;
  UpdateSurveyRewardRequest: UpdateSurveyRewardRequest;
  UpdateTransactionCreditRequest: UpdateTransactionCreditRequest;
  UpdateUserBoostRequest: UpdateUserBoostRequest;
  UpdateUserMembershipRequest: UpdateUserMembershipRequest;
  UpdateUserRefferalRequest: UpdateUserRefferalRequest;
  UpdateWalletRequest: UpdateWalletRequest;
  Url: Scalars['Url'];
  User: User;
  UserAverageSessionTime: UserAverageSessionTime;
  UserBanUnban: UserBanUnban;
  UserBoost: UserBoost;
  UserCompletionFrequency: UserCompletionFrequency;
  UserCompletionTimeOfDay: UserCompletionTimeOfDay;
  UserContract: UserContract;
  UserContractQueryRequest: UserContractQueryRequest;
  UserContractsQueryRequest: UserContractsQueryRequest;
  UserEngagementRateNFTMarketplace: UserEngagementRateNftMarketplace;
  UserMembership: UserMembership;
  UserMostCompletedSurveys: UserMostCompletedSurveys;
  UserPrize: UserPrize;
  UserRefferal: UserRefferal;
  UserRefferalQueryRequest: UserRefferalQueryRequest;
  UserSubscription: UserSubscription;
  UserTransactionQueryRequest: UserTransactionQueryRequest;
  UserVerification: UserVerification;
  UserWalletQueryRequest: UserWalletQueryRequest;
  UserWalletsConnected: UserWalletsConnected;
  ValueType: ValueType;
  VerifyRequest: VerifyRequest;
  VerifyUserRequest: VerifyUserRequest;
  Void: Scalars['Void'];
  Wallet: Wallet;
  WalletsConnected: WalletsConnected;
  WalletsConnectedPerBlockchain: WalletsConnectedPerBlockchain;
};

export interface AccessGatingScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AccessGating'], any> {
  name: 'AccessGating';
}

export type AllCryptoRewardInUsdResolvers<ContextType = any, ParentType extends ResolversParentTypes['AllCryptoRewardInUSD'] = ResolversParentTypes['AllCryptoRewardInUSD']> = {
  amountUsd?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnonymousUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnonymousUser'] = ResolversParentTypes['AnonymousUser']> = {
  anonId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  fingerprint?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthChallengeResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthChallengeResult'] = ResolversParentTypes['AuthChallengeResult']> = {
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthenticationResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthenticationResult'] = ResolversParentTypes['AuthenticationResult']> = {
  accessToken?: Resolver<ResolversTypes['Jwt'], ParentType, ContextType>;
  refreshToken?: Resolver<ResolversTypes['Jwt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AverageInviteResponseTimeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AverageInviteResponseTime'] = ResolversParentTypes['AverageInviteResponseTime']> = {
  averageResponseTimeHrs?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AverageSurveyCompletionRatesByUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['AverageSurveyCompletionRatesByUser'] = ResolversParentTypes['AverageSurveyCompletionRatesByUser']> = {
  percentageCompletionAverage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  profileId?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
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

export interface BlockchainDataScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BlockchainData'], any> {
  name: 'BlockchainData';
}

export type BooleanElementResolvers<ContextType = any, ParentType extends ResolversParentTypes['BooleanElement'] = ResolversParentTypes['BooleanElement']> = {
  correctAnswer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isRequired?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  points?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SurveyElementType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BusinessCategoryScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BusinessCategory'], any> {
  name: 'BusinessCategory';
}

export type BusinessSearchResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['BusinessSearchResult'] = ResolversParentTypes['BusinessSearchResult']> = {
  items?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PaginatedResultInfo'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SearchRequestTypes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CampaignResolvers<ContextType = any, ParentType extends ResolversParentTypes['Campaign'] = ResolversParentTypes['Campaign']> = {
  campaignId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  campaignType?: Resolver<ResolversTypes['SurveyCampaignType'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  surveys?: Resolver<Array<ResolversTypes['Survey']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface ChainIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ChainId'], any> {
  name: 'ChainId';
}

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

export interface CidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Cid'], any> {
  name: 'Cid';
}

export interface ClaimIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ClaimId'], any> {
  name: 'ClaimId';
}

export type CommentElementResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommentElement'] = ResolversParentTypes['CommentElement']> = {
  correctAnswer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isRequired?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  points?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SurveyElementType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompletionTimeOfDayResolvers<ContextType = any, ParentType extends ResolversParentTypes['CompletionTimeOfDay'] = ResolversParentTypes['CompletionTimeOfDay']> = {
  surveyCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timeOfDay?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface ContentEncryptionKeyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ContentEncryptionKey'], any> {
  name: 'ContentEncryptionKey';
}

export interface ContractAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ContractAddress'], any> {
  name: 'ContractAddress';
}

export type CorrelationSurveyComplexityAndCompletionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CorrelationSurveyComplexityAndCompletion'] = ResolversParentTypes['CorrelationSurveyComplexityAndCompletion']> = {
  completionRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  questionCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  surveyId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface CredibilityScoreScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['CredibilityScore'], any> {
  name: 'CredibilityScore';
}

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

export interface CursorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Cursor'], any> {
  name: 'Cursor';
}

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
  highestAverageSurveyCompletionRate?: Resolver<Maybe<ResolversTypes['HighestAverageSurveyCompletionRate']>, ParentType, ContextType>;
  highestNumberOfConsecutiveDaysWithSurveyCompletions?: Resolver<Maybe<Array<Maybe<ResolversTypes['HighestNumberOfConsecutiveDaysWithSurveyCompletions']>>>, ParentType, ContextType>;
  mostActiveParticipationInSpecificTypesOfSurveys?: Resolver<Maybe<ResolversTypes['MostActiveParticipationInSpecificTypesOfSurveys']>, ParentType, ContextType>;
  mostCommonTimeOfDaySurveyCompletitons?: Resolver<Maybe<ResolversTypes['MostCommonTimeOfDaySurveyCompletitons']>, ParentType, ContextType>;
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
  nFTMarketplacePurchaseHistory?: Resolver<Maybe<ResolversTypes['NFTMarketplacePurchaseHistory']>, ParentType, ContextType>;
  rankedTagsCompletedSurveys?: Resolver<Maybe<Array<Maybe<ResolversTypes['RankedTagsCompletedSurveys']>>>, ParentType, ContextType>;
  slowestCompleteSurvey?: Resolver<Maybe<ResolversTypes['SlowestCompleteSurvey']>, ParentType, ContextType>;
  subscriptionHistory?: Resolver<Maybe<Array<Maybe<ResolversTypes['SubscriptionHistory']>>>, ParentType, ContextType>;
  subscriptionLevel?: Resolver<Maybe<Array<Maybe<ResolversTypes['SubscriptionLevel']>>>, ParentType, ContextType>;
  surveyCompletionBasedOnQuestionCount?: Resolver<Maybe<Array<Maybe<ResolversTypes['SurveyCompletionBasedOnQuestionCount']>>>, ParentType, ContextType>;
  tutorialCompletitions?: Resolver<Maybe<Array<Maybe<ResolversTypes['TutorialCompletitions']>>>, ParentType, ContextType>;
  unclaimedRewardStatusAndDuration?: Resolver<Maybe<ResolversTypes['UnclaimedRewardStatusAndDuration']>, ParentType, ContextType>;
  userEngagementRateNFTMarketplace?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserEngagementRateNFTMarketplace']>>>, ParentType, ContextType>;
  userMostCompletedSurveys?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserMostCompletedSurveys']>>>, ParentType, ContextType>;
  walletsConnectedPerBlockchain?: Resolver<Maybe<ResolversTypes['WalletsConnectedPerBlockchain']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface DidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Did'], any> {
  name: 'Did';
}

export interface EmailScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Email'], any> {
  name: 'Email';
}

export type EmbedSurveyResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmbedSurveyResult'] = ResolversParentTypes['EmbedSurveyResult']> = {
  chainId?: Resolver<Maybe<ResolversTypes['ChainId']>, ParentType, ContextType>;
  cidHash?: Resolver<Maybe<ResolversTypes['Cid']>, ParentType, ContextType>;
  claimId?: Resolver<Maybe<ResolversTypes['ClaimId']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  embedResultsId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  fingerprint?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mediaClaimed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  mediaClaimedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  mediaClaimedFrom?: Resolver<Maybe<ResolversTypes['NearAddress']>, ParentType, ContextType>;
  result?: Resolver<ResolversTypes['SurveyData'], ParentType, ContextType>;
  rewardClaimed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  rewardClaimedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  rewardId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  rewardType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  survey?: Resolver<Maybe<ResolversTypes['Survey']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface EncryptedValueScalarScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EncryptedValueScalar'], any> {
  name: 'EncryptedValueScalar';
}

export type EnduserSearchResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['EnduserSearchResult'] = ResolversParentTypes['EnduserSearchResult']> = {
  items?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PaginatedResultInfo'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SearchRequestTypes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Erc721Resolvers<ContextType = any, ParentType extends ResolversParentTypes['Erc721'] = ResolversParentTypes['Erc721']> = {
  chainId?: Resolver<ResolversTypes['ChainId'], ParentType, ContextType>;
  collectionName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contentUri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contractAddress?: Resolver<ResolversTypes['ContractAddress'], ParentType, ContextType>;
  contractName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ercType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nftId?: Resolver<ResolversTypes['NftId'], ParentType, ContextType>;
  originalContent?: Resolver<Maybe<ResolversTypes['NFTContent']>, ParentType, ContextType>;
  owners?: Resolver<Maybe<Array<ResolversTypes['Owner']>>, ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokenId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface EvmAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EvmAddress'], any> {
  name: 'EvmAddress';
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

export type FillingQueueResolvers<ContextType = any, ParentType extends ResolversParentTypes['FillingQueue'] = ResolversParentTypes['FillingQueue']> = {
  claimId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  completedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fillingId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  fillingStatus?: Resolver<ResolversTypes['FillingStatus'], ParentType, ContextType>;
  fillingType?: Resolver<ResolversTypes['FillingType'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['EncryptedValueScalar']>, ParentType, ContextType>;
  survey?: Resolver<Maybe<ResolversTypes['Survey']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

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

export interface InternalSurveyIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['InternalSurveyId'], any> {
  name: 'InternalSurveyId';
}

export interface JwtScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Jwt'], any> {
  name: 'Jwt';
}

export type LeaderboardEntriesResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeaderboardEntriesResult'] = ResolversParentTypes['LeaderboardEntriesResult']> = {
  items?: Resolver<Maybe<Array<ResolversTypes['LeaderboardEntry']>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PaginatedResultInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeaderboardEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeaderboardEntry'] = ResolversParentTypes['LeaderboardEntry']> = {
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  earnings?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  iden3issuer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  issuer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  leaderboardEntryId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  leaderboardId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  points?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  surveysuccess?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface LimitScalarScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LimitScalar'], any> {
  name: 'LimitScalar';
}

export interface LocaleScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Locale'], any> {
  name: 'Locale';
}

export type MarketplaceOrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarketplaceOrder'] = ResolversParentTypes['MarketplaceOrder']> = {
  chainId?: Resolver<Maybe<ResolversTypes['ChainId']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  mediaClaimed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  mediaClaimedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  mediaClaimedFrom?: Resolver<Maybe<ResolversTypes['NearAddress']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderAmount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  orderId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  orderStatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  paymentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarketplaceProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarketplaceProduct'] = ResolversParentTypes['MarketplaceProduct']> = {
  chainId?: Resolver<Maybe<ResolversTypes['ChainId']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mediaId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  productStatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sellerId?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  whiteList?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarketplaceSearchResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarketplaceSearchResult'] = ResolversParentTypes['MarketplaceSearchResult']> = {
  items?: Resolver<Array<ResolversTypes['MarketplaceProduct']>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PaginatedResultInfo']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SearchRequestTypes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Media'] = ResolversParentTypes['Media']> = {
  cid?: Resolver<Maybe<ResolversTypes['Cid']>, ParentType, ContextType>;
  copiesLimit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mediaId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['MediaType']>, ParentType, ContextType>;
  whiteList?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
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

export type MetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['Metadata'] = ResolversParentTypes['Metadata']> = {
  copies?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  expiresAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  extra?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  issuedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  media?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mediaHash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  referenceHash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startsAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface MimeTypeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['MimeType'], any> {
  name: 'MimeType';
}

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

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  authenticate?: Resolver<ResolversTypes['AuthenticationResult'], ParentType, ContextType, RequireFields<MutationAuthenticateArgs, 'request'>>;
  banUnbanUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationBanUnbanUserArgs, 'request'>>;
  claimMarketplaceOrderMedia?: Resolver<ResolversTypes['MarketplaceOrder'], ParentType, ContextType, RequireFields<MutationClaimMarketplaceOrderMediaArgs, 'request'>>;
  claimSurveyMedia?: Resolver<ResolversTypes['SurveyReward'], ParentType, ContextType, RequireFields<MutationClaimSurveyMediaArgs, 'request'>>;
  claimSurveyReward?: Resolver<ResolversTypes['SurveyReward'], ParentType, ContextType, RequireFields<MutationClaimSurveyRewardArgs, 'request'>>;
  createAnonymousUser?: Resolver<ResolversTypes['AnonymousUser'], ParentType, ContextType, RequireFields<MutationCreateAnonymousUserArgs, 'request'>>;
  createEmbedSurveyResult?: Resolver<ResolversTypes['EmbedSurveyResult'], ParentType, ContextType, RequireFields<MutationCreateEmbedSurveyResultArgs, 'request'>>;
  createErc721NftGallery?: Resolver<ResolversTypes['NftGalleryId'], ParentType, ContextType, RequireFields<MutationCreateErc721NftGalleryArgs, 'request'>>;
  createFillingQueue?: Resolver<Maybe<ResolversTypes['FillingQueue']>, ParentType, ContextType, RequireFields<MutationCreateFillingQueueArgs, 'request'>>;
  createMarketplaceOrder?: Resolver<ResolversTypes['MarketplaceOrder'], ParentType, ContextType, RequireFields<MutationCreateMarketplaceOrderArgs, 'request'>>;
  createNftGallery?: Resolver<ResolversTypes['NftGalleryId'], ParentType, ContextType, RequireFields<MutationCreateNftGalleryArgs, 'request'>>;
  createProduct?: Resolver<ResolversTypes['MarketplaceProduct'], ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'request'>>;
  createProfile?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateProfileArgs, 'request'>>;
  createSurvey?: Resolver<ResolversTypes['Survey'], ParentType, ContextType, RequireFields<MutationCreateSurveyArgs, 'request'>>;
  createSurveyGating?: Resolver<ResolversTypes['SurveyGating'], ParentType, ContextType, RequireFields<MutationCreateSurveyGatingArgs, 'request'>>;
  createSurveyReferral?: Resolver<ResolversTypes['SurveyReferral'], ParentType, ContextType, RequireFields<MutationCreateSurveyReferralArgs, 'request'>>;
  createSurveyResult?: Resolver<ResolversTypes['SurveyResult'], ParentType, ContextType, RequireFields<MutationCreateSurveyResultArgs, 'request'>>;
  createSurveyReward?: Resolver<ResolversTypes['SurveyReward'], ParentType, ContextType, RequireFields<MutationCreateSurveyRewardArgs, 'request'>>;
  createTransactionCredit?: Resolver<ResolversTypes['TransactionCredit'], ParentType, ContextType, RequireFields<MutationCreateTransactionCreditArgs, 'request'>>;
  createTransactionDebit?: Resolver<ResolversTypes['TransactionCredit'], ParentType, ContextType, RequireFields<MutationCreateTransactionDebitArgs, 'request'>>;
  createUserBoost?: Resolver<ResolversTypes['UserBoost'], ParentType, ContextType, RequireFields<MutationCreateUserBoostArgs, 'request'>>;
  createUserContract?: Resolver<ResolversTypes['UserContract'], ParentType, ContextType, RequireFields<MutationCreateUserContractArgs, 'request'>>;
  createUserMembership?: Resolver<ResolversTypes['UserMembership'], ParentType, ContextType, RequireFields<MutationCreateUserMembershipArgs, 'request'>>;
  createUserRefferal?: Resolver<ResolversTypes['UserRefferal'], ParentType, ContextType, RequireFields<MutationCreateUserRefferalArgs, 'request'>>;
  createWallet?: Resolver<ResolversTypes['Wallet'], ParentType, ContextType, RequireFields<MutationCreateWalletArgs, 'request'>>;
  deleteFillingQueue?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationDeleteFillingQueueArgs, 'request'>>;
  deleteNftGallery?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationDeleteNftGalleryArgs, 'request'>>;
  deleteProduct?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationDeleteProductArgs, 'request'>>;
  deleteSurvey?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationDeleteSurveyArgs, 'request'>>;
  deleteSurveyResult?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationDeleteSurveyResultArgs, 'request'>>;
  deleteTransactionCredit?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationDeleteTransactionCreditArgs, 'request'>>;
  deleteWallet?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteWalletArgs, 'request'>>;
  inviteUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationInviteUserArgs, 'request'>>;
  refresh?: Resolver<ResolversTypes['AuthenticationResult'], ParentType, ContextType, RequireFields<MutationRefreshArgs, 'request'>>;
  refundMarketplaceOrder?: Resolver<ResolversTypes['MarketplaceOrder'], ParentType, ContextType, RequireFields<MutationRefundMarketplaceOrderArgs, 'request'>>;
  registryUserPrize?: Resolver<ResolversTypes['UserPrize'], ParentType, ContextType, RequireFields<MutationRegistryUserPrizeArgs, 'request'>>;
  scoreSurveyResult?: Resolver<ResolversTypes['SurveyResult'], ParentType, ContextType, RequireFields<MutationScoreSurveyResultArgs, 'request'>>;
  syncMediaProducts?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationSyncMediaProductsArgs, 'request'>>;
  syncNftGallery?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationSyncNftGalleryArgs, 'request'>>;
  syncPageviewSources?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationSyncPageviewSourcesArgs, 'request'>>;
  updateAnonymousUser?: Resolver<ResolversTypes['AnonymousUser'], ParentType, ContextType, RequireFields<MutationUpdateAnonymousUserArgs, 'request'>>;
  updateEmbedSurveyResult?: Resolver<ResolversTypes['EmbedSurveyResult'], ParentType, ContextType, RequireFields<MutationUpdateEmbedSurveyResultArgs, 'request'>>;
  updateFillingQueue?: Resolver<ResolversTypes['FillingQueue'], ParentType, ContextType, RequireFields<MutationUpdateFillingQueueArgs, 'request'>>;
  updateMarketplaceOrder?: Resolver<ResolversTypes['MarketplaceOrder'], ParentType, ContextType, RequireFields<MutationUpdateMarketplaceOrderArgs, 'request'>>;
  updateNftGalleryInfo?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationUpdateNftGalleryInfoArgs, 'request'>>;
  updateNftGalleryItems?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationUpdateNftGalleryItemsArgs, 'request'>>;
  updateNftGalleryOrder?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationUpdateNftGalleryOrderArgs, 'request'>>;
  updateProduct?: Resolver<ResolversTypes['MarketplaceProduct'], ParentType, ContextType, RequireFields<MutationUpdateProductArgs, 'request'>>;
  updateProfile?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateProfileArgs, 'request'>>;
  updateSurvey?: Resolver<ResolversTypes['Survey'], ParentType, ContextType, RequireFields<MutationUpdateSurveyArgs, 'request'>>;
  updateSurveyGating?: Resolver<ResolversTypes['SurveyGating'], ParentType, ContextType, RequireFields<MutationUpdateSurveyGatingArgs, 'request'>>;
  updateSurveyReferral?: Resolver<ResolversTypes['SurveyReferral'], ParentType, ContextType, RequireFields<MutationUpdateSurveyReferralArgs, 'request'>>;
  updateSurveyResult?: Resolver<ResolversTypes['SurveyResult'], ParentType, ContextType, RequireFields<MutationUpdateSurveyResultArgs, 'request'>>;
  updateSurveyReward?: Resolver<ResolversTypes['SurveyReward'], ParentType, ContextType, RequireFields<MutationUpdateSurveyRewardArgs, 'request'>>;
  updateTransactionCredit?: Resolver<ResolversTypes['TransactionCredit'], ParentType, ContextType, RequireFields<MutationUpdateTransactionCreditArgs, 'request'>>;
  updateUserBoost?: Resolver<ResolversTypes['UserBoost'], ParentType, ContextType, RequireFields<MutationUpdateUserBoostArgs, 'request'>>;
  updateUserMembership?: Resolver<ResolversTypes['UserMembership'], ParentType, ContextType, RequireFields<MutationUpdateUserMembershipArgs, 'request'>>;
  updateUserRefferal?: Resolver<ResolversTypes['UserRefferal'], ParentType, ContextType, RequireFields<MutationUpdateUserRefferalArgs, 'request'>>;
  updateWallet?: Resolver<ResolversTypes['Wallet'], ParentType, ContextType, RequireFields<MutationUpdateWalletArgs, 'request'>>;
  verifyUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationVerifyUserArgs, 'request'>>;
};

export type NftResolvers<ContextType = any, ParentType extends ResolversParentTypes['NFT'] = ResolversParentTypes['NFT']> = {
  __resolveType: TypeResolveFn<'Erc721' | 'Nep171', ParentType, ContextType>;
};

export type NftContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['NFTContent'] = ResolversParentTypes['NFTContent']> = {
  animatedUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentUri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metaType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NftMarketplacePurchaseHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['NFTMarketplacePurchaseHistory'] = ResolversParentTypes['NFTMarketplacePurchaseHistory']> = {
  purchaseAmountTotals?: Resolver<Maybe<Array<Maybe<ResolversTypes['PurchaseAmountTotals']>>>, ParentType, ContextType>;
  purchaseInfoHistory?: Resolver<Maybe<Array<Maybe<ResolversTypes['PurchaseInfoHistory']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface NearAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NearAddress'], any> {
  name: 'NearAddress';
}

export type Nep171Resolvers<ContextType = any, ParentType extends ResolversParentTypes['Nep171'] = ResolversParentTypes['Nep171']> = {
  chainId?: Resolver<ResolversTypes['ChainId'], ParentType, ContextType>;
  creatorId?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  evmContractAddress?: Resolver<Maybe<ResolversTypes['ContractAddress']>, ParentType, ContextType>;
  mediaClaimed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  mediaClaimedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  mediaClaimedFrom?: Resolver<Maybe<ResolversTypes['NearAddress']>, ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['Metadata'], ParentType, ContextType>;
  nftId?: Resolver<ResolversTypes['NftId'], ParentType, ContextType>;
  orderId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  orderStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ownerId?: Resolver<Maybe<ResolversTypes['NearAddress']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  productStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resultsId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  royalty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sellerId?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  seriesId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  surveyId?: Resolver<Maybe<ResolversTypes['SurveyId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NftGalleryResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftGallery'] = ResolversParentTypes['NftGallery']> = {
  chainId?: Resolver<Maybe<ResolversTypes['ChainId']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<ResolversTypes['NFT']>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nftGalleryId?: Resolver<ResolversTypes['NftGalleryId'], ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface NftGalleryIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NftGalleryId'], any> {
  name: 'NftGalleryId';
}

export interface NftGalleryNameScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NftGalleryName'], any> {
  name: 'NftGalleryName';
}

export interface NftIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NftId'], any> {
  name: 'NftId';
}

export type NftImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftImage'] = ResolversParentTypes['NftImage']> = {
  chainId?: Resolver<ResolversTypes['ChainId'], ParentType, ContextType>;
  contractAddress?: Resolver<ResolversTypes['ContractAddress'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  nftImageId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['Url'], ParentType, ContextType>;
  verified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NftOwnershipChallengeResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftOwnershipChallengeResult'] = ResolversParentTypes['NftOwnershipChallengeResult']> = {
  id?: Resolver<ResolversTypes['NftOwnershipId'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timeout?: Resolver<ResolversTypes['TimestampScalar'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface NftOwnershipIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NftOwnershipId'], any> {
  name: 'NftOwnershipId';
}

export type NftSearchResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftSearchResult'] = ResolversParentTypes['NftSearchResult']> = {
  items?: Resolver<Array<ResolversTypes['NFT']>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PaginatedResultInfo']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SearchRequestTypes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NftsResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['NftsResult'] = ResolversParentTypes['NftsResult']> = {
  items?: Resolver<Array<ResolversTypes['NFT']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PaginatedResultInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface NonceScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Nonce'], any> {
  name: 'Nonce';
}

export interface NotificationIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NotificationId'], any> {
  name: 'NotificationId';
}

export type OpenEndedSurveysResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpenEndedSurveys'] = ResolversParentTypes['OpenEndedSurveys']> = {
  openEndedSurveys?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OwnerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Owner'] = ResolversParentTypes['Owner']> = {
  address?: Resolver<ResolversTypes['NearAddress'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  profileId?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pageview'] = ResolversParentTypes['Pageview']> = {
  browser?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  browserVersion?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currentUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  deviceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  distinctId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  event?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  initialReferrer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  initialReferringDomain?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  insertId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  libVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mpApiEndpoint?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mpApiTimestampMs?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mpCountryCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mpLib?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mpProcessingTimeMs?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  os?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  page?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  region?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  screenHeight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  screenWidth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedEmbedSurveyResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedEmbedSurveyResult'] = ResolversParentTypes['PaginatedEmbedSurveyResult']> = {
  items?: Resolver<Array<ResolversTypes['Survey']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PaginatedResultInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedEmbedSurveyResultResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedEmbedSurveyResultResult'] = ResolversParentTypes['PaginatedEmbedSurveyResultResult']> = {
  items?: Resolver<Array<ResolversTypes['EmbedSurveyResult']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PaginatedResultInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedFillingQueueResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedFillingQueueResult'] = ResolversParentTypes['PaginatedFillingQueueResult']> = {
  items?: Resolver<Array<ResolversTypes['FillingQueue']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PaginatedResultInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedMarketplaceOrdersResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedMarketplaceOrdersResult'] = ResolversParentTypes['PaginatedMarketplaceOrdersResult']> = {
  items?: Resolver<Array<ResolversTypes['MarketplaceOrder']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PaginatedResultInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedNftGalleryResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedNftGalleryResult'] = ResolversParentTypes['PaginatedNftGalleryResult']> = {
  items?: Resolver<Array<ResolversTypes['NftGallery']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PaginatedResultInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedProductsResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedProductsResult'] = ResolversParentTypes['PaginatedProductsResult']> = {
  items?: Resolver<Array<ResolversTypes['MarketplaceProduct']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PaginatedResultInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedResultInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedResultInfo'] = ResolversParentTypes['PaginatedResultInfo']> = {
  next?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  prev?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedSurveyReferralResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedSurveyReferralResult'] = ResolversParentTypes['PaginatedSurveyReferralResult']> = {
  items?: Resolver<Array<ResolversTypes['SurveyReferral']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PaginatedResultInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedSurveyResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedSurveyResult'] = ResolversParentTypes['PaginatedSurveyResult']> = {
  items?: Resolver<Array<ResolversTypes['Survey']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PaginatedResultInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedSurveyResultResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedSurveyResultResult'] = ResolversParentTypes['PaginatedSurveyResultResult']> = {
  items?: Resolver<Array<ResolversTypes['SurveyResult']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PaginatedResultInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedUserContractResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedUserContractResult'] = ResolversParentTypes['PaginatedUserContractResult']> = {
  items?: Resolver<Array<ResolversTypes['UserContract']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PaginatedResultInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedUserRefferalResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedUserRefferalResult'] = ResolversParentTypes['PaginatedUserRefferalResult']> = {
  items?: Resolver<Array<ResolversTypes['UserRefferal']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PaginatedResultInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedUserResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedUserResult'] = ResolversParentTypes['PaginatedUserResult']> = {
  items?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PaginatedResultInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedUserTransactionResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedUserTransactionResult'] = ResolversParentTypes['PaginatedUserTransactionResult']> = {
  items?: Resolver<Array<ResolversTypes['TransactionCredit']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PaginatedResultInfo'], ParentType, ContextType>;
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
  allMediaBoughtAndSoldAnalytics?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaBoughtAndSold']>>>, ParentType, ContextType>;
  anonymousUser?: Resolver<Maybe<ResolversTypes['AnonymousUser']>, ParentType, ContextType, RequireFields<QueryAnonymousUserArgs, 'request'>>;
  challenge?: Resolver<ResolversTypes['AuthChallengeResult'], ParentType, ContextType, RequireFields<QueryChallengeArgs, 'request'>>;
  checkTransaction?: Resolver<Maybe<ResolversTypes['TransactionCredit']>, ParentType, ContextType, RequireFields<QueryCheckTransactionArgs, 'request'>>;
  dataBusiness?: Resolver<Maybe<ResolversTypes['DataBusiness']>, ParentType, ContextType>;
  dataMarketplace?: Resolver<Maybe<ResolversTypes['DataMarketplace']>, ParentType, ContextType, Partial<QueryDataMarketplaceArgs>>;
  dataUser?: Resolver<Maybe<ResolversTypes['DataUser']>, ParentType, ContextType, Partial<QueryDataUserArgs>>;
  embedSurveyResults?: Resolver<ResolversTypes['PaginatedEmbedSurveyResultResult'], ParentType, ContextType, RequireFields<QueryEmbedSurveyResultsArgs, 'request'>>;
  fillingQueue?: Resolver<ResolversTypes['PaginatedFillingQueueResult'], ParentType, ContextType, RequireFields<QueryFillingQueueArgs, 'request'>>;
  goodsOwnedPerUserAnalytics?: Resolver<Maybe<Array<Maybe<ResolversTypes['GoodsOwnedMedia']>>>, ParentType, ContextType>;
  leaderboardEntries?: Resolver<ResolversTypes['LeaderboardEntriesResult'], ParentType, ContextType, RequireFields<QueryLeaderboardEntriesArgs, 'request'>>;
  marketplaceOrder?: Resolver<Maybe<ResolversTypes['MarketplaceOrder']>, ParentType, ContextType, RequireFields<QueryMarketplaceOrderArgs, 'request'>>;
  marketplaceOrders?: Resolver<ResolversTypes['PaginatedMarketplaceOrdersResult'], ParentType, ContextType, RequireFields<QueryMarketplaceOrdersArgs, 'request'>>;
  mediaSoldByCompanyOrUserAnalytics?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaSold']>>>, ParentType, ContextType, RequireFields<QueryMediaSoldByCompanyOrUserAnalyticsArgs, 'request'>>;
  methodsPromotions?: Resolver<Maybe<Array<Maybe<ResolversTypes['SurveyMethod']>>>, ParentType, ContextType>;
  nftGalleries?: Resolver<ResolversTypes['PaginatedNftGalleryResult'], ParentType, ContextType, RequireFields<QueryNftGalleriesArgs, 'request'>>;
  nftOwnershipChallenge?: Resolver<ResolversTypes['NftOwnershipChallengeResult'], ParentType, ContextType, RequireFields<QueryNftOwnershipChallengeArgs, 'request'>>;
  nftUserGalleries?: Resolver<ResolversTypes['PaginatedNftGalleryResult'], ParentType, ContextType, RequireFields<QueryNftUserGalleriesArgs, 'request'>>;
  nfts?: Resolver<ResolversTypes['NftsResult'], ParentType, ContextType, RequireFields<QueryNftsArgs, 'request'>>;
  pageviews?: Resolver<Array<ResolversTypes['Pageview']>, ParentType, ContextType>;
  ping?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['MarketplaceProduct']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'request'>>;
  products?: Resolver<ResolversTypes['PaginatedProductsResult'], ParentType, ContextType, RequireFields<QueryProductsArgs, 'request'>>;
  purchaseHistoryPerUserAnalytics?: Resolver<Maybe<Array<Maybe<ResolversTypes['PurchaseHistory']>>>, ParentType, ContextType, RequireFields<QueryPurchaseHistoryPerUserAnalyticsArgs, 'request'>>;
  saleHistoryPerBusinessAnalytics?: Resolver<Maybe<ResolversTypes['SaleHistory']>, ParentType, ContextType, RequireFields<QuerySaleHistoryPerBusinessAnalyticsArgs, 'request'>>;
  search?: Resolver<ResolversTypes['SearchResult'], ParentType, ContextType, RequireFields<QuerySearchArgs, 'request'>>;
  subscriptionHistory?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserSubscription']>>>, ParentType, ContextType, Partial<QuerySubscriptionHistoryArgs>>;
  subscriptionLevel?: Resolver<Maybe<ResolversTypes['UserSubscription']>, ParentType, ContextType, Partial<QuerySubscriptionLevelArgs>>;
  survey?: Resolver<Maybe<ResolversTypes['Survey']>, ParentType, ContextType, RequireFields<QuerySurveyArgs, 'request'>>;
  surveyAnalytics?: Resolver<ResolversTypes['ChartDataLabels'], ParentType, ContextType, RequireFields<QuerySurveyAnalyticsArgs, 'request'>>;
  surveyGating?: Resolver<ResolversTypes['SurveyGating'], ParentType, ContextType, RequireFields<QuerySurveyGatingArgs, 'request'>>;
  surveyReferrals?: Resolver<ResolversTypes['PaginatedSurveyReferralResult'], ParentType, ContextType, RequireFields<QuerySurveyReferralsArgs, 'request'>>;
  surveyResults?: Resolver<ResolversTypes['PaginatedSurveyResultResult'], ParentType, ContextType, RequireFields<QuerySurveyResultsArgs, 'request'>>;
  surveyReward?: Resolver<Maybe<ResolversTypes['SurveyReward']>, ParentType, ContextType, RequireFields<QuerySurveyRewardArgs, 'request'>>;
  surveyRewardErc721?: Resolver<Maybe<ResolversTypes['SurveyReward']>, ParentType, ContextType, RequireFields<QuerySurveyRewardErc721Args, 'request'>>;
  surveys?: Resolver<ResolversTypes['PaginatedSurveyResult'], ParentType, ContextType, RequireFields<QuerySurveysArgs, 'request'>>;
  topBusiness?: Resolver<ResolversTypes['ChartDataLabels'], ParentType, ContextType, RequireFields<QueryTopBusinessArgs, 'request'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'request'>>;
  userContract?: Resolver<Maybe<ResolversTypes['UserContract']>, ParentType, ContextType, RequireFields<QueryUserContractArgs, 'request'>>;
  userContracts?: Resolver<ResolversTypes['PaginatedUserContractResult'], ParentType, ContextType, RequireFields<QueryUserContractsArgs, 'request'>>;
  userNfts?: Resolver<ResolversTypes['NftsResult'], ParentType, ContextType, RequireFields<QueryUserNftsArgs, 'request'>>;
  userRefferals?: Resolver<ResolversTypes['PaginatedUserRefferalResult'], ParentType, ContextType, RequireFields<QueryUserRefferalsArgs, 'request'>>;
  userTransactions?: Resolver<ResolversTypes['PaginatedUserTransactionResult'], ParentType, ContextType, RequireFields<QueryUserTransactionsArgs, 'request'>>;
  userWallet?: Resolver<Maybe<ResolversTypes['Wallet']>, ParentType, ContextType, RequireFields<QueryUserWalletArgs, 'request'>>;
  userbyIssuer?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserbyIssuerArgs, 'request'>>;
  userbyWalletIssuer?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserbyWalletIssuerArgs, 'request'>>;
  users?: Resolver<ResolversTypes['PaginatedUserResult'], ParentType, ContextType, RequireFields<QueryUsersArgs, 'request'>>;
  usersAdmin?: Resolver<ResolversTypes['PaginatedUserResult'], ParentType, ContextType, RequireFields<QueryUsersAdminArgs, 'request'>>;
  verify?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<QueryVerifyArgs, 'request'>>;
};

export type QuestionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Question'] = ResolversParentTypes['Question']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  surveyId?: Resolver<ResolversTypes['SurveyId'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RadiogroupElementResolvers<ContextType = any, ParentType extends ResolversParentTypes['RadiogroupElement'] = ResolversParentTypes['RadiogroupElement']> = {
  choices?: Resolver<Maybe<Array<ResolversTypes['SurveyElementItemValueType']>>, ParentType, ContextType>;
  correctAnswer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isRequired?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  points?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SurveyElementType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
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

export type RankingElementResolvers<ContextType = any, ParentType extends ResolversParentTypes['RankingElement'] = ResolversParentTypes['RankingElement']> = {
  choices?: Resolver<Maybe<Array<ResolversTypes['SurveyElementItemValueType']>>, ParentType, ContextType>;
  correctAnswer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isRequired?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  points?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SurveyElementType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RatingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Rating'] = ResolversParentTypes['Rating']> = {
  item_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RatingElementResolvers<ContextType = any, ParentType extends ResolversParentTypes['RatingElement'] = ResolversParentTypes['RatingElement']> = {
  correctAnswer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isRequired?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  points?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rateMax?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SurveyElementType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RewardResolvers<ContextType = any, ParentType extends ResolversParentTypes['Reward'] = ResolversParentTypes['Reward']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  mediaId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  resultId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  rewardId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  rewardType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  surveyId?: Resolver<Maybe<ResolversTypes['SurveyId']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
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
  issuedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  orderStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sellerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface SearchScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Search'], any> {
  name: 'Search';
}

export type SearchResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchResult'] = ResolversParentTypes['SearchResult']> = {
  __resolveType: TypeResolveFn<'BusinessSearchResult' | 'EnduserSearchResult' | 'MarketplaceSearchResult' | 'NftSearchResult' | 'SurveySearchResult' | 'TutorialSearchResult', ParentType, ContextType>;
};

export interface SignatureScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Signature'], any> {
  name: 'Signature';
}

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

export interface StripeAccountIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['StripeAccountId'], any> {
  name: 'StripeAccountId';
}

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  nftDataUpdated?: SubscriptionResolver<Maybe<Array<Maybe<ResolversTypes['Nep171']>>>, "nftDataUpdated", ParentType, ContextType>;
};

export type SubscriptionHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubscriptionHistory'] = ResolversParentTypes['SubscriptionHistory']> = {
  began?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  ended?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  subscription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionLevelResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubscriptionLevel'] = ResolversParentTypes['SubscriptionLevel']> = {
  subscription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SurveyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Survey'] = ResolversParentTypes['Survey']> = {
  campaignType?: Resolver<ResolversTypes['SurveyCampaignType'], ParentType, ContextType>;
  cidHash?: Resolver<Maybe<ResolversTypes['Cid']>, ParentType, ContextType>;
  claimId?: Resolver<Maybe<ResolversTypes['ClaimId']>, ParentType, ContextType>;
  completeText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  completedHtml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fillingStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstPageIsStarted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  funded?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mediaClaimed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  mediaClaimedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  mediaClaimedFrom?: Resolver<Maybe<ResolversTypes['NearAddress']>, ParentType, ContextType>;
  pageNextText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pages?: Resolver<Maybe<Array<ResolversTypes['SurveyPage']>>, ParentType, ContextType>;
  privateKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publicKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['SurveyResult']>>>, ParentType, ContextType>;
  resultsId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  rewardClaimed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  rewardClaimedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  rewardId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  rewardType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rewards?: Resolver<Maybe<Array<Maybe<ResolversTypes['SurveyReward']>>>, ParentType, ContextType>;
  showPrevButton?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  showPreviewBeforeComplete?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  showQuestionNumbers?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startSurveyText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  surveyId?: Resolver<ResolversTypes['SurveyId'], ParentType, ContextType>;
  surveyStatus?: Resolver<ResolversTypes['SurveyStatus'], ParentType, ContextType>;
  surveyType?: Resolver<ResolversTypes['SurveyType'], ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  whiteList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Email']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SurveyCompletionBasedOnQuestionCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['SurveyCompletionBasedOnQuestionCount'] = ResolversParentTypes['SurveyCompletionBasedOnQuestionCount']> = {
  completionRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  questionCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface SurveyDataScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['SurveyData'], any> {
  name: 'SurveyData';
}

export type SurveyDrafterInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['SurveyDrafterInfo'] = ResolversParentTypes['SurveyDrafterInfo']> = {
  hours?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  surveyId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SurveyElementResolvers<ContextType = any, ParentType extends ResolversParentTypes['SurveyElement'] = ResolversParentTypes['SurveyElement']> = {
  __resolveType: TypeResolveFn<'BooleanElement' | 'CommentElement' | 'RadiogroupElement' | 'RankingElement' | 'RatingElement' | 'TextElement', ParentType, ContextType>;
};

export type SurveyElementItemValueTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SurveyElementItemValueType'] = ResolversParentTypes['SurveyElementItemValueType']> = {
  __resolveType: TypeResolveFn<'TextValueType' | 'ValueType', ParentType, ContextType>;
};

export type SurveyGatingResolvers<ContextType = any, ParentType extends ResolversParentTypes['SurveyGating'] = ResolversParentTypes['SurveyGating']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  gateId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  profileId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  requirements?: Resolver<ResolversTypes['AccessGating'], ParentType, ContextType>;
  surveyId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface SurveyIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['SurveyId'], any> {
  name: 'SurveyId';
}

export type SurveyMethodResolvers<ContextType = any, ParentType extends ResolversParentTypes['SurveyMethod'] = ResolversParentTypes['SurveyMethod']> = {
  effectiveness?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SurveyPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['SurveyPage'] = ResolversParentTypes['SurveyPage']> = {
  elements?: Resolver<Maybe<Array<ResolversTypes['SurveyElement']>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pages?: Resolver<Maybe<Array<ResolversTypes['SurveyPage']>>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SurveyReferralResolvers<ContextType = any, ParentType extends ResolversParentTypes['SurveyReferral'] = ResolversParentTypes['SurveyReferral']> = {
  accountStatus?: Resolver<Maybe<ResolversTypes['AccountStatus']>, ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  completedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  displayName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['Email']>, ParentType, ContextType>;
  invitedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  invitedEmail?: Resolver<ResolversTypes['Email'], ParentType, ContextType>;
  invitedId?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  invitedStatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  referralId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  referralStatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  surveyId?: Resolver<Maybe<ResolversTypes['SurveyId']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SurveyResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SurveyResult'] = ResolversParentTypes['SurveyResult']> = {
  chainId?: Resolver<Maybe<ResolversTypes['ChainId']>, ParentType, ContextType>;
  cidHash?: Resolver<Maybe<ResolversTypes['Cid']>, ParentType, ContextType>;
  claimId?: Resolver<Maybe<ResolversTypes['ClaimId']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  credibilityScore?: Resolver<Maybe<ResolversTypes['CredibilityScore']>, ParentType, ContextType>;
  mediaClaimed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  mediaClaimedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  mediaClaimedFrom?: Resolver<Maybe<ResolversTypes['NearAddress']>, ParentType, ContextType>;
  result?: Resolver<ResolversTypes['SurveyData'], ParentType, ContextType>;
  resultsId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  rewardClaimed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  rewardClaimedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  rewardId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  rewardType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  survey?: Resolver<Maybe<ResolversTypes['Survey']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SurveyRewardResolvers<ContextType = any, ParentType extends ResolversParentTypes['SurveyReward'] = ResolversParentTypes['SurveyReward']> = {
  chainId?: Resolver<Maybe<ResolversTypes['ChainId']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  mediaId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  mediaPrize?: Resolver<Maybe<ResolversTypes['NFT']>, ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  resultsId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  rewardId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  rewardType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  surveyId?: Resolver<ResolversTypes['SurveyId'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SurveySearchResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SurveySearchResult'] = ResolversParentTypes['SurveySearchResult']> = {
  items?: Resolver<Array<ResolversTypes['Survey']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PaginatedResultInfo'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SearchRequestTypes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SurveyTakerInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['SurveyTakerInfo'] = ResolversParentTypes['SurveyTakerInfo']> = {
  hours?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  surveyId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface SurveyUrlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['SurveyUrl'], any> {
  name: 'SurveyUrl';
}

export interface TagScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Tag'], any> {
  name: 'Tag';
}

export type TextElementResolvers<ContextType = any, ParentType extends ResolversParentTypes['TextElement'] = ResolversParentTypes['TextElement']> = {
  correctAnswer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isRequired?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  points?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SurveyElementType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TextValueTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TextValueType'] = ResolversParentTypes['TextValueType']> = {
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimestampScalarScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['TimestampScalar'], any> {
  name: 'TimestampScalar';
}

export interface TokenIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['TokenId'], any> {
  name: 'TokenId';
}

export type TransactionCreditResolvers<ContextType = any, ParentType extends ResolversParentTypes['TransactionCredit'] = ResolversParentTypes['TransactionCredit']> = {
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  receiver_id?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  survey?: Resolver<Maybe<ResolversTypes['Survey']>, ParentType, ContextType>;
  surveyResult?: Resolver<Maybe<ResolversTypes['SurveyResult']>, ParentType, ContextType>;
  transactionHash?: Resolver<Maybe<ResolversTypes['TxHash']>, ParentType, ContextType>;
  transactionId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionSource?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transactionStatus?: Resolver<ResolversTypes['TransactionStatus'], ParentType, ContextType>;
  transactionType?: Resolver<ResolversTypes['TransactionType'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TutorialCompletitionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['TutorialCompletitions'] = ResolversParentTypes['TutorialCompletitions']> = {
  fillingStatus?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TutorialSearchResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['TutorialSearchResult'] = ResolversParentTypes['TutorialSearchResult']> = {
  items?: Resolver<Array<ResolversTypes['Survey']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PaginatedResultInfo'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SearchRequestTypes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TxHashScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['TxHash'], any> {
  name: 'TxHash';
}

export interface TxIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['TxId'], any> {
  name: 'TxId';
}

export type UnclaimedRewardStatusAndDurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['UnclaimedRewardStatusAndDuration'] = ResolversParentTypes['UnclaimedRewardStatusAndDuration']> = {
  near?: Resolver<Maybe<Array<Maybe<ResolversTypes['StatusAndDuration']>>>, ParentType, ContextType>;
  polkadot?: Resolver<Maybe<Array<Maybe<ResolversTypes['StatusAndDuration']>>>, ParentType, ContextType>;
  polygon?: Resolver<Maybe<Array<Maybe<ResolversTypes['StatusAndDuration']>>>, ParentType, ContextType>;
  total?: Resolver<Maybe<Array<Maybe<ResolversTypes['StatusAndDuration']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UnixTimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UnixTimestamp'], any> {
  name: 'UnixTimestamp';
}

export interface UrlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Url'], any> {
  name: 'Url';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  accountStatus?: Resolver<ResolversTypes['AccountStatus'], ParentType, ContextType>;
  accountType?: Resolver<ResolversTypes['AccountType'], ParentType, ContextType>;
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  apiKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['Url']>, ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  boosted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  businessName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['BusinessCategory']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  displayName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  elegibleSurveys?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['Email']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  iden3issuer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  interests?: Resolver<Maybe<Array<Maybe<ResolversTypes['BusinessCategory']>>>, ParentType, ContextType>;
  inviter?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  issuer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kycAttemptId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastLoginAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  medias?: Resolver<Maybe<Array<Maybe<ResolversTypes['Media']>>>, ParentType, ContextType>;
  ownedMedias?: Resolver<Maybe<Array<Maybe<ResolversTypes['Media']>>>, ParentType, ContextType>;
  paymentMethod?: Resolver<Maybe<ResolversTypes['PaymentMethods']>, ParentType, ContextType>;
  pinCode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  publishedSurveys?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  referrals?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProfileId']>>>, ParentType, ContextType>;
  surveys?: Resolver<Maybe<Array<Maybe<ResolversTypes['Survey']>>>, ParentType, ContextType>;
  surveysTaken?: Resolver<Maybe<Array<Maybe<ResolversTypes['Survey']>>>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  verified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  visibility?: Resolver<ResolversTypes['Visibility'], ParentType, ContextType>;
  wallet?: Resolver<Maybe<ResolversTypes['Wallet']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAverageSessionTimeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAverageSessionTime'] = ResolversParentTypes['UserAverageSessionTime']> = {
  averageTime?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserBanUnbanResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserBanUnban'] = ResolversParentTypes['UserBanUnban']> = {
  banunbanId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  banunbanStatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserBoostResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserBoost'] = ResolversParentTypes['UserBoost']> = {
  boostId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  boostStatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  endAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  startAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCompletionFrequencyResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCompletionFrequency'] = ResolversParentTypes['UserCompletionFrequency']> = {
  frequencyAverage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCompletionTimeOfDayResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCompletionTimeOfDay'] = ResolversParentTypes['UserCompletionTimeOfDay']> = {
  completionTimeOfDay?: Resolver<Maybe<Array<Maybe<ResolversTypes['CompletionTimeOfDay']>>>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserContractResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserContract'] = ResolversParentTypes['UserContract']> = {
  contractAddress?: Resolver<Maybe<ResolversTypes['ContractAddress']>, ParentType, ContextType>;
  contractId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contractName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contractType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  funcCall?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  input?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  network?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  output?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ownerAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  surveyId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
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

export type UserMembershipResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserMembership'] = ResolversParentTypes['UserMembership']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  endAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  membershipId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  membershipStatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  startAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserMostCompletedSurveysResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserMostCompletedSurveys'] = ResolversParentTypes['UserMostCompletedSurveys']> = {
  numberOfSurveys?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserPrizeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserPrize'] = ResolversParentTypes['UserPrize']> = {
  chainId?: Resolver<Maybe<ResolversTypes['ChainId']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prizeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  resultId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  rewardId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  surveyId?: Resolver<ResolversTypes['SurveyId'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserRefferalResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserRefferal'] = ResolversParentTypes['UserRefferal']> = {
  accountStatus?: Resolver<Maybe<ResolversTypes['AccountStatus']>, ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  completedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  displayName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['Email']>, ParentType, ContextType>;
  invitedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  invitedEmail?: Resolver<ResolversTypes['Email'], ParentType, ContextType>;
  invitedId?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  invitedStatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  refferalId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  refferalStatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  surveyId?: Resolver<Maybe<ResolversTypes['SurveyId']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserSubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserSubscription'] = ResolversParentTypes['UserSubscription']> = {
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subscriptionLevel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserVerificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserVerification'] = ResolversParentTypes['UserVerification']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  profileId?: Resolver<ResolversTypes['ProfileId'], ParentType, ContextType>;
  verificationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  verificationStatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserWalletsConnectedResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserWalletsConnected'] = ResolversParentTypes['UserWalletsConnected']> = {
  user?: Resolver<Maybe<ResolversTypes['ProfileId']>, ParentType, ContextType>;
  walletCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ValueTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ValueType'] = ResolversParentTypes['ValueType']> = {
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface VoidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Void'], any> {
  name: 'Void';
}

export type WalletResolvers<ContextType = any, ParentType extends ResolversParentTypes['Wallet'] = ResolversParentTypes['Wallet']> = {
  auroraAddress?: Resolver<Maybe<ResolversTypes['EvmAddress']>, ParentType, ContextType>;
  avaxAddress?: Resolver<Maybe<ResolversTypes['EvmAddress']>, ParentType, ContextType>;
  baseAddress?: Resolver<Maybe<ResolversTypes['EvmAddress']>, ParentType, ContextType>;
  bitfinityAddress?: Resolver<Maybe<ResolversTypes['EvmAddress']>, ParentType, ContextType>;
  bobaAddress?: Resolver<Maybe<ResolversTypes['EvmAddress']>, ParentType, ContextType>;
  bscAddress?: Resolver<Maybe<ResolversTypes['EvmAddress']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  credit?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  cronosAddress?: Resolver<Maybe<ResolversTypes['EvmAddress']>, ParentType, ContextType>;
  ethereumAddress?: Resolver<Maybe<ResolversTypes['EvmAddress']>, ParentType, ContextType>;
  filecoinAddress?: Resolver<Maybe<ResolversTypes['EvmAddress']>, ParentType, ContextType>;
  hederaAddress?: Resolver<Maybe<ResolversTypes['EvmAddress']>, ParentType, ContextType>;
  icpAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  moonbeamAddress?: Resolver<Maybe<ResolversTypes['EvmAddress']>, ParentType, ContextType>;
  nearAddress?: Resolver<Maybe<ResolversTypes['NearAddress']>, ParentType, ContextType>;
  opbnbAddress?: Resolver<Maybe<ResolversTypes['EvmAddress']>, ParentType, ContextType>;
  polkadotAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  polygonAddress?: Resolver<Maybe<ResolversTypes['EvmAddress']>, ParentType, ContextType>;
  recipient?: Resolver<Maybe<ResolversTypes['Email']>, ParentType, ContextType>;
  solanaAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stellarAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stripeAccountId?: Resolver<Maybe<ResolversTypes['StripeAccountId']>, ParentType, ContextType>;
  tonAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  walletId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
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
  AccessGating?: GraphQLScalarType;
  AllCryptoRewardInUSD?: AllCryptoRewardInUsdResolvers<ContextType>;
  AnonymousUser?: AnonymousUserResolvers<ContextType>;
  AuthChallengeResult?: AuthChallengeResultResolvers<ContextType>;
  AuthenticationResult?: AuthenticationResultResolvers<ContextType>;
  AverageInviteResponseTime?: AverageInviteResponseTimeResolvers<ContextType>;
  AverageSurveyCompletionRatesByUser?: AverageSurveyCompletionRatesByUserResolvers<ContextType>;
  AverageTimeCompletingSurvey?: AverageTimeCompletingSurveyResolvers<ContextType>;
  AverageTimeDraftingSurvey?: AverageTimeDraftingSurveyResolvers<ContextType>;
  AverageTimePerSession?: AverageTimePerSessionResolvers<ContextType>;
  AverageTimeWithdrawRewards?: AverageTimeWithdrawRewardsResolvers<ContextType>;
  AverageUserRatingCompletedSurveys?: AverageUserRatingCompletedSurveysResolvers<ContextType>;
  AverageValueAccruedCashViaStripe?: AverageValueAccruedCashViaStripeResolvers<ContextType>;
  AverageValueAccruedCryptocurrency?: AverageValueAccruedCryptocurrencyResolvers<ContextType>;
  AverageValueSpentNFTMarketplace?: AverageValueSpentNftMarketplaceResolvers<ContextType>;
  BlockchainData?: GraphQLScalarType;
  BooleanElement?: BooleanElementResolvers<ContextType>;
  BusinessCategory?: GraphQLScalarType;
  BusinessSearchResult?: BusinessSearchResultResolvers<ContextType>;
  Campaign?: CampaignResolvers<ContextType>;
  ChainId?: GraphQLScalarType;
  ChartDataLabels?: ChartDataLabelsResolvers<ContextType>;
  Cid?: GraphQLScalarType;
  ClaimId?: GraphQLScalarType;
  CommentElement?: CommentElementResolvers<ContextType>;
  CompletionTimeOfDay?: CompletionTimeOfDayResolvers<ContextType>;
  ContentEncryptionKey?: GraphQLScalarType;
  ContractAddress?: GraphQLScalarType;
  CorrelationSurveyComplexityAndCompletion?: CorrelationSurveyComplexityAndCompletionResolvers<ContextType>;
  CredibilityScore?: GraphQLScalarType;
  CryptoIssued?: CryptoIssuedResolvers<ContextType>;
  CryptoIssuedAllBlockchains?: CryptoIssuedAllBlockchainsResolvers<ContextType>;
  CryptoReward?: CryptoRewardResolvers<ContextType>;
  Cursor?: GraphQLScalarType;
  DataBusiness?: DataBusinessResolvers<ContextType>;
  DataMarketplace?: DataMarketplaceResolvers<ContextType>;
  DataUser?: DataUserResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Did?: GraphQLScalarType;
  Email?: GraphQLScalarType;
  EmbedSurveyResult?: EmbedSurveyResultResolvers<ContextType>;
  EncryptedValueScalar?: GraphQLScalarType;
  EnduserSearchResult?: EnduserSearchResultResolvers<ContextType>;
  Erc721?: Erc721Resolvers<ContextType>;
  EvmAddress?: GraphQLScalarType;
  FastestCompleteSurvey?: FastestCompleteSurveyResolvers<ContextType>;
  FastestDraftSurvey?: FastestDraftSurveyResolvers<ContextType>;
  FillingQueue?: FillingQueueResolvers<ContextType>;
  GoodsOwnedMedia?: GoodsOwnedMediaResolvers<ContextType>;
  HighestAverageSurveyCompletionRate?: HighestAverageSurveyCompletionRateResolvers<ContextType>;
  HighestConversionRate?: HighestConversionRateResolvers<ContextType>;
  HighestNumberOfConsecutiveDaysWithSurveyCompletions?: HighestNumberOfConsecutiveDaysWithSurveyCompletionsResolvers<ContextType>;
  HighestNumberOfParticipantsEngaged?: HighestNumberOfParticipantsEngagedResolvers<ContextType>;
  HighestNumberOfSuccessfulSurveyCampaigns?: HighestNumberOfSuccessfulSurveyCampaignsResolvers<ContextType>;
  InternalSurveyId?: GraphQLScalarType;
  Jwt?: GraphQLScalarType;
  LeaderboardEntriesResult?: LeaderboardEntriesResultResolvers<ContextType>;
  LeaderboardEntry?: LeaderboardEntryResolvers<ContextType>;
  LimitScalar?: GraphQLScalarType;
  Locale?: GraphQLScalarType;
  MarketplaceOrder?: MarketplaceOrderResolvers<ContextType>;
  MarketplaceProduct?: MarketplaceProductResolvers<ContextType>;
  MarketplaceSearchResult?: MarketplaceSearchResultResolvers<ContextType>;
  Media?: MediaResolvers<ContextType>;
  MediaBoughtAndSold?: MediaBoughtAndSoldResolvers<ContextType>;
  MediaSold?: MediaSoldResolvers<ContextType>;
  Metadata?: MetadataResolvers<ContextType>;
  MimeType?: GraphQLScalarType;
  MostActiveParticipationInSpecificTypesOfSurveys?: MostActiveParticipationInSpecificTypesOfSurveysResolvers<ContextType>;
  MostCashValueIssuedViaSurveysViaStripe?: MostCashValueIssuedViaSurveysViaStripeResolvers<ContextType>;
  MostCommonSurveyLengthPreferred?: MostCommonSurveyLengthPreferredResolvers<ContextType>;
  MostCommonTimeOfDaySurveyCompletitons?: MostCommonTimeOfDaySurveyCompletitonsResolvers<ContextType>;
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
  Mutation?: MutationResolvers<ContextType>;
  NFT?: NftResolvers<ContextType>;
  NFTContent?: NftContentResolvers<ContextType>;
  NFTMarketplacePurchaseHistory?: NftMarketplacePurchaseHistoryResolvers<ContextType>;
  NearAddress?: GraphQLScalarType;
  Nep171?: Nep171Resolvers<ContextType>;
  NftGallery?: NftGalleryResolvers<ContextType>;
  NftGalleryId?: GraphQLScalarType;
  NftGalleryName?: GraphQLScalarType;
  NftId?: GraphQLScalarType;
  NftImage?: NftImageResolvers<ContextType>;
  NftOwnershipChallengeResult?: NftOwnershipChallengeResultResolvers<ContextType>;
  NftOwnershipId?: GraphQLScalarType;
  NftSearchResult?: NftSearchResultResolvers<ContextType>;
  NftsResult?: NftsResultResolvers<ContextType>;
  Nonce?: GraphQLScalarType;
  NotificationId?: GraphQLScalarType;
  OpenEndedSurveys?: OpenEndedSurveysResolvers<ContextType>;
  Owner?: OwnerResolvers<ContextType>;
  Pageview?: PageviewResolvers<ContextType>;
  PaginatedEmbedSurveyResult?: PaginatedEmbedSurveyResultResolvers<ContextType>;
  PaginatedEmbedSurveyResultResult?: PaginatedEmbedSurveyResultResultResolvers<ContextType>;
  PaginatedFillingQueueResult?: PaginatedFillingQueueResultResolvers<ContextType>;
  PaginatedMarketplaceOrdersResult?: PaginatedMarketplaceOrdersResultResolvers<ContextType>;
  PaginatedNftGalleryResult?: PaginatedNftGalleryResultResolvers<ContextType>;
  PaginatedProductsResult?: PaginatedProductsResultResolvers<ContextType>;
  PaginatedResultInfo?: PaginatedResultInfoResolvers<ContextType>;
  PaginatedSurveyReferralResult?: PaginatedSurveyReferralResultResolvers<ContextType>;
  PaginatedSurveyResult?: PaginatedSurveyResultResolvers<ContextType>;
  PaginatedSurveyResultResult?: PaginatedSurveyResultResultResolvers<ContextType>;
  PaginatedUserContractResult?: PaginatedUserContractResultResolvers<ContextType>;
  PaginatedUserRefferalResult?: PaginatedUserRefferalResultResolvers<ContextType>;
  PaginatedUserResult?: PaginatedUserResultResolvers<ContextType>;
  PaginatedUserTransactionResult?: PaginatedUserTransactionResultResolvers<ContextType>;
  ProfileId?: GraphQLScalarType;
  PurchaseAmountTotals?: PurchaseAmountTotalsResolvers<ContextType>;
  PurchaseHistory?: PurchaseHistoryResolvers<ContextType>;
  PurchaseInfoHistory?: PurchaseInfoHistoryResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Question?: QuestionResolvers<ContextType>;
  RadiogroupElement?: RadiogroupElementResolvers<ContextType>;
  RankTopCompletions?: RankTopCompletionsResolvers<ContextType>;
  RankedTagsCompletedSurveys?: RankedTagsCompletedSurveysResolvers<ContextType>;
  RankedTagsIssuedSurveys?: RankedTagsIssuedSurveysResolvers<ContextType>;
  RankingElement?: RankingElementResolvers<ContextType>;
  Rating?: RatingResolvers<ContextType>;
  RatingElement?: RatingElementResolvers<ContextType>;
  Reward?: RewardResolvers<ContextType>;
  SaleHistory?: SaleHistoryResolvers<ContextType>;
  SaleItem?: SaleItemResolvers<ContextType>;
  Search?: GraphQLScalarType;
  SearchResult?: SearchResultResolvers<ContextType>;
  Signature?: GraphQLScalarType;
  SlowestCompleteSurvey?: SlowestCompleteSurveyResolvers<ContextType>;
  SlowestTimeDraftSurvey?: SlowestTimeDraftSurveyResolvers<ContextType>;
  StatusAndDuration?: StatusAndDurationResolvers<ContextType>;
  StripeAccountId?: GraphQLScalarType;
  Subscription?: SubscriptionResolvers<ContextType>;
  SubscriptionHistory?: SubscriptionHistoryResolvers<ContextType>;
  SubscriptionLevel?: SubscriptionLevelResolvers<ContextType>;
  Survey?: SurveyResolvers<ContextType>;
  SurveyCompletionBasedOnQuestionCount?: SurveyCompletionBasedOnQuestionCountResolvers<ContextType>;
  SurveyData?: GraphQLScalarType;
  SurveyDrafterInfo?: SurveyDrafterInfoResolvers<ContextType>;
  SurveyElement?: SurveyElementResolvers<ContextType>;
  SurveyElementItemValueType?: SurveyElementItemValueTypeResolvers<ContextType>;
  SurveyGating?: SurveyGatingResolvers<ContextType>;
  SurveyId?: GraphQLScalarType;
  SurveyMethod?: SurveyMethodResolvers<ContextType>;
  SurveyPage?: SurveyPageResolvers<ContextType>;
  SurveyReferral?: SurveyReferralResolvers<ContextType>;
  SurveyResult?: SurveyResultResolvers<ContextType>;
  SurveyReward?: SurveyRewardResolvers<ContextType>;
  SurveySearchResult?: SurveySearchResultResolvers<ContextType>;
  SurveyTakerInfo?: SurveyTakerInfoResolvers<ContextType>;
  SurveyUrl?: GraphQLScalarType;
  Tag?: GraphQLScalarType;
  TextElement?: TextElementResolvers<ContextType>;
  TextValueType?: TextValueTypeResolvers<ContextType>;
  TimestampScalar?: GraphQLScalarType;
  TokenId?: GraphQLScalarType;
  TransactionCredit?: TransactionCreditResolvers<ContextType>;
  TutorialCompletitions?: TutorialCompletitionsResolvers<ContextType>;
  TutorialSearchResult?: TutorialSearchResultResolvers<ContextType>;
  TxHash?: GraphQLScalarType;
  TxId?: GraphQLScalarType;
  UnclaimedRewardStatusAndDuration?: UnclaimedRewardStatusAndDurationResolvers<ContextType>;
  UnixTimestamp?: GraphQLScalarType;
  Url?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  UserAverageSessionTime?: UserAverageSessionTimeResolvers<ContextType>;
  UserBanUnban?: UserBanUnbanResolvers<ContextType>;
  UserBoost?: UserBoostResolvers<ContextType>;
  UserCompletionFrequency?: UserCompletionFrequencyResolvers<ContextType>;
  UserCompletionTimeOfDay?: UserCompletionTimeOfDayResolvers<ContextType>;
  UserContract?: UserContractResolvers<ContextType>;
  UserEngagementRateNFTMarketplace?: UserEngagementRateNftMarketplaceResolvers<ContextType>;
  UserMembership?: UserMembershipResolvers<ContextType>;
  UserMostCompletedSurveys?: UserMostCompletedSurveysResolvers<ContextType>;
  UserPrize?: UserPrizeResolvers<ContextType>;
  UserRefferal?: UserRefferalResolvers<ContextType>;
  UserSubscription?: UserSubscriptionResolvers<ContextType>;
  UserVerification?: UserVerificationResolvers<ContextType>;
  UserWalletsConnected?: UserWalletsConnectedResolvers<ContextType>;
  ValueType?: ValueTypeResolvers<ContextType>;
  Void?: GraphQLScalarType;
  Wallet?: WalletResolvers<ContextType>;
  WalletsConnected?: WalletsConnectedResolvers<ContextType>;
  WalletsConnectedPerBlockchain?: WalletsConnectedPerBlockchainResolvers<ContextType>;
};



      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "NFT": [
      "Erc721",
      "Nep171"
    ],
    "SearchResult": [
      "BusinessSearchResult",
      "EnduserSearchResult",
      "MarketplaceSearchResult",
      "NftSearchResult",
      "SurveySearchResult",
      "TutorialSearchResult"
    ],
    "SurveyElement": [
      "BooleanElement",
      "CommentElement",
      "RadiogroupElement",
      "RankingElement",
      "RatingElement",
      "TextElement"
    ],
    "SurveyElementItemValueType": [
      "TextValueType",
      "ValueType"
    ]
  }
};
      export default result;
    
export const AnonymousUserFieldsFragmentDoc = gql`
    fragment AnonymousUserFields on AnonymousUser {
  anonId
  profileId
  fingerprint
  createdAt
  updatedAt
}
    `;
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
export const EmbedSurveyResultFieldsFragmentDoc = gql`
    fragment EmbedSurveyResultFields on EmbedSurveyResult {
  embedResultsId
  result
  fingerprint
  survey {
    surveyId
    title
    description
    logo
    surveyType
    surveyStatus
    funded
  }
  claimId
  rewardId
  rewardType
  mediaClaimed
  mediaClaimedAt
  rewardClaimed
  rewardClaimedAt
  chainId
  createdAt
}
    `;
export const UserFieldsFragmentDoc = gql`
    fragment UserFields on User {
  profileId
  firstName
  lastName
  businessName
  displayName
  bio
  location
  age
  gender
  email
  avatar
  category
  interests
  accountType
  accountStatus
  wallet {
    walletId
    recipient
    credit
    nearAddress
    avaxAddress
    auroraAddress
    polygonAddress
    moonbeamAddress
    ethereumAddress
    tonAddress
    cronosAddress
    bobaAddress
    bscAddress
    opbnbAddress
    filecoinAddress
    baseAddress
    hederaAddress
    stellarAddress
    solanaAddress
    polkadotAddress
    icpAddress
    bitfinityAddress
    stripeAccountId
    createdAt
    updatedAt
  }
  inviter
  verified
  boosted
  visibility
  issuer
  iden3issuer
  elegibleSurveys
  publishedSurveys
  apiKey
  kycAttemptId
  createdAt
  lastLoginAt
}
    `;
export const SurveyElementItemValueTypeFieldsFragmentDoc = gql`
    fragment SurveyElementItemValueTypeFields on SurveyElementItemValueType {
  ... on TextValueType {
    text
    value
  }
  ... on ValueType {
    value
  }
}
    `;
export const SurveyElementFieldsFragmentDoc = gql`
    fragment SurveyElementFields on SurveyElement {
  ... on TextElement {
    name
    title
    type
    points
    isRequired
    correctAnswer
  }
  ... on CommentElement {
    name
    title
    type
    points
    isRequired
    correctAnswer
  }
  ... on RankingElement {
    name
    title
    type
    points
    choices {
      ...SurveyElementItemValueTypeFields
    }
    isRequired
    correctAnswer
  }
  ... on RadiogroupElement {
    name
    title
    type
    points
    choices {
      ...SurveyElementItemValueTypeFields
    }
    isRequired
    correctAnswer
  }
  ... on RatingElement {
    name
    title
    type
    rateMax
    points
    isRequired
    correctAnswer
  }
  ... on BooleanElement {
    name
    title
    type
    points
    isRequired
    correctAnswer
  }
}
    ${SurveyElementItemValueTypeFieldsFragmentDoc}`;
export const SurveyPageFieldsFragmentDoc = gql`
    fragment SurveyPageFields on SurveyPage {
  name
  title
  elements {
    ...SurveyElementFields
  }
}
    ${SurveyElementFieldsFragmentDoc}`;
export const SurveyResultFieldsFragmentDoc = gql`
    fragment SurveyResultFields on SurveyResult {
  resultsId
  result
  user {
    ...UserFields
  }
  survey {
    surveyId
    resultsId
    title
    description
    logo
    surveyType
    surveyStatus
    pages {
      name
      title
    }
    funded
  }
  claimId
  rewardId
  rewardType
  rewardClaimed
  rewardClaimedAt
  mediaClaimed
  mediaClaimedAt
  chainId
  score
  credibilityScore
  createdAt
}
    ${UserFieldsFragmentDoc}`;
export const SurveyFieldsFragmentDoc = gql`
    fragment SurveyFields on Survey {
  surveyId
  title
  description
  logo
  surveyType
  surveyStatus
  campaignType
  pages {
    ...SurveyPageFields
  }
  results {
    ...SurveyResultFields
  }
  user {
    ...UserFields
  }
  fillingStatus
  rewardId
  rewardType
  cidHash
  tags
  claimId
  rewardClaimed
  rewardClaimedAt
  mediaClaimed
  mediaClaimedAt
  mediaClaimedFrom
  resultsId
  whiteList
  funded
  showQuestionNumbers
  pageNextText
  completeText
  showPrevButton
  firstPageIsStarted
  startSurveyText
  completedHtml
  showPreviewBeforeComplete
  privateKey
  publicKey
  createdAt
  updatedAt
  publishedAt
}
    ${SurveyPageFieldsFragmentDoc}
${SurveyResultFieldsFragmentDoc}
${UserFieldsFragmentDoc}`;
export const FillingQueueFieldsFragmentDoc = gql`
    fragment FillingQueueFields on FillingQueue {
  fillingId
  user {
    ...UserFields
  }
  survey {
    ...SurveyFields
  }
  fillingType
  fillingStatus
  claimId
  metadata
  createdAt
  updatedAt
  completedAt
}
    ${UserFieldsFragmentDoc}
${SurveyFieldsFragmentDoc}`;
export const LeaderboardEntryFieldsFragmentDoc = gql`
    fragment LeaderboardEntryFields on LeaderboardEntry {
  leaderboardEntryId
  leaderboardId
  profileId
  avatar
  issuer
  iden3issuer
  points
  rank
  surveysuccess
  earnings
  createdAt
}
    `;
export const MarketplaceOrderFieldsFragmentDoc = gql`
    fragment MarketplaceOrderFields on MarketplaceOrder {
  orderId
  user {
    ...UserFields
  }
  productId
  orderStatus
  orderType
  paymentType
  orderAmount
  metadata
  mediaClaimed
  mediaClaimedAt
  mediaClaimedFrom
  chainId
  createdAt
  updatedAt
}
    ${UserFieldsFragmentDoc}`;
export const NftFieldsFragmentDoc = gql`
    fragment NftFields on NFT {
  ... on Erc721 {
    nftId
    contractName
    contractAddress
    symbol
    tokenId
    owners {
      amount
      address
      profileId
    }
    name
    description
    contentUri
    originalContent {
      uri
      metaType
      animatedUrl
    }
    chainId
    collectionName
    ercType
  }
  ... on Nep171 {
    nftId
    seriesId
    metadata {
      title
      description
      media
      mediaHash
      copies
      issuedAt
      expiresAt
      startsAt
      updatedAt
      extra
      reference
      referenceHash
    }
    price
    royalty
    creatorId
    sellerId
    ownerId
    productId
    productType
    productStatus
    orderId
    orderStatus
    surveyId
    resultsId
    evmContractAddress
    chainId
    mediaClaimed
    mediaClaimedAt
    mediaClaimedFrom
  }
}
    `;
export const NftGalleryFieldsFragmentDoc = gql`
    fragment NftGalleryFields on NftGallery {
  nftGalleryId
  name
  profileId
  items {
    ...NftFields
  }
  chainId
  createdAt
  updatedAt
}
    ${NftFieldsFragmentDoc}`;
export const NftImageFieldsFragmentDoc = gql`
    fragment NftImageFields on NftImage {
  nftImageId
  contractAddress
  tokenId
  uri
  chainId
  verified
  createdAt
}
    `;
export const ProductFieldsFragmentDoc = gql`
    fragment ProductFields on MarketplaceProduct {
  productId
  name
  description
  image
  productType
  price
  productStatus
  duration
  mediaId
  metadata
  whiteList
  sellerId
  ownerId
  chainId
  createdAt
  updatedAt
}
    `;
export const QuestionFieldsFragmentDoc = gql`
    fragment QuestionFields on Question {
  surveyId
  description
  createdAt
}
    `;
export const SaleItemFieldsFragmentDoc = gql`
    fragment SaleItemFields on SaleItem {
  productId
  name
  description
  sellerId
  buyerId
  issuedAt
  orderAmount
  price
  orderStatus
}
    `;
export const SurveyGatingFieldsFragmentDoc = gql`
    fragment SurveyGatingFields on SurveyGating {
  gateId
  surveyId
  profileId
  requirements
  createdAt
  updatedAt
}
    `;
export const SurveyReferralFieldsFragmentDoc = gql`
    fragment SurveyReferralFields on SurveyReferral {
  referralId
  surveyId
  profileId
  invitedEmail
  invitedStatus
  invitedId
  referralStatus
  accountStatus
  displayName
  email
  avatar
  createdAt
  updatedAt
  invitedAt
  completedAt
}
    `;
export const SurveyRewardFieldsFragmentDoc = gql`
    fragment SurveyRewardFields on SurveyReward {
  rewardId
  rewardType
  mediaId
  mediaPrize {
    ...NftFields
  }
  surveyId
  profileId
  resultsId
  chainId
  createdAt
  updatedAt
}
    ${NftFieldsFragmentDoc}`;
export const TransactionCreditFieldsFragmentDoc = gql`
    fragment TransactionCreditFields on TransactionCredit {
  transactionId
  orderId
  user {
    ...UserFields
  }
  survey {
    ...SurveyFields
  }
  surveyResult {
    ...SurveyResultFields
  }
  amount
  transactionHash
  transactionType
  transactionStatus
  transactionSource
  createdAt
}
    ${UserFieldsFragmentDoc}
${SurveyFieldsFragmentDoc}
${SurveyResultFieldsFragmentDoc}`;
export const UserBoostFieldsFragmentDoc = gql`
    fragment UserBoostFields on UserBoost {
  boostId
  profileId
  startAt
  endAt
  boostStatus
  createdAt
  updatedAt
}
    `;
export const UserContractFieldsFragmentDoc = gql`
    fragment UserContractFields on UserContract {
  contractId
  profileId
  surveyId
  network
  contractType
  contractName
  contractAddress
  ownerAddress
  funcCall
  input
  output
  createdAt
}
    `;
export const UserMembershipFieldsFragmentDoc = gql`
    fragment UserMembershipFields on UserMembership {
  membershipId
  profileId
  startAt
  endAt
  membershipStatus
  createdAt
  updatedAt
}
    `;
export const UserPrizeFieldsFragmentDoc = gql`
    fragment UserPrizeFields on UserPrize {
  prizeId
  rewardId
  surveyId
  resultId
  profileId
  chainId
  createdAt
}
    `;
export const UserRefferalFieldsFragmentDoc = gql`
    fragment UserRefferalFields on UserRefferal {
  refferalId
  surveyId
  profileId
  invitedEmail
  invitedStatus
  invitedId
  refferalStatus
  accountStatus
  displayName
  email
  avatar
  createdAt
  updatedAt
  invitedAt
  completedAt
}
    `;
export const WalletFieldsFragmentDoc = gql`
    fragment WalletFields on Wallet {
  walletId
  credit
  user {
    ...UserFields
  }
  recipient
  nearAddress
  avaxAddress
  auroraAddress
  polygonAddress
  moonbeamAddress
  ethereumAddress
  tonAddress
  cronosAddress
  bobaAddress
  bscAddress
  opbnbAddress
  filecoinAddress
  baseAddress
  hederaAddress
  stellarAddress
  solanaAddress
  polkadotAddress
  icpAddress
  bitfinityAddress
  stripeAccountId
  createdAt
  updatedAt
}
    ${UserFieldsFragmentDoc}`;
export const AuthenticateDocument = gql`
    mutation Authenticate($request: SignedAuthChallenge!) {
  authenticate(request: $request) {
    accessToken
    refreshToken
  }
}
    `;
export type AuthenticateMutationFn = Apollo.MutationFunction<AuthenticateMutation, AuthenticateMutationVariables>;

/**
 * __useAuthenticateMutation__
 *
 * To run a mutation, you first call `useAuthenticateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthenticateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authenticateMutation, { data, loading, error }] = useAuthenticateMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useAuthenticateMutation(baseOptions?: Apollo.MutationHookOptions<AuthenticateMutation, AuthenticateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthenticateMutation, AuthenticateMutationVariables>(AuthenticateDocument, options);
      }
export type AuthenticateMutationHookResult = ReturnType<typeof useAuthenticateMutation>;
export type AuthenticateMutationResult = Apollo.MutationResult<AuthenticateMutation>;
export type AuthenticateMutationOptions = Apollo.BaseMutationOptions<AuthenticateMutation, AuthenticateMutationVariables>;
export const BanUnbanUserDocument = gql`
    mutation BanUnbanUser($request: BanUnbanUserRequest!) {
  banUnbanUser(request: $request) {
    ...UserFields
    __typename
  }
}
    ${UserFieldsFragmentDoc}`;
export type BanUnbanUserMutationFn = Apollo.MutationFunction<BanUnbanUserMutation, BanUnbanUserMutationVariables>;

/**
 * __useBanUnbanUserMutation__
 *
 * To run a mutation, you first call `useBanUnbanUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBanUnbanUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [banUnbanUserMutation, { data, loading, error }] = useBanUnbanUserMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useBanUnbanUserMutation(baseOptions?: Apollo.MutationHookOptions<BanUnbanUserMutation, BanUnbanUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BanUnbanUserMutation, BanUnbanUserMutationVariables>(BanUnbanUserDocument, options);
      }
export type BanUnbanUserMutationHookResult = ReturnType<typeof useBanUnbanUserMutation>;
export type BanUnbanUserMutationResult = Apollo.MutationResult<BanUnbanUserMutation>;
export type BanUnbanUserMutationOptions = Apollo.BaseMutationOptions<BanUnbanUserMutation, BanUnbanUserMutationVariables>;
export const ClaimMarketplaceOrderMediaDocument = gql`
    mutation ClaimMarketplaceOrderMedia($request: ClaimMarketplaceOrderMediaRequest!) {
  claimMarketplaceOrderMedia(request: $request) {
    ...MarketplaceOrderFields
    __typename
  }
}
    ${MarketplaceOrderFieldsFragmentDoc}`;
export type ClaimMarketplaceOrderMediaMutationFn = Apollo.MutationFunction<ClaimMarketplaceOrderMediaMutation, ClaimMarketplaceOrderMediaMutationVariables>;

/**
 * __useClaimMarketplaceOrderMediaMutation__
 *
 * To run a mutation, you first call `useClaimMarketplaceOrderMediaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClaimMarketplaceOrderMediaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [claimMarketplaceOrderMediaMutation, { data, loading, error }] = useClaimMarketplaceOrderMediaMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useClaimMarketplaceOrderMediaMutation(baseOptions?: Apollo.MutationHookOptions<ClaimMarketplaceOrderMediaMutation, ClaimMarketplaceOrderMediaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ClaimMarketplaceOrderMediaMutation, ClaimMarketplaceOrderMediaMutationVariables>(ClaimMarketplaceOrderMediaDocument, options);
      }
export type ClaimMarketplaceOrderMediaMutationHookResult = ReturnType<typeof useClaimMarketplaceOrderMediaMutation>;
export type ClaimMarketplaceOrderMediaMutationResult = Apollo.MutationResult<ClaimMarketplaceOrderMediaMutation>;
export type ClaimMarketplaceOrderMediaMutationOptions = Apollo.BaseMutationOptions<ClaimMarketplaceOrderMediaMutation, ClaimMarketplaceOrderMediaMutationVariables>;
export const ClaimSurveyMediaDocument = gql`
    mutation ClaimSurveyMedia($request: ClaimSurveyMediaRequest!) {
  claimSurveyMedia(request: $request) {
    ...SurveyRewardFields
    __typename
  }
}
    ${SurveyRewardFieldsFragmentDoc}`;
export type ClaimSurveyMediaMutationFn = Apollo.MutationFunction<ClaimSurveyMediaMutation, ClaimSurveyMediaMutationVariables>;

/**
 * __useClaimSurveyMediaMutation__
 *
 * To run a mutation, you first call `useClaimSurveyMediaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClaimSurveyMediaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [claimSurveyMediaMutation, { data, loading, error }] = useClaimSurveyMediaMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useClaimSurveyMediaMutation(baseOptions?: Apollo.MutationHookOptions<ClaimSurveyMediaMutation, ClaimSurveyMediaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ClaimSurveyMediaMutation, ClaimSurveyMediaMutationVariables>(ClaimSurveyMediaDocument, options);
      }
export type ClaimSurveyMediaMutationHookResult = ReturnType<typeof useClaimSurveyMediaMutation>;
export type ClaimSurveyMediaMutationResult = Apollo.MutationResult<ClaimSurveyMediaMutation>;
export type ClaimSurveyMediaMutationOptions = Apollo.BaseMutationOptions<ClaimSurveyMediaMutation, ClaimSurveyMediaMutationVariables>;
export const ClaimSurveyRewardDocument = gql`
    mutation ClaimSurveyReward($request: ClaimSurveyRewardRequest!) {
  claimSurveyReward(request: $request) {
    ...SurveyRewardFields
    __typename
  }
}
    ${SurveyRewardFieldsFragmentDoc}`;
export type ClaimSurveyRewardMutationFn = Apollo.MutationFunction<ClaimSurveyRewardMutation, ClaimSurveyRewardMutationVariables>;

/**
 * __useClaimSurveyRewardMutation__
 *
 * To run a mutation, you first call `useClaimSurveyRewardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClaimSurveyRewardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [claimSurveyRewardMutation, { data, loading, error }] = useClaimSurveyRewardMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useClaimSurveyRewardMutation(baseOptions?: Apollo.MutationHookOptions<ClaimSurveyRewardMutation, ClaimSurveyRewardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ClaimSurveyRewardMutation, ClaimSurveyRewardMutationVariables>(ClaimSurveyRewardDocument, options);
      }
export type ClaimSurveyRewardMutationHookResult = ReturnType<typeof useClaimSurveyRewardMutation>;
export type ClaimSurveyRewardMutationResult = Apollo.MutationResult<ClaimSurveyRewardMutation>;
export type ClaimSurveyRewardMutationOptions = Apollo.BaseMutationOptions<ClaimSurveyRewardMutation, ClaimSurveyRewardMutationVariables>;
export const CreateAnonymousUserDocument = gql`
    mutation CreateAnonymousUser($request: CreateAnonymousUserRequest!) {
  createAnonymousUser(request: $request) {
    ...AnonymousUserFields
    __typename
  }
}
    ${AnonymousUserFieldsFragmentDoc}`;
export type CreateAnonymousUserMutationFn = Apollo.MutationFunction<CreateAnonymousUserMutation, CreateAnonymousUserMutationVariables>;

/**
 * __useCreateAnonymousUserMutation__
 *
 * To run a mutation, you first call `useCreateAnonymousUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAnonymousUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAnonymousUserMutation, { data, loading, error }] = useCreateAnonymousUserMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateAnonymousUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateAnonymousUserMutation, CreateAnonymousUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAnonymousUserMutation, CreateAnonymousUserMutationVariables>(CreateAnonymousUserDocument, options);
      }
export type CreateAnonymousUserMutationHookResult = ReturnType<typeof useCreateAnonymousUserMutation>;
export type CreateAnonymousUserMutationResult = Apollo.MutationResult<CreateAnonymousUserMutation>;
export type CreateAnonymousUserMutationOptions = Apollo.BaseMutationOptions<CreateAnonymousUserMutation, CreateAnonymousUserMutationVariables>;
export const CreateEmbedSurveyResultDocument = gql`
    mutation CreateEmbedSurveyResult($request: CreateEmbedSurveyResultRequest!) {
  createEmbedSurveyResult(request: $request) {
    ...EmbedSurveyResultFields
    __typename
  }
}
    ${EmbedSurveyResultFieldsFragmentDoc}`;
export type CreateEmbedSurveyResultMutationFn = Apollo.MutationFunction<CreateEmbedSurveyResultMutation, CreateEmbedSurveyResultMutationVariables>;

/**
 * __useCreateEmbedSurveyResultMutation__
 *
 * To run a mutation, you first call `useCreateEmbedSurveyResultMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEmbedSurveyResultMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEmbedSurveyResultMutation, { data, loading, error }] = useCreateEmbedSurveyResultMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateEmbedSurveyResultMutation(baseOptions?: Apollo.MutationHookOptions<CreateEmbedSurveyResultMutation, CreateEmbedSurveyResultMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEmbedSurveyResultMutation, CreateEmbedSurveyResultMutationVariables>(CreateEmbedSurveyResultDocument, options);
      }
export type CreateEmbedSurveyResultMutationHookResult = ReturnType<typeof useCreateEmbedSurveyResultMutation>;
export type CreateEmbedSurveyResultMutationResult = Apollo.MutationResult<CreateEmbedSurveyResultMutation>;
export type CreateEmbedSurveyResultMutationOptions = Apollo.BaseMutationOptions<CreateEmbedSurveyResultMutation, CreateEmbedSurveyResultMutationVariables>;
export const CreateErc721NftGalleryDocument = gql`
    mutation CreateErc721NftGallery($request: NftGalleryCreateRequest!) {
  createErc721NftGallery(request: $request)
}
    `;
export type CreateErc721NftGalleryMutationFn = Apollo.MutationFunction<CreateErc721NftGalleryMutation, CreateErc721NftGalleryMutationVariables>;

/**
 * __useCreateErc721NftGalleryMutation__
 *
 * To run a mutation, you first call `useCreateErc721NftGalleryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateErc721NftGalleryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createErc721NftGalleryMutation, { data, loading, error }] = useCreateErc721NftGalleryMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateErc721NftGalleryMutation(baseOptions?: Apollo.MutationHookOptions<CreateErc721NftGalleryMutation, CreateErc721NftGalleryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateErc721NftGalleryMutation, CreateErc721NftGalleryMutationVariables>(CreateErc721NftGalleryDocument, options);
      }
export type CreateErc721NftGalleryMutationHookResult = ReturnType<typeof useCreateErc721NftGalleryMutation>;
export type CreateErc721NftGalleryMutationResult = Apollo.MutationResult<CreateErc721NftGalleryMutation>;
export type CreateErc721NftGalleryMutationOptions = Apollo.BaseMutationOptions<CreateErc721NftGalleryMutation, CreateErc721NftGalleryMutationVariables>;
export const CreateFillingQueueDocument = gql`
    mutation CreateFillingQueue($request: CreateFillingQueueRequest!) {
  createFillingQueue(request: $request) {
    ...FillingQueueFields
    __typename
  }
}
    ${FillingQueueFieldsFragmentDoc}`;
export type CreateFillingQueueMutationFn = Apollo.MutationFunction<CreateFillingQueueMutation, CreateFillingQueueMutationVariables>;

/**
 * __useCreateFillingQueueMutation__
 *
 * To run a mutation, you first call `useCreateFillingQueueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFillingQueueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFillingQueueMutation, { data, loading, error }] = useCreateFillingQueueMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateFillingQueueMutation(baseOptions?: Apollo.MutationHookOptions<CreateFillingQueueMutation, CreateFillingQueueMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFillingQueueMutation, CreateFillingQueueMutationVariables>(CreateFillingQueueDocument, options);
      }
export type CreateFillingQueueMutationHookResult = ReturnType<typeof useCreateFillingQueueMutation>;
export type CreateFillingQueueMutationResult = Apollo.MutationResult<CreateFillingQueueMutation>;
export type CreateFillingQueueMutationOptions = Apollo.BaseMutationOptions<CreateFillingQueueMutation, CreateFillingQueueMutationVariables>;
export const CreateMarketplaceOrderDocument = gql`
    mutation CreateMarketplaceOrder($request: CreateMarketplaceOrderRequest!) {
  createMarketplaceOrder(request: $request) {
    ...MarketplaceOrderFields
    __typename
  }
}
    ${MarketplaceOrderFieldsFragmentDoc}`;
export type CreateMarketplaceOrderMutationFn = Apollo.MutationFunction<CreateMarketplaceOrderMutation, CreateMarketplaceOrderMutationVariables>;

/**
 * __useCreateMarketplaceOrderMutation__
 *
 * To run a mutation, you first call `useCreateMarketplaceOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMarketplaceOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMarketplaceOrderMutation, { data, loading, error }] = useCreateMarketplaceOrderMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateMarketplaceOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateMarketplaceOrderMutation, CreateMarketplaceOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMarketplaceOrderMutation, CreateMarketplaceOrderMutationVariables>(CreateMarketplaceOrderDocument, options);
      }
export type CreateMarketplaceOrderMutationHookResult = ReturnType<typeof useCreateMarketplaceOrderMutation>;
export type CreateMarketplaceOrderMutationResult = Apollo.MutationResult<CreateMarketplaceOrderMutation>;
export type CreateMarketplaceOrderMutationOptions = Apollo.BaseMutationOptions<CreateMarketplaceOrderMutation, CreateMarketplaceOrderMutationVariables>;
export const CreateNftGalleryDocument = gql`
    mutation CreateNftGallery($request: NftGalleryCreateRequest!) {
  createNftGallery(request: $request)
}
    `;
export type CreateNftGalleryMutationFn = Apollo.MutationFunction<CreateNftGalleryMutation, CreateNftGalleryMutationVariables>;

/**
 * __useCreateNftGalleryMutation__
 *
 * To run a mutation, you first call `useCreateNftGalleryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNftGalleryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNftGalleryMutation, { data, loading, error }] = useCreateNftGalleryMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateNftGalleryMutation(baseOptions?: Apollo.MutationHookOptions<CreateNftGalleryMutation, CreateNftGalleryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNftGalleryMutation, CreateNftGalleryMutationVariables>(CreateNftGalleryDocument, options);
      }
export type CreateNftGalleryMutationHookResult = ReturnType<typeof useCreateNftGalleryMutation>;
export type CreateNftGalleryMutationResult = Apollo.MutationResult<CreateNftGalleryMutation>;
export type CreateNftGalleryMutationOptions = Apollo.BaseMutationOptions<CreateNftGalleryMutation, CreateNftGalleryMutationVariables>;
export const CreateProductDocument = gql`
    mutation CreateProduct($request: CreateProductRequest!) {
  createProduct(request: $request) {
    ...ProductFields
    __typename
  }
}
    ${ProductFieldsFragmentDoc}`;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const CreateProfileDocument = gql`
    mutation CreateProfile($request: CreateProfileRequest!) {
  createProfile(request: $request) {
    ...UserFields
    __typename
  }
}
    ${UserFieldsFragmentDoc}`;
export type CreateProfileMutationFn = Apollo.MutationFunction<CreateProfileMutation, CreateProfileMutationVariables>;

/**
 * __useCreateProfileMutation__
 *
 * To run a mutation, you first call `useCreateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProfileMutation, { data, loading, error }] = useCreateProfileMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateProfileMutation(baseOptions?: Apollo.MutationHookOptions<CreateProfileMutation, CreateProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProfileMutation, CreateProfileMutationVariables>(CreateProfileDocument, options);
      }
export type CreateProfileMutationHookResult = ReturnType<typeof useCreateProfileMutation>;
export type CreateProfileMutationResult = Apollo.MutationResult<CreateProfileMutation>;
export type CreateProfileMutationOptions = Apollo.BaseMutationOptions<CreateProfileMutation, CreateProfileMutationVariables>;
export const CreateSurveyDocument = gql`
    mutation CreateSurvey($request: SurveyCreateRequest!) {
  createSurvey(request: $request) {
    ...SurveyFields
    __typename
  }
}
    ${SurveyFieldsFragmentDoc}`;
export type CreateSurveyMutationFn = Apollo.MutationFunction<CreateSurveyMutation, CreateSurveyMutationVariables>;

/**
 * __useCreateSurveyMutation__
 *
 * To run a mutation, you first call `useCreateSurveyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSurveyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSurveyMutation, { data, loading, error }] = useCreateSurveyMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateSurveyMutation(baseOptions?: Apollo.MutationHookOptions<CreateSurveyMutation, CreateSurveyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSurveyMutation, CreateSurveyMutationVariables>(CreateSurveyDocument, options);
      }
export type CreateSurveyMutationHookResult = ReturnType<typeof useCreateSurveyMutation>;
export type CreateSurveyMutationResult = Apollo.MutationResult<CreateSurveyMutation>;
export type CreateSurveyMutationOptions = Apollo.BaseMutationOptions<CreateSurveyMutation, CreateSurveyMutationVariables>;
export const CreateSurveyGatingDocument = gql`
    mutation CreateSurveyGating($request: CreateSurveyGatingRequest!) {
  createSurveyGating(request: $request) {
    ...SurveyGatingFields
    __typename
  }
}
    ${SurveyGatingFieldsFragmentDoc}`;
export type CreateSurveyGatingMutationFn = Apollo.MutationFunction<CreateSurveyGatingMutation, CreateSurveyGatingMutationVariables>;

/**
 * __useCreateSurveyGatingMutation__
 *
 * To run a mutation, you first call `useCreateSurveyGatingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSurveyGatingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSurveyGatingMutation, { data, loading, error }] = useCreateSurveyGatingMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateSurveyGatingMutation(baseOptions?: Apollo.MutationHookOptions<CreateSurveyGatingMutation, CreateSurveyGatingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSurveyGatingMutation, CreateSurveyGatingMutationVariables>(CreateSurveyGatingDocument, options);
      }
export type CreateSurveyGatingMutationHookResult = ReturnType<typeof useCreateSurveyGatingMutation>;
export type CreateSurveyGatingMutationResult = Apollo.MutationResult<CreateSurveyGatingMutation>;
export type CreateSurveyGatingMutationOptions = Apollo.BaseMutationOptions<CreateSurveyGatingMutation, CreateSurveyGatingMutationVariables>;
export const CreateSurveyReferralDocument = gql`
    mutation CreateSurveyReferral($request: CreateSurveyReferralRequest!) {
  createSurveyReferral(request: $request) {
    ...SurveyReferralFields
    __typename
  }
}
    ${SurveyReferralFieldsFragmentDoc}`;
export type CreateSurveyReferralMutationFn = Apollo.MutationFunction<CreateSurveyReferralMutation, CreateSurveyReferralMutationVariables>;

/**
 * __useCreateSurveyReferralMutation__
 *
 * To run a mutation, you first call `useCreateSurveyReferralMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSurveyReferralMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSurveyReferralMutation, { data, loading, error }] = useCreateSurveyReferralMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateSurveyReferralMutation(baseOptions?: Apollo.MutationHookOptions<CreateSurveyReferralMutation, CreateSurveyReferralMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSurveyReferralMutation, CreateSurveyReferralMutationVariables>(CreateSurveyReferralDocument, options);
      }
export type CreateSurveyReferralMutationHookResult = ReturnType<typeof useCreateSurveyReferralMutation>;
export type CreateSurveyReferralMutationResult = Apollo.MutationResult<CreateSurveyReferralMutation>;
export type CreateSurveyReferralMutationOptions = Apollo.BaseMutationOptions<CreateSurveyReferralMutation, CreateSurveyReferralMutationVariables>;
export const CreateSurveyResultDocument = gql`
    mutation CreateSurveyResult($request: CreateSurveyResultRequest!) {
  createSurveyResult(request: $request) {
    ...SurveyResultFields
    __typename
  }
}
    ${SurveyResultFieldsFragmentDoc}`;
export type CreateSurveyResultMutationFn = Apollo.MutationFunction<CreateSurveyResultMutation, CreateSurveyResultMutationVariables>;

/**
 * __useCreateSurveyResultMutation__
 *
 * To run a mutation, you first call `useCreateSurveyResultMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSurveyResultMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSurveyResultMutation, { data, loading, error }] = useCreateSurveyResultMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateSurveyResultMutation(baseOptions?: Apollo.MutationHookOptions<CreateSurveyResultMutation, CreateSurveyResultMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSurveyResultMutation, CreateSurveyResultMutationVariables>(CreateSurveyResultDocument, options);
      }
export type CreateSurveyResultMutationHookResult = ReturnType<typeof useCreateSurveyResultMutation>;
export type CreateSurveyResultMutationResult = Apollo.MutationResult<CreateSurveyResultMutation>;
export type CreateSurveyResultMutationOptions = Apollo.BaseMutationOptions<CreateSurveyResultMutation, CreateSurveyResultMutationVariables>;
export const CreateSurveyRewardDocument = gql`
    mutation CreateSurveyReward($request: CreateSurveyRewardRequest!) {
  createSurveyReward(request: $request) {
    ...SurveyRewardFields
    __typename
  }
}
    ${SurveyRewardFieldsFragmentDoc}`;
export type CreateSurveyRewardMutationFn = Apollo.MutationFunction<CreateSurveyRewardMutation, CreateSurveyRewardMutationVariables>;

/**
 * __useCreateSurveyRewardMutation__
 *
 * To run a mutation, you first call `useCreateSurveyRewardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSurveyRewardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSurveyRewardMutation, { data, loading, error }] = useCreateSurveyRewardMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateSurveyRewardMutation(baseOptions?: Apollo.MutationHookOptions<CreateSurveyRewardMutation, CreateSurveyRewardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSurveyRewardMutation, CreateSurveyRewardMutationVariables>(CreateSurveyRewardDocument, options);
      }
export type CreateSurveyRewardMutationHookResult = ReturnType<typeof useCreateSurveyRewardMutation>;
export type CreateSurveyRewardMutationResult = Apollo.MutationResult<CreateSurveyRewardMutation>;
export type CreateSurveyRewardMutationOptions = Apollo.BaseMutationOptions<CreateSurveyRewardMutation, CreateSurveyRewardMutationVariables>;
export const CreateTransactionCreditDocument = gql`
    mutation CreateTransactionCredit($request: TransactionCreditRequest!) {
  createTransactionCredit(request: $request) {
    ...TransactionCreditFields
    __typename
  }
}
    ${TransactionCreditFieldsFragmentDoc}`;
export type CreateTransactionCreditMutationFn = Apollo.MutationFunction<CreateTransactionCreditMutation, CreateTransactionCreditMutationVariables>;

/**
 * __useCreateTransactionCreditMutation__
 *
 * To run a mutation, you first call `useCreateTransactionCreditMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTransactionCreditMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTransactionCreditMutation, { data, loading, error }] = useCreateTransactionCreditMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateTransactionCreditMutation(baseOptions?: Apollo.MutationHookOptions<CreateTransactionCreditMutation, CreateTransactionCreditMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTransactionCreditMutation, CreateTransactionCreditMutationVariables>(CreateTransactionCreditDocument, options);
      }
export type CreateTransactionCreditMutationHookResult = ReturnType<typeof useCreateTransactionCreditMutation>;
export type CreateTransactionCreditMutationResult = Apollo.MutationResult<CreateTransactionCreditMutation>;
export type CreateTransactionCreditMutationOptions = Apollo.BaseMutationOptions<CreateTransactionCreditMutation, CreateTransactionCreditMutationVariables>;
export const CreateTransactionDebitDocument = gql`
    mutation CreateTransactionDebit($request: TransactionDebitRequest!) {
  createTransactionDebit(request: $request) {
    ...TransactionCreditFields
    __typename
  }
}
    ${TransactionCreditFieldsFragmentDoc}`;
export type CreateTransactionDebitMutationFn = Apollo.MutationFunction<CreateTransactionDebitMutation, CreateTransactionDebitMutationVariables>;

/**
 * __useCreateTransactionDebitMutation__
 *
 * To run a mutation, you first call `useCreateTransactionDebitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTransactionDebitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTransactionDebitMutation, { data, loading, error }] = useCreateTransactionDebitMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateTransactionDebitMutation(baseOptions?: Apollo.MutationHookOptions<CreateTransactionDebitMutation, CreateTransactionDebitMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTransactionDebitMutation, CreateTransactionDebitMutationVariables>(CreateTransactionDebitDocument, options);
      }
export type CreateTransactionDebitMutationHookResult = ReturnType<typeof useCreateTransactionDebitMutation>;
export type CreateTransactionDebitMutationResult = Apollo.MutationResult<CreateTransactionDebitMutation>;
export type CreateTransactionDebitMutationOptions = Apollo.BaseMutationOptions<CreateTransactionDebitMutation, CreateTransactionDebitMutationVariables>;
export const CreateUserBoostDocument = gql`
    mutation CreateUserBoost($request: CreateUserBoostRequest!) {
  createUserBoost(request: $request) {
    ...UserBoostFields
    __typename
  }
}
    ${UserBoostFieldsFragmentDoc}`;
export type CreateUserBoostMutationFn = Apollo.MutationFunction<CreateUserBoostMutation, CreateUserBoostMutationVariables>;

/**
 * __useCreateUserBoostMutation__
 *
 * To run a mutation, you first call `useCreateUserBoostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserBoostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserBoostMutation, { data, loading, error }] = useCreateUserBoostMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateUserBoostMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserBoostMutation, CreateUserBoostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserBoostMutation, CreateUserBoostMutationVariables>(CreateUserBoostDocument, options);
      }
export type CreateUserBoostMutationHookResult = ReturnType<typeof useCreateUserBoostMutation>;
export type CreateUserBoostMutationResult = Apollo.MutationResult<CreateUserBoostMutation>;
export type CreateUserBoostMutationOptions = Apollo.BaseMutationOptions<CreateUserBoostMutation, CreateUserBoostMutationVariables>;
export const CreateUserContractDocument = gql`
    mutation CreateUserContract($request: CreateUserContractRequest!) {
  createUserContract(request: $request) {
    ...UserContractFields
    __typename
  }
}
    ${UserContractFieldsFragmentDoc}`;
export type CreateUserContractMutationFn = Apollo.MutationFunction<CreateUserContractMutation, CreateUserContractMutationVariables>;

/**
 * __useCreateUserContractMutation__
 *
 * To run a mutation, you first call `useCreateUserContractMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserContractMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserContractMutation, { data, loading, error }] = useCreateUserContractMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateUserContractMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserContractMutation, CreateUserContractMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserContractMutation, CreateUserContractMutationVariables>(CreateUserContractDocument, options);
      }
export type CreateUserContractMutationHookResult = ReturnType<typeof useCreateUserContractMutation>;
export type CreateUserContractMutationResult = Apollo.MutationResult<CreateUserContractMutation>;
export type CreateUserContractMutationOptions = Apollo.BaseMutationOptions<CreateUserContractMutation, CreateUserContractMutationVariables>;
export const CreateUserMembershipDocument = gql`
    mutation CreateUserMembership($request: CreateUserMembershipRequest!) {
  createUserMembership(request: $request) {
    ...UserMembershipFields
    __typename
  }
}
    ${UserMembershipFieldsFragmentDoc}`;
export type CreateUserMembershipMutationFn = Apollo.MutationFunction<CreateUserMembershipMutation, CreateUserMembershipMutationVariables>;

/**
 * __useCreateUserMembershipMutation__
 *
 * To run a mutation, you first call `useCreateUserMembershipMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMembershipMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMembershipMutation, { data, loading, error }] = useCreateUserMembershipMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateUserMembershipMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMembershipMutation, CreateUserMembershipMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMembershipMutation, CreateUserMembershipMutationVariables>(CreateUserMembershipDocument, options);
      }
export type CreateUserMembershipMutationHookResult = ReturnType<typeof useCreateUserMembershipMutation>;
export type CreateUserMembershipMutationResult = Apollo.MutationResult<CreateUserMembershipMutation>;
export type CreateUserMembershipMutationOptions = Apollo.BaseMutationOptions<CreateUserMembershipMutation, CreateUserMembershipMutationVariables>;
export const CreateUserRefferalDocument = gql`
    mutation CreateUserRefferal($request: CreateUserRefferalRequest!) {
  createUserRefferal(request: $request) {
    ...UserRefferalFields
    __typename
  }
}
    ${UserRefferalFieldsFragmentDoc}`;
export type CreateUserRefferalMutationFn = Apollo.MutationFunction<CreateUserRefferalMutation, CreateUserRefferalMutationVariables>;

/**
 * __useCreateUserRefferalMutation__
 *
 * To run a mutation, you first call `useCreateUserRefferalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserRefferalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserRefferalMutation, { data, loading, error }] = useCreateUserRefferalMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateUserRefferalMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserRefferalMutation, CreateUserRefferalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserRefferalMutation, CreateUserRefferalMutationVariables>(CreateUserRefferalDocument, options);
      }
export type CreateUserRefferalMutationHookResult = ReturnType<typeof useCreateUserRefferalMutation>;
export type CreateUserRefferalMutationResult = Apollo.MutationResult<CreateUserRefferalMutation>;
export type CreateUserRefferalMutationOptions = Apollo.BaseMutationOptions<CreateUserRefferalMutation, CreateUserRefferalMutationVariables>;
export const CreateWalletDocument = gql`
    mutation CreateWallet($request: CreateWalletRequest!) {
  createWallet(request: $request) {
    ...WalletFields
    __typename
  }
}
    ${WalletFieldsFragmentDoc}`;
export type CreateWalletMutationFn = Apollo.MutationFunction<CreateWalletMutation, CreateWalletMutationVariables>;

/**
 * __useCreateWalletMutation__
 *
 * To run a mutation, you first call `useCreateWalletMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWalletMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWalletMutation, { data, loading, error }] = useCreateWalletMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateWalletMutation(baseOptions?: Apollo.MutationHookOptions<CreateWalletMutation, CreateWalletMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWalletMutation, CreateWalletMutationVariables>(CreateWalletDocument, options);
      }
export type CreateWalletMutationHookResult = ReturnType<typeof useCreateWalletMutation>;
export type CreateWalletMutationResult = Apollo.MutationResult<CreateWalletMutation>;
export type CreateWalletMutationOptions = Apollo.BaseMutationOptions<CreateWalletMutation, CreateWalletMutationVariables>;
export const DeleteFillingQueueDocument = gql`
    mutation DeleteFillingQueue($request: DeleteFillingQueueRequest!) {
  deleteFillingQueue(request: $request)
}
    `;
export type DeleteFillingQueueMutationFn = Apollo.MutationFunction<DeleteFillingQueueMutation, DeleteFillingQueueMutationVariables>;

/**
 * __useDeleteFillingQueueMutation__
 *
 * To run a mutation, you first call `useDeleteFillingQueueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFillingQueueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFillingQueueMutation, { data, loading, error }] = useDeleteFillingQueueMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useDeleteFillingQueueMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFillingQueueMutation, DeleteFillingQueueMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFillingQueueMutation, DeleteFillingQueueMutationVariables>(DeleteFillingQueueDocument, options);
      }
export type DeleteFillingQueueMutationHookResult = ReturnType<typeof useDeleteFillingQueueMutation>;
export type DeleteFillingQueueMutationResult = Apollo.MutationResult<DeleteFillingQueueMutation>;
export type DeleteFillingQueueMutationOptions = Apollo.BaseMutationOptions<DeleteFillingQueueMutation, DeleteFillingQueueMutationVariables>;
export const DeleteProductDocument = gql`
    mutation DeleteProduct($request: DeleteProductRequest!) {
  deleteProduct(request: $request)
}
    `;
export type DeleteProductMutationFn = Apollo.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useDeleteProductMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, options);
      }
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<DeleteProductMutation, DeleteProductMutationVariables>;
export const DeleteSurveyDocument = gql`
    mutation DeleteSurvey($request: SurveyDeleteRequest!) {
  deleteSurvey(request: $request)
}
    `;
export type DeleteSurveyMutationFn = Apollo.MutationFunction<DeleteSurveyMutation, DeleteSurveyMutationVariables>;

/**
 * __useDeleteSurveyMutation__
 *
 * To run a mutation, you first call `useDeleteSurveyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSurveyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSurveyMutation, { data, loading, error }] = useDeleteSurveyMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useDeleteSurveyMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSurveyMutation, DeleteSurveyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSurveyMutation, DeleteSurveyMutationVariables>(DeleteSurveyDocument, options);
      }
export type DeleteSurveyMutationHookResult = ReturnType<typeof useDeleteSurveyMutation>;
export type DeleteSurveyMutationResult = Apollo.MutationResult<DeleteSurveyMutation>;
export type DeleteSurveyMutationOptions = Apollo.BaseMutationOptions<DeleteSurveyMutation, DeleteSurveyMutationVariables>;
export const DeleteSurveyResultDocument = gql`
    mutation DeleteSurveyResult($request: DeleteSurveyResultRequest!) {
  deleteSurveyResult(request: $request)
}
    `;
export type DeleteSurveyResultMutationFn = Apollo.MutationFunction<DeleteSurveyResultMutation, DeleteSurveyResultMutationVariables>;

/**
 * __useDeleteSurveyResultMutation__
 *
 * To run a mutation, you first call `useDeleteSurveyResultMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSurveyResultMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSurveyResultMutation, { data, loading, error }] = useDeleteSurveyResultMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useDeleteSurveyResultMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSurveyResultMutation, DeleteSurveyResultMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSurveyResultMutation, DeleteSurveyResultMutationVariables>(DeleteSurveyResultDocument, options);
      }
export type DeleteSurveyResultMutationHookResult = ReturnType<typeof useDeleteSurveyResultMutation>;
export type DeleteSurveyResultMutationResult = Apollo.MutationResult<DeleteSurveyResultMutation>;
export type DeleteSurveyResultMutationOptions = Apollo.BaseMutationOptions<DeleteSurveyResultMutation, DeleteSurveyResultMutationVariables>;
export const DeleteTransactionCreditDocument = gql`
    mutation DeleteTransactionCredit($request: DeleteTransactionCreditRequest!) {
  deleteTransactionCredit(request: $request)
}
    `;
export type DeleteTransactionCreditMutationFn = Apollo.MutationFunction<DeleteTransactionCreditMutation, DeleteTransactionCreditMutationVariables>;

/**
 * __useDeleteTransactionCreditMutation__
 *
 * To run a mutation, you first call `useDeleteTransactionCreditMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTransactionCreditMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTransactionCreditMutation, { data, loading, error }] = useDeleteTransactionCreditMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useDeleteTransactionCreditMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTransactionCreditMutation, DeleteTransactionCreditMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTransactionCreditMutation, DeleteTransactionCreditMutationVariables>(DeleteTransactionCreditDocument, options);
      }
export type DeleteTransactionCreditMutationHookResult = ReturnType<typeof useDeleteTransactionCreditMutation>;
export type DeleteTransactionCreditMutationResult = Apollo.MutationResult<DeleteTransactionCreditMutation>;
export type DeleteTransactionCreditMutationOptions = Apollo.BaseMutationOptions<DeleteTransactionCreditMutation, DeleteTransactionCreditMutationVariables>;
export const DeleteWalletDocument = gql`
    mutation DeleteWallet($request: DeleteWalletRequest!) {
  deleteWallet(request: $request)
}
    `;
export type DeleteWalletMutationFn = Apollo.MutationFunction<DeleteWalletMutation, DeleteWalletMutationVariables>;

/**
 * __useDeleteWalletMutation__
 *
 * To run a mutation, you first call `useDeleteWalletMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteWalletMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWalletMutation, { data, loading, error }] = useDeleteWalletMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useDeleteWalletMutation(baseOptions?: Apollo.MutationHookOptions<DeleteWalletMutation, DeleteWalletMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteWalletMutation, DeleteWalletMutationVariables>(DeleteWalletDocument, options);
      }
export type DeleteWalletMutationHookResult = ReturnType<typeof useDeleteWalletMutation>;
export type DeleteWalletMutationResult = Apollo.MutationResult<DeleteWalletMutation>;
export type DeleteWalletMutationOptions = Apollo.BaseMutationOptions<DeleteWalletMutation, DeleteWalletMutationVariables>;
export const InviteUserDocument = gql`
    mutation InviteUser($request: InviteUserRequest!) {
  inviteUser(request: $request) {
    ...UserFields
    __typename
  }
}
    ${UserFieldsFragmentDoc}`;
export type InviteUserMutationFn = Apollo.MutationFunction<InviteUserMutation, InviteUserMutationVariables>;

/**
 * __useInviteUserMutation__
 *
 * To run a mutation, you first call `useInviteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInviteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [inviteUserMutation, { data, loading, error }] = useInviteUserMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useInviteUserMutation(baseOptions?: Apollo.MutationHookOptions<InviteUserMutation, InviteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InviteUserMutation, InviteUserMutationVariables>(InviteUserDocument, options);
      }
export type InviteUserMutationHookResult = ReturnType<typeof useInviteUserMutation>;
export type InviteUserMutationResult = Apollo.MutationResult<InviteUserMutation>;
export type InviteUserMutationOptions = Apollo.BaseMutationOptions<InviteUserMutation, InviteUserMutationVariables>;
export const RefreshDocument = gql`
    mutation Refresh($request: RefreshRequest!) {
  refresh(request: $request) {
    accessToken
    refreshToken
  }
}
    `;
export type RefreshMutationFn = Apollo.MutationFunction<RefreshMutation, RefreshMutationVariables>;

/**
 * __useRefreshMutation__
 *
 * To run a mutation, you first call `useRefreshMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshMutation, { data, loading, error }] = useRefreshMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useRefreshMutation(baseOptions?: Apollo.MutationHookOptions<RefreshMutation, RefreshMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshMutation, RefreshMutationVariables>(RefreshDocument, options);
      }
export type RefreshMutationHookResult = ReturnType<typeof useRefreshMutation>;
export type RefreshMutationResult = Apollo.MutationResult<RefreshMutation>;
export type RefreshMutationOptions = Apollo.BaseMutationOptions<RefreshMutation, RefreshMutationVariables>;
export const RefundMarketplaceOrderDocument = gql`
    mutation RefundMarketplaceOrder($request: RefundMarketplaceOrderRequest!) {
  refundMarketplaceOrder(request: $request) {
    ...MarketplaceOrderFields
    __typename
  }
}
    ${MarketplaceOrderFieldsFragmentDoc}`;
export type RefundMarketplaceOrderMutationFn = Apollo.MutationFunction<RefundMarketplaceOrderMutation, RefundMarketplaceOrderMutationVariables>;

/**
 * __useRefundMarketplaceOrderMutation__
 *
 * To run a mutation, you first call `useRefundMarketplaceOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefundMarketplaceOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refundMarketplaceOrderMutation, { data, loading, error }] = useRefundMarketplaceOrderMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useRefundMarketplaceOrderMutation(baseOptions?: Apollo.MutationHookOptions<RefundMarketplaceOrderMutation, RefundMarketplaceOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefundMarketplaceOrderMutation, RefundMarketplaceOrderMutationVariables>(RefundMarketplaceOrderDocument, options);
      }
export type RefundMarketplaceOrderMutationHookResult = ReturnType<typeof useRefundMarketplaceOrderMutation>;
export type RefundMarketplaceOrderMutationResult = Apollo.MutationResult<RefundMarketplaceOrderMutation>;
export type RefundMarketplaceOrderMutationOptions = Apollo.BaseMutationOptions<RefundMarketplaceOrderMutation, RefundMarketplaceOrderMutationVariables>;
export const RegistryUserPrizeDocument = gql`
    mutation RegistryUserPrize($request: RegistryUserPrizeRequest!) {
  registryUserPrize(request: $request) {
    ...UserPrizeFields
    __typename
  }
}
    ${UserPrizeFieldsFragmentDoc}`;
export type RegistryUserPrizeMutationFn = Apollo.MutationFunction<RegistryUserPrizeMutation, RegistryUserPrizeMutationVariables>;

/**
 * __useRegistryUserPrizeMutation__
 *
 * To run a mutation, you first call `useRegistryUserPrizeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegistryUserPrizeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registryUserPrizeMutation, { data, loading, error }] = useRegistryUserPrizeMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useRegistryUserPrizeMutation(baseOptions?: Apollo.MutationHookOptions<RegistryUserPrizeMutation, RegistryUserPrizeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegistryUserPrizeMutation, RegistryUserPrizeMutationVariables>(RegistryUserPrizeDocument, options);
      }
export type RegistryUserPrizeMutationHookResult = ReturnType<typeof useRegistryUserPrizeMutation>;
export type RegistryUserPrizeMutationResult = Apollo.MutationResult<RegistryUserPrizeMutation>;
export type RegistryUserPrizeMutationOptions = Apollo.BaseMutationOptions<RegistryUserPrizeMutation, RegistryUserPrizeMutationVariables>;
export const ScoreSurveyResultDocument = gql`
    mutation ScoreSurveyResult($request: ScoreSurveyResultRequest!) {
  scoreSurveyResult(request: $request) {
    ...SurveyResultFields
    __typename
  }
}
    ${SurveyResultFieldsFragmentDoc}`;
export type ScoreSurveyResultMutationFn = Apollo.MutationFunction<ScoreSurveyResultMutation, ScoreSurveyResultMutationVariables>;

/**
 * __useScoreSurveyResultMutation__
 *
 * To run a mutation, you first call `useScoreSurveyResultMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useScoreSurveyResultMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [scoreSurveyResultMutation, { data, loading, error }] = useScoreSurveyResultMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useScoreSurveyResultMutation(baseOptions?: Apollo.MutationHookOptions<ScoreSurveyResultMutation, ScoreSurveyResultMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ScoreSurveyResultMutation, ScoreSurveyResultMutationVariables>(ScoreSurveyResultDocument, options);
      }
export type ScoreSurveyResultMutationHookResult = ReturnType<typeof useScoreSurveyResultMutation>;
export type ScoreSurveyResultMutationResult = Apollo.MutationResult<ScoreSurveyResultMutation>;
export type ScoreSurveyResultMutationOptions = Apollo.BaseMutationOptions<ScoreSurveyResultMutation, ScoreSurveyResultMutationVariables>;
export const SyncMediaProductsDocument = gql`
    mutation SyncMediaProducts($request: SyncMediaProductsRequest!) {
  syncMediaProducts(request: $request)
}
    `;
export type SyncMediaProductsMutationFn = Apollo.MutationFunction<SyncMediaProductsMutation, SyncMediaProductsMutationVariables>;

/**
 * __useSyncMediaProductsMutation__
 *
 * To run a mutation, you first call `useSyncMediaProductsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSyncMediaProductsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [syncMediaProductsMutation, { data, loading, error }] = useSyncMediaProductsMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSyncMediaProductsMutation(baseOptions?: Apollo.MutationHookOptions<SyncMediaProductsMutation, SyncMediaProductsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SyncMediaProductsMutation, SyncMediaProductsMutationVariables>(SyncMediaProductsDocument, options);
      }
export type SyncMediaProductsMutationHookResult = ReturnType<typeof useSyncMediaProductsMutation>;
export type SyncMediaProductsMutationResult = Apollo.MutationResult<SyncMediaProductsMutation>;
export type SyncMediaProductsMutationOptions = Apollo.BaseMutationOptions<SyncMediaProductsMutation, SyncMediaProductsMutationVariables>;
export const SyncNftGalleryDocument = gql`
    mutation SyncNftGallery($request: SyncNftGalleryRequest!) {
  syncNftGallery(request: $request)
}
    `;
export type SyncNftGalleryMutationFn = Apollo.MutationFunction<SyncNftGalleryMutation, SyncNftGalleryMutationVariables>;

/**
 * __useSyncNftGalleryMutation__
 *
 * To run a mutation, you first call `useSyncNftGalleryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSyncNftGalleryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [syncNftGalleryMutation, { data, loading, error }] = useSyncNftGalleryMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSyncNftGalleryMutation(baseOptions?: Apollo.MutationHookOptions<SyncNftGalleryMutation, SyncNftGalleryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SyncNftGalleryMutation, SyncNftGalleryMutationVariables>(SyncNftGalleryDocument, options);
      }
export type SyncNftGalleryMutationHookResult = ReturnType<typeof useSyncNftGalleryMutation>;
export type SyncNftGalleryMutationResult = Apollo.MutationResult<SyncNftGalleryMutation>;
export type SyncNftGalleryMutationOptions = Apollo.BaseMutationOptions<SyncNftGalleryMutation, SyncNftGalleryMutationVariables>;
export const SyncPageviewSourcesDocument = gql`
    mutation SyncPageviewSources($request: SyncPageviewSourcesRequest!) {
  syncPageviewSources(request: $request)
}
    `;
export type SyncPageviewSourcesMutationFn = Apollo.MutationFunction<SyncPageviewSourcesMutation, SyncPageviewSourcesMutationVariables>;

/**
 * __useSyncPageviewSourcesMutation__
 *
 * To run a mutation, you first call `useSyncPageviewSourcesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSyncPageviewSourcesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [syncPageviewSourcesMutation, { data, loading, error }] = useSyncPageviewSourcesMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSyncPageviewSourcesMutation(baseOptions?: Apollo.MutationHookOptions<SyncPageviewSourcesMutation, SyncPageviewSourcesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SyncPageviewSourcesMutation, SyncPageviewSourcesMutationVariables>(SyncPageviewSourcesDocument, options);
      }
export type SyncPageviewSourcesMutationHookResult = ReturnType<typeof useSyncPageviewSourcesMutation>;
export type SyncPageviewSourcesMutationResult = Apollo.MutationResult<SyncPageviewSourcesMutation>;
export type SyncPageviewSourcesMutationOptions = Apollo.BaseMutationOptions<SyncPageviewSourcesMutation, SyncPageviewSourcesMutationVariables>;
export const UpdateAnonymousUserDocument = gql`
    mutation UpdateAnonymousUser($request: UpdateAnonymousUserRequest!) {
  updateAnonymousUser(request: $request) {
    ...AnonymousUserFields
    __typename
  }
}
    ${AnonymousUserFieldsFragmentDoc}`;
export type UpdateAnonymousUserMutationFn = Apollo.MutationFunction<UpdateAnonymousUserMutation, UpdateAnonymousUserMutationVariables>;

/**
 * __useUpdateAnonymousUserMutation__
 *
 * To run a mutation, you first call `useUpdateAnonymousUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAnonymousUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAnonymousUserMutation, { data, loading, error }] = useUpdateAnonymousUserMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateAnonymousUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAnonymousUserMutation, UpdateAnonymousUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAnonymousUserMutation, UpdateAnonymousUserMutationVariables>(UpdateAnonymousUserDocument, options);
      }
export type UpdateAnonymousUserMutationHookResult = ReturnType<typeof useUpdateAnonymousUserMutation>;
export type UpdateAnonymousUserMutationResult = Apollo.MutationResult<UpdateAnonymousUserMutation>;
export type UpdateAnonymousUserMutationOptions = Apollo.BaseMutationOptions<UpdateAnonymousUserMutation, UpdateAnonymousUserMutationVariables>;
export const UpdateEmbedSurveyResultDocument = gql`
    mutation UpdateEmbedSurveyResult($request: UpdateEmbedSurveyResultRequest!) {
  updateEmbedSurveyResult(request: $request) {
    ...EmbedSurveyResultFields
    __typename
  }
}
    ${EmbedSurveyResultFieldsFragmentDoc}`;
export type UpdateEmbedSurveyResultMutationFn = Apollo.MutationFunction<UpdateEmbedSurveyResultMutation, UpdateEmbedSurveyResultMutationVariables>;

/**
 * __useUpdateEmbedSurveyResultMutation__
 *
 * To run a mutation, you first call `useUpdateEmbedSurveyResultMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEmbedSurveyResultMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEmbedSurveyResultMutation, { data, loading, error }] = useUpdateEmbedSurveyResultMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateEmbedSurveyResultMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEmbedSurveyResultMutation, UpdateEmbedSurveyResultMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEmbedSurveyResultMutation, UpdateEmbedSurveyResultMutationVariables>(UpdateEmbedSurveyResultDocument, options);
      }
export type UpdateEmbedSurveyResultMutationHookResult = ReturnType<typeof useUpdateEmbedSurveyResultMutation>;
export type UpdateEmbedSurveyResultMutationResult = Apollo.MutationResult<UpdateEmbedSurveyResultMutation>;
export type UpdateEmbedSurveyResultMutationOptions = Apollo.BaseMutationOptions<UpdateEmbedSurveyResultMutation, UpdateEmbedSurveyResultMutationVariables>;
export const UpdateFillingQueueDocument = gql`
    mutation UpdateFillingQueue($request: UpdateFillingQueueRequest!) {
  updateFillingQueue(request: $request) {
    ...FillingQueueFields
    __typename
  }
}
    ${FillingQueueFieldsFragmentDoc}`;
export type UpdateFillingQueueMutationFn = Apollo.MutationFunction<UpdateFillingQueueMutation, UpdateFillingQueueMutationVariables>;

/**
 * __useUpdateFillingQueueMutation__
 *
 * To run a mutation, you first call `useUpdateFillingQueueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFillingQueueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFillingQueueMutation, { data, loading, error }] = useUpdateFillingQueueMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateFillingQueueMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFillingQueueMutation, UpdateFillingQueueMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFillingQueueMutation, UpdateFillingQueueMutationVariables>(UpdateFillingQueueDocument, options);
      }
export type UpdateFillingQueueMutationHookResult = ReturnType<typeof useUpdateFillingQueueMutation>;
export type UpdateFillingQueueMutationResult = Apollo.MutationResult<UpdateFillingQueueMutation>;
export type UpdateFillingQueueMutationOptions = Apollo.BaseMutationOptions<UpdateFillingQueueMutation, UpdateFillingQueueMutationVariables>;
export const UpdateMarketplaceOrderDocument = gql`
    mutation UpdateMarketplaceOrder($request: UpdateMarketplaceOrderRequest!) {
  updateMarketplaceOrder(request: $request) {
    ...MarketplaceOrderFields
    __typename
  }
}
    ${MarketplaceOrderFieldsFragmentDoc}`;
export type UpdateMarketplaceOrderMutationFn = Apollo.MutationFunction<UpdateMarketplaceOrderMutation, UpdateMarketplaceOrderMutationVariables>;

/**
 * __useUpdateMarketplaceOrderMutation__
 *
 * To run a mutation, you first call `useUpdateMarketplaceOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMarketplaceOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMarketplaceOrderMutation, { data, loading, error }] = useUpdateMarketplaceOrderMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateMarketplaceOrderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMarketplaceOrderMutation, UpdateMarketplaceOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMarketplaceOrderMutation, UpdateMarketplaceOrderMutationVariables>(UpdateMarketplaceOrderDocument, options);
      }
export type UpdateMarketplaceOrderMutationHookResult = ReturnType<typeof useUpdateMarketplaceOrderMutation>;
export type UpdateMarketplaceOrderMutationResult = Apollo.MutationResult<UpdateMarketplaceOrderMutation>;
export type UpdateMarketplaceOrderMutationOptions = Apollo.BaseMutationOptions<UpdateMarketplaceOrderMutation, UpdateMarketplaceOrderMutationVariables>;
export const UpdateProductDocument = gql`
    mutation UpdateProduct($request: UpdateProductRequest!) {
  updateProduct(request: $request) {
    ...ProductFields
    __typename
  }
}
    ${ProductFieldsFragmentDoc}`;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, options);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const UpdateProfileDocument = gql`
    mutation UpdateProfile($request: UpdateProfileRequest!) {
  updateProfile(request: $request) {
    ...UserFields
    __typename
  }
}
    ${UserFieldsFragmentDoc}`;
export type UpdateProfileMutationFn = Apollo.MutationFunction<UpdateProfileMutation, UpdateProfileMutationVariables>;

/**
 * __useUpdateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileMutation, UpdateProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfileMutation, UpdateProfileMutationVariables>(UpdateProfileDocument, options);
      }
export type UpdateProfileMutationHookResult = ReturnType<typeof useUpdateProfileMutation>;
export type UpdateProfileMutationResult = Apollo.MutationResult<UpdateProfileMutation>;
export type UpdateProfileMutationOptions = Apollo.BaseMutationOptions<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const UpdateSurveyDocument = gql`
    mutation UpdateSurvey($request: SurveyUpdateInfoRequest!) {
  updateSurvey(request: $request) {
    ...SurveyFields
    __typename
  }
}
    ${SurveyFieldsFragmentDoc}`;
export type UpdateSurveyMutationFn = Apollo.MutationFunction<UpdateSurveyMutation, UpdateSurveyMutationVariables>;

/**
 * __useUpdateSurveyMutation__
 *
 * To run a mutation, you first call `useUpdateSurveyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSurveyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSurveyMutation, { data, loading, error }] = useUpdateSurveyMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateSurveyMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSurveyMutation, UpdateSurveyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSurveyMutation, UpdateSurveyMutationVariables>(UpdateSurveyDocument, options);
      }
export type UpdateSurveyMutationHookResult = ReturnType<typeof useUpdateSurveyMutation>;
export type UpdateSurveyMutationResult = Apollo.MutationResult<UpdateSurveyMutation>;
export type UpdateSurveyMutationOptions = Apollo.BaseMutationOptions<UpdateSurveyMutation, UpdateSurveyMutationVariables>;
export const UpdateSurveyGatingDocument = gql`
    mutation UpdateSurveyGating($request: UpdateSurveyGatingRequest!) {
  updateSurveyGating(request: $request) {
    ...SurveyGatingFields
    __typename
  }
}
    ${SurveyGatingFieldsFragmentDoc}`;
export type UpdateSurveyGatingMutationFn = Apollo.MutationFunction<UpdateSurveyGatingMutation, UpdateSurveyGatingMutationVariables>;

/**
 * __useUpdateSurveyGatingMutation__
 *
 * To run a mutation, you first call `useUpdateSurveyGatingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSurveyGatingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSurveyGatingMutation, { data, loading, error }] = useUpdateSurveyGatingMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateSurveyGatingMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSurveyGatingMutation, UpdateSurveyGatingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSurveyGatingMutation, UpdateSurveyGatingMutationVariables>(UpdateSurveyGatingDocument, options);
      }
export type UpdateSurveyGatingMutationHookResult = ReturnType<typeof useUpdateSurveyGatingMutation>;
export type UpdateSurveyGatingMutationResult = Apollo.MutationResult<UpdateSurveyGatingMutation>;
export type UpdateSurveyGatingMutationOptions = Apollo.BaseMutationOptions<UpdateSurveyGatingMutation, UpdateSurveyGatingMutationVariables>;
export const UpdateSurveyReferralDocument = gql`
    mutation UpdateSurveyReferral($request: UpdateSurveyReferralRequest!) {
  updateSurveyReferral(request: $request) {
    ...SurveyReferralFields
    __typename
  }
}
    ${SurveyReferralFieldsFragmentDoc}`;
export type UpdateSurveyReferralMutationFn = Apollo.MutationFunction<UpdateSurveyReferralMutation, UpdateSurveyReferralMutationVariables>;

/**
 * __useUpdateSurveyReferralMutation__
 *
 * To run a mutation, you first call `useUpdateSurveyReferralMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSurveyReferralMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSurveyReferralMutation, { data, loading, error }] = useUpdateSurveyReferralMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateSurveyReferralMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSurveyReferralMutation, UpdateSurveyReferralMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSurveyReferralMutation, UpdateSurveyReferralMutationVariables>(UpdateSurveyReferralDocument, options);
      }
export type UpdateSurveyReferralMutationHookResult = ReturnType<typeof useUpdateSurveyReferralMutation>;
export type UpdateSurveyReferralMutationResult = Apollo.MutationResult<UpdateSurveyReferralMutation>;
export type UpdateSurveyReferralMutationOptions = Apollo.BaseMutationOptions<UpdateSurveyReferralMutation, UpdateSurveyReferralMutationVariables>;
export const UpdateSurveyResultDocument = gql`
    mutation UpdateSurveyResult($request: UpdateSurveyResultRequest!) {
  updateSurveyResult(request: $request) {
    ...SurveyResultFields
    __typename
  }
}
    ${SurveyResultFieldsFragmentDoc}`;
export type UpdateSurveyResultMutationFn = Apollo.MutationFunction<UpdateSurveyResultMutation, UpdateSurveyResultMutationVariables>;

/**
 * __useUpdateSurveyResultMutation__
 *
 * To run a mutation, you first call `useUpdateSurveyResultMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSurveyResultMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSurveyResultMutation, { data, loading, error }] = useUpdateSurveyResultMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateSurveyResultMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSurveyResultMutation, UpdateSurveyResultMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSurveyResultMutation, UpdateSurveyResultMutationVariables>(UpdateSurveyResultDocument, options);
      }
export type UpdateSurveyResultMutationHookResult = ReturnType<typeof useUpdateSurveyResultMutation>;
export type UpdateSurveyResultMutationResult = Apollo.MutationResult<UpdateSurveyResultMutation>;
export type UpdateSurveyResultMutationOptions = Apollo.BaseMutationOptions<UpdateSurveyResultMutation, UpdateSurveyResultMutationVariables>;
export const UpdateSurveyRewardDocument = gql`
    mutation UpdateSurveyReward($request: UpdateSurveyRewardRequest!) {
  updateSurveyReward(request: $request) {
    ...SurveyRewardFields
    __typename
  }
}
    ${SurveyRewardFieldsFragmentDoc}`;
export type UpdateSurveyRewardMutationFn = Apollo.MutationFunction<UpdateSurveyRewardMutation, UpdateSurveyRewardMutationVariables>;

/**
 * __useUpdateSurveyRewardMutation__
 *
 * To run a mutation, you first call `useUpdateSurveyRewardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSurveyRewardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSurveyRewardMutation, { data, loading, error }] = useUpdateSurveyRewardMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateSurveyRewardMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSurveyRewardMutation, UpdateSurveyRewardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSurveyRewardMutation, UpdateSurveyRewardMutationVariables>(UpdateSurveyRewardDocument, options);
      }
export type UpdateSurveyRewardMutationHookResult = ReturnType<typeof useUpdateSurveyRewardMutation>;
export type UpdateSurveyRewardMutationResult = Apollo.MutationResult<UpdateSurveyRewardMutation>;
export type UpdateSurveyRewardMutationOptions = Apollo.BaseMutationOptions<UpdateSurveyRewardMutation, UpdateSurveyRewardMutationVariables>;
export const UpdateTransactionCreditDocument = gql`
    mutation UpdateTransactionCredit($request: UpdateTransactionCreditRequest!) {
  updateTransactionCredit(request: $request) {
    ...TransactionCreditFields
    __typename
  }
}
    ${TransactionCreditFieldsFragmentDoc}`;
export type UpdateTransactionCreditMutationFn = Apollo.MutationFunction<UpdateTransactionCreditMutation, UpdateTransactionCreditMutationVariables>;

/**
 * __useUpdateTransactionCreditMutation__
 *
 * To run a mutation, you first call `useUpdateTransactionCreditMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTransactionCreditMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTransactionCreditMutation, { data, loading, error }] = useUpdateTransactionCreditMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateTransactionCreditMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTransactionCreditMutation, UpdateTransactionCreditMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTransactionCreditMutation, UpdateTransactionCreditMutationVariables>(UpdateTransactionCreditDocument, options);
      }
export type UpdateTransactionCreditMutationHookResult = ReturnType<typeof useUpdateTransactionCreditMutation>;
export type UpdateTransactionCreditMutationResult = Apollo.MutationResult<UpdateTransactionCreditMutation>;
export type UpdateTransactionCreditMutationOptions = Apollo.BaseMutationOptions<UpdateTransactionCreditMutation, UpdateTransactionCreditMutationVariables>;
export const UpdateUserBoostDocument = gql`
    mutation UpdateUserBoost($request: UpdateUserBoostRequest!) {
  updateUserBoost(request: $request) {
    ...UserBoostFields
    __typename
  }
}
    ${UserBoostFieldsFragmentDoc}`;
export type UpdateUserBoostMutationFn = Apollo.MutationFunction<UpdateUserBoostMutation, UpdateUserBoostMutationVariables>;

/**
 * __useUpdateUserBoostMutation__
 *
 * To run a mutation, you first call `useUpdateUserBoostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserBoostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserBoostMutation, { data, loading, error }] = useUpdateUserBoostMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateUserBoostMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserBoostMutation, UpdateUserBoostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserBoostMutation, UpdateUserBoostMutationVariables>(UpdateUserBoostDocument, options);
      }
export type UpdateUserBoostMutationHookResult = ReturnType<typeof useUpdateUserBoostMutation>;
export type UpdateUserBoostMutationResult = Apollo.MutationResult<UpdateUserBoostMutation>;
export type UpdateUserBoostMutationOptions = Apollo.BaseMutationOptions<UpdateUserBoostMutation, UpdateUserBoostMutationVariables>;
export const UpdateUserMembershipDocument = gql`
    mutation UpdateUserMembership($request: UpdateUserMembershipRequest!) {
  updateUserMembership(request: $request) {
    ...UserMembershipFields
    __typename
  }
}
    ${UserMembershipFieldsFragmentDoc}`;
export type UpdateUserMembershipMutationFn = Apollo.MutationFunction<UpdateUserMembershipMutation, UpdateUserMembershipMutationVariables>;

/**
 * __useUpdateUserMembershipMutation__
 *
 * To run a mutation, you first call `useUpdateUserMembershipMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMembershipMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMembershipMutation, { data, loading, error }] = useUpdateUserMembershipMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateUserMembershipMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMembershipMutation, UpdateUserMembershipMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMembershipMutation, UpdateUserMembershipMutationVariables>(UpdateUserMembershipDocument, options);
      }
export type UpdateUserMembershipMutationHookResult = ReturnType<typeof useUpdateUserMembershipMutation>;
export type UpdateUserMembershipMutationResult = Apollo.MutationResult<UpdateUserMembershipMutation>;
export type UpdateUserMembershipMutationOptions = Apollo.BaseMutationOptions<UpdateUserMembershipMutation, UpdateUserMembershipMutationVariables>;
export const UpdateUserRefferalDocument = gql`
    mutation UpdateUserRefferal($request: UpdateUserRefferalRequest!) {
  updateUserRefferal(request: $request) {
    ...UserRefferalFields
    __typename
  }
}
    ${UserRefferalFieldsFragmentDoc}`;
export type UpdateUserRefferalMutationFn = Apollo.MutationFunction<UpdateUserRefferalMutation, UpdateUserRefferalMutationVariables>;

/**
 * __useUpdateUserRefferalMutation__
 *
 * To run a mutation, you first call `useUpdateUserRefferalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserRefferalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserRefferalMutation, { data, loading, error }] = useUpdateUserRefferalMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateUserRefferalMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserRefferalMutation, UpdateUserRefferalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserRefferalMutation, UpdateUserRefferalMutationVariables>(UpdateUserRefferalDocument, options);
      }
export type UpdateUserRefferalMutationHookResult = ReturnType<typeof useUpdateUserRefferalMutation>;
export type UpdateUserRefferalMutationResult = Apollo.MutationResult<UpdateUserRefferalMutation>;
export type UpdateUserRefferalMutationOptions = Apollo.BaseMutationOptions<UpdateUserRefferalMutation, UpdateUserRefferalMutationVariables>;
export const UpdateWalletDocument = gql`
    mutation UpdateWallet($request: UpdateWalletRequest!) {
  updateWallet(request: $request) {
    ...WalletFields
    __typename
  }
}
    ${WalletFieldsFragmentDoc}`;
export type UpdateWalletMutationFn = Apollo.MutationFunction<UpdateWalletMutation, UpdateWalletMutationVariables>;

/**
 * __useUpdateWalletMutation__
 *
 * To run a mutation, you first call `useUpdateWalletMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWalletMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWalletMutation, { data, loading, error }] = useUpdateWalletMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateWalletMutation(baseOptions?: Apollo.MutationHookOptions<UpdateWalletMutation, UpdateWalletMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateWalletMutation, UpdateWalletMutationVariables>(UpdateWalletDocument, options);
      }
export type UpdateWalletMutationHookResult = ReturnType<typeof useUpdateWalletMutation>;
export type UpdateWalletMutationResult = Apollo.MutationResult<UpdateWalletMutation>;
export type UpdateWalletMutationOptions = Apollo.BaseMutationOptions<UpdateWalletMutation, UpdateWalletMutationVariables>;
export const VerifyUserDocument = gql`
    mutation VerifyUser($request: VerifyUserRequest!) {
  verifyUser(request: $request) {
    ...UserFields
    __typename
  }
}
    ${UserFieldsFragmentDoc}`;
export type VerifyUserMutationFn = Apollo.MutationFunction<VerifyUserMutation, VerifyUserMutationVariables>;

/**
 * __useVerifyUserMutation__
 *
 * To run a mutation, you first call `useVerifyUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyUserMutation, { data, loading, error }] = useVerifyUserMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useVerifyUserMutation(baseOptions?: Apollo.MutationHookOptions<VerifyUserMutation, VerifyUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyUserMutation, VerifyUserMutationVariables>(VerifyUserDocument, options);
      }
export type VerifyUserMutationHookResult = ReturnType<typeof useVerifyUserMutation>;
export type VerifyUserMutationResult = Apollo.MutationResult<VerifyUserMutation>;
export type VerifyUserMutationOptions = Apollo.BaseMutationOptions<VerifyUserMutation, VerifyUserMutationVariables>;
export const AnonymousUserDocument = gql`
    query AnonymousUser($request: AnonymousUserQueryRequest!) {
  anonymousUser(request: $request) {
    ...AnonymousUserFields
  }
}
    ${AnonymousUserFieldsFragmentDoc}`;

/**
 * __useAnonymousUserQuery__
 *
 * To run a query within a React component, call `useAnonymousUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnonymousUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnonymousUserQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useAnonymousUserQuery(baseOptions: Apollo.QueryHookOptions<AnonymousUserQuery, AnonymousUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AnonymousUserQuery, AnonymousUserQueryVariables>(AnonymousUserDocument, options);
      }
export function useAnonymousUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AnonymousUserQuery, AnonymousUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AnonymousUserQuery, AnonymousUserQueryVariables>(AnonymousUserDocument, options);
        }
export type AnonymousUserQueryHookResult = ReturnType<typeof useAnonymousUserQuery>;
export type AnonymousUserLazyQueryHookResult = ReturnType<typeof useAnonymousUserLazyQuery>;
export type AnonymousUserQueryResult = Apollo.QueryResult<AnonymousUserQuery, AnonymousUserQueryVariables>;
export const ChallengeDocument = gql`
    query Challenge($request: ChallengeRequest!) {
  challenge(request: $request) {
    text
  }
}
    `;

/**
 * __useChallengeQuery__
 *
 * To run a query within a React component, call `useChallengeQuery` and pass it any options that fit your needs.
 * When your component renders, `useChallengeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChallengeQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useChallengeQuery(baseOptions: Apollo.QueryHookOptions<ChallengeQuery, ChallengeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChallengeQuery, ChallengeQueryVariables>(ChallengeDocument, options);
      }
export function useChallengeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChallengeQuery, ChallengeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChallengeQuery, ChallengeQueryVariables>(ChallengeDocument, options);
        }
export type ChallengeQueryHookResult = ReturnType<typeof useChallengeQuery>;
export type ChallengeLazyQueryHookResult = ReturnType<typeof useChallengeLazyQuery>;
export type ChallengeQueryResult = Apollo.QueryResult<ChallengeQuery, ChallengeQueryVariables>;
export const CheckTransactionDocument = gql`
    query CheckTransaction($request: TransactionHashRequest!) {
  checkTransaction(request: $request) {
    ...TransactionCreditFields
  }
}
    ${TransactionCreditFieldsFragmentDoc}`;

/**
 * __useCheckTransactionQuery__
 *
 * To run a query within a React component, call `useCheckTransactionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckTransactionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckTransactionQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCheckTransactionQuery(baseOptions: Apollo.QueryHookOptions<CheckTransactionQuery, CheckTransactionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckTransactionQuery, CheckTransactionQueryVariables>(CheckTransactionDocument, options);
      }
export function useCheckTransactionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckTransactionQuery, CheckTransactionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckTransactionQuery, CheckTransactionQueryVariables>(CheckTransactionDocument, options);
        }
export type CheckTransactionQueryHookResult = ReturnType<typeof useCheckTransactionQuery>;
export type CheckTransactionLazyQueryHookResult = ReturnType<typeof useCheckTransactionLazyQuery>;
export type CheckTransactionQueryResult = Apollo.QueryResult<CheckTransactionQuery, CheckTransactionQueryVariables>;
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
export const EmbedSurveyResultsDocument = gql`
    query EmbedSurveyResults($request: EmbedSurveyResultQueryRequest!) {
  embedSurveyResults(request: $request) {
    items {
      ...EmbedSurveyResultFields
    }
  }
}
    ${EmbedSurveyResultFieldsFragmentDoc}`;

/**
 * __useEmbedSurveyResultsQuery__
 *
 * To run a query within a React component, call `useEmbedSurveyResultsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEmbedSurveyResultsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEmbedSurveyResultsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useEmbedSurveyResultsQuery(baseOptions: Apollo.QueryHookOptions<EmbedSurveyResultsQuery, EmbedSurveyResultsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EmbedSurveyResultsQuery, EmbedSurveyResultsQueryVariables>(EmbedSurveyResultsDocument, options);
      }
export function useEmbedSurveyResultsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EmbedSurveyResultsQuery, EmbedSurveyResultsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EmbedSurveyResultsQuery, EmbedSurveyResultsQueryVariables>(EmbedSurveyResultsDocument, options);
        }
export type EmbedSurveyResultsQueryHookResult = ReturnType<typeof useEmbedSurveyResultsQuery>;
export type EmbedSurveyResultsLazyQueryHookResult = ReturnType<typeof useEmbedSurveyResultsLazyQuery>;
export type EmbedSurveyResultsQueryResult = Apollo.QueryResult<EmbedSurveyResultsQuery, EmbedSurveyResultsQueryVariables>;
export const FillingQueueDocument = gql`
    query FillingQueue($request: FillingQueueQueryRequest!) {
  fillingQueue(request: $request) {
    items {
      ...FillingQueueFields
    }
  }
}
    ${FillingQueueFieldsFragmentDoc}`;

/**
 * __useFillingQueueQuery__
 *
 * To run a query within a React component, call `useFillingQueueQuery` and pass it any options that fit your needs.
 * When your component renders, `useFillingQueueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFillingQueueQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useFillingQueueQuery(baseOptions: Apollo.QueryHookOptions<FillingQueueQuery, FillingQueueQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FillingQueueQuery, FillingQueueQueryVariables>(FillingQueueDocument, options);
      }
export function useFillingQueueLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FillingQueueQuery, FillingQueueQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FillingQueueQuery, FillingQueueQueryVariables>(FillingQueueDocument, options);
        }
export type FillingQueueQueryHookResult = ReturnType<typeof useFillingQueueQuery>;
export type FillingQueueLazyQueryHookResult = ReturnType<typeof useFillingQueueLazyQuery>;
export type FillingQueueQueryResult = Apollo.QueryResult<FillingQueueQuery, FillingQueueQueryVariables>;
export const LeaderboardEntriesDocument = gql`
    query LeaderboardEntries($request: LeaderboardEntriesRequest!) {
  leaderboardEntries(request: $request) {
    items {
      ...LeaderboardEntryFields
    }
  }
}
    ${LeaderboardEntryFieldsFragmentDoc}`;

/**
 * __useLeaderboardEntriesQuery__
 *
 * To run a query within a React component, call `useLeaderboardEntriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLeaderboardEntriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLeaderboardEntriesQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useLeaderboardEntriesQuery(baseOptions: Apollo.QueryHookOptions<LeaderboardEntriesQuery, LeaderboardEntriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LeaderboardEntriesQuery, LeaderboardEntriesQueryVariables>(LeaderboardEntriesDocument, options);
      }
export function useLeaderboardEntriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LeaderboardEntriesQuery, LeaderboardEntriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LeaderboardEntriesQuery, LeaderboardEntriesQueryVariables>(LeaderboardEntriesDocument, options);
        }
export type LeaderboardEntriesQueryHookResult = ReturnType<typeof useLeaderboardEntriesQuery>;
export type LeaderboardEntriesLazyQueryHookResult = ReturnType<typeof useLeaderboardEntriesLazyQuery>;
export type LeaderboardEntriesQueryResult = Apollo.QueryResult<LeaderboardEntriesQuery, LeaderboardEntriesQueryVariables>;
export const MarketplaceOrderDocument = gql`
    query MarketplaceOrder($request: MarketplaceOrderQueryRequest!) {
  marketplaceOrder(request: $request) {
    ...MarketplaceOrderFields
  }
}
    ${MarketplaceOrderFieldsFragmentDoc}`;

/**
 * __useMarketplaceOrderQuery__
 *
 * To run a query within a React component, call `useMarketplaceOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useMarketplaceOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMarketplaceOrderQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useMarketplaceOrderQuery(baseOptions: Apollo.QueryHookOptions<MarketplaceOrderQuery, MarketplaceOrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MarketplaceOrderQuery, MarketplaceOrderQueryVariables>(MarketplaceOrderDocument, options);
      }
export function useMarketplaceOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MarketplaceOrderQuery, MarketplaceOrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MarketplaceOrderQuery, MarketplaceOrderQueryVariables>(MarketplaceOrderDocument, options);
        }
export type MarketplaceOrderQueryHookResult = ReturnType<typeof useMarketplaceOrderQuery>;
export type MarketplaceOrderLazyQueryHookResult = ReturnType<typeof useMarketplaceOrderLazyQuery>;
export type MarketplaceOrderQueryResult = Apollo.QueryResult<MarketplaceOrderQuery, MarketplaceOrderQueryVariables>;
export const MarketplaceOrdersDocument = gql`
    query MarketplaceOrders($request: MarketplaceOrdersQueryRequest!) {
  marketplaceOrders(request: $request) {
    items {
      ...MarketplaceOrderFields
    }
  }
}
    ${MarketplaceOrderFieldsFragmentDoc}`;

/**
 * __useMarketplaceOrdersQuery__
 *
 * To run a query within a React component, call `useMarketplaceOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useMarketplaceOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMarketplaceOrdersQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useMarketplaceOrdersQuery(baseOptions: Apollo.QueryHookOptions<MarketplaceOrdersQuery, MarketplaceOrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MarketplaceOrdersQuery, MarketplaceOrdersQueryVariables>(MarketplaceOrdersDocument, options);
      }
export function useMarketplaceOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MarketplaceOrdersQuery, MarketplaceOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MarketplaceOrdersQuery, MarketplaceOrdersQueryVariables>(MarketplaceOrdersDocument, options);
        }
export type MarketplaceOrdersQueryHookResult = ReturnType<typeof useMarketplaceOrdersQuery>;
export type MarketplaceOrdersLazyQueryHookResult = ReturnType<typeof useMarketplaceOrdersLazyQuery>;
export type MarketplaceOrdersQueryResult = Apollo.QueryResult<MarketplaceOrdersQuery, MarketplaceOrdersQueryVariables>;
export const MethodsPromotionDocument = gql`
    query MethodsPromotion {
  methodsPromotions {
    name
    totalCount
    effectiveness
  }
}
    `;

/**
 * __useMethodsPromotionQuery__
 *
 * To run a query within a React component, call `useMethodsPromotionQuery` and pass it any options that fit your needs.
 * When your component renders, `useMethodsPromotionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMethodsPromotionQuery({
 *   variables: {
 *   },
 * });
 */
export function useMethodsPromotionQuery(baseOptions?: Apollo.QueryHookOptions<MethodsPromotionQuery, MethodsPromotionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MethodsPromotionQuery, MethodsPromotionQueryVariables>(MethodsPromotionDocument, options);
      }
export function useMethodsPromotionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MethodsPromotionQuery, MethodsPromotionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MethodsPromotionQuery, MethodsPromotionQueryVariables>(MethodsPromotionDocument, options);
        }
export type MethodsPromotionQueryHookResult = ReturnType<typeof useMethodsPromotionQuery>;
export type MethodsPromotionLazyQueryHookResult = ReturnType<typeof useMethodsPromotionLazyQuery>;
export type MethodsPromotionQueryResult = Apollo.QueryResult<MethodsPromotionQuery, MethodsPromotionQueryVariables>;
export const NftGalleriesDocument = gql`
    query NftGalleries($request: NftGalleriesQueryRequest!) {
  nftGalleries(request: $request) {
    items {
      ...NftGalleryFields
    }
  }
}
    ${NftGalleryFieldsFragmentDoc}`;

/**
 * __useNftGalleriesQuery__
 *
 * To run a query within a React component, call `useNftGalleriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useNftGalleriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNftGalleriesQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useNftGalleriesQuery(baseOptions: Apollo.QueryHookOptions<NftGalleriesQuery, NftGalleriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NftGalleriesQuery, NftGalleriesQueryVariables>(NftGalleriesDocument, options);
      }
export function useNftGalleriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NftGalleriesQuery, NftGalleriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NftGalleriesQuery, NftGalleriesQueryVariables>(NftGalleriesDocument, options);
        }
export type NftGalleriesQueryHookResult = ReturnType<typeof useNftGalleriesQuery>;
export type NftGalleriesLazyQueryHookResult = ReturnType<typeof useNftGalleriesLazyQuery>;
export type NftGalleriesQueryResult = Apollo.QueryResult<NftGalleriesQuery, NftGalleriesQueryVariables>;
export const NftUserGalleriesDocument = gql`
    query NftUserGalleries($request: NftGalleriesQueryRequest!) {
  nftUserGalleries(request: $request) {
    items {
      ...NftGalleryFields
    }
    pageInfo {
      totalCount
      next
    }
  }
}
    ${NftGalleryFieldsFragmentDoc}`;

/**
 * __useNftUserGalleriesQuery__
 *
 * To run a query within a React component, call `useNftUserGalleriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useNftUserGalleriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNftUserGalleriesQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useNftUserGalleriesQuery(baseOptions: Apollo.QueryHookOptions<NftUserGalleriesQuery, NftUserGalleriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NftUserGalleriesQuery, NftUserGalleriesQueryVariables>(NftUserGalleriesDocument, options);
      }
export function useNftUserGalleriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NftUserGalleriesQuery, NftUserGalleriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NftUserGalleriesQuery, NftUserGalleriesQueryVariables>(NftUserGalleriesDocument, options);
        }
export type NftUserGalleriesQueryHookResult = ReturnType<typeof useNftUserGalleriesQuery>;
export type NftUserGalleriesLazyQueryHookResult = ReturnType<typeof useNftUserGalleriesLazyQuery>;
export type NftUserGalleriesQueryResult = Apollo.QueryResult<NftUserGalleriesQuery, NftUserGalleriesQueryVariables>;
export const NftsDocument = gql`
    query Nfts($request: NftsRequest!) {
  nfts(request: $request) {
    items {
      ...NftFields
    }
    pageInfo {
      totalCount
      next
    }
  }
}
    ${NftFieldsFragmentDoc}`;

/**
 * __useNftsQuery__
 *
 * To run a query within a React component, call `useNftsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNftsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNftsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useNftsQuery(baseOptions: Apollo.QueryHookOptions<NftsQuery, NftsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NftsQuery, NftsQueryVariables>(NftsDocument, options);
      }
export function useNftsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NftsQuery, NftsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NftsQuery, NftsQueryVariables>(NftsDocument, options);
        }
export type NftsQueryHookResult = ReturnType<typeof useNftsQuery>;
export type NftsLazyQueryHookResult = ReturnType<typeof useNftsLazyQuery>;
export type NftsQueryResult = Apollo.QueryResult<NftsQuery, NftsQueryVariables>;
export const ProductDocument = gql`
    query Product($request: ProductQueryRequest!) {
  product(request: $request) {
    ...ProductFields
  }
}
    ${ProductFieldsFragmentDoc}`;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useProductQuery(baseOptions: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
      }
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
        }
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;
export const ProductsDocument = gql`
    query Products($request: ProductsQueryRequest!) {
  products(request: $request) {
    items {
      ...ProductFields
    }
    pageInfo {
      totalCount
      next
    }
  }
}
    ${ProductFieldsFragmentDoc}`;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useProductsQuery(baseOptions: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const SaleHistoryPerBusinessAnalyticsDocument = gql`
    query SaleHistoryPerBusinessAnalytics($request: SaleHistoryPerBusinessRequest!) {
  saleHistoryPerBusinessAnalytics(request: $request) {
    items {
      ...SaleItemFields
    }
    total
  }
}
    ${SaleItemFieldsFragmentDoc}`;

/**
 * __useSaleHistoryPerBusinessAnalyticsQuery__
 *
 * To run a query within a React component, call `useSaleHistoryPerBusinessAnalyticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSaleHistoryPerBusinessAnalyticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSaleHistoryPerBusinessAnalyticsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSaleHistoryPerBusinessAnalyticsQuery(baseOptions: Apollo.QueryHookOptions<SaleHistoryPerBusinessAnalyticsQuery, SaleHistoryPerBusinessAnalyticsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SaleHistoryPerBusinessAnalyticsQuery, SaleHistoryPerBusinessAnalyticsQueryVariables>(SaleHistoryPerBusinessAnalyticsDocument, options);
      }
export function useSaleHistoryPerBusinessAnalyticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SaleHistoryPerBusinessAnalyticsQuery, SaleHistoryPerBusinessAnalyticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SaleHistoryPerBusinessAnalyticsQuery, SaleHistoryPerBusinessAnalyticsQueryVariables>(SaleHistoryPerBusinessAnalyticsDocument, options);
        }
export type SaleHistoryPerBusinessAnalyticsQueryHookResult = ReturnType<typeof useSaleHistoryPerBusinessAnalyticsQuery>;
export type SaleHistoryPerBusinessAnalyticsLazyQueryHookResult = ReturnType<typeof useSaleHistoryPerBusinessAnalyticsLazyQuery>;
export type SaleHistoryPerBusinessAnalyticsQueryResult = Apollo.QueryResult<SaleHistoryPerBusinessAnalyticsQuery, SaleHistoryPerBusinessAnalyticsQueryVariables>;
export const SearchBusinessDocument = gql`
    query SearchBusiness($request: SearchQueryRequest!) {
  search(request: $request) {
    ... on BusinessSearchResult {
      items {
        ...UserFields
      }
      pageInfo {
        totalCount
        next
      }
    }
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useSearchBusinessQuery__
 *
 * To run a query within a React component, call `useSearchBusinessQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchBusinessQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchBusinessQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSearchBusinessQuery(baseOptions: Apollo.QueryHookOptions<SearchBusinessQuery, SearchBusinessQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchBusinessQuery, SearchBusinessQueryVariables>(SearchBusinessDocument, options);
      }
export function useSearchBusinessLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchBusinessQuery, SearchBusinessQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchBusinessQuery, SearchBusinessQueryVariables>(SearchBusinessDocument, options);
        }
export type SearchBusinessQueryHookResult = ReturnType<typeof useSearchBusinessQuery>;
export type SearchBusinessLazyQueryHookResult = ReturnType<typeof useSearchBusinessLazyQuery>;
export type SearchBusinessQueryResult = Apollo.QueryResult<SearchBusinessQuery, SearchBusinessQueryVariables>;
export const SearchEndusersDocument = gql`
    query SearchEndusers($request: SearchQueryRequest!) {
  search(request: $request) {
    ... on EnduserSearchResult {
      items {
        ...UserFields
      }
      pageInfo {
        totalCount
        next
      }
    }
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useSearchEndusersQuery__
 *
 * To run a query within a React component, call `useSearchEndusersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchEndusersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchEndusersQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSearchEndusersQuery(baseOptions: Apollo.QueryHookOptions<SearchEndusersQuery, SearchEndusersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchEndusersQuery, SearchEndusersQueryVariables>(SearchEndusersDocument, options);
      }
export function useSearchEndusersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchEndusersQuery, SearchEndusersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchEndusersQuery, SearchEndusersQueryVariables>(SearchEndusersDocument, options);
        }
export type SearchEndusersQueryHookResult = ReturnType<typeof useSearchEndusersQuery>;
export type SearchEndusersLazyQueryHookResult = ReturnType<typeof useSearchEndusersLazyQuery>;
export type SearchEndusersQueryResult = Apollo.QueryResult<SearchEndusersQuery, SearchEndusersQueryVariables>;
export const SearchMarketplaceDocument = gql`
    query SearchMarketplace($request: SearchQueryRequest!) {
  search(request: $request) {
    ... on MarketplaceSearchResult {
      items {
        ...ProductFields
      }
      pageInfo {
        next
      }
    }
  }
}
    ${ProductFieldsFragmentDoc}`;

/**
 * __useSearchMarketplaceQuery__
 *
 * To run a query within a React component, call `useSearchMarketplaceQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchMarketplaceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchMarketplaceQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSearchMarketplaceQuery(baseOptions: Apollo.QueryHookOptions<SearchMarketplaceQuery, SearchMarketplaceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchMarketplaceQuery, SearchMarketplaceQueryVariables>(SearchMarketplaceDocument, options);
      }
export function useSearchMarketplaceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchMarketplaceQuery, SearchMarketplaceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchMarketplaceQuery, SearchMarketplaceQueryVariables>(SearchMarketplaceDocument, options);
        }
export type SearchMarketplaceQueryHookResult = ReturnType<typeof useSearchMarketplaceQuery>;
export type SearchMarketplaceLazyQueryHookResult = ReturnType<typeof useSearchMarketplaceLazyQuery>;
export type SearchMarketplaceQueryResult = Apollo.QueryResult<SearchMarketplaceQuery, SearchMarketplaceQueryVariables>;
export const SearchNftsDocument = gql`
    query SearchNfts($request: SearchQueryRequest!) {
  search(request: $request) {
    ... on NftSearchResult {
      items {
        ...NftFields
      }
      pageInfo {
        next
      }
    }
  }
}
    ${NftFieldsFragmentDoc}`;

/**
 * __useSearchNftsQuery__
 *
 * To run a query within a React component, call `useSearchNftsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchNftsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchNftsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSearchNftsQuery(baseOptions: Apollo.QueryHookOptions<SearchNftsQuery, SearchNftsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchNftsQuery, SearchNftsQueryVariables>(SearchNftsDocument, options);
      }
export function useSearchNftsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchNftsQuery, SearchNftsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchNftsQuery, SearchNftsQueryVariables>(SearchNftsDocument, options);
        }
export type SearchNftsQueryHookResult = ReturnType<typeof useSearchNftsQuery>;
export type SearchNftsLazyQueryHookResult = ReturnType<typeof useSearchNftsLazyQuery>;
export type SearchNftsQueryResult = Apollo.QueryResult<SearchNftsQuery, SearchNftsQueryVariables>;
export const SearchSurveysDocument = gql`
    query SearchSurveys($request: SearchQueryRequest!) {
  search(request: $request) {
    ... on SurveySearchResult {
      items {
        ...SurveyFields
      }
      pageInfo {
        next
      }
    }
  }
}
    ${SurveyFieldsFragmentDoc}`;

/**
 * __useSearchSurveysQuery__
 *
 * To run a query within a React component, call `useSearchSurveysQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchSurveysQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchSurveysQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSearchSurveysQuery(baseOptions: Apollo.QueryHookOptions<SearchSurveysQuery, SearchSurveysQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchSurveysQuery, SearchSurveysQueryVariables>(SearchSurveysDocument, options);
      }
export function useSearchSurveysLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchSurveysQuery, SearchSurveysQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchSurveysQuery, SearchSurveysQueryVariables>(SearchSurveysDocument, options);
        }
export type SearchSurveysQueryHookResult = ReturnType<typeof useSearchSurveysQuery>;
export type SearchSurveysLazyQueryHookResult = ReturnType<typeof useSearchSurveysLazyQuery>;
export type SearchSurveysQueryResult = Apollo.QueryResult<SearchSurveysQuery, SearchSurveysQueryVariables>;
export const SearchTutorialsDocument = gql`
    query SearchTutorials($request: SearchQueryRequest!) {
  search(request: $request) {
    ... on TutorialSearchResult {
      items {
        ...SurveyFields
      }
      pageInfo {
        next
      }
    }
  }
}
    ${SurveyFieldsFragmentDoc}`;

/**
 * __useSearchTutorialsQuery__
 *
 * To run a query within a React component, call `useSearchTutorialsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchTutorialsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchTutorialsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSearchTutorialsQuery(baseOptions: Apollo.QueryHookOptions<SearchTutorialsQuery, SearchTutorialsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchTutorialsQuery, SearchTutorialsQueryVariables>(SearchTutorialsDocument, options);
      }
export function useSearchTutorialsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchTutorialsQuery, SearchTutorialsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchTutorialsQuery, SearchTutorialsQueryVariables>(SearchTutorialsDocument, options);
        }
export type SearchTutorialsQueryHookResult = ReturnType<typeof useSearchTutorialsQuery>;
export type SearchTutorialsLazyQueryHookResult = ReturnType<typeof useSearchTutorialsLazyQuery>;
export type SearchTutorialsQueryResult = Apollo.QueryResult<SearchTutorialsQuery, SearchTutorialsQueryVariables>;
export const SubscriptionHistoryDocument = gql`
    query SubscriptionHistory($request: SubscriptionHistoryRequest!) {
  subscriptionHistory(request: $request) {
    id
    subscriptionLevel
    startDate
    endDate
  }
}
    `;

/**
 * __useSubscriptionHistoryQuery__
 *
 * To run a query within a React component, call `useSubscriptionHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubscriptionHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscriptionHistoryQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSubscriptionHistoryQuery(baseOptions: Apollo.QueryHookOptions<SubscriptionHistoryQuery, SubscriptionHistoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SubscriptionHistoryQuery, SubscriptionHistoryQueryVariables>(SubscriptionHistoryDocument, options);
      }
export function useSubscriptionHistoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SubscriptionHistoryQuery, SubscriptionHistoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SubscriptionHistoryQuery, SubscriptionHistoryQueryVariables>(SubscriptionHistoryDocument, options);
        }
export type SubscriptionHistoryQueryHookResult = ReturnType<typeof useSubscriptionHistoryQuery>;
export type SubscriptionHistoryLazyQueryHookResult = ReturnType<typeof useSubscriptionHistoryLazyQuery>;
export type SubscriptionHistoryQueryResult = Apollo.QueryResult<SubscriptionHistoryQuery, SubscriptionHistoryQueryVariables>;
export const SubscriptionLevelDocument = gql`
    query SubscriptionLevel($request: SubscriptionLevelRequest!) {
  subscriptionLevel(request: $request) {
    id
    subscriptionLevel
  }
}
    `;

/**
 * __useSubscriptionLevelQuery__
 *
 * To run a query within a React component, call `useSubscriptionLevelQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubscriptionLevelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscriptionLevelQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSubscriptionLevelQuery(baseOptions: Apollo.QueryHookOptions<SubscriptionLevelQuery, SubscriptionLevelQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SubscriptionLevelQuery, SubscriptionLevelQueryVariables>(SubscriptionLevelDocument, options);
      }
export function useSubscriptionLevelLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SubscriptionLevelQuery, SubscriptionLevelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SubscriptionLevelQuery, SubscriptionLevelQueryVariables>(SubscriptionLevelDocument, options);
        }
export type SubscriptionLevelQueryHookResult = ReturnType<typeof useSubscriptionLevelQuery>;
export type SubscriptionLevelLazyQueryHookResult = ReturnType<typeof useSubscriptionLevelLazyQuery>;
export type SubscriptionLevelQueryResult = Apollo.QueryResult<SubscriptionLevelQuery, SubscriptionLevelQueryVariables>;
export const SurveyDocument = gql`
    query Survey($request: SingleSurveyQueryRequest!) {
  survey(request: $request) {
    ...SurveyFields
  }
}
    ${SurveyFieldsFragmentDoc}`;

/**
 * __useSurveyQuery__
 *
 * To run a query within a React component, call `useSurveyQuery` and pass it any options that fit your needs.
 * When your component renders, `useSurveyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSurveyQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSurveyQuery(baseOptions: Apollo.QueryHookOptions<SurveyQuery, SurveyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SurveyQuery, SurveyQueryVariables>(SurveyDocument, options);
      }
export function useSurveyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SurveyQuery, SurveyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SurveyQuery, SurveyQueryVariables>(SurveyDocument, options);
        }
export type SurveyQueryHookResult = ReturnType<typeof useSurveyQuery>;
export type SurveyLazyQueryHookResult = ReturnType<typeof useSurveyLazyQuery>;
export type SurveyQueryResult = Apollo.QueryResult<SurveyQuery, SurveyQueryVariables>;
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
export const SurveyGatingDocument = gql`
    query SurveyGating($request: SurveyGatingQueryRequest!) {
  surveyGating(request: $request) {
    ...SurveyGatingFields
  }
}
    ${SurveyGatingFieldsFragmentDoc}`;

/**
 * __useSurveyGatingQuery__
 *
 * To run a query within a React component, call `useSurveyGatingQuery` and pass it any options that fit your needs.
 * When your component renders, `useSurveyGatingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSurveyGatingQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSurveyGatingQuery(baseOptions: Apollo.QueryHookOptions<SurveyGatingQuery, SurveyGatingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SurveyGatingQuery, SurveyGatingQueryVariables>(SurveyGatingDocument, options);
      }
export function useSurveyGatingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SurveyGatingQuery, SurveyGatingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SurveyGatingQuery, SurveyGatingQueryVariables>(SurveyGatingDocument, options);
        }
export type SurveyGatingQueryHookResult = ReturnType<typeof useSurveyGatingQuery>;
export type SurveyGatingLazyQueryHookResult = ReturnType<typeof useSurveyGatingLazyQuery>;
export type SurveyGatingQueryResult = Apollo.QueryResult<SurveyGatingQuery, SurveyGatingQueryVariables>;
export const SurveyReferralsDocument = gql`
    query SurveyReferrals($request: SurveyReferralQueryRequest!) {
  surveyReferrals(request: $request) {
    items {
      ...SurveyReferralFields
    }
  }
}
    ${SurveyReferralFieldsFragmentDoc}`;

/**
 * __useSurveyReferralsQuery__
 *
 * To run a query within a React component, call `useSurveyReferralsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSurveyReferralsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSurveyReferralsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSurveyReferralsQuery(baseOptions: Apollo.QueryHookOptions<SurveyReferralsQuery, SurveyReferralsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SurveyReferralsQuery, SurveyReferralsQueryVariables>(SurveyReferralsDocument, options);
      }
export function useSurveyReferralsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SurveyReferralsQuery, SurveyReferralsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SurveyReferralsQuery, SurveyReferralsQueryVariables>(SurveyReferralsDocument, options);
        }
export type SurveyReferralsQueryHookResult = ReturnType<typeof useSurveyReferralsQuery>;
export type SurveyReferralsLazyQueryHookResult = ReturnType<typeof useSurveyReferralsLazyQuery>;
export type SurveyReferralsQueryResult = Apollo.QueryResult<SurveyReferralsQuery, SurveyReferralsQueryVariables>;
export const SurveyResultsDocument = gql`
    query SurveyResults($request: SurveyResultQueryRequest!) {
  surveyResults(request: $request) {
    items {
      ...SurveyResultFields
    }
  }
}
    ${SurveyResultFieldsFragmentDoc}`;

/**
 * __useSurveyResultsQuery__
 *
 * To run a query within a React component, call `useSurveyResultsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSurveyResultsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSurveyResultsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSurveyResultsQuery(baseOptions: Apollo.QueryHookOptions<SurveyResultsQuery, SurveyResultsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SurveyResultsQuery, SurveyResultsQueryVariables>(SurveyResultsDocument, options);
      }
export function useSurveyResultsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SurveyResultsQuery, SurveyResultsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SurveyResultsQuery, SurveyResultsQueryVariables>(SurveyResultsDocument, options);
        }
export type SurveyResultsQueryHookResult = ReturnType<typeof useSurveyResultsQuery>;
export type SurveyResultsLazyQueryHookResult = ReturnType<typeof useSurveyResultsLazyQuery>;
export type SurveyResultsQueryResult = Apollo.QueryResult<SurveyResultsQuery, SurveyResultsQueryVariables>;
export const SurveyRewardDocument = gql`
    query SurveyReward($request: SurveyRewardQueryRequest!) {
  surveyReward(request: $request) {
    ...SurveyRewardFields
  }
}
    ${SurveyRewardFieldsFragmentDoc}`;

/**
 * __useSurveyRewardQuery__
 *
 * To run a query within a React component, call `useSurveyRewardQuery` and pass it any options that fit your needs.
 * When your component renders, `useSurveyRewardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSurveyRewardQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSurveyRewardQuery(baseOptions: Apollo.QueryHookOptions<SurveyRewardQuery, SurveyRewardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SurveyRewardQuery, SurveyRewardQueryVariables>(SurveyRewardDocument, options);
      }
export function useSurveyRewardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SurveyRewardQuery, SurveyRewardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SurveyRewardQuery, SurveyRewardQueryVariables>(SurveyRewardDocument, options);
        }
export type SurveyRewardQueryHookResult = ReturnType<typeof useSurveyRewardQuery>;
export type SurveyRewardLazyQueryHookResult = ReturnType<typeof useSurveyRewardLazyQuery>;
export type SurveyRewardQueryResult = Apollo.QueryResult<SurveyRewardQuery, SurveyRewardQueryVariables>;
export const SurveyRewardErc721Document = gql`
    query SurveyRewardErc721($request: SurveyRewardQueryRequest!) {
  surveyRewardErc721(request: $request) {
    ...SurveyRewardFields
  }
}
    ${SurveyRewardFieldsFragmentDoc}`;

/**
 * __useSurveyRewardErc721Query__
 *
 * To run a query within a React component, call `useSurveyRewardErc721Query` and pass it any options that fit your needs.
 * When your component renders, `useSurveyRewardErc721Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSurveyRewardErc721Query({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSurveyRewardErc721Query(baseOptions: Apollo.QueryHookOptions<SurveyRewardErc721Query, SurveyRewardErc721QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SurveyRewardErc721Query, SurveyRewardErc721QueryVariables>(SurveyRewardErc721Document, options);
      }
export function useSurveyRewardErc721LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SurveyRewardErc721Query, SurveyRewardErc721QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SurveyRewardErc721Query, SurveyRewardErc721QueryVariables>(SurveyRewardErc721Document, options);
        }
export type SurveyRewardErc721QueryHookResult = ReturnType<typeof useSurveyRewardErc721Query>;
export type SurveyRewardErc721LazyQueryHookResult = ReturnType<typeof useSurveyRewardErc721LazyQuery>;
export type SurveyRewardErc721QueryResult = Apollo.QueryResult<SurveyRewardErc721Query, SurveyRewardErc721QueryVariables>;
export const SurveysDocument = gql`
    query Surveys($request: SurveyQueryRequest!) {
  surveys(request: $request) {
    items {
      ...SurveyFields
    }
  }
}
    ${SurveyFieldsFragmentDoc}`;

/**
 * __useSurveysQuery__
 *
 * To run a query within a React component, call `useSurveysQuery` and pass it any options that fit your needs.
 * When your component renders, `useSurveysQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSurveysQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSurveysQuery(baseOptions: Apollo.QueryHookOptions<SurveysQuery, SurveysQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SurveysQuery, SurveysQueryVariables>(SurveysDocument, options);
      }
export function useSurveysLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SurveysQuery, SurveysQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SurveysQuery, SurveysQueryVariables>(SurveysDocument, options);
        }
export type SurveysQueryHookResult = ReturnType<typeof useSurveysQuery>;
export type SurveysLazyQueryHookResult = ReturnType<typeof useSurveysLazyQuery>;
export type SurveysQueryResult = Apollo.QueryResult<SurveysQuery, SurveysQueryVariables>;
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
export const UserDocument = gql`
    query User($request: SingleProfileQueryRequest!) {
  user(request: $request) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const UserByIssuerDocument = gql`
    query UserByIssuer($request: IssuerProfileQueryRequest!) {
  userbyIssuer(request: $request) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useUserByIssuerQuery__
 *
 * To run a query within a React component, call `useUserByIssuerQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserByIssuerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserByIssuerQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUserByIssuerQuery(baseOptions: Apollo.QueryHookOptions<UserByIssuerQuery, UserByIssuerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserByIssuerQuery, UserByIssuerQueryVariables>(UserByIssuerDocument, options);
      }
export function useUserByIssuerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserByIssuerQuery, UserByIssuerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserByIssuerQuery, UserByIssuerQueryVariables>(UserByIssuerDocument, options);
        }
export type UserByIssuerQueryHookResult = ReturnType<typeof useUserByIssuerQuery>;
export type UserByIssuerLazyQueryHookResult = ReturnType<typeof useUserByIssuerLazyQuery>;
export type UserByIssuerQueryResult = Apollo.QueryResult<UserByIssuerQuery, UserByIssuerQueryVariables>;
export const UserByWalletIssuerDocument = gql`
    query UserByWalletIssuer($request: Iden3IssuerProfileQueryRequest!) {
  userbyWalletIssuer(request: $request) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useUserByWalletIssuerQuery__
 *
 * To run a query within a React component, call `useUserByWalletIssuerQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserByWalletIssuerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserByWalletIssuerQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUserByWalletIssuerQuery(baseOptions: Apollo.QueryHookOptions<UserByWalletIssuerQuery, UserByWalletIssuerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserByWalletIssuerQuery, UserByWalletIssuerQueryVariables>(UserByWalletIssuerDocument, options);
      }
export function useUserByWalletIssuerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserByWalletIssuerQuery, UserByWalletIssuerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserByWalletIssuerQuery, UserByWalletIssuerQueryVariables>(UserByWalletIssuerDocument, options);
        }
export type UserByWalletIssuerQueryHookResult = ReturnType<typeof useUserByWalletIssuerQuery>;
export type UserByWalletIssuerLazyQueryHookResult = ReturnType<typeof useUserByWalletIssuerLazyQuery>;
export type UserByWalletIssuerQueryResult = Apollo.QueryResult<UserByWalletIssuerQuery, UserByWalletIssuerQueryVariables>;
export const UserContractDocument = gql`
    query UserContract($request: UserContractQueryRequest!) {
  userContract(request: $request) {
    ...UserContractFields
  }
}
    ${UserContractFieldsFragmentDoc}`;

/**
 * __useUserContractQuery__
 *
 * To run a query within a React component, call `useUserContractQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserContractQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserContractQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUserContractQuery(baseOptions: Apollo.QueryHookOptions<UserContractQuery, UserContractQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserContractQuery, UserContractQueryVariables>(UserContractDocument, options);
      }
export function useUserContractLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserContractQuery, UserContractQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserContractQuery, UserContractQueryVariables>(UserContractDocument, options);
        }
export type UserContractQueryHookResult = ReturnType<typeof useUserContractQuery>;
export type UserContractLazyQueryHookResult = ReturnType<typeof useUserContractLazyQuery>;
export type UserContractQueryResult = Apollo.QueryResult<UserContractQuery, UserContractQueryVariables>;
export const UserContractsDocument = gql`
    query UserContracts($request: UserContractsQueryRequest!) {
  userContracts(request: $request) {
    items {
      ...UserContractFields
    }
  }
}
    ${UserContractFieldsFragmentDoc}`;

/**
 * __useUserContractsQuery__
 *
 * To run a query within a React component, call `useUserContractsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserContractsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserContractsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUserContractsQuery(baseOptions: Apollo.QueryHookOptions<UserContractsQuery, UserContractsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserContractsQuery, UserContractsQueryVariables>(UserContractsDocument, options);
      }
export function useUserContractsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserContractsQuery, UserContractsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserContractsQuery, UserContractsQueryVariables>(UserContractsDocument, options);
        }
export type UserContractsQueryHookResult = ReturnType<typeof useUserContractsQuery>;
export type UserContractsLazyQueryHookResult = ReturnType<typeof useUserContractsLazyQuery>;
export type UserContractsQueryResult = Apollo.QueryResult<UserContractsQuery, UserContractsQueryVariables>;
export const UserNftsDocument = gql`
    query UserNfts($request: NftsRequest!) {
  userNfts(request: $request) {
    items {
      ...NftFields
    }
  }
}
    ${NftFieldsFragmentDoc}`;

/**
 * __useUserNftsQuery__
 *
 * To run a query within a React component, call `useUserNftsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserNftsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserNftsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUserNftsQuery(baseOptions: Apollo.QueryHookOptions<UserNftsQuery, UserNftsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserNftsQuery, UserNftsQueryVariables>(UserNftsDocument, options);
      }
export function useUserNftsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserNftsQuery, UserNftsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserNftsQuery, UserNftsQueryVariables>(UserNftsDocument, options);
        }
export type UserNftsQueryHookResult = ReturnType<typeof useUserNftsQuery>;
export type UserNftsLazyQueryHookResult = ReturnType<typeof useUserNftsLazyQuery>;
export type UserNftsQueryResult = Apollo.QueryResult<UserNftsQuery, UserNftsQueryVariables>;
export const UserRefferalsDocument = gql`
    query UserRefferals($request: UserRefferalQueryRequest!) {
  userRefferals(request: $request) {
    items {
      ...UserRefferalFields
    }
  }
}
    ${UserRefferalFieldsFragmentDoc}`;

/**
 * __useUserRefferalsQuery__
 *
 * To run a query within a React component, call `useUserRefferalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserRefferalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserRefferalsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUserRefferalsQuery(baseOptions: Apollo.QueryHookOptions<UserRefferalsQuery, UserRefferalsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserRefferalsQuery, UserRefferalsQueryVariables>(UserRefferalsDocument, options);
      }
export function useUserRefferalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserRefferalsQuery, UserRefferalsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserRefferalsQuery, UserRefferalsQueryVariables>(UserRefferalsDocument, options);
        }
export type UserRefferalsQueryHookResult = ReturnType<typeof useUserRefferalsQuery>;
export type UserRefferalsLazyQueryHookResult = ReturnType<typeof useUserRefferalsLazyQuery>;
export type UserRefferalsQueryResult = Apollo.QueryResult<UserRefferalsQuery, UserRefferalsQueryVariables>;
export const UserTransactionsDocument = gql`
    query UserTransactions($request: UserTransactionQueryRequest!) {
  userTransactions(request: $request) {
    items {
      ...TransactionCreditFields
    }
  }
}
    ${TransactionCreditFieldsFragmentDoc}`;

/**
 * __useUserTransactionsQuery__
 *
 * To run a query within a React component, call `useUserTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserTransactionsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUserTransactionsQuery(baseOptions: Apollo.QueryHookOptions<UserTransactionsQuery, UserTransactionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserTransactionsQuery, UserTransactionsQueryVariables>(UserTransactionsDocument, options);
      }
export function useUserTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserTransactionsQuery, UserTransactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserTransactionsQuery, UserTransactionsQueryVariables>(UserTransactionsDocument, options);
        }
export type UserTransactionsQueryHookResult = ReturnType<typeof useUserTransactionsQuery>;
export type UserTransactionsLazyQueryHookResult = ReturnType<typeof useUserTransactionsLazyQuery>;
export type UserTransactionsQueryResult = Apollo.QueryResult<UserTransactionsQuery, UserTransactionsQueryVariables>;
export const UserWalletDocument = gql`
    query UserWallet($request: UserWalletQueryRequest!) {
  userWallet(request: $request) {
    walletId
    credit
    recipient
    nearAddress
    auroraAddress
    avaxAddress
    polygonAddress
    moonbeamAddress
    ethereumAddress
    tonAddress
    cronosAddress
    bobaAddress
    bscAddress
    opbnbAddress
    filecoinAddress
    baseAddress
    hederaAddress
    stellarAddress
    solanaAddress
    polkadotAddress
    icpAddress
    bitfinityAddress
    stripeAccountId
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useUserWalletQuery__
 *
 * To run a query within a React component, call `useUserWalletQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserWalletQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserWalletQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUserWalletQuery(baseOptions: Apollo.QueryHookOptions<UserWalletQuery, UserWalletQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserWalletQuery, UserWalletQueryVariables>(UserWalletDocument, options);
      }
export function useUserWalletLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserWalletQuery, UserWalletQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserWalletQuery, UserWalletQueryVariables>(UserWalletDocument, options);
        }
export type UserWalletQueryHookResult = ReturnType<typeof useUserWalletQuery>;
export type UserWalletLazyQueryHookResult = ReturnType<typeof useUserWalletLazyQuery>;
export type UserWalletQueryResult = Apollo.QueryResult<UserWalletQuery, UserWalletQueryVariables>;
export const UsersDocument = gql`
    query Users($request: ProfileQueryRequest!) {
  users(request: $request) {
    items {
      ...UserFields
    }
    pageInfo {
      totalCount
      next
    }
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUsersQuery(baseOptions: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const UsersAdminDocument = gql`
    query UsersAdmin($request: ProfileQueryRequest!) {
  usersAdmin(request: $request) {
    items {
      ...UserFields
    }
    pageInfo {
      totalCount
      next
    }
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useUsersAdminQuery__
 *
 * To run a query within a React component, call `useUsersAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersAdminQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUsersAdminQuery(baseOptions: Apollo.QueryHookOptions<UsersAdminQuery, UsersAdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersAdminQuery, UsersAdminQueryVariables>(UsersAdminDocument, options);
      }
export function useUsersAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersAdminQuery, UsersAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersAdminQuery, UsersAdminQueryVariables>(UsersAdminDocument, options);
        }
export type UsersAdminQueryHookResult = ReturnType<typeof useUsersAdminQuery>;
export type UsersAdminLazyQueryHookResult = ReturnType<typeof useUsersAdminLazyQuery>;
export type UsersAdminQueryResult = Apollo.QueryResult<UsersAdminQuery, UsersAdminQueryVariables>;
export const VerifyDocument = gql`
    query Verify($request: VerifyRequest!) {
  verify(request: $request)
}
    `;

/**
 * __useVerifyQuery__
 *
 * To run a query within a React component, call `useVerifyQuery` and pass it any options that fit your needs.
 * When your component renders, `useVerifyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVerifyQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useVerifyQuery(baseOptions: Apollo.QueryHookOptions<VerifyQuery, VerifyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VerifyQuery, VerifyQueryVariables>(VerifyDocument, options);
      }
export function useVerifyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VerifyQuery, VerifyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VerifyQuery, VerifyQueryVariables>(VerifyDocument, options);
        }
export type VerifyQueryHookResult = ReturnType<typeof useVerifyQuery>;
export type VerifyLazyQueryHookResult = ReturnType<typeof useVerifyLazyQuery>;
export type VerifyQueryResult = Apollo.QueryResult<VerifyQuery, VerifyQueryVariables>;
export const PingDocument = gql`
    query ping {
  ping
}
    `;

/**
 * __usePingQuery__
 *
 * To run a query within a React component, call `usePingQuery` and pass it any options that fit your needs.
 * When your component renders, `usePingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePingQuery({
 *   variables: {
 *   },
 * });
 */
export function usePingQuery(baseOptions?: Apollo.QueryHookOptions<PingQuery, PingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PingQuery, PingQueryVariables>(PingDocument, options);
      }
export function usePingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PingQuery, PingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PingQuery, PingQueryVariables>(PingDocument, options);
        }
export type PingQueryHookResult = ReturnType<typeof usePingQuery>;
export type PingLazyQueryHookResult = ReturnType<typeof usePingLazyQuery>;
export type PingQueryResult = Apollo.QueryResult<PingQuery, PingQueryVariables>;
export const NftDataUpdatedDocument = gql`
    subscription NftDataUpdated {
  nftDataUpdated {
    nftId
    seriesId
    metadata {
      title
      description
      media
      mediaHash
      copies
      issuedAt
      expiresAt
      startsAt
      updatedAt
      extra
      reference
      referenceHash
    }
    royalty
    ownerId
  }
}
    `;

/**
 * __useNftDataUpdatedSubscription__
 *
 * To run a query within a React component, call `useNftDataUpdatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNftDataUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNftDataUpdatedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNftDataUpdatedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NftDataUpdatedSubscription, NftDataUpdatedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<NftDataUpdatedSubscription, NftDataUpdatedSubscriptionVariables>(NftDataUpdatedDocument, options);
      }
export type NftDataUpdatedSubscriptionHookResult = ReturnType<typeof useNftDataUpdatedSubscription>;
export type NftDataUpdatedSubscriptionResult = Apollo.SubscriptionResult<NftDataUpdatedSubscription>;