const gui = require('./gui');
const language = require('./languageSupport');

function activate(context) {
	gui.activate(context);
	language.activate(context);
}

function deactivate() {
	language.deactivate();
}

module.exports = {
	activate,
	deactivate
}
