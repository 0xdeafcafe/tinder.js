export default class UsersClient {
	constructor(jsonClient) {
		this.client = jsonClient;
	}

	async get(id) {
		return await this.client('get', `user/${id}`);
	}
}
