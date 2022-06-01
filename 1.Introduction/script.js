let title = document.title;
document.title = "Modifying the DOM";
const body = document.querySelector("body");
console.log(body.children);

for (const childrens of body.children) {
    console.log(childrens);
}

let backgroundColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const color = `rgb(${r},${g},${b})`;
    body.style.background = color;
};
setInterval(backgroundColor, 2000);
