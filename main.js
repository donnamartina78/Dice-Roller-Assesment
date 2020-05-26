const NumberDice = document.querySelector ("#numberDice");
const Roll = document.querySelector("#Roll");
const totalRolls = document.querySelector("#die-roll-total");
const ShowAllRolls= document.querySelector("#show-all-rolls");
const eachRoll = document.querySelector("#each-roll");

let dieRolls = [];


Roll.addEventListener ("click",function(){
    let numberOfDiceRolls = Number(NumberDice.value);
    var i = 0;
    dieRolls = [];
    while(i < numberOfDiceRolls){
        //randomly generate a die face between 1 and 6
        //add result to the array
        dieRolls.push(Math.floor(Math.random() * 6 + 1));
        i = i + 1;
    }

    //add all the elements of the array
    let sum = 0;
    var j = 0;
    while(j < dieRolls.length){
        sum = (sum + dieRolls[j]);
        j = j + 1;
    }

    totalRolls.textContent = sum;

})

ShowAllRolls.addEventListener("click", function(){
    eachRoll.innerHTML = dieRolls;
})




















