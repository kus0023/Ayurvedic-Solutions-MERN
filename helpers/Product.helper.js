const { Storage } = require("@google-cloud/storage");

const cloudStorage = new Storage({
  projectId: process.env.PROJECT_ID_FIREBASE,
  credentials: {
    client_email: process.env.client_email,
    private_key: process.env.private_key,
  },
});
const bucketName = process.env.BUCKET_NAME;

/**
 *
 * @param {File} file - required
 *
 * @param {string} customFileName
 * Not given then it generates a default unique file name
 *
 * @returns {Promise} onResolve = photoURL or onReject = error message
 *
 * @description
 * Give file as a parameter then it returns a photoUrl after uploading the file to cloud bucket.
 */
const uploadToCloud = (file, customFileName) =>
  new Promise((resolve, reject) => {
    if (!file) {
      reject("File is not provided");
    }
    if (!file.originalname || !file.buffer) {
      reject("file.originalname or file.buffer is not defined.");
    }
    const fileNameInCloud =
      customFileName || Date.now() + "-" + file.originalname.replace(" ", "_");

    const imageFile = cloudStorage
      .bucket(bucketName)
      .file("dev/" + fileNameInCloud);

    imageFile
      .save(file.buffer, {
        public: true,
        contentType: file.mimetype,

        gzip: true,
      })
      .then(async () => {
        resolve(encodeURI(imageFile.publicUrl()));
      })
      .catch((err) => {
        console.log(err);
        reject("Error in saving file to cloud. ", err.reason);
      });
  });

/**
 *
 * @param {File} file
 * @returns {Promise}
 *
 * @description
 * URL of image to delete
 */

const deleteFileFromCloud = (fileurl = String) =>
  new Promise(async (resolve, reject) => {
    if (!fileurl) {
      reject("filename is required.");
    }

    const filename = decodeURL(fileurl);

    try {
      await cloudStorage.bucket(bucketName).file(filename).delete();
      resolve("file deleted.");
    } catch (err) {
      reject(err.message);
    }
  });

/**
 * @param {string} Photo_URL
 *
 * @returns {string}
 *
 * @description
 * helper function to extract filename name from url
 * if file is save on
 * https://storage.googleapis.com/herbo-fit.appspot.com/dev/image.jpg
 * then it returns  dev/image.jpg
 */
function decodeURL(url) {
  const p = url.split("storage.googleapis.com/" + bucketName + "/");

  return p[1];
}

module.exports = {
  uploadToCloud,
  deleteFileFromCloud,
  decodeCloudURL: decodeURL,
};
