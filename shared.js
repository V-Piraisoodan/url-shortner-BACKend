const mongoose = require("mongoose");



module.exports = async() => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		await mongoose.connect(process.env.DB);
		console.log("Connected");
	} catch (error) {
		console.log(error);
		console.log("not connected");
	}
};