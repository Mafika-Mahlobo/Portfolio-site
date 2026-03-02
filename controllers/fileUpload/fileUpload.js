const cloudinary = require('./cloudinaryConfig');
const streamifier = require('streamifier');

exports.uploadFile = (buffer, folder, resourceType = 'image') => {

    return new Promise((resolve, reject) => {
        const fileStream = cloudinary.uploader.upload_stream(
            {
                folder,
                resource_type: resourceType
            },
            (error, result) => {
                if (error) reject(error);
                resolve(result);
            });

        streamifier.createReadStream(buffer).pipe(fileStream);
    });
}