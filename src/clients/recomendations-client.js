import ApiClient from './api-client';

export default class RecomendationsClient extends ApiClient {
	constructor(jsonClient, token) {
		super(jsonClient, token);
	}

	async get() {
		return await this.doRequest('post', 'user/recs', { locale: 'en-GB' }, { });
	}
}
