let list = document.querySelector("ul");
let listChildren = list.childNodes;
console.log(listChildren);
listChildren.forEach((element) => {
    if (element.textContent == "Fast and Furious") {
        element.classList.add("important");
        let fastAndFurious = element;
        console.log(fastAndFurious);
        list.firstElementChild.replaceWith(fastAndFurious);
    }

    element.addEventListener("click", () => {
        if (element.classList == "important") {
            alert(
                "The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family."
            );
        } else alert(element.textContent);
    });
});
let title = document.querySelector("h1");
let newDiv = document.createElement("div");
let select = document.createElement("select");
document.body.insertBefore(newDiv, list);
newDiv.appendChild(select);
let arraySelect = ["important franchise", "normal franchise"];
console.log(select);
for (let i = 0; i < arraySelect.length; i++) {
    let option = document.createElement("option");
    option.value = arraySelect[i];
    option.text = arraySelect[i];
    select.appendChild(option);
}
let li = document.querySelectorAll("li");
console.log(li);

function addActivityItem() {
    li.forEach((li) => {
        if (li.classList != "important") {
            li.style.display = "none";
        }
    });
}

select.addEventListener("click", function () {
    var options = document.body.querySelectorAll("option");
    var count = options.length;
    if (typeof count === "undefined" || count < 2) {
        addActivityItem();
    }
});

select.addEventListener("change", function () {
    if (select.value == "important franchise") {
        addActivityItem();
    } else {
        li.forEach((li) => {
            li.style.display = "block";
        });
    }
});

let array = [];
// let newArray = [];
li.forEach((li) => {
    if (li.classList != "important") {
        array.push(li);
    }
});
console.log(array);
const randomGenerator = (n) => {
    return Math.floor(Math.random() * n);
};
const randomizeCast = () => {
    // https://bost.ocks.org/mike/shuffle/
    let numberOfCharacters = array.length,
        t;
    const newArray = array;
    while (numberOfCharacters != 0) {
        let randomIndex = randomGenerator(numberOfCharacters--);
        t = newArray[numberOfCharacters];
        newArray[numberOfCharacters] = newArray[randomIndex];
        newArray[randomIndex] = t;
    }
    for (let i = 0; i < newArray.length; i++) {
        console.log(li);
        li.forEach((li) => {
            // li.textContent = newArray[i].value;
        });
        console.log(li.textContent);
        console.log(newArray[i].textContent);
        // li.textContent = newArray[i].textContent;
    }
};
// for (let i = 0; i < newArray.length; i++) {
//     li.forEach((li) => {
//         if (li.classList != "important") {
//             li.textContent = newArray[i];
//         }
//     });
// }
// console.log(newArray);
randomizeCast();
