import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";


import cloudinary from "cloudinary";
import config from "../config/config";
cloudinary.v2.config({
  cloud_name: config.CLOUDINARY_NAME,
  api_key: config.CLOUDINARY_API_KEY,
  api_secret: config.CLOUDINARY_API_SECRET,
});
const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  // folder: "events",
  params: {
    // format: async (req:any, file:any) => "png",
    public_id:(req, file) =>file.originalname,
  },
});

export const upload = multer ({ storage: storage})
