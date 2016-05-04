import 'babel-core/register';
import 'babel-polyfill';
import JsonClient from 'json-client-node';
import UpdatesClient from './clients/updates-client';
import UsersClient from './clients/users-client';
import RecomendationsClient from './clients/recomendations-client';
import LikesClient from './clients/likes-client';

export default class TinderClient {
	constructor(token) {
		if (token == undefined) {
			throw Error('invalid tinder token');
		}

		this.token = token;
		this.client = JsonClient('https://api.gotinder.com', {
			headers: {
				'User-Agent': 'Tinder/4.8.2 (iPhone; iOS 9.1; Scale/2.00)'
			}
		});
		this.UpdatesClient = new UpdatesClient(this.client, this.token);
		this.UsersClient = new UsersClient(this.client, this.token);
		this.RecomendationsClient = new RecomendationsClient(this.client, this.token);
		this.LikesClient = new LikesClient(this.client, this.token);
	}
}
