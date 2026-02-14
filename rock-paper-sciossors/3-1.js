 let score = JSON.parse(localStorage.getItem("score"))||  {
        win: 0,
        loss: 0,
        tie: 0
    };
    localStorage.setItem("score", JSON.stringify(score));;

document.getElementById("w").textContent = score.win;
document.getElementById("l").textContent = score.loss;
document.getElementById("t").textContent = score.tie;

function check(op) {
    let c = Math.random();

    if (op == 1) {         
        if (c < 1/3) {
            score.tie++;
        } else if (c < 2/3) {
            score.loss++;
        } else {
            score.win++;
        }
    }

    if (op == 2) {         
        if (c < 1/3) {
            score.win++;
        } else if (c < 2/3) {
            score.tie++;
        } else {
            score.loss++;
        }
    }

    if (op == 3) {          
        if (c < 1/3) {
            score.loss++;
        } else if (c < 2/3) {
            score.win++;
        } else {
            score.tie++;
        }
    }

    document.getElementById("w").textContent = score.win;
    document.getElementById("l").textContent = score.loss;
    document.getElementById("t").textContent = score.tie;

    localStorage.setItem("score", JSON.stringify(score));
}

document.getElementById("rock").onclick = () => check(1);
document.getElementById("paper").onclick = () => check(2);
document.getElementById("scissor").onclick = () => check(3);

document.getElementById("reset").onclick = function () {
    localStorage.removeItem("score");
    score = { win: 0, loss: 0, tie: 0 }; 

    document.getElementById("w").textContent = 0;
    document.getElementById("l").textContent = 0;
    document.getElementById("t").textContent = 0;
};
