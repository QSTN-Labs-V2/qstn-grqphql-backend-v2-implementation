import { NextApiRequestBuilder, ResponseMock } from "@next-testing/api"
import ansrBalance from '../../../pages/api/near/ansrbalance'

describe('Get balance', () => {
	
	function mockRequestResponse(method: string, query: Record<string, string| string[]>) {
		const req = new NextApiRequestBuilder()
				.setMethod(method)
				.setQuery(query)
				.build()

		const res = ResponseMock()
		return {req, res}	
	}

	test('balance request function works', async () => {
		const query = {profileId: "blockydev.testnet"}
		const { req, res} = mockRequestResponse('GET', query)
		
		// make call
		await ansrBalance(req, res)
		expect(res.getStatusCode()).toEqual(200)
	})

	test('Non user account ansr balance is zero', async () => {
		const query = {profileId: "blockydev.testnet"}
		const { req, res} = mockRequestResponse('GET', query)

		// make call
		await ansrBalance(req, res)
		expect(res.getBodyJson().data).toStrictEqual(0)
	})
})

