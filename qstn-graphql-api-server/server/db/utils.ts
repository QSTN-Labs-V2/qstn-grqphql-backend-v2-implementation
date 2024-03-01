import { dbconnection } from "./postgres";

const snakeCase = (str: string) => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);


export const getQueryResult = async (query: string, values: any = []): Promise<any> => {
  console.log('getQueryResult ->', query)
  console.log('getQueryResult Values ->', values)

  const client = await dbconnection.connect()
  let result: any = ''

  try {
    await client.query('BEGIN')
    const queryText = `${query}`
    result = await client.query(queryText, values)
    //console.log('getQueryResult RESULT ->', result.rows)
    await client.query('COMMIT')
  } catch (e) {
    await client.query('ROLLBACK')
    throw e
  } finally {
    client.release()
  }

  return result.rows
}

export const getTransactionQueryResult = async (queries: string[], values: any[]): Promise<any> => {
  console.log('getQueryResult ->', queries)
  console.log('getQueryResult Values ->', values)

  const client = await dbconnection.connect()
  const result: any[] = []

  try {
    await client.query('BEGIN')
    
    queries.map( async (query, idx) => {
      const queryText = `${query}`
      const partial = await client.query(queryText, values[idx])
      console.log('getQueryResult RESULT TRANSACTION ->', partial.rows)
      result.push(partial.rows)
    })

    await client.query('COMMIT')
  } catch (e) {
    await client.query('ROLLBACK')
    throw e
  } finally {
    client.release()
  }

  return result[0]
}


export const getAllDocuments = async (dbstore: string, limit: number, union?: any, condition?: any): Promise<any> => {
  const client = await dbconnection.connect()
  let result: any = ''
  const user: any = ''

  console.log(condition)
  try {
    await client.query('BEGIN')

    if (!union) {

    if (condition.where) {
      const whereSelect = condition.where
      console.log(`SELECT * FROM ${dbstore} WHERE ${whereSelect} limit $1`)
      const queryText = `SELECT * FROM ${dbstore} WHERE ${whereSelect} limit $1`
      result = await client.query(queryText, [limit])

    } else { 
    console.log(`SELECT * FROM ${dbstore} LIMIT ${limit}`)
    const queryText = `SELECT * FROM ${dbstore} limit $1`
    result = await client.query(queryText, [limit])

    }

    } else {

      const queryText = `SELECT s.*, u.* FROM ${dbstore} s INNER JOIN ${union.source} u ON s.profile_id = u.${union.id} WHERE s.${union.parent}_id > 0 LIMIT $1`
      //const queryText = `SELECT s.*, (SELECT u.* FROM ${union.source} u WHERE u.${union.id} = s.profile_id) AS user FROM ${dbstore} s WHERE s.id > 0 LIMIT $1`
      result = await client.query(queryText, [limit])

    }

    await client.query('COMMIT')
  } catch (e) {
    await client.query('ROLLBACK')
    throw e
  } finally {
    client.release()
  }

  return result.rows

}

export const getDocumentsByField = async (dbstore: string, field: string, content: string, union?: any): Promise<any> => {
    const client = await dbconnection.connect()
    let result: any = '' 
    const user: any = ''

    try {
      await client.query('BEGIN')
      //const queryText = `SELECT * FROM ${dbstore} WHERE "${field}" = $1`
      //result = await client.query(queryText, [`${content}`])
      if (!union) {
        const queryText = `SELECT * FROM ${dbstore} WHERE "${field}" = $1`
        result = await client.query(queryText, [`${content}`])
        console.log('NO UNION', queryText)
        } else {
          const queryText = `SELECT s.*, u.* FROM ${dbstore} s INNER JOIN ${union.source} u ON s.profile_id = u.${union.id} WHERE s.${field} = $1`
          //const queryText = `SELECT s.*, (SELECT u.* FROM ${union.source} u WHERE u.${union.id} = s.profile_id) AS user FROM ${dbstore} s WHERE s.id > 0 LIMIT $1`
          console.log(queryText)
          result = await client.query(queryText, [`${content}`])     
        }

      await client.query('COMMIT')
    } catch (e) {
      await client.query('ROLLBACK')
      throw e
    } finally {
      client.release()
    }
  
    return result.rows
  
  }


export const searchDocuments = async (request: any, union?: any): Promise<any> => {
  const { limit, query, type, customFilters } = request;
  
  const client = await dbconnection.connect()
  let result: any = '' 
  const user: any = ''

  try {
    await client.query('BEGIN')
    if (!union) {
      if (type === 'ENDUSERS') {
        const field = 'display_name';
        const queryText = `SELECT * FROM users WHERE "account_type" = 'ENDUSER' AND "${field}" ILIKE $1 LIMIT $2`;
        console.log(queryText);
        
        result = await client.query(queryText, [`%${query}%`, limit])
      } else if (type === 'BUSINESSES') {
        const field = 'display_name';
        const queryText = `SELECT * FROM users WHERE "account_type" = 'BUSINESS' AND "${field}" ILIKE $1 LIMIT $2`;
        console.log(queryText);

        result = await client.query(queryText, [`%${query}%`, limit])
      } else if (type === 'SURVEYS') {
        const field = 'title';
        const queryText = `SELECT * FROM surveys WHERE ("survey_type" = 'PUBLIC' OR "survey_type" = 'PRIVATE') AND "${field}" ILIKE $1 LIMIT $2`;
        console.log(queryText);
        
        result = await client.query(queryText, [`%${query}%`, limit])
      } else if (type === 'TUTORIALS') {
        const field = 'title';
        const queryText = `SELECT * FROM surveys WHERE "survey_type" = 'TUTORIAL' AND "${field}" ILIKE $1 LIMIT $2`;
        console.log(queryText);

        result = await client.query(queryText, [`%${query}%`, limit])
      } else if (type === 'MARKETPLACE') {
        const field = 'name';
        const queryText = `SELECT * FROM marketplace_products WHERE "${field}" ILIKE $1 LIMIT $2`;
        console.log(queryText);

        result = await client.query(queryText, [`%${query}%`, limit])
      } else {
        const field = 'contract_address';
        const queryText = `SELECT * FROM nft_images WHERE "${field}" ILIKE $1 LIMIT $2`;
        console.log(queryText);

        result = await client.query(queryText, [`%${query}%`, limit])
      }

      } else {
        const field = 'profile_id'
        const queryText = `SELECT s.*, u.* FROM users s INNER JOIN ${union.source} u ON s.profile_id = u.${union.id} WHERE s.${field} = $1`;
        console.log(queryText);
        //const queryText = `SELECT s.*, (SELECT u.* FROM ${union.source} u WHERE u.${union.id} = s.profile_id) AS user FROM ${dbstore} s WHERE s.id > 0 LIMIT $1`
        result = await client.query(queryText, [`%${query}%`])     
      }

    await client.query('COMMIT')
  } catch (e) {
    await client.query('ROLLBACK')
    throw e
  } finally {
    client.release()
  }

  return result.rows

}

  
export const addUserDocumentToDB = async (dbstore: string, email: string, displayName: string, accountType: string, bio?: string, avatar?: string): Promise<any> => {
  const client = await dbconnection.connect()
  let result: any = '' 
  //const now = new Date().toISOString()
  try {
    await client.query('BEGIN')
    const queryText = `INSERT INTO ${dbstore} ("email", "display_name", "account_type", "bio", "avatar") VALUES ($1, $2, $3, $4, $5) RETURNING *`
    result = await client.query(queryText, [email, displayName, accountType, bio, avatar])
    await client.query('COMMIT')
  } catch (e) {
    await client.query('ROLLBACK')
    throw e
  } finally {
    client.release()
  }
  console.log(`User Added with ID: ${result.rows[0].profile_id}`)
  return result.rows[0]
  
}

export const addProfileDocumentToDB = async (dbstore: string, email: string, issuer: string, accountType: string, lastLoginAt: Date, businessName?: string, iden3issuer?: string, firstName?: string, lastName?: string, displayName?: string, category?: string, interests?: string): Promise<any> => {
    const client = await dbconnection.connect()
    let result: any = '' 
    const now = new Date().toISOString()
    //console.log('----------', email, businessName, issuer, iden3issuer, accountType, lastLoginAt)
    try {
      await client.query('BEGIN')
      const queryText = `INSERT INTO ${dbstore} ("email", "business_name", "display_name", "first_name", "last_name", "issuer", "iden3issuer", "account_type", "last_login_at", "category", "interests") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`
      result = await client.query(queryText, [email, businessName, displayName, firstName, lastName, issuer, iden3issuer, accountType, lastLoginAt, category, JSON.stringify(interests)])
      await client.query('COMMIT')
    } catch (e) {
      await client.query('ROLLBACK')
      throw e
    } finally {
      client.release()
    }
    console.log(`Profile Added with ID: ${result.rows[0].profile_id}`)
    return result.rows[0]
  
}

export const updateProfileDocumentDB = async (dbstore: string, request: any): Promise<any> => {
  const client = await dbconnection.connect()
  const { profileId, firstName, lastName, businessName, displayName, avatar, email, location, age, gender, bio, issuer, iden3issuer, category, interests, accountType, accountStatus, visibility, verified, kycAttemptId, lastLoginAt } = request
  let result: any = '' 

  const queryArgs: any[] = [];
  const setClause: string[] = [];

  if (firstName) {
    setClause.push(`"first_name" = $${setClause.length + 1}`);
    queryArgs.push(firstName);
  }

  if (lastName) {
    setClause.push(`"last_name" = $${setClause.length + 1}`);
    queryArgs.push(lastName);
  }

  if (businessName) {
    setClause.push(`"business_name" = $${setClause.length + 1}`);
    queryArgs.push(businessName);
  }

  if (displayName) {
    setClause.push(`"display_name" = $${setClause.length + 1}`);
    queryArgs.push(displayName);
  }

  if (category) {
    setClause.push(`"category" = $${setClause.length + 1}`);
    queryArgs.push(category);
  }

  if (interests) {
    setClause.push(`"interests" = $${setClause.length + 1}`);
    queryArgs.push(JSON.stringify(interests));
  }

  if (accountType) {
    setClause.push(`"account_type" = $${setClause.length + 1}`);
    queryArgs.push(accountType);
  }

  if (accountStatus) {
    setClause.push(`"account_status" = $${setClause.length + 1}`);
    queryArgs.push(accountStatus);
  }

  if (visibility) {
    setClause.push(`"visibility" = $${setClause.length + 1}`);
    queryArgs.push(visibility);
  }

  if (verified) {
    setClause.push(`"verified" = $${setClause.length + 1}`);
    queryArgs.push(verified);
  }

  if (kycAttemptId) {
    setClause.push(`"kyc_attempt_id" = $${setClause.length + 1}`);
    queryArgs.push(kycAttemptId);
  }

  if (avatar) {
    setClause.push(`"avatar" = $${setClause.length + 1}`);
    queryArgs.push(avatar);
  }

  if (email) {
    setClause.push(`"email" = $${setClause.length + 1}`);
    queryArgs.push(email);
  }

  if (bio) {
    setClause.push(`"bio" = $${setClause.length + 1}`);
    queryArgs.push(bio);
  }

  if (location) {
    setClause.push(`"location" = $${setClause.length + 1}`);
    queryArgs.push(location);
  }

  if (age) {
    setClause.push(`"age" = $${setClause.length + 1}`);
    queryArgs.push(age);
  }
  
  if (gender) {
    setClause.push(`"gender" = $${setClause.length + 1}`);
    queryArgs.push(gender);
  }  

  if (issuer) {
    setClause.push(`"issuer" = $${setClause.length + 1}`);
    queryArgs.push(issuer);
  }

  if (iden3issuer) {
    setClause.push(`"iden3issuer" = $${setClause.length + 1}`);
    queryArgs.push(iden3issuer);
  }

  if (lastLoginAt) {
    setClause.push(`"last_login_at" = $${setClause.length + 1}`);
    queryArgs.push(lastLoginAt);
  }

  setClause.push(`"updated_at" = $${setClause.length + 1}`);
  queryArgs.push(new Date().toISOString());

  if (setClause.length === 0) {
    throw new Error("No fields to update.");
  }


  try {
    await client.query('BEGIN')
    if (profileId) {
      const queryText = `UPDATE ${dbstore} SET ${setClause.join(", ")} WHERE "profile_id" = $${setClause.length + 1} RETURNING *`;
      queryArgs.push(profileId); 
      console.log('queryText', queryText)
      console.log('queryArgs',queryArgs)
      result = await client.query(queryText, queryArgs); 
    } else {
      const queryText = `UPDATE ${dbstore} SET ${setClause.join(", ")} WHERE "email" = $${setClause.length + 1} RETURNING *`;
      queryArgs.push(email); 
      console.log('queryText', queryText)
      console.log('queryArgs',queryArgs)
      result = await client.query(queryText, queryArgs); 
    }
    await client.query('COMMIT')
  } catch (e) {
    await client.query('ROLLBACK')
    throw e
  } finally {
    client.release()
  }
  console.log(`User Profile ID: ${result.rows[0].profile_id} updated!`)
  return result.rows[0]
  
}

export const addSurveyDocumentToDB = async (dbstore: string, request: any): Promise<any> => {
  const client = await dbconnection.connect()
  const { title, description, logo, profileId, type, status, pages, campaignType } = request
  let result: any = '' 
  let user: any = ''
  //const now = new Date().toISOString()
  console.log('addSurveyDocumentToDB', title, description)
  try {
    await client.query('BEGIN')
    const queryText = `INSERT INTO ${dbstore} ("title", "description", "logo", "profile_id", "survey_type", "survey_status", "pages", "campaign_type") VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`
    result = await client.query(queryText, [title, description, logo, profileId, type, status, JSON.stringify(pages), campaignType])
    const queryUser = `SELECT * FROM users WHERE "profile_id" = $1`
    user = await client.query(queryUser, [profileId])
    await client.query('COMMIT')
  } catch (e) {
    await client.query('ROLLBACK')
    throw e
  } finally {
    client.release()
  }
  console.log(`Survey Added with ID: ${result.rows[0].survey_id}`)
  const newsurvey = result.rows[0]
  newsurvey.user = user.rows[0]
  return result.rows[0]
  
}

export const updateSurveyDocumentDB = async (dbstore: string, request: any): Promise<any> => {
  const client = await dbconnection.connect()
  const { surveyId, title, description, logo, profileId, type, status, pages} = request
  let result: any = '' 
  let user: any = ''
  console.log('updateSurveyDocumentDB', title, description)
  try {
    await client.query('BEGIN')
    const queryText = `UPDATE ${dbstore} SET "title" = $1, "description" = $2, "logo" = $3, "profile_id" = $4, "survey_type" = $5, "survey_status" = $6, "pages" = $7 WHERE "survey_id" = $8 RETURNING *`
    result = await client.query(queryText, [title, description, logo, profileId, type, status, JSON.stringify(pages), surveyId])
    const queryUser = `SELECT * FROM users WHERE "profile_id" = $1`
    user = await client.query(queryUser, [profileId])
    await client.query('COMMIT')
  } catch (e) {
    await client.query('ROLLBACK')
    throw e
  } finally {
    client.release()
  }
  console.log(`Survey ID: ${result.rows[0].id} updated!`)
  const updatedsurvey = result.rows[0]
  updatedsurvey.user = user.rows[0]
  return result.rows[0]
  
}

/*
{
	"request": {
		"profileId": 1,
		"title": "My First Survey",
		"description": "first QSTN survey created using the tool",
		"type": "PRIVATE",
		"status": "DRAFTED",
		"pages": {
			"elements": [
				 {
          "name": "FirstName",
          "title": "Enter your first name:",
          "type": "TEXT",
					"isRequired": true
        },
        {
          "name": "LastName",
          "title": "Enter your last name:",
          "type": "TEXT",
					"isRequired": true
        }
			]
		}
	}
}7
*/