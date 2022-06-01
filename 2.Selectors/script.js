//
const importantElement = document.querySelectorAll(".important");
importantElement.forEach(function (item) {
    item.title = "this is an important item";
});
//
//
const image = document.querySelectorAll("img");
image.forEach(function (item) {
    for (let i = 0; i < item.length; i++) {
        if ((item.classList = "important")) {
            item.style.display = "inline";
        } else {
            item.style.display = "none";
        }
    }
    console.log(image);
});
//
//
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach(function (item) {
    // console.log(item.innerHTML);
    // console.log(item.classList);
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const colorRandom = `rgb(${r},${g},${b})`;
    item.style.color = colorRandom;
});
//
//
const paragraphsImportant = document.querySelectorAll("p.important");
paragraphsImportant.forEach((p) => {
    p.style.color = "black";
});
console.log(paragraphsImportant);
