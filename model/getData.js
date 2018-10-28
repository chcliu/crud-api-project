var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

const AREAURL = __dirname + "/allAreas.txt";
const CATEGORYURL = __dirname + "/allCategories.txt";
let url;

getData = async function (input) {
    if (input === "area") url = AREAURL;
    else url = CATEGORYURL;
    return await (fs.readFileAsync(url)
        .then(text => {
            return text.toString("utf-8").split('\r\n')
                .map((data, index) => {
                    const obj = { id: index + 1, name: data }
                    return obj;
                });
        }));
}

// console.log(getData("./allAreas.txt"));

module.exports = { getData };