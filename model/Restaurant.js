class Restaurant {
    constructor(restaurant) {
        this.id = restaurant.id;
        this.name = restaurant.name;
        this.area = restaurant.area;
        this.category = restaurant.category;
        this.budget = restaurant.budget;
        this.rating = restaurant.rating;
        this.address = restaurant.address;
        this.url = restaurant.url;
    }
}

module.exports = { Restaurant };