const Courses = require('../Models/courses.model')

const getCoursesService = async (query) => {
    const result = await Courses.find(query);
    console.log(result);
    return result;
};
const postCoursesService = async (data) => {
    const result = await Courses.create(data);
    console.log(result);
    return result;
};

const deleteCoursesService = async(query) => {
    const result = await Courses.deleteMany(query)
    console.log(result);
    return result;
}
const updateCoursesService = async(query,data) => {
    const result = await Courses.updateOne(query,data)
    console.log(result);
    return result;
}





module.exports={ getCoursesService, postCoursesService,  deleteCoursesService, updateCoursesService}