const cars = [
    {
        name: "Lamborghini",
        img: "./images/lamborghini-removebg-preview.png",
        price: 750000,
        desc: `Lorem ipsum dolor sit amet.`
    },
    {
        name: "Bugatti", 
        img: "./images/bugatti-removebg-preview.png",
        price: 3500000,
        desc: `Lorem ipsum dolor sit amet.`
    },
    {
        name: "Mercedes", 
        img: "./images/mercedes-removebg-preview.png",
        price: 60000,
        desc: `Lorem ipsum dolor sit amet.`
    },
    {
        name: "Bugatti", 
        img: "./images/bugatti2-removebg-preview.png",
        price: 2500000,
        desc: `Lorem ipsum dolor sit amet.`
    },
    {
        name: "Lamborghini", 
        img: "./images/lamborghini-2.webp",
        price: 1500000,
        desc: `Lorem ipsum dolor sit amet.`
    },
    {
        name: "Mercedes", 
        img: "./images/mercedes2-removebg-preview.png",
        price: 150000,
        desc: `Lorem ipsum dolor sit amet.`
    },
];

const allBtn = document.getElementById("all");
const sortFunc = document.getElementById("sort");
const filterBtn = document.getElementById("filter-btn");
const searchForm = document.getElementById("search-form");

const listEl = document.getElementById("list");

cars.map(function (item) {
    let displayUI = ``;
    displayUI = `
    <li class="list__item">
    <h2 class="name">${item.name}</h2>
    <img class="img" src="${item.img}">
    <p>${item.desc}</p>
    <strong>Price: ${item.price} $</strong>
    </li>
    `
    listEl.innerHTML += displayUI;
})

filterBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    let displayUI = cars.map(function (item) {
        if (item.name == "Bugatti") {
            return `
            <li class="list__item">
            <h2 class="name">${item.name}</h2>
            <img class="img" src="${item.img}">
            <p>${item.desc}</p>
            <strong>Price: ${item.price} $</strong>
            </li>
            `
        }
    })
    displayUI = displayUI.join("");
    listEl.innerHTML = displayUI;
})

allBtn.addEventListener("click", function () {
    let displayUI = cars.map(function (item) {
        return `
        <li class="list__item">
        <h2 class="name">${item.name}</h2>
        <img class="img" src="${item.img}">
        <p>${item.desc}</p>
        <strong>Price: ${item.price} $</strong>
        </li>
        `
    })
    displayUI = displayUI.join("");
    listEl.innerHTML = displayUI;
})

sortFunc.addEventListener("change", function (evt) {
    let displayUI = ``;

    // if (this.value === "Bugatti") {
    //     cars.map(function (item) {
    //         if (item.name === "Bugatti") {
    //             displayUI += `
    //             <li class="list__item">
    //             <h2 class="name">${item.name}</h2>
    //             <img class="img" src="${item.img}">
    //             <p>${item.desc}</p>
    //             <strong>Price: ${item.price} $</strong>
    //             </li>
    //             `;
    //             listEl.innerHTML = displayUI;
    //         }
    //     })
    // } else if (this.value === "Mercedes") {
    //     cars.map(function (item) {
    //         if (item.name === "Mercedes") {
    //             displayUI += `
    //             <li class="list__item">
    //             <h2 class="name">${item.name}</h2>
    //             <img class="img" src="${item.img}">
    //             <p>${item.desc}</p>
    //             <strong>Price: ${item.price} $</strong>
    //             </li>
    //             `;
    //             listEl.innerHTML = displayUI;
    //         }
    //     })
    // } else if (this.value === "Lamborghini") {
    //     cars.map(function (item) {
    //         if (item.name === "Lamborghini") {
    //             displayUI += `
    //             <li class="list__item">
    //             <h2 class="name">${item.name}</h2>
    //             <img class="img" src="${item.img}">
    //             <p>${item.desc}</p>
    //             <strong>Price: ${item.price} $</strong>
    //             </li>
    //             `;
    //             listEl.innerHTML = displayUI;
    //         }
    //     })
    // }
    switch(this.value) {
        case "Bugatti":
            cars.map(function (item) {
                if (item.name === "Bugatti") {
                    displayUI += `
                    <li class="list__item">
                    <h2 class="name">${item.name}</h2>
                    <img class="img" src="${item.img}">
                    <p>${item.desc}</p>
                    <strong>Price: ${item.price} $</strong>
                    </li>
                    `
                    listEl.innerHTML = displayUI;
                }
            })
        case "Mercedes":
            cars.map(function (item) {
                if (item.name === "Mercedes") {
                    displayUI += `
                    <li class="list__item">
                    <h2 class="name">${item.name}</h2>
                    <img class="img" src="${item.img}">
                    <p>${item.desc}</p>
                    <strong>Price: ${item.price} $</strong>
                    </li>
                    `
                    listEl.innerHTML = displayUI;
                }
            })
        case "Lamborghini":
            cars.map(function (item) {
                if (item.name === "Lamborghini") {
                    displayUI += `
                    <li class="list__item">
                    <h2 class="name">${item.name}</h2>
                    <img class="img" src="${item.img}">
                    <p>${item.desc}</p>
                    <strong>Price: ${item.price} $</strong>
                    </li>
                    `
                    listEl.innerHTML = displayUI;
                }
            })
        default: 
           break;
    }
})

searchForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const inputValue = evt.target.elements.search.value;

    let displayUI = cars.map(function (item) {
        if (inputValue === item.name) {
          return `
          <li class="list__item">
          <h2 class="name">${item.name}</h2>
          <img class="img" src="${item.img}">
          <p>${item.desc}</p>
          <strong>Price: ${item.price} $</strong>
          </li>
          `
        }
    })
    displayUI = displayUI.join("");
    listEl.innerHTML = displayUI;
})

