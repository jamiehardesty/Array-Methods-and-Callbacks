import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const task1 = fifaData.filter(function(fifaData){
    return ((fifaData.Year === 2014) && (fifaData.Stage === "Final"));
});
const task1b = task1[0];

console.log("(a) " + task1b["Home Team Name"]);
console.log("(b) " + task1b["Away Team Name"]);
console.log("(c) " + task1b["Home Team Goals"]);
console.log("(d) " + task1b["Away Team Goals"]);

const task1c = () => {
    if((task1b["Home Team Goals"] > task1b["Away Team Goals"])){
        console.log("(e) " + task1b["Home Team Name"]);
    }else if((task1b["Home Team Goals"] === task1b["Away Team Goals"])){
        console.log("(e) They tied!");
    }else{
        console.log("(e) " + task1b["Away Team Name"]);
    }
}
task1c();

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) { // see Array on MDN > item 
    return data.filter(item => item.Stage === "Final");
};
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
    const callbackList = callback(fifaData);
    const t3List = callbackList.map(item => item = item.Year);
    return t3List;
};
console.log(getYears(getFinals,fifaData));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cbNotChargeback) {
    let callbackList = cbNotChargeback(fifaData); // fr. t3
    const t4List = callbackList.map(function(item, index){ // fr. t2; replaced t2 naming conv with item 
        if(item["Home Team Goals"] > item["Away Team Goals"]){
            return item["Home Team Name"];
        }else if((item["Home Team Goals"] === item["Away Team Goals"])){
            let winCon = item["Win conditions"]; // conditions [sic]; lowercase C
            const winner = winCon.split("win");
            return winner[0];
        }else{
            return item["Away Team Name"];
        }
    }); return t4List;
};
console.log(getWinners(getFinals,fifaData));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(/* code here */) {

};

getWinnersByYear();

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
