import { dbconnectionMetrics as dbconnection } from "./metrics";

const snakeCase = (str: string) => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);


export const getQueryMetricsResult = async (query: string, values: any = []): Promise<any> => {

  const client = await dbconnection.connect()
  let result: any = ''

  try {
    await client.query('BEGIN')
    const queryText = `${query}`
    result = await client.query(queryText, values)
    await client.query('COMMIT')
  } catch (e) {
    await client.query('ROLLBACK')
    throw e
  } finally {
    client.release()
  }

  return result.rows
}