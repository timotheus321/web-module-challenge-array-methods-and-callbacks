const { fifaData } = require('./fifa.js')

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note. 

💡 HINT: You may want to filter the data first 😉*/
const finals2014 = fifaData.filter(function(team){
    return team.Year === 2014 && team.Stage === 'Final';
});
//console.log(finals2014);
//const finalMatch = fifaData.filter(match => match.Stage === "Final")[0];
//console.log(finalMatch["Home Team Name"]);
//const finalMatch = fifaData.filter(match => match.Stage === "Final")[0];
//console.log(finalMatch['Home Team Goals']);

//const result = words.filter(word => word.length > 6);

const result = fifaData.filter(team => (team.Year === 2014));
console.log('taska1',result);
//(a) Home Team name for 2014 world cup final
    console.log('task a:',finals2014[0]['Home Team Name']);
//(b) Away Team name for 2014 world cup final
console.log('task b:',finals2014[0]['Away Team Name']);
//(c) Home Team goals for 2014 world cup final
console.log('task c:',finals2014[0]['Home Team Goals']);
//(d) Away Team goals for 2014 world cup final
console.log('task d:',finals2014[0]['Away Team Goals']);
//(e) Winner of 2014 world cup final */
console.log('task e:',finals2014[0]['Win conditions']);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive an array as a parameter that will take the fifa data as its argument
2. Return an array of objects with the data of the teams that made it to the final stage
 const finalTeams = data.filter(team => team.Stage === 'final')
💡 HINT - you should be looking at the stage key inside of the objects
*/

function getFinals(data) {
   const finalTeams = data.filter(function(team){
    return team.Stage === 'Final';
   })
    return finalTeams;     
 }
console.log('task 2:', getFinals(fifaData));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Return an array called years containing all of the years in the getFinals data set*/
//question for la why does when i use the 0 brackets and then use dot notation why does it work compared to when i dont
function getYears(dataOne, Callback) {
    return Callback(dataOne).map(year => year.Year);
}
console.log(getYears(fifaData, getFinals));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Determines the winner (home or away) of each `finals` game. 
💡 HINT: Don't worry about ties for now (Please see the README file for info on ties for a stretch goal.)
4. Returns the names of all winning countries in an array called `winners` */ 
//sure to wrap it in curly bracks
function getWinners(data, callBack) {
    
    return callBack(data).map(winner => winner['Home Team Goals'] > winner['Away Team Goals'] ?
         winner['Home Team Name'] : winner['Away Team Name']);
   
}
console.log('Task 4', getWinners(fifaData, getFinals));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Receive a callback function as the third parameter that will take getYears from task 3 as an argument
4. Receive a callback function as the fourth parameter that will take getWinners from task 4 as an argument
5. Return an array of strings that say "In {year}, {country} won the world cup!" 

💡 HINT: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(data,getFinalscb, getYearscb, getWinnerscb) {
    const winners = getWinnerscb(data, getFinalscb);
    const years = getYearscb(data, getFinalscb);
    return winners.map((item, index)=> `In ${years[index]}, ${item} won the world cup!`);
}
console.log(getWinnersByYear(fifaData,getFinals, getYears, getWinners));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function `getAverageGoals` to do the following: 
 1. Receive a callback function as a parameter that will take `getFinals` (from task 2) as an argument; ensure you pass in `fifaData` as its argument
 
 💡 HINT: Example of invocation: `getAverageGoals(getFinals(fifaData));`

 2. Calculate the AVERAGE number of the TOTAL home team goals AND TOTAL away team goals scored PER MATCH

 3. Round to the second decimal place and return the value
 
 💡 HINT: use .reduce, .toFixed (refer to MDN for syntax), and do this in 2 steps) 
 
*/

function getAverageGoals(data) {
    const averageHomeGoals = data.reduce(function(acc, item){
        return acc + item['Home Team Goals'] + item['Away Team Goals'];
    }, 0)
    return (averageHomeGoals / data.length).toFixed(2);
    }
 




/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
foo();
module.exports = {
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
