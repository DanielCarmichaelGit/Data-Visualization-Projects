// import js file module
const fs = require('fs')

var xs = [];
var ys = [];
var zs = [];
var allData = [];

var z = 1;
var x = 1;



function generateY() {
    for (let j = 0; j < 100; j++) {
        var y = Math.ceil(Math.random() * 100)
        ys.push(y)
    }
}

function generateX() {
    for (let j = 1; j < 101; j++) {
        xs.push(j)
    }
}

function generateZ() {
    for (let j = 0; j < 100; j++) {
        zs.push(z)
    }
    z++
}
for (let i = 0; i < 10; i++) {
    generateZ();
    generateX();
    generateY();
}

allData.push(xs);
allData.push(ys);
allData.push(zs);

//console.log(allData)
allData = JSON.stringify(allData)

try {
    fs.writeFileSync('Randomizer/JavaScript/data.js', allData)
    //file written successfully
  } catch (err) {
    console.error(err)
  }