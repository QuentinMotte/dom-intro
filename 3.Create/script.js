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
    const randomGenerator = (n) => {
        return Math.floor(Math.random() * n);
    };

    const randomizeCast = () => {
        // https://bost.ocks.org/mike/shuffle/
        let numberOfCharacters = peopleInMyPromo.length,
            t;
        const newArray = peopleInMyPromo;
        while (numberOfCharacters != 0) {
            let randomIndex = randomGenerator(numberOfCharacters--);
            t = newArray[numberOfCharacters];
            newArray[numberOfCharacters] = newArray[randomIndex];
            newArray[randomIndex] = t;
        }
        console.log(newArray);
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
    randomizeCast();
};
addSection();
