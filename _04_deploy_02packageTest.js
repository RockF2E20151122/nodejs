

var moduleInPackage0 = require('./sevenDays/packageTest');

var moduleInPackage2 = require('./sevenDays/packageTest/index');

console.log( moduleInPackage0.create('testModule') );

console.log( moduleInPackage0==moduleInPackage2  )
