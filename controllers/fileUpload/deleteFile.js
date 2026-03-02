const cloudinary = require('./cloudinaryConfig');


exports.deleteFile = async (public_id, resourceType = 'image') => {
    try {
        const result = await cloudinary.uploader.destroy(public_id, {
            resource_type: resourceType
        });
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
}