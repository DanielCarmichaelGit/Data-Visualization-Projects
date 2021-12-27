const year1 = [["January","February","March","April","May","June","July","August","September","October","November","December"],
[8,10,8,10,14,4,5,10,7,10,9,5]]

const year2 = [["January","February","March","April","May","June","July","August","September","October","November","December"],
[9,7,7,8,10,8,10,7,8,12,6,8]]

const year3 = [["January","February","March","April","May","June","July","August","September","October","November","December"],
[10,15,4,9,12,5,9,7,7,7,8,7]]


var trace1 = {
    x: year1[0],
    y: year1[1],
    name: '2019 User Downloads ',
    type: 'bar'
  };
  
var trace2 = {
    x: year2[0],
    y: year2[1],
    name: '2020 User Downloads ',
    type: 'bar'
};

var trace3 = {
    x: year3[0],
    y: year3[1],
    name: '2021 User Downloads ',
    type: 'bar'
};
  
  var data = [trace1, trace2, trace3];
  
  var layout = {barmode: 'group'};
  
  Plotly.newPlot('myDiv', data, layout);