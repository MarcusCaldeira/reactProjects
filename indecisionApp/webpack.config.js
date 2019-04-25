const path = require('path')
//Entry 

//How to find the absolute path by using Node. 
// console.log(path.join(__dirname, 'public'))

module.exports = {
    entry: './src/app.js',
    output:{
        path: path.join(__dirname, 'public'),
        filename:'bundle.js'
    }

}