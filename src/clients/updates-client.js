export default class UpdatesClient {
	constructor(jsonClient) {
		this.client = jsonClient;
	}

	
	async get(lastUpdated = undefined) {
		if (lastUpdated === undefined) {
			lastUpdated = new Date(Date.now());
		}

		return await this.client('post', 'updates', {}, { 'last_activity_date': lastUpdated.toISOString() });
	}
}
