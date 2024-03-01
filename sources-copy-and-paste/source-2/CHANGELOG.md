1. **Fastest Time to Draft a Survey:** Calculate the fastest time taken by users to draft a survey, considering both overall and per blockchain duration.

```
type SurveyDrafterInfo {
  surveyId: Int
  user: profileId
  hours: Float
}

type FastestDraftSurvey {
  Total: [SurveyDrafterInfo]
  Polkadot: [SurveyDrafterInfo]
  Near: [SurveyDrafterInfo]
  Polygon: [SurveyDrafterInfo]
}
```

```
ALTER TABLE surveys
ADD COLUMN crypto_name TEXT;
```

```
SELECT survey_id, profile_id, ROUND(EXTRACT(EPOCH FROM (published_at - created_at)) / 3600, 2) AS hours
FROM surveys
WHERE published_at IS NOT NULL
ORDER BY hours ASC

SELECT survey_id, profile_id, ROUND(EXTRACT(EPOCH FROM (published_at - created_at)) / 3600, 2) AS hours
FROM surveys s
WHERE published_at IS NOT NULL AND s.crypto_name = 'NEAR'
ORDER BY hours ASC

SELECT survey_id, profile_id, ROUND(EXTRACT(EPOCH FROM (published_at - created_at)) / 3600, 2) AS hours
FROM surveys s
WHERE published_at IS NOT NULL AND s.crypto_name = 'POLKADOT'
ORDER BY hours ASC

SELECT survey_id, profile_id, ROUND(EXTRACT(EPOCH FROM (published_at - created_at)) / 3600, 2) AS hours
FROM surveys s
WHERE published_at IS NOT NULL AND s.crypto_name = 'POLYGON'
ORDER BY hours ASC
```

2. **Slowest Time to Draft a Survey:** Calculate the slowest time taken by users to draft a survey, considering both overall and per blockchain duration.

```
type SurveyDrafterInfo {
  surveyId: Int
  user: ProfileId
  hours: Decimal
}

type SlowestTimeDraftSurvey {
  Total: [SurveyDrafterInfo]
  Polkadot: [SurveyDrafterInfo]
  Near: [SurveyDrafterInfo]
  Polygon: [SurveyDrafterInfo]
}
```

```
SELECT survey_id, profile_id, ROUND(EXTRACT(EPOCH FROM (published_at - created_at)) / 3600, 2) AS hours
FROM surveys
WHERE published_at IS NOT NULL
ORDER BY hours DESC

SELECT survey_id, profile_id, ROUND(EXTRACT(EPOCH FROM (published_at - created_at)) / 3600, 2) AS hours
FROM surveys s
WHERE published_at IS NOT NULL AND s.crypto_name = 'NEAR'
ORDER BY hours DESC

SELECT survey_id, profile_id, ROUND(EXTRACT(EPOCH FROM (published_at - created_at)) / 3600, 2) AS hours
FROM surveys s
WHERE published_at IS NOT NULL AND s.crypto_name = 'POLKADOT'
ORDER BY hours DESC

SELECT survey_id, profile_id, ROUND(EXTRACT(EPOCH FROM (published_at - created_at)) / 3600, 2) AS hours
FROM surveys s
WHERE published_at IS NOT NULL AND s.crypto_name = 'POLYGON'
ORDER BY hours DESC
```

3. **Status and Duration of Unclaimed Rewards:** Track the status and duration of rewards that users have not claimed, both overall and per blockchain.

```
StatusAndDuration {
  user: ProfileId
  surveyId: Int
  claimed: Boolean
  duration: Decimal
}
type UnclaimedRewardStatusAndDuration {
 Total: [StatusAndDuration]
 Polkadot: [StatusAndDuration]
 Near: [StatusAndDuration]
 Polygon: [StatusAndDuration]
}
```

```
SELECT EXTRACT(EPOCH FROM (sr.reward_claimed_at - sr.created_at)) / 3600 AS hours
, profile_id, survey_id, results_id, reward_claimed
FROM survey_results sr
ORDER BY hours DESC

SELECT EXTRACT(EPOCH FROM (sr.reward_claimed_at - sr.created_at)) / 3600 AS hours
, sr.profile_id, sr.survey_id, sr.results_id, sr.reward_claimed
FROM survey_results sr
LEFT JOIN survey_rewards srw ON sr.reward_id = srw.reward_id
WHERE srw.crypto_name = 'NEAR'
ORDER BY hours DESC

SELECT EXTRACT(EPOCH FROM (sr.reward_claimed_at - sr.created_at)) / 3600 AS hours
, sr.profile_id, sr.survey_id, sr.results_id, sr.reward_claimed
FROM survey_results sr
LEFT JOIN survey_rewards srw ON sr.reward_id = srw.reward_id
WHERE srw.crypto_name = 'POLKADOT'
ORDER BY hours DESC

SELECT EXTRACT(EPOCH FROM (sr.reward_claimed_at - sr.created_at)) / 3600 AS hours
, sr.profile_id, sr.survey_id, sr.results_id, sr.reward_claimed
FROM survey_results sr
LEFT JOIN survey_rewards srw ON sr.reward_id = srw.reward_id
WHERE srw.crypto_name = 'POLYGON'
ORDER BY hours DESC
```

4. **Number of Wallets Connected:** Count the number of wallets connected to the system and specify the blockchain chain associated with each.

```
type WalletsConnected {
  Near: Int
  Polkadot: Int
  Polygon: Int
}
```

```
ALTER TABLE wallets
ADD COLUMN Address TEXT;

ALTER TABLE wallets
ADD COLUMN Crypto_name TEXT;
```

```
SELECT COUNT(crypto_name) AS wallet_count from wallets
WHERE crypto_name = 'NEAR'

SELECT COUNT(crypto_name) AS wallet_count from wallets
WHERE crypto_name = 'POLYGON'

SELECT COUNT(crypto_name) AS wallet_count from wallets
WHERE crypto_name = 'POLKADOT'
```

5. **Average Time per Session:** Calculate the average time users spend in each session on the platform.

```
type UserAverageSessionTime {
  user: ProfileId
  averageTime: Decimal
}
```

```
ALTER TABLE users
ADD COLUMN session_info jsonb;

jsonb:
[
  {
    "session_id": Number,
    "session_start: Number //epoch timestamp without timezone
    "session_end: Number //epoch timestamp without timezone
    "session_period": Number //epoch
  },
  ...
]

//inserting new session values into the database
UPDATE users
SET session_info = '[{"session_id": 0, "session_period": 3700}, {"session_id": 1, "session_period": 4561}]'::jsonb
WHERE profile_id = 2824;

//appending additional values into the database
UPDATE users
SET session_info = jsonb_set(
  session_info,
  '{-1}',
  '[{"session_id": 2, "session_period": 6000}, {"session_id": 3, "session_period": 7200}]'::jsonb
)
WHERE profile_id = 2824;

SELECT sa.profile_id, ROUND(AVG(session_period) / 3600, 2)::DECIMAL AS session_hourly_avg
FROM (SELECT
 profile_id,
  session->>'session_id' AS session_id,
  (session->>'session_period')::integer AS session_period
FROM users,
     jsonb_array_elements(session_info) AS session
GROUP BY profile_id, session) AS sa
GROUP BY sa.profile_id;
```

6. **Average Time per Survey:** Determine the average time users spend on drafting surveys.

```
type AverageTimeDraftingSurvey {
  user: ProfileId
  AverageTimePerServey: Decimal
}
```

```
SELECT profile_id, ROUND(AVG(drafted_hrs),2) AS avg_hrs
FROM (SELECT profile_id, survey_id, EXTRACT(EPOCH FROM (s.published_at - s.created_at)) / 3600 AS drafted_hrs
FROM surveys s
WHERE published_at IS NOT NULL) AS drafting
GROUP BY profile_id
ORDER BY avg_hrs ASC
```

7. **Average Time to Load Rewards:** Measure the average time it takes for users to load their rewards.

```
type AverageTimeLoadRewards {

}
```

8. **Ranked Tags Among Issued Surveys:** Identify the most common tags associated with issued surveys, allowing for categorization.

```
input CategoriesRequest {
  categories: [String]
}

type RankedTagsIssuedSurveys {
  category_tags: String
  tag_count: Int
}
```

```
SELECT DISTINCT each_category, count(each_category) from (select jsonb_array_elements_text(category) as each_category from surveys
where category is not null) AS tags
GROUP BY each_category

SELECT DISTINCT each_category, count(each_category) from (select jsonb_array_elements_text(category) as each_category from surveys
where category is not null) AS tags
WHERE category = ANY($1::text[])
```

9. **Most Common Survey Length (Number of Questions) Preferred by Users:** Determine the preferred survey length based on the number of questions among users.

```
type MostCommonSurveyLengthPreferred {
  survey_id: Int
  question_count: Int
}

SELECT question_count, COUNT(question_count) AS surveys_completed
FROM filling_queue fq
LEFT JOIN (select survey_id, jsonb_array_length(pages) as question_count from surveys
order by question_count desc) AS ac
ON fq.survey_id = ac.survey_id
WHERE fq.filling_status = 'COMPLETE'
GROUP BY ac.question_count
ORDER BY surveys_completed DESC
```

10. **Average Response Time of Users to Survey Invitations:** Calculate the average response time of users when they receive survey invitations.

```
type AverageInviteResponseTime {
  user: ProfileId
  averageResponseTimeHrs: Decimal
}
```

```
ALTER TABLE filling_queue
ADD COLUMN Invited_at TIMESTAMP without time zone NULL;

ALTER TABLE filling_queue
alter COLUMN Invited_at type TIMESTAMP;

ALTER TABLE filling_queue
ADD COLUMN Inviter INT;

SELECT profile_id, ROUND(AVG(EXTRACT(EPOCH FROM (fq.created_at - fq.invited_at)) / 3600), 2) AS avg_hours
FROM filling_queue fq
WHERE invited_at IS NOT NULL
GROUP BY profile_id
```

11. **Correlation Between Survey Complexity and Completion Rate:** Analyze the relationship between survey complexity (e.g., length, difficulty) and the rate at which users complete surveys.

```
type CorrelationSurveyComplexityAndCompletion {
  surveyId: Int
  completionRatio: Decimal
  questionCount: Int
}
```

```
SELECT nq.survey_id, question_count, ROUND((completed::decimal / total_attempted)*100,2) AS completion_ratio
FROM (select survey_id,
  count(survey_id) as total_attempted,
  count(case when filling_status = 'COMPLETE' then survey_id end) as completed
  from filling_queue
  group by survey_id) ratio
LEFT JOIN (select survey_id, jsonb_array_length(pages) as question_count from surveys
order by question_count desc) nq ON nq.survey_id = ratio.survey_id
ORDER BY completion_ratio DESC;
```

12. **Conversion Rate of Surveys to NFT Marketplace Purchases:** Track the conversion rate of completed surveys to purchases made in the NFT marketplace.

```
type ConversionRateSurveysToNFTPurchases {

}
```

```

```

\*13. **Most Effective Methods for Attracting Survey Participants:** Identify the most effective methods employed by businesses to attract survey participants.

```
type MostEffectiveMethodsAttractingSurveyParticipants {

}
```

\*14. **Subscription Level:** Monitor users' subscription levels, if applicable. (mirrors Data-user)

```
type SubscriptionLevelMarketplace {
 user: ProfileId
 subscription: String
}
```

```
SELECT profile_id, subscription FROM users
```

\*15. **Subscription History:** Record users' subscription history, including the packages they have subscribed to. (mirrors Data-user)

```
type SubscriptionHistoryMarketplace {
 user: ProfileId
 subscription: String
 began: Date
 ended: Date
}
```

```
SELECT
 profile_id,
 (element->>'id')::int AS id,
  element->>'subscription_type' AS subscription_type,
  (element->>'subscription_start')::timestamp AS subscription_start,
   (element->>'subscription_end')::timestamp AS subscription_end
FROM users, jsonb_array_elements(subscription_info) AS element
WHERE subscription_info IS NOT NULL

SELECT
 profile_id,
 (element->>'id')::int AS id,
  element->>'subscription_type' AS subscription_type,
  (element->>'subscription_start')::timestamp AS subscription_start,
   (element->>'subscription_end')::timestamp AS subscription_end
FROM users, jsonb_array_elements(subscription_info) AS element
WHERE subscription_info IS NOT NULL AND profile_id = ANY($1::int[])
```

### Data - User:

1. **Fastest Time to Complete a Survey:** Calculate the fastest time taken by a user to complete a survey, considering both the overall and per blockchain duration.

```
type SurveyTakerInfo {
  surveyId: Int
  user: profileId
  hours: Decimal
}

type FastestCompleteSurvey {
  total: [SurveyTakerInfo]
  polkadot: [SurveyTakerInfo]
  near: [SurveyTakerInfo]
  polygon: [SurveyTakerInfo]
}
```

```
SELECT EXTRACT(EPOCH FROM (fq.completed_at - fq.created_at)) / 3600 AS hours,
        fq.survey_id, fq.profile_id
FROM filling_queue fq
INNER JOIN survey_rewards srw ON srw.survey_id = fq.survey_id
INNER JOIN surveys s ON s.survey_id = srw.survey_id
WHERE fq.filling_status = 'COMPLETE'
ORDER BY hours ASC

SELECT EXTRACT(EPOCH FROM (fq.completed_at - fq.created_at)) / 3600 AS hours,
        fq.survey_id, fq.profile_id
FROM filling_queue fq
INNER JOIN survey_rewards srw ON srw.survey_id = fq.survey_id
INNER JOIN surveys s ON s.survey_id = srw.survey_id
WHERE fq.filling_status = 'COMPLETE' AND srw.crypto_name = 'NEAR'
ORDER BY hours ASC

SELECT EXTRACT(EPOCH FROM (fq.completed_at - fq.created_at)) / 3600 AS hours,
        fq.survey_id, fq.profile_id
FROM filling_queue fq
INNER JOIN survey_rewards srw ON srw.survey_id = fq.survey_id
INNER JOIN surveys s ON s.survey_id = srw.survey_id
WHERE fq.filling_status = 'COMPLETE' AND srw.crypto_name = 'POLKADOT'
ORDER BY hours ASC

SELECT EXTRACT(EPOCH FROM (fq.completed_at - fq.created_at)) / 3600 AS hours,
        fq.survey_id, fq.profile_id
FROM filling_queue fq
INNER JOIN survey_rewards srw ON srw.survey_id = fq.survey_id
INNER JOIN surveys s ON s.survey_id = srw.survey_id
WHERE fq.filling_status = 'COMPLETE' AND srw.crypto_name = 'POLYGON'
ORDER BY hours ASC
```

2. **Slowest Time to Complete a Survey:** Calculate the slowest time taken by a user to complete a survey, considering both the overall and per blockchain duration.

```
type SurveyTakerInfo {
  surveyId: Int
  user: ProfileId
  hours: Decimal
}

type SlowestCompleteSurvey {
  Total: [SurveyTakerInfo]
  Polkadot: [SurveyTakerInfo]
  Near: [SurveyTakerInfo]
  Polygon: [SurveyTakerInfo]
}
```

```
SELECT EXTRACT(EPOCH FROM (fq.completed_at - fq.created_at)) / 3600 AS hours,
        fq.survey_id, fq.profile_id
FROM filling_queue fq
INNER JOIN survey_rewards srw ON srw.survey_id = fq.survey_id
INNER JOIN surveys s ON s.survey_id = srw.survey_id
WHERE fq.filling_status = 'COMPLETE'
ORDER BY hours DESC

SELECT EXTRACT(EPOCH FROM (fq.completed_at - fq.created_at)) / 3600 AS hours,
        fq.survey_id, fq.profile_id
FROM filling_queue fq
INNER JOIN survey_rewards srw ON srw.survey_id = fq.survey_id
INNER JOIN surveys s ON s.survey_id = srw.survey_id
WHERE fq.filling_status = 'COMPLETE' AND srw.crypto_name = 'NEAR'
ORDER BY hours DESC

SELECT EXTRACT(EPOCH FROM (fq.completed_at - fq.created_at)) / 3600 AS hours,
        fq.survey_id, fq.profile_id
FROM filling_queue fq
INNER JOIN survey_rewards srw ON srw.survey_id = fq.survey_id
INNER JOIN surveys s ON s.survey_id = srw.survey_id
WHERE fq.filling_status = 'COMPLETE' AND srw.crypto_name = 'POLKADOT'
ORDER BY hours DESC

SELECT EXTRACT(EPOCH FROM (fq.completed_at - fq.created_at)) / 3600 AS hours,
        fq.survey_id, fq.profile_id
FROM filling_queue fq
INNER JOIN survey_rewards srw ON srw.survey_id = fq.survey_id
INNER JOIN surveys s ON s.survey_id = srw.survey_id
WHERE fq.filling_status = 'COMPLETE' AND srw.crypto_name = 'POLYGON'
ORDER BY hours DESC
```

3. **Status and Duration of Unclaimed Rewards:** Track the status and duration of rewards that users have not claimed, both overall and per blockchain.

```
type StatusAndDuration {
  user: ProfileId
  surveyId: Int
  claimed: Boolean
  duration: Decimal
}
type UnclaimedRewardStatusAndDuration {
 Total: [StatusAndDuration]
 Polkadot: [StatusAndDuration]
 Near: [StatusAndDuration]
 Polygon: [StatusAndDuration]
}
```

```
SELECT EXTRACT(EPOCH FROM (sr.reward_claimed_at - sr.created_at)) / 3600 AS hours
, profile_id, survey_id, results_id, reward_claimed
FROM survey_results sr
ORDER BY hours DESC

SELECT EXTRACT(EPOCH FROM (sr.reward_claimed_at - sr.created_at)) / 3600 AS hours
, sr.profile_id, sr.survey_id, sr.results_id, sr.reward_claimed
FROM survey_results sr
LEFT JOIN survey_rewards srw ON sr.reward_id = srw.reward_id
WHERE srw.crypto_name = 'NEAR'
ORDER BY hours DESC

SELECT EXTRACT(EPOCH FROM (sr.reward_claimed_at - sr.created_at)) / 3600 AS hours
, sr.profile_id, sr.survey_id, sr.results_id, sr.reward_claimed
FROM survey_results sr
LEFT JOIN survey_rewards srw ON sr.reward_id = srw.reward_id
WHERE srw.crypto_name = 'POLKADOT'
ORDER BY hours DESC

SELECT EXTRACT(EPOCH FROM (sr.reward_claimed_at - sr.created_at)) / 3600 AS hours
, sr.profile_id, sr.survey_id, sr.results_id, sr.reward_claimed
FROM survey_results sr
LEFT JOIN survey_rewards srw ON sr.reward_id = srw.reward_id
WHERE srw.crypto_name = 'POLYGON'
ORDER BY hours DESC
```

4. **Tutorial Completion:** Record whether users have completed tutorials or onboarding processes.

```
type TutorialCompletitions {
  user: ProfileId
  fillingStatus: Boolean
}

```

```
SELECT profile_id, filling_status FROM filling_queue
WHERE filling_type = 'TUTORIAL'
```

5. **Number of Wallets Connected:** Count the number of wallets connected to the system and specify the blockchain chain associated with each.

```
type UserWalletsConnected {
  user: ProfileId
  walletCount: Int
}
type WalletsConnectedPerBlockchain {
  Near: [UserWalletsConnected]
  Polkadot: [UserWalletsConnected]
  Polygon: [UserWalletsConnected]
}
```

```
ALTER TABLE wallets
ADD COLUMN Address TEXT;

ALTER TABLE wallets
ADD COLUMN Crypto_name TEXT;
```

```
SELECT profile_id, COUNT(crypto_name) AS wallet_count from wallets
WHERE crypto_name = 'NEAR'
GROUP BY profile_id

SELECT profile_id, COUNT(crypto_name) AS wallet_count from wallets
WHERE crypto_name = 'POLYGON'
GROUP BY profile_id

SELECT profile_id, COUNT(crypto_name) AS wallet_count from wallets
WHERE crypto_name = 'POLKADOT'
GROUP BY profile_id
```

6. **Average Time per Session:** Calculate the average time a user spends in each session on the platform.

```
input RequestUser {
  user: [ProfileId]
}

type AverageTimePerSession {
  user: ProfileId
  averageTimeHrs: Decimal
}

```

```
SELECT sa.profile_id, ROUND(AVG(session_period) / 3600, 2)::DECIMAL AS session_hourly_avg
FROM (SELECT
 profile_id,
  session->>'session_id' AS session_id,
  (session->>'session_period')::integer AS session_period
FROM users,
     jsonb_array_elements(session_info) AS session
GROUP BY profile_id, session) AS sa
WHERE profile_id = ANY($1::int[])
GROUP BY sa.profile_id;
```

7. **Average Time per Survey:** Calculate the average time users spend on completing surveys.

```
type AverageTimeCompletingSurvey {
  user: ProfileId
  AverageTimePerServey: Decimal
}
```

```
SELECT profile_id, ROUND(AVG(completion_hrs),2) AS avg_hrs
FROM (SELECT profile_id, survey_id, EXTRACT(EPOCH FROM (completed_at - created_at)) / 3600 AS completion_hrs
FROM filling_queue) AS completion
GROUP BY profile_id
ORDER BY avg_hrs ASC
```

8. **Average Time to Withdraw Rewards:** Determine the average time it takes for users to withdraw their rewards.

```
type AverageTimeWithdrawRewards {
  user: ProfileId
  avgHours: Float
}
```

```
SELECT profile_id, ROUND(AVG(hours),2) avg_hours
FROM (SELECT EXTRACT(EPOCH FROM (sr.reward_claimed_at - sr.created_at)) / 3600 AS hours
, profile_id, survey_id, results_id, reward_claimed
FROM survey_results sr
WHERE reward_claimed = true) AS claimed
GROUP BY profile_id
```

9. **Average Value Spent in the NFT Marketplace:** Compute the average amount spent by users in the NFT marketplace.

```
type AverageValueSpentNFTMarketplace {
  user: ProfileId
  avgCashAmount: Decimal
}
```

```
SELECT profile_id, ROUND(AVG(order_amount)::DECIMAL, 2) AS avg_amount FROM marketplace_orders
GROUP BY profile_id
ORDER BY avg_amount DESC
```

10. **Average Value Accrued in Cryptocurrency (Lifetime, Last Session, On Average):** Track users' average cryptocurrency earnings across their lifetime, during their last session, and on average.

```
type AverageValueAccruedCryptocurrency {
  user: ProfileId
  lifetimeCryptoValueInUSD: Float
  sessionAverageAccruedCryptoValueInUSD: Float
  lastSessionAccruedCryptoValueInUSD: Float
}
```

```
ALTER TABLE users
ADD COLUMN session_info jsonb;

//updated jsonb schema
jsonb:
[
  {
    "id": Number,
    "session_start: Number //epoch timestamp without timezone
    "session_end: Number //epoch timestamp without timezone
    "session_period": Number //epoch (session_end - session_start)
    "claimed_results_ids": [232,213,123]
  },
  ...
]
```

```
//updated jsonb info for profile_id 2824
[
  {
    "session_id": 0,
    "session_period": 3700,
    "session_start": "",
    "session_end": "",
    "claimed_results_ids": [130]
  },
  {
    "session_id": 1,
    "session_period": 6000,
    "session_start": "",
    "session_end": "",
    "claimed_results_ids": [131, 132]
  },
  {
    "session_id": 2,
    "session_period": 7200,
    "session_start": "",
    "session_end": "",
    "claimed_results_ids": [133,134,135]
  }
]
```

//used for session calculations in User Data 10 & 11

```
//old
SELECT profile_id, session_id,
jsonb_array_elements(results_ids)::int AS results_id
FROM
(SELECT
 profile_id,
  session->>'session_id' AS session_id,
  (session->>'claimed_results_ids')::jsonb AS results_ids
FROM users, jsonb_array_elements(session_info) AS session
GROUP BY profile_id, session) session_claims

//fixed (use as the base for extracting session accrument)
SELECT profile_id, session_id,
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
) results_element ON true


// used for getting last session of each user session_info
WITH RankedSessions AS (
  SELECT
    profile_id,
    session->>'session_id' AS session_id,
    ROW_NUMBER() OVER (PARTITION BY profile_id ORDER BY (session->>'session_id')::int DESC) AS session_rank
  FROM users
  CROSS JOIN LATERAL jsonb_array_elements(session_info) AS session
)
SELECT profile_id, session_id
FROM RankedSessions
WHERE session_rank = 1;
```

```
//lifetimeCryptoValueInUSD
select profile_id, SUM(reward_value_in_cash) from survey_results
where reward_type = 'CRYPTO'
group by profile_id

//sessionAverageAccruedCryptoValueInUSD
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
GROUP BY profile_id

//lastSessionAccruedCryptoValueInUSD
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
GROUP BY rps.session_id, rps.profile_id
```

11. **Average Value Accrued in Cash via Stripe (Lifetime, Last Session, On Average):** Monitor users' average cash earnings via Stripe across their lifetime, during their last session, and on average.

```
type AverageValueAccruedCashViaStripe {
  user: ProfileId
  lifetimeCashViaStripeValueInUSD: Float
  sessionAverageAccruedCashViaStripeValueInUSD: Float
  lastSessionAccruedCashViaStripeValueInUSD: Float
}
```

```
ALTER TABLE users
ADD COLUMN session_info jsonb;

//updated jsonb schema
jsonb:
[
  {
    "id": Number,
    "session_start: Number //epoch timestamp without timezone
    "session_end: Number //epoch timestamp without timezone
    "session_period": Number //epoch (session_end - session_start)
    "claimed_results_ids": [232,213,123]
  },
  ...
]
```

```
//updated jsonb info for profile_id 2824
[
  {
    "session_id": 0,
    "session_period": 3700,
    "session_start": "",
    "session_end": "",
    "claimed_results_ids": [130]
  },
  {
    "session_id": 1,
    "session_period": 6000,
    "session_start": "",
    "session_end": "",
    "claimed_results_ids": [131, 132]
  },
  {
    "session_id": 2,
    "session_period": 7200,
    "session_start": "",
    "session_end": "",
    "claimed_results_ids": [133,134,135]
  }
]
```

```
//lifetimeCashViaStripeValueInUSD
select profile_id, SUM(reward_value_in_cash) from survey_results
where reward_type = 'CASH'
group by profile_id

//sessionAverageAccruedCashViaStripeValueInUSD
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
GROUP BY profile_id

//lastSessionAccruedCashViaStripeValueInUSD
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
GROUP BY rps.session_id, rps.profile_id
```

12. **NFT Marketplace Purchase History:** Capture the transaction history and lifetime value of purchases made by users in the NFT marketplace.

```
type PurchaseAmountTotals {
  user: ProfileId
  totalPurchasedConvertedInUSD: Decimal
}
type PurchaseInfoHistory {
  user: ProfileId
  orderStatus: String
  orderId: Int
  createdAt: String
  orderAmountConvertedInUSD: Decimal
}

type NFTMarketplacePurchaseHistory {
  purchaseInfoHistory: PurchaseInfoHistory
  purchaseAmountTotals: PurchaseAmountTotals
}
```

```
SELECT profile_id, order_status, order_id, created_at, order_amount FROM marketplace_orders
        WHERE profile_id = ANY($1::int[])
        ORDER BY order_amount DESC

SELECT profile_id, SUM(order_amount) AS total_usd FROM marketplace_orders
        WHERE profile_id = ANY($1::int[])
        GROUP BY profile_id
        ORDER BY total_usd DESC
```

13. **Ranked Tags Among Completed Surveys:** Identify the most common tags associated with completed surveys, allowing for categorization.

```
input CategoriesRequest {
  categories: [String]
}

type RankedTagsCompletedSurveys {
  category_tags: String
  tag_count: Int
}
```

```
SELECT DISTINCT each_category, count(each_category)
FROM (select fq.survey_id, filling_status, jsonb_array_elements_text(category) as each_category from surveys s
	left join filling_queue fq on fq.survey_id = s.survey_id
	where category is not null and fq.filling_status = 'COMPLETE') AS tags
GROUP BY each_category
ORDER BY count DESC

SELECT DISTINCT each_category, count(each_category)
FROM (select fq.survey_id, filling_status, jsonb_array_elements_text(category) as each_category from surveys s
	left join filling_queue fq on fq.survey_id = s.survey_id
	where category is not null and fq.filling_status = 'COMPLETE') AS tags
GROUP BY each_category
WHERE category = ANY($1::text[])
ORDER BY count DESC
```

14. **Most Common Time of Day for Survey Completion:** Determine the peak time when users frequently complete surveys.

```
type CompletionTimeOfDay {
  timeOfDay: Int
  surveyCount: Int
}

type UserCompletionTimeOfDay {
  user: ProfileId
  completionTimeOfDay: [CompletionTimeOfDay]
}

type MostCommonTimeOfDaySurveyCompletitons {
 completionTimeOfDay: [CompletionTimeOfDay]
 userCompletionTimeOfDay: UserCompletionTimeOfDay
}
```

```
// determines time of day
SELECT EXTRACT(HOUR FROM completed_at) AS hour,
COUNT(survey_id) AS completed
FROM filling_queue
WHERE completed_at IS NOT null
GROUP BY hour
ORDER BY hour

// determines time of day for specific users
SELECT COUNT(survey_id) AS completed, profile_id,
EXTRACT(HOUR FROM completed_at) AS hour
FROM filling_queue
WHERE completed_at IS NOT null AND profile_id = ANY($1::int[])
GROUP BY hour, profile_id
ORDER BY profile_id, hour
```

15. **Survey Completion Rate Based on Number of Questions:** Calculate the survey completion rate based on the number of questions in each survey.

```
type SurveyCompletionBasedOnQuestionCount {
  question_count: Int
  completion_ratio: Decimal
}
```

Use this for survey_id completion ratio and then number of questions calculation:

```
SELECT question_count, ROUND(AVG(completion_ratio),2) FROM
(SELECT question_count, ROUND((completed::decimal / total_attempted)*100,2) AS completion_ratio
FROM (select survey_id,
  count(survey_id) as total_attempted,
  count(case when filling_status = 'COMPLETE' then survey_id end) as completed
  from filling_queue
  group by survey_id) ratio
LEFT JOIN (select survey_id, jsonb_array_length(pages) as question_count from surveys
order by question_count desc) nq ON nq.survey_id = ratio.survey_id) survey_completion_ration
GROUP BY question_count
ORDER BY completion_ratio DESC
```

Use this for strict number of questions calculation:

```
SELECT question_count, ROUND((SUM(completed)::decimal / SUM(total_attempted))*100,2) AS completion_ratio
FROM (select fq.survey_id, question_count,
	count(fq.survey_id) as total_attempted,
	count(case when filling_status = 'COMPLETE' then fq.survey_id end) as completed
	from filling_queue fq
	left join (select survey_id, jsonb_array_length(pages) as question_count from surveys
	order by question_count desc) nq ON nq.survey_id = fq.survey_id
	group by fq.survey_id, question_count) AS qc
GROUP BY question_count
ORDER BY completion_ratio DESC
```

16. **Average Rating Given to Completed Surveys:** Measure the average rating assigned by users to completed surveys.

```
type AverageUserRatingCompletedSurveys {
  user: ProfileId
  rating_avg: Int
}
```

```
ALTER TABLE filling_queue
ADD COLUMN survey_rating INT;
```

```
SELECT profile_id, ROUND(AVG(survey_rating),2) FROM filling_queue
WHERE filling_status = 'COMPLETE'
GROUP BY profile_id
ORDER BY avg_rating DESC
```

17. **User Engagement Rate with NFT Marketplace:** Analyze user engagement in the NFT marketplace, including views, interactions, and purchases.

```

type UserEngagementRateNFTMarketplace {
  user: ProfileId
  pageViews: Int
  purchaseCount: Int
  productsSelling: Int
  surveysCreated: Int
  surveysStarted: Int
  surveysTaken: Int
}
```

```
//page views
select user_id, count(id) from pageviews
where user_id is not null
group by user_id
order by count desc

//created orders
select profile_id, count(profile_id) from marketplace_orders
group by profile_id
order by count desc

//products selling
select seller_id, count(product_id) from marketplace_products
where seller_id is not null
group by seller_id
order by count desc

//surveys created
select profile_id, count(survey_id) from surveys
where profile_id is not null
group by profile_id
order by count desc

//fillings started
select profile_id, count(survey_id) from filling_queue
group by profile_id
order by count desc

//fillings completed
select profile_id, count(survey_id) from filling_queue
where filling_status = 'COMPLETE'
group by profile_id
order by count desc
```

18. **Subscription Level:** Track users' subscription levels, if applicable.

```
type SubscriptionLevel {
 user: ProfileId
 subscription: String
}
```

```
ALTER TABLE users
ADD COLUMN subscription TEXT DEFAULT 'BASIC';
```

```
SELECT profile_id, subscription FROM users
```

19. **Subscription History:** Record users' subscription history, including the packages they have subscribed to.

```
type SubscriptionHistory {
 user: ProfileId
 subscription: String
 began: Date
 ended: Date
}
```

```
ALTER TABLE users
ADD COLUMN subscription_info jsonb;


jsonb:
[
  {
    "id": Number,
    "subscription_type": String
    "subscription_start": Timestamp without timezone
    "subscription_end": Timestamp without timezone
  },
  ...
]

//inserting new session values into the database
UPDATE users
SET subscription_info = '[{"id": 0, "subscription_type": "BASIC", "subscription_start": "2023-04-11 21:59:14", "subscription_end": "2023-05-11 21:59:14"}, {"id": 1, "subscription_type": "PREMIUM", "subscription_start": "2023-05-11 21:59:14", "subscription_end": "2023-06-11 21:59:14"}]'::jsonb
WHERE profile_id = 2824;

```

```
SELECT
 profile_id,
 (element->>'id')::int AS id,
  element->>'subscription_type' AS subscription_type,
  (element->>'subscription_start')::timestamp AS subscription_start,
   (element->>'subscription_end')::timestamp AS subscription_end
FROM users, jsonb_array_elements(subscription_info) AS element
WHERE subscription_info IS NOT NULL

SELECT
 profile_id,
 (element->>'id')::int AS id,
  element->>'subscription_type' AS subscription_type,
  (element->>'subscription_start')::timestamp AS subscription_start,
   (element->>'subscription_end')::timestamp AS subscription_end
FROM users, jsonb_array_elements(subscription_info) AS element
WHERE subscription_info IS NOT NULL AND profile_id = ANY($1::int[])
```
