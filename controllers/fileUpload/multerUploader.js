const multer = require('multer');

const storage = multer.memoryStorage();

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        if (file.fieldname === 'profilePicture' || file.fieldname === 'project-pics') {
            if (!file.mimetype.startsWith('image/')) {
                return cb(new Error('Invalid file type: Upload a picture'));
            }
        }

        if (file.fieldname === 'resume') {
            if (file.mimetype !== 'application/pdf') {
                return cb(new Error('Invalid file type: A Resume must be a PDF'))
            }
        }

        cb(null, true)
    }
});


const uploadProfile = upload.fields([
    {name: 'profilePicture', maxCount: 1},
    {name: 'resume', maxCount: 1}
]);

const uploadProject = upload.array('project-pics', 7)

const handleUpload = (middleware) => {
    return (req, res, next) => {
        middleware(req, res, (error) => {

            if (error instanceof multer.MulterError) {

                if (error.code === 'LIMIT_FILE_SIZE') {
                    return res.status(403).json({msg: 'Max file size is 5MB'});
                }

                if (error.code === 'LIMIT_FILE_COUNT') {
                    return res.status(403).json({msg: error.message});
                }
                
                if (error.code === 'LIMIT_UNEXPECTED_FILE') {
                    return res.status(403).json({msg: 'Too many files uploaded'});
                } 
            } else if(error) {
                return res.status(500).json({msg: error.message})
            }

            next()
        })
    }
}

module.exports = {
    projectUploadMiddleware: handleUpload(uploadProject),
    profileUploadMiddleware: handleUpload(uploadProfile)
}