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

let navbar = document.querySelector(".navbar");

let callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            navbar.style.opacity = 1;
        } else {
            navbar.style.opacity = 0;
        }
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
