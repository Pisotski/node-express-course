const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	// mongoose will not allow any object to be passed
	// without name or price
	name: {
		type: String,
		required: [true, "product name must be provided"],
	},
	price: {
		type: Number,
		required: [true, "product price must be provided"],
	},
	featured: {
		type: Boolean,
		default: false,
	},
	rating: {
		type: Number,
		default: 4.5,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
	// mongoose will not allow any other values
	// than on of enum array values
	// company: {
	// 	type: String,
	// 	enum: ["ikea", "liddy", "caressa", "marcos"],
	// },

	// same with error handling
	company: {
		type: String,
		enum: {
			values: ["ikea", "liddy", "caressa", "marcos"],
			message: "{VALUE} is not supported",
		},
	},
});

module.exports = mongoose.model("Product", productSchema);
