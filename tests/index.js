import TinderClient from './../src';
const apiKey = process.env.TINDER_AUTH_TOKEN;
if (apiKey === undefined) {
	throw Error('Missing Api Key in envionment variables. Set `TINDER_AUTH_TOKEN` to your auth token.');
}

(async function tests() {
	const client = new TinderClient(apiKey);
	const updates = await client.UpdatesClient.get();
	console.log(updates);
})();
