const fs = require('fs');
module.exports = (dir, ext, cb) => {
  const takeExt = (elem) => elem.split('.')[1];
  const buffer = fs.readdir(dir, (error, data) => {
    if(error) return cb(error);
    const filtered = data.filter(elem => takeExt(elem) === ext);
    return cb(null, filtered);
  });
}
