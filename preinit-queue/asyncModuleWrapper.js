const asyncModule = require("./asyncModule");

const asyncModuleWrapper = module.exports;
asyncModuleWrapper.initialized = false;
asyncModuleWrapper.initialize = function() {
	activeState.initialize.apply(activeState, arguments);
};

asyncModuleWrapper.returnTime = function() {
	activeState.returnTime.apply(activeState, arguments);
};

let pending = [];
const notInitializedState = {
	initialize: function(callback) {
		asyncModule.initialize(function() {
			asyncModuleWrapper.initalized = true;
			activeState = initializedState;

			pending.forEach(function(req) {
				asyncModule[req.method].apply(null, req.args);
			});
			pending = [];

			callback();
		});
	},

	returnTime: function(callback) {
		return pending.push({
			method: "returnTime",
			args: arguments
		});
	}
};

let initializedState = asyncModule;

let activeState = notInitializedState;
