require('dotenv').config();

const baseURI = {
  mLabURI: process.env.mLabURI,
  localURI: process.env.localURI
}

module.exports = {
  URI: baseURI.mLabURI
};
