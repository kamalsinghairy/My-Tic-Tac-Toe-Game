let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true//playerX,playerO
const winPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    ];

    const resetGame=()=>{
        turnO=true;
        enableBoxex();
        msgContainer.classList.add("hide");
    }
// console.log(winPatterns.length);//output 8
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked.");
        if (turnO){//or we can write here : if(turnO===true){
            box.innerText="O";
            turnO=false
        }else{
            box.innerText="X";
            turnO=true
        }
        box.disabled=true;
        checkWinner();    
    })
});

const disableBoxex=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxex=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulation winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxex();
}

const checkWinner=()=>{
    for( let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // );

        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("Winner is :",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);