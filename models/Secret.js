let mongoose = require("mongoose");

let SecretSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true }
});

mongoose.model("Secret", SecretSchema);
