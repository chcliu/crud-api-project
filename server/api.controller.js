const { Restaurant } = require('../model/Restaurant.js');
//dummy restaurant just to test if class works
let rest = new Restaurant({
    name: 'this is a test',
    categories: "Ramen",
    telephone: "911",
    budget: "~1000 yen",
    rating: 4.5,
    address: "your mum's house"
});

module.exports = {
    test(req, res) {
        res.status(200).send("Wasssssssup");
    }
}