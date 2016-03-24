export default class UpdatesClient {
	constructor(apiKey, jsonClient) {
		this.apiKey = apiKey;
		this.client = jsonClient;
	}

	async get(lastUpdated = undefined) {
		if (lastUpdated === undefined) {
			lastUpdated = new Date(Date.now()).toISOString();
		}

		return await this.client('post', 'updates', {}, { 'last_activity_date': lastUpdated });
	}
}
