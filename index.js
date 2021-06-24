players = ['Anna','Emma','Lily','Ellie','Ella','Ava','Dayna','Zoe','Abi','Eve','Eva','Evie','Bob']



//having two empty teams waiting to have players to be added 
let team1 = [];
let team2 = [];
let round = 1 

//random pick
do{

let player1 =  Math.floor(Math.random() * players.length + 0);
console.log(player1);
player1Name = players[player1];
console.log(player1Name +" was picked for team 1 ")
team1.push(player1Name);
// to remove the random person picked from the 'players' list


players.splice(player1,1);
// console.log(players);

// console.log('Team1: ' + player1Name)
// prints out 



let player2 =  Math.floor(Math.random() * players.length + 0);
console.log(player2);
player2Name = players[player2];
console.log(player2Name + " was picked for team 2")
team2.push(player2Name);
// to remove the random person picked from the 'players' list


players.splice(player2,1);
// console.log(players);


// console.log('Team2: ' + player2Name)
round ++



} while (round <= 6 ); 



console.log('Team 1:' + team1)


console.log('Team 2:'+ team2) 


