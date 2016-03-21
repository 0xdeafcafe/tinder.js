import JsonClient from 'json-client';

export default class TinderClient {
	constructor(apiKey) {
		this.apiKey = apiKey;
	}

	getUpdates() {
		return `Api Key: ${this.apiKey}!`;
	}
}
