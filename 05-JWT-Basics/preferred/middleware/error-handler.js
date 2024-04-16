const { CustomError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
	if (err instanceof CustomError) {
		res.status(err.statusCode).json({ ERROR: err.message });
		return;
	}
	res
		.status(StatusCodes.INTERNAL_SERVER_ERROR)
		.send(`something went wrong try again later`);
};

module.exports = { errorHandlerMiddleware };
