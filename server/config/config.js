var path = require('path');
var rootPath = path.normalize(__dirname + '/../..');
console.log('rootPath:' + rootPath)


module.exports = {
    developement: {
        rootPath: rootPath,
        db: 'mongodb://localhost/multivision',
        port: process.env.PORT || 3030,
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://ryan:multivision@ds031982.mongolab.com:31982/multivision',
        port: process.env.PORT || 80,
    }
}