

var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const sci_div = document.getElementById("s");

var mapping = {"r":"Rock","p":"Paper","s":"Scissor"};

function win(user,computer){
    userScore += 1;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = mapping[user] + "<sub><font size=\"5\">(User)</font></sub>"+ " beats " + mapping[computer] + "<sub><font size = \"5\">(Computer)</font></sub> ... You win! &#x1F354 &#x1F525";
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function(){document.getElementById(user).classList.remove('green-glow')},400);
}

function lose(user,computer){
    compScore += 1;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = mapping[user] + "<sub><font size=\"5\">(User)</font></sub>"+ " loses to " + mapping[computer] + "<sub><font size = \"5\">(Computer)</font></sub> ... You Lose.. &#x1F4A9&#x1F4A9";
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function(){document.getElementById(user).classList.remove('red-glow')},400);

}

function draw(user){
    result_div.innerHTML = "It's a Draw";
    document.getElementById(user).classList.add('grey-glow');
    setTimeout(function(){document.getElementById(user).classList.remove('grey-glow')},400);

}




function game(val){
    var random_num = Math.floor(Math.random() * Math.floor(3));
    var move_map = {0:"r",1:"p",2:"s"};
    var computer_move = move_map[random_num];
    
    var moves = computer_move + val;
    // Computer Move - User Move
    if (moves === "rp" || moves === "ps" || moves === "sr"){
        console.log("User Won");
        win(val,computer_move);
        
    } else if (moves === "pr" || moves === "sp" || moves === "rs"){
        console.log("Computer Won");
        lose(val,computer_move);
        
    } else {
        console.log("Its a Draw");
        draw(val);
    }

}



function main(){
    rock_div.onclick = function() {
        game("r");
    };
    paper_div.onclick = function() {
        game("p");
    };

    sci_div.onclick = function() {
        game("s");
    };

}

main();