const notFoundMiddleware = (err, req, res, next) => {
	res.status(404).json({ ERROR: err });
};

module.exports = {
	notFoundMiddleware,
};
