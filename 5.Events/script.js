// const _initTime = Date.now();

// const getElapsedTime = () => {
//     return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
// };

// const clickOnSquare = (e) => {
//     console.log(e.target.classList[1]);
//     console.log(getElapsedTime());
// };

// const actionSquares = document.querySelectorAll(".actionsquare");
// for (let actionSquare of actionSquares) {
//     actionSquare.addEventListener("click", clickOnSquare);
// }

// console.log(_initTime);
//
//Pour générer les carrés
const sectionContainer = document.querySelector(".displayedsquare-wrapper");
const square = document.querySelectorAll(".actionsquare");
const greenSquare = document.querySelector(".green");
const violetSquare = document.querySelector(".violet");
const orangeSquare = document.querySelector(".orange");
//Pour générer la liste
const list = document.querySelector("ul");
//
//
let squareGenerator = (color) => {
    const t = Math.round(performance.now() / 10) / 100;
    sectionContainer.innerHTML += `<div class = "displayedsquare ${color}" </div>`;
    list.innerHTML += `<li> [${t}s] Created a new ${color} square </li>`;
};
greenSquare.addEventListener("click", () => {
    squareGenerator("green");
});
violetSquare.addEventListener("click", () => {
    squareGenerator("violet");
});
orangeSquare.addEventListener("click", () => {
    squareGenerator("orange");
});
//
//Change la couleur du background quand on appuie sur la base d'espace / Effacer les logs / Effacer les carrés
document.body.addEventListener("keypress", (e) => {
    //
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const color = `rgb(${r},${g},${b})`;
    //
    const t = Math.round(performance.now() / 10) / 100;
    //
    const listChild = document.querySelectorAll("li");
    const deleteSquare = document.querySelectorAll(".displayedsquare");
    //
    console.log(e.code);
    //
    if (e.code === "Space") {
        document.body.style.background = color;
        list.innerHTML += `<li> [${t}s] Created a random background color </li>`;
    } else if (e.code === "KeyL") {
        listChild.forEach((log) => log.remove());
    } else if (e.code === "KeyS") {
        deleteSquare.forEach((square) => square.remove());
    }
});
