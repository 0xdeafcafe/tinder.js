import 'babel-core/register';
import 'babel-polyfill';
import JsonClient from 'json-client';
import NodeFetch from 'node-fetch';
JsonClient.fetch = NodeFetch;

export default class TinderAuth {
	constructor(fbId, fbToken, forceRefresh) {
		this.fbId = fbId;
		this.fbToken = fbToken;
		this.forceRefresh = forceRefresh;
		this.token = undefined;
		this.client = JsonClient('https://api.gotinder.com', {
			headers: {
				'User-Agent': 'Tinder/4.8.2 (iPhone; iOS 9.1; Scale/2.00)'
			}
		});
	}
	
	async getToken(force = false) {
		if (this.token == undefined || force) {
			const response = await this.client('post', `auth`, {}, {
				'force_refresh': this.forceRefresh,
				'facebook_id': this.fbId,
				'facebook_token': this.fbToken,
			});
			this.token = response.token;
		}
		
		return this.token;
	}
}
