var oldwrite = process.stdout.write;
var timeRegEx = /^"\[\\u001b\[90m\d{2}:\d{2}:\d{2}\\u001b\[39m\] "$/;
var log = require("sigh-core").log;
var state = 0;
var lastTimeMessage;

function decoratedWrite(message) {
	// require("fs").writeFileSync(String(Math.random()), JSON.stringify(arguments));
	if (state === 1 || isRelevant(message)) {
		return customWrite(message);
	}
	return oldwrite.apply(process.stdout, arguments);
};

function isRelevant(message) {
	if (typeof message !== "string") return false;
	message = JSON.stringify(message);
	if (message.match(timeRegEx)) {
		return true;
	}
	return false;
}

function customWrite(message) {
	if (state === 0) {
		lastTimeMessage = message;
		state = 1;
	} else if (state === 1) {
		process.stdout.write = oldwrite;
		message = (lastTimeMessage + message).trim();
		log.call(log, message);
		process.stdout.write = decoratedWrite;
		state = 0;
	}
	// return true;
}

module.exports = function() {
	process.stdout.write = decoratedWrite;
};