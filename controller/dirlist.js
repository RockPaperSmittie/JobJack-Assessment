const readdir = require('readdir-enhanced');
const os = require('os');

const through2 = require('through2');

exports.getDir = (req, res, next) => {
    homeDir = os.homedir()
    let datainfo = []
    let inputDir = "/desktop/JobJack-Assessment"
    
    let stream = readdir.stream.stat(homeDir + inputDir)
    .pipe(through2.obj((data, enc, next) => {
      datainfo.push({size: data.size, path: homeDir + inputDir, name: data.path});
      next();
    }));
    setTimeout(() => {
        res.status(200).json(datainfo)
    }, 1000);
}

