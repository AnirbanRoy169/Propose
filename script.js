const yes = document.getElementById("yes");
const no = document.getElementById("no");
const text = document.getElementById("text");
const body = document.querySelector("body");
const answer = document.getElementById("answer");

const noText = () => {
    const arr = ["No bole kono option nai, Yes bol Yes 😏", "Please ☹️", "Na kno bolis re, ha bol 🌚", "Yes bol 😶‍🌫️"];
    let value = Math.floor(Math.random() * 4);
    return arr[value];
}

yes.addEventListener("click", () => {
    text.innerText = `Thank You, Thank You
    I Love You 😘
    My Watashi No`;
    text.style.color = "white";
    text.style.lineHeight = "3rem";
    body.style.background = `url("heart3.png") center`;
    answer.style.opacity = "0";
});

no.addEventListener("click", () => {
    const genText = noText();
    text.innerText = genText;
});