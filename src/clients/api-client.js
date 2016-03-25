import UpdatesClient from './../tinder-auth'

export default class ApiClient {
	constructor(jsonClient, tinderAuth) {
		this.client = jsonClient;
		this.tinderAuth = tinderAuth;
	}

	async doRequest(method, path, query, body) {
		var token = await this.tinderAuth.getToken();
		return await this.client(method, path, query, body, {
			headers: {
				'X-Auth-Token': token,
				'Authorization': `Token token="${token}"`,
			}
		});
	}
}
