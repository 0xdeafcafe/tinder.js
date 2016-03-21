'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonClient = require('json-client');

var _jsonClient2 = _interopRequireDefault(_jsonClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TinderClient = function () {
	function TinderClient(apiKey) {
		_classCallCheck(this, TinderClient);

		this.apiKey = apiKey;
	}

	_createClass(TinderClient, [{
		key: 'getUpdates',
		value: function getUpdates() {
			return 'Api Key: ' + this.apiKey + '!';
		}
	}]);

	return TinderClient;
}();

exports.default = TinderClient;