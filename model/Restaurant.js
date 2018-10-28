class Restaurant {
    constructor(restaurant) {
        this.name = restaurant.name;
        this.area = restaurant.area;
        this.categories = restaurant.categories;
        this.budget = restaurant.budget;
        this.rating = restaurant.rating;
        this.address = restaurant.address;
    }
}

module.exports = { Restaurant };