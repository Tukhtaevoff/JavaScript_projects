const textEl = document.querySelector(".text");
// Task 1
// let wordEl = [
//     "Hello world hello world",
//     "Come on come on come on",
//     "Oh my god omg and something"
// ];
// const capitalize = wordEl.map(string => string.toUpperCase());
// textEl.innerHTML = `<br> ${capitalize}`;

// Task 2
const swapCase = string => {
    let arrEl = string.split(' ');
    const newFunction = arrEl.map(( word, word2 ) => word2 % 2 === 0 ? word.toUpperCase() : word);
    return newFunction
}
textEl.innerHTML = swapCase("swap case example and hello world");

// Task 3


// Task 4


// Task 5


// Task 6



