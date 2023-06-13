
//Read the JSON in problem1.json
let fs = require('fs');
let fluffy = JSON.parse( fs.readFileSync("problems/problem1.json",'utf8') );


//add height and weight to fluffy
fluffy.height = "25 cm";
fluffy.weight = "5 kg";

//update fluffy name
fluffy.name= "Fluffyy";

//List all the activities of Fluffyy’s catFriends
let catFriends_activities = [];
fluffy.catFriends.forEach( c => { catFriends_activities = [...catFriends_activities , ...c.activities] } );

//Print the catFriends name
fluffy.catFriends.forEach( c=>{ console.log(c.name) } );

//Print the total weight of catFriends
console.log( fluffy.catFriends.reduce( (t,c)=> t + c.weight , 0) );

//Print the total activities of all cats (op:6)
console.log([...fluffy.activities , ...catFriends_activities].length);

//Add 2 more activities to Bar & Foo cats
fluffy.catFriends[0].activities.push("grooming itself", "scratch something");
fluffy.catFriends[1].activities.push("hiding", " play with toys");

//Update the fur color of bar
fluffy.catFriends[0].furcolor="brown";
