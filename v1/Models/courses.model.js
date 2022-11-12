const mongoose = require("mongoose");
var validator = require("validator");

const coursesSchema = mongoose.Schema(
    {
        name: {
            unique:[true, "Name must be unique"],
            type: String,
            required: [true, "Name is required"],
        },
        trailer_video: {
            type: String,
            required: [true, "trailer_video is required"],
            // unique: [true, "Email must be unique"],
            validate: [validator.isURL, "Please provide an URL"],
        },
        thumb_img: {
            required: true,
            type: String,
            validate: [validator.isURL, "Please provide an URL"],
        },
        instructor: {
            required: true,
            type: String,
        },
        level: {
            required: true,
            type: String,
            enum: {
                values: ["beginner", "intermediate", "expert"],
                message:
                    "{VALUE} isn't valid. please select 'beginner', 'intermediate', or 'expert' ",
            },
        },
        price: {
            required: true,
            type: Number,
        },
        description: {
            required: true,
            type: String,
        },
        rating: {
            total_rating: {
                type: Number,
            },
            total_people: {
                type: Number,
            },
        },
        category: {
            type: String,
            required:true,
            
        },
        certificate_details: {
            type: String,

        },
        for_whom: {
            type: String
        },
        video: [{
            type: String,
            validate: [validator.isURL, "Please provide an URL"],
        }]
    },
    {
        timestamps: true,
    }
);

const Courses = mongoose.model("Courses", coursesSchema);

module.exports = Courses;
