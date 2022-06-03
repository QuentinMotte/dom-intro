let list = document.querySelector("ul"),
    i;
let listChildren = list.childNodes;
console.log(listChildren);
listChildren.forEach((element) => {
    if (element.textContent == "Fast and Furious") {
        element.classList.add("important");
        let fastAndFurious = element;
        console.log(fastAndFurious);
        list.replaceChild(fastAndFurious, list.firstElementChild);
    }

    element.addEventListener("click", () => {
        if (element.classList == "important") {
            alert(
                "The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family."
            );
        } else alert(element.textContent);
    });
});
//
// Input select Logique
let title = document.querySelector("h1");
let newDiv = document.createElement("div");
let select = document.createElement("select");
document.body.insertBefore(newDiv, list);
newDiv.appendChild(select);
let arraySelect = ["normal franchise", "important franchise"];
console.log(select);
for (let i = 0; i < arraySelect.length; i++) {
    let option = document.createElement("option");
    option.value = arraySelect[i];
    option.text = arraySelect[i];
    select.appendChild(option);
}
//
let li = document.querySelectorAll("li");
function addActivityItem() {
    li.forEach((li) => {
        if (li.classList != "important") {
            li.style.display = "none";
        }
    });
}
select.addEventListener("change", function () {
    if (select.value == "important franchise") {
        addActivityItem();
    } else {
        li.forEach((li) => {
            li.style.display = "block";
        });
    }
});
//
// -> Rendre la liste aléatoire sauf pour fast&furious
document.body.addEventListener("keypress", () => {
    if (event.code == "KeyR") {
        for (i = list.children.length; i >= 0; i--) {
            console.log(list.firstElementChild);
            list.appendChild(list.children[(Math.random() * i) | 1]);
        }
    }
});
playOne = true;
document.body.addEventListener("keypress", () => {
    if (event.code == "KeyD" && playOne) {
        let firstChild = list.firstElementChild;
        firstChildClone = firstChild.cloneNode(true);
        console.log(firstChildClone);
        firstChild.appendChild(firstChildClone);
        playOne = false;
    }
});
console.log(list.children[1].isEqualNode(list.children[3]));
function remove(a, b) {
    a.isEqualNode(b) ? a.remove() : null;
}
remove(list.children[1], list.children[3]);
remove(list.children[1], list.children[8]);
console.log(list.children);
