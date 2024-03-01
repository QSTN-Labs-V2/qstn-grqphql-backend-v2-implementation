## CODE GUIDELINES

1 - Create a new file with the query name ie:(DataUserRequest.graphql) in graphql/server/documents/queries directory and paste the graphql query into it:

```graphql
query DataUserRequest($request: CategoriesRequest) {
  dataUser(request: $request) {
    ...DataUserFields
  }
}

```

**source to copy:**
https://github.com/QSTN-labs/qstn-grqphql-backend-v2-implementation/blob/3b8a23a5518abf83eec778d9bd51bba72a31f892/sources-copy-and-paste/source-1/server/queries.graphql#L13



2 - Edit /graphql/server/schema.graphql and add the query statement into the Query {} object. 

```graphql
...

dataUser(request: CategoriesRequest): DataUser
...

```

**source to copy:**
https://github.com/QSTN-labs/qstn-grqphql-backend-v2-implementation/blob/3b8a23a5518abf83eec778d9bd51bba72a31f892/sources-copy-and-paste/source-1/server/schema.graphql#L22


3 - Add the statement for input request type (CategoriesRequest) in same schema.graphql file

```graphql

input CategoriesRequest {
  categories: [String]
}

````

**source to copy:**
https://github.com/QSTN-labs/qstn-grqphql-backend-v2-implementation/blob/3b8a23a5518abf83eec778d9bd51bba72a31f892/sources-copy-and-paste/source-1/server/schema.graphql#L128



4 - Create a new file called DataUserFields.graphql (please follow "DATATYPE"+Fields.graphql naming schema) in the /graphql/server/documents/fragments directory and paste the graphql fragment into it:


```graphql
fragment DataUserFields on DataUser {
  userMostCompletedSurveys {
    profileId
    numberOfSurveys
  }
  mostEarnedCashRewards {
    profileId
    mostCashViaStripe
  }

...
...
...

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
```


**source to copy:**
https://github.com/QSTN-labs/qstn-grqphql-backend-v2-implementation/blob/3b8a23a5518abf83eec778d9bd51bba72a31f892/sources-copy-and-paste/source-1/server/fragments.graphql#L15



5 - Edit /graphql/server/service/serviceResolver.ts file and now paste the "query resolver" function into the Query: {} section.

```ts
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

        ...
        ...
        ...

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

```


**source to copy:**
https://github.com/QSTN-labs/qstn-grqphql-backend-v2-implementation/blob/3b8a23a5518abf83eec778d9bd51bba72a31f892/sources-copy-and-paste/source-1/server/service/serviceResolver.ts#L321



6 - Go to the terminal and interrupt the server and type: 

```sh
pnpm codegen && sh ./utils/schema.sh

```

This command will validate the graphql schema and generate functions from the queries or mutations.



7 - Run the server to test your updates

```sh

pnpm dev:server

--> Open your browser at: http://localhost:4000

```




## QUERY EXAMPLE

### Operation

```graphql
query SurveyAnalytics($request: SurveyAnalyticsRequest!) {
  surveyAnalytics(request: $request) {
    ...ChartDataLabelsFields
  }
}

fragment ChartDataLabelsFields on ChartDataLabels {
  labels
  data
}
```

### Variables

```graphql
{
	"request": {
		"businessIds": [
			2
		]
	}
}
