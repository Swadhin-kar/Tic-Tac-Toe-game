console.log("Welcome Tic Tac Toe");
let turn = "X";
let gameOver = false;
let audioTurn = new Audio("ting.mp3");
let audioWin = new Audio(gameOver.mp3);
let count = 0



const changeTurn = () =>{
    return turn === "X" ? "0": "X";
}

const checkWin = ()=>{
    let boxes = document.getElementsByClassName("box");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(cross =>{
        if((boxes[cross[0]].innerText === boxes[cross[1]].innerText) && (boxes[cross[2]].innerText === boxes[cross[1]].innerText) && (boxes[cross[0]].innerText !== '')){
            document.querySelector('.turn').innerText = turn + " Won";
            gameOver = true;
            audioWin.play();
            document.querySelector('.gif').getElementsByTagName('img')[0].style.width = "15vw";
        }
    })
    count++;
    if(count == 9){
        gameOver = true;
        document.querySelector('.turn').innerText = "Draw";

    }
}
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    element.addEventListener('click', ()=>{
        if(element.innerText === '' && !gameOver){
            element.innerText = turn;
            audioTurn.play();
            checkWin();
            if(!gameOver){
                document.getElementsByClassName("turn")[0].innerText = "Turn for " + turn;
            }
            turn = changeTurn();
        }
    })
})
let reset = document.querySelector('.reset');
reset.addEventListener('click',()=>{
    Array.from(boxes).forEach(element => {
        element.innerText = '';
    });
    turn= "X";
    document.getElementsByClassName("turn")[0].innerText = "Turn for " + turn;
    document.querySelector('.gif').getElementsByTagName('img')[0].style.width = "0vw";
    count = 0;
    gameOver = false;
})