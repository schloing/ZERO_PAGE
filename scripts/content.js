// retrieve content form content/

fetch("../content/content.json")
    .then(response => response.json())
    .then(data => begin(data));

function begin(data) {
    const content_area = document.querySelector(".sidebar-content");

    function section_template() {
        const container = {
            main: document.createElement("div"),
            heading: document.createElement("li"),
        };

        container.main.appendChild(container.heading);
        container.heading.classList.add("fine-heading");

        return container;
    }

    function load(article) {
        fetch(`../content/${article}`)
            .then(response => response.text())
            .then(plaintext => console.log(plaintext));
    }

    // <div class="recent">
    //     <li class="fine-heading">recent</li>
    //     <li><a href="https://www.github.com">why is c so fun to write in?</a></li>
    //     <li><a href="https://www.github.com">why are there no* optical computers?</a></li>
    //     <li><a href="https://www.github.com">on the safety of wireless networks</a></li>
    //     <li><a href="https://www.github.com">tracking celestial objects</a></li>
    // </div>

    Object.keys(data.articles).forEach(key => {
        let template = section_template();

        template.heading.innerText = key;

        data.articles[key].forEach(article => {
            let list_item = document.createElement("li");
            let inner = document.createElement("a");

            inner.href = load(article.relative);
            inner.innerText = article.title;

            list_item.appendChild(inner);
            template.main.appendChild(list_item);
        });

        content_area.appendChild(template.main);
    });
}