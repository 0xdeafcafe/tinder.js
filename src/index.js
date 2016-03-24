import 'babel-core/register';
import 'babel-polyfill';
import JsonClient from 'json-client';
import UpdatesClient from './clients/updates-client'
import UsersClient from './clients/users-client'
import NodeFetch from 'node-fetch';
JsonClient.fetch = NodeFetch;

export default class TinderClient {
	constructor(authToken) {
		this.authToken = authToken;
		this.client = JsonClient('https://api.gotinder.com', {
			headers: {
				'X-Auth-Token': this.authToken,
				'Authorization': `Token token="${this.authToken}"`,
				'User-Agent': 'Tinder/4.8.2 (iPhone; iOS 9.1; Scale/2.00)'
			}
		});
		this.UpdatesClient = new UpdatesClient(this.client);
		this.UsersClient = new UsersClient(this.client);
	}
}
