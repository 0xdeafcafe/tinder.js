import ApiClient from './api-client';

export default class LikesClient extends ApiClient {
	constructor(jsonClient, token) {
		super(jsonClient, token);
	}

	async get(id, firstPhotoId) {
		return await this.doRequest('get', `like/${id}`, { 'firstPhotoID': firstPhotoId }, { });
	}
}
