let backgroundColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const color = `rgb(${r},${g},${b})`;
    body.style.background = color;
};
const importantElement = document.querySelectorAll(".important");
importantElement.forEach(function (p) {
    p.title = "this is an important item";
});
//
//
const image = document.querySelectorAll("img");
image.forEach((item) => {
    if (item.classList != "important") {
        item.style.display = "none";
    }
});
//
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach(function (item) {
    // console.log(item.innerHTML);
    // console.log(item.classList);
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const colorRandom = `rgb(${r},${g},${b})`;
    if (item.classList != "important") item.style.color = colorRandom;
});
