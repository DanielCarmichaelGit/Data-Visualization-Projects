const { default: axios } = require("axios");

var userCollection = [];
var randomCompletion = false;


class User {
    constructor(name, dob, completed, occupation, created) {
        this.name = name;
        this.dob = dob;
        this.completed = completed;
        this.occupation = occupation;
        this.created = created;
    }
    age() {
        let today = new Date();
        let year = dob.split("-")
        year = year[0]
        return today.getFullYear() - year
    }
    check() {
        return this.completed;
    }
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function constructUser(k) {
    var accountCreationDate = randomDate(new Date(2012, 0, 1), new Date()).toISOString().split("T");
    accountCreationDate = accountCreationDate[0].split("-")
    accountCreationDate = accountCreationDate[1] + "-" + accountCreationDate[2]

    axios.get('https://api.namefake.com').then(response => {

        let newUser = new User(
            response.data.name,
            response.data.birth_data,
            k,
            response.data.company,
            accountCreationDate
            );
        userCollection.push(newUser);
        //console.log(newUser);
    }).catch(error => console.error(error))
}

for (let i = 0; i < 100; i++) {
    constructUser(Math.random());
}

exports.allUsers = userCollection;