//
// Add a keyup listener on the first input field, so that once you type a letter in this field, it goes into the <span id="display-firstname">. The content of the field and the span should always remain the same.
const inputName = document.getElementById("firstname");
const firstName = document.getElementById("display-firstname");
inputName.addEventListener("input", () => {
    console.log(inputName.value);
    firstName.innerHTML = inputName.value;
});
//
// Add a keyup listener on the second input (the number input), so that if the age is below 18 the content of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact.
const inputAge = document.getElementById("age");
const hardTruthSection = document.getElementById("a-hard-truth");
inputAge.addEventListener("input", () => {
    if (inputAge.value >= 18) {
        hardTruthSection.style.visibility = "visible";
    } else {
        hardTruthSection.style.visibility = "hidden";
    }
});
//
// Well this is a common one. Add a keyup listener on both fields and show a visual hint (for instance turn the field red) if the password is too short (less than 6 characters) or if the password and its confirmation do not match.
const inputPassword = document.getElementById("pwd");
const inputConfirmPassword = document.getElementById("pwd-confirm");

let valueOfPassword = () => {
    inputPassword.addEventListener("input", () => {
        if (inputPassword.value.length < 6) {
            inputPassword.style.color = "red";
        } else if (inputPassword.value.length > 5) {
            inputPassword.style.color = "black";
        }
    });
    inputConfirmPassword.addEventListener("input", () => {
        if (inputPassword.value != inputConfirmPassword.value) {
            inputConfirmPassword.style.color = "red";
        } else {
            inputConfirmPassword.style.color = "black";
        }
    });
};
valueOfPassword();
//
// Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. For ease of use, we'll say that the dark mode is just turning the background black and the text white.
const toggleMode = document.getElementById("toggle-darkmode");

toggleMode.addEventListener("change", () => {
    switch (toggleMode.value) {
        case "dark":
            document.body.style.background = "black";
            document.body.style.color = "white";
            break;
        case "light":
            document.body.style.background = "white";
            document.body.style.color = "black";
            break;
    }
});
