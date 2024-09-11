const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename(req, file, cb) {
    const pictureId = uuidv4();
    const pictureName = `${pictureId}${path.extname(file.originalname)}`;
    req.body.image = pictureName;
    cb(null, pictureName);
  },
});

const uploadPictureCompany = (req, res, next) => {
  const upload = multer({ storage });
  return upload.single("image")(req, res, next);
};

module.exports = { uploadPictureCompany };
