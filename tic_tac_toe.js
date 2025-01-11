let boxes = document.querySelectorAll(".box");

let msg = document.querySelector("p");

let resetBtn = document.querySelector("#rstbtn");

let newbtn = document.querySelector("#new-btn");

let msgContainer = document.querySelector(".msg-container");

let draw = document.querySelector("#draw");

let count = 0;

let gameOver = false;

boxes.forEach(box => {
    box.addEventListener("click", () => {
        console.log("Clicked");
        count++;
        console.log(count);
        if(turnX){
            box.innerText = "X";   
            turnX = false;
        }else{
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        
        if (!gameOver && count === 9) {
            draw.innerText = `The Match is Draw. No Winners. Start New Game.`;
            gameOver = true; // Set game over for a draw.
        }
        checkWinner();
    });
});

const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner) =>{
        msg.innerText = `Congratulations Winner is ${winner}`;
        msgContainer.classList.remove("hide") ;
        disabledBoxes();
        gameOver = true;
}

const enableBoxes = () =>{
        for(let box of boxes){
            box.disabled = false;
            box.innerText = "";
        }
}

const resetGame = () =>{
    turnX = true;
    gameOver = false;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
    draw.innerText = "";
}
let winPattern = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1 ,4 ,7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
]

let turnX = true;

let checkWinner = () =>{
    for(pattern of winPattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                console.log("Winner",pos1);
                showWinner(pos1);
                return;
            }
        }
    }
}

resetBtn.addEventListener("click", resetGame);

newbtn.addEventListener("click",resetGame);

