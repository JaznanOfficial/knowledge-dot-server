const express = require('express');
const { getCoursesController, postCoursesController, deleteCoursesController, updateCoursesController } = require('../Controllers/courses.controller');

const router = express.Router();

router.route('/')
    .get(getCoursesController)
    .post(postCoursesController)
    .delete(deleteCoursesController)
    .patch(updateCoursesController)



module.exports = router;