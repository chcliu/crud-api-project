var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

const AREAURL = __dirname + "/allAreas.txt";
const CATEGORYURL = __dirname + "/allCategories.txt";
let url, key;

getData = async function (input) {
    if (input === "area") {
        key = 'area';
        url = AREAURL;
    }
    else {
        key = 'category';
        url = CATEGORYURL;
    }
    return await (fs.readFileAsync(url)
        .then(text => {
            return text.toString("utf-8").split('\r\n')
                .map((data, index) => {
                    const obj = {};
                    obj.id = index + 1;
                    obj[key] = data;
                    return obj;
                });
        }));
}

module.exports = { getData };