import request from 'supertest'

const graphQLEndpoint = 'http://localhost:4000/'

describe('Test query', () => {

	const postData = {
		query: `query ping{
			ping
		}`
	}

	test('Ping returns Pong', async () => {
		request(graphQLEndpoint)
			.post('?')
			.send(postData)
			.expect(200)
			.end((error, response) => {
				if (error) console.error(error);
				const res = JSON.parse(response.text);
				expect(res.data['ping']).toEqual('pong'); 
			})		
	})
})
