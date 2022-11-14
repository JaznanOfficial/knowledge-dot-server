const mongoose = require("mongoose");
var validator = require("validator");

const instructorsSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: [true, "Email must be unique"],
            validate: [validator.isEmail, "Please provide a valid email"],
        },
        img: {
            type: String,
            validate: [validator.isURL, "Please provide an URL"],
        },
        title: {
            // required: true,
            type: String,
        },
        gender: {
            // required: true,
            type: String,
            enum: {
                values: ["male", "female", "other"],
                message: "{VALUE} isn't valid. please select 'male', 'female', or 'other' ",
            },
        },
        phone: {
            // required: true,
            type: String,
            validate: {
                validator: (value) => {
                    return validator.isMobilePhone(value, ["bn-BD"]);
                },
            },
            maxLength: 14,
            minLength: 14,
        },
        professionLevel: {
            // required: true,
            type: String,
            enum: {
                values: ["junior", "senior", "expert"],
                message: "{VALUE} is wrong. must be junior/senior/expert",
            },
        },
        status: {
            // required: true,
            type: String,
            enum: {
                values: ["active", "blocked"],
                message: "{VALUE} is wrong. must be active/blocked",
            },
        },
        social_link: {
            fb_link: {
                type: String,
                validate:[validator.isURL,"please provide an url"]
            },
            github_link: {
                type: String,
                validate:[validator.isURL,"please provide an url"]
            },
            twitter_link: {
                type: String,
                validate:[validator.isURL,"please provide an url"]
            },
            linkedin_link: {
                type: String,
                validate:[validator.isURL,"please provide an url"]
            },
        },
    },
    {
        timestamps: true,
    }
);

const Instructors = mongoose.model("instructors", instructorsSchema);

module.exports = Instructors;
