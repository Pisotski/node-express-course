const auth = (req, res, next) => {
	console.log("authorized");
	next();
};

const middleware = (req, res, next) => {
	console.log("controller middleware");
	next();
};
module.exports = {
	auth,
	middleware,
};
