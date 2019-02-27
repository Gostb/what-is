/* eslint-disable */
// TODO: Rewrite this shit (and modules/api/index.js)

Object.defineProperty(exports, '__esModule', { value: true });
const env = process.env.NODE_ENV || 'production';
let configPath = `${process.cwd()}/configs/${(env === 'debug' ? 'development' : env)}.js`;

function fetchConfig() {
	let conf;
	try {
		conf = require(configPath);
	} catch (err) {
		console.error(err);
		process.exit();
	}
	return conf;
}

exports.config = fetchConfig();
