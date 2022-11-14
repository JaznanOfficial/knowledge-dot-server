const mongoose = require("mongoose");
var validator = require("validator");

const coursesSchema = mongoose.Schema(
    {
        uname: {
            unique: [true, "User Name must be unique"],
            type: String,
            required: [true, "User Name is required"],
        },
        name: {
            unique: [true, "Name must be unique"],
            type: String,
            required: [true, "Name is required"],
        },
        level: {
            required: true,
            type: String,
            enum: {
                values: ["Beginner", "Intermediate", "Expert"],
                message:
                    "{VALUE} isn't valid. please select 'Beginner', 'Intermediate', or 'Expert' ",
            },
        },
        badge: {
            required: true,
            type: String,
            enum: {
                values: ["Normal", "Popular", "Top"],
                message:
                    "{VALUE} isn't valid. please select 'Normal', 'Popular', 'Top ",
            },
        },
        duration: {
            unique: [false],
            type: Number,
            required: [true, "Duration is required"],
        },
        language: {
            required: true,
            type: String,
            enum: {
                values: ["Bengali", "English", "Hindi"],
                message:
                    "{VALUE} isn't valid. please select 'Bengali', 'English', or 'Hindi' ",
            },
        },
        accessibility: {
            unique: [false],
            type: String,
            required: [true, "Accessibility is required"],
        },
        instructor: {
            type: String,
            required: [true, "Instructor is required"],
        },
        instructorimg: {
            required: true,
            type: String,
            validate: [validator.isURL, "Please provide Instructor Image URL"],
        },
        thumbimg: {
            required: true,
            type: String,
            validate: [validator.isURL, "Please provide Thumbnail Image URL"],
        },
        introvdo: {
            type: String,
            required: [true, "Introduction Video is required"],
            // unique: [true, "Email must be unique"],
            validate: [validator.isURL, "Please provide Introduction Video URL"],
        },
        list: {
            required: true,
            type: String,
            enum: {
                values: ["Design", "Development", "Learning"],
                message:
                    "{VALUE} isn't valid. please select 'Design', 'Development', 'Learning ",
            },
        },
        category: {
            type: String,
            required: true,
            
        },
        rating: {
            total_rating: {
                type: Number,
            },
            total_people: {
                type: Number,
            },
        },
        details: {
            description: {
                type: String,
            },
            certificate_details: {
                type: String,
                
            },
            for_whom: {
                type: String
            },
        },
        files: [{
            title: {
                type: String,
                required: [true, "Title is required"],
            },
            details: [{
                name: {
                    type: String,
                    required: [true, "Name is required"],
                },
                fileName: {
                    type: String,
                    required: [true, "File Name is required"],
                },
                vurl: {
                    type: String,
                    required: [true, "Video URL is required"],
                    validate: [validator.isURL, "Please provide a Video URL"],
                },
            }],
        }],
        price: {
            type: Number,
            required: [true, "Price is required"],
        },
    },
    {
        timestamps: true,
    }
);

const Courses = mongoose.model("Courses", coursesSchema);

module.exports = Courses;
