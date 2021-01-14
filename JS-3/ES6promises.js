//ES6 Promises

/**function fakeDownload(done) {
    setTimeout(function() {
        let downloadedData = "some data we ripped of the Interweb"
        done(downloadedData)
    }, 1000)
}
fakeDownload(function(data) {
    console.log("we downloaded a file which has this data -->")
    console.log(data)
})*/

function fakeDownloadPromise(correct) {
    return new Promise(function(resolve, reject) {

        setTimeout(function() {
            let downloadedData = "some data from the net"
            console.log("downloading has completed")
            if (correct) {
                resolve(downloadedData)
            } else {
                reject(new Error("could not download file"))
            }
        }, 1000)
    })
}

let downloaded = fakeDownloadPromise(true)
downloaded.catch(function(err) {
    console.log(err)
})


setTimeout(function() {
    downloaded.then(function(data) {
        console.log("the data that was downloaded was this-->")
        console.log(data)
    })
}, 3000)

/*fakeDownloadPromise(false).then(function(data){
    console.log("the data that we downloaded is-->")
    console.log(data)
}).catch(function(err){
    console.log(err)
})*/