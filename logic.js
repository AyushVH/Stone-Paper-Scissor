function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let p_pt = 0;
let c_pt = 0;
let comp_pt = document.getElementById("cpt");
let player_pt = document.getElementById("ppt");


function gamePlay(b) {
    let randNum = getRndInteger(1, 3);
    let btn_img = b.getAttribute("src");

    let result = document.getElementsByClassName("result")[0];
    let comp_img = document.getElementById("comp-img");
    let player_img = document.getElementById("player-img");



    if ((btn_img == "images/stoneR.png") && (randNum == 1)) {
        comp_img.src = "images/stoneL.png";
        player_img.src = "images/stoneR.png";
        result.innerText = "TIE"
        result.style = "color: yellow;"

    }

    else if ((btn_img == "images/stoneR.png") && (randNum == 2)) {
        comp_img.src = "images/paperL.png";
        player_img.scr = "images/stoneR.png";
        result.innerText = "You Lose"
        result.style = "color: red;"
        c_pt += 1;
        comp_pt.innerText = c_pt;



    }

    else if ((btn_img == "images/stoneR.png") && (randNum == 3)) {
        comp_img.src = "images/scissorL.png";
        player_img.scr = "images/stoneR.png";
        result.innerText = "You Win";
        result.style = "color: rgb(107, 235, 52);"
        p_pt += 1;
        player_pt.innerText = p_pt;

    }

    else if ((btn_img == "images/paperR.png") && (randNum == 1)) {
        comp_img.src = "images/stoneL.png";
        player_img.src = "images/paperR.png";
        result.innerText = "You Win";
        result.style = "color: rgb(107, 235, 52);"
        p_pt += 1;
        player_pt.innerText = p_pt;

    }

    else if ((btn_img == "images/paperR.png") && (randNum == 2)) {
        comp_img.src = "images/paperL.png";
        player_img.src = "images/paperR.png";
        result.innerText = "TIE"
        result.style = "color: yellow;"

    }

    else if ((btn_img == "images/paperR.png") && (randNum == 3)) {
        comp_img.src = "images/scissorL.png";
        player_img.src = "images/paperR.png";
        result.innerText = "You Lose"
        result.style = "color: red;"
        c_pt += 1;
        comp_pt.innerText = c_pt;

    }

    else if ((btn_img == "images/scissorR.png") && (randNum == 1)) {
        comp_img.src = "images/stoneL.png";
        player_img.src = "images/scissorR.png"
        result.innerText = "You Lose"
        result.style = "color: red;"
        c_pt += 1;
        comp_pt.innerText = c_pt;

    }

    else if ((btn_img == "images/scissorR.png") && (randNum == 2)) {
        comp_img.src = "images/paperL.png";
        player_img.src = "images/scissorR.png"
        result.innerText = "You Win";
        result.style = "color: rgb(107, 235, 52);"
        p_pt += 1;
        player_pt.innerText = p_pt;

    }

    else if ((btn_img == "images/scissorR.png") && (randNum == 3)) {
        comp_img.src = "images/scissorL.png";
        player_img.src = "images/scissorR.png"
        result.innerText = "TIE"
        result.style = "color: yellow;"

    }

    point_color();

}

function point_color() {
    if (c_pt > p_pt) {
        comp_pt.style = "color: rgb(107, 235, 52)";
        player_pt.style = "color: red;";

    }
    else if (p_pt > c_pt) {
        player_pt.style = "color: rgb(107, 235, 52)";
        comp_pt.style = "color: red;";
    }

    else {
        player_pt.style = "color: yellow";
        comp_pt.style = "color: yellow;";
    }
}

let stone = document.getElementById("stn");
stone.addEventListener("click", (function () { gamePlay(stone) }));

let paper = document.getElementById("ppr");
paper.addEventListener("click", (function () { gamePlay(paper) }));

let scissor = document.getElementById("scr");
scissor.addEventListener("click", (function () { gamePlay(scissor) }));
