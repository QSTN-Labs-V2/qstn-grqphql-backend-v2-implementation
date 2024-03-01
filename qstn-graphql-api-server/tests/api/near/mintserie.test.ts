import { NextApiRequestBuilder, ResponseMock } from "@next-testing/api"
import handler from "../../../pages/api/near/mintserie"

describe('Near mint serie', () => {

    function mockRequestResponse(method: string, body: any) {
        const req = new NextApiRequestBuilder()
            .setMethod(method)
            .setBody(body)
            .build()

        const res = ResponseMock()
        return { req, res }
    }

    test('Error Should Occur when "receiverId" or "seriesId" is Not provided', async () => {
        const body = { receiverId: "receiver", seriesId: "" }
        const { req, res } = mockRequestResponse('POST', body)
        await handler(req, res)
        expect(res.getStatusCode()).toEqual(500)
    })

    test('ExecutionError should throw for invalid input "seriesId" ', async () => {
        const body = { receiverId: "receiver", seriesId: "series 1" }
        const { req, res } = mockRequestResponse('POST', body)
        await handler(req, res)
        expect(res.getStatusCode()).toEqual(500)
        expect(res.getBodyJson().message).toContain("Failed to deserialize input from JSON")
    })

    test('Testing Successful NFT Mint', async () => {
        const body = { receiverId: "receiver", seriesId: "1" }
        const { req, res } = mockRequestResponse('POST', body)
        await handler(req, res)
        expect(res.getStatusCode()).toEqual(200)
        expect(res.getBodyJson().success).toBe(true)
    })

})

