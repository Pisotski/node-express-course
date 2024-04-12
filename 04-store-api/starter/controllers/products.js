const Product = require("../models/product");
require("colors");

const getAllProductsStatic = async (req, res) => {
	const products = await Product.find({
		price: { $gt: 30 },
	})
		.sort("price")
		.select("name price")
		.limit(10)
		.skip(0);
	res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
	const { featured, company, name, sort, fields, numericFilters } = req.query;
	const queryObject = {};

	if (featured) {
		queryObject.featured = featured === "true" ? true : false;
	}
	if (company) {
		queryObject.company = company;
	}
	if (name) {
		queryObject.name = { $regex: name, $options: "i" };
	}
	if (numericFilters) {
		// price-$gt-40,rating-$gte-4
		const operatorMap = {
			">": "$gt",
			">=": "$gte",
			"=": "$eq",
			"<": "$lt",
			"<=": "$lte",
		};
		// ====function used in the guide========
		// ======================================
		// const regEx = /\b(<|<=|=|>=|>)\b/g;
		// let filters = numericFilters.replace(
		// 	regEx,
		// 	(match) => `-${operatorMap[match]}-`
		// );
		// const options = ["price", "rating"];
		// filters = filters.split(",").forEach((item) => {
		// 	const [field, operator, value] = item.split("-");
		// 	if (options.includes(field)) {
		// 		queryObject[field] = { [operator]: parseInt(value) };
		// 	}
		// });

		// =============================================
		// my function that i do understand
		// i promise i will figure out regex one day
		// =============================================
		numericFilters.split(",").forEach((queryElement) => {
			for (let i = 0; i < queryElement.length; i++) {
				if (operatorMap.hasOwnProperty(queryElement[i])) {
					let operator = queryElement[i];
					const field = queryElement.slice(0, i);
					const operatorNumber = {};
					if (operatorMap.hasOwnProperty(queryElement[i + 1])) {
						operator = operator + queryElement[i + 1];
						i = i + 1;
					}
					let numberValue = queryElement.slice(i + 1);
					const mongoosedOperator = operatorMap[operator];
					operatorNumber[mongoosedOperator] = numberValue;
					queryObject[field] = operatorNumber;
					break;
				}
			}
		});
	}
	let result = Product.find(queryObject);

	//sort
	if (sort) {
		const sortList = sort.split(",").join(" ");
		result = result.sort(sortList);
	} else {
		result = result.sort("createdAt");
	}

	if (fields) {
		const fieldsList = fields.split(",").join(" ");
		result = result.select(fieldsList);
	}
	const page = parseInt(req.query.page) || 1;
	const limit = parseInt(req.query.limit) || 10;
	const skip = (page - 1) * limit;

	result = result.skip(skip).limit(limit);
	const products = await result;
	res.status(200).json({ nbHits: products.length, products });
};

module.exports = { getAllProducts, getAllProductsStatic };
