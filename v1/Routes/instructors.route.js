const express = require('express');
const { getInstructorsController, postInstructorsController, deleteInstructorsController, updateInstructorsController } = require('../Controllers/instructors.controller');

const router = express.Router();

router.route('/')
    .get(getInstructorsController)
    .post(postInstructorsController)
    .delete(deleteInstructorsController)
    .patch(updateInstructorsController)



module.exports = router;