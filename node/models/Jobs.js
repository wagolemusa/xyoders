
const mongoose = require("mongoose");
const JobSchema = new mongoose.Schema (
    {
        resoan: {
            type: String,
            require:true,
            unique: false
        },
        desc:{
            type: String,
            require: true
        },
        url:{
            type: String,
            require: true
        },
        money_spend:{
            type: String,
            require: true
        },
        period:{
            type: String,
            require: true
        },
        firstname:{
            type: String,
            require: true
        },
        lastname:{
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        phone: {
            type: String,
            require: true
        },
        company_name:{
            type: String,
            require: true
        },
        company_size:{
            type: String,
            require: true

        }
    }
)
module.exports = mongoose.model("Job", JobSchema)