const readdir = require('readdir-enhanced');
const os = require('os');
const through2 = require('through2');
const fs = require('fs');


let inputDir = ""

exports.getInputPath = (req, res, next) => {
    inputDir = req.body.search;
    res.set('Content-Type', 'text/plain')
    res.send(`You sent: ${inputDir} to Express`)
    console.log(inputDir);
    setTimeout(() => {
        next()
    }, 2000);
    return(inputDir);
  };


//Returns directory contents in JSON format
exports.getDir = (req, res, next) => {
    //Stores absolute directory to prepend to inputDir

    homeDir = os.homedir();
    //Directory input on client
    //Empty array that will hold directory contents
    let dataInfo=[]
    let path = homeDir + inputDir
    let isDirExists = fs.existsSync(path) && fs.lstatSync(path).isDirectory();
    console.log(isDirExists)
    if(isDirExists === true){
    //Stream data from given directory and piped to dataInfo array
    let stream = readdir.stream.stat(path)
    .pipe(through2.obj((data, enc, next) => {
        let fileType = data.path.split('.').pop();
        dataInfo.push({fileName: data.path, 
            filePath: path + '/' + data.path, 
            fileSize: data.size,
            fileExt: fileType});
      next();
    }));
    //allows for data to be streamed before response is sent
        setTimeout(() => {
            res.status(200).json(dataInfo)
        }, 1000);
    }else{
        return res.status(205).send({message:'Path is not valid'});
    }
    };
