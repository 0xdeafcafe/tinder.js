var TinderClient = require('./../lib').default;
var client = new TinderClient('swag');
console.log(client.getUpdates());
