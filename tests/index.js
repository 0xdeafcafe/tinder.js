import TinderClient from './../src/tinder-client';
import TinderAuth from './../src/tinder-auth';
import fs from 'fs-promise';

const fbToken = process.env.TINDER_FB_TOKEN;
const fbId = process.env.TINDER_FB_ID;
if (fbToken === undefined || fbId === undefined) {
	throw Error('Missing Facebook Token or Id in envionment variables. Set `TINDER_FB_TOKEN` and `TINDER_FB_ID` in your environment variables.');
}

(async function tests() {
	// Create Tinder Auth
	const auth = new TinderAuth(fbId, fbToken, false);
	const token = await auth.getToken();

	// Create Tinder Client	
	const client = new TinderClient(token);

	const ladies = JSON.parse(await fs.readFile('.recs.json'));
	
	// for (let i = 0; i < 50; i++) {
	// 	const recs = (await client.RecomendationsClient.get()).results;
	// 	for (const rec of recs) {
	// 		if (ladies[rec._id] === void 0)
	// 			ladies[rec._id] = rec;
	// 	}
	// }

	let index = 0;
	for (const ladyId in ladies) {
		const lady = ladies[ladyId];
		if (lady.matched === true) continue;
		let resp = void 0;
		try {
			resp = await client.LikesClient.get(lady._id, lady.photos[0].id);
		} catch (error) { console.log(error); }
		await new Promise(resolve => { setTimeout(resolve, 100); });
		console.log(`[${index} - ${JSON.stringify(resp)}]`);
		ladies[ladyId].matched = true;
		index++;
	}

	await fs.writeFile('.recs.json', JSON.stringify(ladies, null, '\t'));
})();
