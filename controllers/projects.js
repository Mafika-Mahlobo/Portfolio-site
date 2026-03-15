const { uploadFile } = require('./fileUpload/fileUpload');
const { deleteFile } = require('./fileUpload/deleteFile');
const Projects = require('../models/Projects');

// Add new project
exports.AddProject = async (req, res) => {
    const { title, description, githubLink, liveLink} = req.body;
    const files = req.files ? req.files : undefined;
    let picturseData;

    try {
        
        // check upload
        if (!files || files.length == 0) {
            return res.status(200).json({msg: 'Please upload at least one picture'});
        }

        // upload pictures to cloudnary
        picturseData = await Promise.all(
            files.map(async (file) => {
                const fileData = await uploadFile(file.buffer, 'Portfolio/projects')

                return {
                    url: fileData.secure_url,
                    public_id: fileData.public_id
                }
            })
        );

        // create Projects object
        const newProjects = new Projects({
            user: req.id,
            title: title,
            description: description,
            pictures: picturseData,
            links: {
                repo: githubLink,
                live: liveLink
            }
        });

        // save project
        await newProjects.save();

        return res.status(200).json(newProjects);
            

    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};


// update project
exports.updateProject = async (req, res) => {
    const { title, description, githubLink, liveLink} = req.body;
    const files = req.files ? req.files : undefined;
    let picturseData;

    try {
        
        // get project
        const checkProject = await Projects.findOne({ _id: req.params.id });

        if (!checkProject) {
            res.status(404).json({msg: 'Project not found'});
        }

        
        //check if project has pictures
        if (checkProject.pictures.length > 0) {
            checkProject.pictures.map(async (project) => {
                await deleteFile(project.public_id);
            });
        }

        // check project
        if (!checkProject) {
            return res.status(404).json({msg: 'Project not found'});
        }

        // check upload
        if (files.length > 0) {

            // upload pictures to cloudnary
            picturseData = await Promise.all(
                files.map(async (file) => {
                    const fileData = await uploadFile(file.buffer, 'Portfolio/projects');

                    return {
                        url: fileData.secure_url,
                        public_id: fileData.public_id
                    }
                })
            );

            // create Projects object
            const newProject = {
                user: req.id,
                title: title,
                description: description,
                pictures: picturseData,
                links: {
                    repo: githubLink,
                    live: liveLink
                }
            };

            // update project
            await Projects.findOneAndUpdate(
                {_id: req.params.id},
                {$set: newProject}
            )

            return res.status(200).json(newProject);
            
        }


        return res.status(400).json({msg: 'Please upload at least one picture'});

    } catch (error) {
        return res.status(500).json({error: 'project not found'});
    }
};


// Get all projects
exports.getProjects = async (req, res) => {
    const user = req.params.userId;

    try {
        // get projects
        const projects = await Projects.find({user: user})
        
        //check projects
        if (projects.length > 0) return res.status(200).json(projects);

        return res.status(200).json({msg: 'No project found'});

    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
};

// get project by ID
exports.getProjectById = async (req, res) => {
    const id = req.params.id;

    try {
        
        const project = await Projects.findOne({_id: id});

        if (project) return res.status(200).json(project);
        return res.status(404).json({msg: 'project not found'})

    } catch (error) {
        return res.status(500).json({msg: 'Project not found'});
    }
}

// delete project
exports.deleteProject = async (req, res) => {
    const id = req.params.id;

    try {
        // find and delete project
        const deletedProject = await Projects.findOneAndDelete({_id: id});

        // check if project was found
        if (deletedProject) {

            // get and delete project pictures
            const pictures = deletedProject.pictures;
            pictures.map(async (picture) => {
                await deleteFile(picture.public_id);
            });
            return res.status(200).json({msg: 'Project deleted'});

        } else {
            res.status(404).json({msg: 'project not found'});
        }
        
    } catch (error) {
        return res.status(500).json({msg: 'project not found'});
    }
}