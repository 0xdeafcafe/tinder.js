import ApiClient from './api-client';

export default class UpdatesClient extends ApiClient {
	constructor(jsonClient, tinderAuth) {
		super(jsonClient, tinderAuth);
	}

	async get(lastUpdated = undefined) {
		if (lastUpdated == undefined) {
			lastUpdated = new Date(Date.now());
		}

		return await this.doRequest('post', 'updates', {}, { 'last_activity_date': lastUpdated.toISOString() });
	}
}
