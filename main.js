const ratingContainer = document.querySelector('.rating');
let currentValue = 0;
const limit = 5;

const html = Array.from(Array(limit)).map((item, i) => {
    return `<span class="item" data-value="${i + 1}">&#9733;</span>`;
});

ratingContainer.innerHTML = html.join("");

const items = document.querySelectorAll(".item");

items.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
        const value = item.getAttribute("data-value");
        highlightStars(value);
    });

    item.addEventListener("click", (e) => {
        const value = item.getAttribute("data-value");
        currentValue = value;
    });

    item.addEventListener("mouseout", (e) => {
        highlightStars(currentValue);
    });
});

function highlightStars(value) {
    items.forEach((item) => {
        const itemValue = item.getAttribute("data-value");
        item.classList.toggle('item-full', itemValue <= value);
    });
}

