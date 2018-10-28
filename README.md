This was created during my time as a student at Code Chrysalis.

![banner](/logo.png)

# TabeTree 
A free API for restaurants in Japan around you using data from Tabelog.
(Currently still in production. Will be updated with more restaurants and features.)

<hr>

### Future features:

- [ ] Looking for a restaurant based on budget

- [ ] Filter by ratings and rankings

- [ ] Prices for both lunch time and dinner time

- [ ] Other data including telephone and store hours

- [ ] Ability to search by area

- [ ] And more!

<hr>
Here are the current features:

##### GET
```/categories```
Returns data on all of the categories.

```/categories/id=10```
Returns data on all of the categories based on id.

```/categories/id=Burger```
Returns data on all of the categories based on name.

```/areas```
Returns data on all of the available areas.

```/areas?id=20```
Returns data on available areas based on id.

```/areas?name=Ginza```
Returns data on available areas based on name.

```/restaurants```
Returns data on all of the restaurants in the database.

```/restaurants?id=1```
Returns data on a restaurant based on their id.

```/restaurants?id=SHAKE SHACK```
Returns data on a restaurant based on their name.

##### POST 
```/restaurants```
Creates a new restaurant based on the inputted body parameters.
Currently only able to work with all parameters filled.

##### PUT
```/restaurants?id=#```
Updates the restaurant with the inputted id based on the inputted body parameters.

##### DELETE
```/restaurants?id=#```
Deletes the restaurant with the inputted id.

<hr>

##### Please send a message if you have any questions, feedback, or suggestions. Thank you.
