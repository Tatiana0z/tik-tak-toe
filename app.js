let currentPlayer = "O";
let posX = [];
let posO = [];
let countX = 0;
let countO = 0;

function insert(button, n){
    let winner = "";
    let index = n;

    if(document.querySelector(".winner").innerHTML == "") {
        if( button.value == "" ) {
            button.value = currentPlayer;
    
            console.log(index);
            currentPlayer = currentPlayer === "O" ? "X" : "O";
    
            if (currentPlayer == "O") {
                posX.push(n);
                countX+=1;
                console.log("X: " + posX);
            } else if (currentPlayer == "X") {
                posO.push(n);
                console.log("O: " + posO);
                countO+=1;
            }
        } 
        
    
        if(( posO.includes(1) && posO.includes(2) && posO.includes(3) ) || 
           ( posO.includes(4) && posO.includes(5) && posO.includes(6) ) ||
           ( posO.includes(7) && posO.includes(8) && posO.includes(9) ) ||
           ( posO.includes(1) && posO.includes(4) && posO.includes(7) ) ||
           ( posO.includes(2) && posO.includes(5) && posO.includes(8) ) ||
           ( posO.includes(3) && posO.includes(6) && posO.includes(9) ) ||
           ( posO.includes(1) && posO.includes(5) && posO.includes(9) ) ||
           ( posO.includes(3) && posO.includes(5) && posO.includes(7) )
           ) {
            console.log("O win!: " + posO);
            winner = "O win!";
            document.querySelector(".winner").innerHTML = winner;
        } else if(( posX.includes(1) && posX.includes(2) && posX.includes(3) ) || 
        ( posX.includes(4) && posX.includes(5) && posX.includes(6) ) ||
        ( posX.includes(7) && posX.includes(8) && posX.includes(9) ) ||
        ( posX.includes(1) && posX.includes(4) && posX.includes(7) ) ||
        ( posX.includes(2) && posX.includes(5) && posX.includes(8) ) ||
        ( posX.includes(3) && posX.includes(6) && posX.includes(9) ) ||
        ( posX.includes(1) && posX.includes(5) && posX.includes(9) ) ||
        ( posX.includes(3) && posX.includes(5) && posX.includes(7) )
        ) {
         console.log("X win!: " + posX);
         winner = "X win!";
         document.querySelector(".winner").innerHTML = winner;
        } else if( ( (countO == 4) && (countX == 5) ) || (countO == 5) && (countX == 4) ) {
            document.querySelector(".winner").innerHTML = "Nobody won!";
        }
    }
}

function reset() {
    let sections = document.querySelectorAll(".btn-insert");

    for(let i = 0 ; i < sections.length ; i++ ) {
        sections[i].value = "";
    }

    posX = [];
    posO = [];

    countX = 0;
    countO = 0;

    console.log("X: " + posX + "O: " + posO);

    document.querySelector(".winner").innerHTML = "";

    currentPlayer = "O";
}