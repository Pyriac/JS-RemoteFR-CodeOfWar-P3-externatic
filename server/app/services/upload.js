const multer = require("multer");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename(req, file, cb) {
    const pictureName = "coucou";
    cb(null, pictureName);
  },
});

const uploadPictureCompany = (req, res, next) => {
  // do something
  const upload = multer({ storage });
  return upload.single("image")(req, res, next);
};

module.exports = { uploadPictureCompany };
