let addSection = () => {
    //
    // Nos données
    let peopleInMyPromo = [
        "Quentin",
        "Louis",
        "Lydia",
        "Marlène",
        "Dorian",
        "Duc",
        "Anais",
        "Steeve",
        "Semih",
        "Melih",
        "Antoine",
        "Kevin",
        "Marya",
        "Mehdi",
        "Nicolas",
        "Henri",
        "Latifa",
        "Sebastien",
    ];
    //
    //
    //Permet de rendre aléatoire l'ordre des sections
    let newArray = [];
    function randomized() {
        for (let i = 0; i < peopleInMyPromo.length; i++) {
            newArray.push(
                peopleInMyPromo[
                    Math.floor(Math.random() * peopleInMyPromo.length)
                ]
            );
        }
    }

    randomized();
    for (let i = 0; i < newArray.length; i++) {
        //
        // Pour le background aléatoire
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        const color = `rgb(${r},${g},${b})`;
        //
        //
        let newSection = document.createElement("section");
        const article = document.querySelector("article");
        article.appendChild(newSection, article);
        //
        let paragraphe = document.createElement("p");
        let peopleSection = document.createTextNode(newArray[i]);
        newSection.appendChild(paragraphe);
        paragraphe.appendChild(peopleSection);
        paragraphe.style.background = color;
        console.log(color);
        //
        // Pour le texte en blanc ou noir suivant le background
        r < 150 && g < 150
            ? (paragraphe.style.color = "white")
            : (paragraphe.style.color = "black");
    }
};
addSection();
