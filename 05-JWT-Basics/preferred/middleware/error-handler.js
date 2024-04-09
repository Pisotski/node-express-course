class CustomError extends Error {
	constructor(message, statusCode) {
		super(message, statusCode);
		this.statusCode = statusCode;
	}
}

const errorHandlerMiddleware = (err, req, res, next) => {
	if (err instanceof CustomError) {
		res.status(err.statusCode).json({ ERROR: err.message });
	}
	res.status(500).send(`something went wrong try again later`);
};

module.exports = { CustomError, errorHandlerMiddleware };
