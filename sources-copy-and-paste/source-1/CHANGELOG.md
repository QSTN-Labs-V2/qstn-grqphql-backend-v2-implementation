## Proposed Schema and Discussion

SQL DATA CHANGES & MODIFICATIONS

```
ALTER TABLE survey_rewards
ADD COLUMN crypto_name TEXT;

ALTER TABLE survey_rewards
ADD COLUMN cash_amount REAL;

ALTER TABLE survey_rewards
ADD COLUMN crypto_amount INT;

ALTER TABLE marketplace_orders
ADD COLUMN crypto_name TEXT;

ALTER TABLE marketplace_orders
ADD COLUMN cash_amount REAL;

ALTER TABLE marketplace_orders
ADD COLUMN crypto_amount INT;

ALTER TABLE marketplace_orders
ADD COLUMN cash_name TEXT NOT NULL
DEFAULT 'USD';

// used to calculate cash value of crypto at time of reward
ALTER TABLE survey_results
ADD COLUMN reward_value_in_cash REAL;

// used in identifying crypto for purchases 'CASH' or 'CRYPTO'
ALTER TABLE marketplace_orders
ADD COLUMN payment_method TEXT NOT NULL
DEFAULT 'CASH';

ALTER TABLE marketplace_orders
ADD COLUMN crypto_name TEXT;

ALTER TABLE marketplace_orders
ADD COLUMN crypto_amount INT;

ALTER TABLE marketplace_orders
ADD COLUMN cash_name TEXT NOT NULL
DEFAULT 'USD';

// used in Business Data #5 for tracking successful campaigns
ALTER TABLE campaigns
ADD COLUMN campaign_status TEXT NOT NULL
DEFAULT 'ONGOING';

// used in Business Data #7 for calculating surveys associated with a campaign
ALTER TABLE surveys
ADD COLUMN campaign_id INT;

// used in Data User #13
ALTER TABLE users
ADD posts jsonb;

// used in Data User #14
ALTER TABLE survey_results
ADD creative_response_rating INT
DEFAULT 0;

ALTER TABLE marketplace_products
ADD media_rating INT
DEFAULT 0;

// used in Data User #7
ALTER TABLE surveys
ALTER COLUMN category TYPE text;
```

### Data - User:

1. **Most Completed Surveys:** Retrieve data on users who have completed the highest number of surveys. This helps identify highly active participants.

```
type MostCompletedSurveys {
  profileId: ProfileId!
  numberOfSurveys: Int
}
```

SQL

```
SELECT profile_id, COUNT(fq.survey_id) AS survey_count
FROM filling_queue fq
GROUP BY profile_id
ORDER BY survey_count DESC
LIMIT 10
```

2. **Most Earned Cash Rewards (via Stripe):** Track users who have earned the most cash rewards through the Stripe payment system.

```
type MostEarnedCashRewards {
  profileId: ProfileId!
  mostCashViaStripe: Int
}
```

SQL

```
SELECT u_id, ROUND(SUM(cash_amount)::numeric, 2) AS total_cash_rewards FROM
(select s.survey_id, sr.profile_id as u_id, s.profile_id as b_id,
srw.reward_id, srw.reward_type, srw.cash_amount
from surveys s
join survey_results sr on s.survey_id = sr.survey_id
join survey_rewards srw on s.survey_id = srw.survey_id
where srw.reward_type = 'CASH') AS all_cash_rewards
GROUP BY u_id
ORDER BY total_cash_rewards
```

3. **Most Earned Cryptocurrency Rewards:** Identify users who have earned the most cryptocurrency rewards, both in total and per blockchain.

`In regards to total rewards, how will this be calculated? Should I use the sum of all tokens?`

A: We will query coingecko api to get a quote, and store the reward amount converted in USD when a transaction is complete.

Following this, we can have how much value in crypto in USD was at time of the transaction. Now, the sum of all tokens could be:

sum of all tokens in nominal values
sum of all tokens in USD at time of the transaction
sum of all tokens in USD in todays market value

ex:

```
type CryptoReward {
  profileId: ProfileId!
  amountCrypto: Int
  amountUsd: Float
  ...
}
```

```
-- using usd amount at time of the transaction

type CryptoReward {
  profileId: ProfileId!
  amountCrypto: Int
  amountUsd: Float
}

type AllCryptoRewardInUSD {
  profileId: ProfileId!
  amountUsd: Float
}

type MostEarnedCryptocurrencyRewards {
  nearRewards: CryptoReward
  polkadotRewards: CryptoReward
  polygonRewards: CryptoReward
  totalCryptoInCash: AllCryptoRewardInUSD
}
```

SQL

totalCryptoInCash:

```
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
LIMIT 10;
```

per blockchain:

```
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
LIMIT 10;
```

4. **Most Dollars Spent in the NFT Marketplace:** Find users who have spent the most real dollars on NFT purchases.

```
type MostDollarsSpentNFTMarketplace {
  profileId: ProfileId!
  realDollarsSpent: Int
}
```

SQL

```
SELECT marketplace_orders.profile_id, SUM(marketplace_orders.order_amount) AS total_crypto_in_real_amount
FROM marketplace_orders
WHERE marketplace_orders.order_status = 'APPROVED'
GROUP BY marketplace_orders.profile_id
ORDER BY total_crypto_in_real_amount DESC
LIMIT 10;
```

not used but may be useful for queries seperated by cash or crypto type:

```
SELECT marketplace_orders.profile_id, SUM(marketplace_orders.crypto_amount) AS total_crypto_amount
FROM marketplace_orders
WHERE marketplace_orders.order_status = 'APPROVED' AND marketplace_orders.crypto_name = 'NEAR'
GROUP BY marketplace_orders.profile_id
ORDER BY total_crypto_amount DESC
LIMIT 10;
```

5. **Most Cryptocurrency Spent in the NFT Marketplace:** Identify users who have spent the most cryptocurrency on NFT purchases.

```
type CryptoReward {
  profileId: ProfileId!
  amountCrypto: Int
}

type MostCryptocurrencySpentNFTMarketplace {
  mostSpentNear: [CryptoReward]
  mostSpentPolkadot: [CryptoReward]
  mostSpentPolygon: [CryptoReward]
}
```

SQL

```
SELECT marketplace_orders.profile_id, SUM(marketplace_orders.crypto_amount) AS total_crypto_amount
FROM marketplace_orders
WHERE marketplace_orders.order_status = 'APPROVED'
AND marketplace_orders.payment_method = 'CRYPTO'
AND marketplace_orders.crypto_name = 'NEAR'
GROUP BY marketplace_orders.profile_id
ORDER BY total_crypto_amount DESC
LIMIT 10;
```

```
SELECT marketplace_orders.profile_id, SUM(marketplace_orders.crypto_amount) AS total_crypto_amount
FROM marketplace_orders
WHERE marketplace_orders.order_status = 'APPROVED'
AND marketplace_orders.payment_method = 'CRYPTO'
AND marketplace_orders.crypto_name = 'POLKADOT'
GROUP BY marketplace_orders.profile_id
ORDER BY total_crypto_amount DESC
LIMIT 10;
```

```
SELECT marketplace_orders.profile_id, SUM(marketplace_orders.crypto_amount) AS total_crypto_amount
FROM marketplace_orders
WHERE marketplace_orders.order_status = 'APPROVED'
AND marketplace_orders.payment_method = 'CRYPTO'
AND marketplace_orders.crypto_name = 'POLYGON'
GROUP BY marketplace_orders.profile_id
ORDER BY total_crypto_amount DESC
LIMIT 10;
```

6. **Most Invited Users:** Determine which users have successfully invited the highest number of new users to the platform.

```
type MostInvitedUsers {
  profileId: profileId!
  usersInvited: Int
}
```

SQL

```
SELECT inviter, COUNT(*) AS invitation_count
FROM users
WHERE users.inviter IS NOT NULL
GROUP BY inviter
ORDER BY invitation_count DESC
LIMIT 10;
```

7. **Most Completed Surveys in a Specific Category:** Analyze users' survey completion rates in specific survey categories, such as technology or health.

`What other category types need to be considered? This schema needs to be further updated and flushed out or redesigned`

A: These are all the categories currently:

- technology

- automotive

- science

- gaming

- entertainment

- social-media

- fitness

- food

- travel

- business

- relationships

- education

- health

- art

- beauty

- fashion

- space-exploration

- parenting

- philanthropy

- diversity-and-inclusion

```
type MostCompletedSurveysInSpecificCategory {
  profileIds: ProfileId
  categoryName: String
  surveysCompleted: Int
}
```

SQL

```
SELECT fq.profile_id, s.category, COUNT(s.category)::INT AS category_completions
FROM filling_queue fq
JOIN (select survey_id, jsonb_array_elements_text(category) as category from surveys) s ON s.survey_id = fq.survey_id
WHERE filling_status = 'COMPLETE'
GROUP BY s.category,fq.profile_id
ORDER BY category_completions DESC
```

8. **Highest Average Survey Completion Rate:** Calculate and compare users' average survey completion rates.

`The proposed architecture includes the highest and all available averages for all users. May need to be modified`

Ok

```
type AverageSurveyCompletionRatesByUser {
  profileIds: ProfileId
  percentageCompletionAverage: Int
}
type HighestAverageSurveyCompletionRate {
  highestAverageSurveyCompletion: [AverageSurveyCompletionRatesByUser]
}
```

SQL

```
SELECT profile_id, ROUND((completed::decimal / total_attempted)*100,2) AS completion_ratio
FROM (select profile_id,
    count(survey_id) as total_attempted,
    count(case when filling_status = 'COMPLETE' then survey_id end) as completed
    from filling_queue
    group by profile_id) ratio
ORDER BY completion_ratio DESC;
```

9. **Most Consistent Survey Completion Frequency:** Identify users who consistently complete surveys with a specific frequency (e.g., daily, weekly).

```
type UserCompletionFrequency {
  profileIds: ProfileId!
  frequencyAverage: Float
}

type MostConsistentSurveyCompletionFrequency {
  daily: UserCompletionFrequency
  weekly: UserCompletionFrequency
  monthly: UserCompletionFrequency
  yearly: UserCompletionFrequency
}
```

SQL

daily

```
SELECT profile_id as u_id,
ROUND(SUM(count_per_duration) / COUNT(count_per_duration), 2) AS daily_frequency
FROM (select profile_id, DATE_TRUNC('day', completed_at) as duration,
       count(*) as count_per_duration
from filling_queue
group by profile_id, duration
order by duration) AS survey_count_per_duration
GROUP BY u_id
ORDER BY daily_frequency DESC;
```

weekly

```
SELECT profile_id as u_id,
ROUND(SUM(count_per_duration) / COUNT(count_per_duration), 2) AS weekly_frequency
FROM (select profile_id, DATE_TRUNC('week', completed_at) as duration,
       count(*) as count_per_duration
from filling_queue
group by profile_id, duration
order by duration) AS survey_count_per_duration
GROUP BY u_id
ORDER BY weekly_frequency DESC;
```

monthly

```
SELECT profile_id as u_id,
ROUND(SUM(count_per_duration) / COUNT(count_per_duration), 2) AS monthly_frequency
FROM (select profile_id, DATE_TRUNC('month', completed_at) as duration,
       count(*) as count_per_duration
from filling_queue
group by profile_id, duration
order by duration) AS survey_count_per_duration
GROUP BY u_id
ORDER BY monthly_frequency DESC;
```

yearly

```
SELECT profile_id as u_id,
ROUND(SUM(count_per_duration) / COUNT(count_per_duration), 2) AS yearly_frequency
FROM (select profile_id, DATE_TRUNC('year', completed_at) as duration,
       count(*) as count_per_duration
from filling_queue
group by profile_id, duration
order by duration) AS survey_count_per_duration
GROUP BY u_id
ORDER BY yearly_frequency DESC;
```

10. **Highest Number of Consecutive Days with Survey Completions:** Track users with the longest streaks of consecutive days with completed surveys.

```
type HighestNumberOfConsecutiveDaysWithSurveyCompletions {
  profileIds: ProfileId!
  longestDailyStreak: Int
}
```

SQL

```
SELECT DISTINCT ON (profile_id) profile_id, COUNT(DISTINCT completed_at::date) AS num_days
FROM (select fq.*,
             dense_rank() over (partition by profile_id order by completed_at::date) AS seq
      from filling_queue fq
     ) fq
GROUP BY profile_id, completed_at::date - seq * interval '1 day'
ORDER BY profile_id, num_days DESC;
```

11. **Most Active Participation in Specific Types of Surveys:** Analyze users' engagement with different survey types, such as multiple-choice or open-ended.

```
type MultipleChoiceSurveys {
  profileId: ProfileId!
  multipleChoiceSurveys: Int
}

type OpenEndedSurveys {
  profileId: ProfileId!
  openEndedSurveys: Int
}

type MostActiveParticipationInSpecificTypesOfSurveys {
  multipleChoiceSurveysRankings: MultipleChoiceSurveys
  openEndedSurveysRankings: OpenEndedSurveys
}
```

SQL

combine the two queries

```
SELECT count(campaign_type) AS qualitative, fq.profile_id FROM filling_queue fq
JOIN surveys s on fq.survey_id = s.survey_id
where filling_status = 'COMPLETE' AND campaign_type = 'QUALITATIVE'
GROUP BY fq.profile_id
ORDER BY qualitative DESC
LIMIT 10;

SELECT count(campaign_type) AS quantitative, fq.profile_id FROM filling_queue fq
JOIN surveys s on fq.survey_id = s.survey_id
WHERE filling_status = 'COMPLETE' AND campaign_type = 'QUANTITATIVE'
GROUP BY fq.profile_id
ORDER BY quantitative DESC
LIMIT 10;
```

12. **Most Referrals Converted into Active Survey Participants:** Measure the success of users' referral efforts in converting new users into active survey participants.

```
type MostReferralsConvertedIntoActiveSurveyParticipants {
  profileId: ProfileId!
  referralsSent: Int
  referredParticipantCount: Int
}
```

SQL

```
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
ORDER BY active_participants
```

13. **Most Engagement with Community Features:** Identify users who actively engage with community features like forum posts, comments, and discussions.

`Should this data be represented in a returned array with users ranked by number of posts?`

A: Yes, it should

```
type MostEngagementWithCommunityFeatures {
  profileIds: ProfileId!
  totalPosts: Int
}
```

SQL

```
SELECT profile_id, jsonb_array_length(posts) AS post_count, posts
FROM users
WHERE posts IS NOT NULL
ORDER BY post_count DESC;
```

14. **Most Creative and Unique Survey Responses:** Recognize users who provide creative and unique survey responses, including creative text and uploaded media.

```
type Rating {
  profileId: ProfileId!
  item_id: Int
  rating: Int
}

type MostCreativeAndUniqueSurveyResponses {
  surveyResponseRating: [Rating]
  mediaRating: [Rating]
}
```

SQL

```
--surveyResponseRating
SELECT profile_id, survey_id, creative_response_rating FROM survey_results
ORDER BY creative_response_rating DESC
LIMIT 10

--mediaRating
SELECT seller_id, media_id, media_rating FROM marketplace_products
ORDER BY media_rating DESC
LIMIT 10;
```

### Data - Business:

1. **Most Issued Surveys:** Retrieve data on businesses that have issued the highest number of surveys.

```
type MostIssuedSurveys {
  businessId: ProfileId!
  numberOfSurveys: Int
}
```

SQL

```
SELECT users.profile_id, COUNT(s.survey_id) AS surveys_issued
FROM users
JOIN surveys s ON users.profile_id = s.profile_id
WHERE users.account_type = 'BUSINESS' AND s.survey_status = 'PUBLISHED'
GROUP BY users.profile_id
ORDER BY surveys_issued DESC
```

2. **Most Completed Surveys:** Track businesses with the most completed surveys, considering both the total number and per blockchain.
   `
   1: There's a column named reward_type with CRYPO or CASH values. Can this be further specified to a specific blockchain name or is it better to create a new column for this?

   2: How can I determine what is a completed survey, does the reward need to be claimed by a user or a new column should be created in survey_results called survey_status identifying true or false. Or that if there is an entry by a user in the databased, this already means the survey is completed by a user?
   `

```
type MostCompletedSurveys {
  businessId: ProfileId!
  numberOfSurveysNear: Int
  numberOfSurveysPolkadot: Int
  numberOfSurveysPolygon: Int
  totalCompleted: Int
}
```

SQL

```
SELECT count(sr_counts.survey_id) as completed, profile_id
FROM (select survey_id FROM filling_queue
WHERE filling_status = 'COMPLETE') sr_counts
JOIN surveys on sr_counts.survey_id = surveys.survey_id
GROUP by profile_id
ORDER by completed;
LIMIT 10
```

SQL

devise seperate for blockchains

```
SELECT srw.profile_id AS business, COUNT(*) AS survey_completed FROM filling_queue fq
JOIN survey_results sr ON fq.survey_id = sr.survey_id
JOIN survey_rewards srw ON srw.survey_id = sr.survey_id
WHERE fq.filling_status = 'COMPLETE' AND sr.reward_type = 'CRYPTO' AND srw.crypto_name = 'POLYGON'
GROUP BY business
ORDER BY survey_completed DESC
LIMIT 10;
```

```
SELECT srw.profile_id AS business, COUNT(*) AS survey_completed FROM filling_queue fq
JOIN survey_results sr ON fq.survey_id = sr.survey_id
JOIN survey_rewards srw ON srw.survey_id = sr.survey_id
WHERE fq.filling_status = 'COMPLETE' AND sr.reward_type = 'CRYPTO' AND srw.crypto_name = 'POLKADOT'
GROUP BY business
ORDER BY survey_completed DESC
LIMIT 10;
```

```
SELECT srw.profile_id AS business, COUNT(*) AS survey_completed FROM filling_queue fq
JOIN survey_results sr ON fq.survey_id = sr.survey_id
JOIN survey_rewards srw ON srw.survey_id = sr.survey_id
WHERE fq.filling_status = 'COMPLETE' AND sr.reward_type = 'CRYPTO' AND srw.crypto_name = 'NEAR'
GROUP BY business
ORDER BY survey_completed DESC
LIMIT 10;
```

3. **Most Cryptocurrency Value Issued via Surveys:** Identify businesses that have issued the highest cryptocurrency value through surveys, both in total and per blockchain.

`How would I determine total issued rewards? Would it be the sum of all the cryptocurrencies?`

A: We will query coingecko api to get a quote, and store the reward amount converted in USD when a transaction is complete.

Following this, we can have how much value in crypto in USD was at time of the transaction.
Now, the sum of all the cryptocurrencies could be:

- sum of all crypto in nominal values
- sum of all crypto in USD at time of the transaction
- sum of all crypto in USD in todays market value

ex:

```
type CryptoIssued {
  businessId: ProfileId!
  amountCrypto: Int
  amountUsd: Float
  issuedAt: DateTime
}
```

```
type CryptoIssued {
  businessId: ProfileId!
  amountCrypto: Int
}

type CryptoIssuedAllBlockchains {
  businessId: ProfileId!
  amountIssuedNear: Int
  amountIssuedPolkadot: Int
  amountIssuedPolygon: Int
}

type MostCryptocurrencyValueIssuedViaSurveys {
  mostIssuedNear: CryptoIssued
  mostIssuedPolkadot: CryptoIssued
  mostIssuedPolygon: CryptoIssued
  mostIssuedInTotal: CryptoIssuedAllBlockchains
}
```

SQL

```
-- total crypto

select b_id, sum(reward_value_in_cash) as total_crypto_in_cash from (select s.survey_id, sr.profile_id as u_id, s.profile_id as b_id,
srw.reward_id, srw.reward_type, srw.crypto_name, srw.crypto_amount,  srw.cash_amount, sr.reward_value_in_cash
from surveys s
join survey_results sr on s.survey_id = sr.survey_id
join survey_rewards srw on s.survey_id = srw.survey_id
where srw.reward_type = 'CRYPTO') as business_crypto_totals
group by b_id
order by total_crypto_in_cash desc
```

```
-- total per blockchain

SELECT b_id, SUM(crypto_amount) AS total_crypto_amount, SUM(reward_value_in_cash) AS total_crypto_in_cash
FROM (select s.survey_id, sr.profile_id as u_id, s.profile_id as b_id,
  srw.reward_id, srw.reward_type, srw.crypto_name, srw.crypto_amount,  srw.cash_amount, sr.reward_value_in_cash
  from surveys s
  join survey_results sr on s.survey_id = sr.survey_id
  join survey_rewards srw on s.survey_id = srw.survey_id
  where srw.reward_type = 'CRYPTO' and crypto_name = 'POLYGON') AS business_crypto_totals
GROUP BY b_id
ORDER BY total_crypto_amount DESC
LIMIT 10
```

4. **Most Cash Value Issued via Surveys (via Stripe):** Find businesses that have issued the highest cash value rewards via the Stripe payment system.

```
type MostCashValueIssuedViaSurveysViaStripe {
  businessId: ProfileId!
  amountCash: Int
}
```

SQL

notes:
reward_type, survey_id, profile_id as user_id, reward_claimed FROM survey_results
reward_type, survey_id, profile_id as bus_id, crypto_name, crypto_amount, cash_amount

extra subquery used for potential debugging

```
SELECT b_id, SUM(cash_amount) AS total_cash
FROM (select s.survey_id, sr.profile_id as u_id, s.profile_id as b_id,
srw.reward_id, srw.reward_type, srw.cash_amount
from surveys s
join survey_results sr on s.survey_id = sr.survey_id
join survey_rewards srw on s.survey_id = srw.survey_id
where srw.reward_type = 'CASH') AS cash_rewards
GROUP BY b_id
ORDER BY total_cash DESC
LIMIT 10
```

5. **Highest Number of Successful Survey Campaigns:** Determine businesses that have successfully run the highest number of survey campaigns on the platform.

```
type HighestNumberOfSuccessfulSurveyCampaigns {
  businessId: ProfileId!
  numberOfSuccessfulCampaigns: Int
}
```

SQL

```
SELECT profile_id AS b_id, COUNT(*) AS num_campaigns
FROM campaigns
WHERE campaign_status = 'COMPLETE'
GROUP BY b_id
ORDER BY num_campaigns DESC
LIMIT 10
```

6. **Most Diverse Survey Topics Covered:** Analyze businesses that cover a wide range of survey topics within a single campaign.

```
type MostDiverseSurveyTopicsCovered {
  businessId: ProfileId!
  campaignId: Int
  numberOfTopics: Int
  allTopics: [String]
}
```

SQL

```
SELECT count(distinct category) as topic_count, JSON_AGG(category) as all_topics, profile_id as business, campaign_id
FROM (select s.survey_id, jsonb_array_elements_text(s.category) as category, camp.profile_id, camp.campaign_id
from surveys s
join (select cam.profile_id, cam.campaign_id, cast(jsonb_array_elements(cam.surveys) as INT) as survey_id
  from campaigns cam
  where cam.surveys is not null
  ) camp on camp.survey_id = s.survey_id
where category is not null) cats
GROUP BY campaign_id, business
ORDER BY topic_count DESC;
```

7. **Highest Number of Participants Engaged:** Track businesses that have engaged the highest number of participants in a single survey campaign.

```
type HighestNumberOfParticipantsEngaged {
  businessId: ProfileId!
  campaignId: Int
  numberOfParticipants: Int
}
```

SQL

includes participants_per_survey in a subquery as well

```
SELECT campaign_id, SUM(participant_count) participants_per_campaign, b_id FROM (SELECT s.campaign_id, s.survey_id, COUNT(sr.profile_id) AS participant_count, s.profile_id AS b_id
	FROM surveys s
	JOIN survey_results sr ON s.survey_id = sr.survey_id
	GROUP BY s.survey_id
	ORDER BY participant_count DESC) AS participants_per_survey
WHERE campaign_id IS NOT NULL
GROUP BY b_id, campaign_id
ORDER BY participants_per_campaign DESC
LIMIT 10;
```

8. **Highest Conversion Rate:** Identify businesses with the highest conversion rates, measuring the transition from survey responses to desired actions (e.g., product purchases).

```
type HighestConversionRate {
  surveyId: Int!
  conversionPercentageRate: Float
  uniqueParticipants: Int
  convertedPurchasers: Int
}

```

SQL

```
  SELECT b_id, COUNT(u_id) AS unique_participants,
  COUNT(order_id) AS converted_purchasers,
  ROUND((COUNT(order_id)::decimal / COUNT(u_id)), 2) AS conversion_percentage
  FROM (SELECT order_id, b_id, u_id
    FROM (select mo.order_id, s.profile_id as b_id, fq.survey_id, fq.profile_id as u_id from filling_queue fq
      left join surveys s on s.survey_id = fq.survey_id
      left join marketplace_orders mo on mo.profile_id = fq.profile_id) AS raw_conversion_data
    GROUP BY order_id, b_id, u_id) AS unique_conversions
  GROUP BY b_id;
```
