import TinderClient from './../src';
const authToken = process.env.TINDER_AUTH_TOKEN;
if (authToken === undefined) {
	throw Error('Missing Api Key in envionment variables. Set `TINDER_AUTH_TOKEN` to your auth token.');
}

(async function tests() {
	const client = new TinderClient(authToken);

	// Get Updates
	const updates = await client.UpdatesClient.get();
	console.log(updates);

	// Get User
	const user = await client.UsersClient.get('56b9075b5be5d7f255e63aa7');
	console.log(user);
})();
