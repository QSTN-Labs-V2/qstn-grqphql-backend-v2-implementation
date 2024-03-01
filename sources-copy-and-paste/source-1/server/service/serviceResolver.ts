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
  //users
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
  //businesses
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
} from "../types/resolvers";
import { GraphQLError } from "graphql";

dotenv.config();

const API_SERVER_URL = process.env.API_SERVER_URL;

const ServiceResolvers: Resolvers = {
  Query: {
    topBusiness: async (_: any, req: any, context: any): Promise<any> => {
      const labels: string[] = [];
      const data: number[] = [];
      const { businessIds } = req.request;

      try {
        const totalBusiness =
          businessIds !== undefined
            ? await getQueryResult(
                `SELECT COUNT(*) AS total_business FROM users WHERE account_type = 'BUSINESS' AND profile_id = ANY($1::int[])`,
                [businessIds]
              )
            : await getQueryResult(
                `SELECT COUNT(*) AS total_business FROM users WHERE account_type = 'BUSINESS'`,
                []
              );

        const totalSurveys =
          businessIds !== undefined
            ? await getQueryResult(
                `SELECT COUNT(*) AS total_surveys FROM surveys WHERE survey_status = 'PUBLISHED' AND profile_id = ANY($1::int[])`,
                [businessIds]
              )
            : await getQueryResult(
                `SELECT COUNT(*) AS total_surveys FROM surveys WHERE survey_status = 'PUBLISHED'`,
                []
              );

        const rankingCompletions =
          businessIds !== undefined
            ? await getQueryResult(
                `SELECT COUNT(*) AS completions, sr.survey_id FROM survey_results sr INNER JOIN surveys s ON s.survey_id = sr.survey_id WHERE s.profile_id = ANY($1::int[]) GROUP BY sr.results_id`,
                [businessIds]
              )
            : await getQueryResult(
                `SELECT COUNT(*) AS completions, survey_id FROM survey_results GROUP BY survey_id`,
                []
              );

        const rowsDays =
          businessIds !== undefined
            ? await getQueryResult(
                `
        SELECT DATE(created_at) AS register_date, COUNT(*) AS survey_created 
        FROM surveys
        WHERE profile_id = ANY($1::int[])
        GROUP BY DATE(created_at) 
        ORDER BY DATE(created_at)`,
                [businessIds]
              )
            : await getQueryResult(
                `
        SELECT DATE(created_at) AS register_date, COUNT(*) AS business_created 
        FROM users
        GROUP BY DATE(created_at) 
        ORDER BY DATE(created_at)`,
                []
              );

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
          totalSurveys: Number(totalSurveys[0].total_surveys),
        };
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },
    surveyAnalytics: async (_: any, req: any, context: any): Promise<any> => {
      const labels: string[] = [];
      const data: number[] = [];
      const { businessIds } = req.request;

      try {
        const totalSurveys =
          businessIds !== undefined
            ? await getQueryResult(
                `SELECT COUNT(*) AS total_surveys FROM surveys WHERE profile_id = ANY($1::int[])`,
                [businessIds]
              )
            : await getQueryResult(
                `SELECT COUNT(*) AS total_surveys FROM surveys`,
                []
              );
        const totalCompletions =
          businessIds !== undefined
            ? await getQueryResult(
                `SELECT COUNT(*) AS completions FROM survey_results sr INNER JOIN surveys s ON s.survey_id = sr.survey_id WHERE s.profile_id = ANY($1::int[])`,
                [businessIds]
              )
            : await getQueryResult(
                `SELECT COUNT(*) AS completions FROM survey_results`,
                []
              );
        const avgCompletionTime =
          businessIds !== undefined
            ? await getQueryResult(
                `
        SELECT AVG(EXTRACT(EPOCH FROM (fq.completed_at - fq.created_at))) AS avg_completion_time
        FROM filling_queue fq
        INNER JOIN survey_results sr ON sr.survey_id = fq.survey_id
        INNER JOIN surveys s ON s.survey_id = sr.survey_id 
        WHERE fq.filling_status = 'COMPLETE' AND s.profile_id = ANY($1::int[])        
        `,
                [businessIds]
              )
            : await getQueryResult(
                `
        SELECT AVG(EXTRACT(EPOCH FROM (fq.completed_at - fq.created_at))) AS avg_completion_time
        FROM filling_queue fq
        INNER JOIN survey_results sr ON sr.survey_id = fq.survey_id
        WHERE fq.filling_status = 'COMPLETE'
        `,
                []
              );
        const totalPageviews =
          businessIds !== undefined
            ? await getQueryResult(
                `SELECT COUNT(*) AS total_views FROM pageviews WHERE event = 'Pageview' AND user_id::int = ANY($1::int[])`,
                [businessIds]
              )
            : await getQueryResult(
                `SELECT COUNT(*) AS total_views FROM pageviews WHERE event = 'Pageview'`,
                []
              );

        const rowsDays =
          businessIds !== undefined
            ? await getQueryResult(
                `
        SELECT DATE(created_at) AS survey_date, COUNT(*) AS surveys_created 
        FROM surveys
        WHERE profile_id = ANY($1::int[])
        GROUP BY DATE(created_at) 
        ORDER BY DATE(created_at)`,
                [businessIds]
              )
            : await getQueryResult(
                `
        SELECT DATE(created_at) AS survey_date, COUNT(*) AS surveys_created 
        FROM surveys 
        GROUP BY DATE(created_at) 
        ORDER BY DATE(created_at)`,
                []
              );

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
          totalPageviews: totalPageviews[0].total_views,
        };
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
          mediaId: x.media_id,
        }));
      } catch (error) {
        throw new ApolloError(`${error}`);
      }
    },

    mediaSoldByCompanyOrUser: async (_: any, req: any, context: any) => {
      try {
        const { profileId } = req;

        const items = await getQueryResult(
          `
        SELECT DISTINCT(media_id) media_id
        FROM marketplace_products
        WHERE product_type = 'MEDIA'
        AND seller_id = $1::int
        `,
          [profileId]
        );

        return items.map((x) => ({
          mediaId: x.media_id,
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
        
        `;
        const items = await getQueryResult(query, [profileIds]);
        const total = await getQueryResult(
          `SELECT COUNT(*) as total FROM (${query}) t`,
          [profileIds]
        );

        return {
          items,
          total: Number(total[0].total),
        };
      } catch (error) {
        throw new GraphQLError(`${error}`);
      }
    },

    purchaseHistoryPerUser: async (_: any, req: any, context: any) => {
      return [];
    },
    dataUser: async (_: any, req: any, context: any) => {
      // prettier-ignore
      try {
        let userMostCompletedSurveys: UserMostCompletedSurveys[] = [];
        let mostEarnedCashRewards: MostEarnedCashRewards[] = [];
        let mostEarnedCryptocurrencyRewards: MostEarnedCryptocurrencyRewards = {};
        let mostDollarsSpentNFTMarketplace: MostDollarsSpentNftMarketplace[] = [];
        let mostCryptocurrencySpentNFTMarketplace: MostCryptocurrencySpentNftMarketplace = {};
        let mostInvitedUsers: MostInvitedUsers[] = [];
        let mostCompletedSurveysInSpecificCategory: MostCompletedSurveysInSpecificCategory[] = [];
        let highestAverageSurveyCompletionRate: HighestAverageSurveyCompletionRate = {};
        let mostConsistentSurveyCompletionFrequency: MostConsistentSurveyCompletionFrequency = {};
        let highestNumberOfConsecutiveDaysWithSurveyCompletions: HighestNumberOfConsecutiveDaysWithSurveyCompletions[] = [];
        let mostActiveParticipationInSpecificTypesOfSurveys: MostActiveParticipationInSpecificTypesOfSurveys = {};
        let mostReferralsConvertedIntoActiveSurveyParticipants: MostReferralsConvertedIntoActiveSurveyParticipants[] = [];
        let mostEngagementWithCommunityFeatures: MostEngagementWithCommunityFeatures[] = [];
        let mostCreativeAndUniqueSurveyResponses: MostCreativeAndUniqueSurveyResponses = {};

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

        let nearRewards: CryptoReward[] = [];
        let polkadotRewards: CryptoReward[] =[];
        let polygonRewards: CryptoReward[] = [];
        let totalCryptoInCash: AllCryptoRewardInUsd[] = [];

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

        const categories = req?.request?.categories || undefined;

        const sqlQueryMostCompletedSurveysInSpecificCategory = categories
          ? await getQueryResult(`
          SELECT fq.profile_id, s.category, COUNT(s.category)::INT AS category_completions
          FROM filling_queue fq
          JOIN (select survey_id, jsonb_array_elements_text(category) as category from surveys) s ON s.survey_id = fq.survey_id
          WHERE filling_status = 'COMPLETE' AND category = ANY($1::text[])
          GROUP BY s.category,fq.profile_id
          ORDER BY category_completions DESC;`, [categories])
          : 
          await getQueryResult(`
          SELECT fq.profile_id, s.category, COUNT(s.category)::INT AS category_completions
          FROM filling_queue fq
          JOIN (select survey_id, jsonb_array_elements_text(category) as category from surveys) s ON s.survey_id = fq.survey_id
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

        console.log("ALL DAAAASR::: ", mostCompletedSurveysInSpecificCategory)

        let mostSpentNear: CryptoReward[] = [];
        let mostSpentPolkadot: CryptoReward[] = [];
        let mostSpentPolygon: CryptoReward[] = [];

        const sqlQueryMostSpentInMarketplaceNear = await getQueryResult(`
        SELECT marketplace_orders.profile_id, SUM(marketplace_orders.crypto_amount) AS total_crypto_amount,
        SUM(marketplace_orders.order_amount) AS total_usd_amount
        FROM marketplace_orders
        WHERE marketplace_orders.order_status = 'APPROVED' 
        AND marketplace_orders.payment_method = 'CRYPTO'
        AND marketplace_orders.crypto_name = 'NEAR'
        GROUP BY marketplace_orders.profile_id
        ORDER BY total_crypto_amount DESC
        LIMIT 10;`);
        const sqlQueryMostSpentInMarketplacePolkadot = await getQueryResult(`
        SELECT marketplace_orders.profile_id, SUM(marketplace_orders.crypto_amount) AS total_crypto_amount,
        SUM(marketplace_orders.order_amount) AS total_usd_amount
        FROM marketplace_orders
        WHERE marketplace_orders.order_status = 'APPROVED' 
        AND marketplace_orders.payment_method = 'CRYPTO'
        AND marketplace_orders.crypto_name = 'POLKADOT'
        GROUP BY marketplace_orders.profile_id
        ORDER BY total_crypto_amount DESC
        LIMIT 10;`);
        const sqlQueryMostSpentInMarketplacePolygon = await getQueryResult(`
        SELECT marketplace_orders.profile_id, SUM(marketplace_orders.crypto_amount) AS total_crypto_amount,
        SUM(marketplace_orders.order_amount) AS total_usd_amount
        FROM marketplace_orders
        WHERE marketplace_orders.order_status = 'APPROVED' 
        AND marketplace_orders.payment_method = 'CRYPTO'
        AND marketplace_orders.crypto_name = 'POLYGON'
        GROUP BY marketplace_orders.profile_id
        ORDER BY total_crypto_amount DESC
        LIMIT 10;`);

        for (const value of sqlQueryMostSpentInMarketplaceNear) {
          mostSpentNear.push({
            profileId: value.profile_id,
            amountCrypto: Number(value.total_crypto_amount),
            amountUsd: Number(value.total_usd_amount)
          });
        }
        for (const value of sqlQueryMostSpentInMarketplacePolkadot) {
          mostSpentPolkadot.push({
            profileId: value.profile_id,
            amountCrypto: Number(value.total_crypto_amount),
            amountUsd: Number(value.total_usd_amount)
          });
        }
        for (const value of sqlQueryMostSpentInMarketplacePolygon) {
          mostSpentPolygon.push({
            profileId: value.profile_id,
            amountCrypto: Number(value.total_crypto_amount),
            amountUsd: Number(value.total_usd_amount)
          });
        }

        mostCryptocurrencySpentNFTMarketplace = {
          mostSpentNear: mostSpentNear,
          mostSpentPolkadot: mostSpentPolkadot,
          mostSpentPolygon: mostSpentPolygon,
        }

        let averageCompletionByUser: AverageSurveyCompletionRatesByUser[] = []
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

        let dailyCompletionFrequency: UserCompletionFrequency[] = [];
        let weeklyCompletionFrequency: UserCompletionFrequency[] = [];
        let monthlyCompletionFrequency: UserCompletionFrequency[] = [];
        let yearlyCompletionFrequency: UserCompletionFrequency[] = [];
        
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

        let openEndedSurveys: OpenEndedSurveys[] = [];
        let multipleChoiceSurveys: MultipleChoiceSurveys[] = [];

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

        let surveyResponseRating: Rating[] = [];
        let mediaRating: Rating[] = [];

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
            profileId: Number(value.profile_id),
            item_id: Number(value.survey_id),
            rating: Number(value.creative_response_rating)
          });
        }
        for (const value of sqlQueryMediaRating) {
          mediaRating.push({
            profileId: Number(value.seller_id),
            item_id: Number(value.media_id),
            rating: Number(value.media_rating || 0) 
          });
        }

        mostCreativeAndUniqueSurveyResponses = {
          surveyResponseRating: surveyResponseRating,
          mediaRating: mediaRating
        }

        return {
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
    dataBusiness: async (_: any, req: any, context: any) => {
      // prettier-ignore
      try {
        let mostIssuedSurveys: MostIssuedSurveys[] = [];
        let mostCompletedSurveys: MostCompletedSurveys = {};
        let mostCryptocurrencyValueIssuedViaSurveys: MostCryptocurrencyValueIssuedViaSurveys = {};
        let mostCashValueIssuedViaSurveysViaStripe: MostCashValueIssuedViaSurveysViaStripe[] = [];
        let highestNumberOfSuccessfulSurveyCampaigns: HighestNumberOfSuccessfulSurveyCampaigns[] = [];
        let mostDiverseSurveyTopicsCovered: MostDiverseSurveyTopicsCovered[] = [];
        let highestNumberOfParticipantsEngaged: HighestNumberOfParticipantsEngaged[] = [];
        let highestConversionRate: HighestConversionRate[] = [];

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

        let mostCompletedAll: MostCompletedAll[] = [];
        let mostCompletedNear: MostCompletedNear[] = [];
        let mostCompletedPolkadot: MostCompletedPolkadot[] = [];
        let mostCompletedPolygon: MostCompletedPolygon[] = [];

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

        let cryptoIssuedNear: CryptoIssued[] = [];
        let cryptoIssuedPolkadot: CryptoIssued[] = [];
        let cryptoIssuedPolygon: CryptoIssued[] = [];
        let cryptoIssuedAllBlockchains: CryptoIssuedAllBlockchains[] = []; 

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

        const sqlQueryMostDiverseSurveyTopicsCovered = await getQueryResult(`
        SELECT count(distinct category) as topic_count, JSON_AGG(category) as all_topics, profile_id as business, campaign_id 
        FROM (select s.survey_id, jsonb_array_elements_text(s.category) as category, camp.profile_id, camp.campaign_id
        from surveys s
        join (select cam.profile_id, cam.campaign_id, cast(jsonb_array_elements(cam.surveys) as INT) as survey_id
          from campaigns cam
          where cam.surveys is not null
          ) camp on camp.survey_id = s.survey_id
        where category is not null) cats
        GROUP BY campaign_id, business
        ORDER BY topic_count DESC;`);

        for (const value of sqlQueryMostDiverseSurveyTopicsCovered) {
          mostDiverseSurveyTopicsCovered.push({
            businessId: Number(value.business),
            campaignId: Number(value.campaign_id),
            numberOfTopics: Number(value.topic_count),
            allTopics: value.all_topics,
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
  },
};

export default ServiceResolvers;
