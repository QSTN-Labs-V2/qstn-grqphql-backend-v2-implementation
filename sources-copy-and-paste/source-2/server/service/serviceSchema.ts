import { gql } from "apollo-server-express";

export const ServiceTypeDefs = `
 type AverageInviteResponseTime {
  averageResponseTimeHrs: Float
  user: ProfileId
}

type AverageTimeCompletingSurvey {
  averageTimePerServey: Float
  user: ProfileId
}

type AverageTimeDraftingSurvey {
  averageTimePerServey: Float
  user: ProfileId
}

type AverageTimePerSession {
  averageTimeHrs: Float
  user: ProfileId
}

type AverageTimeWithdrawRewards {
  avgHours: Float
  user: ProfileId
}

type AverageUserRatingCompletedSurveys {
  ratingAvg: Float
  user: ProfileId
}

type AverageValueAccruedCashViaStripe {
  lastSessionAccruedCashViaStripeValueInUSD: Float
  lifetimeCashViaStripeValueInUSD: Float
  sessionAverageAccruedCashViaStripeValueInUSD: Float
  user: ProfileId
}

type AverageValueAccruedCryptocurrency {
  lastSessionAccruedCryptoValueInUSD: Float
  lifetimeCryptoValueInUSD: Float
  sessionAverageAccruedCryptoValueInUSD: Float
  user: ProfileId
}

type AverageValueSpentNFTMarketplace {
  avgCashAmount: Float
  user: ProfileId
}

"""Chart type data results"""
type ChartDataLabels {
  avgCompletionTime: Float
  data: [Int!]
  labels: [String!]
  rankingCompletions: [RankTopCompletions]
  totalBusiness: Int
  totalCompletions: Int
  totalPageviews: Int
  totalSurveys: Int
}

type CompletionTimeOfDay {
  surveyCount: Int
  timeOfDay: Int
}

type CorrelationSurveyComplexityAndCompletion {
  completionRatio: Float
  questionCount: Int
  surveyId: Int
}

type DataMarketplace {
  averageInviteResponseTime: [AverageInviteResponseTime]
  averageTimeDraftingSurvey: [AverageTimeDraftingSurvey]
  correlationSurveyComplexityAndCompletion: [CorrelationSurveyComplexityAndCompletion]
  fastestDraftSurvey: FastestDraftSurvey
  mostCommonSurveyLengthPreferred: [MostCommonSurveyLengthPreferred]
  rankedTagsIssuedSurveys: [RankedTagsIssuedSurveys]
  slowestTimeDraftSurvey: SlowestTimeDraftSurvey
  subscriptionHistoryMarketplace: [SubscriptionHistory]
  subscriptionLevelMarketplace: [SubscriptionLevel]
  unclaimedRewardStatusAndDuration: UnclaimedRewardStatusAndDuration
  userAverageSessionTime: [UserAverageSessionTime]
  walletsConnected: WalletsConnected
}

type DataUser {
  averageTimeCompletingSurvey: [AverageTimeCompletingSurvey]
  averageTimePerSession: [AverageTimePerSession]
  averageTimeWithdrawRewards: [AverageTimeWithdrawRewards]
  averageUserRatingCompletedSurveys: [AverageUserRatingCompletedSurveys]
  averageValueAccruedCashViaStripe: [AverageValueAccruedCashViaStripe]
  averageValueAccruedCryptocurrency: [AverageValueAccruedCryptocurrency]
  averageValueSpentNFTMarketplace: [AverageValueSpentNFTMarketplace]
  fastestCompleteSurvey: FastestCompleteSurvey
  mostCommonTimeOfDaySurveyCompletitons: MostCommonTimeOfDaySurveyCompletitons
  nFTMarketplacePurchaseHistory: NFTMarketplacePurchaseHistory
  rankedTagsCompletedSurveys: [RankedTagsCompletedSurveys]
  slowestCompleteSurvey: SlowestCompleteSurvey
  subscriptionHistory: [SubscriptionHistory]
  subscriptionLevel: [SubscriptionLevel]
  surveyCompletionBasedOnQuestionCount: [SurveyCompletionBasedOnQuestionCount]
  tutorialCompletitions: [TutorialCompletitions]
  unclaimedRewardStatusAndDuration: UnclaimedRewardStatusAndDuration
  userEngagementRateNFTMarketplace: [UserEngagementRateNFTMarketplace]
  walletsConnectedPerBlockchain: WalletsConnectedPerBlockchain
}

scalar Date

type FastestCompleteSurvey {
  near: [SurveyTakerInfo]
  polkadot: [SurveyTakerInfo]
  polygon: [SurveyTakerInfo]
  total: [SurveyTakerInfo]
}

type FastestDraftSurvey {
  near: [SurveyDrafterInfo]
  polkadot: [SurveyDrafterInfo]
  polygon: [SurveyDrafterInfo]
  total: [SurveyDrafterInfo]
}

type GoodsOwnedMedia {
  mediaId: String
}

input MarketplaceRequest {
  categories: [String]
}

type MediaBoughtAndSold {
  mediaId: String!
}

input MediaBoughtAndSoldRequest {
  profileId: ProfileId!
}

type MediaSold {
  mediaId: String
}

type MostCommonSurveyLengthPreferred {
  questionCount: Int
  surveysCompleted: Int
}

type MostCommonTimeOfDaySurveyCompletitons {
  completionTimeOfDay: [CompletionTimeOfDay]
  userCompletionTimeOfDay: UserCompletionTimeOfDay
}

type NFTMarketplacePurchaseHistory {
  purchaseAmountTotals: [PurchaseAmountTotals]
  purchaseInfoHistory: [PurchaseInfoHistory]
}

"""ProfileId custom scalar type"""
scalar ProfileId

type PurchaseAmountTotals {
  totalPurchasedConvertedInUSD: Float
  user: ProfileId
}

type PurchaseHistory {
  mediaId: String
  productId: ID
}

type PurchaseInfoHistory {
  createdAt: String
  orderAmountConvertedInUSD: Float
  orderId: Int
  orderStatus: String
  user: ProfileId
}

type Query {
  allMediaBoughtAndSold: [MediaBoughtAndSold]
  dataMarketplace(request: MarketplaceRequest): DataMarketplace
  dataUser(request: UserRequest): DataUser
  goodsOwnedPerUser: [GoodsOwnedMedia]
  mediaSoldByCompanyOrUser(request: MediaBoughtAndSoldRequest): [MediaSold]
  ping: String!
  purchaseHistoryPerUser(request: purchaseHistoryPerUserRequest): [PurchaseHistory]
  saleHistoryPerBusiness(request: SaleHistoryPerBusinessRequest): SaleHistory

  """Statistics and analytics for surveys"""
  surveyAnalytics(request: SurveyAnalyticsRequest!): ChartDataLabels!
  topBusiness(request: TopBusinessRequest!): ChartDataLabels!
}

type RankTopCompletions {
  completions: Int
  surveyId: ID
}

type RankedTagsCompletedSurveys {
  category_tags: String
  tag_count: Int
}

type RankedTagsIssuedSurveys {
  categoryTags: String
  tagCount: Int
}

type SaleHistory {
  items: [SaleItem]
  total: Int
}

input SaleHistoryPerBusinessRequest {
  profileIds: [ProfileId!]
}

type SaleItem {
  buyerId: Int
  description: String
  issuedAt: Date
  name: String
  orderAmount: Float
  orderStatus: String
  price: Float
  productId: Int
  sellerId: Int
}

type SlowestCompleteSurvey {
  near: [SurveyTakerInfo]
  polkadot: [SurveyTakerInfo]
  polygon: [SurveyTakerInfo]
  total: [SurveyTakerInfo]
}

type SlowestTimeDraftSurvey {
  near: [SurveyDrafterInfo]
  polkadot: [SurveyDrafterInfo]
  polygon: [SurveyDrafterInfo]
  total: [SurveyDrafterInfo]
}

type StatusAndDuration {
  claimed: Boolean
  duration: Float
  surveyId: Int
  user: ProfileId
}

type SubscriptionHistory {
  began: Date
  ended: Date
  subscription: String
  user: ProfileId
}

type SubscriptionLevel {
  subscription: String
  user: ProfileId
}

input SurveyAnalyticsRequest {
  """The business profileIds"""
  businessIds: [ProfileId!]
}

type SurveyCompletionBasedOnQuestionCount {
  completionRatio: Float
  questionCount: Int
}

type SurveyDrafterInfo {
  hours: Float
  surveyId: Int
  user: ProfileId
}

type SurveyTakerInfo {
  hours: Float
  surveyId: Int
  user: ProfileId
}

input TopBusinessRequest {
  """The business profileIds"""
  businessIds: [ProfileId!]
}

type TutorialCompletitions {
  fillingStatus: Boolean
  user: ProfileId
}

type UnclaimedRewardStatusAndDuration {
  near: [StatusAndDuration]
  polkadot: [StatusAndDuration]
  polygon: [StatusAndDuration]
  total: [StatusAndDuration]
}

type UserAverageSessionTime {
  averageTime: Float
  user: ProfileId
}

type UserCompletionTimeOfDay {
  completionTimeOfDay: [CompletionTimeOfDay]
  user: ProfileId
}

type UserEngagementRateNFTMarketplace {
  pageViews: Int
  productsSelling: Int
  purchaseCount: Int
  surveysCreated: Int
  surveysStarted: Int
  surveysTaken: Int
  user: ProfileId
}

input UserRequest {
  categories: [String]
  profileIds: [ProfileId]
}

type UserWalletsConnected {
  user: ProfileId
  walletCount: Int
}

type WalletsConnected {
  near: Int
  polkadot: Int
  polygon: Int
}

type WalletsConnectedPerBlockchain {
  near: [UserWalletsConnected]
  polkadot: [UserWalletsConnected]
  polygon: [UserWalletsConnected]
}

input purchaseHistoryPerUserRequest {
  profileIds: [ProfileId!]
} 
`;
