// import statements
let generatedData = require('./dataGeneration.js');
var data = generatedData.data

// array of array of coordinates
// x = position in plane 1-100
// y = random value 1-100
// z = plane depth 1-10
var separatedValues = [];
var xValues = [];
var yValues = [];
var zValues = [];

// function used to separate data into coordinates
function coordinates() {
    for (let item of data) {
        // grab depth / z axis
        var z = item[0];

        // itterate to find x and y vals
        for (let i = 1; i < item.length; i++) {
            // currentt object in item
            var obj = item[i]

            // x and y vals as key and value from obj
            var x = Object.keys(obj);
            var y = Object.values(obj);

            // convert x from string to int
            x = x.map(val => parseInt(val))

            // grab x and y vals from created array of key and value respectively
            x = x[0];
            y = y[0];
            
            // array to hold current x, y, and z values
            var current = [x,y,z];

            // push array of values to coordinates
            xValues.push(x);
            yValues.push(y);
            zValues.push(z);
        }
    }
    separatedValues.push(xValues);
    separatedValues.push(yValues);
    separatedValues.push(zValues);
}

coordinates();
console.log(separatedValues)
