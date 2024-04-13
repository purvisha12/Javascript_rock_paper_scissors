let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepera = document.querySelector("#user-score");
const compscorepera = document.querySelector("#comp-score")

const gencompchoice = () =>{
    const option = ["rock","paper","scissors"];
    // rock paper scissors
    const randind = Math.floor(Math.random()*3);
    return option[randind];
}
const drowgame = () =>{
    msg.innerText = "game was draw. play again";
    msg.style.backgroundColor = "#081b31";
}

const showwinner = (userwin,userchoice,compchoice) =>{
    if(userwin){
        userscore++;
        userscorepera.innerHTML = userscore;
        msg.innerText = `you win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compscorepera.innerHTML = compscore;
        msg.innerText = `you lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";

    }
}
const playgame = (userchoice) =>{
    // to generate computer choice
    const compchoice = gencompchoice();

    if(userchoice === compchoice){
        drowgame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            // scissors,paper
            userwin = compchoice === "paper" ?false : true;
        }else if(userchoice === "paper"){
            // rock,scissors
            userwin = compchoice === "scissors"? false : true;
        }else{
            // rock,paper
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice)
    }
}



choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute('id');
        playgame(userchoice);
    })
});