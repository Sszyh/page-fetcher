const request = require('request');
const fs = require('fs');
const args = process.argv;
const url = args[2];


let requestDownload;

request(url, function (error, response, body) {
  //console.error('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  requestDownload = body;
  fs.writeFile('/Users/zyer/lh/module2(w5)/page-fetcher/index.html', body, err => {
    if (err) {
      console.error(err);
    }

    let stats = fs.statSync("./index.html");
    console.log(stats);
    let fileSizeInBytes = stats.size;
    // Convert the file size to megabytes (optional)
    //let fileSizeInMegabytes = fileSizeInBytes / (1024*1024);

    console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ./index.html`)
    // file written successfully
  });
});



