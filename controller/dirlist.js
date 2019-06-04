const readdir = require('readdir-enhanced');
const os = require('os');
const through2 = require('through2');

//Returns directory contents in JSON format
exports.getDir = (req, res, next) => {
    //Stores absolute directory to prepend to inputDir
    homeDir = os.homedir()
    //Directory input on client
    let inputDir = "/desktop/JobJack-Assessment"
    //Empty array that will hold directory contents
    let dataInfo = []

    //Stream data from given directory and piped to dataInfo array
    let stream = readdir.stream.stat(homeDir + inputDir)
    .pipe(through2.obj((data, enc, next) => {
        let fileType = data.path.split('.').pop();
        dataInfo.push({size: data.size, 
            path: homeDir + inputDir, 
            name: data.path,
            filetype: fileType});
      next();
    }));
    //allows for data to be streamed before response is sent

    setTimeout(() => {
        res.status(200).json(dataInfo)
        console.log(dataInfo.length)
    }, 1000);

};

