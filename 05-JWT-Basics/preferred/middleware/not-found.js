const notFoundMiddleware = (err, req, res, next) => {
	res.status(404).json({ ERROR: err.message });
};

module.exports = {
	notFoundMiddleware,
};
