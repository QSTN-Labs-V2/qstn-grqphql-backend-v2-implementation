import { gql } from "apollo-server-express";

export const ServiceTypeDefs = `
 type AllCryptoRewardInUSD {
  amountUsd: Float
  profileId: ProfileId!
}

type AverageSurveyCompletionRatesByUser {
  percentageCompletionAverage: Float
  profileId: ProfileId
}

input CategoriesRequest {
  categories: [String]
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

"""Business Data Types"""
type CryptoIssued {
  amountCrypto: Int
  businessId: ProfileId!
  cryptoValueInUSD: Float
}

type CryptoIssuedAllBlockchains {
  businessId: ProfileId!
  cryptoValueInUSD: Float
}

"""User Data Types"""
type CryptoReward {
  amountCrypto: Int
  amountUsd: Float
  profileId: ProfileId!
}

type DataBusiness {
  highestConversionRate: [HighestConversionRate]
  highestNumberOfParticipantsEngaged: [HighestNumberOfParticipantsEngaged]
  highestNumberOfSuccessfulSurveyCampaigns: [HighestNumberOfSuccessfulSurveyCampaigns]
  mostCashValueIssuedViaSurveysViaStripe: [MostCashValueIssuedViaSurveysViaStripe]
  mostCompletedSurveys: MostCompletedSurveys
  mostCryptocurrencyValueIssuedViaSurveys: MostCryptocurrencyValueIssuedViaSurveys
  mostDiverseSurveyTopicsCovered: [MostDiverseSurveyTopicsCovered]
  mostIssuedSurveys: [MostIssuedSurveys]
}

type DataUser {
  highestAverageSurveyCompletionRate: HighestAverageSurveyCompletionRate
  highestNumberOfConsecutiveDaysWithSurveyCompletions: [HighestNumberOfConsecutiveDaysWithSurveyCompletions]
  mostActiveParticipationInSpecificTypesOfSurveys: MostActiveParticipationInSpecificTypesOfSurveys
  mostCompletedSurveysInSpecificCategory: [MostCompletedSurveysInSpecificCategory]
  mostConsistentSurveyCompletionFrequency: MostConsistentSurveyCompletionFrequency
  mostCreativeAndUniqueSurveyResponses: MostCreativeAndUniqueSurveyResponses
  mostCryptocurrencySpentNFTMarketplace: MostCryptocurrencySpentNFTMarketplace
  mostDollarsSpentNFTMarketplace: [MostDollarsSpentNFTMarketplace]
  mostEarnedCashRewards: [MostEarnedCashRewards]
  mostEarnedCryptocurrencyRewards: MostEarnedCryptocurrencyRewards
  mostEngagementWithCommunityFeatures: [MostEngagementWithCommunityFeatures]
  mostInvitedUsers: [MostInvitedUsers]
  mostReferralsConvertedIntoActiveSurveyParticipants: [MostReferralsConvertedIntoActiveSurveyParticipants]
  userMostCompletedSurveys: [UserMostCompletedSurveys]
}

scalar Date

type GoodsOwnedMedia {
  mediaId: String
}

type HighestAverageSurveyCompletionRate {
  highestAverageSurveyCompletion: [AverageSurveyCompletionRatesByUser]
}

type HighestConversionRate {
  businessId: Int!
  conversionPercentageRate: Float
  convertedPurchasers: Int
  uniqueParticipants: Int
}

type HighestNumberOfConsecutiveDaysWithSurveyCompletions {
  longestDailyStreak: Int
  profileId: ProfileId!
}

type HighestNumberOfParticipantsEngaged {
  businessId: ProfileId!
  campaignId: Int
  numberOfParticipants: Int
}

type HighestNumberOfSuccessfulSurveyCampaigns {
  businessId: ProfileId!
  numberOfSuccessfulCampaigns: Int
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

type MostActiveParticipationInSpecificTypesOfSurveys {
  multipleChoiceSurveysRankings: [MultipleChoiceSurveys]
  openEndedSurveysRankings: [OpenEndedSurveys]
}

type MostCashValueIssuedViaSurveysViaStripe {
  amountCash: Float
  businessId: ProfileId!
}

type MostCompletedAll {
  businessId: ProfileId
  totalCompleted: Int
}

type MostCompletedNear {
  businessId: ProfileId
  numberOfSurveysNear: Int
}

type MostCompletedPolkadot {
  businessId: ProfileId
  numberOfSurveysPolkadot: Int
}

type MostCompletedPolygon {
  businessId: ProfileId
  numberOfSurveysPolygon: Int
}

type MostCompletedSurveys {
  mostCompletedAll: [MostCompletedAll]
  mostCompletedNear: [MostCompletedNear]
  mostCompletedPolkadot: [MostCompletedPolkadot]
  mostCompletedPolygon: [MostCompletedPolygon]
}

type MostCompletedSurveysInSpecificCategory {
  categoryName: String
  profileId: ProfileId!
  surveysCompleted: Int
}

type MostConsistentSurveyCompletionFrequency {
  daily: [UserCompletionFrequency]
  monthly: [UserCompletionFrequency]
  weekly: [UserCompletionFrequency]
  yearly: [UserCompletionFrequency]
}

type MostCreativeAndUniqueSurveyResponses {
  mediaRating: [Rating]
  surveyResponseRating: [Rating]
}

type MostCryptocurrencySpentNFTMarketplace {
  mostSpentNear: [CryptoReward]
  mostSpentPolkadot: [CryptoReward]
  mostSpentPolygon: [CryptoReward]
}

type MostCryptocurrencyValueIssuedViaSurveys {
  mostIssuedInTotal: [CryptoIssuedAllBlockchains]
  mostIssuedNear: [CryptoIssued]
  mostIssuedPolkadot: [CryptoIssued]
  mostIssuedPolygon: [CryptoIssued]
}

type MostDiverseSurveyTopicsCovered {
  allTopics: [String]
  businessId: ProfileId!
  campaignId: Int
  numberOfTopics: Int
}

type MostDollarsSpentNFTMarketplace {
  profileId: ProfileId!
  realDollarsSpent: Float
}

type MostEarnedCashRewards {
  mostCashViaStripe: Float
  profileId: ProfileId!
}

type MostEarnedCryptocurrencyRewards {
  nearRewards: [CryptoReward]
  polkadotRewards: [CryptoReward]
  polygonRewards: [CryptoReward]
  totalCryptoInCash: [AllCryptoRewardInUSD]
}

type MostEngagementWithCommunityFeatures {
  profileId: ProfileId!
  totalPosts: Int
}

type MostInvitedUsers {
  profileId: ProfileId!
  usersInvited: Int
}

type MostIssuedSurveys {
  businessId: ProfileId!
  numberOfSurveys: Int
}

type MostReferralsConvertedIntoActiveSurveyParticipants {
  profileId: ProfileId!
  referralsSent: Int
  referredParticipantCount: Int
}

type MultipleChoiceSurveys {
  multipleChoiceSurveys: Int
  profileId: ProfileId!
}

type OpenEndedSurveys {
  openEndedSurveys: Int
  profileId: ProfileId!
}

"""ProfileId custom scalar type"""
scalar ProfileId

type PurchaseHistory {
  mediaId: String
  productId: ID
}

type Query {
  allMediaBoughtAndSold: [MediaBoughtAndSold]
  dataBusiness: DataBusiness
  dataUser(request: CategoriesRequest): DataUser
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

type Rating {
  item_id: Int
  profileId: ProfileId!
  rating: Int
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

input SurveyAnalyticsRequest {
  """The business profileIds"""
  businessIds: [ProfileId!]
}

input TopBusinessRequest {
  """The business profileIds"""
  businessIds: [ProfileId!]
}

type UserCompletionFrequency {
  frequencyAverage: Float
  profileId: ProfileId!
}

type UserMostCompletedSurveys {
  numberOfSurveys: Int
  profileId: ProfileId!
}

input purchaseHistoryPerUserRequest {
  profileIds: [ProfileId!]
} 
`;
