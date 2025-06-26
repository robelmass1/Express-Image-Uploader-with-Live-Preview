const express = require('express');
const fileUploaded = require('express-fileupload');
const fs= require('fs');
const path=require('path');

const app = express();


app.use (express.json());
app.use (fileUploaded());

// serve uploaded images statically 
app.use('/uploads',express.static(path.join(__dirname,'uploads')));
// Define the '/' route
app.get('/', (req, res) => {
    res.send('Hello World!!My victory has arrived.');
});

app.get('/image-upload',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})
// The above app.get() is a route which select html page.
// It allows us to upload image 

/*app.post('/upload',function(req,res){
    res.send('Upload received');

}); */


// Handle image upload
app.post('/upload', function (req, res) {
    if (req.files && req.files.uploadedFile) {
        const uploadedFile = req.files.uploadedFile;
        const uploadPath = path.join(__dirname, 'uploads');

        // This is a directory created
        // Once the image is uploaded  it puts in the uploads directory
        // This directory is not created in our local machine(VSCODE folder) instead it is created inside container


        // Create uploads directory if it doesn't exist
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath);
        }

        const filePath = path.join(uploadPath, uploadedFile.name);

        // Move the uploaded file to /uploads
        uploadedFile.mv(filePath, (err) => {
            if (err) {
                return res.status(500).send(err);
            }

            // Show the image after upload
            res.send(`
                <p>Upload successful!</p>
                <img src="/uploads/${uploadedFile.name}" style="max-width:300px;" />
                <br/><a href="/image-upload">Upload another</a>
            `);
        });
    } else {
        res.status(400).send('No file uploaded.');
    }
});




// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});