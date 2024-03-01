import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import * as crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import dayjs from "dayjs";
import { NextResponse } from 'next/server';
import { ApolloError } from "apollo-server-express";
import { 
  getQueryResult,
  getTransactionQueryResult,
  getAllDocuments, 
  getDocumentsByField, 
  addProfileDocumentToDB, 
  updateProfileDocumentDB,
  addUserDocumentToDB, 
  addSurveyDocumentToDB,
  updateSurveyDocumentDB,
  searchDocuments,
} from "../db/utils";

import { 
  getQueryMetricsResult,
} from "../db/metricsutils";

import {
    Resolvers, 
    AuthChallengeResult, 
    AuthenticationResult,
    RefreshRequest,
    PaginatedUserResult,
    PaginatedProductsResult,
    PaginatedSurveyResult,
    PaginatedFillingQueueResult,
    PaginatedSurveyResultResult,
    PaginatedEmbedSurveyResultResult,
    SurveyResult,
    EmbedSurveyResult,
    PaginatedResultInfo,
    SearchResult,
    SearchRequestTypes,
    User,
    AnonymousUser,
    MarketplaceProduct,
    Survey,
    SurveyReward,
    Wallet,
    FillingQueue,
    NftGallery,
    Erc721,
    Nep171,
    //reports users
    UserMostCompletedSurveys,
    MostEarnedCashRewards,
    CryptoReward,
    AllCryptoRewardInUsd,
    MostEarnedCryptocurrencyRewards,
    MostDollarsSpentNftMarketplace,
    MostCryptocurrencySpentNftMarketplace,
    MostInvitedUsers,
    MostCompletedSurveysInSpecificCategory,
    AverageSurveyCompletionRatesByUser,
    HighestAverageSurveyCompletionRate,
    UserCompletionFrequency,
    MostConsistentSurveyCompletionFrequency,
    HighestNumberOfConsecutiveDaysWithSurveyCompletions,
    MultipleChoiceSurveys,
    OpenEndedSurveys,
    MostActiveParticipationInSpecificTypesOfSurveys,
    MostReferralsConvertedIntoActiveSurveyParticipants,
    MostEngagementWithCommunityFeatures,
    Rating,
    MostCreativeAndUniqueSurveyResponses,
    SurveyTakerInfo,
    FastestCompleteSurvey,
    SlowestCompleteSurvey,
    //reports businesses
    MostIssuedSurveys,
    MostCompletedAll,
    MostCompletedNear,
    MostCompletedPolkadot,
    MostCompletedPolygon,
    MostCompletedSurveys,
    CryptoIssued,
    CryptoIssuedAllBlockchains,
    MostCryptocurrencyValueIssuedViaSurveys,
    MostCashValueIssuedViaSurveysViaStripe,
    HighestNumberOfSuccessfulSurveyCampaigns,
    MostDiverseSurveyTopicsCovered,
    HighestNumberOfParticipantsEngaged,
    HighestConversionRate,
    UnclaimedRewardStatusAndDuration,
    TutorialCompletitions,
    WalletsConnectedPerBlockchain,
    AverageTimePerSession,
    AverageTimeCompletingSurvey,
    AverageTimeWithdrawRewards,
    AverageValueSpentNftMarketplace,
    AverageValueAccruedCryptocurrency,
    AverageValueAccruedCashViaStripe,
    NftMarketplacePurchaseHistory,
    RankedTagsCompletedSurveys,
    MostCommonTimeOfDaySurveyCompletitons,
    SurveyCompletionBasedOnQuestionCount,
    AverageUserRatingCompletedSurveys,
    UserEngagementRateNftMarketplace,
    SubscriptionLevel,
    SubscriptionHistory,
    StatusAndDuration,
    UserWalletsConnected,
    CompletionTimeOfDay,
    PurchaseAmountTotals,
    PurchaseInfoHistory,
    FastestDraftSurvey,
    SlowestTimeDraftSurvey,
    WalletsConnected,
    UserAverageSessionTime,
    AverageTimeDraftingSurvey,
    RankedTagsIssuedSurveys,
    MostCommonSurveyLengthPreferred,
    AverageInviteResponseTime,
    CorrelationSurveyComplexityAndCompletion,
    SurveyDrafterInfo,

} from '../types/resolvers';

dotenv.config();

const API_SERVER_URL = process.env.API_SERVER_URL;

const isNumber = (value: any) => {
  return typeof value === 'number' && isFinite(value);
}

function unconvertChoice(choice: { text: string, value: string }): string {
  return choice.value;
}

function unconvertChoices(choicesArray: { text: string, value: string }[]): string[] {
  //console.log('unconvertChoices [choicesArray] ==== ', choicesArray, choicesArray.map(choice => choice.value))
  return choicesArray.map(choice => choice.value);
}

const flatten = (arr: any[], depth = 1): any[] => {
  if (typeof Array.prototype.flat !== "undefined") return arr.flat(depth);
  return arr.reduce(
    (a, v) =>
      a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v),
    []
  );
};

async function fetchPostJSON(url: string, data?: {}) {
  try {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data || {}), // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw err;
  }
}


const ServiceResolvers: Resolvers = {
  Query: {
    // challenge(request: ChallengeRequest!): AuthChallengeResult!
    challenge: async (
      _: any,
      req: any,
      context: any
    ): Promise<AuthChallengeResult> => {
      try {
        const challenge = {
          text: `https://qstn.us wants you to sign in with your Near Aurora account: 
            ${req.request.email}
            
  Sign in to QSTN
  
  URI: https://qstn.us
  Version: 1
  Chain ID: 1313161554
  Nonce: ${crypto.randomBytes(16).toString("base64")}
  Issued At: ${new Date().toUTCString()}`,
        };
        return challenge;
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    //verify(request: VerifyRequest!): Boolean!
    verify: async (_: any, req: any, context: any): Promise<boolean> => {
      const accessToken = req.request.accessToken;
      try {
        const decodedToken = jwt.verify(
          accessToken,
          `${process.env.ACCESS_TOKEN_SECRET}`
        );
        if (decodedToken) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    search: async (_: any, req: any, context: any): Promise<SearchResult> => {
      try {
        //console.log('req search', req)
        //const result = await getDocumentsByField('users','id',req.request.profileId)
        //return result[0];
        const result = await searchDocuments(req.request);

        /*const pageInfo: PaginatedResultInfo = {
          "totalCount": result.length,
          "next": { "timestamp": new Date().getTime(), "offset": req.request.limit },
        }*/
        let nextCursor: string | null = null;
        if (result.length > 0) {
          const lastItemCreatedAt = new Date(result[result.length - 1].created_at); // Get the created_at value of the last item
          nextCursor = lastItemCreatedAt.toISOString(); // Convert the Date object to ISO string as the next cursor
        }

        const pageInfo: PaginatedResultInfo = {
          totalCount: result.length,
          prev: req.request.cursor,
          next: nextCursor,
        }

        const searchResult = { 
          items: result,
          pageInfo: pageInfo,
          type: req.request.type
        }
        //console.log(JSON.stringify(searchResult, null, 2))
        return searchResult;

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    anonymousUser: async (_: any, req: any, context: any): Promise<AnonymousUser> => {
      const { profileId, fingerprint } = req.request
      const setClauses: string[] = [];
      const values: any[] = [];

      try {
        // Construct the SQL query
        // Only add set clauses for fields that are not empty
        if (profileId !== undefined) {
          //setClauses.push(`AND u.profile_id = ANY($${values.length + 1}::int[])`);
          setClauses.push(`AND profile_id = $${values.length + 1}::int`);
          values.push(profileId);
        }

        if (fingerprint !== undefined) {
          setClauses.push(`AND fingerprint = $${values.length + 1}::text`);
          values.push(fingerprint);
        }


        /*if (did !== undefined) {
          setClauses.push(`AND u.did = ANY($${values.length + 1}::text[])`);
          values.push(did);
        }*/

        // Construct the SQL query string
        const query = `
        SELECT * FROM anonusers 
        WHERE anon_id > 0
        ${setClauses.join(' ')}
        `;

        // Execute the query
        const result = await getQueryResult(query, values);

        const userResult: AnonymousUser = result[0]

        return userResult;
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    usersAdmin: async (_: any, req: any, context: any): Promise<PaginatedUserResult> => {
      const { 
        limit, 
        cursor, 
        type, 
        status, 
        verified, 
        visibility, 
        category, 
        ownedBy, 
        profileIds, 
        businessIds, 
        emails, 
        numberOfSurveys,
        numberOfSurveysCompleted,
        numberOfAnsrEarned,
        numberOfRewardsEarned,
        numberOfSuccessInvites
      } = req.request;
      //const condition = {
      //  where: type ? `"account_type" = '${type}'` : null
        //`AND account_status = ANY($${values.length + 1}::text[])`
      //}
      const setClauses: string[] = [];
      const values: any[] = [];

      try {
        // Construct the SQL query
        // Only add set clauses for fields that are not empty
        if (businessIds !== undefined) {
          setClauses.push(`AND u.profile_id = ANY($${values.length + 1}::int[])`);
          values.push(businessIds);
        }
        //if (profilesIds !== undefined) {
        //  setClauses.push(`AND u.profile_id = ANY($${values.length + 1}::int[])`);
        //  values.push(profilesIds);
        // }
        if (status !== undefined) {
          setClauses.push(`AND u.account_status = ANY($${values.length + 1}::text[])`);
          values.push(status);
        }
        if (type !== undefined) {
          setClauses.push(`AND u.account_type = $${values.length + 1}`);
          values.push(type);
        }
        if (verified !== undefined && verified !== "all") {
          if (verified === "verified-only"){
            setClauses.push(`AND u.verified = $${values.length + 1}`);
            values.push(true);
          }
          if (verified === "not-verified-only"){
            setClauses.push(`AND u.verified = $${values.length + 1}`);
            values.push(false);
          }  
        }
        if (visibility !== undefined) {
          setClauses.push(`AND u.visibility = ANY($${values.length + 1}::text[])`);
          values.push(visibility);
        }
        if (category !== undefined && category[0] !== "all") {
          setClauses.push(`AND u.category = ANY($${values.length + 1}::text[])`);
          values.push(category);
        }        
        if (ownedBy !== undefined) {
          setClauses.push(`AND u.owned_by = ANY($${values.length + 1}::text[])`);
          values.push(ownedBy);
        }
        if (emails !== undefined) {
          setClauses.push(`AND u.email = ANY($${values.length + 1}::text[])`);
          values.push(emails);
        }

        values.push(limit || 10)

        // Construct the SQL query string
        let query = `
        SELECT u.* 
        ${numberOfSurveys !== undefined ? `, COUNT(s.survey_id) AS published_surveys` : ''}
        ${numberOfSurveysCompleted !== undefined ? `, COUNT(f.filling_id) AS surveys_completed` : ''}
        ${numberOfAnsrEarned !== undefined ? `, COUNT(f.filling_id) * 5 AS ansr_earned` : ''}
        ${numberOfRewardsEarned !== undefined ? `, COUNT(r.reward_id) AS rewards_earned` : ''}
        FROM users u
        ${numberOfSurveys !== undefined ? `INNER JOIN surveys s ON u.profile_id = s.profile_id AND s.survey_status = 'PUBLISHED'` : ''}
        ${(numberOfSurveysCompleted || numberOfAnsrEarned) !== undefined ? `INNER JOIN filling_queue f ON u.profile_id = f.profile_id AND f.filling_status = 'COMPLETE'` : ''}
        ${numberOfRewardsEarned !== undefined ? `INNER JOIN survey_results r ON u.profile_id = r.profile_id AND r.reward_claimed = true` : ''}
        WHERE u.profile_id > 0
        ${setClauses.join(' ')}
        ${numberOfSurveys !== undefined ? 'GROUP BY u.profile_id, s.profile_id' : ''}
        ${numberOfSurveys !== undefined ? `HAVING u.profile_id = s.profile_id AND COUNT(s.survey_id)::int >= ${numberOfSurveys}` : ''}
        ${(numberOfSurveysCompleted || numberOfAnsrEarned || numberOfRewardsEarned) !== undefined ? `GROUP BY u.profile_id${(numberOfSurveysCompleted || numberOfAnsrEarned) !== undefined ? ', f.profile_id' : ''} ${numberOfRewardsEarned !== undefined ? ',r.profile_id' : ''}` : ''}
        ${(numberOfSurveysCompleted || numberOfAnsrEarned || numberOfRewardsEarned) !== undefined ? `HAVING ${(numberOfSurveysCompleted || numberOfAnsrEarned) !== undefined ? 'u.profile_id = f.profile_id' : ''} ${numberOfSurveysCompleted !== undefined ? ` AND COUNT(f.filling_id)::int >= ${numberOfSurveysCompleted}` : ''} ${numberOfAnsrEarned !== undefined ? ` AND COUNT(f.filling_id)::int * 5 >= ${numberOfAnsrEarned}` : ''} ${numberOfRewardsEarned !== undefined ? (numberOfSurveysCompleted || numberOfAnsrEarned) !== undefined ? ` AND u.profile_id = r.profile_id AND COUNT(r.reward_id)::int >= ${numberOfRewardsEarned}` : `u.profile_id = r.profile_id AND COUNT(r.reward_id)::int >= ${numberOfRewardsEarned}` : ''}` : ''}    
        ORDER BY u.profile_id ASC
        LIMIT $${values.filter((v) => v).length}
        `;

        if (cursor) {
          values.push(cursor);
          query += ` OFFSET $${values.filter((q) => q).length}`;
        }

        const userElegibleSurveys = async (businessId: number, profileIds: number[]) => {
          if (profileIds !== undefined) {
            const valuesElegible = [profileIds, businessId]

            const elegibleSurveysQuery = `
            SELECT count(s.survey_id) AS elegible_surveys
            FROM surveys s
            LEFT JOIN users u ON u.profile_id = ANY($${1}::int[])
            LEFT JOIN filling_queue fillqueue ON s.survey_id = fillqueue.survey_id
            LEFT JOIN survey_results sresults ON s.survey_id = sresults.survey_id
            WHERE s.profile_id = $${2}::int
              AND s.survey_status = 'PUBLISHED'
              AND fillqueue.filling_status IS NULL
            `;
            

          // Execute the query
          const elegibleSurveys = await getQueryResult(elegibleSurveysQuery, valuesElegible);
          //console.log('# elegibleSurveys ===>', elegibleSurveys)
          return elegibleSurveys[0].elegible_surveys as number;
          } else {
            return 0;
          }
        }

        const availableSurveys = async (businessId: number) => {
            const valuesAvailable = [businessId]

            const availableSurveysQuery = `
            SELECT count(s.survey_id) AS published_surveys
            FROM surveys s
            WHERE s.profile_id = $${1}::int
              AND s.survey_status = 'PUBLISHED'
            `;
            

          // Execute the query
          const publishedSurveys = await getQueryResult(availableSurveysQuery, valuesAvailable);
          //console.log('# publishedSurveys ===>', publishedSurveys)
          return publishedSurveys[0].published_surveys as number;
        }

        // Execute the query
        const users = await getQueryResult(query, values);

        // Format the result
        const items: User[] = users.map( async (row: any) => { 
        //console.log(elegibleSurveys)
        return ({
          profile_id: row.profile_id,
          first_name: row.first_name,
          last_name: row.last_name,
          business_name: row.business_name,
          display_name: row.display_name,
          bio: row.bio,
          age: row.age,
          gender: row.gender,
          location: row.location,
          email: row.email,
          avatar: row.avatar,
          account_type: row.account_type,
          account_status: row.account_status,
          pin_code: row.pin_code,
          wallet: row.wallet,
          surveys: row.surveys,
          surveys_taken: row.surveys_taken,
          medias: row.medias,
          category: row.category,
          owned_medias: row.owned_medias,
          referrals: row.referrals,
          inviter: row.inviter,
          verified: row.verified,
          issuer: row.issuer,
          visibility: row.visibility,
          payment_method: row.payment_method,
          created_at: row.created_at,
          updated_at: row.updated_at,
          last_login_at: row.last_login_at,
          published_surveys: availableSurveys(row.profile_id),
          elegible_surveys: userElegibleSurveys(row.profile_id, profileIds),
          __typename: 'User',
        })})

        const pageInfo: PaginatedResultInfo = {
          "totalCount": items.length,
          "next": { "timestamp": new Date().getTime(), "offset": req.request.limit },
        }
        const usersResult: PaginatedUserResult = { 
          "items": items,
          "pageInfo": pageInfo
        }
        //console.log(JSON.stringify(usersResult, null, 2))
        return usersResult;
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },    
    users: async (_: any, req: any, context: any): Promise<PaginatedUserResult> => {
      const { limit, cursor, type, status, verified, boosted, visibility, category, ownedBy, profileIds, businessIds, emails, numberOfSurveys, sorting } = req.request;
      //const condition = {
      //  where: type ? `"account_type" = '${type}'` : null
        //`AND account_status = ANY($${values.length + 1}::text[])`
      //}
      const setClauses: string[] = [];
      const values: any[] = [];

      try {
        // Construct the SQL query
        // Only add set clauses for fields that are not empty
        if (businessIds !== undefined) {
          setClauses.push(`AND u.profile_id = ANY($${values.length + 1}::int[])`);
          values.push(businessIds);
        }
        //if (profilesIds !== undefined) {
        //  setClauses.push(`AND u.profile_id = ANY($${values.length + 1}::int[])`);
        //  values.push(profilesIds);
        // }
        if (status !== undefined) {
          setClauses.push(`AND u.account_status = ANY($${values.length + 1}::text[])`);
          values.push(status);
        }
        if (type !== undefined) {
          setClauses.push(`AND u.account_type = $${values.length + 1}`);
          values.push(type);
        }
        if (verified !== undefined && verified !== "all") {
          if (verified === "verified-only"){
            setClauses.push(`AND u.verified = $${values.length + 1}`);
            values.push(true);
          }
          if (verified === "not-verified-only"){
            setClauses.push(`AND u.verified = $${values.length + 1}`);
            values.push(false);
          }  
        }
        if (visibility !== undefined) {
          setClauses.push(`AND u.visibility = ANY($${values.length + 1}::text[])`);
          values.push(visibility);
        }
        if (category !== undefined && category[0] !== "all") {
          setClauses.push(`AND u.category = ANY($${values.length + 1}::text[])`);
          values.push(category);
        }        
        if (ownedBy !== undefined) {
          setClauses.push(`AND u.owned_by = ANY($${values.length + 1}::text[])`);
          values.push(ownedBy);
        }
        if (emails !== undefined) {
          setClauses.push(`AND u.email = ANY($${values.length + 1}::text[])`);
          values.push(emails);
        }

        if (cursor) {
          setClauses.push(`AND u.created_at > $${values.length + 1}`);
          values.push(cursor); 
        }

        values.push(limit || 10)

        // Construct the SQL query string
        const query = `
        SELECT u.* ${boosted !== undefined ? `, o.boost_status` : ''} ${numberOfSurveys !== undefined ? `, count(s.survey_id) AS published_surveys` : ''}
        FROM users u
        ${numberOfSurveys !== undefined ? `INNER JOIN surveys s ON u.profile_id = s.profile_id AND s.survey_status = 'PUBLISHED'` : ''}
        ${boosted !== undefined ? `INNER JOIN user_boosts o ON o.profile_id = u.profile_id` : ''}
        WHERE u.profile_id > 0
        ${setClauses.join(' ')}
        ${numberOfSurveys !== undefined ? 'GROUP BY u.profile_id, s.profile_id' : ''}
        ${numberOfSurveys !== undefined ? `HAVING u.profile_id = s.profile_id AND count(s.survey_id)::int >= ${numberOfSurveys}` : ''}
        ORDER BY u.created_at ${sorting ? sorting : 'ASC'}
        LIMIT $${values.filter((v) => v).length}
        ${cursor ? `OFFSET 1 ROW` : `OFFSET 0`}
        `;

        const userElegibleSurveys = async (businessId: number, profileIds: number[]) => {
          if (profileIds !== undefined) {
            const valuesElegible = [profileIds, businessId]

            const elegibleSurveysQuery = `
            SELECT count(s.survey_id) AS elegible_surveys
            FROM surveys s
            LEFT JOIN users u ON u.profile_id = ANY($${1}::int[])
            LEFT JOIN filling_queue fillqueue ON s.survey_id = fillqueue.survey_id
            LEFT JOIN survey_results sresults ON s.survey_id = sresults.survey_id
            WHERE s.profile_id = $${2}::int
              AND s.survey_status = 'PUBLISHED'
              AND fillqueue.filling_status IS NULL
            `;
            

          // Execute the query
          const elegibleSurveys = await getQueryResult(elegibleSurveysQuery, valuesElegible);
          //console.log('# elegibleSurveys ===>', elegibleSurveys)
          return elegibleSurveys[0].elegible_surveys as number;
          } else {
            return 0;
          }
        }

        const availableSurveys = async (businessId: number) => {
            const valuesAvailable = [businessId]

            const availableSurveysQuery = `
            SELECT count(s.survey_id) AS published_surveys
            FROM surveys s
            WHERE s.profile_id = $${1}::int
              AND s.survey_status = 'PUBLISHED'
            `;
            

          // Execute the query
          const publishedSurveys = await getQueryResult(availableSurveysQuery, valuesAvailable);
          //console.log('# publishedSurveys ===>', publishedSurveys)
          return publishedSurveys[0].published_surveys as number;
        }        

        // Execute the query
        const users = await getQueryResult(query, values);

        // Format the result
        const items: User[] = users.map( async (row: any) => { 
        //console.log(elegibleSurveys)
        return ({
          profile_id: row.profile_id,
          first_name: row.first_name,
          last_name: row.last_name,
          business_name: row.business_name,
          display_name: row.display_name,
          bio: row.bio,
          age: row.age,
          gender: row.gender,
          location: row.location,
          email: row.email,
          avatar: row.avatar,
          account_type: row.account_type,
          account_status: row.account_status,
          pin_code: row.pin_code,
          wallet: row.wallet,
          surveys: row.surveys,
          surveys_taken: row.surveys_taken,
          medias: row.medias,
          category: row.category,
          owned_medias: row.owned_medias,
          referrals: row.referrals,
          inviter: row.inviter,
          verified: row.verified,
          boosted: row.boost_status === 'ACTIVE' ? true : false,
          issuer: row.issuer,
          visibility: row.visibility,
          payment_method: row.payment_method,
          created_at: row.created_at,
          updated_at: row.updated_at,
          last_login_at: row.last_login_at,
          published_surveys: availableSurveys(row.profile_id),
          elegible_surveys: userElegibleSurveys(row.profile_id, profileIds),
          __typename: 'User',
        })})

        //const lastItem = users.length > 0 ? new Date(users[items.length - 1].created_at).getTime() : 0;
        //console.log(JSON.stringify(lastItem, null, 2))


        let nextCursor: string | null = null;
        if (items.length > 0) {
          const lastItemCreatedAt = new Date(users[items.length - 1].created_at); // Get the created_at value of the last item
          nextCursor = lastItemCreatedAt.toISOString(); // Convert the Date object to ISO string as the next cursor
        }

        const pageInfo: PaginatedResultInfo = {
          totalCount: items.length,
          prev: cursor,
          next: nextCursor,
        }
        
        const usersResult: PaginatedUserResult = { 
          items: items,
          pageInfo: pageInfo
        }
        //console.log(JSON.stringify(usersResult, null, 2))
        return usersResult;
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    user: async (_: any, req: any, context: any): Promise<User> => {
      const { profileId, email, did } = req.request
      const setClauses: string[] = [];
      const values: any[] = [];

      try {
        // Construct the SQL query
        // Only add set clauses for fields that are not empty
        if (profileId !== undefined) {
          //setClauses.push(`AND u.profile_id = ANY($${values.length + 1}::int[])`);
          setClauses.push(`AND u.profile_id = $${values.length + 1}::int`);
          values.push(profileId);
        }

        if (email !== undefined) {
          setClauses.push(`AND u.email = ANY($${values.length + 1}::text[])`);
          values.push(email);
        }


        if (did !== undefined) {
          setClauses.push(`AND u.did = ANY($${values.length + 1}::text[])`);
          values.push(did);
        }

        // Construct the SQL query string
        const query = `
        SELECT w.*, u.*, o.boost_status FROM users u 
        LEFT JOIN wallets w ON w.profile_id = u.profile_id
        INNER JOIN user_boosts o ON o.profile_id = u.profile_id
        WHERE u.profile_id > 0
        ${setClauses.join(' ')}
        `;

        // Execute the query
        let result = await getQueryResult(query, values);

/*
      const union = {
        source: 'wallets',
        id: 'profile_id',
        parent: 'user'
      }

      try {


        const result = await getQueryResult(query, values);
        let result = await getDocumentsByField('users','profile_id',req.request.profileId, union)
*/

        if (!result.length) {

          const union = {
            source: 'wallets',
            id: 'profile_id',
            parent: 'user'
          }

          const resultQuery = {
            text:
            `INSERT INTO wallets (credit, profile_id, recipient) VALUES ($1, $2, $3) RETURNING *;`,
            values: [0, req.request.profileId, ''],
          };
          //const rows = await getQueryResult(resultQuery.text, resultQuery.values);
          //const walletResult = rows[0];

          result = await getDocumentsByField('users','profile_id',req.request.profileId, union)
        }

        const wallet = (parent) => {
          return {
            __typename: 'Wallet',
            wallet_id: parent.wallet_id,
            profile_id: parent.profile_id,
            credit: parent.credit,
            recipient: parent.recipient,
            created_at: parent.created_at,
            updated_at: parent.updated_at,
          }
        }

        result[0].wallet = wallet(result[0]);
        result[0].boosted = result[0].boost_status === 'ACTIVE' ? true : false;

        const userResult: User = result[0]

        return userResult;
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    userbyIssuer: async (_: any, req: any, context: any): Promise<User> => {
      //console.log('req ==>', req)
      const { issuer, email } = req.request;
      try {

        if (email) {
          const result = await getDocumentsByField('users', 'email', email)
          return result[0];
        }

        if (issuer) {
          const result = await getDocumentsByField('users', 'issuer', issuer)
          return result[0];
        }

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    userbyWalletIssuer: async (_: any, req: any, context: any): Promise<User> => {
      //console.log('req ==>', req)
      const { iden3issuer, email } = req.request;
      try {

        if (email) {
          const result = await getDocumentsByField('users', 'email', email)
          return result[0];
        }

        if (iden3issuer) {
          const result = await getDocumentsByField('users', 'iden3issuer', iden3issuer)
          return result[0];
        }

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    userWallet: async (_: any, req: any, context: any): Promise<Wallet> => {
      const { profileId, did } = req.request;

      const getWalletBalance = async (profileId: number) => {
        try {
          if (profileId !== undefined) {
          const { data } = await axios.get(`${API_SERVER_URL}/near/ansrbalance?profileId=${profileId}`);
          const qstn_balance = data.data;
          return qstn_balance;
          } else {
            return 0;
          }

        } catch(error: any) {
          console.log(error);
        }
      }
      
      try {
        if (profileId !== undefined) {
          const result: Wallet = await getDocumentsByField('wallets', 'profile_id', profileId);
          const currentBalance = await getWalletBalance(profileId);
          //console.log('# getWalletBalance ==>', currentBalance);
          // HACK
          result[0].credit = Number(currentBalance);
          return result[0];
        } else if (did !== undefined) {
          const user = await getDocumentsByField('users', 'iden3issuer', did)
          const result: Wallet = await getDocumentsByField('wallets', 'profile_id', user[0].profileId);
          const currentBalance = await getWalletBalance(user[0].profileId);
          console.log('# result ==>', result[0]);
          //console.log('# getWalletBalance ==>', currentBalance);
          result[0].credit = Number(currentBalance);
          return result[0];
        } else {          
        const result: Wallet = await getDocumentsByField('wallets', 'profile_id', profileId);
        const currentBalance = await getWalletBalance(profileId);
        console.log('# result ==>', result[0]);
        // HACK
        result[0].credit = Number(currentBalance);
        
        return result[0];

        }

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    userRefferals: async (_: any, req: any, context: any): Promise<any> => {
      const { limit, cursor, emailAddresses, profileIds, invitedIds, surveyIds, refferalStatus, inviteStatus } = req.request;
      const setClauses: string[] = [];
      const values: any[] = [];

      try {
        // Construct the SQL query
        // Only add set clauses for fields that are not empty
        if (profileIds !== undefined) {
          setClauses.push(`AND user_refferals.profile_id = ANY($${values.length + 1}::int[])`);
          values.push(profileIds);
        }

        if (invitedIds !== undefined) {
          setClauses.push(`AND user_refferals.invited_id = ANY($${values.length + 1}::int[])`);
          values.push(invitedIds);
        }

        if (surveyIds !== undefined) {
          setClauses.push(`AND user_refferals.survey_id = ANY($${values.length + 1}::int[])`);
          values.push(surveyIds);
        }

        if (emailAddresses !== undefined) {
          setClauses.push(`AND user_refferals.invited_email = ANY($${values.length + 1}::text[])`);
          values.push(emailAddresses);
        }

        if (refferalStatus !== undefined) {
          setClauses.push(`AND user_refferals.refferal_status = $${values.length + 1}`);
          values.push(refferalStatus);
        }

        if (inviteStatus !== undefined) {
          setClauses.push(`AND user_refferals.invited_status = $${values.length + 1}`);
          values.push(inviteStatus);
        }


        values.push(limit || 10)

        // Construct the SQL query string
        let query = `
        SELECT user_refferals.*, users.display_name, users.email, users.avatar, users.account_status
        FROM user_refferals
        LEFT JOIN users ON user_refferals.invited_email::text = users.email::text
        WHERE user_refferals.refferal_id > 0
        ${setClauses.join(' ')}
        ORDER BY user_refferals.created_at DESC
        LIMIT $${values.filter((v) => v).length}
        `;

        if (cursor) {
          values.push(cursor);
          query += ` OFFSET $${values.filter((q) => q).length}`;
        }

        // Execute the query
        const refferals = await getQueryResult(query, values);

        const pageInfo: PaginatedResultInfo = {
          "totalCount": refferals.length,
          "next": { "timestamp": new Date().getTime(), "offset": req.request.limit },
        }
        const refferalsResult: PaginatedUserResult = { 
          "items": refferals,
          "pageInfo": pageInfo
        }
        //console.log(JSON.stringify(refferalsResult, null, 2))
        return refferalsResult;

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    userContracts: async (_: any, req: any, context: any): Promise<any> => {
      const { limit, cursor, profileIds } = req.request;
      const setClauses: string[] = [];
      const values: any[] = [];

      try {
        // Construct the SQL query
        // Only add set clauses for fields that are not empty
        if (profileIds !== undefined) {
          setClauses.push(`AND profile_id = ANY($${values.length + 1}::int[])`);
          values.push(profileIds);
        }

        values.push(limit || 10)

        // Construct the SQL query string
        let query = `
        SELECT * FROM user_contracts
        WHERE contract_id > 0
        ORDER BY created_at DESC
        LIMIT $${values.filter((v) => v).length}
        `;

        if (cursor) {
          values.push(cursor);
          query += ` OFFSET $${values.filter((q) => q).length}`;
        }

        // Execute the query
        const contracts = await getQueryResult(query, values);

        const pageInfo: PaginatedResultInfo = {
          "totalCount": contracts.length,
          "next": { "timestamp": new Date().getTime(), "offset": req.request.limit },
        }
        const contractsResult: PaginatedUserResult = { 
          "items": contracts,
          "pageInfo": pageInfo
        }
        //console.log(JSON.stringify(contractsResult, null, 2))
        return contractsResult;

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    userContract: async (_: any, req: any, context: any): Promise<any> => {
      const { profileIds, surveyIds, network } = req.request;
      const setClauses: string[] = [];
      const values: any[] = [];

      try {
        // Construct the SQL query
        // Only add set clauses for fields that are not empty
        if (profileIds !== undefined) {
          setClauses.push(`AND profile_id = ANY($${values.length + 1}::int[])`);
          values.push(profileIds);
        }
        // Only add set clauses for fields that are not empty
        if (surveyIds !== undefined) {
          setClauses.push(`AND survey_id = ANY($${values.length + 1}::int[])`);
          values.push(surveyIds);
        }

        if (network !== undefined) {
          setClauses.push(`AND network = $${values.length + 1}`);
          values.push(network);
        }

        // Construct the SQL query string
        const query = `
        SELECT * FROM user_contracts
        WHERE contract_id > 0
        ${setClauses.join(' ')}
        ORDER BY created_at DESC
        `;

        // Execute the query
        const contracts = await getQueryResult(query, values);

        return contracts[0];

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    surveyReward: async (_: any, req: any, context: any): Promise<SurveyReward> => {
      const { surveyId } = req.request;
      try {
          const result: SurveyReward = await getDocumentsByField('survey_rewards', 'survey_id', surveyId)
          //console.log('result ==> ', result)
          const isPrize = result[0]?.media_id ? await getDocumentsByField('nep171', 'series_id', result[0]?.media_id) : false;

          if (isPrize) {
            const resultPrize = isPrize[0];

            const mediaPrize: Nep171 = {
              nftId: resultPrize.nft_id,
              seriesId: resultPrize.series_id,
              chainId: 'near-protocol',
              metadata: {
                title: resultPrize.metadata_title,
                description: resultPrize.metadata_description,
                media: resultPrize.metadata_media,
                mediaHash: resultPrize.metadata_media_hash,
                copies: resultPrize.metadata_copies,
                issuedAt: resultPrize.metadata_issued_at,
                expiresAt: resultPrize.metadata_expires_at,
                startsAt: resultPrize.metadata_starts_at,
                updatedAt: resultPrize.metadata_updated_at,
                extra: resultPrize.metadata_extra,
                reference: resultPrize.metadata_reference,
                referenceHash: resultPrize.metadata_reference_hash,
              },
              royalty: resultPrize.royalty,
              ownerId: resultPrize.owner_id,
              mediaClaimed: resultPrize.media_claimed,
              mediaClaimedAt: resultPrize.media_claimed_at,
              mediaClaimedFrom: resultPrize.media_claimed_from,
            }

            result[0].media_prize = {...mediaPrize};
          }
          console.log('result[0]', result[0])
          
          return result[0];
        

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    surveyRewardErc721: async (_: any, req: any, context: any): Promise<SurveyReward> => {
      const { surveyId } = req.request;
      try {
          const result: SurveyReward = await getDocumentsByField('survey_rewards', 'survey_id', surveyId)
          //console.log('result ==> ', result)
          const isPrize = result[0]?.media_id ? await getDocumentsByField('erc721', 'nft_id', result[0]?.media_id) : false;

          if (isPrize) {
            const resultPrize = isPrize[0];

            /*const mediaPrize = {
              nft_id: resultPrize.nft_id,
              ...resultPrize
            }*/

            result[0].media_prize = {...resultPrize};
          }
          console.log('result[0]', result[0])
          
          return result[0];
        

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },  
    surveys: async (_: any, req: any, context: any): Promise<PaginatedSurveyResult> => {
      const { limit, cursor, type, status, businessIds, profileIds, fillingQueueIds, title, resultsCount, funded } = req.request;
      const setClauses: string[] = [];
      const values: any[] = [];

      try {
        // Construct the SQL query
        // Only add set clauses for fields that are not empty
        if (businessIds !== undefined) {
          setClauses.push(`AND u.profile_id = ANY($${values.length + 1}::int[])`);
          values.push(businessIds);
        }        
        //if (profileIds !== undefined) {
        //    setClauses.push(`AND fillqueue.profile_id = ANY($${values.length + 1}::int[])`);
        //  values.push(profileIds);
        //}
        if (fillingQueueIds !== undefined) {
          setClauses.push(`AND s.survey_id = ANY($${values.length + 1}::int[]) IS NOT TRUE`);
          values.push(fillingQueueIds);
        }
        if (type !== undefined) {
          setClauses.push(`AND s.survey_type = ANY($${values.length + 1}::text[])`);
          values.push(type);
        }
        if (status !== undefined) {
          setClauses.push(`AND s.survey_status = ANY($${values.length + 1}::text[])`);
          values.push(status);
        }
        if (title !== undefined) {
          setClauses.push(`AND s.title ILIKE '%' || $${values.length + 1} || '%'`);
          values.push(title);
        }
        if (funded !== undefined) {
          setClauses.push(`AND s.funded = ANY($${values.length + 1}::boolean)`);
          values.push(funded);
        }
        values.push(limit || 10)
      
        // Construct the SQL query string
        let query = `
        SELECT s.*, 
        u.profile_id,
        u.first_name,
        u.last_name,
        u.display_name,
        u.bio,
        u.email,
        u.avatar,
        u.account_type,
        u.account_status,
        u.inviter,
        u.verified,
        u.visibility,
        u.created_at AS user_created_at,
        rewards.reward_id, rewards.reward_type, rewards.media_id
        ${ profileIds !== undefined ? `, fillqueue.filling_status` : ''}
        ${ profileIds !== undefined ? `, sresults.cid_hash, sresults.reward_claimed, 
        sresults.reward_claimed_at, sresults.results_id` : ''}
        FROM surveys s
        INNER JOIN users u ON s.profile_id = u.profile_id
        LEFT JOIN survey_rewards rewards ON s.survey_id = rewards.survey_id
        ${ profileIds !== undefined ? `LEFT JOIN filling_queue fillqueue ON s.survey_id = fillqueue.survey_id AND fillqueue.profile_id = ${profileIds}` : ''}
        ${ profileIds !== undefined ? `LEFT JOIN survey_results sresults ON s.survey_id = sresults.survey_id AND sresults.profile_id = ${profileIds}` : ''}
        WHERE s.survey_id > 0
        ${setClauses.join(' ')}
        ORDER BY s.updated_at DESC NULLS LAST
        LIMIT $${values.filter((v) => v).length}
        `;

        if (cursor) {
          values.push(cursor);
          query += ` OFFSET $${values.filter((q) => q).length}`;
        }

        /*// Construct the SQL query
        const query = `
          SELECT s.*, u.*${ profileIds ? `, fillqueue.*` : ''}
          FROM surveys s
          INNER JOIN users u ON s.profile_id = u.profile_id
          ${ profileIds ? `FULL OUTER JOIN filling_queue fillqueue ON s.survey_id = fillqueue.survey_id` : ''}
          WHERE ($1::text[] IS NULL OR s.survey_type = ANY($1::text[]))
          AND ($2::text[] IS NULL OR s.survey_status = ANY($2::text[]))
          AND ($3::int[] IS NULL OR u.profile_id = ANY($3::int[]))
          AND ($4::int[] IS NULL OR s.survey_id = ANY($4::int[]) IS NOT TRUE)
          AND ($5::text IS NULL OR s.title ILIKE '%' || $5::text || '%')
          ${ profileIds ? `AND ($7::int[] IS NULL OR fillqueue.profile_id = ANY($7::int[]))` : ''}
          ${cursor ? `AND s.survey_id < ${cursor}` : ''}
          ORDER BY s.survey_id DESC
          LIMIT $6;
        `;

        const params = [type, status, businessIds, fillingQueueIds, title, limit];

        if (profileIds !== undefined) {
          params.push(profileIds)
        }

        */
     
        const rows = await getQueryResult(query, values);
        
        // Format the result
        const items: Survey[] = rows.map(async (row: any) => {
          const results_survey = await getQueryResult("SELECT * FROM survey_results WHERE survey_id = $1", [row.survey_id]);

        return ({
          surveyId: row.survey_id,
          title: row.title,
          description: row.description,
          logo: row.logo,
          surveyType: row.survey_type,
          surveyStatus: row.survey_status,
          campaignType: row.campaign_type,
          pages: row.pages,
          results: results_survey ? results_survey : row.results,
          user: {
            profileId: row.profile_id,
            firstName: row.first_name,
            lastName: row.last_name,
            displayName: row.display_name,
            bio: row.bio,
            email: row.email,
            avatar: row.avatar,
            accountType: row.account_type,
            accountStatus: row.account_status,
            inviter: row.inviter,
            verified: row.verified,
            visibility: row.visibility,
            createdAt: row.user_created_at, //row.created_at,
          },
          fillingStatus: row.filling_status,
          cidHash: row.cid_hash,
          tags: row.tags,
          funded: row.funded,
          rewardId: row.reward_id,
          rewardType: row.reward_type,
          rewardClaimed: row.reward_claimed,
          rewardClaimedAt: row.reward_claimed_at,
          resultsId: row.results_id,
          whiteList: row.white_list,
          showQuestionNumbers: row.show_question_numbers,
          pageNextText: row.page_next_text,
          completeText: row.complete_text,
          showPrevButton: row.show_prev_button,
          firstPageIsStarted: row.first_page_is_started,
          startSurveyText: row.start_survey_text,
          completedHtml: row.completed_html,
          showPreviewBeforeComplete: row.show_preview_before_complete,
          createdAt: row.created_at,
          updatedAt: row.updated_at,
          publishedAt: row.published_at,
        });

      })
    
        //items[0].totalCount
        const totalCount = items.length > 0 ? items.length : 0;
        const nextCursor = items.length > 0 ? items[items.length - 1].surveyId : null;
        const prevCursor = cursor;

        return {
          items,
          pageInfo: {
            totalCount,
            next: nextCursor,
            prev: prevCursor,
          },
        };

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
      


    },    

    survey: async (_: any, req: any, context: any): Promise<Survey> => {
      try {
        const union = {
          field: 'user',
          source: 'users',
          id: 'profile_id',
          parent: 'survey'
        }
        const survey = await getDocumentsByField('surveys', 'survey_id', req.request.surveyId, union)
        const results_survey = await getQueryResult("SELECT * FROM survey_results WHERE survey_id = $1", [req.request.surveyId]);

        const user = (parent) => {
          return {
            __typename: 'User',
            profile_id: parent.profile_id,
            first_name: parent.first_name,
            last_name: parent.last_name,
            business_name: parent.business_name,
            display_name: parent.display_name,
            bio: parent.bio,
            email: parent.email,
            avatar: parent.avatar,
            account_type: parent.account_type,
            account_status: parent.account_status,
            pin_code: parent.pin_code,
            wallet: parent.wallet,
            surveys: parent.surveys,
            surveys_taken: parent.surveys_taken,
            medias: parent.medias,
            owned_medias: parent.owned_medias,
            referrals: parent.referrals,
            inviter: parent.inviter,
            verified: parent.verified,
            issuer: parent.issuer,
            visibility: parent.visibility,
            payment_method: parent.payment_method,
            created_at: parent.created_at,
            updated_at: parent.updated_at,
            last_login_at: parent.last_login_at,
          };
        };

        // set user
        console.log(JSON.stringify(results_survey))
        survey[0].user = user(survey[0])
        survey[0].results = results_survey.length ? results_survey : []

        const surveyResult: Survey = survey[0]

        //console.log(JSON.stringify(surveyResult, null, 2))
        return surveyResult;
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    surveyReferrals: async (_: any, req: any, context: any): Promise<any> => {
      const { limit, cursor, emailAddresses, profileIds, invitedIds, surveyIds, referralStatus, inviteStatus } = req.request;
      const setClauses: string[] = [];
      const values: any[] = [];

      try {
        // Construct the SQL query
        // Only add set clauses for fields that are not empty
        if (profileIds !== undefined) {
          setClauses.push(`AND survey_referrals.profile_id = ANY($${values.length + 1}::int[])`);
          values.push(profileIds);
        }

        if (invitedIds !== undefined) {
          setClauses.push(`AND survey_referrals.invited_id = ANY($${values.length + 1}::int[])`);
          values.push(invitedIds);
        }

        if (surveyIds !== undefined) {
          setClauses.push(`AND survey_referrals.survey_id = ANY($${values.length + 1}::int[])`);
          values.push(surveyIds);
        }

        if (emailAddresses !== undefined) {
          setClauses.push(`AND survey_referrals.invited_email = ANY($${values.length + 1}::text[])`);
          values.push(emailAddresses);
        }

        if (referralStatus !== undefined) {
          setClauses.push(`AND survey_referrals.refferal_status = $${values.length + 1}`);
          values.push(referralStatus);
        }

        if (inviteStatus !== undefined) {
          setClauses.push(`AND survey_referrals.invited_status = $${values.length + 1}`);
          values.push(inviteStatus);
        }


        values.push(limit || 10)

        // Construct the SQL query string
        let query = `
        SELECT survey_referrals.*, users.display_name, users.email, users.avatar, users.account_status
        FROM survey_referrals
        LEFT JOIN users ON survey_referrals.invited_email::text = users.email::text
        WHERE survey_referrals.referral_id > 0
        ${setClauses.join(' ')}
        ORDER BY survey_referrals.created_at DESC
        LIMIT $${values.filter((v) => v).length}
        `;

        if (cursor) {
          values.push(cursor);
          query += ` OFFSET $${values.filter((q) => q).length}`;
        }

        // Execute the query
        const refferals = await getQueryResult(query, values);

        const pageInfo: PaginatedResultInfo = {
          "totalCount": refferals.length,
          "next": { "timestamp": new Date().getTime(), "offset": req.request.limit },
        }
        const refferalsResult: PaginatedUserResult = { 
          "items": refferals,
          "pageInfo": pageInfo
        }
        //console.log(JSON.stringify(refferalsResult, null, 2))
        return refferalsResult;

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    fillingQueue: async (_: any, req: any, context: any): Promise<PaginatedFillingQueueResult> => {
      const { limit, cursor, sorting, type, status, profileIds, surveyIds, isQueue } = req.request;
      const setClauses: string[] = [];
      const values: any[] = [];

      try {
        // Construct the SQL query
        // Only add set clauses for fields that are not empty
        if (profileIds !== undefined) {
          setClauses.push(`AND f.profile_id = ANY($${values.length + 1}::int[])`);
          values.push(profileIds);
        }
        if (surveyIds !== undefined) {
          setClauses.push(`AND f.survey_id = ANY($${values.length + 1}::int[])`);
          values.push(surveyIds);
        }
        if (type !== undefined) {
          setClauses.push(`AND f.filling_type = $${values.length + 1}`);
          values.push(type);
        }
        if (status !== undefined) {
          setClauses.push(`AND f.filling_status = $${values.length + 1}`);
          values.push(status);
        }
        //if (completedAt !== undefined) {
        //  setClauses.push(`completed_at = $${values.length + 1}`);
        //  values.push(completedAt);
        //}
        values.push(limit || 10)
      
        // Construct the SQL query string
        //
//, sresults.reward_id, sresults.reward_type, sresults.cid_hash, 
//sresults.reward_claimed, sresults.reward_claimed_at, 
//sresults.results_id

//, survey_results sresults

/**

        AND s.survey_id = rewards.survey_id
        AND s.survey_id = f.survey_id
        AND s.survey_id = sresults.survey_id   


 */

        //AND s.survey_id = sresults.survey_id
        let query = isQueue === true ? `
        SELECT DISTINCT ON (f.filling_id) f.filling_status, f.filling_id, f.filling_type, f.updated_at, f.metadata, f.claim_id, s.*, u.*, 
        rewards.reward_id, rewards.reward_type, rewards.media_id, 
        sresults.cid_hash, sresults.reward_claimed, sresults.reward_claimed_at, sresults.results_id
        FROM filling_queue f
        LEFT JOIN users u ON u.profile_id = f.profile_id
        LEFT JOIN survey_results sresults ON sresults.survey_id = f.survey_id
        LEFT JOIN survey_rewards rewards ON rewards.survey_id = f.survey_id
		    LEFT JOIN surveys s ON s.survey_id = f.survey_id
        WHERE f.profile_id = u.profile_id
        ${setClauses.join(' ')}
        ORDER BY f.filling_id, f.updated_at ${sorting ? sorting : 'DESC'}
        LIMIT $${values.filter((v) => v).length}
        ` : 
        `SELECT f.*, s.*, u.*
        FROM filling_queue f, users u, surveys s
        WHERE f.profile_id = u.profile_id
        AND f.survey_id = s.survey_id
        ${setClauses.join(' ')}
        ORDER BY f.updated_at ${sorting ? sorting : 'DESC'}
        LIMIT $${values.filter((v) => v).length}
        `;

        /*let query = `SELECT f.*, s.*, u.*
        FROM filling_queue f, users u, surveys s
        WHERE f.profile_id = u.profile_id
        AND f.survey_id = s.survey_id
        ${setClauses.join(' ')}
        ORDER BY f.created_at DESC
        LIMIT $${values.filter((v) => v).length}
        `;*/


        if (cursor) {
          values.push(cursor);
          query += ` OFFSET $${values.filter((q) => q).length + 1}`;
        }

        //const valuesParsed = values.filter((v) => v).map((vp) => Array.isArray(vp) ? vp[0] : vp);
        //console.log('valuesParsed ->', valuesParsed)

        // Execute the query
        const fillqueue = await getQueryResult(query, values);

        const user = (parent) => {
          return {
            __typename: 'User',
            profile_id: parent.profile_id,
            first_name: parent.first_name,
            last_name: parent.last_name,
            display_name: parent.display_name,
            bio: parent.bio,
            email: parent.email,
            avatar: parent.avatar,
            account_type: parent.account_type,
            account_status: parent.account_status,
            pin_code: parent.pin_code,
            wallet: parent.wallet,
            surveys: parent.surveys,
            surveys_taken: parent.surveys_taken,
            medias: parent.medias,
            owned_medias: parent.owned_medias,
            referrals: parent.referrals,
            inviter: parent.inviter,
            verified: parent.verified,
            issuer: parent.issuer,
            visibility: parent.visibility,
            payment_method: parent.payment_method,
            created_at: parent.created_at,
            updated_at: parent.updated_at,
            last_login_at: parent.last_login_at,
          };
        };


        const survey = (parent) => {
          return {
          __typename: 'Survey',
          survey_id: parent.survey_id,
          title: parent.title,
          description: parent.description,
          logo: parent.logo,
          pages: parent.pages,
          survey_type: parent.survey_type,
          survey_status: parent.survey_status,
          campaign_type: parent.campaign_type,
          results: parent.results,
          filling_status: parent.filling_status,
          cid_hash: parent.cid_hash,
          reward_id: parent.reward_id,
          reward_type: parent.reward_type,
          reward_claimed: parent.reward_claimed,
          reward_claimed_at: parent.reward_claimed_at,
          results_id: parent.results_id,
          profile_id: parent.profile_id,
          white_list: parent.white_list,
          show_question_numbers: parent.show_question_numbers,
          page_next_text: parent.page_next_text,
          complete_text: parent.complete_text,
          show_prev_button: parent.show_prev_button,
          first_page_is_started: parent.first_page_is_started,
          start_survey_text: parent.start_survey_text,
          completed_html: parent.completed_html,
          show_preview_before_complete: parent.show_preview_before_complete,
          created_at: parent.created_at,
          updated_at: parent.updated_at,
          published_at: parent.published_at,
          };
        };


        fillqueue.map((queue) => { 
          queue.user = user(queue);
          queue.metadata = JSON.stringify(queue.metadata);
          queue.survey = survey(queue);
        });

        // Return the paginated result
        const pageInfo: PaginatedResultInfo = {
          prev: fillqueue.length ? fillqueue[0].created_at : null,
          next: { "timestamp": fillqueue.length ? fillqueue[fillqueue.length - 1].created_at : null, "offset": cursor ? values[values.filter((v) => v).length + 1] : null },
          totalCount: fillqueue.length
        }
        const fillqueueResult: PaginatedFillingQueueResult = { 
          items: fillqueue,
          pageInfo: pageInfo
        }

        //console.log(JSON.stringify(fillqueueResult, null, 2))
        return fillqueueResult;

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    surveyResults: async (_: any, req: any, context: any): Promise<PaginatedSurveyResultResult> => {
      const { limit, cursor, createdAt, profileIds, surveyIds, resultsIds } = req.request;
        
        try {
          // Initialize variables to build the query
          const queryParams: any[] = [];
          const queryConditions: string[] = [];
      
          // Check if createdAt filter was provided
          if ( createdAt) {
            queryParams.push( createdAt);
            queryConditions.push(`sr.created_at >= $${queryParams.length}`);
          }
      
          // Check if profileIds filter was provided
          if ( profileIds &&  profileIds.length > 0) {
            queryParams.push( profileIds);
            queryConditions.push(`u.profile_id = sr.profile_id`);
            queryConditions.push(`u.profile_id = ANY($${queryParams.length}::int[])`);
            queryConditions.push(`sr.profile_id = ANY($${queryParams.length}::int[])`);
          }
      
          // Check if surveyIds filter was provided
          if ( surveyIds &&  surveyIds.length > 0) {
            queryParams.push(surveyIds);
            queryConditions.push(`sr.survey_id = ANY($${queryParams.length}::int[])`);
          }

          // Check if surveyIds filter was provided
          if ( resultsIds &&  resultsIds.length > 0) {
            queryParams.push(resultsIds);
            queryConditions.push(`sr.results_id = ANY($${queryParams.length}::int[])`);
          }

      
          // Initialize the base query
          let query = `
            SELECT 
              sr.profile_id,
              sr.results_id,
              sr.chain_id,
              sr.score,
              sr.credibility_score,
              sr.reward_id,
              sr.reward_type,
              sr.reward_claimed,
              sr.reward_claimed_at,
              sr.media_claimed,
              sr.media_claimed_at,
              fq.claim_id,
              u.first_name,
              u.last_name,
              u.display_name,
              u.bio,
              u.email,
              u.avatar,
              u.account_type,
              u.account_status,
              u.pin_code,
              u.wallet,
              u.surveys,
              u.surveys_taken,
              u.medias,
              u.owned_medias,
              u.referrals,
              u.inviter,
              u.verified,
              u.issuer,
              u.visibility,
              u.payment_method,
              u.created_at,
              u.updated_at,
              u.last_login_at,
              s.survey_id,
              s.title,
              s.description,
              s.logo,
              s.pages,
              s.survey_type,
              s.survey_status,
              s.campaign_type,
              s.results,
              s.funded,
              s.white_list,
              s.show_question_numbers,
              s.page_next_text,
              s.complete_text,
              s.show_prev_button,
              s.first_page_is_started,
              s.start_survey_text,
              s.completed_html,
              s.show_preview_before_complete,
              s.created_at,
              s.updated_at,
              s.published_at,
              sr.result,
              sr.created_at as "createdAt"
            FROM 
              survey_results sr
            LEFT JOIN users u ON u.profile_id = sr.profile_id
            LEFT JOIN surveys s ON s.survey_id = sr.survey_id
            LEFT JOIN filling_queue fq ON fq.survey_id = sr.survey_id AND fq.profile_id = sr.profile_id
          `;
      
          // Add query conditions, if any
          if (queryConditions.length > 0) {
            query += ` WHERE ${queryConditions.join(' AND ')}`;
          }
      
          // Add pagination and ordering
          query += ` ORDER BY sr.created_at DESC, sr.results_id DESC`;

          query += ` LIMIT $${queryParams.length + 1}`;
          queryParams.push( limit || 20);
      
          if ( cursor) {
            queryParams.push( cursor);
            query += ` OFFSET (SELECT COUNT(*) FROM survey_results WHERE created_at > (SELECT created_at FROM survey_results WHERE results_id = $${queryParams.length}) OR (created_at = (SELECT created_at FROM survey_results WHERE results_id = $${queryParams.length}) AND results_id < $${queryParams.length}))`;
          }
      
          //console.log(query, queryParams)
          // Execute the query
          const rows = await getQueryResult(query, queryParams);

          const items = rows.map((row) => {

            const user = (parent) => {
              if (parent.profile_id) {
              return {
                __typename: 'User',
                profile_id: parent.profile_id,
                first_name: parent.first_name,
                last_name: parent.last_name,
                display_name: parent.display_name,
                bio: parent.bio,
                email: parent.email,
                avatar: parent.avatar,
                account_type: parent.account_type,
                account_status: parent.account_status,
                pin_code: parent.pin_code,
                wallet: parent.wallet,
                surveys: parent.surveys,
                surveys_taken: parent.surveys_taken,
                medias: parent.medias,
                owned_medias: parent.owned_medias,
                referrals: parent.referrals,
                inviter: parent.inviter,
                verified: parent.verified,
                issuer: parent.issuer,
                visibility: parent.visibility,
                payment_method: parent.payment_method,
                created_at: parent.created_at,
                updated_at: parent.updated_at,
                last_login_at: parent.last_login_at,
              };
            } else {
              return null
            }
            };
     
            const survey = (parent) => {
              if (parent.survey_id) {
              return {
              __typename: 'Survey',
              survey_id: parent.survey_id,
              title: parent.title,
              description: parent.description,
              logo: parent.logo,
              pages: parent.pages,
              survey_type: parent.survey_type,
              survey_status: parent.survey_status,
              campaign_type: parent.campaign_type,
              results_id: parent.results_id,
              results: parent.results,
              funded: parent.funded,
              profile_id: parent.profile_id,
              white_list: parent.white_list,
              show_question_numbers: parent.show_question_numbers,
              page_next_text: parent.page_next_text,
              complete_text: parent.complete_text,
              show_prev_button: parent.show_prev_button,
              first_page_is_started: parent.first_page_is_started,
              start_survey_text: parent.start_survey_text,
              completed_html: parent.completed_html,
              show_preview_before_complete: parent.show_preview_before_complete,
              created_at: parent.created_at,
              updated_at: parent.updated_at,
              published_at: parent.published_at,
            };
            } else {
              return null
            }
            };
  
            return ({
            resultsId: row.results_id,
            user: user(row),
            survey: survey(row),
            result: row.result,
            score: row.score,
            credibilityScore: row.credibility_score,
            claimId: row.claim_id,
            chainId: row.chain_id,
            rewardClaimed: row.reward_claimed,
            rewardClaimedAt: row.reward_claimed_at,
            rewardId: row.reward_id,
            rewardType: row.reward_type,
            mediaClaimed: row.media_claimed,
            mediaClaimedAt: row.media_claimed_at,
            createdAt: row.created_at,
          })});

      
          // Extract the pagination info
          const pageInfo = {
            prev: items.length > 0 ? items[0].createdAt : null,
            next: items.length > 0 ? items[items.length - 1].createdAt : null,
            totalCount: items.length > 0 ? items[0].totalCount : 0,
          };
      
          // Return the paginated results
          return { items: items, pageInfo };
        } catch (error) {
          throw new ApolloError(`${error}`);
        }
    },
    embedSurveyResults: async (_: any, req: any, context: any): Promise<PaginatedEmbedSurveyResultResult> => {
      const { limit, cursor, createdAt, fingerprints, profileIds, surveyIds, resultsIds } = req.request;
        
        try {
          // Initialize variables to build the query
          const queryParams: any[] = [];
          const queryConditions: string[] = [];
      
          // Check if createdAt filter was provided
          if ( createdAt) {
            queryParams.push( createdAt);
            queryConditions.push(`sr.created_at >= $${queryParams.length}`);
          }
      
          // Check if profileIds filter was provided
          if ( profileIds &&  profileIds.length > 0) {
            queryParams.push( profileIds);
            queryConditions.push(`u.profile_id = sr.profile_id`);
            queryConditions.push(`u.profile_id = ANY($${queryParams.length}::int[])`);
            queryConditions.push(`sr.profile_id = ANY($${queryParams.length}::int[])`);
          }
      
          // Check if fingerprints filter was provided
          if ( fingerprints &&  fingerprints.length > 0) {
            queryParams.push(fingerprints);
            queryConditions.push(`sr.fingerprint = ANY($${queryParams.length}::text[])`);
          }

          // Check if surveyIds filter was provided
          if ( surveyIds &&  surveyIds.length > 0) {
            queryParams.push(surveyIds);
            queryConditions.push(`sr.survey_id = ANY($${queryParams.length}::int[])`);
          }

          // Check if surveyIds filter was provided
          if ( resultsIds &&  resultsIds.length > 0) {
            queryParams.push(resultsIds);
            queryConditions.push(`sr.embed_results_id = ANY($${queryParams.length}::int[])`);
          }

      
          // Initialize the base query
          let query = `
            SELECT 
              sr.profile_id,
              sr.fingerprint,
              sr.embed_results_id,
              sr.chain_id,
              sr.reward_id,
              sr.reward_type,
              sr.reward_claimed,
              sr.reward_claimed_at,
              sr.media_claimed,
              sr.media_claimed_at,
              u.first_name,
              u.last_name,
              u.display_name,
              u.bio,
              u.email,
              u.avatar,
              u.account_type,
              u.account_status,
              u.pin_code,
              u.wallet,
              u.surveys,
              u.surveys_taken,
              u.medias,
              u.owned_medias,
              u.referrals,
              u.inviter,
              u.verified,
              u.issuer,
              u.visibility,
              u.payment_method,
              u.created_at,
              u.updated_at,
              u.last_login_at,
              s.survey_id,
              s.title,
              s.description,
              s.logo,
              s.pages,
              s.survey_type,
              s.survey_status,
              s.campaign_type,
              s.results,
              s.funded,
              s.white_list,
              s.show_question_numbers,
              s.page_next_text,
              s.complete_text,
              s.show_prev_button,
              s.first_page_is_started,
              s.start_survey_text,
              s.completed_html,
              s.show_preview_before_complete,
              s.created_at,
              s.updated_at,
              s.published_at,
              sr.result,
              sr.created_at as "createdAt"
            FROM 
              embed_survey_results sr
            LEFT JOIN users u ON u.profile_id = sr.profile_id
            LEFT JOIN surveys s ON s.survey_id = sr.survey_id
          `;
      
          // Add query conditions, if any
          if (queryConditions.length > 0) {
            query += ` WHERE ${queryConditions.join(' AND ')}`;
          }
      
          // Add pagination and ordering
          query += ` ORDER BY sr.created_at DESC, sr.embed_results_id DESC`;

          query += ` LIMIT $${queryParams.length + 1}`;
          queryParams.push( limit || 20);
      
          if ( cursor) {
            queryParams.push( cursor);
            query += ` OFFSET (SELECT COUNT(*) FROM embed_survey_results WHERE created_at > (SELECT created_at FROM embed_survey_results WHERE results_id = $${queryParams.length}) OR (created_at = (SELECT created_at FROM embed_survey_results WHERE results_id = $${queryParams.length}) AND results_id < $${queryParams.length}))`;
          }
      
          //console.log(query, queryParams)
          // Execute the query
          const rows = await getQueryResult(query, queryParams);

          const items = rows.map((row) => {

            const survey = (parent) => {
              if (parent.survey_id) {
              return {
              __typename: 'Survey',
              survey_id: parent.survey_id,
              title: parent.title,
              description: parent.description,
              logo: parent.logo,
              pages: parent.pages,
              survey_type: parent.survey_type,
              survey_status: parent.survey_status,
              campaign_type: parent.campaign_type,
              results: parent.results,
              funded: parent.funded,
              profile_id: parent.profile_id,
              white_list: parent.white_list,
              show_question_numbers: parent.show_question_numbers,
              page_next_text: parent.page_next_text,
              complete_text: parent.complete_text,
              show_prev_button: parent.show_prev_button,
              first_page_is_started: parent.first_page_is_started,
              start_survey_text: parent.start_survey_text,
              completed_html: parent.completed_html,
              show_preview_before_complete: parent.show_preview_before_complete,
              created_at: parent.created_at,
              updated_at: parent.updated_at,
              published_at: parent.published_at,
            };
            } else {
              return null
            }
            };
  
            return ({
            resultsId: row.results_id,
            fingerprint: row.fingerprint,
            survey: survey(row),
            result: row.result,
            chainId: row.chain_id,
            rewardClaimed: row.reward_claimed,
            rewardClaimedAt: row.reward_claimed_at,
            rewardId: row.reward_id,
            rewardType: row.reward_type,
            createdAt: row.created_at,
          })});

      
          // Extract the pagination info
          const pageInfo = {
            prev: items.length > 0 ? items[0].createdAt : null,
            next: items.length > 0 ? items[items.length - 1].createdAt : null,
            totalCount: items.length > 0 ? items[0].totalCount : 0,
          };
      
          // Return the paginated results
          return { items: items, pageInfo };
        } catch (error) {
          throw new ApolloError(`${error}`);
        }
    },    
    surveyGating: async (_: any, req: any, context: any): Promise<any> => {
      const { surveyId, profileId } = req.request;
        try {
          const result = await getQueryResult("SELECT * FROM survey_gating WHERE survey_id = $1", [surveyId]);
          return result[0];
        } catch (error) {
          throw new ApolloError(`${error}`);
        }
    },
    nfts: async (_: any, req: any, context: any): Promise<any> => {
      const { limit, cursor, createdAt, profileIds, creatorIds, mediaIds, chainIds} = req.request;
      try {
        // Initialize variables to build the query
        const queryParams: any[] = [];
        const queryConditions: string[] = [];
        const queryErcParams: any[] = [];
        const queryErcConditions: string[] = [];
        const joinErcConditions: string[] = [];
        const joinErcMarketConditions: string[] = [];    

        // Check if createdAt filter was provided
        if ( createdAt) {
          queryParams.push(createdAt);
          queryConditions.push(`nep171.created_at >= $${queryParams.length}`);
          queryErcParams.push(createdAt);
          queryErcConditions.push(`erc721.created_at >= $${queryParams.length}`);

        }

        // Check if profileIds filter was provided
        if ( profileIds &&  profileIds.length > 0) {
          queryParams.push(profileIds);
          queryConditions.push(`marketplace_orders.profile_id = ANY($${queryParams.length}::int[]) OR nep171.creator_id = ANY($${queryParams.length}::int[])`);
        }
    
        // Check if creatorIds filter was provided
        if ( creatorIds && creatorIds.length > 0) {
          queryParams.push(creatorIds);
          queryConditions.push(`nep171.creator_id = ANY($${queryParams.length}::int[])`);
        }        

        // Check if chainIds filter was provided
        if ( chainIds && chainIds.length > 0) {
          queryParams.push(chainIds);
          queryConditions.push(`nep171.chain_id = ANY($${queryParams.length}::text[])`);
        }        

        // Check if surveyIds filter was provided
        if ( mediaIds && mediaIds.length > 0) {
          queryParams.push(mediaIds);
          queryConditions.push(`nep171.series_id = ANY($${queryParams.length}::int[])`);
        }    

        if (cursor) {
          queryConditions.push(`nep171.created_at > $${queryParams.length + 1}`);
          queryParams.push(cursor); 
          queryErcConditions.push(`erc721.created_at > $${queryErcParams.length + 1}`);
          queryErcParams.push(cursor); 
        }

        queryParams.push(limit || 12)

        let query = `
        SELECT nep171.*,
        marketplace_products.product_id, marketplace_products.product_type, marketplace_products.price, marketplace_products.seller_id,
        marketplace_products.product_status, marketplace_products.duration, marketplace_products.contract_address,
        marketplace_orders.order_id, marketplace_orders.order_status, marketplace_orders.order_type, marketplace_orders.order_amount
        FROM nep171
        LEFT JOIN marketplace_products on marketplace_products.media_id::text = nep171.series_id::text
        LEFT JOIN marketplace_orders on marketplace_orders.product_id = marketplace_products.product_id       
        `;
        //${whereClause}
        //
        // Add query conditions, if any
        if (queryConditions.length > 0) {
          query += ` WHERE ${queryConditions.join(' AND ')}`;
        }

        const sorting = 'DESC'
        // Add pagination and ordering
        query += ` ORDER BY nep171.created_at ${sorting ? sorting : 'ASC'}
        LIMIT $${queryParams.filter((v) => v).length}
        ${cursor ? `OFFSET 1 ROW` : `OFFSET 0`}
        `;

        //query += ` LIMIT $${queryParams.length + 1}`;
        //queryParams.push( limit || 30);
    
        /*if ( cursor) {
          queryParams.push( cursor);
          const offset = cursor ? `OFFSET ${cursor}` : '';
          query += ` ${offset}`;
        }*/

        const rowsNep171 = await getQueryResult(query, queryParams);
      
        queryErcParams.push(limit || 12)

        let queryErc = `
        SELECT erc721.*,
        marketplace_products.product_id, marketplace_products.product_type, marketplace_products.price, marketplace_products.seller_id,
        marketplace_products.product_status, marketplace_products.duration, marketplace_products.contract_address,
        marketplace_orders.order_id, marketplace_orders.order_status, marketplace_orders.order_type, marketplace_orders.order_amount
        FROM erc721
        LEFT JOIN marketplace_products on marketplace_products.media_id::text = erc721.nft_id::text
        LEFT JOIN marketplace_orders on marketplace_orders.product_id = marketplace_products.product_id       
        `;
        //${whereClause}
        //
        // Add query conditions, if any
        if (queryErcConditions.length > 0) {
          queryErc += ` WHERE ${queryErcConditions.join(' AND ')}`;
        }

        // Add pagination and ordering
        queryErc += ` ORDER BY erc721.created_at ${sorting ? sorting : 'ASC'}
        LIMIT $${queryErcParams.filter((v) => v).length}
        ${cursor ? `OFFSET 1 ROW` : `OFFSET 0`}
        `;

        //query += ` LIMIT $${queryParams.length + 1}`;
        //queryParams.push( limit || 30);
    
        /*if ( cursor) {
          queryParams.push( cursor);
          const offset = cursor ? `OFFSET ${cursor}` : '';
          query += ` ${offset}`;
        }*/

        const rowsErc721 = await getQueryResult(queryErc, queryErcParams);

        const rows = !chainIds.includes('near-protocol') ? flatten([rowsNep171, rowsErc721]) : flatten([rowsNep171]);
   
      
        const galleriesById = {};
        const itemsByGalleryId = {};
        const Nfts = [];
    
      
        // Group rows by gallery ID and build gallery/item objects
        rows.forEach((row) => {
          const itemId = row.nft_id;
          const media_image = row.original_content

          const nftItem = {
            nftId: itemId,
            seriesId: row.series_id ? row.series_id : row.nft_id,
            metadata: {
              title: row.metadata_title ? row.metadata_title : row.name,
              description: row.metadata_description ? row.metadata_description : row.description,
              media: row.metadata_media ? row.metadata_media : media_image?.uri,
              mediaHash: row.metadata_media_hash ? row.metadata_media_hash : row.content_uri,
              copies: row.metadata_copies ? row.metadata_copies : 1,
              issuedAt: row.metadata_issued_at,
              expiresAt: row.metadata_expires_at,
              startsAt: row.metadata_starts_at,
              updatedAt: row.metadata_updated_at, 
              extra: row.metadata_extra,
              reference: row.metadata_reference,
              referenceHash: row.metadata_reference_hash,
            },
            royalty: row.royalty,
            ownerId: row.owner_id ? row.owner_id : '0xbF4f54eb703cAf3C1e88C012806Dfc81F034Cd77',
            createdAt: row.created_at,
            updatedAt: row.updated_at,
            surveyId: row.survey_id,
            resultsId: row.results_id,
            productId: row.product_id,
            orderId: row.order_id,
            mediaClaimed: row.media_claimed,
            mediaClaimedAt: row.media_claimed_at,
            mediaClaimedFrom: row.media_claimed_from,
            chainId: row.chain_id
          };
      
          Nfts.push(nftItem);
        });
      
        const galleries = Object.values(Nfts);
    
        console.log('galleries', galleries)

        let nextCursor: string | null = null;
        if (galleries.length > 0) {
          const lastItemCreatedAt = new Date(rows[galleries.length - 1].created_at); // Get the created_at value of the last item
          nextCursor = lastItemCreatedAt.toISOString(); // Convert the Date object to ISO string as the next cursor
        }

        const pageInfo: PaginatedResultInfo = {
          totalCount: galleries.length,
          prev: cursor,
          next: nextCursor,
        }

        return {
          items: galleries,
          // Extract the pagination info
          pageInfo: pageInfo
          /*pageInfo: {
            prev: rows.length > 0 ? rows[0].created_at : null,
            next: rows.length > 0 ? rows[rows.length - 1].created_at : null,
            totalCount: rows.length > 0 ? rows.length : 0,
          }*/
        };

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },  
    userNfts: async (_: any, req: any, context: any): Promise<any> => {
      const { limit, cursor, createdAt, profileIds, creatorIds, mediaIds} = req.request;
      try {
        // Initialize variables to build the query
        const queryParams: any[] = [];
        const queryConditions: string[] = [];
        const joinConditions: string[] = [];
        const joinMarketConditions: string[] = [];
        const queryErcParams: any[] = [];
        const queryErcConditions: string[] = [];
        const joinErcConditions: string[] = [];
        const joinErcMarketConditions: string[] = [];    


        // Check if createdAt filter was provided
        if ( createdAt) {
          queryParams.push(createdAt);
          queryConditions.push(`nep171.created_at >= $${queryParams.length}`);

          queryErcParams.push(createdAt);
          queryErcConditions.push(`erc721.created_at >= $${queryParams.length}`);

        }

        // Check if profileIds filter was provided
        if ( profileIds &&  profileIds.length > 0) {
          queryParams.push(profileIds);
          joinConditions.push(`INNER JOIN survey_results on survey_results.profile_id = ANY($${queryParams.length}::int[])`);
          joinConditions.push(`INNER JOIN survey_rewards on survey_rewards.reward_id = survey_results.reward_id AND survey_rewards.media_id::text = nep171.series_id::text AND survey_rewards.chain_id::text = 'near-protocol'`);
          joinConditions.push(`LEFT JOIN marketplace_products on marketplace_products.media_id::text = nep171.series_id::text`);
          joinConditions.push(`LEFT JOIN marketplace_orders on marketplace_orders.product_id = marketplace_products.product_id`); 
          
          joinMarketConditions.push(`INNER JOIN marketplace_products on marketplace_products.media_id::text = nep171.series_id::text`);
          joinMarketConditions.push(`INNER JOIN marketplace_orders on marketplace_orders.profile_id = ANY($${queryParams.length}::int[]) AND marketplace_orders.product_id = marketplace_products.product_id`);
          
          queryErcParams.push(profileIds);
          joinErcConditions.push(`INNER JOIN survey_results on survey_results.profile_id = ANY($${queryParams.length}::int[])`);
          joinErcConditions.push(`INNER JOIN survey_rewards on survey_rewards.reward_id = survey_results.reward_id AND survey_rewards.media_id::text = erc721.nft_id::text`);
          joinErcConditions.push(`LEFT JOIN marketplace_products on marketplace_products.media_id::text = erc721.nft_id::text`);
          joinErcConditions.push(`LEFT JOIN marketplace_orders on marketplace_orders.product_id = marketplace_products.product_id`); 
          
          joinErcMarketConditions.push(`INNER JOIN marketplace_products on marketplace_products.media_id::text = erc721.nft_id::text`);
          joinErcMarketConditions.push(`INNER JOIN marketplace_orders on marketplace_orders.profile_id = ANY($${queryParams.length}::int[]) AND marketplace_orders.product_id = marketplace_products.product_id`);

          //joinConditions.push(`LEFT JOIN marketplace_orders on marketplace_orders.profile_id = ANY($${queryParams.length}::int[])`);
          //queryConditions.push(`marketplace_orders.profile_id = ANY($${queryParams.length}::int[]) OR nep171.creator_id = ANY($${queryParams.length}::int[])`);
          }
    
        // Check if creatorIds filter was provided
        if ( creatorIds && creatorIds.length > 0) {
          queryParams.push(mediaIds);
          queryConditions.push(`nep171.creator_id = ANY($${queryParams.length}::int[])`);
        }        

        // Check if surveyIds filter was provided
        if ( mediaIds && mediaIds.length > 0) {
          queryParams.push(mediaIds);
          queryConditions.push(`nep171.series_id = ANY($${queryParams.length}::int[])`);
        }    

        const joins = ``;
        let query = `
        SELECT nep171.*,
        survey_results.*,
        survey_rewards.*,
        marketplace_products.product_id, marketplace_products.product_type, marketplace_products.price, marketplace_products.seller_id,
        marketplace_products.product_status, marketplace_products.duration,
        marketplace_orders.order_id, marketplace_orders.order_status, marketplace_orders.order_type, marketplace_orders.order_amount
        FROM nep171  
        `;


        let queryMarket = `
        SELECT nep171.*,
        marketplace_products.product_id, marketplace_products.product_type, marketplace_products.price, marketplace_products.seller_id,
        marketplace_products.product_status, marketplace_products.duration,
        marketplace_orders.*
        FROM nep171
        `;


        // Add join conditions, if any
        if (joinConditions.length > 0) {
          query += `${joinConditions.join("\n")}`;
        }

        // Add join market conditions, if any
        if (joinMarketConditions.length > 0) {
          queryMarket += `${joinMarketConditions.join("\n")}`;
        }

        // Add query conditions, if any
        if (queryConditions.length > 0) {
          query += ` WHERE ${queryConditions.join(' AND ')}`;
          queryMarket += ` WHERE ${queryConditions.join(' AND ')}`;
        }

        // Add pagination and ordering
        query += ` ORDER BY nep171.created_at DESC`;
        queryMarket += ` ORDER BY nep171.created_at DESC`;

        query += ` LIMIT $${queryParams.length + 1}`;
        queryMarket += ` LIMIT $${queryParams.length + 1}`;
        queryParams.push( limit || 20);
    
        if ( cursor) {
          queryParams.push( cursor);
          const offset = cursor ? `OFFSET ${cursor}` : '';
          query += ` ${offset}`;
          queryMarket += ` ${offset}`;
        }

        const rowsRewards = await getQueryResult(query, queryParams);
        const rowsMarket = await getQueryResult(queryMarket, queryParams);

        const joinsErc = ``;
        let queryErc = `
        SELECT erc721.*,
        survey_results.*,
        survey_rewards.*,
        marketplace_products.product_id, marketplace_products.product_type, marketplace_products.price, marketplace_products.seller_id,
        marketplace_products.product_status, marketplace_products.duration,
        marketplace_orders.order_id, marketplace_orders.order_status, marketplace_orders.order_type, marketplace_orders.order_amount
        FROM erc721 
        `;


        let queryErcMarket = `
        SELECT erc721.*,
        marketplace_products.product_id, marketplace_products.product_type, marketplace_products.price, marketplace_products.seller_id,
        marketplace_products.product_status, marketplace_products.duration,
        marketplace_orders.*
        FROM erc721
        `;

        // Add join conditions, if any
        if (joinErcConditions.length > 0) {
          queryErc += `${joinErcConditions.join("\n")}`;
        }

        // Add join market conditions, if any
        if (joinErcMarketConditions.length > 0) {
          queryErcMarket += `${joinErcMarketConditions.join("\n")}`;
        }

        // Add query conditions, if any
        if (queryErcConditions.length > 0) {
          queryErc += ` WHERE ${queryErcConditions.join(' AND ')}`;
          queryErcMarket += ` WHERE ${queryErcConditions.join(' AND ')}`;
        }

        // Add pagination and ordering
        queryErc += ` ORDER BY erc721.created_at DESC`;
        queryErcMarket += ` ORDER BY erc721.created_at DESC`;

        queryErc += ` LIMIT $${queryErcParams.length + 1}`;
        queryErcMarket += ` LIMIT $${queryErcParams.length + 1}`;
        queryErcParams.push( limit || 20);


        const rowsErcRewards = await getQueryResult(queryErc, queryErcParams);
        const rowsErcMarket = await getQueryResult(queryErcMarket, queryErcParams);

        const rows = flatten([rowsRewards, rowsErcRewards, rowsMarket, rowsErcMarket]);
      
        const galleriesById = {};
        const itemsByGalleryId = {};
        const Nfts = [];
        
      
        // Group rows by gallery ID and build gallery/item objects
        rows.forEach((row) => {
          const itemId = row.nft_id;
          const media_image = row.original_content

          const nftItem = {
            nftId: itemId,
            seriesId: row.series_id ? row.series_id : row.nft_id,
            metadata: {
              title: row.metadata_title ? row.metadata_title : row.name,
              description: row.metadata_description ? row.metadata_description : row.description,
              media: row.metadata_media ? row.metadata_media : media_image.uri,
              mediaHash: row.metadata_media_hash ? row.metadata_media_hash : row.content_uri,
              copies: row.metadata_copies ? row.metadata_copies : 1,
              issuedAt: row.metadata_issued_at,
              expiresAt: row.metadata_expires_at,
              startsAt: row.metadata_starts_at,
              updatedAt: row.metadata_updated_at, 
              extra: row.metadata_extra,
              reference: row.metadata_reference,
              referenceHash: row.metadata_reference_hash,
            },
            royalty: row.royalty,
            ownerId: row.owner_id ? row.owner_id : '0xbF4f54eb703cAf3C1e88C012806Dfc81F034Cd77',
            createdAt: row.created_at,
            updatedAt: row.updated_at,
            surveyId: row.survey_id,
            resultsId: row.results_id,
            productId: row.product_id,
            orderId: row.order_id,
            mediaClaimed: row.media_claimed,
            mediaClaimedAt: row.media_claimed_at,
            mediaClaimedFrom: row.media_claimed_from,
            contractAddress: row.contract_address,
            evmContractAddress: row.contract_address,
            chainId: row.chain_id
          };
          
          Nfts.push(nftItem);
        });
      
        const galleries = Object.values(Nfts);
    
        console.log('galleries',galleries)

        return {
          items: galleries,
          // Extract the pagination info
          pageInfo: {
            prev: rows.length > 0 ? rows[0].created_at : null,
            next: rows.length > 0 ? rows[rows.length - 1].created_at : null,
            totalCount: rows.length > 0 ? rows.length : 0,
          }
        };

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },  
    nftUserGalleries: async (_: any, req: any, context: any): Promise<any> => {
      const { limit, cursor, createdAt, profileIds, nftGalleryIds, mediaIds} = req.request;
      try {
        // Initialize variables to build the query
        const queryParams: any[] = [];
        const queryConditions: string[] = [];
    
        // Check if createdAt filter was provided
        if ( createdAt) {
          queryParams.push(createdAt);
          queryConditions.push(`nft_gallery_items.created_at >= $${queryParams.length}`);
        }

        // Check if profileIds filter was provided
        if ( profileIds &&  profileIds.length > 0) {
          queryParams.push(profileIds);
          queryConditions.push(`nft_gallery.profile_id = ANY($${queryParams.length}::int[])`);
        }
    
        // Check if surveyIds filter was provided
        if ( nftGalleryIds && nftGalleryIds.length > 0) {
          queryParams.push(nftGalleryIds);
          queryConditions.push(`nft_gallery.nft_gallery_id = ANY($${queryParams.length}::int[])`);
        }        

        // Check if surveyIds filter was provided
        if ( mediaIds && mediaIds.length > 0) {
          queryParams.push(mediaIds);
          queryConditions.push(`nep171.series_id = ANY($${queryParams.length}::int[])`);
        }    


        let query = `
          SELECT
            nft_gallery.*,
            nep171.*,
            nft_gallery_items.created_at as gallery_item_created_at
          FROM nft_gallery
          JOIN nft_gallery_items ON nft_gallery.nft_gallery_id = nft_gallery_items.nft_gallery_id
          JOIN nep171 ON nft_gallery_items.nft_id = nep171.nft_id
        `;
      
        //${whereClause}
        //
        // Add query conditions, if any
        if (queryConditions.length > 0) {
          query += ` WHERE ${queryConditions.join(' AND ')}`;
        }

        // Add pagination and ordering
        query += ` ORDER BY gallery_item_created_at DESC`;

        query += ` LIMIT $${queryParams.length + 1}`;
        queryParams.push( limit || 20);
    
        if ( cursor) {
          queryParams.push( cursor);
          const offset = cursor ? `OFFSET ${cursor}` : '';
          query += ` ${offset}`;
        }

        const rows = await getQueryResult(query, queryParams);
      
        const galleriesById = {};
        const itemsByGalleryId = {};
      
        // Group rows by gallery ID and build gallery/item objects
        rows.forEach((row) => {
          const galleryId = row.nft_gallery_id;
          const itemId = row.nft_id;
      
          if (!galleriesById[galleryId]) {
            galleriesById[galleryId] = {
              nftGalleryId: galleryId,
              name: row.name,
              profileId: row.profile_id,
              createdAt: row.created_at,
              updatedAt: row.updated_at,
              items: [],
            };
          }
      
          if (!itemsByGalleryId[galleryId]) {
            itemsByGalleryId[galleryId] = {};
          }
      
          if (!itemsByGalleryId[galleryId][itemId]) {
            itemsByGalleryId[galleryId][itemId] = {
              nftId: itemId,
              seriesId: row.series_id,
              metadata: {
                title: row.metadata_title,
                description: row.metadata_description,
                media: row.metadata_media,
                mediaHash: row.metadata_media_hash,
                copies: row.metadata_copies,
                issuedAt: row.metadata_issued_at,
                expiresAt: row.metadata_expires_at,
                startsAt: row.metadata_starts_at,
                updatedAt: row.metadata_updated_at,
                extra: row.metadata_extra,
                reference: row.metadata_reference,
                referenceHash: row.metadata_reference_hash,
              },
              royalty: row.royalty,
              ownerId: row.owner_id,
              createdAt: row.created_at,
              updatedAt: row.updated_at,
            };
          }
      
          galleriesById[galleryId].items.push(itemsByGalleryId[galleryId][itemId]);
        });
      
        const galleries = Object.values(galleriesById);
    
        //console.log('galleries', galleries)

        return {
          items: galleries,
          // Extract the pagination info
          pageInfo: {
            prev: rows.length > 0 ? rows[0].created_at : null,
            next: rows.length > 0 ? rows[rows.length - 1].created_at : null,
            totalCount: rows.length > 0 ? rows.length : 0,
          }
        };

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    nftGalleries: async (_: any, req: any, context: any): Promise<any> => {
      const { limit, cursor, createdAt, profileIds, nftGalleryIds} = req.request;
      try {
        // Initialize variables to build the query
        const queryParams: any[] = [];
        const queryConditions: string[] = [];
    
        // Check if createdAt filter was provided
        if ( createdAt) {
          queryParams.push(createdAt);
          queryConditions.push(`nft_gallery_items.created_at >= $${queryParams.length}`);
        }

        // Check if profileIds filter was provided
        if ( profileIds &&  profileIds.length > 0) {
          queryParams.push(profileIds);
          queryConditions.push(`nft_gallery.profile_id = ANY($${queryParams.length}::int[])`);
        }
    
        // Check if surveyIds filter was provided
        if ( nftGalleryIds && nftGalleryIds.length > 0) {
          queryParams.push(nftGalleryIds);
          queryConditions.push(`nft_gallery.nft_gallery_id = ANY($${queryParams.length}::int[])`);
        }        


        let query = `
          SELECT
            nft_gallery.*,
            nep171.*,
            nft_gallery_items.created_at as gallery_item_created_at
          FROM nft_gallery
          JOIN nft_gallery_items ON nft_gallery.nft_gallery_id = nft_gallery_items.nft_gallery_id
          JOIN nep171 ON nft_gallery_items.nft_id = nep171.nft_id
        `;
      
        //${whereClause}
        //
        // Add query conditions, if any
        if (queryConditions.length > 0) {
          query += ` WHERE ${queryConditions.join(' AND ')}`;
        }

        // Add pagination and ordering
        query += ` ORDER BY gallery_item_created_at DESC`;

        query += ` LIMIT $${queryParams.length + 1}`;
        queryParams.push( limit || 20);
    
        if ( cursor) {
          queryParams.push( cursor);
          const offset = cursor ? `OFFSET ${cursor}` : '';
          query += ` ${offset}`;
        }

        const rows = await getQueryResult(query, queryParams);
      
        const galleriesById = {};
        const itemsByGalleryId = {};
      
        // Group rows by gallery ID and build gallery/item objects
        rows.forEach((row) => {
          const galleryId = row.nft_gallery_id;
          const itemId = row.nft_id;
      
          if (!galleriesById[galleryId]) {
            galleriesById[galleryId] = {
              nftGalleryId: galleryId,
              name: row.name,
              profileId: row.profile_id,
              createdAt: row.created_at,
              updatedAt: row.updated_at,
              items: [],
            };
          }
      
          if (!itemsByGalleryId[galleryId]) {
            itemsByGalleryId[galleryId] = {};
          }
      
          if (!itemsByGalleryId[galleryId][itemId]) {
            itemsByGalleryId[galleryId][itemId] = {
              nftId: itemId,
              seriesId: row.series_id,
              metadata: {
                title: row.metadata_title,
                description: row.metadata_description,
                media: row.metadata_media,
                mediaHash: row.metadata_media_hash,
                copies: row.metadata_copies,
                issuedAt: row.metadata_issued_at,
                expiresAt: row.metadata_expires_at,
                startsAt: row.metadata_starts_at,
                updatedAt: row.metadata_updated_at,
                extra: row.metadata_extra,
                reference: row.metadata_reference,
                referenceHash: row.metadata_reference_hash,
              },
              royalty: row.royalty,
              ownerId: row.owner_id,
              createdAt: row.created_at,
              updatedAt: row.updated_at,
            };
          }
      
          galleriesById[galleryId].items.push(itemsByGalleryId[galleryId][itemId]);
        });
      
        const galleries = Object.values(galleriesById);
    
        //console.log('galleries', galleries)

        return {
          items: galleries,
          // Extract the pagination info
          pageInfo: {
            prev: rows.length > 0 ? rows[0].created_at : null,
            next: rows.length > 0 ? rows[rows.length - 1].created_at : null,
            totalCount: rows.length > 0 ? rows.length : 0,
          }
        };

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    checkTransaction: async (_: any, req: any, context: any): Promise<any> => {
      const { transactionHash } = req.request;
      try {
        const query = `
        SELECT *
        FROM transactions_credits
        WHERE transaction_hash = $1;
        `;
        const rows = await getQueryResult(query, [transactionHash]);
        const exists = rows[0];
        //console.log('checkTransaction getQueryResult', query, [transactionHash])
        //console.log('checkTransaction', exists)
    
        return exists;
        //? "Transaction hash exists" : "Transaction hash does not exist";
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    // Resolver for userTransactions query
    userTransactions:  async (_: any, req: any, context: any): Promise<any> => {
      const { limit, cursor, type, hash, status, did, profileIds, surveyIds, isBalance } = req.request;
      try {
        
        // Initialize variables to build the query
        const queryParams: any[] = [];
        const queryConditions: string[] = [];
    
        // Check if hash filter was provided
        if (hash !== undefined) {
          queryParams.push(hash);
          queryConditions.push(`transactions_credits.transaction_hash = $${queryParams.length}`);
        }

        // Check if type filter was provided
        if (type !== undefined) {
          queryParams.push(type);
          queryConditions.push(`transactions_credits.transaction_type = $${queryParams.length}`);
        }

        // Check if status filter was provided
        if (status !== undefined) {
          queryParams.push(status);
          queryConditions.push(`transactions_credits.transaction_status = $${queryParams.length}`);
        }

        // Check if did filter was provided
        if (did !== undefined) {
          queryParams.push(did);
          queryConditions.push(`users.iden3issuer = $${queryParams.length}`);
          queryConditions.push(`transactions_credits.profile_id = users.profile_id`);
        }

        // Check if profileIds filter was provided
        if ( profileIds !== undefined && profileIds.length > 0) {
          queryParams.push(profileIds);
          queryConditions.push(`transactions_credits.profile_id = ANY($${queryParams.length}::int[])`);
        }
    
        // Check if surveyIds filter was provided
        if ( surveyIds !== undefined && surveyIds.length > 0) {
          queryParams.push(surveyIds);
          queryConditions.push(`transactions_credits.survey_id = ANY($${queryParams.length}::int[])`);
        }        

        let query = isBalance === true ? `
          SELECT
            transactions_credits.*,
            users.first_name, users.last_name, users.display_name, users.bio, users.email, 
            users.avatar, users.account_type, users.account_status, users.pin_code, users.wallet, users.surveys, 
            users.surveys_taken, users.medias, users.owned_medias, users.referrals, users.inviter, users.verified, 
            users.issuer, users.iden3issuer, users.visibility, users.payment_method,
            surveys.survey_id, surveys.title, surveys.description, surveys.logo, surveys.pages, surveys.survey_type, 
            surveys.survey_status, surveys.campaign_type, surveys.results, surveys.white_list, 
            surveys.show_question_numbers, surveys.page_next_text, surveys.complete_text, surveys.show_prev_button, 
            surveys.first_page_is_started, surveys.start_survey_text, surveys.completed_html, surveys.show_preview_before_complete, 
            surveys.published_at
            ${surveyIds !== undefined ? ', surveys.*' : ''}
          FROM transactions_credits
          INNER JOIN users ON transactions_credits.profile_id = users.profile_id
          LEFT JOIN surveys ON transactions_credits.survey_id = surveys.survey_id
          ${surveyIds !== undefined ? 'JOIN surveys ON transactions_credits.survey_id = surveys.survey_id' : ''}
        ` : `
          SELECT
            transactions_credits.*,
            users.profile_id, users.first_name, users.last_name, users.display_name, users.bio, users.email, 
            users.avatar, users.account_type, users.account_status, users.pin_code, users.wallet, users.surveys, 
            users.surveys_taken, users.medias, users.owned_medias, users.referrals, users.inviter, users.verified, 
            users.issuer, users.iden3issuer, users.visibility, users.payment_method
            ${surveyIds !== undefined ? ', surveys.*' : ''}
          FROM transactions_credits
          JOIN users ON transactions_credits.profile_id = users.profile_id
          ${surveyIds !== undefined ? 'JOIN surveys ON transactions_credits.survey_id = surveys.survey_id' : ''}
        `;


        //${whereClause}
        //
        // Add query conditions, if any
        if (queryConditions.length > 0) {
          query += ` WHERE ${queryConditions.join(' AND ')}`;
        }

        // Add pagination and ordering
        query += ` ORDER BY transactions_credits.created_at DESC`;

        query += ` LIMIT $${queryParams.length + 1}`;
        queryParams.push( limit || 20);
    
        if ( cursor) {
          queryParams.push( cursor);
          const offset = cursor ? `OFFSET ${cursor}` : '';
          query += ` ${offset}`;
        }

        const rows = await getQueryResult(query, queryParams);
    

        const items = rows.map((row) => {

          const user = (parent) => {
            if (parent.profile_id) {
            return {
              __typename: 'User',
              profile_id: parent.profile_id,
              first_name: parent.first_name,
              last_name: parent.last_name,
              display_name: parent.display_name,
              bio: parent.bio,
              email: parent.email,
              avatar: parent.avatar,
              account_type: parent.account_type,
              account_status: parent.account_status,
              pin_code: parent.pin_code,
              wallet: parent.wallet,
              surveys: parent.surveys,
              surveys_taken: parent.surveys_taken,
              medias: parent.medias,
              owned_medias: parent.owned_medias,
              referrals: parent.referrals,
              inviter: parent.inviter,
              verified: parent.verified,
              issuer: parent.issuer,
              visibility: parent.visibility,
              payment_method: parent.payment_method,
              created_at: parent.created_at,
              updated_at: parent.updated_at,
              last_login_at: parent.last_login_at,
            };
          } else {
            return null
          }
          };
   
          const survey = (parent) => {
            if (parent.survey_id) {
            return {
            __typename: 'Survey',
            survey_id: parent.survey_id,
            title: parent.title,
            description: parent.description,
            logo: parent.logo,
            pages: parent.pages,
            survey_type: parent.survey_type,
            survey_status: parent.survey_status,
            campaign_type: parent.campaign_type,
            results: parent.results,
            profile_id: parent.profile_id,
            white_list: parent.white_list,
            show_question_numbers: parent.show_question_numbers,
            page_next_text: parent.page_next_text,
            complete_text: parent.complete_text,
            show_prev_button: parent.show_prev_button,
            first_page_is_started: parent.first_page_is_started,
            start_survey_text: parent.start_survey_text,
            completed_html: parent.completed_html,
            show_preview_before_complete: parent.show_preview_before_complete,
            created_at: parent.created_at,
            updated_at: parent.updated_at,
            published_at: parent.published_at,
          };
        } else {
          return null
        }
        };

          return ({
          transactionId: row.transaction_id,
          user: user(row),
          survey: survey(row),
          amount: row.amount,
          transactionHash: row.transaction_hash,
          transactionType: row.transaction_type,
          transactionStatus: row.transaction_status,
          transactionSource: row.transaction_source,
          createdAt: row.created_at,
        })});

        const pageInfo = {
          hasNextPage: items.length === limit?.value,
          endCursor: items.length > 0 ? `${cursor?.offset ?? 0 + items.length}` : null,
        };

        return { items, pageInfo };
      } catch (error) {


        throw new ApolloError(`${error}`);
      }
    },
    product: async (_: any, req: any, context: any): Promise<any> => {
      const { productId } = req.request
      try {
        const result = await getQueryResult("SELECT * FROM marketplace_products WHERE product_id = $1", [productId]);
        return result[0];
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    products: async (_: any, req: any, context: any): Promise<PaginatedProductsResult> => {
      const { limit, cursor, type, status, sorting } = req.request;
      const setClauses: string[] = [];
      const values: any[] = [];

      try {
        // Construct the SQL query
        // Only add set clauses for fields that are not empty
        if (type !== undefined && type !== 'ALL') {
          setClauses.push(`AND product_type = $${values.length + 1}`);
          values.push(type);
        }
        if (status !== undefined && status !== 'ALL') {
          setClauses.push(`AND product_status = $${values.length + 1}`);
          values.push(status);
        }
        //if (completedAt !== undefined) {
        //  setClauses.push(`completed_at = $${values.length + 1}`);
        //  values.push(completedAt);
        //}
        if (cursor) {
          setClauses.push(`AND created_at <= $${values.length + 1}`);
          values.push(cursor); 
        }

        values.push(limit || 12)
      
        // Construct the SQL query string
        const query = `
        SELECT * FROM marketplace_products
        WHERE product_id > 0
        ${setClauses.join(' ')}
        ORDER BY created_at ${sorting ? sorting : 'DESC'}
        LIMIT $${values.filter((v) => v).length}
        ${cursor ? `OFFSET 1 ROW` : `OFFSET 0`}
        `;

        const result = await getQueryResult(query, values);

        const items: MarketplaceProduct[] = result.map( async (row: any) => {
          return ({
            ...row,
            __typename: 'MarketplaceProduct'
          })
        })

        let nextCursor: string | null = null;
        if (items.length > 0) {
          const lastItemCreatedAt = new Date(result[items.length - 1].created_at); // Get the created_at value of the last item
          nextCursor = lastItemCreatedAt.toISOString(); // Convert the Date object to ISO string as the next cursor
        }

        const pageInfo: PaginatedResultInfo = {
          totalCount: items.length,
          prev: cursor,
          next: nextCursor,
        }

        const productsResult: PaginatedProductsResult = { 
          items: items,
          pageInfo: pageInfo
        }
        return productsResult;
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    marketplaceOrder: async (_: any, req: any, context: any): Promise<any> => {
      const { orderId, productIds, profileIds, status } = req.request;
      try {
        // Initialize variables to build the query
        const queryParams: any[] = [];
        const queryConditions: string[] = [];

        // Check if orderid filter was provided
        if (orderId !== undefined) {
          queryParams.push(orderId);
          queryConditions.push(`marketplace_orders.order_id = $${queryParams.length}`);
        }

        // Check if status filter was provided
        if (profileIds !== undefined) {
          queryParams.push(profileIds);
          queryConditions.push(`marketplace_orders.profile_id = ANY($${queryParams.length}::int[])`);
        }

        // Check if status filter was provided
        if (productIds !== undefined) {
          queryParams.push(productIds);
          queryConditions.push(`marketplace_orders.product_id = ANY($${queryParams.length}::int[])`);
        }

        // Check if status filter was provided
        if (status !== undefined) {
          queryParams.push(status);
          queryConditions.push(`marketplace_orders.order_status = $${queryParams.length}`);
        }

        let query = `
          SELECT
            marketplace_orders.*,
            users.*,
            marketplace_orders.created_at as marketplace_orders_created_at
          FROM marketplace_orders
          JOIN users ON marketplace_orders.profile_id = users.profile_id
        `;
      
        //${whereClause}
        //
        // Add query conditions, if any
        if (queryConditions.length > 0) {
          query += ` WHERE ${queryConditions.join(' AND ')}`;
        }

        const result = await getQueryResult(query, queryParams);
        return result[0];
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    marketplaceOrders: async (_: any, req: any, context: any): Promise<any> => {
      const { limit, cursor, type, status } = req.request;
      try {
        // Initialize variables to build the query
        const queryParams: any[] = [];
        const queryConditions: string[] = [];

        // Check if type filter was provided
        if (type !== undefined) {
          queryParams.push(type);
          queryConditions.push(`marketplace_orders.order_type = $${queryParams.length}`);
        }

        // Check if status filter was provided
        if (status !== undefined) {
          queryParams.push(status);
          queryConditions.push(`marketplace_orders.order_status = $${queryParams.length}`);
        }

        //onst result = await getQueryResult("SELECT * FROM marketplace_orders", []);
        let query = `
          SELECT
            marketplace_orders.*,
            users.*,
            marketplace_orders.created_at as marketplace_orders_created_at
          FROM marketplace_orders
          JOIN users ON marketplace_orders.profile_id = users.profile_id
        `;
      
        //${whereClause}
        //
        // Add query conditions, if any
        if (queryConditions.length > 0) {
          query += ` WHERE ${queryConditions.join(' AND ')}`;
        }

        // Add pagination and ordering
        query += ` ORDER BY marketplace_orders_created_at DESC`;

        query += ` LIMIT $${queryParams.length + 1}`;
        queryParams.push( limit || 20);
    
        if ( cursor) {
          queryParams.push( cursor);
          const offset = cursor ? `OFFSET ${cursor}` : '';
          query += ` ${offset}`;
        }

        const rows = await getQueryResult(query, queryParams);
    

        const items = rows.map((row) => {

          const user = (parent) => {
            return {
              __typename: 'User',
              profile_id: parent.profile_id,
              first_name: parent.first_name,
              last_name: parent.last_name,
              display_name: parent.display_name,
              bio: parent.bio,
              email: parent.email,
              avatar: parent.avatar,
              account_type: parent.account_type,
              account_status: parent.account_status,
              pin_code: parent.pin_code,
              wallet: parent.wallet,
              surveys: parent.surveys,
              surveys_taken: parent.surveys_taken,
              medias: parent.medias,
              owned_medias: parent.owned_medias,
              referrals: parent.referrals,
              inviter: parent.inviter,
              verified: parent.verified,
              issuer: parent.issuer,
              visibility: parent.visibility,
              payment_method: parent.payment_method,
              created_at: parent.created_at,
              updated_at: parent.updated_at,
              last_login_at: parent.last_login_at,
            };
          };

          return ({
            ...row,
            user: user(row),
          })});
  
          const pageInfo = {
            hasNextPage: items.length === limit?.value,
            endCursor: items.length > 0 ? `${cursor?.offset ?? 0 + items.length}` : null,
          };
  
          return { items, pageInfo };

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    leaderboardEntries: async (_: any, req: any, context: any): Promise<any> => {
      const { limit, cursor, leaderboardId } = req.request;
      const setClauses: string[] = [];
      const values: any[] = [];

      try {
        // Construct the SQL query
        // Only add set clauses for fields that are not empty
        if (leaderboardId !== undefined) {
          //setClauses.push(`AND leaderboard_id = ANY($${values.length + 1}::int[])`);
          setClauses.push(`AND leaderboard_id = $${values.length + 1}`);
          values.push(leaderboardId);
        }

        values.push(limit || 10)

        // Construct the SQL query string
        let query = `
        SELECT * FROM leaderboard_entries
        WHERE points > 0
        ${setClauses.join(' ')}
        ORDER BY points DESC
        LIMIT $${values.filter((v) => v).length}
        `;

        if (cursor) {
          values.push(cursor);
          query += ` OFFSET $${values.filter((q) => q).length}`;
        }

        // Execute the query
        const _leaderboard_entries = await getQueryMetricsResult(query, values);
        const leaderboard_entries = _leaderboard_entries.map( async (entry) => {
          const queryUser = `SELECT u.*, SUM(tr.amount) as earnings, 
          COUNT(f.filling_id) AS surveysuccess
          FROM transactions_credits tr
          INNER JOIN users u ON u.profile_id = tr.profile_id
          INNER JOIN filling_queue f ON f.profile_id = tr.profile_id
          WHERE tr.profile_id = $1 AND tr.transaction_type = 'CREDIT' 
          GROUP BY u.profile_id
          `
          const user = await getQueryResult(queryUser, [entry.profile_id]);
          entry.issuer = user[0]?.issuer ? user[0]?.issuer : "did:ethr:0x0000000000000000000000000000000000000000";
          entry.iden3issuer = user[0]?.iden3issuer ? user[0]?.iden3issuer : null; 
          entry.avatar = user[0]?.avatar ? user[0].avatar : '/assets/images/userr.png';
          entry.earnings = user[0]?.earnings ? user[0]?.earnings : 0;
          entry.surveysuccess = user[0]?.surveysuccess ? user[0]?.surveysuccess : 0;
          return entry;
        });

        const pageInfo: PaginatedResultInfo = {
          "totalCount": leaderboard_entries.length,
          "next": { "timestamp": new Date().getTime(), "offset": req.request.limit },
        }
        const leaderboardResult: PaginatedUserResult = { 
          "items": leaderboard_entries,
          "pageInfo": pageInfo
        }

        return leaderboardResult

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    topBusiness: async (_: any, req: any, context: any): Promise<any> => {
      const labels: string[] = []
      const data: number[] = []
      const { businessIds } = req.request;

      try {

        const totalBusiness = (businessIds !== undefined) 
        ? await getQueryResult(`SELECT COUNT(*) AS total_business FROM users WHERE account_type = 'BUSINESS' AND profile_id = ANY($1::int[])`,[businessIds])
        : await getQueryResult(`SELECT COUNT(*) AS total_business FROM users WHERE account_type = 'BUSINESS'`,[]);

        const totalSurveys = (businessIds !== undefined) 
        ? await getQueryResult(`SELECT COUNT(*) AS total_surveys FROM surveys WHERE survey_status = 'PUBLISHED' AND profile_id = ANY($1::int[])`,[businessIds])
        : await getQueryResult(`SELECT COUNT(*) AS total_surveys FROM surveys WHERE survey_status = 'PUBLISHED'`,[]);

        const rankingCompletions = (businessIds !== undefined) 
        ? await getQueryResult(`SELECT COUNT(*) AS completions, sr.survey_id FROM survey_results sr INNER JOIN surveys s ON s.survey_id = sr.survey_id WHERE s.profile_id = ANY($1::int[]) GROUP BY sr.results_id`,[businessIds])
        : await getQueryResult(`SELECT COUNT(*) AS completions, survey_id FROM survey_results GROUP BY survey_id`,[]);

        const rowsDays = (businessIds !== undefined) 
        ? await getQueryResult(`
        SELECT DATE(created_at) AS register_date, COUNT(*) AS survey_created 
        FROM surveys
        WHERE profile_id = ANY($1::int[])
        GROUP BY DATE(created_at) 
        ORDER BY DATE(created_at)`, [businessIds])
        : await getQueryResult(`
        SELECT DATE(created_at) AS register_date, COUNT(*) AS business_created 
        FROM users
        GROUP BY DATE(created_at) 
        ORDER BY DATE(created_at)`, []);

        for (const row of rowsDays) {
          const { register_date, business_created, survey_created } = row;
          const formattedDate = register_date.toISOString().slice(0, 10);
          labels.push(formattedDate);
          if (businessIds !== undefined) {
            data.push(survey_created);
          } else {
            data.push(business_created);
          }
          
        }

        return {
          labels: labels,
          data: data,
          totalBusiness: Number(totalBusiness[0].total_business),
          rankingCompletions: rankingCompletions,
          totalSurveys: Number(totalSurveys[0].total_surveys)
        }

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },    
    surveyAnalytics: async (_: any, req: any, context: any): Promise<any> => {
      const labels: string[] = []
      const data: number[] = []
      const { businessIds } = req.request;

      try {

        const totalSurveys = (businessIds !== undefined) 
        ? await getQueryResult(`SELECT COUNT(*) AS total_surveys FROM surveys WHERE profile_id = ANY($1::int[])`,[businessIds])
        : await getQueryResult(`SELECT COUNT(*) AS total_surveys FROM surveys`,[]);
        const totalCompletions = (businessIds !== undefined) 
        ? await getQueryResult(`SELECT COUNT(*) AS completions FROM survey_results sr INNER JOIN surveys s ON s.survey_id = sr.survey_id WHERE s.profile_id = ANY($1::int[])`,[businessIds])
        : await getQueryResult(`SELECT COUNT(*) AS completions FROM survey_results`,[]);
        const avgCompletionTime = (businessIds !== undefined) 
        ? await getQueryResult(`
        SELECT AVG(EXTRACT(EPOCH FROM (fq.completed_at - fq.created_at))) AS avg_completion_time
        FROM filling_queue fq
        INNER JOIN survey_results sr ON sr.survey_id = fq.survey_id
        INNER JOIN surveys s ON s.survey_id = sr.survey_id 
        WHERE fq.filling_status = 'COMPLETE' AND s.profile_id = ANY($1::int[])        
        `
        ,[businessIds])
        : await getQueryResult(`
        SELECT AVG(EXTRACT(EPOCH FROM (fq.completed_at - fq.created_at))) AS avg_completion_time
        FROM filling_queue fq
        INNER JOIN survey_results sr ON sr.survey_id = fq.survey_id
        WHERE fq.filling_status = 'COMPLETE'
        `
        ,[]);
        const totalPageviews = (businessIds !== undefined) 
        ? await getQueryResult(`SELECT COUNT(*) AS total_views FROM pageviews WHERE event = 'Pageview' AND user_id::int = ANY($1::int[])`,[businessIds])
        : await getQueryResult(`SELECT COUNT(*) AS total_views FROM pageviews WHERE event = 'Pageview'`,[]);

        const rowsDays = (businessIds !== undefined) 
        ? await getQueryResult(`
        SELECT DATE(created_at) AS survey_date, COUNT(*) AS surveys_created 
        FROM surveys
        WHERE profile_id = ANY($1::int[])
        GROUP BY DATE(created_at) 
        ORDER BY DATE(created_at)`, [businessIds])
        : await getQueryResult(`
        SELECT DATE(created_at) AS survey_date, COUNT(*) AS surveys_created 
        FROM surveys 
        GROUP BY DATE(created_at) 
        ORDER BY DATE(created_at)`, []);

        for (const row of rowsDays) {
          const { survey_date, surveys_created } = row;
          //console.log(survey_date, surveys_created)
          const formattedDate = survey_date.toISOString().slice(0, 10);
          labels.push(formattedDate);
          data.push(surveys_created);
        }


        return {
          labels: labels,
          data: data,
          totalSurveys: Number(totalSurveys[0].total_surveys),
          totalCompletions: Number(totalCompletions[0].completions),
          avgCompletionTime: avgCompletionTime[0].avg_completion_time,
          totalPageviews: totalPageviews[0].total_views
        }

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    allMediaBoughtAndSoldAnalytics: async (_: any, req: any, context: any): Promise<any> => {
      try {
        const items = await getQueryResult(`
        SELECT DISTINCT(media_id) media_id
        FROM marketplace_products mp
        LEFT JOIN marketplace_orders mo ON mp.product_id = mo.product_id
        WHERE mp.product_type = 'MEDIA'
      `);

        const result = items.map((x) => ({
          mediaId: x.media_id
        }));


        return {
          result
        }

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    mediaSoldByCompanyOrUserAnalytics: async (_: any, req: any, context: any): Promise<any> => {
      try {
        const { profileId } = req.request;

        const items = await getQueryResult(`
        SELECT DISTINCT(media_id) media_id
        FROM marketplace_products
        WHERE product_type = 'MEDIA'
        AND seller_id = $1::int
        `, [
          profileId
        ]);

        return items.map((x) => ({
          mediaId: x.media_id
        }));

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    saleHistoryPerBusinessAnalytics: async (_: any, req: any, context: any): Promise<any> => {
      try {
        
        const { profileIds } = req.request;

        const query = `
        select 
          mp.product_id,
          mp.name,
          mp.description,
          mp.seller_id,
          mo.profile_id buyer_id,
          mo.created_at issued_at,
          mo.order_amount,
          mp.price,
          mo.order_status order_status
        from marketplace_products mp inner join marketplace_orders mo on mp.product_id = mo.product_id 
        where mp.product_type = 'MEDIA' and seller_id = ANY($1::int[])
        
        `
        const items = await getQueryResult(query, [ profileIds ]);
        const total = await getQueryResult(`SELECT COUNT(*) as total FROM (${query}) t`, [ profileIds ]);

        return {
          items,
          total: Number(total[0].total)
        };
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    purchaseHistoryPerUserAnalytics: async (_: any, req: any, context: any): Promise<any> => {
      return [];
    },
    dataUser: async (_: any, req: any, context: any) => {
      // prettier-ignore
      try {
        let fastestCompleteSurvey: FastestCompleteSurvey = {};
        let slowestCompleteSurvey: SlowestCompleteSurvey = {};
        let tutorialCompletitions: TutorialCompletitions[] = []
        let walletsConnectedPerBlockchain: WalletsConnectedPerBlockchain = {}
        let averageTimePerSession: AverageTimePerSession[] = []
        let averageTimeCompletingSurvey: AverageTimeCompletingSurvey[] = []
        let averageTimeWithdrawRewards: AverageTimeWithdrawRewards[] = []
        let averageValueSpentNFTMarketplace: AverageValueSpentNftMarketplace[] = []
        let averageValueAccruedCryptocurrency: AverageValueAccruedCryptocurrency[] = []
        let averageValueAccruedCashViaStripe: AverageValueAccruedCashViaStripe[] = []
        let nFTMarketplacePurchaseHistory: NftMarketplacePurchaseHistory = {}
        let rankedTagsCompletedSurveys: RankedTagsCompletedSurveys[] = []
        let mostCommonTimeOfDaySurveyCompletitons: MostCommonTimeOfDaySurveyCompletitons = {}
        let surveyCompletionBasedOnQuestionCount: SurveyCompletionBasedOnQuestionCount[] = []
        let averageUserRatingCompletedSurveys: AverageUserRatingCompletedSurveys[] = []
        let userEngagementRateNFTMarketplace: UserEngagementRateNftMarketplace[] = []
        let subscriptionLevel: SubscriptionLevel[] = []
        let subscriptionHistory: SubscriptionHistory[] = []
        let unclaimedRewardStatusAndDuration: UnclaimedRewardStatusAndDuration = {};
        const userMostCompletedSurveys: UserMostCompletedSurveys[] = [];
        const mostEarnedCashRewards: MostEarnedCashRewards[] = [];
        let mostEarnedCryptocurrencyRewards: MostEarnedCryptocurrencyRewards = {};
        const mostDollarsSpentNFTMarketplace: MostDollarsSpentNftMarketplace[] = [];
        let mostCryptocurrencySpentNFTMarketplace: MostCryptocurrencySpentNftMarketplace = {};
        const mostInvitedUsers: MostInvitedUsers[] = [];
        const mostCompletedSurveysInSpecificCategory: MostCompletedSurveysInSpecificCategory[] = [];
        let highestAverageSurveyCompletionRate: HighestAverageSurveyCompletionRate = {};
        let mostConsistentSurveyCompletionFrequency: MostConsistentSurveyCompletionFrequency = {};
        const highestNumberOfConsecutiveDaysWithSurveyCompletions: HighestNumberOfConsecutiveDaysWithSurveyCompletions[] = [];
        const mostActiveParticipationInSpecificTypesOfSurveys: MostActiveParticipationInSpecificTypesOfSurveys = {};
        const mostReferralsConvertedIntoActiveSurveyParticipants: MostReferralsConvertedIntoActiveSurveyParticipants[] = [];
        const mostEngagementWithCommunityFeatures: MostEngagementWithCommunityFeatures[] = [];
        let mostCreativeAndUniqueSurveyResponses: MostCreativeAndUniqueSurveyResponses = {};

        let surveyTakerInfoTotalFast: SurveyTakerInfo[] = []
        let surveyTakerInfoPolkadotFast: SurveyTakerInfo[] = []
        let surveyTakerInfoNearFast: SurveyTakerInfo[] = []
        let surveyTakerInfoPolygonFast: SurveyTakerInfo[] = []

        const sqlQueryFastestCompleteSurveyTotal = await getQueryResult(`
        SELECT EXTRACT(EPOCH FROM (fq.completed_at - fq.created_at)) / 3600 AS hours,
        fq.survey_id, fq.profile_id
        FROM filling_queue fq
        INNER JOIN survey_rewards srw ON srw.survey_id = fq.survey_id
        INNER JOIN surveys s ON s.survey_id = srw.survey_id
        WHERE fq.filling_status = 'COMPLETE'
        ORDER BY hours ASC`);
        const sqlQueryFastestCompleteSurveyPolkadot = await getQueryResult(`
        SELECT EXTRACT(EPOCH FROM (fq.completed_at - fq.created_at)) / 3600 AS hours,
        fq.survey_id, fq.profile_id
        FROM filling_queue fq
        INNER JOIN survey_rewards srw ON srw.survey_id = fq.survey_id
        INNER JOIN surveys s ON s.survey_id = srw.survey_id
        WHERE fq.filling_status = 'COMPLETE' AND srw.crypto_name = 'POLKADOT'
        ORDER BY hours ASC`);
        const sqlQueryFastestCompleteSurveyNear = await getQueryResult(`
        SELECT EXTRACT(EPOCH FROM (fq.completed_at - fq.created_at)) / 3600 AS hours,
        fq.survey_id, fq.profile_id
        FROM filling_queue fq
        INNER JOIN survey_rewards srw ON srw.survey_id = fq.survey_id
        INNER JOIN surveys s ON s.survey_id = srw.survey_id
        WHERE fq.filling_status = 'COMPLETE' AND srw.crypto_name = 'NEAR'
        ORDER BY hours ASC`);
        const sqlQueryFastestCompleteSurveyPolygon = await getQueryResult(`
        SELECT EXTRACT(EPOCH FROM (fq.completed_at - fq.created_at)) / 3600 AS hours,
        fq.survey_id, fq.profile_id
        FROM filling_queue fq
        INNER JOIN survey_rewards srw ON srw.survey_id = fq.survey_id
        INNER JOIN surveys s ON s.survey_id = srw.survey_id
        WHERE fq.filling_status = 'COMPLETE' AND srw.crypto_name = 'POLYGON'
        ORDER BY hours ASC`);

        for (const value of sqlQueryFastestCompleteSurveyTotal) {
          surveyTakerInfoTotalFast.push({
            surveyId: Number(value.survey_id),
            user: Number(value.profile_id),
            hours: Number(value.hours)
          });
        }
        for (const value of sqlQueryFastestCompleteSurveyPolkadot) {
          surveyTakerInfoPolkadotFast.push({
            surveyId: Number(value.survey_id),
            user: Number(value.profile_id),
            hours: Number(value.hours)
          });
        }
        for (const value of sqlQueryFastestCompleteSurveyNear) {
          surveyTakerInfoNearFast.push({
            surveyId: Number(value.survey_id),
            user: Number(value.profile_id),
            hours: Number(value.hours)
          });
        }
        for (const value of sqlQueryFastestCompleteSurveyPolygon) {
          surveyTakerInfoPolygonFast.push({
            surveyId: Number(value.survey_id),
            user: Number(value.profile_id),
            hours: Number(value.hours)
          });
        }

        fastestCompleteSurvey = {
          total: surveyTakerInfoTotalFast,
          polkadot: surveyTakerInfoPolkadotFast,
          near: surveyTakerInfoNearFast,
          polygon: surveyTakerInfoPolygonFast
        }

        let surveyTakerInfoTotalSlow: SurveyTakerInfo[] = []
        let surveyTakerInfoPolkadotSlow: SurveyTakerInfo[] = []
        let surveyTakerInfoNearSlow: SurveyTakerInfo[] = []
        let surveyTakerInfoPolygonSlow: SurveyTakerInfo[] = []

        const sqlQuerySlowestCompleteSurveyTotal = await getQueryResult(`
        SELECT EXTRACT(EPOCH FROM (fq.completed_at - fq.created_at)) / 3600 AS hours,
        fq.survey_id, fq.profile_id
        FROM filling_queue fq
        INNER JOIN survey_rewards srw ON srw.survey_id = fq.survey_id
        INNER JOIN surveys s ON s.survey_id = srw.survey_id
        WHERE fq.filling_status = 'COMPLETE'
        ORDER BY hours DESC`);
        const sqlQuerySlowestCompleteSurveyPolkadot = await getQueryResult(`
        SELECT EXTRACT(EPOCH FROM (fq.completed_at - fq.created_at)) / 3600 AS hours,
        fq.survey_id, fq.profile_id
        FROM filling_queue fq
        INNER JOIN survey_rewards srw ON srw.survey_id = fq.survey_id
        INNER JOIN surveys s ON s.survey_id = srw.survey_id
        WHERE fq.filling_status = 'COMPLETE' AND srw.crypto_name = 'POLKADOT'
        ORDER BY hours DESC`);
        const sqlQuerySlowestCompleteSurveyNear = await getQueryResult(`
        SELECT EXTRACT(EPOCH FROM (fq.completed_at - fq.created_at)) / 3600 AS hours,
        fq.survey_id, fq.profile_id
        FROM filling_queue fq
        INNER JOIN survey_rewards srw ON srw.survey_id = fq.survey_id
        INNER JOIN surveys s ON s.survey_id = srw.survey_id
        WHERE fq.filling_status = 'COMPLETE' AND srw.crypto_name = 'NEAR'
        ORDER BY hours DESC`);
        const sqlQuerySlowestCompleteSurveyPolygon = await getQueryResult(`
        SELECT EXTRACT(EPOCH FROM (fq.completed_at - fq.created_at)) / 3600 AS hours,
        fq.survey_id, fq.profile_id
        FROM filling_queue fq
        INNER JOIN survey_rewards srw ON srw.survey_id = fq.survey_id
        INNER JOIN surveys s ON s.survey_id = srw.survey_id
        WHERE fq.filling_status = 'COMPLETE' AND srw.crypto_name = 'POLYGON'
        ORDER BY hours DESC`);

        for (const value of sqlQuerySlowestCompleteSurveyTotal) {
          surveyTakerInfoTotalSlow.push({
            surveyId: Number(value.survey_id),
            user: Number(value.profile_id),
            hours: Number(value.hours)
          });
        }
        for (const value of sqlQuerySlowestCompleteSurveyPolkadot) {
          surveyTakerInfoPolkadotSlow.push({
            surveyId: Number(value.survey_id),
            user: Number(value.profile_id),
            hours: Number(value.hours)
          });
        }
        for (const value of sqlQuerySlowestCompleteSurveyNear) {
          surveyTakerInfoNearSlow.push({
            surveyId: Number(value.survey_id),
            user: Number(value.profile_id),
            hours: Number(value.hours)
          });
        }
        for (const value of sqlQuerySlowestCompleteSurveyPolygon) {
          surveyTakerInfoPolygonSlow.push({
            surveyId: Number(value.survey_id),
            user: Number(value.profile_id),
            hours: Number(value.hours)
          });
        }

        slowestCompleteSurvey = {
          total: surveyTakerInfoTotalSlow,
          polkadot: surveyTakerInfoPolkadotSlow,
          near: surveyTakerInfoNearSlow,
          polygon: surveyTakerInfoPolygonSlow
        }

        let unclaimedStatusAndDurationTotal: StatusAndDuration[] = []
        let unclaimedStatusAndDurationPolkadot: StatusAndDuration[] = []
        let unclaimedStatusAndDurationNear: StatusAndDuration[] = []
        let unclaimedStatusAndDurationPolygon: StatusAndDuration[] = []

        const sqlQueryUnclaimedStatusAndDurationTotal = await getQueryResult(`
        SELECT EXTRACT(EPOCH FROM (sr.reward_claimed_at - sr.created_at)) / 3600 AS hours
        , profile_id, survey_id, results_id, reward_claimed
        FROM survey_results sr
        ORDER BY hours DESC`);
        const sqlQueryUnclaimedStatusAndDurationPolkadot = await getQueryResult(`
        SELECT EXTRACT(EPOCH FROM (sr.reward_claimed_at - sr.created_at)) / 3600 AS hours
        , sr.profile_id, sr.survey_id, sr.results_id, sr.reward_claimed
        FROM survey_results sr
        LEFT JOIN survey_rewards srw ON sr.reward_id = srw.reward_id
        WHERE srw.crypto_name = 'POLKADOT'
        ORDER BY hours DESC`);
        const sqlQueryUnclaimedStatusAndDurationNear = await getQueryResult(`
        SELECT EXTRACT(EPOCH FROM (sr.reward_claimed_at - sr.created_at)) / 3600 AS hours
        , sr.profile_id, sr.survey_id, sr.results_id, sr.reward_claimed
        FROM survey_results sr
        LEFT JOIN survey_rewards srw ON sr.reward_id = srw.reward_id
        WHERE srw.crypto_name = 'NEAR'
        ORDER BY hours DESC`);
        const sqlQueryUnclaimedStatusAndDurationPolygon = await getQueryResult(`
        SELECT EXTRACT(EPOCH FROM (sr.reward_claimed_at - sr.created_at)) / 3600 AS hours
        , sr.profile_id, sr.survey_id, sr.results_id, sr.reward_claimed
        FROM survey_results sr
        LEFT JOIN survey_rewards srw ON sr.reward_id = srw.reward_id
        WHERE srw.crypto_name = 'POLYGON'
        ORDER BY hours DESC`);

        for (const value of sqlQueryUnclaimedStatusAndDurationTotal) {
          unclaimedStatusAndDurationTotal.push({
            user: Number(value.profile_id),
            surveyId: Number(value.survey_id),
            claimed: value.reward_claimed == 'CLAIMED'? true: false,
            duration: Number(value.hours)
          });
        }
        for (const value of sqlQueryUnclaimedStatusAndDurationPolkadot) {
          unclaimedStatusAndDurationPolkadot.push({
            user: Number(value.profile_id),
            surveyId: Number(value.survey_id),
            claimed: value.reward_claimed == 'CLAIMED'? true: false,
            duration: Number(value.hours)
          });
        }
        for (const value of sqlQueryUnclaimedStatusAndDurationNear) {
          unclaimedStatusAndDurationNear.push({
            user: Number(value.profile_id),
            surveyId: Number(value.survey_id),
            claimed: value.reward_claimed == 'CLAIMED'? true: false,
            duration: Number(value.hours)
          });
        }
        for (const value of sqlQueryUnclaimedStatusAndDurationPolygon) {
          unclaimedStatusAndDurationPolygon.push({
            user: Number(value.profile_id),
            surveyId: Number(value.survey_id),
            claimed: value.reward_claimed == 'CLAIMED'? true: false,
            duration: Number(value.hours)
          });
        }

        unclaimedRewardStatusAndDuration = {
          total: unclaimedStatusAndDurationTotal,
          polkadot: unclaimedStatusAndDurationPolkadot,
          near: unclaimedStatusAndDurationNear,
          polygon: unclaimedStatusAndDurationPolygon
        }

        const sqlQueryTutorialCompletitions = await getQueryResult(`
        SELECT profile_id, filling_status FROM filling_queue
        WHERE filling_type = 'TUTORIAL'`);

        for (const value of sqlQueryTutorialCompletitions) {
          tutorialCompletitions.push({
            user: Number(value.profile_id),
            fillingStatus: value.filling_status == 'COMPLETE'? true: false,      
          });
        }

        let userWalletsConnectedNear: UserWalletsConnected[] = []
        let userWalletsConnectedPolkadot: UserWalletsConnected[] = []
        let userWalletsConnectedPolygon: UserWalletsConnected[] = []

        const sqlQueryUserWalletsConnectedNear = await getQueryResult(`
        SELECT profile_id, COUNT(crypto_name) AS wallet_count from wallets
        WHERE crypto_name = 'NEAR'
        GROUP BY profile_id`);
        const sqlQueryUserWalletsConnectedPolkadot = await getQueryResult(`
        SELECT profile_id, COUNT(crypto_name) AS wallet_count from wallets
        WHERE crypto_name = 'POLKADOT'
        GROUP BY profile_id`);
        const sqlQueryUserWalletsConnectedPolygon = await getQueryResult(`
        SELECT profile_id, COUNT(crypto_name) AS wallet_count from wallets
        WHERE crypto_name = 'POLYGON'
        GROUP BY profile_id`);

        for (const value of sqlQueryUserWalletsConnectedNear) {
          userWalletsConnectedNear.push({
            user: Number(value.profile_id),
            walletCount: Number(value.wallet_count),     
          });
        }
        for (const value of sqlQueryUserWalletsConnectedPolkadot) {
          userWalletsConnectedPolkadot.push({
            user: Number(value.profile_id),
            walletCount: Number(value.wallet_count),          
          });
        }
        for (const value of sqlQueryUserWalletsConnectedPolygon) {
          userWalletsConnectedPolygon.push({
            user: Number(value.profile_id),
            walletCount: Number(value.wallet_count),     
          });
        }
        
        walletsConnectedPerBlockchain = {
          near: userWalletsConnectedNear,
          polkadot: userWalletsConnectedPolkadot,
          polygon: userWalletsConnectedPolygon
        }

        const user = req?.request?.user;

        const sqlQueryAverageTimePerSession = user? await getQueryResult(`
        SELECT sa.profile_id, ROUND(AVG(session_period) / 3600, 2)::DECIMAL AS session_hourly_avg
        FROM (SELECT
        profile_id,
          session->>'session_id' AS session_id,
          (session->>'session_period')::integer AS session_period
        FROM users,
            jsonb_array_elements(session_info) AS session
        GROUP BY profile_id, session) AS sa
        WHERE profile_id = ANY($1::int[])
        GROUP BY sa.profile_id;`, [user]): await getQueryResult(`
        SELECT sa.profile_id, ROUND(AVG(session_period) / 3600, 2)::DECIMAL AS session_hourly_avg
        FROM (SELECT
        profile_id,
          session->>'session_id' AS session_id,
          (session->>'session_period')::integer AS session_period
        FROM users,
            jsonb_array_elements(session_info) AS session
        GROUP BY profile_id, session) AS sa
        GROUP BY sa.profile_id;`);

        for (const value of sqlQueryAverageTimePerSession) {
          averageTimePerSession.push({
            user: Number(value.profile_id),
            averageTimeHrs: Number(value.session_hourly_avg),     
          });
        }

        const sqlQueryAverageTimeCompletingSurvey = await getQueryResult(`
        SELECT profile_id, ROUND(AVG(completion_hrs),2) AS avg_hrs
        FROM (SELECT profile_id, survey_id, EXTRACT(EPOCH FROM (completed_at - created_at)) / 3600 AS completion_hrs
        FROM filling_queue) AS completion
        GROUP BY profile_id
        ORDER BY avg_hrs ASC`);

        for (const value of sqlQueryAverageTimeCompletingSurvey) {
          averageTimeCompletingSurvey.push({
            user: Number(value.profile_id),
            averageTimePerServey: Number(value.avg_hrs),     
          });
        }

        const sqlQueryAverageTimeWithdrawRewards = await getQueryResult(`
        SELECT profile_id, ROUND(AVG(hours)::DECIMAL,2) AS avg_hours
        FROM (SELECT EXTRACT(EPOCH FROM (sr.reward_claimed_at - sr.created_at)) / 3600 AS hours
        , profile_id, survey_id, results_id, reward_claimed
        FROM survey_results sr
        WHERE reward_claimed = true) AS claimed
        GROUP BY profile_id`);

        for (const value of sqlQueryAverageTimeWithdrawRewards) {
          averageTimeWithdrawRewards.push({
            user: Number(value.profile_id),
            avgHours: Number(value.avg_hours),     
          });
        }

        const sqlQueryAverageValueSpentNFTMarketplace = await getQueryResult(`
        SELECT profile_id, ROUND(AVG(order_amount)::DECIMAL, 2) AS avg_amount FROM marketplace_orders
        GROUP BY profile_id
        ORDER BY avg_amount DESC`);

        for (const value of sqlQueryAverageValueSpentNFTMarketplace) {
          averageValueSpentNFTMarketplace.push({
            user: Number(value.profile_id),
            avgCashAmount: Number(value.avg_amount),     
          });
        }

        const sqlQueryLifetimeCryptoValueInUSD = await getQueryResult(`
        select profile_id, SUM(reward_value_in_cash) from survey_results
        where reward_type = 'CRYPTO'
        group by profile_id`);
        const sqlQuerySessionAverageAccruedCryptoValueInUSD = await getQueryResult(`
        SELECT profile_id, ROUND(AVG(value_in_usd)::DECIMAL,2) AS avg_value_in_usd
        FROM
        (SELECT rps.profile_id, rps.session_id, SUM(reward_value_in_cash) AS value_in_usd
        FROM (SELECT profile_id, session_id,
        COALESCE(results_element.results_id, null) AS results_id
        FROM
        (SELECT
         profile_id,
          session->>'session_id' AS session_id,
          (session->>'claimed_results_ids')::jsonb AS results_ids
        FROM users, jsonb_array_elements(session_info) AS session
        GROUP BY profile_id, session) session_claims
        LEFT JOIN LATERAL (
          SELECT (jsonb_array_elements(session_claims.results_ids)::int) AS results_id
        ) results_element ON true) rps
        JOIN survey_results sr ON rps.results_id = sr.results_id
        WHERE sr.reward_type = 'CRYPTO'
        GROUP BY rps.session_id, rps.profile_id) avg_session_value
        GROUP BY profile_id`);
        const sqlQueryLastSessionAccruedCryptoValueInUSD = await getQueryResult(`
        SELECT rps.profile_id, rps.session_id, SUM(COALESCE(reward_value_in_cash, 0)) AS value_in_usd
        FROM (SELECT profile_id, session_id, 
        COALESCE(results_element.results_id, null) AS results_id
        FROM
        (WITH RankedSessions AS (
          SELECT
            profile_id,
            session->>'session_id' AS session_id,
            (session->>'claimed_results_ids')::jsonb AS results_ids,
            ROW_NUMBER() OVER (PARTITION BY profile_id ORDER BY (session->>'session_id')::int DESC) AS session_rank
          FROM users
          CROSS JOIN LATERAL jsonb_array_elements(session_info) AS session
        )
        SELECT profile_id, session_id, results_ids
        FROM RankedSessions
        WHERE session_rank = 1) session_claims 
        LEFT JOIN LATERAL (
          SELECT (jsonb_array_elements(session_claims.results_ids)::int) AS results_id
        ) results_element ON true) rps
        LEFT JOIN survey_results sr ON rps.results_id = sr.results_id
        WHERE sr.reward_type = 'CRYPTO'
        GROUP BY rps.session_id, rps.profile_id`);
        // averageValueAccruedCryptocurrency

        let averageValueAccruedCryptocurrencyMap: {[key: number]: AverageValueAccruedCryptocurrency } = {}
        sqlQueryLifetimeCryptoValueInUSD.forEach((value) => {
          averageValueAccruedCryptocurrencyMap[value.profile_id]? 
          averageValueAccruedCryptocurrencyMap[value.profile_id].lifetimeCryptoValueInUSD = value.sum: 
          averageValueAccruedCryptocurrencyMap[value.profile_id] = {lifetimeCryptoValueInUSD: value.sum}
        })
        sqlQuerySessionAverageAccruedCryptoValueInUSD.forEach((value) => {
          averageValueAccruedCryptocurrencyMap[value.profile_id]?
          averageValueAccruedCryptocurrencyMap[value.profile_id].sessionAverageAccruedCryptoValueInUSD = value.avg_value_in_usd:
          averageValueAccruedCryptocurrencyMap[value.profile_id] = {sessionAverageAccruedCryptoValueInUSD: value.avg_value_in_usd}
        })
        sqlQueryLastSessionAccruedCryptoValueInUSD.forEach((value) => {
          averageValueAccruedCryptocurrencyMap[value.profile_id]?
          averageValueAccruedCryptocurrencyMap[value.profile_id].lastSessionAccruedCryptoValueInUSD = value.value_in_usd:
          averageValueAccruedCryptocurrencyMap[value.profile_id] = {lastSessionAccruedCryptoValueInUSD: value.value_in_usd}
        })

        averageValueAccruedCryptocurrency = Object.entries(averageValueAccruedCryptocurrencyMap).map(([key, value]) => {
          value.user = key
          return value
        });

        const sqlQueryLifetimeCashViaStripeValueInUSD = await getQueryResult(`
        select profile_id, SUM(reward_value_in_cash) from survey_results
        where reward_type = 'CASH'
        group by profile_id`);
        const sqlQuerySessionAverageAccruedCashViaStripeValueInUSD = await getQueryResult(`
        SELECT profile_id, ROUND(AVG(value_in_usd)::DECIMAL,2) AS avg_value_in_usd
        FROM
        (SELECT rps.profile_id, rps.session_id, SUM(reward_value_in_cash) AS value_in_usd
        FROM (SELECT profile_id, session_id,
        COALESCE(results_element.results_id, null) AS results_id
        FROM
        (SELECT
         profile_id,
          session->>'session_id' AS session_id,
          (session->>'claimed_results_ids')::jsonb AS results_ids
        FROM users, jsonb_array_elements(session_info) AS session
        GROUP BY profile_id, session) session_claims
        LEFT JOIN LATERAL (
          SELECT (jsonb_array_elements(session_claims.results_ids)::int) AS results_id
        ) results_element ON true) rps
        JOIN survey_results sr ON rps.results_id = sr.results_id
        WHERE sr.reward_type = 'CASH'
        GROUP BY rps.session_id, rps.profile_id) avg_session_value
        GROUP BY profile_id`);

        const sqlQuerylastSessionAccruedCashViaStripeValueInUSD = await getQueryResult(`
        SELECT rps.profile_id, rps.session_id, SUM(COALESCE(reward_value_in_cash, 0)) AS value_in_usd
        FROM (SELECT profile_id, session_id, 
        COALESCE(results_element.results_id, null) AS results_id
        FROM
        (WITH RankedSessions AS (
          SELECT
            profile_id,
            session->>'session_id' AS session_id,
            (session->>'claimed_results_ids')::jsonb AS results_ids,
            ROW_NUMBER() OVER (PARTITION BY profile_id ORDER BY (session->>'session_id')::int DESC) AS session_rank
          FROM users
          CROSS JOIN LATERAL jsonb_array_elements(session_info) AS session
        )
        SELECT profile_id, session_id, results_ids
        FROM RankedSessions
        WHERE session_rank = 1) session_claims 
        LEFT JOIN LATERAL (
          SELECT (jsonb_array_elements(session_claims.results_ids)::int) AS results_id
        ) results_element ON true) rps
        LEFT JOIN survey_results sr ON rps.results_id = sr.results_id
        WHERE sr.reward_type = 'CASH'
        GROUP BY rps.session_id, rps.profile_id`);
        // averageValueAccruedCashViaStripe 

        let averageValueAccruedCashViaStripeMap: {[key: number]: AverageValueAccruedCashViaStripe } = {}
        sqlQueryLifetimeCashViaStripeValueInUSD.forEach((value) => {
          averageValueAccruedCashViaStripeMap[value.profile_id]? 
          averageValueAccruedCashViaStripeMap[value.profile_id].lifetimeCashViaStripeValueInUSD = value.sum: 
          averageValueAccruedCashViaStripeMap[value.profile_id] = {lifetimeCashViaStripeValueInUSD: value.sum}
        })
        sqlQuerySessionAverageAccruedCashViaStripeValueInUSD.forEach((value) => {
          averageValueAccruedCashViaStripeMap[value.profile_id]?
          averageValueAccruedCashViaStripeMap[value.profile_id].sessionAverageAccruedCashViaStripeValueInUSD = value.avg_value_in_usd:
          averageValueAccruedCashViaStripeMap[value.profile_id] = {sessionAverageAccruedCashViaStripeValueInUSD: value.avg_value_in_usd}
        })
        sqlQuerylastSessionAccruedCashViaStripeValueInUSD.forEach((value) => {
          averageValueAccruedCashViaStripeMap[value.profile_id]?
          averageValueAccruedCashViaStripeMap[value.profile_id].lastSessionAccruedCashViaStripeValueInUSD = value.value_in_usd:
          averageValueAccruedCashViaStripeMap[value.profile_id] = {lastSessionAccruedCashViaStripeValueInUSD: value.value_in_usd}
        })

        averageValueAccruedCashViaStripe = Object.entries(averageValueAccruedCashViaStripeMap).map(([key, value]) => {
          value.user = key
          return value
        });

        let purchaseAmountTotals: PurchaseAmountTotals[] = []
        let purchaseInfoHistory: PurchaseInfoHistory[] = []

        const sqlQueryPurchaseAmountTotals = user? await getQueryResult(`
        SELECT profile_id, SUM(order_amount) AS total_usd FROM marketplace_orders
        WHERE profile_id = ANY($1::int[])
        GROUP BY profile_id
        ORDER BY total_usd DESC`, [user]): await getQueryResult(`
        SELECT profile_id, SUM(order_amount) AS total_usd FROM marketplace_orders
        GROUP BY profile_id
        ORDER BY total_usd DESC`);

        const sqlQueryPurchaseInfoHistory = user? await getQueryResult(`
        SELECT profile_id, order_status, order_id, created_at, order_amount FROM marketplace_orders
        WHERE profile_id = ANY($1::int[])
        ORDER BY order_amount DESC`, [user]): await getQueryResult(`
        SELECT profile_id, order_status, order_id, created_at, order_amount FROM marketplace_orders
        ORDER BY order_amount DESC`);

        for (const value of sqlQueryPurchaseAmountTotals) {
          purchaseAmountTotals.push({
            user: Number(value.profile_id),
            totalPurchasedConvertedInUSD: Number(value.total_usd),     
          });
        }

        for (const value of sqlQueryPurchaseInfoHistory) {
          purchaseInfoHistory.push({
            user: Number(value.profile_id),
            orderStatus: value.order_status,
            orderId: Number(value.order_id),
            createdAt: value.created_at,
            orderAmountConvertedInUSD: Number(value.order_amount),     
          });
        }

        nFTMarketplacePurchaseHistory = {
          purchaseAmountTotals: purchaseAmountTotals,
          purchaseInfoHistory: purchaseInfoHistory
        }

        const categories = req?.request?.categories || undefined;

        const sqlQueryRankedTagsCompletedSurveys = (categories !== undefined) ? await getQueryResult(`
        SELECT DISTINCT each_category, count(each_category)
        FROM (select fq.survey_id, filling_status, jsonb_array_elements_text(category) as each_category from surveys s
          left join filling_queue fq on fq.survey_id = s.survey_id
          where category is not null and fq.filling_status = 'COMPLETE') AS tags
        GROUP BY each_category
        WHERE category = ANY($1::text[])
        ORDER BY count DESC`, [categories]): await getQueryResult(`
        SELECT DISTINCT each_category, count(each_category)
        FROM (select fq.survey_id, filling_status, jsonb_array_elements_text(category) as each_category from surveys s
          left join filling_queue fq on fq.survey_id = s.survey_id
          where category is not null and fq.filling_status = 'COMPLETE') AS tags
        GROUP BY each_category
        ORDER BY count DESC`);

        for (const value of sqlQueryRankedTagsCompletedSurveys) {
          rankedTagsCompletedSurveys.push({
            category_tags: value.each_category,
            tag_count: Number(value.count)    
          });
        }

        let completionTimeOfDay: CompletionTimeOfDay[] = []
        let userCompletionTimeOfDay: CompletionTimeOfDay[] = []

        const sqlQueryCompletionTimeOfDay = await getQueryResult(`
        SELECT EXTRACT(HOUR FROM completed_at) AS hour,
        COUNT(survey_id) AS completed
        FROM filling_queue
        WHERE completed_at IS NOT null
        GROUP BY hour
        ORDER BY hour`);
        const sqlQueryUserCompletionTimeOfDay = await getQueryResult(`
        SELECT COUNT(survey_id) AS completed, profile_id,
        EXTRACT(HOUR FROM completed_at) AS hour
        FROM filling_queue
        WHERE completed_at IS NOT null AND profile_id = ANY($1::int[])
        GROUP BY hour, profile_id
        ORDER BY profile_id, hour`, [user]);

        for (const value of sqlQueryCompletionTimeOfDay) {
          completionTimeOfDay.push({
            timeOfDay: value.hour, 
            surveyCount: Number(value.completed) 
          });
        }
        for (const value of sqlQueryUserCompletionTimeOfDay) {
          userCompletionTimeOfDay.push({
            timeOfDay: value.hour, 
            surveyCount: Number(value.completed) 
          });
        }

        mostCommonTimeOfDaySurveyCompletitons = {
          completionTimeOfDay: completionTimeOfDay,
          userCompletionTimeOfDay: {
            user: user?user:null,
            completionTimeOfDay: userCompletionTimeOfDay,
          } 
        }

        const sqlQuerySurveyCompletionBasedOnQuestionCount = await getQueryResult(`
        SELECT question_count, ROUND((SUM(completed)::decimal / SUM(total_attempted))*100,2) AS completion_ratio
        FROM (select fq.survey_id, question_count,
          count(fq.survey_id) as total_attempted,
          count(case when filling_status = 'COMPLETE' then fq.survey_id end) as completed
          from filling_queue fq
          left join (select survey_id, jsonb_array_length(pages) as question_count from surveys
          order by question_count desc) nq ON nq.survey_id = fq.survey_id
          group by fq.survey_id, question_count) AS qc
        GROUP BY question_count
        ORDER BY completion_ratio DESC`);

        for (const value of sqlQuerySurveyCompletionBasedOnQuestionCount) {
          surveyCompletionBasedOnQuestionCount.push({
            questionCount: Number(value.question_count),
            completionRatio: Number(value.completion_ratio) 
          });
        }
        

        const sqlQueryAverageUserRatingCompletedSurveys = await getQueryResult(`
        SELECT profile_id, ROUND(AVG(survey_rating),2) AS avg_rating FROM filling_queue
        WHERE filling_status = 'COMPLETE'
        GROUP BY profile_id
        ORDER BY avg_rating DESC`);


        for (const value of sqlQueryAverageUserRatingCompletedSurveys) {
          averageUserRatingCompletedSurveys.push({
            user: Number(value.profile_id),
            ratingAvg: Number(value.avg_rating) 
          });
        }

        let userEngagementRateNFTMarketplaceMap: {[key: number]: UserEngagementRateNftMarketplace } = {}

        const sqlQueryUserEngagementPageViews = user? await getQueryResult(`
        select user_id, count(id) from pageviews
        where user_id is not null and profileId = ANY($1::int[])
        group by user_id
        order by count desc`,[user]): await getQueryResult(`
        select user_id, count(id) from pageviews
        where user_id is not null
        group by user_id
        order by count desc`);
        const sqlQueryUserEngagementCreatedOrders = user? await getQueryResult(`
        select profile_id, count(profile_id) from marketplace_orders
        where profileId = ANY($1::int[])
        group by profile_id
        order by count desc`,[user]): await getQueryResult(`
        select profile_id, count(profile_id) from marketplace_orders
        group by profile_id
        order by count desc`);
        const sqlQueryUserEngagementProductsSelling = user? await getQueryResult(`
        select seller_id, count(product_id) from marketplace_products
        where seller_id is not null and profileId = ANY($1::int[])
        group by seller_id
        order by count desc`, [user]): await getQueryResult(`
        select seller_id, count(product_id) from marketplace_products
        where seller_id is not null
        group by seller_id
        order by count desc`);
        const sqlQueryUserEngagementSurveysCreated = user? await getQueryResult(`
        select profile_id, count(survey_id) from surveys
        where profile_id is not null and profileId = ANY($1::int[])
        group by profile_id
        order by count desc`, [user]): await getQueryResult(`
        select profile_id, count(survey_id) from surveys
        where profile_id is not null 
        group by profile_id
        order by count desc`);
        const sqlQueryUserEngagementFillingsStarted = user? await getQueryResult(`
        select profile_id, count(survey_id) from filling_queue
        where profileId = ANY($1::int[])
        group by profile_id
        order by count desc`, [user]): await getQueryResult(`
        select profile_id, count(survey_id) from filling_queue
        group by profile_id
        order by count desc`);
        const sqlQueryUserEngagementFillingsCompleted = user?  await getQueryResult(`
        select profile_id, count(survey_id) from filling_queue
        where filling_status = 'COMPLETE' and profileId = ANY($1::int[])
        group by profile_id
        order by count desc`, [user]): await getQueryResult(`
        select profile_id, count(survey_id) from filling_queue
        where filling_status = 'COMPLETE'
        group by profile_id
        order by count desc`);

        sqlQueryUserEngagementPageViews.forEach((value) => {
          userEngagementRateNFTMarketplaceMap[value.user_id]? 
          userEngagementRateNFTMarketplaceMap[value.user_id].pageViews = value.count: 
          userEngagementRateNFTMarketplaceMap[value.user_id] = {pageViews: value.count}
        })
        sqlQueryUserEngagementCreatedOrders.forEach((value) => {
          userEngagementRateNFTMarketplaceMap[value.profile_id]?
          userEngagementRateNFTMarketplaceMap[value.profile_id].purchaseCount = value.count:
          userEngagementRateNFTMarketplaceMap[value.profile_id] = {purchaseCount: value.count}
        })
        sqlQueryUserEngagementProductsSelling.forEach((value) => {
          userEngagementRateNFTMarketplaceMap[value.seller_id]?
          userEngagementRateNFTMarketplaceMap[value.seller_id].productsSelling = value.count:
          userEngagementRateNFTMarketplaceMap[value.seller_id] = {productsSelling: value.count}
        })
        sqlQueryUserEngagementSurveysCreated.forEach((value) => {
          userEngagementRateNFTMarketplaceMap[value.profile_id]?
          userEngagementRateNFTMarketplaceMap[value.profile_id].surveysCreated = value.count:
          userEngagementRateNFTMarketplaceMap[value.profile_id] = {surveysCreated: value.count}
        })
        sqlQueryUserEngagementFillingsStarted.forEach((value) => {
          userEngagementRateNFTMarketplaceMap[value.profile_id]?
          userEngagementRateNFTMarketplaceMap[value.profile_id].surveysStarted = value.count:
          userEngagementRateNFTMarketplaceMap[value.profile_id] = {surveysStarted: value.count}
        })
        sqlQueryUserEngagementFillingsCompleted.forEach((value) => {
          userEngagementRateNFTMarketplaceMap[value.profile_id]?
          userEngagementRateNFTMarketplaceMap[value.profile_id].surveysTaken = value.count:
          userEngagementRateNFTMarketplaceMap[value.profile_id] = {surveysTaken: value.count}
        })

        userEngagementRateNFTMarketplace = Object.entries(userEngagementRateNFTMarketplaceMap).map(([key, value]) => {
          value.user = key
          return value
        });

        const sqlQuerySubscriptionLevel = await getQueryResult(`SELECT profile_id, subscription FROM users`);

        for (const value of sqlQuerySubscriptionLevel) {
          subscriptionLevel.push({
            user: Number(value.profile_id),
            subscription: value.subscription
          });
        }

        const sqlQuerySubscriptionHistory = (user !== undefined) ? await getQueryResult(`
        SELECT
        profile_id,
        (element->>'id')::int AS id,
          element->>'subscription_type' AS subscription_type,
          (element->>'subscription_start')::timestamp AS subscription_start,
          (element->>'subscription_end')::timestamp AS subscription_end
        FROM users, jsonb_array_elements(subscription_info) AS element
        WHERE subscription_info IS NOT NULL AND profile_id = ANY($1::int[])`, [user]): 
        await getQueryResult(`
        SELECT
        profile_id,
        (element->>'id')::int AS id,
        element->>'subscription_type' AS subscription_type,
        (element->>'subscription_start')::timestamp AS subscription_start,
          (element->>'subscription_end')::timestamp AS subscription_end
        FROM users, jsonb_array_elements(subscription_info) AS element
        WHERE subscription_info IS NOT NULL`);

        for (const value of sqlQuerySubscriptionHistory) {
          subscriptionHistory.push({
            user: Number(value.profile_id),
            subscription: value.subscription_type,
            began: value.subscription_start,
            ended: value.subscription_end
          });
        }

        console.log("Check Works:: ", averageValueAccruedCryptocurrency);

        const sqlQueryMostCompletedSurveys = await getQueryResult(`
        SELECT profile_id as user, COUNT(fq.survey_id) AS survey_count
        FROM filling_queue fq
        GROUP BY profile_id
        ORDER BY survey_count DESC
        LIMIT 10`);

        for (const value of sqlQueryMostCompletedSurveys) {
          userMostCompletedSurveys.push({
            profileId: value.user,
            numberOfSurveys: value.survey_count,
          });
        }

        const sqlQueryMostEarnedCashRewards = await getQueryResult(`
        SELECT u_id, ROUND(SUM(cash_amount)::numeric, 2) AS total_cash_rewards FROM
        (select s.survey_id, sr.profile_id as u_id, s.profile_id as b_id,
        srw.reward_id, srw.reward_type, srw.cash_amount
        from surveys s
        join survey_results sr on s.survey_id = sr.survey_id
        join survey_rewards srw on s.survey_id = srw.survey_id
        where srw.reward_type = 'CASH') AS all_cash_rewards
        GROUP BY u_id
        ORDER BY total_cash_rewards
        LIMIT 10;`);

        for (const value of sqlQueryMostEarnedCashRewards) {
          mostEarnedCashRewards.push({
            profileId: value.u_id,
            mostCashViaStripe: Number(value.total_cash_rewards),
          });
        }

        const nearRewards: CryptoReward[] = [];
        const polkadotRewards: CryptoReward[] =[];
        const polygonRewards: CryptoReward[] = [];
        const totalCryptoInCash: AllCryptoRewardInUsd[] = [];

        const sqlQueryMostEarnedTotalInCash = await getQueryResult(`
        SELECT u_id, SUM(reward_value_in_cash) AS total_crypto_in_cash
        FROM (select s.survey_id, sr.profile_id as u_id, s.profile_id as b_id,
          srw.reward_id, srw.reward_type, srw.crypto_name, srw.crypto_amount,
          sr.reward_value_in_cash
          from surveys s
          join survey_results sr on s.survey_id = sr.survey_id
          join survey_rewards srw on s.survey_id = srw.survey_id
          where srw.reward_type = 'CRYPTO') AS user_crypto_rewards
        GROUP BY u_id
        ORDER BY total_crypto_in_cash DESC
        LIMIT 10;`);
        const sqlQueryMostCryptoEarnedNear = await getQueryResult(`
        SELECT u_id, SUM(crypto_amount) AS total_crypto_amount, SUM(reward_value_in_cash) AS total_crypto_in_cash
        FROM (select s.survey_id, sr.profile_id as u_id, s.profile_id as b_id,
          srw.reward_id, srw.reward_type, srw.crypto_name, srw.crypto_amount,
          sr.reward_value_in_cash
          from surveys s
          join survey_results sr on s.survey_id = sr.survey_id
          join survey_rewards srw on s.survey_id = srw.survey_id
          where srw.reward_type = 'CRYPTO' AND srw.crypto_name = 'NEAR') AS user_crypto_rewards
        GROUP BY u_id
        ORDER BY total_crypto_amount DESC
        LIMIT 10;`);
        const sqlQueryMostCryptoEarnedPolkadot = await getQueryResult(`
        SELECT u_id, SUM(crypto_amount) AS total_crypto_amount, SUM(reward_value_in_cash) AS total_crypto_in_cash
        FROM (select s.survey_id, sr.profile_id as u_id, s.profile_id as b_id,
          srw.reward_id, srw.reward_type, srw.crypto_name, srw.crypto_amount,
          sr.reward_value_in_cash
          from surveys s
          join survey_results sr on s.survey_id = sr.survey_id
          join survey_rewards srw on s.survey_id = srw.survey_id
          where srw.reward_type = 'CRYPTO' AND srw.crypto_name = 'NEAR') AS user_crypto_rewards
        GROUP BY u_id
        ORDER BY total_crypto_amount DESC
        LIMIT 10;`);
        const sqlQueryMostCryptoEarnedPolygon = await getQueryResult(`
        SELECT u_id, SUM(crypto_amount) AS total_crypto_amount, SUM(reward_value_in_cash) AS total_crypto_in_cash
        FROM (select s.survey_id, sr.profile_id as u_id, s.profile_id as b_id,
          srw.reward_id, srw.reward_type, srw.crypto_name, srw.crypto_amount,
          sr.reward_value_in_cash
          from surveys s
          join survey_results sr on s.survey_id = sr.survey_id
          join survey_rewards srw on s.survey_id = srw.survey_id
          where srw.reward_type = 'CRYPTO' AND srw.crypto_name = 'NEAR') AS user_crypto_rewards
        GROUP BY u_id
        ORDER BY total_crypto_amount DESC
        LIMIT 10;`);

        for (const value of sqlQueryMostCryptoEarnedNear) {
          nearRewards.push({
            profileId: value.u_id,
            amountCrypto: Number(value.total_crypto_amount),
            amountUsd: Number(value.total_cash_rewards),
          });
        }
        for (const value of sqlQueryMostCryptoEarnedPolkadot) {
          polkadotRewards.push({
            profileId: value.u_id,
            amountCrypto: Number(value.total_crypto_amount),
            amountUsd: Number(value.total_cash_rewards),
          });
        }
        for (const value of sqlQueryMostCryptoEarnedPolygon) {
          polygonRewards.push({
            profileId: value.u_id,
            amountCrypto: Number(value.total_crypto_amount),
            amountUsd: Number(value.total_cash_rewards),
          });
        }
        for (const value of sqlQueryMostEarnedTotalInCash) {
          totalCryptoInCash.push({
            profileId: value.u_id,
            amountUsd: Number(value.total_cash_rewards),
          });
        }
        
        mostEarnedCryptocurrencyRewards = {
          nearRewards: nearRewards,
          polkadotRewards: polkadotRewards,
          polygonRewards: polygonRewards,
          totalCryptoInCash: totalCryptoInCash,
        }

        const sqlQueryMostDollarsSpentNftMarketplace = await getQueryResult(`
        SELECT marketplace_orders.profile_id as u_id, SUM(marketplace_orders.order_amount) AS total_amount_cash
        FROM marketplace_orders
        WHERE marketplace_orders.order_status = 'APPROVED' AND marketplace_orders.payment_method = 'CASH'
        GROUP BY marketplace_orders.profile_id
        ORDER BY total_amount_cash DESC
        LIMIT 10;`);

        for (const value of sqlQueryMostDollarsSpentNftMarketplace) {
          mostDollarsSpentNFTMarketplace.push({
            profileId: value.u_id,
            realDollarsSpent: Number(value.total_amount_cash),
          });
        }

        const sqlQueryMostInvitedUsers = await getQueryResult(`
        SELECT inviter, COUNT(*) AS invitation_count
        FROM users
        WHERE users.inviter IS NOT NULL
        GROUP BY inviter
        ORDER BY invitation_count DESC
        LIMIT 10;`);

        for (const value of sqlQueryMostInvitedUsers) {
          mostInvitedUsers.push({
            profileId: value.inviter,
            usersInvited: Number(value.invitation_count),
          });
        }

        // let { categories } = req?.request || undefined;
        // const categories = null;

        const sqlQueryMostCompletedSurveysInSpecificCategory = categories !== undefined 
          ? await getQueryResult(`
          SELECT fq.profile_id, s.category, COUNT(s.category)::INT AS category_completions
          FROM filling_queue fq
          JOIN surveys s ON s.survey_id = fq.survey_id
          WHERE filling_status = 'COMPLETE' AND category = ANY($1::text[])
          GROUP BY s.category,fq.profile_id
          ORDER BY category_completions DESC;`, [categories])
          : 
          await getQueryResult(`
          SELECT fq.profile_id, s.category, COUNT(s.category)::INT AS category_completions
          FROM filling_queue fq
          JOIN surveys s ON s.survey_id = fq.survey_id
          WHERE filling_status = 'COMPLETE'
          GROUP BY s.category,fq.profile_id
          ORDER BY category_completions DESC;`, []);

        for (const value of sqlQueryMostCompletedSurveysInSpecificCategory) {
          mostCompletedSurveysInSpecificCategory.push({
            profileId: value.profile_id,
            categoryName: value.category,
            surveysCompleted: Number(value.category_completions),
          });
        }

        const mostSpentNear: CryptoReward[] = [];
        const mostSpentPolkadot: CryptoReward[] = [];
        const mostSpentPolygon: CryptoReward[] = [];

        const sqlQueryMostSpentInMarketplaceNear = await getQueryResult(`
        SELECT marketplace_orders.profile_id, SUM(marketplace_orders.crypto_amount) AS total_crypto_amount
        FROM marketplace_orders
        WHERE marketplace_orders.order_status = 'APPROVED' 
        AND marketplace_orders.payment_method = 'CRYPTO'
        AND marketplace_orders.crypto_name = 'NEAR'
        GROUP BY marketplace_orders.profile_id
        ORDER BY total_crypto_amount DESC
        LIMIT 10;`);
        const sqlQueryMostSpentInMarketplacePolkadot = await getQueryResult(`
        SELECT marketplace_orders.profile_id, SUM(marketplace_orders.crypto_amount) AS total_crypto_amount
        FROM marketplace_orders
        WHERE marketplace_orders.order_status = 'APPROVED' 
        AND marketplace_orders.payment_method = 'CRYPTO'
        AND marketplace_orders.crypto_name = 'POLKADOT'
        GROUP BY marketplace_orders.profile_id
        ORDER BY total_crypto_amount DESC
        LIMIT 10;`);
        const sqlQueryMostSpentInMarketplacePolygon = await getQueryResult(`
        SELECT marketplace_orders.profile_id, SUM(marketplace_orders.crypto_amount) AS total_crypto_amount
        FROM marketplace_orders
        WHERE marketplace_orders.order_status = 'APPROVED' 
        AND marketplace_orders.payment_method = 'CRYPTO'
        AND marketplace_orders.crypto_name = 'POLYGON'
        GROUP BY marketplace_orders.profile_id
        ORDER BY total_crypto_amount DESC
        LIMIT 10;`);

        for (const value of sqlQueryMostSpentInMarketplaceNear) {
          mostSpentNear.push({
            profileId: value.inviter,
            amountCrypto: Number(value.invitation_count),
          });
        }
        for (const value of sqlQueryMostSpentInMarketplacePolkadot) {
          mostSpentPolkadot.push({
            profileId: value.inviter,
            amountCrypto: Number(value.invitation_count),
          });
        }
        for (const value of sqlQueryMostSpentInMarketplacePolygon) {
          mostSpentPolygon.push({
            profileId: value.inviter,
            amountCrypto: Number(value.invitation_count),
          });
        }

        mostCryptocurrencySpentNFTMarketplace = {
          mostSpentNear: mostSpentNear,
          mostSpentPolkadot: mostSpentPolkadot,
          mostSpentPolygon: mostSpentPolygon,
        }

        const averageCompletionByUser: AverageSurveyCompletionRatesByUser[] = []
        const sqlQueryAverageCompletionByUser = await getQueryResult(`
        SELECT profile_id, ROUND((completed::decimal / total_attempted)*100,2) AS completion_ratio
        FROM (select profile_id, 
          count(survey_id) as total_attempted,
          count(case when filling_status = 'COMPLETE' then survey_id end) as completed
          from filling_queue
          group by profile_id) ratio
        ORDER BY completion_ratio DESC;`);

        for (const value of sqlQueryAverageCompletionByUser) {
          averageCompletionByUser.push({
            profileId: value.profile_id,
            percentageCompletionAverage: Number(value.completion_ratio),
          });
        }
        highestAverageSurveyCompletionRate = {
          highestAverageSurveyCompletion: averageCompletionByUser
        }

        const dailyCompletionFrequency: UserCompletionFrequency[] = [];
        const weeklyCompletionFrequency: UserCompletionFrequency[] = [];
        const monthlyCompletionFrequency: UserCompletionFrequency[] = [];
        const yearlyCompletionFrequency: UserCompletionFrequency[] = [];
        
        const sqlQueryDailyCompletionFrequency = await getQueryResult(`
        SELECT profile_id as u_id,
        ROUND(SUM(count_per_duration) / COUNT(count_per_duration), 2) AS daily_frequency
        FROM (select profile_id, DATE_TRUNC('day', completed_at) as duration,
               count(*) as count_per_duration
        from filling_queue
        group by profile_id, duration
        order by duration) AS survey_count_per_duration
        GROUP BY u_id
        ORDER BY daily_frequency DESC;`);
        const sqlQueryWeeklyCompletionFrequency = await getQueryResult(`
        SELECT profile_id as u_id,
        ROUND(SUM(count_per_duration) / COUNT(count_per_duration), 2) AS weekly_frequency
        FROM (select profile_id, DATE_TRUNC('week', completed_at) as duration,
               count(*) as count_per_duration
        from filling_queue
        group by profile_id, duration
        order by duration) AS survey_count_per_duration
        GROUP BY u_id
        ORDER BY weekly_frequency DESC;`);
        const sqlQueryMonthlyCompletionFrequency = await getQueryResult(`
        SELECT profile_id as u_id,
        ROUND(SUM(count_per_duration) / COUNT(count_per_duration), 2) AS monthly_frequency
        FROM (select profile_id, DATE_TRUNC('month', completed_at) as duration,
               count(*) as count_per_duration
        from filling_queue
        group by profile_id, duration
        order by duration) AS survey_count_per_duration
        GROUP BY u_id
        ORDER BY monthly_frequency DESC;`);
        const sqlQueryYearlyCompletionFrequency = await getQueryResult(`
        SELECT profile_id as u_id,
        ROUND(SUM(count_per_duration) / COUNT(count_per_duration), 2) AS yearly_frequency
        FROM (select profile_id, DATE_TRUNC('year', completed_at) as duration,
               count(*) as count_per_duration
        from filling_queue
        group by profile_id, duration
        order by duration) AS survey_count_per_duration
        GROUP BY u_id
        ORDER BY yearly_frequency DESC;`);

        for (const value of sqlQueryDailyCompletionFrequency) {
          dailyCompletionFrequency.push({
            profileId: value.u_id,
            frequencyAverage: Number(value.daily_frequency),
          });
        }
        for (const value of sqlQueryWeeklyCompletionFrequency) {
          weeklyCompletionFrequency.push({
            profileId: value.u_id,
            frequencyAverage: Number(value.weekly_frequency),
          });
        }
        for (const value of sqlQueryMonthlyCompletionFrequency) {
          monthlyCompletionFrequency.push({
            profileId: value.u_id,
            frequencyAverage: Number(value.monthly_frequency),
          });
        }
        for (const value of sqlQueryYearlyCompletionFrequency) {
          yearlyCompletionFrequency.push({
            profileId: value.u_id,
            frequencyAverage: Number(value.yearly_frequency),
          });
        }

        mostConsistentSurveyCompletionFrequency = {
          daily: dailyCompletionFrequency,
          weekly: weeklyCompletionFrequency,
          monthly: monthlyCompletionFrequency,
          yearly: yearlyCompletionFrequency
        }

        const sqlQueryHighestAverageSurveyCompletionRate = await getQueryResult(`
        SELECT DISTINCT ON (profile_id) profile_id, COUNT(DISTINCT completed_at::date) AS num_days
        FROM (select fq.*,
                    dense_rank() over (partition by profile_id order by completed_at::date) AS seq
            from filling_queue fq
            ) fq
        GROUP BY profile_id, completed_at::date - seq * interval '1 day'
        ORDER BY profile_id, num_days DESC
        LIMIT 10;`);

        for (const value of sqlQueryHighestAverageSurveyCompletionRate) {
          highestNumberOfConsecutiveDaysWithSurveyCompletions.push({
            profileId: value.profile_id,
            longestDailyStreak: Number(value.num_days),
          });
        }

        const sqlQueryOpenEndedSurveys = await getQueryResult(`
        SELECT count(campaign_type) AS qualitative, fq.profile_id FROM filling_queue fq
        JOIN surveys s on fq.survey_id = s.survey_id
        where filling_status = 'COMPLETE' AND campaign_type = 'QUALITATIVE'
        GROUP BY fq.profile_id
        ORDER BY qualitative DESC
        LIMIT 10;`);
        const sqlQueryMultipleChoiceSurveys = await getQueryResult(`
        SELECT count(campaign_type) AS quantitative, fq.profile_id FROM filling_queue fq
        JOIN surveys s on fq.survey_id = s.survey_id
        WHERE filling_status = 'COMPLETE' AND campaign_type = 'QUANTITATIVE'
        GROUP BY fq.profile_id
        ORDER BY quantitative DESC
        LIMIT 10;`);

        const openEndedSurveys: OpenEndedSurveys[] = [];
        const multipleChoiceSurveys: MultipleChoiceSurveys[] = [];

        for (const value of sqlQueryOpenEndedSurveys) {
          openEndedSurveys.push({
            profileId: value.profile_id,
            openEndedSurveys: Number(value.qualitative),
          });
        }
        for (const value of sqlQueryMultipleChoiceSurveys) {
          multipleChoiceSurveys.push({
            profileId: value.profile_id,
            multipleChoiceSurveys: Number(value.quantitative),
          });
        }
        mostActiveParticipationInSpecificTypesOfSurveys.multipleChoiceSurveysRankings = multipleChoiceSurveys;
        mostActiveParticipationInSpecificTypesOfSurveys.openEndedSurveysRankings = openEndedSurveys;

        const sqlQueryMostReferralsConverted = await getQueryResult(`
        SELECT ap.inviter, ap.participants as active_participants, total_invited.invitation_count from (select count(distinct fq.profile_id) participants, inviter from filling_queue fq
        join users u on u.profile_id = fq.profile_id
        where u.inviter is not NULL
        group by inviter) AS ap
        JOIN (select u.inviter,
            count(u.profile_id) as invitation_count from users u
            where u.inviter is not NULL
          group by u.inviter
          order by invitation_count)
            AS total_invited on total_invited.inviter = ap.inviter
        ORDER BY active_participants`);

        for (const value of sqlQueryMostReferralsConverted) {
          mostReferralsConvertedIntoActiveSurveyParticipants.push({
            profileId: value.inviter,
            referralsSent: Number(value.invitation_count),
            referredParticipantCount: Number(value.active_participants)
          });
        }


        const sqlQueryMostEngagementWithCommunityFeatures = await getQueryResult(`
        SELECT profile_id, jsonb_array_length(posts) AS post_count, posts
        FROM users
        WHERE posts IS NOT NULL
        ORDER BY post_count DESC
        LIMIT 10;`);

        for (const value of sqlQueryMostEngagementWithCommunityFeatures) {
          mostEngagementWithCommunityFeatures.push({
            profileId: value.profile_id,
            totalPosts: Number(value.post_count)
          });
        }

        const surveyResponseRating: Rating[] = [];
        const mediaRating: Rating[] = [];

        const sqlQuerySurveyResponseRating = await getQueryResult(`
        SELECT profile_id, survey_id, creative_response_rating FROM survey_results
        ORDER BY creative_response_rating DESC
        LIMIT 10;`);
        const sqlQueryMediaRating = await getQueryResult(`
        SELECT seller_id, media_id, media_rating FROM marketplace_products
        ORDER BY media_rating DESC
        LIMIT 10;`);

        for (const value of sqlQuerySurveyResponseRating) {
          surveyResponseRating.push({
            profileId: value.profile_id,
            item_id: Number(value.survey_id),
            rating: Number(value.creative_response_rating)
          });
        }
        for (const value of sqlQueryMediaRating) {
          mediaRating.push({
            profileId: value.profile_id,
            item_id: Number(value.survey_id),
            rating: Number(value.post_count)
          });
        }

        mostCreativeAndUniqueSurveyResponses = {
          surveyResponseRating: surveyResponseRating,
          mediaRating: mediaRating
        }

        return {
          fastestCompleteSurvey: fastestCompleteSurvey,
          slowestCompleteSurvey: slowestCompleteSurvey,
          unclaimedRewardStatusAndDuration: unclaimedRewardStatusAndDuration,
          tutorialCompletitions: tutorialCompletitions,
          walletsConnectedPerBlockchain: walletsConnectedPerBlockchain,
          averageTimePerSession: averageTimePerSession,
          averageTimeCompletingSurvey: averageTimeCompletingSurvey,
          averageTimeWithdrawRewards: averageTimeWithdrawRewards,
          averageValueSpentNFTMarketplace: averageValueSpentNFTMarketplace,
          averageValueAccruedCryptocurrency: averageValueAccruedCryptocurrency,
          averageValueAccruedCashViaStripe: averageValueAccruedCashViaStripe,
          nFTMarketplacePurchaseHistory: nFTMarketplacePurchaseHistory,
          rankedTagsCompletedSurveys: rankedTagsCompletedSurveys,
          mostCommonTimeOfDaySurveyCompletitons: mostCommonTimeOfDaySurveyCompletitons,
          surveyCompletionBasedOnQuestionCount: surveyCompletionBasedOnQuestionCount,
          averageUserRatingCompletedSurveys: averageUserRatingCompletedSurveys,
          userEngagementRateNFTMarketplace: userEngagementRateNFTMarketplace,
          subscriptionLevel: subscriptionLevel,
          subscriptionHistory: subscriptionHistory,
          userMostCompletedSurveys: userMostCompletedSurveys,
          mostEarnedCashRewards: mostEarnedCashRewards,
          mostEarnedCryptocurrencyRewards: mostEarnedCryptocurrencyRewards,
          mostDollarsSpentNFTMarketplace: mostDollarsSpentNFTMarketplace,
          mostCryptocurrencySpentNFTMarketplace: mostCryptocurrencySpentNFTMarketplace,
          mostInvitedUsers: mostInvitedUsers,
          mostCompletedSurveysInSpecificCategory: mostCompletedSurveysInSpecificCategory,
          highestAverageSurveyCompletionRate: highestAverageSurveyCompletionRate,
          mostConsistentSurveyCompletionFrequency: mostConsistentSurveyCompletionFrequency,
          highestNumberOfConsecutiveDaysWithSurveyCompletions: highestNumberOfConsecutiveDaysWithSurveyCompletions,
          mostActiveParticipationInSpecificTypesOfSurveys: mostActiveParticipationInSpecificTypesOfSurveys,
          mostReferralsConvertedIntoActiveSurveyParticipants: mostReferralsConvertedIntoActiveSurveyParticipants,
          mostEngagementWithCommunityFeatures: mostEngagementWithCommunityFeatures,
          mostCreativeAndUniqueSurveyResponses: mostCreativeAndUniqueSurveyResponses,
        };
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },

    dataMarketplace: async (_:any, req: any, context: any) => {
      let fastestDraftSurvey: FastestDraftSurvey = {}
      let slowestTimeDraftSurvey: SlowestTimeDraftSurvey = {}
      let unclaimedRewardStatusAndDuration: UnclaimedRewardStatusAndDuration = {}
      let walletsConnected: WalletsConnected = {}
      let userAverageSessionTime: UserAverageSessionTime[] = []
      let averageTimeDraftingSurvey: AverageTimeDraftingSurvey[] = []
      // let averageTimeLoadRewards: AverageTimeLoadRewards = {}
      let rankedTagsIssuedSurveys: RankedTagsIssuedSurveys[] = []
      let mostCommonSurveyLengthPreferred: MostCommonSurveyLengthPreferred[] = []
      let averageInviteResponseTime: AverageInviteResponseTime[] = []
      let correlationSurveyComplexityAndCompletion: CorrelationSurveyComplexityAndCompletion[] = []
      // let conversionRateSurveysToNFTPurchases: ConversionRateSurveysToNFTPurchases = {}
      // let mostEffectiveMethodsAttractingSurveyParticipants: MostEffectiveMethodsAttractingSurveyParticipants {}
      let subscriptionLevelMarketplace: SubscriptionLevel[] = []
      let subscriptionHistoryMarketplace: SubscriptionHistory[] = []

      try {
        let surveyDrafterInfoTotal: SurveyDrafterInfo[] = []
        let surveyDrafterInfoPolkadot: SurveyDrafterInfo[] = []
        let surveyDrafterInfoNear: SurveyDrafterInfo[] = []
        let surveyDrafterInfoPolygon: SurveyDrafterInfo[] = []
        const sqlQuerysurveyDrafterInfoTotal = await getQueryResult(`
        SELECT survey_id, profile_id, ROUND(EXTRACT(EPOCH FROM (published_at - created_at)) / 3600, 2) AS hours
        FROM surveys
        WHERE published_at IS NOT NULL
        ORDER BY hours ASC`);
        const sqlQuerysurveyDrafterInfoPolkadot = await getQueryResult(`
        SELECT survey_id, profile_id, ROUND(EXTRACT(EPOCH FROM (published_at - created_at)) / 3600, 2) AS hours
        FROM surveys s
        WHERE published_at IS NOT NULL AND s.crypto_name = 'POLKADOT'
        ORDER BY hours ASC`);
        const sqlQuerysurveyDrafterInfoNear = await getQueryResult(`
        SELECT survey_id, profile_id, ROUND(EXTRACT(EPOCH FROM (published_at - created_at)) / 3600, 2) AS hours
        FROM surveys s
        WHERE published_at IS NOT NULL AND s.crypto_name = 'NEAR'
        ORDER BY hours ASC`);
        const sqlQuerysurveyDrafterInfoPolygon = await getQueryResult(`
        SELECT survey_id, profile_id, ROUND(EXTRACT(EPOCH FROM (published_at - created_at)) / 3600, 2) AS hours
        FROM surveys s
        WHERE published_at IS NOT NULL AND s.crypto_name = 'POLYGON'
        ORDER BY hours ASC`);

        for (const value of sqlQuerysurveyDrafterInfoTotal) {
          surveyDrafterInfoTotal.push({
            surveyId: Number(value.survey_id),
            user: Number(value.profile_id),
            hours: Number(value.hours)
          });
        }
        for (const value of sqlQuerysurveyDrafterInfoPolkadot) {
          surveyDrafterInfoPolkadot.push({
            surveyId: Number(value.survey_id),
            user: Number(value.profile_id),
            hours: Number(value.hours)
          });
        }
        for (const value of sqlQuerysurveyDrafterInfoNear) {
          surveyDrafterInfoNear.push({
            surveyId: Number(value.survey_id),
            user: Number(value.profile_id),
            hours: Number(value.hours)
          });
        }
        for (const value of sqlQuerysurveyDrafterInfoPolygon) {
          surveyDrafterInfoPolygon.push({
            surveyId: Number(value.survey_id),
            user: Number(value.profile_id),
            hours: Number(value.hours)
          });
        }

        fastestDraftSurvey = {
          total: surveyDrafterInfoTotal,
          polkadot: surveyDrafterInfoPolkadot,
          near: surveyDrafterInfoNear,
          polygon: surveyDrafterInfoPolygon
        }

        let surveyDrafterInfoSlowestTotal: SurveyDrafterInfo[] = []
        let surveyDrafterInfoSlowestPolkadot: SurveyDrafterInfo[] = []
        let surveyDrafterInfoSlowestNear: SurveyDrafterInfo[] = []
        let surveyDrafterInfoSlowestPolygon: SurveyDrafterInfo[] = []
        const sqlQuerysurveyDrafterInfolowestTotal = await getQueryResult(`
        SELECT survey_id, profile_id, ROUND(EXTRACT(EPOCH FROM (published_at - created_at)) / 3600, 2) AS hours
        FROM surveys
        WHERE published_at IS NOT NULL
        ORDER BY hours DESC`);
        const sqlQuerysurveyDrafterInfolowestPolkadot = await getQueryResult(`
        SELECT survey_id, profile_id, ROUND(EXTRACT(EPOCH FROM (published_at - created_at)) / 3600, 2) AS hours
        FROM surveys s
        WHERE published_at IS NOT NULL AND s.crypto_name = 'POLKADOT'
        ORDER BY hours DESC`);
        const sqlQuerysurveyDrafterInfolowestNear = await getQueryResult(`
        SELECT survey_id, profile_id, ROUND(EXTRACT(EPOCH FROM (published_at - created_at)) / 3600, 2) AS hours
        FROM surveys s
        WHERE published_at IS NOT NULL AND s.crypto_name = 'NEAR'
        ORDER BY hours DESC`);
        const sqlQuerysurveyDrafterInfolowestPolygon = await getQueryResult(`
        SELECT survey_id, profile_id, ROUND(EXTRACT(EPOCH FROM (published_at - created_at)) / 3600, 2) AS hours
        FROM surveys s
        WHERE published_at IS NOT NULL AND s.crypto_name = 'POLYGON'
        ORDER BY hours DESC`);

        for (const value of sqlQuerysurveyDrafterInfolowestTotal) {
          surveyDrafterInfoSlowestTotal.push({
            surveyId: Number(value.survey_id),
            user: Number(value.profile_id),
            hours: Number(value.hours)
          });
        }
        for (const value of sqlQuerysurveyDrafterInfolowestPolkadot) {
          surveyDrafterInfoSlowestPolkadot.push({
            surveyId: Number(value.survey_id),
            user: Number(value.profile_id),
            hours: Number(value.hours)
          });
        }
        for (const value of sqlQuerysurveyDrafterInfolowestNear) {
          surveyDrafterInfoSlowestNear.push({
            surveyId: Number(value.survey_id),
            user: Number(value.profile_id),
            hours: Number(value.hours)
          });
        }
        for (const value of sqlQuerysurveyDrafterInfolowestPolygon) {
          surveyDrafterInfoSlowestPolygon.push({
            surveyId: Number(value.survey_id),
            user: Number(value.profile_id),
            hours: Number(value.hours)
          });
        }

        slowestTimeDraftSurvey = {
          total: surveyDrafterInfoSlowestTotal,
          polkadot: surveyDrafterInfoSlowestPolkadot,
          near: surveyDrafterInfoSlowestNear,
          polygon: surveyDrafterInfoSlowestPolygon
        }
        let statusAndDurationTotal: StatusAndDuration[] = []
        let statusAndDurationPolkadot: StatusAndDuration[] = []
        let statusAndDurationNear: StatusAndDuration[] = []
        let statusAndDurationPolygon: StatusAndDuration[] = []

        const sqlQueryStatusAndDurationTotal = await getQueryResult(`
        SELECT EXTRACT(EPOCH FROM (sr.reward_claimed_at - sr.created_at)) / 3600 AS hours
        , profile_id, survey_id, results_id, reward_claimed
        FROM survey_results sr
        ORDER BY hours DESC`);
        const sqlQueryStatusAndDurationPolkadot = await getQueryResult(`
        SELECT EXTRACT(EPOCH FROM (sr.reward_claimed_at - sr.created_at)) / 3600 AS hours
        , sr.profile_id, sr.survey_id, sr.results_id, sr.reward_claimed
        FROM survey_results sr
        LEFT JOIN survey_rewards srw ON sr.reward_id = srw.reward_id
        WHERE srw.crypto_name = 'POLKADOT'
        ORDER BY hours DESC`);
        const sqlQueryStatusAndDurationNear = await getQueryResult(`
        SELECT EXTRACT(EPOCH FROM (sr.reward_claimed_at - sr.created_at)) / 3600 AS hours
        , sr.profile_id, sr.survey_id, sr.results_id, sr.reward_claimed
        FROM survey_results sr
        LEFT JOIN survey_rewards srw ON sr.reward_id = srw.reward_id
        WHERE srw.crypto_name = 'NEAR'
        ORDER BY hours DESC`);
        const sqlQueryStatusAndDurationPolygon = await getQueryResult(`
        SELECT EXTRACT(EPOCH FROM (sr.reward_claimed_at - sr.created_at)) / 3600 AS hours
        , sr.profile_id, sr.survey_id, sr.results_id, sr.reward_claimed
        FROM survey_results sr
        LEFT JOIN survey_rewards srw ON sr.reward_id = srw.reward_id
        WHERE srw.crypto_name = 'POLYGON'
        ORDER BY hours DESC`);

        for (const value of sqlQueryStatusAndDurationTotal) {
          statusAndDurationTotal.push({
            user: Number(value.profile_id),
            surveyId: Number(value.survey_id),
            claimed: value.reward_claimed == 'CLAIMED'? true: false,
            duration: Number(value.hours)
          });
        }
        for (const value of sqlQueryStatusAndDurationPolkadot) {
          statusAndDurationPolkadot.push({
            user: Number(value.profile_id),
            surveyId: Number(value.survey_id),
            claimed: value.reward_claimed == 'CLAIMED'? true: false,
            duration: Number(value.hours)
          });
        }
        for (const value of sqlQueryStatusAndDurationNear) {
          statusAndDurationNear.push({
            user: Number(value.profile_id),
            surveyId: Number(value.survey_id),
            claimed: value.reward_claimed == 'CLAIMED'? true: false,
            duration: Number(value.hours)
          });
        }
        for (const value of sqlQueryStatusAndDurationPolygon) {
          statusAndDurationPolygon.push({
            user: Number(value.profile_id),
            surveyId: Number(value.survey_id),
            claimed: value.reward_claimed == 'CLAIMED'? true: false,
            duration: Number(value.hours)
          });
        }

        unclaimedRewardStatusAndDuration = {
          total: statusAndDurationTotal,
          polkadot: statusAndDurationPolkadot,
          near: statusAndDurationNear,
          polygon: statusAndDurationPolygon
        }

        const sqlQueryWalletsConnectedNear = await getQueryResult(`
        SELECT COUNT(crypto_name) AS wallet_count from wallets
        WHERE crypto_name = 'NEAR'`);
        const sqlQueryWalletsConnectedPolygon = await getQueryResult(`
        SELECT COUNT(crypto_name) AS wallet_count from wallets
        WHERE crypto_name = 'POLYGON'`);
        const sqlQueryWalletsConnectedPolkadot = await getQueryResult(`
        SELECT COUNT(crypto_name) AS wallet_count from wallets
        WHERE crypto_name = 'POLKADOT'`);

        walletsConnected = {
          near: sqlQueryWalletsConnectedNear[0].wallet_count,
          polkadot: sqlQueryWalletsConnectedPolygon[0].wallet_count,
          polygon: sqlQueryWalletsConnectedPolkadot[0].wallet_count
        }

        const sqlQueryUserAverageSessionTime = await getQueryResult(`
        SELECT sa.profile_id, ROUND(AVG(session_period) / 3600, 2)::DECIMAL AS session_hourly_avg
        FROM (SELECT
         profile_id,
          session->>'session_id' AS session_id,
          (session->>'session_period')::integer AS session_period
        FROM users,
             jsonb_array_elements(session_info) AS session
        GROUP BY profile_id, session) AS sa
        GROUP BY sa.profile_id;`);

        for (const value of sqlQueryUserAverageSessionTime) {
          userAverageSessionTime.push({
            user: Number(value.profile_id),
            averageTime: Number(value.session_hourly_avg)
          });
        }

        const sqlQueryAverageTimeDraftingSurvey = await getQueryResult(`
        SELECT profile_id, ROUND(AVG(drafted_hrs),2) AS avg_hrs
        FROM (SELECT profile_id, survey_id, EXTRACT(EPOCH FROM (s.published_at - s.created_at)) / 3600 AS drafted_hrs
        FROM surveys s
        WHERE published_at IS NOT NULL) AS drafting
        GROUP BY profile_id
        ORDER BY avg_hrs ASC`);

        for (const value of sqlQueryAverageTimeDraftingSurvey) {
          averageTimeDraftingSurvey.push({
            user: Number(value.profile_id),
            averageTimePerServey: Number(value.avg_hrs)
          });
        }

        // const sqlQueryAverageTimeLoadRewards = await getQueryResult(``);

        const categories = req?.request?.categories || undefined;

        const sqlQueryRankedTagsIssuedSurveys = (categories !== undefined) ? await getQueryResult(`
        SELECT DISTINCT each_category, count(each_category) from (select jsonb_array_elements_text(category) as each_category from surveys
        where category is not null) AS tags
        WHERE each_category = ANY($1::text[])
        GROUP BY tags.each_category`,[categories]): await getQueryResult(`
        SELECT DISTINCT each_category, count(each_category) from (select jsonb_array_elements_text(category) as each_category from surveys
        where category is not null) AS tags
        GROUP BY each_category`);

        for (const value of sqlQueryRankedTagsIssuedSurveys) {
          rankedTagsIssuedSurveys.push({
            categoryTags: value.each_category,
            tagCount: Number(value.count)
          });
        }

        const sqlQueryMostCommonSurveyLengthPreferred = await getQueryResult(`
        SELECT question_count, COUNT(question_count) AS surveys_completed
        FROM filling_queue fq
        LEFT JOIN (select survey_id, jsonb_array_length(pages) as question_count from surveys
        order by question_count desc) AS ac
        ON fq.survey_id = ac.survey_id
        WHERE fq.filling_status = 'COMPLETE'
        GROUP BY ac.question_count
        ORDER BY surveys_completed DESC`);

        for (const value of sqlQueryMostCommonSurveyLengthPreferred) {
          mostCommonSurveyLengthPreferred.push({
            questionCount: Number(value.question_count),
            surveysCompleted: Number(value.surveys_completed),
          });
        }

        const sqlQueryAverageInviteResponseTime = await getQueryResult(`
        SELECT profile_id, ROUND(AVG(EXTRACT(EPOCH FROM (fq.created_at - fq.invited_at)) / 3600), 2) AS avg_hours
        FROM filling_queue fq
        WHERE invited_at IS NOT NULL
        GROUP BY profile_id`);

        for (const value of sqlQueryAverageInviteResponseTime) {
          averageInviteResponseTime.push({
            user: Number(value.profile_id),
            averageResponseTimeHrs: Number(value.avg_hours)
          });
        }

        const sqlQueryCorrelationSurveyComplexityAndCompletion = await getQueryResult(`
        SELECT nq.survey_id, question_count, ROUND((completed::decimal / total_attempted)*100,2) AS completion_ratio
        FROM (select survey_id,
          count(survey_id) as total_attempted,
          count(case when filling_status = 'COMPLETE' then survey_id end) as completed
          from filling_queue
          group by survey_id) ratio
        LEFT JOIN (select survey_id, jsonb_array_length(pages) as question_count from surveys
        order by question_count desc) nq ON nq.survey_id = ratio.survey_id
        ORDER BY completion_ratio DESC;`);

        for (const value of sqlQueryCorrelationSurveyComplexityAndCompletion) {
          correlationSurveyComplexityAndCompletion.push({
            surveyId: Number(value.survey_id),
            completionRatio: Number(value.completion_ratio),
            questionCount: Number(value.question_count)
          });
        }

        const sqlQuerySubscriptionLevel = await getQueryResult(`SELECT profile_id, subscription FROM users`);

        for (const value of sqlQuerySubscriptionLevel) {
          subscriptionLevelMarketplace.push({
            user: Number(value.profile_id),
            subscription: value.subscription
          });
        }

        const sqlQuerySubscriptionHistory = await getQueryResult(`
        SELECT
        profile_id,
        (element->>'id')::int AS id,
        element->>'subscription_type' AS subscription_type,
        (element->>'subscription_start')::timestamp AS subscription_start,
          (element->>'subscription_end')::timestamp AS subscription_end
      FROM users, jsonb_array_elements(subscription_info) AS element
      WHERE subscription_info IS NOT NULL`);

        for (const value of sqlQuerySubscriptionHistory) {
          subscriptionHistoryMarketplace.push({
            user: Number(value.profile_id),
            subscription: value.subscription_type,
            began: value.subscription_start,
            ended: value.subscription_end
          });
        }

        return {
          fastestDraftSurvey: fastestDraftSurvey,
          slowestTimeDraftSurvey: slowestTimeDraftSurvey,
          unclaimedRewardStatusAndDuration: unclaimedRewardStatusAndDuration,
          walletsConnected: walletsConnected,
          userAverageSessionTime: userAverageSessionTime,
          averageTimeDraftingSurvey: averageTimeDraftingSurvey,
          // averageTimeLoadRewards: AverageTimeLoadRewards, //todo
          rankedTagsIssuedSurveys: rankedTagsIssuedSurveys,
          mostCommonSurveyLengthPreferred: mostCommonSurveyLengthPreferred,
          averageInviteResponseTime: averageInviteResponseTime,
          correlationSurveyComplexityAndCompletion: correlationSurveyComplexityAndCompletion,
          // conversionRateSurveysToNFTPurchases: ConversionRateSurveysToNFTPurchases, //todo
          // mostEffectiveMethodsAttractingSurveyParticipants: mostEffectiveMethodsAttractingSurveyParticipants //todo
          subscriptionLevelMarketplace: subscriptionLevelMarketplace, 
          subscriptionHistoryMarketplace: subscriptionHistoryMarketplace, 
        }

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },

    dataBusiness: async (_: any, req: any, context: any) => {
      // prettier-ignore
      try {
        const mostIssuedSurveys: MostIssuedSurveys[] = [];
        let mostCompletedSurveys: MostCompletedSurveys = {};
        let mostCryptocurrencyValueIssuedViaSurveys: MostCryptocurrencyValueIssuedViaSurveys = {};
        const mostCashValueIssuedViaSurveysViaStripe: MostCashValueIssuedViaSurveysViaStripe[] = [];
        const highestNumberOfSuccessfulSurveyCampaigns: HighestNumberOfSuccessfulSurveyCampaigns[] = [];
        const mostDiverseSurveyTopicsCovered: MostDiverseSurveyTopicsCovered[] = [];
        const highestNumberOfParticipantsEngaged: HighestNumberOfParticipantsEngaged[] = [];
        const highestConversionRate: HighestConversionRate[] = [];

        const sqlQueryMostIssuedSurveys = await getQueryResult(`
        SELECT users.profile_id as business, COUNT(s.survey_id) AS surveys_issued
        FROM users
        JOIN surveys s ON users.profile_id = s.profile_id
        WHERE users.account_type = 'BUSINESS' AND s.survey_status = 'PUBLISHED'
        GROUP BY users.profile_id
        ORDER BY surveys_issued DESC
        LIMIT 10`);

        for (const value of sqlQueryMostIssuedSurveys) {
          mostIssuedSurveys.push({
            businessId: value.business,
            numberOfSurveys: Number(value.surveys_issued),
          });
        }

        const mostCompletedAll: MostCompletedAll[] = [];
        const mostCompletedNear: MostCompletedNear[] = [];
        const mostCompletedPolkadot: MostCompletedPolkadot[] = [];
        const mostCompletedPolygon: MostCompletedPolygon[] = [];

        const sqlQueryMostCompletedSurveys = await getQueryResult(`
        SELECT count(sr_counts.survey_id) as completed, profile_id
        FROM (select survey_id FROM filling_queue
        WHERE filling_status = 'COMPLETE') sr_counts
        JOIN surveys on sr_counts.survey_id = surveys.survey_id
        GROUP by profile_id
        ORDER by completed
        LIMIT 10;`);

        const sqlQueryMostCompletedNear = await getQueryResult(`
        SELECT srw.profile_id AS business, COUNT(*) AS survey_completed FROM filling_queue fq
        JOIN survey_results sr ON fq.survey_id = sr.survey_id
        JOIN survey_rewards srw ON srw.survey_id = sr.survey_id
        WHERE fq.filling_status = 'COMPLETE' AND sr.reward_type = 'CRYPTO' AND srw.crypto_name = 'POLYGON'
        GROUP BY business
        ORDER BY survey_completed DESC
        LIMIT 10;`);
        const sqlQueryMostCompletedPolkadot = await getQueryResult(`
        SELECT srw.profile_id AS business, COUNT(*) AS survey_completed FROM filling_queue fq
        JOIN survey_results sr ON fq.survey_id = sr.survey_id
        JOIN survey_rewards srw ON srw.survey_id = sr.survey_id
        WHERE fq.filling_status = 'COMPLETE' AND sr.reward_type = 'CRYPTO' AND srw.crypto_name = 'POLKADOT'
        GROUP BY business
        ORDER BY survey_completed DESC
        LIMIT 10;`);
        const sqlQueryMostCompletedPolygon = await getQueryResult(`
        SELECT srw.profile_id AS business, COUNT(*) AS survey_completed FROM filling_queue fq
        JOIN survey_results sr ON fq.survey_id = sr.survey_id
        JOIN survey_rewards srw ON srw.survey_id = sr.survey_id
        WHERE fq.filling_status = 'COMPLETE' AND sr.reward_type = 'CRYPTO' AND srw.crypto_name = 'NEAR'
        GROUP BY business
        ORDER BY survey_completed DESC
        LIMIT 10;`);

        for (const value of sqlQueryMostCompletedSurveys) {
          mostCompletedAll.push({
            businessId: Number(value.profile_id),
            totalCompleted: Number(value.completed),
          });
        }

        for (const value of sqlQueryMostCompletedNear) {
          mostCompletedNear.push({
            businessId: Number(value.profile_id),
            numberOfSurveysNear: Number(value.survey_completed),
          });
        }

        for (const value of sqlQueryMostCompletedPolkadot) {
          mostCompletedPolkadot.push({
            businessId: Number(value.profile_id),
            numberOfSurveysPolkadot: Number(value.survey_completed),
          });
        }

        for (const value of sqlQueryMostCompletedPolygon) {
          mostCompletedPolygon.push({
            businessId: Number(value.profile_id),
            numberOfSurveysPolygon: Number(value.survey_completed),
          });
        }

        console.log(mostIssuedSurveys)

        mostCompletedSurveys = {
          mostCompletedAll: mostCompletedAll,
          mostCompletedNear: mostCompletedNear,
          mostCompletedPolkadot: mostCompletedPolkadot,
          mostCompletedPolygon: mostCompletedPolygon,
        }

        const cryptoIssuedNear: CryptoIssued[] = [];
        const cryptoIssuedPolkadot: CryptoIssued[] = [];
        const cryptoIssuedPolygon: CryptoIssued[] = [];
        const cryptoIssuedAllBlockchains: CryptoIssuedAllBlockchains[] = []; 

        const sqlQueryCryptoIssuedAllBlockchains = await getQueryResult(`
        SELECT b_id, SUM(reward_value_in_cash) AS total_crypto_in_cash 
        FROM (select s.survey_id, sr.profile_id as u_id, s.profile_id as b_id,
          srw.reward_id, srw.reward_type, srw.crypto_name, srw.crypto_amount,  srw.cash_amount, sr.reward_value_in_cash
          from surveys s
          join survey_results sr on s.survey_id = sr.survey_id
          join survey_rewards srw on s.survey_id = srw.survey_id
          where srw.reward_type = 'CRYPTO') AS business_crypto_totals
        GROUP BY b_id
        ORDER BY total_crypto_in_cash DESC
        LIMIT 10`);

        const sqlQueryCryptoIssuedNear = await getQueryResult(`
        SELECT b_id, SUM(crypto_amount) AS total_crypto_amount, SUM(reward_value_in_cash) AS total_crypto_in_cash 
        FROM (select s.survey_id, sr.profile_id as u_id, s.profile_id as b_id,
          srw.reward_id, srw.reward_type, srw.crypto_name, srw.crypto_amount,  srw.cash_amount, sr.reward_value_in_cash
          from surveys s
          join survey_results sr on s.survey_id = sr.survey_id
          join survey_rewards srw on s.survey_id = srw.survey_id
          where srw.reward_type = 'CRYPTO' and crypto_name = 'NEAR') AS business_crypto_totals
        GROUP BY b_id
        ORDER BY total_crypto_amount DESC
        LIMIT 10`);
        const sqlQueryCryptoIssuedPolkadot = await getQueryResult(`
        SELECT b_id, SUM(crypto_amount) AS total_crypto_amount, SUM(reward_value_in_cash) AS total_crypto_in_cash 
        FROM (select s.survey_id, sr.profile_id as u_id, s.profile_id as b_id,
          srw.reward_id, srw.reward_type, srw.crypto_name, srw.crypto_amount,  srw.cash_amount, sr.reward_value_in_cash
          from surveys s
          join survey_results sr on s.survey_id = sr.survey_id
          join survey_rewards srw on s.survey_id = srw.survey_id
          where srw.reward_type = 'CRYPTO' and crypto_name = 'POLKADOT') AS business_crypto_totals
        GROUP BY b_id
        ORDER BY total_crypto_amount DESC
        LIMIT 10`);
        const sqlQueryCryptoIssuedPolygon = await getQueryResult(`
        SELECT b_id, SUM(crypto_amount) AS total_crypto_amount, SUM(reward_value_in_cash) AS total_crypto_in_cash 
        FROM (select s.survey_id, sr.profile_id as u_id, s.profile_id as b_id,
          srw.reward_id, srw.reward_type, srw.crypto_name, srw.crypto_amount,  srw.cash_amount, sr.reward_value_in_cash
          from surveys s
          join survey_results sr on s.survey_id = sr.survey_id
          join survey_rewards srw on s.survey_id = srw.survey_id
          where srw.reward_type = 'CRYPTO' and crypto_name = 'POLYGON') AS business_crypto_totals
        GROUP BY b_id
        ORDER BY total_crypto_amount DESC
        LIMIT 10`);

        for (const value of sqlQueryCryptoIssuedAllBlockchains) {
          cryptoIssuedAllBlockchains.push({
            businessId: Number(value.b_id),
            cryptoValueInUSD: value.total_crypto_in_cash,
          });
        }
        for (const value of sqlQueryCryptoIssuedNear) {
          cryptoIssuedNear.push({
            businessId: Number(value.b_id),
            amountCrypto: value.total_crypto_amount,
            cryptoValueInUSD: value.total_crypto_in_cash,
          });
        }        
        for (const value of sqlQueryCryptoIssuedPolkadot) {
          cryptoIssuedPolkadot.push({
            businessId: Number(value.b_id),
            amountCrypto: value.total_crypto_amount,
            cryptoValueInUSD: value.total_crypto_in_cash,
          });
        }        
        for (const value of sqlQueryCryptoIssuedPolygon) {
          cryptoIssuedPolygon.push({
            businessId: Number(value.b_id),
            amountCrypto: value.total_crypto_amount,
            cryptoValueInUSD: value.total_crypto_in_cash,
          });
        }

        const sqlQueryMostCashValueIssuedViaSurveysViaStripe = await getQueryResult(`SELECT b_id, SUM(cash_amount) AS total_cash 
        FROM (select s.survey_id, sr.profile_id as u_id, s.profile_id as b_id,
          srw.reward_id, srw.reward_type, srw.cash_amount
          from surveys s
          join survey_results sr on s.survey_id = sr.survey_id
          join survey_rewards srw on s.survey_id = srw.survey_id
          where srw.reward_type = 'CASH') AS cash_rewards
        GROUP BY b_id
        ORDER BY total_cash DESC
        LIMIT 10`);

        for (const value of sqlQueryMostCashValueIssuedViaSurveysViaStripe) {
          mostCashValueIssuedViaSurveysViaStripe.push({
            businessId: Number(value.b_id),
            amountCash: value.total_cash,
          });
        }

        mostCryptocurrencyValueIssuedViaSurveys = {
          mostIssuedNear: cryptoIssuedNear,
          mostIssuedPolkadot: cryptoIssuedPolkadot,
          mostIssuedPolygon: cryptoIssuedPolygon,
          mostIssuedInTotal: cryptoIssuedAllBlockchains,
        };

        const sqlQuerySuccessfulSurveyCampaigns = await getQueryResult(`
        SELECT profile_id AS b_id, COUNT(*) AS num_campaigns
        FROM campaigns
        WHERE campaign_status = 'COMPLETE'
        GROUP BY b_id
        ORDER BY num_campaigns DESC
        LIMIT 10`);

        for (const value of sqlQuerySuccessfulSurveyCampaigns) {
          highestNumberOfSuccessfulSurveyCampaigns.push({
            businessId: Number(value.b_id),
            numberOfSuccessfulCampaigns: value.num_campaigns,
          });
        }

        const sqlQueryMostDiverseSurveyTopicsCovered = await getQueryResult(``);
        // await getQueryResult(`
        // SELECT camp.campaign_id, camp.profile_id AS business, s.survey_id, jsonb_array_length(category) AS topic_count, category
        // FROM surveys s
        // JOIN (
        //   select profile_id, campaign_id, cast(jsonb_array_elements(surveys) as INT) as survey_id
        //   from campaigns
        //   ) camp ON s.survey_id = camp.survey_id
        // WHERE category IS NOT NULL
        // GROUP BY business, s.survey_id
        // ORDER BY topic_count DESC;`);

        for (const value of sqlQueryMostDiverseSurveyTopicsCovered) {
          mostDiverseSurveyTopicsCovered.push({
            businessId: Number(value.business),
            campaignId: Number(value.campaign_id),
            numberOfTopics: Number(value.topic_count),
            allTopics: value.category,
          });
        }

        const sqlQueryCampaignParticipantsEngaged = await getQueryResult(`
        SELECT campaign_id, SUM(participant_count) participants_per_campaign, b_id FROM (SELECT s.campaign_id, s.survey_id, COUNT(sr.profile_id) AS participant_count, s.profile_id AS b_id
          FROM surveys s
          JOIN survey_results sr ON s.survey_id = sr.survey_id
          GROUP BY s.survey_id
          ORDER BY participant_count DESC) AS participants_per_survey
        WHERE campaign_id IS NOT NULL
        GROUP BY campaign_id, b_id
        ORDER BY participants_per_campaign DESC
        LIMIT 10;`);

        for (const value of sqlQueryCampaignParticipantsEngaged) {
          highestNumberOfParticipantsEngaged.push({
            businessId: Number(value.b_id),
            campaignId: Number(value.campaign_id),
            numberOfParticipants: value.participants_per_campaign,
          });
        }

        const sqlQueryHighestConversionRate = await getQueryResult(`
        SELECT b_id, COUNT(u_id) AS unique_participants, 
        COUNT(order_id) AS converted_purchasers,
        ROUND((COUNT(order_id)::decimal / COUNT(u_id)), 2) AS conversion_percentage
        FROM (SELECT order_id, b_id, u_id
          FROM (select mo.order_id, s.profile_id as b_id, fq.survey_id, fq.profile_id as u_id from filling_queue fq
            left join surveys s on s.survey_id = fq.survey_id
            left join marketplace_orders mo on mo.profile_id = fq.profile_id) AS raw_conversion_data
          GROUP BY order_id, b_id, u_id) AS unique_conversions
        GROUP BY b_id;`);

        for (const value of sqlQueryHighestConversionRate) {
          highestConversionRate.push({
            businessId: Number(value.b_id),
            conversionPercentageRate: Number(value.conversion_percentage),
            uniqueParticipants: Number(value.unique_participants),
            convertedPurchasers: Number(value.converted_purchasers),
          });
        }
        
        return {
          mostIssuedSurveys: mostIssuedSurveys,
          mostCompletedSurveys: mostCompletedSurveys,
          mostCryptocurrencyValueIssuedViaSurveys: mostCryptocurrencyValueIssuedViaSurveys,
          mostCashValueIssuedViaSurveysViaStripe: mostCashValueIssuedViaSurveysViaStripe,
          highestNumberOfSuccessfulSurveyCampaigns: highestNumberOfSuccessfulSurveyCampaigns,
          mostDiverseSurveyTopicsCovered: mostDiverseSurveyTopicsCovered,
          highestNumberOfParticipantsEngaged: highestNumberOfParticipantsEngaged,
          highestConversionRate: highestConversionRate,
        };
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    subscriptionLevel: async (_: any, req: any, context: any) => {
      try {
        const { profileId } = req.request;
        // Assuming you have a "subscriptions" table in your database
        const subscription = await getQueryResult(`
        SELECT subscription_level
        FROM subscriptions
        WHERE profile_id = $1::int
        AND (end_date IS NULL OR end_date >= CURRENT_DATE)
        ORDER BY start_date DESC
        LIMIT 1;
      `, [profileId]);

        if (subscription.length === 0) {
          // User doesn't have an active subscription
          return null;
        }

        // Extract the subscription level from the result
        const { subscriptionLevel } = subscription[0];

        return {
          id: profileId,
          subscriptionLevel,
        };
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    subscriptionHistory: async (_: any, req: any, context: any): Promise<any> => {
      try {
        const { profileId } = req.request;
        // Assuming you have a "subscriptions" table in your database
        const history = await getQueryResult(`         
      SELECT id, profile_id, subscription_level, start_date, end_date
      FROM subscriptions
      WHERE profile_id = $1::int
      ORDER BY start_date DESC;
        `, [profileId]);
        return history;
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    methodsPromotions: async (_: any, req: any, context: any): Promise<any> => {
      try {

        // Assuming you have a "subscriptions" table in your database
        const effectiveness = await getQueryResult(`         
        SELECT
        method_arrive as name,
        COUNT(*) AS total_count,
        (COUNT(*) * 1.0) / (SELECT COUNT(*) FROM public.survey_results) 
        AS effectiveness
      FROM public.survey_results
      WHERE method_arrive IS NOT NULL -- Ensure method is not NULL
      GROUP BY method_arrive
      ORDER BY effectiveness DESC`);
        return effectiveness;
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    ping: async (_: any, req: any, context: any): Promise<string> => {
      try {
        return "pong";
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
  },
  NFT: {
    __resolveType(obj, context, info){
      if (Object.keys(obj).filter((x) => 'seriesId')) {
        if (obj.hasOwnProperty('seriesId')) {
          return 'Nep171';                 
        } else {
          return 'Erc721';
        }
      }
    },
  },
  SearchResult: {
    __resolveType(obj, context, info){
      if (Object.keys(obj).filter((x) => 'type')) {
        //console.log('obj', obj)
        if (obj.type === 'SURVEYS') {
          return 'SurveySearchResult';
        } else if (obj.type === 'MARKETPLACE') {
          return 'MarketplaceSearchResult';     
        } else if (obj.type === 'TUTORIALS') {
          return 'TutorialSearchResult';
        } else if (obj.type === 'BUSINESSES') {
          return 'BusinessSearchResult';
        } else if (obj.type === 'ENDUSERS') {
          return 'EnduserSearchResult';                    
        } else {
          return 'EnduserSearchResult';
        }
      }
    },
  },
  SurveyElementItemValueType: {
    __resolveType(obj: any, context: any, info: any) {
      // Resolve the type based on its parent type
      //console.log('info.parentType.name ', obj, isNumber(obj.text))
      if (isNumber(parseInt(obj.text))) {
        //console.log('ValueType RADIOGROUP --- ', obj, context)
        //if (obj.hasOwnProperty('choices') && obj.type === 'RADIOGROUP') {
          const newobj = unconvertChoice(obj);
          //console.log('new obj ==>', newobj)
          //obj['choices'] = newchoices
        //}
        //return { newobj, context, info }e
      }

      switch (info.parentType.name) {
        case 'RadiogroupElement':
          return 'ValueType';
        case 'RankingElement':
          return 'TextValueType';
        default:
          return 'TextValueType';
      }
    },
  },
  SurveyElement: {
    __resolveType(obj, context, info){
      if (Object.keys(obj).filter((x) => 'type')) {
        //console.log('obj', obj)
        if (obj.type === 'TEXT') {
          return 'TextElement';
        } else if (obj.type === 'COMMENT') {
          return 'CommentElement';          
        } else if (obj.type === 'RANKING') {
          //console.log('RANKING --- ', obj, context)
          return 'RankingElement';
        } else if (obj.type === 'RADIOGROUP') {
          //console.log('RADIOGROUP --- ', obj, context)
          return 'RadiogroupElement';
        } else if (obj.type === 'RATING') {
          //console.log('RATING --- ', obj, context)
          return 'RatingElement';
        } else if (obj.type === 'BOOLEAN') {
          //console.log('BOOLEAN --- ', obj, context)
          return 'BooleanElement';                              
        } else {
          return null;
        }
      }
    },
  },
  Mutation: {
    //authenticate: AuthenticationResult;*/
    authenticate: async (
      _: any,
      req: any,
      context: any
    ): Promise<AuthenticationResult> => {
      
      try {
      //creating a access token
      const accessToken = jwt.sign(
        {
          email: req.request.email,
          signature: req.request.signature,
        },
        `${process.env.ACCESS_TOKEN_SECRET}`,
        {
          expiresIn: "10m",
        }
      );
      // Creating refresh token not that expiry of refresh
      //token is greater than the access token

      const refreshToken = jwt.sign(
        {
          email: req.request.email,
        },
        `${process.env.REFRESH_TOKEN_SECRET}`,
        {
          expiresIn: "1d",
        }
      );

      // Assigning refresh token in http-only cookie
      /*res.cookie('jwt', refreshToken, { httpOnly: true, 
              sameSite: 'None', secure: true, 
              maxAge: 24 * 60 * 60 * 1000 });*/
      //return res.json({ accessToken });
      
      
      const result: AuthenticationResult = {
        accessToken, //'4bed1e13-7792-4129-9f07-aaf7b88ba88f',
        refreshToken //'2d76d8d0-6fd6-426b-a017-61e0ceda0ad2'
      };

      //console.log('authenticate request', result)
      return result;

      } catch (error) {
        throw new ApolloError(`${error}`);
      }

    },
    //refresh: AuthenticationResult;
    refresh: async (_: any, req: any, context: any): Promise<AuthenticationResult> => {
      //creating a access token
      const accessToken = jwt.sign(
        {
          email: req.request.email,
          signature: req.request.signature,
        },
        `${process.env.ACCESS_TOKEN_SECRET}`,
        {
          expiresIn: "10m",
        }
      );
      // Creating refresh token not that expiry of refresh
      //token is greater than the access token

      const refreshToken = jwt.sign(
        {
          email: req.request.email,
        },
        `${process.env.REFRESH_TOKEN_SECRET}`,
        {
          expiresIn: "1d",
        }
      );

      // Assigning refresh token in http-only cookie
      /*res.cookie('jwt', refreshToken, { httpOnly: true, 
            sameSite: 'None', secure: true, 
            maxAge: 24 * 60 * 60 * 1000 });*/
      //return res.json({ accessToken });

      const result: AuthenticationResult = {
        accessToken: accessToken, //'4bed1e13-7792-4129-9f07-aaf7b88ba88f',
        refreshToken: refreshToken, //'2d76d8d0-6fd6-426b-a017-61e0ceda0ad2'
      };

      return result;
    },
    createProfile: async (_: any, req: any, context: any): Promise<User> => {
      try {
        const newuser: User = await addProfileDocumentToDB(
          'users', 
          req.request.email, 
          req.request?.issuer, 
          req.request.accountType, 
          req.request?.lastLoginAt, 
          req.request?.businessName, 
          req.request?.iden3issuer,
          req.request?.firstName,
          req.request?.lastName,
          req.request?.displayName,
          req.request?.category,
          req.request?.interests
          )
        return newuser;
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    updateProfile: async (_: any, req: any, context: any): Promise<User> => {
      try {
        const updateduser: User = await updateProfileDocumentDB('users', req.request)
        return updateduser;
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    inviteUser: async (_: any, req: any, context: any): Promise<User> => {
      try {
        const inviteduser: User = await addUserDocumentToDB('users', req.request.email, req.request.displayName, req.request.accountType, req.request?.bio, req.request?.avatar)
        return inviteduser;
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    createSurvey: async (_: any, req: any, context: any): Promise<Survey> => {
      try {
        const draftedsurvey: Survey = await addSurveyDocumentToDB('surveys', req.request)
        return draftedsurvey;
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    updateSurvey: async (_: any, req: any, context: any): Promise<Survey> => {
      const { surveyId, title, description, logo, profileId, type, status, pages, campaignType, tags, whiteList, funded} = req.request;
      const setClauses: string[] = [];
      const values: any[] = [];

      try {
        //const updatesurvey: Survey = await updateSurveyDocumentDB('surveys', req.request)
        //return updatesurvey;
        // Only add set clauses for fields that are not empty
        if (profileId !== undefined) {
          setClauses.push(`profile_id = $${values.length + 1}`);
          values.push(profileId);
        }
        if (title !== undefined) {
          setClauses.push(`title = $${values.length + 1}`);
          values.push(title);
        }
        if (description !== undefined) {
          setClauses.push(`description = $${values.length + 1}`);
          values.push(description);
        }
        if (logo !== undefined) {
          setClauses.push(`logo = $${values.length + 1}`);
          values.push(logo);
        }  
        if (tags !== undefined) {
          setClauses.push(`tags = $${values.length + 1}`);
          values.push(JSON.stringify(tags));
        }        
        if (surveyId !== undefined) {
          setClauses.push(`survey_id = $${values.length + 1}`);
          values.push(surveyId);
        }
        if (type !== undefined) {
          setClauses.push(`survey_type = $${values.length + 1}`);
          values.push(type);
        }
        if (status !== undefined) {
          setClauses.push(`survey_status = $${values.length + 1}`);
          values.push(status);
        }
        if (campaignType !== undefined) {
          setClauses.push(`campaign_type = $${values.length + 1}`);
          values.push(campaignType);
        }
        if (pages !== undefined) {
          setClauses.push(`pages = $${values.length + 1}`);
          values.push(JSON.stringify(pages));
        }      
        if (whiteList !== undefined) {
          setClauses.push(`white_list = $${values.length + 1}`);
          values.push(JSON.stringify(whiteList));
        }
        if (funded !== undefined) {
          setClauses.push(`funded = $${values.length + 1}`);
          values.push(funded);
        }

        setClauses.push(`updated_at = NOW()`);
        

        // Construct the SQL query string
        const query = `
          UPDATE surveys
          SET ${setClauses.join(', ')}
          WHERE survey_id = $${values.length + 1}
          RETURNING *
        `;

        //console.log('pages', JSON.stringify(pages))
      
        // Add the surveyId parameter to the values array
        values.push(surveyId);
        const updatesurvey: Survey = await getQueryResult(query, values);
        const queryUser = `SELECT * FROM users WHERE "profile_id" = $1`
        const user = await getQueryResult(queryUser, [profileId]);
        updatesurvey[0].user = user[0];
        return updatesurvey[0];

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    deleteSurvey: async (_: any, req: any, context: any) => {
      const { surveyId } = req.request;
      try {
        const resultQuery = {
          text: "DELETE FROM surveys WHERE survey_id = $1;",
          values: [surveyId],
        };
        await getQueryResult(resultQuery.text, resultQuery.values);
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    createFillingQueue: async (_: any, req: any, context: any): Promise<FillingQueue> => {
      const { profileId, surveyId, type, status, metadata } = req.request;
      try {
        // Construct the SQL query
        const query = `
          INSERT INTO filling_queue (profile_id, survey_id, filling_type, filling_status, metadata)
          VALUES ($1, $2, $3, $4, $5)
          ON CONFLICT DO NOTHING
          RETURNING *
        `;
        const values = [profileId, surveyId, type, status, metadata];
        // Execute the query
        const fillqueue: FillingQueue = await getQueryResult(query, values);
        return fillqueue[0];
      } catch (error) {
        throw new ApolloError(`${error}`);
      }

    },
    updateFillingQueue: async (_: any, req: any, context: any): Promise<FillingQueue> => {
      const { fillingId, profileId, surveyId, completedAt, type, status, claimId, metadata } = req.request;
      const setClauses: string[] = [];
      const values: any[] = [];

      try {      
        // Only add set clauses for fields that are not empty
        if (profileId !== undefined) {
          setClauses.push(`profile_id = $${values.length + 1}`);
          values.push(profileId);
        }
        if (surveyId !== undefined) {
          setClauses.push(`survey_id = $${values.length + 1}`);
          values.push(surveyId);
        }
        if (type !== undefined) {
          setClauses.push(`filling_type = $${values.length + 1}::text`);
          values.push(type);
        }
        if (status !== undefined) {
          setClauses.push(`filling_status = $${values.length + 1}::text`);
          values.push(status);
        }
        if (claimId !== undefined) {
          setClauses.push(`claim_id = $${values.length + 1}::text`);
          values.push(claimId);
        }
        if (metadata !== undefined) {
          setClauses.push(`metadata = $${values.length + 1}::text`);
          values.push(status);
        }
        //if (completedAt !== undefined) {
          //setClauses.push(`completed_at = $${values.length + 1}`);
          setClauses.push(`updated_at = $${values.length + 1}`);
          values.push(`NOW()`);          
          setClauses.push(`completed_at = $${values.length + 1}`);
          values.push(`NOW()`);
        //}
      
        // Construct the SQL query string
        const query = `
          UPDATE filling_queue
          SET ${setClauses.join(', ')}
          WHERE filling_id = $${values.length + 1}
          RETURNING *
        `;
      
        // Add the filling_id parameter to the values array
        values.push(fillingId);
        const updatefilling: FillingQueue = await getQueryResult(query, values);
        return updatefilling[0];
      } catch (error) {
        throw new ApolloError(`${error}`);
      }

    },
    deleteFillingQueue: async (_: any, req: any, context: any) => {
      const { fillingId } = req.request;
      try {
        // Construct the SQL query
        const query = `
          DELETE FROM filling_queue
          WHERE filling_id = $1
        `;
        const values = [fillingId];
        // Execute the query        
        await getQueryResult(query, values);
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    createSurveyResult: async (_: any, req: any, context: any): Promise<SurveyResult> => {
      const { profileId, surveyId, rewardId, rewardType, result, chainId } = req.request;
    //console.log('req.request', req.request)
      // Define the fields and values we'll use in the query
      const fields = [];
      const values = [];
      const placeholders = [];
    
      // Only add fields and values that are not undefined
      if (profileId !== undefined) {
        fields.push('profile_id');
        values.push(profileId);
      }
      if (surveyId !== undefined) {
        fields.push('survey_id');
        values.push(surveyId);
      }
      if (rewardId !== undefined) {
        fields.push('reward_id');
        values.push(rewardId);
      }
      if (rewardType !== undefined) {
        fields.push('reward_type');
        values.push(rewardType);
      }
      if (result !== undefined) {
        fields.push('result');
        values.push(JSON.stringify(result));
      }
      if (chainId !== undefined) {
        fields.push('chain_id');
        values.push(chainId);
      }

      // Create placeholders for the query, like $1, $2, etc.
      for (let i = 0; i < values.length; i++) {
        placeholders.push(`$${i + 1}`);
      }
    
      try {
        const resultQuery = {
          text:
            `INSERT INTO survey_results(${fields.join(', ')}) VALUES(${placeholders.join(', ')}) RETURNING *;`,
          values: values,
        };
        //console.log(resultQuery.text, resultQuery.values)
        const rows = await getQueryResult(resultQuery.text, resultQuery.values);
        const surveyResult = rows[0];
    
        return surveyResult;

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },    
    updateSurveyResult: async (_: any, req: any, context: any): Promise<SurveyResult> => {
      const { resultsId, rewardClaimed, rewardClaimedAt, cidHash, chainId, result } = req.request;
      const setClauses: string[] = [];
      const values: any[] = [];

      try {

        // Only add set clauses for fields that are not empty
        if (rewardClaimed!== undefined) {
          setClauses.push(`reward_claimed = $${values.length + 1}`);
          values.push(rewardClaimed);
        }
        if (rewardClaimedAt !== undefined) {
          setClauses.push(`reward_claimed_at = $${values.length + 1}`);
          values.push(rewardClaimedAt);
        }
        if (cidHash !== undefined) {
          setClauses.push(`cid_hash = $${values.length + 1}::text`);
          values.push(cidHash);
        }
        if (result !== undefined) {
          setClauses.push(`result = $${values.length + 1}::text`);
          values.push(result);
        }
        if (chainId !== undefined) {
          setClauses.push(`chain_id = $${values.length + 1}`);
          values.push(chainId);
        }
      
        // Construct the SQL query string
        const query = `
          UPDATE survey_results
          SET ${setClauses.join(', ')}
          WHERE results_id = $${values.length + 1}
          RETURNING *
        `;
      
        // Add the resultsId parameter to the values array
        values.push(resultsId);
        const rows: SurveyResult = await getQueryResult(query, values);
        const surveyResult = rows[0];

        return {
          resultsId: surveyResult.results_id,
          cidHash: surveyResult.cid_hash,
          result: surveyResult.result,
          createdAt: surveyResult.created_at,
        };
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    }, 
    deleteSurveyResult: async (_: any, req: any, context: any) => {
      const { resultsId } = req.request;
      try {
        const resultQuery = {
          text: "DELETE FROM survey_results WHERE results_id = $1;",
          values: [resultsId],
        };
        await getQueryResult(resultQuery.text, resultQuery.values);
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    scoreSurveyResult: async (_: any, req: any, context: any): Promise<SurveyResult> => {
      const { resultsId, score, credibilityScore } = req.request;
      const setClauses: string[] = [];
      const values: any[] = [];

      try {

        // Only add set clauses for fields that are not empty
        if (score !== undefined) {
          setClauses.push(`score = $${values.length + 1}`);
          values.push(score);
        }
        // Only add set clauses for fields that are not empty
        if (credibilityScore !== undefined) {
          setClauses.push(`credibility_score = $${values.length + 1}`);
          values.push(credibilityScore);
        }
      
        // Construct the SQL query string
        const query = `
          UPDATE survey_results
          SET ${setClauses.join(', ')}
          WHERE results_id = $${values.length + 1}
          RETURNING *
        `;
      
        // Add the resultsId parameter to the values array
        values.push(resultsId);
        const rows: SurveyResult = await getQueryResult(query, values);
        const surveyResult = rows[0];

        return {
          resultsId: surveyResult.results_id,
          cidHash: surveyResult.cid_hash,
          result: surveyResult.result,
          credibilityScore: surveyResult.credibilityScore,
          score: surveyResult.score,
          createdAt: surveyResult.created_at,
        };
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    }, 
    createEmbedSurveyResult: async (_: any, req: any, context: any): Promise<EmbedSurveyResult> => {
      const { fingerprint, surveyId, rewardId, rewardType, result, chainId } = req.request;
    //console.log('req.request', req.request)
      // Define the fields and values we'll use in the query
      const fields = [];
      const values = [];
      const placeholders = [];
    
      // Only add fields and values that are not undefined
      if (fingerprint !== undefined) {
        fields.push('fingerprint');
        values.push(fingerprint);
      }
      if (surveyId !== undefined) {
        fields.push('survey_id');
        values.push(surveyId);
      }
      if (rewardId !== undefined) {
        fields.push('reward_id');
        values.push(rewardId);
      }
      if (rewardType !== undefined) {
        fields.push('reward_type');
        values.push(rewardType);
      }
      if (result !== undefined) {
        fields.push('result');
        values.push(JSON.stringify(result));
      }
      if (chainId !== undefined) {
        fields.push('chain_id');
        values.push(chainId);
      }

      // Create placeholders for the query, like $1, $2, etc.
      for (let i = 0; i < values.length; i++) {
        placeholders.push(`$${i + 1}`);
      }
    
      try {
        const resultQuery = {
          text:
            `INSERT INTO embed_survey_results(${fields.join(', ')}) VALUES(${placeholders.join(', ')}) RETURNING *;`,
          values: values,
        };
        //console.log(resultQuery.text, resultQuery.values)
        const rows = await getQueryResult(resultQuery.text, resultQuery.values);
        const surveyResult = rows[0];
    
        return surveyResult;

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },    
    updateEmbedSurveyResult: async (_: any, req: any, context: any): Promise<EmbedSurveyResult> => {
      const { embedResultsId, rewardClaimed, rewardClaimedAt, cidHash, chainId, result } = req.request;
      const setClauses: string[] = [];
      const values: any[] = [];

      try {

        // Only add set clauses for fields that are not empty
        if (rewardClaimed!== undefined) {
          setClauses.push(`reward_claimed = $${values.length + 1}`);
          values.push(rewardClaimed);
        }
        if (rewardClaimedAt !== undefined) {
          setClauses.push(`reward_claimed_at = $${values.length + 1}`);
          values.push(rewardClaimedAt);
        }
        if (cidHash !== undefined) {
          setClauses.push(`cid_hash = $${values.length + 1}::text`);
          values.push(cidHash);
        }
        if (result !== undefined) {
          setClauses.push(`result = $${values.length + 1}::text`);
          values.push(result);
        }
        if (chainId !== undefined) {
          setClauses.push(`chain_id = $${values.length + 1}`);
          values.push(chainId);
        }
      
        // Construct the SQL query string
        const query = `
          UPDATE embed_survey_results
          SET ${setClauses.join(', ')}
          WHERE embed_results_id = $${values.length + 1}
          RETURNING *
        `;
      
        // Add the resultsId parameter to the values array
        values.push(embedResultsId);
        const rows: EmbedSurveyResult = await getQueryResult(query, values);
        const surveyResult = rows[0];

        return {
          embedResultsId: surveyResult.embed_results_id,
          fingerprint: surveyResult.fingerprint,
          cidHash: surveyResult.cid_hash,
          result: surveyResult.result,
          createdAt: surveyResult.created_at,
        };
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },     
    createSurveyReward: async (_: any, req: any, context: any): Promise<SurveyReward> => {
      const { profileId, mediaId, surveyId, rewardType, chainId } = req.request;
    
      // Define the fields and values we'll use in the query
      const fields = [];
      const values = [];
      const placeholders = [];
    
      // Only add fields and values that are not undefined
      if (mediaId !== undefined) {
        fields.push('media_id');
        values.push(mediaId);
      }
      if (surveyId !== undefined) {
        fields.push('survey_id');
        values.push(surveyId);
      }
      if (profileId !== undefined) {
        fields.push('profile_id');
        values.push(profileId);
      }
      if (rewardType !== undefined) {
        fields.push('reward_type');
        values.push(rewardType);
      }
      if (chainId !== undefined) {
        fields.push('chain_id');
        values.push(chainId);
      }
      // Create placeholders for the query, like $1, $2, etc.
      for (let i = 0; i < values.length; i++) {
        placeholders.push(`$${i + 1}`);
      }
    
      try {
        const query = `
          INSERT INTO survey_rewards (${fields.join(', ')})
          VALUES (${placeholders.join(', ')})
          RETURNING *
        `;
        const rows = await getQueryResult(query, values);
        const surveyreward: SurveyReward = rows[0];
        return surveyreward;
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    updateSurveyReward: async (_: any, req: any, context: any): Promise<SurveyReward> => {
      const { resultsId, mediaId, rewardId } = req.request;

      try {
        const resultQuery = {
          text:
            "UPDATE survey_rewards SET media_id = $1 WHERE reward_id = $2 RETURNING *;",
          values: [mediaId, rewardId],
        };
        const rows = await getQueryResult(resultQuery.text, resultQuery.values);
        const surveyreward: SurveyReward = rows[0];
        return surveyreward;

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    }, 
    claimSurveyReward: async (_: any, req: any, context: any): Promise<SurveyReward> => {
      const { profileId, mediaId, surveyId } = req.request;
      const API_SERVER_URL = process.env.API_SERVER_URL;

      const getWalletRewards = async () => {
        try {
          const { data } = await axios.get(`${API_SERVER_URL}/near/claimablerewards?profileId=${profileId}`);
          const qstn_balance = data.data;
          return qstn_balance;

        } catch(error: any) {
          console.log(error);
        }
      }

      /*const creditRewardBalance = async () => {
        try {
          const { data } = await axios.post(`${API_SERVER_URL}/near/creditreward`, { profileId: profileId, amount: 0.25 });
          const qstn_reward = data.data;
          return qstn_reward;

        } catch(error: any) {
          console.log(error);
        }
      }*/

      try {

      //await creditRewardBalance();

      const resultQuery = {
        text:
          "UPDATE survey_results SET reward_claimed = $1, reward_claimed_at=NOW() WHERE profile_id = $2 AND survey_id = $3 RETURNING *;",
        values: [true, profileId, surveyId],
      };
    
        const rows = await getQueryResult(resultQuery.text, resultQuery.values);
        const surveyreward: SurveyReward = rows[0];
        return surveyreward;
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    claimSurveyMedia: async (_: any, req: any, context: any): Promise<SurveyReward> => {
      const { profileId, mediaId, ownerAddress, surveyId } = req.request;

      try {
      const resultQuery = {
        text:
          "UPDATE survey_results SET media_claimed = $1, media_claimed_at=NOW(), media_claimed_from = $2 WHERE profile_id = $3 AND survey_id = $4 RETURNING *;",
        values: [true, ownerAddress, profileId, surveyId],
      };
    
        const rows = await getQueryResult(resultQuery.text, resultQuery.values);
        const surveyreward: SurveyReward = rows[0];
        return surveyreward;
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    claimMarketplaceOrderMedia: async (_: any, req: any, context: any): Promise<any> => {
      const { profileId, mediaId, ownerAddress, orderId } = req.request;

      try {
      const resultQuery = {
        text:
          "UPDATE marketplace_orders SET media_claimed = $1, media_claimed_at=NOW(), updated_at=NOW(), media_claimed_from = $2 WHERE profile_id = $3 AND order_id = $4 RETURNING *;",
        values: [true, ownerAddress, profileId, orderId],
      };
    
        const rows = await getQueryResult(resultQuery.text, resultQuery.values);
        const orderclaimed: any = rows[0];
        return orderclaimed;
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    registryUserPrize: async (_: any, req: any, context: any): Promise<any> => {
      const { rewardId, surveyId, resultsId, profileId, chainId } = req.request;
      try {

      const query = `
        INSERT INTO user_prizes (reward_id, survey_id, results_id, profile_id, chain_id)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING prize_id;
      `;
      const values = [rewardId, surveyId, resultsId, profileId, chainId];
    
      
        const rows = await getQueryResult(query, values);
        const userprize = rows[0];
        return userprize;
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    banUnbanUser: async (_: any, req: any, context: any): Promise<User> => {
      try {
        const { profileId, actionType } = req.request;
        await getQueryResult("INSERT INTO user_bans_unbans (profile_id, banunban_status) VALUES ($1, $2)", [profileId, actionType]);

        const resultQuery = {
          text:
            "UPDATE users SET account_status = $1, updated_at=NOW() WHERE profile_id = $2 RETURNING *;",
          values: [actionType === 'BAN' ? 'BANNED' : 'CONFIRMED', profileId],
        };

        const rows = await getQueryResult(resultQuery.text, resultQuery.values);
        const user = rows[0];
        return user;

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    verifyUser: async (_: any, req: any, context: any): Promise<User> => {
      try {
        const { profileId } = req.request;
        await getQueryResult("INSERT INTO user_verifications (profile_id) VALUES ($1)", [profileId]);
        
        const resultQuery = {
          text:
            "UPDATE users SET verified = $1, updated_at=NOW() WHERE profile_id = $2 RETURNING *;",
          values: [true, profileId],
        };

        const rows = await getQueryResult(resultQuery.text, resultQuery.values);
        const user = rows[0];
        return user;

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    createAnonymousUser: async (_: any, req: any, context: any): Promise<any> => {
      try {
        const { fingerprint } = req.request;
        const result = await getQueryResult("INSERT INTO anonusers (fingerprint) VALUES ($1) ON CONFLICT DO NOTHING RETURNING *;", [fingerprint]);
        return result[0];
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    updateAnonymousUser: async (_: any, req: any, context: any): Promise<any> => {
      try {
        const { fingerprint, profileId } = req.request;
        const result = await getQueryResult("UPDATE anonusers SET profile_id = $1 WHERE fingerprint = $2", [profileId, fingerprint]);
        return result[0];
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    createUserContract: async (_: any, req: any, context: any): Promise<any> => {
      try {
        const { profileId, surveyId, contractAddress, ownerAddress, contractName, contractType, network, input, output, funcCall } = req.request;
        const result = await getQueryResult(
          "INSERT INTO user_contracts (profile_id, survey_id, network, contract_name, contract_type, contract_address, owner_address, input, output, func_call) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *;", 
        [profileId, surveyId, network, contractName, contractType, contractAddress, ownerAddress, input, output, funcCall ]);
        return result[0];
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    createUserMembership: async (_: any, req: any, context: any): Promise<any> => {
      try {
        const { profileId, endAt } = req.request;
        await getQueryResult("INSERT INTO user_memberships (profile_id, end_at) VALUES ($1, $2)", [profileId, endAt]);

        const resultQuery = {
          text:
            "UPDATE users SET visibility = $1, updated_at=NOW() WHERE profile_id = $2 RETURNING *;",
          values: ["PREMIUM", profileId],
        };

        const rows = await getQueryResult(resultQuery.text, resultQuery.values);
        const user = rows[0];
        return user;

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    updateUserMembership: async (_: any, req: any, context: any): Promise<any> => {
      try {
        const { membershipId, profileId, membershipStatus, endAt } = req.request;
        const result = await getQueryResult("UPDATE user_memberships SET membership_status = $1, end_at = $2 WHERE membership_id = $3 AND profile_id = $4", [membershipStatus, endAt, membershipId, profileId]);
        return result[0];
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    createUserBoost: async (_: any, req: any, context: any): Promise<any> => {
      try {
        const { profileId, endAt } = req.request;
        const result = await getQueryResult("INSERT INTO user_boosts (profile_id, end_at) VALUES ($1, $2) RETURNING *;", [profileId, endAt]);
        return result[0];
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    updateUserBoost: async (_: any, req: any, context: any): Promise<any> => {
      try {
        const { boostId, profileId, boostStatus, endAt } = req.request;
        const result = await getQueryResult("UPDATE user_boosts SET boost_status = $1, end_at = $2 WHERE boost_id = $3 AND profile_id = $4 RETURNING *;", [boostStatus, endAt, boostId, profileId]);
        return result[0];
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    createWallet: async (_: any, req: any, context: any): Promise<any> => {
      const { profileId, credit, recipient } = req.request;

      const getWalletBalance = async () => {
        try {
          const { data } = await axios.get(`${API_SERVER_URL}/near/ansrbalance?profileId=${profileId}`);
          const qstn_balance = data.data;
          return qstn_balance;

        } catch(error: any) {
          console.log(error);
        }
      }

      const createWalletBalance = async () => {
        try {
          const { data } = await axios.post(`${API_SERVER_URL}/near/createwallet`, { profileId: profileId, balance: 0.0 });
          const qstn_balance = data.data;
          return qstn_balance;

        } catch(error: any) {
          console.log(error);
        }
      }

      try {


        /*getWalletBalance().then( async (currentWalletBalance) => {

          if (currentWalletBalance === 0) {
                try {
                  const { data } = await axios.post(`${API_SERVER_URL}/near/createwallet`, { profileId: profileId, balance: 0.0 });
                  const qstn_balance = data.data;
                  return qstn_balance;
        
                } catch(error: any) {
                  console.log(error);
                }
          }

        });*/

        const resultQuery = {
          text:
          `INSERT INTO wallets (credit, profile_id, recipient) VALUES ($1, $2, $3) RETURNING *;`,
          values: [credit, profileId, recipient],
        };

        const rows = await getQueryResult(resultQuery.text, resultQuery.values);
        const walletResult = rows[0];

        return walletResult;

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },  
    updateWallet: async (_: any, req: any, context: any): Promise<any> => {
      const { 
        credit, 
        recipient, 
        nearAddress,
        avaxAddress, 
        auroraAddress, 
        polygonAddress, 
        moonbeamAddress, 
        ethereumAddress, 
        tonAddress, 
        cronosAddress, 
        bobaAddress, 
        bscAddress, 
        opbnbAddress, 
        filecoinAddress, 
        baseAddress, 
        hederaAddress, 
        stellarAddress, 
        solanaAddress, 
        polkadotAddress, 
        icpAddress, 
        bitfinityAddress, 
        stripeAccountId, 
        walletId, 
        profileId 
      } = req.request;

      console.log('WALLET UPDATED ', { credit, recipient, stripeAccountId, walletId, profileId });

      const getWalletBalance = async () => {
        try {
          const { data } = await axios.get(`${API_SERVER_URL}/near/ansrbalance?profileId=${profileId}`);
          const qstn_balance = data.data;
          return qstn_balance;

        } catch(error: any) {
          console.log(error);
        }
      }

      try {
        const creditBalance = await getWalletBalance();
        const setClauses: string[] = [];
        const values: any[] = [];
    
        if (credit !== undefined) {
          setClauses.push(`credit = $${values.length + 1}`);
          values.push(credit);
        }
        if (recipient !== undefined) {
          setClauses.push(`recipient = $${values.length + 1}`);
          values.push(recipient);
        }
        if (nearAddress !== undefined) {
          setClauses.push(`near_address = $${values.length + 1}`);
          values.push(nearAddress);
        }
        if (avaxAddress !== undefined) {
          setClauses.push(`avax_address = $${values.length + 1}`);
          values.push(avaxAddress);
        }
        if (auroraAddress !== undefined) {
          setClauses.push(`aurora_address = $${values.length + 1}`);
          values.push(auroraAddress);
        }
        if (polygonAddress !== undefined) {
          setClauses.push(`polygon_address = $${values.length + 1}`);
          values.push(polygonAddress);
        }
        if (moonbeamAddress !== undefined) {
          setClauses.push(`moonbeam_address = $${values.length + 1}`);
          values.push(moonbeamAddress);
        }
        if (ethereumAddress !== undefined) {
          setClauses.push(`ethereum_address = $${values.length + 1}`);
          values.push(ethereumAddress);
        }
        if (tonAddress !== undefined) {
          setClauses.push(`ton_address = $${values.length + 1}`);
          values.push(tonAddress);
        }
        if (cronosAddress !== undefined) {
          setClauses.push(`cronos_address = $${values.length + 1}`);
          values.push(cronosAddress);
        }
        if (bobaAddress !== undefined) {
          setClauses.push(`boba_address = $${values.length + 1}`);
          values.push(bobaAddress);
        }        
        if (bscAddress !== undefined) {
          setClauses.push(`bsc_address = $${values.length + 1}`);
          values.push(bscAddress);
        }
        if (opbnbAddress !== undefined) {
          setClauses.push(`opbnb_address = $${values.length + 1}`);
          values.push(opbnbAddress);
        }
        if (filecoinAddress !== undefined) {
          setClauses.push(`filecoin_address = $${values.length + 1}`);
          values.push(filecoinAddress);
        }
        if (baseAddress!== undefined) {
          setClauses.push(`base_address = $${values.length + 1}`);
          values.push(baseAddress);
        }
        if (hederaAddress !== undefined) {
          setClauses.push(`hedera_address = $${values.length + 1}`);
          values.push(hederaAddress);
        }
        if (stellarAddress !== undefined) {
          setClauses.push(`stellar_address = $${values.length + 1}`);
          values.push(stellarAddress);
        }
        if (solanaAddress !== undefined) {
          setClauses.push(`solana_address = $${values.length + 1}`);
          values.push(solanaAddress);
        }        
        if (polkadotAddress !== undefined) {
          setClauses.push(`polkadot_address = $${values.length + 1}`);
          values.push(polkadotAddress);
        } 
        if (icpAddress !== undefined) {
          setClauses.push(`icp_address = $${values.length + 1}`);
          values.push(icpAddress);
        } 
        if (bitfinityAddress !== undefined) {
          setClauses.push(`bitfinity_address = $${values.length + 1}`);
          values.push(bitfinityAddress);
        }   
        if (stripeAccountId !== undefined) {
          setClauses.push(`stripe_account_id = $${values.length + 1}`);
          values.push(stripeAccountId);
        }   

        if (setClauses.length === 0) {
          throw new Error('No fields to update were provided');
        }
    
        values.push(walletId);
        values.push(profileId);
        const query = `
          UPDATE wallets
          SET ${setClauses.join(', ')}, updated_at = NOW()
          WHERE wallet_id = $${values.length-1} AND profile_id = $${values.length}
          RETURNING *
        `;
    
        const result = await getQueryResult(query, values);
        const walletResult = result[0];

        /*const resultQuery = {
          text:
          `UPDATE wallets SET credit=$1, recipient=$2, near_address=$3, aurora_address=$4, polygon_address=$5, moonbeam_address=$6, ethereum_address=$7, stripe_account_id=$8, avax_address=$9, updated_at=NOW() WHERE wallet_id=$10 AND profile_id=$11 RETURNING *;`,
          values: [creditBalance, recipient, nearAddress, auroraAddress, polygonAddress, moonbeamAddress, ethereumAddress, stripeAccountId, avaxAddress, walletId, profileId],
        };
        const rows = await getQueryResult(resultQuery.text, resultQuery.values);
        const walletResult = rows[0];*/


        return walletResult;

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    deleteWallet: async (_: any, req: any, context: any): Promise<any> => {
      const { walletId } = req.request;
      try {
        const resultQuery = {
          text: "DELETE FROM wallets WHERE wallet_id = $1;",
          values: [walletId],
        };
        await getQueryResult(resultQuery.text, resultQuery.values);
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    createSurveyReferral: async (_: any, req: any, context: any): Promise<any> => {
      try {
        const { surveyId, profileId, invitedEmail } = req.request;
        const result = await getQueryResult(
          "INSERT INTO survey_referrals (survey_id, profile_id, invited_email) VALUES ($1, $2, $3) RETURNING *",
          [surveyId, profileId, invitedEmail]
        );
        return result[0];
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    updateSurveyReferral: async (_: any, req: any, context: any): Promise<any> => {
      try {
        const { referralId, invitedId, invitedStatus, referralStatus, completedAt, invitedAt } = req.request;

        const result = await getQueryResult(
          "UPDATE survey_referrals SET invited_id = COALESCE($1, invited_id), invited_status = COALESCE($2, invited_status), referral_status = COALESCE($3, referral_status), invited_at = COALESCE($4, invited_at), completed_at = COALESCE($5, completed_at), updated_at = NOW() WHERE referral_id = $6 RETURNING *",
          [invitedId, invitedStatus, referralStatus, invitedAt, completedAt, referralId]
        );
        return result[0];
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    createUserRefferal: async (_: any, req: any, context: any): Promise<any> => {
      try {
        const { surveyId, profileId, invitedEmail } = req.request;
        const result = await getQueryResult(
          "INSERT INTO user_refferals (survey_id, profile_id, invited_email) VALUES ($1, $2, $3) RETURNING *",
          [surveyId, profileId, invitedEmail]
        );
        return result[0];
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    updateUserRefferal: async (_: any, req: any, context: any): Promise<any> => {
      try {
        const { refferalId, invitedId, invitedStatus, refferalStatus, completedAt, invitedAt } = req.request;

        const result = await getQueryResult(
          "UPDATE user_refferals SET invited_id = COALESCE($1, invited_id), invited_status = COALESCE($2, invited_status), refferal_status = COALESCE($3, refferal_status), invited_at = COALESCE($4, invited_at), completed_at = COALESCE($5, completed_at), updated_at = NOW() WHERE refferal_id = $6 RETURNING *",
          [invitedId, invitedStatus, refferalStatus, invitedAt, completedAt, refferalId]
        );
        return result[0];
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    createTransactionCredit: async (_: any, req: any, context: any): Promise<any> => {
      const { profileId, surveyId, resultsId, orderId, amount, hash, type, source, status } = req.request;

      try {

        //const isFunded = await getQueryResult("SELECT transaction_id FROM transactions_credits WHERE survey_id = $1 AND profile_id = $2 AND transaction_type = $3", [surveyId, profileId, type]);

        //if (!isFunded[0]?.transaction_id) {
        
          /*const creditUserWalletBalance = async () => {
            try {
              const { data } = await axios.post(`${API_SERVER_URL}/near/ansrcredit`, { profileId: profileId, amount: amount });
              const qstn_balance = data.data?.newbalance;
              return qstn_balance;
    
            } catch(error: any) {
              console.log(error);
            }
          }

          await creditUserWalletBalance()*/

          const queries = [
            `INSERT INTO transactions_credits (profile_id, survey_id, results_id, order_id, amount, transaction_type, transaction_hash, transaction_source, transaction_status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) ON CONFLICT DO NOTHING RETURNING *;`,
            `UPDATE wallets SET credit=credit+$1, updated_at=NOW() WHERE profile_id=$2;`
          ]
          const values = [
            [profileId, surveyId, resultsId, orderId, amount, type, hash, source, status],
            [amount, profileId]
          ]
          const rows = await getTransactionQueryResult(queries, values);
          const transactionResult = rows[0];
          return transactionResult;

        //}

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    createTransactionDebit: async (_: any, req: any, context: any): Promise<any> => {
      const { profileId, surveyId, resultsId, orderId, amount, hash, type, source, status } = req.request;
      
      try {

        //const isFunded = await getQueryResult("SELECT transaction_id FROM transactions_credits WHERE survey_id = $1 AND profile_id = $2 AND transaction_type = $3", [surveyId, profileId, type]);

        //if (!isFunded[0]?.transaction_id) {

          const queries = [
            `INSERT INTO transactions_credits (profile_id, survey_id, results_id, order_id, amount, transaction_type, transaction_hash, transaction_source, transaction_status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) ON CONFLICT DO NOTHING RETURNING *;`,
            `UPDATE wallets SET credit=credit-$1, updated_at=NOW() WHERE profile_id=$2;`
          ]
          const values = [
            [profileId, surveyId, resultsId, orderId, amount, type, hash, source, status],
            [amount, profileId]
          ]

          /*const debitUserWalletBalance = async () => {
            try {
              const { data } = await axios.post(`${API_SERVER_URL}/near/ansrdebit`, { profileId: profileId, amount: parseFloat(amount) });
              const qstn_balance = data.data?.newbalance;
              return qstn_balance;
    
            } catch(error: any) {
              console.log(error);
            }
          }

          await debitUserWalletBalance()*/
          
          const rows = await getTransactionQueryResult(queries, values);
          const transactionResult = rows[0];
          return transactionResult;

        //}

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    createNftGallery: async (_: any, req: any, context: any): Promise<any> => {
      const API_SERVER_URL = process.env.API_SERVER_URL;

      const delay = ms => new Promise((resolve, reject) => setTimeout(resolve, ms));
      let nfts;

      const getNfts = async () => {

        try {
          const { data } = await axios.get(`${API_SERVER_URL}/near`);
          
          const nfts = data.data.map((nft: any) => ({
            seriesId: nft.series_id,
            metadataTitle: nft.metadata.title,
            metadataDescription: nft.metadata.description,
            metadataMedia: nft.metadata.media,
            metadataMediaHash: nft.metadata.media_hash,
            metadataCopies: nft.metadata.copies,
            metadataIssuedAt: nft.metadata.issued_at,
            metadataExpiresAt: nft.metadata.expires_at,
            metadataStartsAt: nft.metadata.starts_at,
            metadataUpdatedAt: nft.metadata.updated_at,
            metadataExtra: nft.metadata.extra,
            metadataReference: nft.metadata.reference,
            metadataReferenceHash: nft.metadata.reference_hash,
            royalty: nft.royalty,
            ownerId: nft.owner_id
          }));

          return nfts;

        } catch(error: any) {
          console.log(error);
        }

      }
      

      try {

        //const client = await pool.connect();
        try {
          //await client.query('BEGIN');
          const { profileId, name, items } = req.request;

          /*const { rows: [gallery] } = await client.query(`
            INSERT INTO nft_gallery (name, profile_id)
            VALUES ($1, $2)
            RETURNING nft_gallery_id
          `, [name, profileId]);*/

          const query = `
          INSERT INTO nft_gallery (name, profile_id)
          VALUES ($1, $2)
          RETURNING nft_gallery_id
          `;
          const values = [name, profileId]
    
          const gallery = await getQueryResult(query, values);

          const galleryId = gallery[0].nft_gallery_id;
          await Promise.all(items.map(async (item: any) => {
            const { contractAddress, tokenId, chainId } = item;
            //console.log({ contractAddress, tokenId, chainId })
            
            let nft;
            while (true) {
              nfts = await getNfts();
              //console.log(nfts[0])
          
              if (nfts.find(nft => nft.seriesId === parseInt(tokenId))) {
                nft = nfts.find(nft => nft.seriesId === parseInt(tokenId));
                break;
              }
          
              await delay(3000);
            }                    

            if (!nft) { 
              //throw new Error(`NFT with series ID ${tokenId} not found in data`);
              console.log(`NFT with series ID ${tokenId} not found in data`);
              //nfts = await getNfts();
            }

            const nftRow = await getQueryResult(`
              INSERT INTO nep171 (
                series_id,
                metadata_title,
                metadata_description,
                metadata_media,
                metadata_media_hash,
                metadata_copies,
                metadata_issued_at,
                metadata_expires_at,
                metadata_starts_at,
                metadata_updated_at,
                metadata_extra,
                metadata_reference,
                metadata_reference_hash,
                royalty,
                creator_id,
                owner_id
              ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
              RETURNING nft_id
            `, [
              nft.seriesId,
              nft.metadataTitle,
              nft.metadataDescription,
              nft.metadataMedia,
              nft.metadataMediaHash,
              nft.metadataCopies,
              nft.metadataIssuedAt,
              nft.metadataExpiresAt,
              nft.metadataStartsAt,
              nft.metadataUpdatedAt,
              nft.metadataExtra,
              nft.metadataReference,
              nft.metadataReferenceHash,
              nft.royalty,
              profileId,
              nft.ownerId
            ]);
            const nftId = nftRow[0].nft_id;
            await getQueryResult(`
              INSERT INTO nft_gallery_items (nft_id, nft_gallery_id)
              VALUES ($1, $2) RETURNING *;
            `, [nftId, galleryId]);
          }));

          return galleryId;

        } catch (error) {
          console.log(error)
          throw error;
        } 

      } catch (error) {
        throw new ApolloError(`${error}`);
     
      }
    },
    createErc721NftGallery: async (_: any, req: any, context: any): Promise<any> => {
      try {
        const { profileId, name, items, chainId } = req.request;
    
        const query = `
          INSERT INTO nft_gallery (name, profile_id, chain_id)
          VALUES ($1, $2, $3)
          RETURNING nft_gallery_id;
        `;
        const values = [name, profileId, chainId];
    
        const galleryResult = await getQueryResult(query, values);
        const galleryId = galleryResult[0].nft_gallery_id;
        let nftId = 0;
    
        await Promise.all(items.map(async (item: any) => {
          const { contractAddress, tokenId, chainId, symbol, name, description, contentUri, ercType } = item;
    
          // Replace this with your logic to retrieve NFT details using contractAddress and tokenId
          //const nft = await retrieveNftDetails(contractAddress, tokenId);
          const nft: Erc721 = item;

          if (!nft) {
            console.log(`NFT with series ID ${tokenId} not found in data`);
          }
    
          const nftQuery = `
            INSERT INTO erc721 (
              contract_name,
              contract_address,
              symbol,
              token_id,
              name,
              description,
              content_uri,
              original_content,
              chain_id,
              collection_name,
              erc_type
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
            RETURNING nft_id;
          `;
    
          const nftValues = [
            nft.contractName ? nft.contractName : name,
            nft.contractAddress,
            nft.symbol,
            nft.tokenId ? nft.tokenId : 0,
            nft.name ? nft.name : name,
            nft.description,
            nft.contentUri,
            nft.originalContent,
            nft.chainId,
            nft.collectionName ? nft.collectionName : name,
            nft.ercType,
          ];
    
          const nftResult = await getQueryResult(nftQuery, nftValues);
          nftId = nftResult[0].nft_id;
    
          const nftGalleryItemQuery = `
            INSERT INTO nft_gallery_items (nft_id, nft_gallery_id, chain_id)
            VALUES ($1, $2, $3)
            RETURNING *;
          `;
          await getQueryResult(nftGalleryItemQuery, [nftId, galleryId, chainId]);
        }));
    
        return nftId;
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },    
    syncNftGallery: async (_: any, req: any, context: any): Promise<any> => {
      const { contractAddress, profileId, name, items } = req.request;

      const getNfts = async () => {
        try {
          const { data } = await axios.get(`${API_SERVER_URL}/near`);
          const nfts = data.data.map((nft: any) => ({
            seriesId: nft.series_id,
            metadataTitle: nft.metadata.title,
            metadataDescription: nft.metadata.description,
            metadataMedia: nft.metadata.media,
            metadataMediaHash: nft.metadata.media_hash,
            metadataCopies: nft.metadata.copies,
            metadataIssuedAt: nft.metadata.issued_at,
            metadataExpiresAt: nft.metadata.expires_at,
            metadataStartsAt: nft.metadata.starts_at,
            metadataUpdatedAt: nft.metadata.updated_at,
            metadataExtra: nft.metadata.extra,
            metadataReference: nft.metadata.reference,
            metadataReferenceHash: nft.metadata.reference_hash,
            royalty: nft.royalty,
            ownerId: nft.owner_id
          }));

          return nfts;

        } catch(error: any) {
          console.log(error);
        }

      }

      try {
        
        const contractMedias = await getNfts();
        contractMedias.map( async (media) => {
          //console.log('title ==>', media.metadataTitle)
          const mediaQuery = {
            text: "SELECT nft_id FROM nep171 WHERE series_id = $1;",
            values: [media.seriesId],
          };
          const hasMedia = await getQueryResult(mediaQuery.text, mediaQuery.values);
          //console.log('# hasMedia ==> ', hasMedia)


          if (hasMedia.length === 0 && media.metadataTitle) {
              
            const nftRow = await getQueryResult(`
            INSERT INTO nep171 (
              series_id,
              metadata_title,
              metadata_description,
              metadata_media,
              metadata_media_hash,
              metadata_copies,
              metadata_issued_at,
              metadata_expires_at,
              metadata_starts_at,
              metadata_updated_at,
              metadata_extra,
              metadata_reference,
              metadata_reference_hash,
              royalty,
              creator_id,
              owner_id
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
            RETURNING nft_id
          `, [
            media.seriesId,
            media.metadataTitle,
            media.metadataDescription,
            media.metadataMedia,
            media.metadataMediaHash,
            media.metadataCopies,
            media.metadataIssuedAt,
            media.metadataExpiresAt,
            media.metadataStartsAt,
            media.metadataUpdatedAt,
            media.metadataExtra,
            media.metadataReference,
            media.metadataReferenceHash,
            media.royalty,
            profileId,
            media.ownerId
          ]);


          }

        });

        return contractMedias;

      } catch (error) {
        throw new ApolloError(`${error}`);
     
      }
    },
    syncMediaProducts: async (_: any, req: any, context: any): Promise<any> => {
      const API_SERVER_URL = process.env.API_SERVER_URL;
      const { contractAddress } = req.request;

      const getNfts = async () => {
        try {
          const { data } = await axios.get(`${API_SERVER_URL}/near`);
          const nfts = data.data.map((nft: any) => ({
            seriesId: nft.series_id,
            metadataTitle: nft.metadata.title,
            metadataDescription: nft.metadata.description,
            metadataMedia: nft.metadata.media,
            metadataMediaHash: nft.metadata.media_hash,
            metadataCopies: nft.metadata.copies,
            metadataIssuedAt: nft.metadata.issued_at,
            metadataExpiresAt: nft.metadata.expires_at,
            metadataStartsAt: nft.metadata.starts_at,
            metadataUpdatedAt: nft.metadata.updated_at,
            metadataExtra: nft.metadata.extra,
            metadataReference: nft.metadata.reference,
            metadataReferenceHash: nft.metadata.reference_hash,
            royalty: nft.royalty,
            ownerId: nft.owner_id
          }));

          return nfts;

        } catch(error: any) {
          console.log(error);
        }

      }

      try {
        
        const contractMedias = await getNfts();
        contractMedias.map( async (media) => {
          //console.log('title ==>', media.metadataTitle)
          const mediaQuery = {
            text: "SELECT product_id FROM marketplace_products WHERE media_id = $1;",
            values: [media.seriesId],
          };
          const hasMedia = await getQueryResult(mediaQuery.text, mediaQuery.values);
          //console.log('# hasMedia ==> ', hasMedia);


          /**
           
          {
            seriesId: 69,
            metadataTitle: 'New QSTN genesis',
            metadataDescription: 'New QSTN genesis version 1.0.0',
            metadataMedia: 'https://bafkreiedlggscsltzv4wbpejqvgtejxfsfguqdmihbh36lyxofhrx356xq.ipfs.nftstorage.link',
            metadataMediaHash: null,
            metadataCopies: 0,
            metadataIssuedAt: null,
            metadataExpiresAt: null,
            metadataStartsAt: null,
            metadataUpdatedAt: null,
            metadataExtra: null,
            metadataReference: null,
            metadataReferenceHash: null,
            royalty: null,
            ownerId: 'qstn-alpha.testnet'
          },

           */


          if (hasMedia.length === 0) {
              
              const name = media.metadataTitle ? media.metadataTitle : "No title media";
              const description = media.metadataDescription;
              const image = media.metadataMedia;
              const productType = 'MEDIA';
              const price = 0;
              const productStatus = 'PENDING';
              const duration = media.metadataCopies ? media.metadataCopies : 0;
              const mediaId = media.seriesId;
              const metadata = null;
              const whiteList = null; 
              const ownerId = media.ownerId;
              const sellerId = 1; 

            const result = await getQueryResult(
              "INSERT INTO marketplace_products (name, description, image, product_type, price, product_status, duration, media_id, metadata, white_list, owner_id, seller_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *",
              [name, description, image, productType, price, productStatus, duration, mediaId, metadata, whiteList, ownerId, sellerId]
            );

          }

        });

        /*const { name, description, image, productType, price, productStatus, duration, mediaId, metadata, whiteList, ownerId, sellerId } = req.request;
        
        const result = await getQueryResult(
          "INSERT INTO marketplace_products (name, description, image, product_type, price, product_status, duration, media_id, metadata, white_list, owner_id, seller_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *",
          [name, description, image, productType, price, productStatus, duration, mediaId, metadata, whiteList, ownerId, sellerId]
        );
        return result[0];*/
        //console.log('# contractMedias ==>', contractMedias)
        return contractMedias;

      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    createProduct: async (_: any, req: any, context: any): Promise<any> => {
      try {
        const { name, description, image, productType, price, productStatus, duration, mediaId, metadata, whiteList, ownerId, sellerId, chainId } = req.request;
        const result = await getQueryResult(
          "INSERT INTO marketplace_products (name, description, image, product_type, price, product_status, duration, media_id, metadata, white_list, owner_id, seller_id, chain_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *",
          [name, description, image, productType, price, productStatus, duration, mediaId, metadata, whiteList, ownerId, sellerId, chainId]
        );
        return result[0];
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    updateProduct: async (_: any, req: any, context: any): Promise<any> => {
      try {
        const { productId, name, description, image, productType, price, productStatus, duration, mediaId, metadata, whiteList, ownerId, sellerId, chainId } = req.request;
        const setClauses: string[] = [];
        const values: any[] = [];
    
        if (name !== undefined) {
          setClauses.push(`name = $${values.length + 1}`);
          values.push(name);
        }
        if (description !== undefined) {
          setClauses.push(`description = $${values.length + 1}`);
          values.push(description);
        }
        if (image !== undefined) {
          setClauses.push(`image = $${values.length + 1}`);
          values.push(image);
        }
        if (productType !== undefined) {
          setClauses.push(`product_type = $${values.length + 1}`);
          values.push(productType);
        }
        if (price !== undefined) {
          setClauses.push(`price = $${values.length + 1}`);
          values.push(price);
        }
        if (productStatus !== undefined) {
          setClauses.push(`product_status = $${values.length + 1}`);
          values.push(productStatus);
        }
        if (duration !== undefined) {
          setClauses.push(`duration = $${values.length + 1}`);
          values.push(duration);
        }
        if (mediaId !== undefined) {
          setClauses.push(`media_id = $${values.length + 1}`);
          values.push(mediaId);
        }
        if (metadata !== undefined) {
          setClauses.push(`metadata = $${values.length + 1}`);
          values.push(metadata);
        }
        if (whiteList !== undefined) {
          setClauses.push(`white_list = $${values.length + 1}`);
          values.push(whiteList);
        }
        if (sellerId !== undefined) {
          setClauses.push(`seller_id = $${values.length + 1}`);
          values.push(sellerId);
        }        
        if (ownerId !== undefined) {
          setClauses.push(`owner_id = $${values.length + 1}`);
          values.push(ownerId);
        }
        if (chainId !== undefined) {
          setClauses.push(`chain_id = $${values.length + 1}`);
          values.push(chainId);
        }


        if (setClauses.length === 0) {
          throw new Error('No fields to update were provided');
        }
    
        values.push(productId);
        const query = `
          UPDATE marketplace_products
          SET ${setClauses.join(', ')}, updated_at = NOW()
          WHERE product_id = $${values.length}
          RETURNING *
        `;
    
        const result = await getQueryResult(query, values);
        return result[0];
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    deleteProduct: async (_: any, req: any, context: any) => {
      const { productId } = req.request;
      try {
        const resultQuery = {
          text: "DELETE FROM marketplace_products WHERE results_id = $1;",
          values: [productId],
        };
        await getQueryResult(resultQuery.text, resultQuery.values);
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    createMarketplaceOrder: async (_: any, req: any, context: any) => {
      try {
        const { profileId, productId, orderAmount, orderStatus, orderType, metadata, chainId } = req.request;
        const result = await getQueryResult(
          "INSERT INTO marketplace_orders (profile_id, product_id, order_amount, order_status, order_type, metadata, chain_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
          [profileId, productId, orderAmount, orderStatus, orderType, JSON.stringify(metadata), chainId]
        );
        return result[0];
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    updateMarketplaceOrder: async (_: any, req: any, context: any) => {
      try {
        const { orderId, orderStatus, orderAmount, metadata } = req.request;
        const result = await getQueryResult(
          "UPDATE marketplace_orders SET order_status = COALESCE($1, order_status), order_amount = COALESCE($2, order_amount), metadata = COALESCE($3, metadata), updated_at = NOW() WHERE order_id = $4 RETURNING *",
          [orderStatus, orderAmount, metadata, orderId]
        );
        return result[0];
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    createSurveyGating: async (_: any, req: any, context: any) => {
      try {
        const { surveyId, profileId, requirements } = req.request;
        const result = await getQueryResult(
          "INSERT INTO survey_gating (survey_id, profile_id, requirements) VALUES ($1, $2, $3) RETURNING *",
          [surveyId, profileId, requirements]
        );
        return result[0];
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    updateSurveyGating: async (_: any, req: any, context: any) => {
      try {
        const { gateId, surveyId, profileId, requirements } = req.request;

        // Construct the SQL query
        const setClauses: string[] = [];
        const values: any[] = [];

        if (surveyId !== undefined) {
          setClauses.push(`survey_id = $${values.length + 1}`);
          values.push(surveyId);
        }
        if (profileId !== undefined) {
          setClauses.push(`profile_id = $${values.length + 1}`);
          values.push(profileId);
        }
        if (requirements !== undefined) {
          setClauses.push(`requirements = $${values.length + 1}`);
          values.push(requirements);
        }

        if (setClauses.length === 0) {
          throw new ApolloError("No valid fields for update");
        }

        values.push(gateId);

        // Construct the SQL query string
        const query = `
          UPDATE survey_gating
          SET ${setClauses.join(", ")}, updated_at = NOW()
          WHERE gate_id = $${values.length}
          RETURNING *`;

        // Execute the query
        const result = await getQueryResult(query, values);
        return result[0];
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    syncPageviewSources: async (_: any, req: any, context: any) => {
      try {
        const { time } = req.request;

        // Fetch data from API using the provided time as a parameter
        //const apiData = await fetchDataFromAPI(time);

        const sdk = require('api')('@mixpaneldevdocs/v3.22#7onfoghli0iftuo');

        sdk.auth('qstn-admin.d9d901.mp-service-account', 'Nyx6AfDRVAdMyLJujohF7l7znn6L5yt1');
        sdk.rawEventExport({
          project_id: '2987595',
          from_date: dayjs().subtract(1, 'day').format('YYYY-MM-DD'), //'2023-05-29',
          to_date: dayjs().format('YYYY-MM-DD'),
          accept: 'text/plain',
          'accept-encoding': 'gzip'
        })
        .then( async ( result: any ) => {
          const newdata = result?.data.split("\n");
          newdata.map((ndata) => {
            ndata.replace("'","");
            return ndata
          })
          // Fetch the latest entry time from the database
          const latestEntryQuery = 'SELECT MAX(time) AS latest_entry FROM pageviews;';
          const rows = await getQueryResult(latestEntryQuery, []);

          try {
            for (let i = 0; i < newdata.length; i++) {
              const parsedData = newdata[i] ? JSON.parse(newdata[i]) : {};
            
          
        const latestEntryTime = rows[0].latest_entry || 0;

        // Filter out the already existing entries from the API data        
        if (parsedData?.properties.time > latestEntryTime) {

          const insertQuery = `
            INSERT INTO pageviews (
              event, time, distinct_id, browser, browser_version, city, current_url,
              device_id, initial_referrer, initial_referring_domain, insert_id, lib_version,
              mp_api_endpoint, mp_api_timestamp_ms, os, region, screen_height, screen_width,
              user_id, mp_country_code, mp_lib, mp_processing_time_ms, page
            )
            VALUES (
              $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17,
              $18, $19, $20, $21, $22, $23
            );
          `;

          const insertValues = [
            parsedData?.event,
            parsedData?.properties.time,
            parsedData?.properties.distinct_id,
            parsedData?.properties.$browser,
            parsedData?.properties.$browser_version,
            parsedData?.properties.$city,
            parsedData?.properties.$current_url,
            parsedData?.properties.$device_id,
            parsedData?.properties.$initial_referrer,
            parsedData?.properties.$initial_referring_domain,
            parsedData?.properties.$insert_id,
            parsedData?.properties.$lib_version,
            parsedData?.properties.$mp_api_endpoint,
            parsedData?.properties.$mp_api_timestamp_ms,
            parsedData?.properties.$os,
            parsedData?.properties.$region,
            parsedData?.properties.$screen_height,
            parsedData?.properties.$screen_width,
            parsedData?.properties.$user_id,
            parsedData?.properties.mp_country_code,
            parsedData?.properties.mp_lib,
            parsedData?.properties.mp_processing_time_ms,
            parsedData?.properties.page,
          ];

          await getQueryResult(insertQuery, insertValues);
        

          }

          }
            
          } catch (error) {
            console.log(error)
          }
          
        })
        .catch(err => console.log(err));


      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
  },
};

export default ServiceResolvers;
