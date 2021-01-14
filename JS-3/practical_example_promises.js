//download
function download(url) {
    return new Promise(function(resolve, reject) {
        if (!url.startsWith("http")) {
            reject(new Error("url does not start with http"));
        } else {
            console.log("start download: " + url)
            setTimeout(function() {
                //fake 3-sec download task
                let fileName = url.split("/").pop();
                resolve(fileName);
            }, 3000);
        }
    });
}
//resize
function resize(fileName) {
    return new Promise(function(resolve, reject) {
        if (!fileName.endsWith(".png")) {
            reject(new Error("File is not png"));
        } else {
            console.log("Start resize: " + fileName)
            setTimeout(function() {
                //fake 3-sec resize task
                //change x.png -> to x-resized.png
                let resizedFile = fileName.split(".")[0] + "-resized" + ".png";
                resolve(resizedFile);
            }, 5000);
        }
    });
}
//upload
function upload(resizedFileName) {
    return new Promise(function(resolve, reject) {
        console.log("Start upload: " + resizedFileName)
        setTimeout(function() {
            //fake 3-sec upload task
            let uploadedUrl = " http://imgur.com/ " + resizedFileName;
            resolve(uploadedUrl);
        }, 6000);
    });
}


/*
download("http://cb.lk/logo.png").then(function(fileName) {
    resize(fileName).then(function(resizedFile) {
        console.log("Resized file is at: " + resizedFile);
    });
});
*/

//another way
download("http://cb.lk/logo.png")
    //.then(resize)
    .then(upload)
    .then(function(uploadedUrl) {
        console.log("file was uploaded to" + uploadedUrl);
    })
    //for error handling
    .catch(function(err) {
        console.error(err);
    });