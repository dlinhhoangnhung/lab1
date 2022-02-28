var fs = require("fs");

// var readMe = fs.readFileSync('readMe.txt', )


// fs.writeFileSync('writeMe.txt', readMe);

fs.readFile('readMe.txt', 'utf-8', function(err, data) {
  
    // Write the data read from readeMe.txt
    // to a file writeMe.txt
    console.log("Write successfully")
    if( !err )
        fs.writeFile('writeMe.txt', data, (err)=>{
            if( err ) {
                throw err;
            }
        });
    else
        throw err;
});