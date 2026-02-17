const cloudinary = require('./cloudinaryConfig');
const streamifier = require('streamifier');

exports.uploadFile = (buffer, folder) => {

    return new Promise((resolve, reject) => {
        const fileStream = cloudinary.uploader.upload_stream(
            {folder},
            (error, result) => {
                if (error) reject(error);
                resolve(result);
            });

        streamifier.createReadStream(buffer).pipe(fileStream);
    });
}