const express = require('express');
const projectsChecks = require('../../validators/projectsChecks');
const validate = require('../../validators/validate');
const { AddProject, updateProject, getProjects, getProjectById, deleteProject } = require('../../controllers/projects');
const { auth } = require('../../validators/auth')
const { projectUploadMiddleware } = require('../../controllers/fileUpload/multerUploader')


const router =  express.Router();

// @route POST /api/projects
// @desc Add project
// @access private
router.post('/', auth, projectUploadMiddleware, projectsChecks, validate, AddProject);


// @route PUT /api/projects/:id
// @desc Update project
// @access private
router.put('/:id', auth, projectUploadMiddleware, projectsChecks, validate, updateProject);

// @route GET /api/projects/all/:userID
// @desc Get all projects
// @access public
router.get('/all/:userId', getProjects);

// @route GET /api/projects
// @desc Get project by ID 
// @access public
router.get('/:id', getProjectById);


// @route DELETE /api/projects
// @desc Delete project
// @access public
router.delete('/:id', auth, deleteProject);

module.exports = router;