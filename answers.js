// Questions

// Question 1:
//Show me how to calculate the average price of all items. 
//Please console.log the average.
// The average price is $23.63
// I'll accept either $23.63 or $23.62

//Steps:
//pull all of the prices
//add the prices together
//divide the total by the number of items to get average
//console log the $ + average cost

//pull map of price and link it to the $ value
var currentPrice = items.map(function(item) {
    return item.price;
});
// reduce lets me take the price values and add them together to get $590.65
var pricing = currentPrice.reduce(function(pricing, value) {
    return pricing + value;
});
//divide the pricing $590.65 by # of items in array
//using hard # right now, need to find way not to use hard #
var avg = pricing/25;
//.toFixed(2) lets me round my avg to just 2 decimal places
var n = avg.toFixed(2);
//add "The average price is $" and pull in rounded number
console.log("The average price is $" + n);


//Question 2:

// Show me how to get an array of items that cost between $14.00 and $18.00 USD

// "Items that cost between $14.00 USD and $18.00 USD:"
// [
// {
//   title: "1970s Coors Banquet Glass Beer Pitcher",
//   ...
// },
// {
//   title: "The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug",
//   ...
// },
// {
//   title: "Hand Painted Colorful Feather Glass",
//   ...
// }
// ]


// Steps:
// pull list of items and their price
// check price to see if the price is between $14 and $18
// return "Items that cost between $14.00 USD and $18.00 USD:" and then the actual title

//filters the itemsList to only show items with a price between $14 and $18
// var titles = [];

var itemsByCost = items.filter(function(item, price) {
    return item.price > 14 && item.price < 18;    
});
var itemMap = itemsByCost.map(function(item) {
    return [item.title];   
});
var answer = "Items that cost between $14.00 USD and $18.00 USD:" + itemMap;
//stopping at being able to print the wording with titles, cannot figure out how to do the full objects


//Question 3:

// Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.
// 1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18

// Steps:
// get the items that have a currency code of GBP
// get the console log to only show the title and $ for those items

//This will filter the array of objects to only pull items with GBP in the currency code.
var itemsList = items.filter(function(item) {  
    return item.currency_code === "GBP";  
});

console.log(itemsList[0].title + " £" + itemsList[0].price);



//Question 4:

// Show me how to find which items are made of wood. Please console.log the ones you find.

// SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
// Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
// Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
// Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
// Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.


Steps
pull list of all materials

// return item descriptions in console.log

//Filter the items
var itemList = items.filter(function(item, materials) {
    return item;
    
});
var materialList = items[0].materials; {
    for (var i = 0; i < words.length; i++) {
        if 
}
// var itemMap = itemList.map(function(item) {
//     return [item.title, item.materials];

// });
// var materialList = itemMap.filter(function(item) {
//     return [item.materials == "wood"];
// });


// var materialList = itemMap.reduce(function(finalMap, item, materials) {
//     finalMap[item.title] = (item.materials !== "wood";
//   return finalMap;
//   }, {});


var materialList = items[0].materials.filter(function(item, materials) {
    console.log(itemsList[0].materials);
});

// //Map the title and the materials array length
// var itemMap = itemList.map(function(item) {
//     return [item.title, item.materials];   
// });
var itemsList = items.filter(function(item) {  
    return items[0].materials;  
});

console.log(itemsList[0].title + "" + itemsList[0].materials[0]);

// var nameToAge = people.reduce(function(finalMap, person) {
//   finalMap[person.name] = person.age;
//   return finalMap;
//   }, {});

// for (var i = 0; i < words.length; i++) {
//        reverseWords.push(reverseString(words[i]));
//     }
//Question 5:
    // Show me how to find which items are made of eight or more materials. Please console.log the ones you find.

    // Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:
    // wall mount bottle opener
    // wedding
    // man cave
    // christmas gift
    // guy gift
    // fathers day
    // home bar
    // beer
    // bar

    // The Three Broomsticks Customizable Beer Stein Mug, Harry Potter  Inspired, hogsmeade village, harry potter gift, three broomsticks mug  has 13 materials:

    // glass
    // sandblast cabinet
    // vinyl
    // beer glass
    // pint glass
    // etched pint glass
    // etched glass
    // etched beer glass
    // 16 oz pint
    // beer gift
    // etched harry potter glass
    // the three broomsticks glass
    // personalized harry potter glass

//Filter the items
var itemList = items.filter(function(item) {
    return item;
});
//Map the title and the materials array length
var itemMap = itemList.map(function(item) {
    return [item.title, item.materials.length];   
});
//links map to show the items with 8 or more
var answer = itemMap.filter(function(item, index) {
    return item[1] >= 8;
});
 console.log (answer);



//Question 6:
    // Show me how to calculate how many items were made by their sellers

    // 18 were made by their sellers


//This part pulls in the madeBy and reduces it to true/false
var madeBy = items.map(function(item) {
    return item.who_made === "i_did";
});
//This uses the index and the true/false and adds up all of the true lines
var count = madeBy.reduce(function(memo, value) {
    return memo + value;
});
var sum = (count + " were made by their sellers");
