const notFound = (_, res) => res.status(404).send("route not found");

module.exports = { notFound };
