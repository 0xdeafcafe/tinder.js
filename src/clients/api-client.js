import UpdatesClient from './../tinder-auth'

export default class ApiClient {
	constructor(jsonClient, token) {
		this.client = jsonClient;
		this.token = token;
	}

	async doRequest(method, path, query, body) {
		return await this.client(method, path, query, body, {
			headers: {
				'X-Auth-Token': this.token,
				'Authorization': `Token token="${this.token}"`,
			}
		});
	}
}
