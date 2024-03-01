import { NextApiRequestBuilder, ResponseMock } from "@next-testing/api"
import handler from '../../../pages/api/polygon/biconomygasless'

describe('Unit Testing:  /api/polygon/biconomygasless', () => {
	function mockRequestResponse(method: string, body: Record<string, string| string[]>) {
		const req = new NextApiRequestBuilder()
				.setMethod(method)
				.setBody(body)
				.build()

		const res = ResponseMock()
		return {req, res}	
	}

	test('Gasless function works', async () => {
		const body = {address: "0xc9aA0cF0d639b8DA98B3B78a7095544BE5781Ed0"}
		const { req, res} = mockRequestResponse('POST', body)
		await handler(req, res);
		expect(res.getStatusCode()).toEqual(200);
		expect(res.getBodyJson().success).toBe(true);
	})

	test('Error should occur when "address" is not provided', async () => {
		const body = {address: ""}
        const { req, res } = mockRequestResponse('POST', body)
        await handler(req, res)
        expect(res.getStatusCode()).toEqual(500)
    })
})

