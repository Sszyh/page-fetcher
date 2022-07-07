const request = require('request');
const fs = require('fs');
const args = process.argv;
//console.log(args[2]);
const url = args[2];


let requestDownload;

request(url, function (error, response, body) {
  //console.error('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  requestDownload = body;
  fs.writeFile('/Users/zyer/lh/page-fetcher/index.html', body, err => {
    if (err) {
      console.error(err);
    }

    let stats = fs.statSync("./index.html")
    let fileSizeInBytes = stats.size;
    // Convert the file size to megabytes (optional)
    //let fileSizeInMegabytes = fileSizeInBytes / (1024*1024);

    console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ./index.html`)
    // file written successfully
  });
});



