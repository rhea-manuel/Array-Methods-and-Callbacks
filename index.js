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

// (a) Home Team name for 2014 world cup final

function printFinalTeam(year, property){
    const finalNameItem = fifaData.filter(item=>item.Year===year && item.Stage==='Final');
    console.log(finalNameItem[0][property]);
}

printFinalTeam(2014,"Home Team Name");
printFinalTeam(2014,"Away Team Name");
printFinalTeam(2014,"Home Team Goals");
printFinalTeam(2014,"Away Team Goals");

// const finalNameItem = fifaData.filter(item => item.Year===2014 && item.Stage==='Final');
// console.log(finalNameItem[0]["Home Team Name"]);

// const 


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    return data.filter(item => item.Stage === 'Final');

};

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb) {

    const dataList = cb(fifaData);
    const toReturn = dataList.map(item => item = item.Year);

    return toReturn;

};

console.log(getYears(getFinals,fifaData))

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cb) {

    let dataList= cb(fifaData);

    //This ensures no team that draws will be included in the data set.
    // dataList = dataList.filter(item=>!(item["Home Team Goals"] === item["Away Team Goals"]));

    const toReturn = dataList.map(function(item, index){
        if (item["Home Team Goals"] > item["Away Team Goals"]){
            return item["Home Team Name"]
        }

        else if (item["Home Team Goals"] === item["Away Team Goals"]){
            let winCon = item["Win conditions"];
            const winner = winCon.split(" win");
            // console.log(`${index},${winCon}`);
            return winner[0];
            // const numList = tempNumList
        }

        else{
            return item["Away Team Name"]
        }
    });

    return toReturn;

    // function getCountry(item, index){

        
    // }
};

console.log(getWinners(getFinals, fifaData));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinners, getYears) {

    const allWinners = getWinners(getFinals);
    const allYears = getYears(getFinals);

    
    const toReturn = allYears.map((item,index) => {
        return `In year ${item}, ${allWinners[index]} won the world cup!`
    });

    return toReturn;

};

console.log(getWinnersByYear(getWinners, getYears));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let curChecker = "Home Team Goals";
    const homeGoals = data.reduce(accum,0);
    curChecker = "Away Team Goals"
    const awayGoals = data.reduce(accum,0);

    function accum (accumulator, item){

        //Gets the correct average for finals w/ draws.
        if (item["Home Team Goals"]===item["Away Team Goals"] && item["Stage"]==='Final'){
            // console.log(item);
            if (curChecker==="Home Team Goals"){
                let curAr = item["Win conditions"].split("(")
                // console.log(item["Win conditions"]);
                // console.log(curAr);
                return accumulator+Number(curAr[1].charAt(1));
            }

            else {
                let curAr = item["Win conditions"].split("- ")
                return accumulator+Number(curAr[1].charAt(0));
            }
        }

        return accumulator+item[curChecker];
    }
//    const homeGoals = data.reduce(function(accumulator, item){
//        return accumulator+item["Home Team Goals"]
//    },0);

//    const awayGoals = data.reduce(function(accumulator, item){
//        return accumulator+item["Away Team Goals"]
//    },0);

   const homeAvg = homeGoals/data.length;
   const awayAvg = awayGoals/data.length;

   return{
       'Home Average:' : homeAvg,
       'Away Average:' : awayAvg
   };

};

console.log(getAverageGoals(fifaData));

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
