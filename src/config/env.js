export const env = {
	port: process.env.PORT || 2022,
	nodeEnv: process.env.NODE_ENV || "development",
	mongodbUri: process.env.DB_URI || "mongodb://localhost:27017/boilerplate",
};
