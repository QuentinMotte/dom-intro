//
// Mettre le dernier <li> en premier
const list = document.querySelector("ol");
const firstChildList = list.children[0];
const lastChildList = list.children[4];
list.insertBefore(lastChildList, firstChildList);
console.log(firstChildList);
//
// Intervertir le troisieme <h2> avec le deuxieme <h2>
const main = document.querySelector("main");
const secondSection = main.children[1];
const thirdSection = main.children[2];
const titleThirdSection = main.children[1].children[0];
const titleSecondSection = main.children[2].children[0].children[0];

thirdSection.insertBefore(titleThirdSection, main.children[2].children[0]);
secondSection.insertBefore(titleSecondSection, main.children[1].children[0]);
console.log(main.children[2].children[0].children[0]);
//
//Supprimer la troisième section
const lastSection = main.children[2];
console.log(lastSection);
main.removeChild(lastSection);
