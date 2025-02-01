
function information(){
    let player1=prompt("Enter the name of person1.");
    let player2=prompt("Enter the name of person2.");
        while (!player1 || !player2) {
        // If user entered only one name, show an alert and ask again
        if (!player1 || !player2) {
            alert("Please enter both player names to proceed into the game.");
        }

        // Re-prompt for names
        player1 = prompt("Enter the name of Person 1:");
        player2 = prompt("Enter the name of Person 2:");
    }

    
    document.getElementById("one").innerHTML=player1;
    document.getElementById("two").innerHTML=player2;

}
onload=information();

// result part
function resultOut(){

    // randomisation

    var p1=Math.floor(Math.random()*6+1);
    var p2=Math.floor(Math.random()*6+1);

    var dice1 = document.getElementById("dice1");
    var dice2 = document.getElementById("dice2");

    // Setting the dice images dynamically
    if(p1===1){
        dice1.innerHTML ="<img src='dice1.png' alt='dice1' width='150px'>";
    }
    if(p1===2){
        dice1.innerHTML ="<img src='dice2.png' alt='dice2' width='150px'>";
    }

    if(p1===3){
        dice1.innerHTML ="<img src='dice3.png' alt='dice3' width='150px'>";
    }

    if(p1===4){
        dice1.innerHTML ="<img src='dice4.png' alt='dice4' width='150px'>";
    }

    if(p1===5){
        dice1.innerHTML ="<img src='dice5.png' alt='dice5' width='150px'>";
    }
    if(p1===6){
        dice1.innerHTML ="<img src='dice6.png' alt='dice6' width='150px'>";
    }


    if(p2===1){
        dice2.innerHTML ="<img src='dice1.png' alt='dice1' width='150px'>";
    }
    if(p2===2){
        dice2.innerHTML ="<img src='dice2.png' alt='dice2' width='150px'>";
    }

    if(p2===3){
        dice2.innerHTML ="<img src='dice3.png' alt='dice3' width='150px'>";
    }

    if(p2===4){
        dice2.innerHTML ="<img src='dice4.png' alt='dice4' width='150px'>";
    }

    if(p2===5){
        dice2.innerHTML ="<img src='dice5.png' alt='dice5' width='150px'>";
    }
    if(p2===6){
        dice2.innerHTML ="<img src='dice6.png' alt='dice6' width='150px'>";
    }




    // dice1.innerHTML = `<img src="images/dice${p1}.png" alt="Dice ${p1}" width="100px">`;
    // dice2.innerHTML = `<img src="images/dice${p2}.png" alt="Dice ${p2}" width="100px">`;
    
    
    
    

    const resultDiv=document.getElementById("result");
    if(p1>p2){
        resultDiv.innerHTML=document.getElementById("one").innerHTML+" wins🚩";
    }
    else if(p1<p2){
        resultDiv.innerHTML=document.getElementById("two").innerHTML+" wins🚩";
    }
    else {
        resultDiv.innerHTML="Draw. Roll the dice again!";
    }
}



document.querySelector("button").onclick =resultOut;


