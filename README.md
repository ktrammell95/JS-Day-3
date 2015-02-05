# 02/05/15

___This homework is due by 8am, on 02/09/15___

## Objectives

### Learning Objectives

After completing this assignment, you should:

* Understand general JS syntax
* Understand arrays and loops
* Have the ability to breakdown multiple steps into a series of statements in JS

## Homework

### Part 1

1. Create a new project/repo with the attached files `items.js`, `excercises.js` and `index.html`. Create another file called `answers.js`, the `index.html` file is already set to include all scripts.
2. Using the `items` variable, use `array.map()`, `array.reduce()`, `array.forEach`, and `array.filter()` to help you through the following questions. Put your answers inside the `answers.js`, there should be no JavaScript errors when loaded on github pages.

> Make sure the output matches the answers below each question. I am not concerned about line breaks etc, just that correct data is there. I'm also more concerned about how you got there, so PLEASE comment your code as you walk through your though process.

#### Questions

1. Show me how to calculate the average price of all items. Please console.log the average.

  ```
  The average price is $23.63
  ```

  > I'll accept either $23.63 or $23.62

2. Show me how to get an array of items that cost between $14.00 and $18.00 USD

  ```
  "Items that cost between $14.00 USD and $18.00 USD:"
  [
   {
      title: "1970s Coors Banquet Glass Beer Pitcher",
      ...
   },
   {
      title: "The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug",
      ...
   },
   {
      title: "Hand Painted Colorful Feather Glass",
      ...
   }
  ]
  ```

3. Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.

  ```
  1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18
  ```

4. Show me how to find which items are made of wood. Please console.log the ones you find.

  ```
  SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
  Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
  Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
  Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
  Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.
  ```

5. Show me how to find which items are made of eight or more materials. Please console.log the ones you find.

  ```
  Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:
  wall mount bottle opener
  wedding
  man cave
  christmas gift
  guy gift
  fathers day
  home bar
  beer
  bar

  The Three Broomsticks Customizable Beer Stein Mug, Harry Potter  Inspired, hogsmeade village, harry potter gift, three broomsticks mug  has 13 materials:

  glass
  sandblast cabinet
  vinyl
  beer glass
  pint glass
  etched pint glass
  etched glass
  etched beer glass
  16 oz pint
  beer gift
  etched harry potter glass
  the three broomsticks glass
  personalized harry potter glass
  ```

6. Show me how to calculate how many items were made by their sellers
  ```
  18 were made by their sellers
  ```

### Part 2

 1. Use the file `excercises.js` and write the functions it asks you to


## Deliverables

1. Push to Github
2. Push to Github Pages
3. Comment on Assignment 07 in the issue assigned to you and close the issue


## Resources

* [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
* [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* [Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
* [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
