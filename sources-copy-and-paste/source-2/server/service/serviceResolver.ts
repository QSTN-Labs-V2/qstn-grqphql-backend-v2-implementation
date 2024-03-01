import * as dotenv from "dotenv";
import * as crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import dayjs from "dayjs";
import { NextResponse } from "next/server";
import { ApolloError } from "apollo-server-express";
import { getQueryResult } from "../db/utils";

import {
  Resolvers,
  SurveyTakerInfo,
  StatusAndDuration,
  UserWalletsConnected,
  PurchaseAmountTotals,
  PurchaseInfoHistory,
  CompletionTimeOfDay,
  UserCompletionTimeOfDay,
  SurveyDrafterInfo,
  //marketplaceData
  FastestDraftSurvey,
  SlowestTimeDraftSurvey,
  //  UnclaimedRewardStatusAndDuration,
  WalletsConnected,
  UserAverageSessionTime,
  AverageTimeDraftingSurvey,
  // AverageTimeLoadRewards,
  RankedTagsIssuedSurveys,
  MostCommonSurveyLengthPreferred,
  AverageInviteResponseTime,
  CorrelationSurveyComplexityAndCompletion,
  // ConversionRateSurveysToNFTPurchases,
  // SubscriptionLevelMarketplace,
  // SubscriptionHistoryMarketplace,
  //userData
  FastestCompleteSurvey,
  SlowestCompleteSurvey,
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
} from "../types/resolvers";
import { GraphQLError } from "graphql";

dotenv.config();

const API_SERVER_URL = process.env.API_SERVER_URL;

// prettier-ignore
const ServiceResolvers: Resolvers = {
  Query: {
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
    //ping: String!
    ping: async (_: any, req: any, context: any): Promise<string> => {
      try {
        return "pong";
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },


    allMediaBoughtAndSold: async (_: any, req: any, context: any) => {
      try {
        const items = await getQueryResult(`
        SELECT DISTINCT(media_id) media_id
        FROM marketplace_products mp
        LEFT JOIN marketplace_orders mo ON mp.product_id = mo.product_id
        WHERE mp.product_type = 'MEDIA'
      `);

        return items.map((x) => ({
          mediaId: x.media_id
        }));
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },

    mediaSoldByCompanyOrUser: async (_: any, req: any, context: any) => {
      try {
        const {profileId} = req;

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
    saleHistoryPerBusiness: async (_: any, req: any, context: any) => {
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
        throw new GraphQLError(`${error}`);
      }
    },

    purchaseHistoryPerUser: async (_: any, req: any, context: any) => {
      return [];
    },

    dataUser: async (_:any, req: any, context: any) => {
      try {

        let fastestCompleteSurvey: FastestCompleteSurvey = {}
        let slowestCompleteSurvey: SlowestCompleteSurvey = {}
        let unclaimedRewardStatusAndDuration: UnclaimedRewardStatusAndDuration = {}
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

        // const sqlQuery = await getQueryResult(``);

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
          subscriptionHistory: subscriptionHistory
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
    }
  },
  
};

export default ServiceResolvers;
