// random colour scheme generator

const root = document.documentElement;

const offset = 120;
const maxValue = 255 - offset;
const randomRGB = () => Math.floor(offset + Math.random() * maxValue);

function newColourScheme() {
    const rgb_1 = [randomRGB(), randomRGB(), randomRGB()];
    const rgb_1_string = `rgb(${rgb_1[0]}, ${rgb_1[1]}, ${rgb_1[2]})`;

    root.style.setProperty('--accent-colour', rgb_1_string);
}

document.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) // enter
    newColourScheme()
});

// jokes api
const requestURL = "https://v2.jokeapi.dev/joke/Programming?type=single&amount=1&blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
const request = new XMLHttpRequest();

request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        const joke = JSON.parse(request.responseText).joke;
        document.getElementById("joke").innerHTML = joke;
    }
};

request.open("GET", requestURL, true);
request.send();
