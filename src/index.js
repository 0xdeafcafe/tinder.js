import 'babel-core/register';
import 'babel-polyfill';
import JsonClient from 'json-client';
import UpdatesClient from './clients/updates'
import NodeFetch from 'node-fetch';
JsonClient.fetch = NodeFetch;

export default class TinderClient {
	constructor(apiKey) {
		this.apiKey = apiKey;
		this.client = JsonClient('https://api.gotinder.com/', {
			headers: {
				'X-Auth-Token': this.apiKey,
				'Authorization': `Token token="${this.apiKey}"`,
				'User-Agent': 'Tinder/4.8.2 (iPhone; iOS 9.1; Scale/2.00)'
			}
		});
		this.UpdatesClient = new UpdatesClient(this.apiKey, this.client);
	}
}
