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
    if (e.keyCode == 13) // enter
    newColourScheme()
});

// age showcase thing

let agespan = document.getElementById("age");
let delta = new Date() - new Date(2009, 03, 20);

setInterval(() => {
    agespan.innerHTML = `${(delta / (1000 * 60 * 60 * 24 * 365)).toFixed("8")}`;
    delta += 100;
}, 100);

// floating navbar scroll effect

let navbar = document.querySelector(".navbar");

let callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting)
            navbar.style.opacity = 1;
        else
            navbar.style.opacity = 0;
    });
};

let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.35,
};

let observer = new IntersectionObserver(callback, options);

let target = document.querySelector(".hero");
observer.observe(target);

// jokes api
let requestURL = "https://v2.jokeapi.dev/joke/Programming?type=single&amount=1&blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
const request = new XMLHttpRequest();

request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const joke = JSON.parse(request.responseText).joke;
        document.getElementById("joke").innerHTML = joke;
    }
};

request.open("GET", requestURL, true);
request.send();
