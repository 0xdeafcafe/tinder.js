import TinderClient from './../src';
const authToken = process.env.TINDER_AUTH_TOKEN;
if (authToken === undefined) {
	throw Error('Missing Api Key in envionment variables. Set `TINDER_AUTH_TOKEN` to your auth token.');
}

(async function tests() {
	const client = new TinderClient(authToken);
	const updates = await client.UpdatesClient.get();
	console.log(updates);
})();
