import 'babel-core/register';
import 'babel-polyfill';
import JsonClient from 'json-client';
import UpdatesClient from './clients/updates-client'
import UsersClient from './clients/users-client'
import NodeFetch from 'node-fetch';
JsonClient.fetch = NodeFetch;

export default class TinderClient {
	constructor(tinderAuth) {
		if (tinderAuth == undefined ||
			tinderAuth.fbId == undefined ||
			tinderAuth.fbToken == undefined) {
			throw Error('invalid tinder auth');
		}

		this.tinderAuth = tinderAuth;
		this.client = JsonClient('https://api.gotinder.com', {
			headers: {
				'User-Agent': 'Tinder/4.8.2 (iPhone; iOS 9.1; Scale/2.00)'
			}
		});
		this.UpdatesClient = new UpdatesClient(this.client, this.tinderAuth);
		this.UsersClient = new UsersClient(this.client, this.tinderAuth);
	}
}
