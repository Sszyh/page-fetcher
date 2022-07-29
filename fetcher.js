const request = require('request');
const fs = require('fs');
const args = process.argv;
const url = args[2];
const readline = require("readline");

//const stdin = process.stdin;(no need to use stdin since readline already got the "answer")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let requestDownload;
request(url, function (error, response, body) {
  requestDownload = body;
  if (!fs.existsSync("index.html")) {
    fs.writeFile('/Users/zyer/lh/module2(w5)/page-fetcher/index.html', body, err => {
      if (err) {
        console.error(err);
      }
      let stats = fs.statSync("./index.html");
      //if console.log(stats); Stats is a big obj contain file size.
      let fileSizeInBytes = stats.size;
      
      console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ./index.html`)
      // file written successfully
    });
  }

  if (fs.existsSync("index.html")) {
    //Edge Case1: File Already Exists
    rl.question("File path already exists, do you want to change?", (answer) => {
      console.log(`Your answer is ${answer}.`);

        if (answer === "y") {
          fs.writeFile('/Users/zyer/lh/module2(w5)/page-fetcher/index.html', body, err => {
    
            if (err) {
              console.error(err);
            }
        
            let stats = fs.statSync("./index.html");
            let fileSizeInBytes = stats.size;
            console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ./index.html`)
            // file written successfully
            rl.close();//should inside fs.writeFile function. 
          });
        }
    });
  //if console.log("end"); this console.log will show right after "file path already exists". becase it is sync
  }
});
