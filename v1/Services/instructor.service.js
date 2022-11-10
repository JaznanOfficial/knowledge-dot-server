const Instructors = require('../Models/instructors.model')

const getInstructorsService = async (query) => {
    const result = await Instructors.find(query);
    console.log(result);
    return result;
};
const postInstructorsService = async (data) => {
    const result = await Instructors.create(data);
    console.log(result);
    return result;
};

const deleteInstructorsService = async(query) => {
    const result = await Instructors.deleteMany(query)
    console.log(result);
    return result;
}
const updateInstructorsService = async(query,data) => {
    const result = await Instructors.updateOne(query,data)
    console.log(result);
    return result;
}





module.exports={ getInstructorsService, postInstructorsService,  deleteInstructorsService, updateInstructorsService}