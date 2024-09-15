const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename(req, file, cb) {
    const uniqueId = uuidv4();
    const fileName = `${uniqueId}${path.extname(file.originalname)}`;
    if (file.fieldname === "image") {
      req.body.image = fileName;
    } else if (file.fieldname === "logo") {
      req.body.logo = fileName;
    }

    cb(null, fileName);
  },
});


const uploadCompanyFiles = multer({ storage }).fields([
  { name: "image", maxCount: 1 },
  { name: "logo", maxCount: 1 },
]);

module.exports = { uploadCompanyFiles };
