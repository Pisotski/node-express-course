const logger = (req, res, next) => {
	const { method, originalUrl } = req;
	const reqTime = new Date().toTimeString();
	console.log(method, originalUrl, reqTime);
	next();
};

module.exports = { logger };
