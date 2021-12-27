const fs = require('fs');
const appendFileSync = require('fs').appendFileSync

let generatedData = require('./userCreation.js');
var userData = generatedData.allUsers;

const monthCount = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0};
var months = ['January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December'];

var allData = [];

var counts = [];
var userAges = [];
var userCompanies = [];
var userNames = [];
var isComplete = [];
var createdAccounts = [];

setTimeout(() => {
    for (let user of userData) {
        let time = new Date();
        let year = user.dob.split("-");
        year = year[0];
        userAges.push(time.getFullYear() - year);
        userNames.push(user.name);
        userCompanies.push(user.occupation);
        createdAccounts.push(user.created);
        if (user.completed > 0.5) {
            isComplete.push(true);
        }
        else {
            isComplete.push(false);
        }
    }

    createdAccounts = createdAccounts.map(e => e.split("-").slice(0)).map(e => parseInt(e));
    createdAccounts.forEach(function(number) {
        monthCount[number] += 1;
    });
    counts = Object.values(monthCount);

    allData = [months, counts];

    try {
        appendFileSync('User Data/JavaScript/data.js', JSON.stringify(allData));
        console.log('The "data to append" was appended to file!');
      } catch (err) {
        console.log("-----------error appending to file-----------")
      }

}, 10000);