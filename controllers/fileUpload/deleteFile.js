const cloudinary = require('./cloudinaryConfig');


exports.deleteFile = async (public_id) => {
    try {
        const result = await cloudinary.uploader.destroy(public_id);
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
}