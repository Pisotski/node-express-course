class CustomError extends Error {
	constructor(message, statusCode) {
		super(statusCode);
		this.statusCode = statusCode;
	}
}

const errorHandlerMiddleware = (err, req, res, next) => {
	console.log(
		`==============================================================================================================================================================================`
	);
	if (err instanceof CustomError) {
		res.status(err.statusCode).json({ ERROR: err.message });
	}
	res.status(500).send(`something went wrong try again later`);
};

module.exports = { CustomError, errorHandlerMiddleware };
