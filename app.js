const express = require('express');
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');
const app = express();

// load static files from /public folder
app.use(express.static(path.join(__dirname,'public')));

// serve index files from

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/uploads'));
});


app.post('/upload',(req,res)=>{
    
    // create an incoming form object
    var form = new formidable.IncomingForm();

    //specify user after all files are uploaded on a single request
    form.multiples = true;

    //specify the upload folder destination
    form.uploadDir = path.join(__dirname,'/uploads');

      // every time a file has been uploaded successfully,
     // rename it to it's orignal name
    form.on('file',(field,file)=>{
        fs.rename(file.path,path.join(file.uploadDir,file.name));
    });

    // log any errors that occur
    form.on('error',(err)=>{
        console.log('An error has occurred!',err);
    });

    //after uploading file end the process
    form.on('end',()=>{
        res.end('File upload successful!');
    });

    //parse data from incoming request
    form.parse(req);
});

app.listen(3000,(req,res)=>{
    console.log('App is listening on port 3000');
});


