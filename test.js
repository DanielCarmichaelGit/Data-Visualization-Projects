function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

var rand = randomDate(new Date(2012, 0, 1), new Date()).toISOString().split("T");

console.log(rand[0])