function downloadPromise() {
    return new Promise(function(resolve, reject) {
        console.log("starting to download the file");
        setTimeout(function() {
            console.log("download is complete");
            resolve();
        }, 3000);
    });
}
/*downloadPromise().then(function() {
    console.log("After download")
})*/

//deffered resolve
//Result after some time later
let downloadFile = downloadPromise()

setTimeout(function() {
    downloadFile.then(function() {
        console.log("after download")
    })
}, 5000)