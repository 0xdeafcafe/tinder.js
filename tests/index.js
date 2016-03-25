import TinderClient from './../src/tinder-client';
import TinderAuth from './../src/tinder-auth';

const fbToken = process.env.TINDER_FB_TOKEN;
const fbId = process.env.TINDER_FB_ID;
if (fbToken === undefined || fbId === undefined) {
	throw Error('Missing Facebook Token or Id in envionment variables. Set `TINDER_FB_TOKEN` and `TINDER_FB_ID` in your environment variables.');
}

(async function tests() {
	// Create Tinder Auth
	const auth = new TinderAuth(fbId, fbToken, false);

	// Create Tinder Client	
	const client = new TinderClient(auth);

	// Get Updates
	const updates = await client.UpdatesClient.get();
	console.log(updates);

	// Get User
	const user = await client.UsersClient.get('56b9075b5be5d7f255e63aa7');
	console.log(user);
})();
