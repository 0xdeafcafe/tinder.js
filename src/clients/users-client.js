import ApiClient from './api-client';

export default class UsersClient extends ApiClient {
	constructor(jsonClient, token) {
		super(jsonClient, token);
	}

	async get(id) {
		return await this.doRequest('get', `user/${id}`);
	}
}
