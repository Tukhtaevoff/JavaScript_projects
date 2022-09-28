const listEl = document.getElementById("list");
const textEl = document.querySelector(".text");
const nameForm = document.getElementById("formName");
const nameInput = document.getElementById("inputName");
const listItem = document.querySelectorAll("#list__item");

listEl.style.listStyle = "none";

let info = {
    going : ["Bus", "Car", "Underground", "Bike"],
    clothes: ["Trousers", "Shirt", "T-shirt", "Short", "Shoes", "Sneakers", "Hat", "Socks", "Jeans"],
    colors: ["White", "Black", "Lightblue", "Blue", "Red", "Darkred", "Gray", "Brown", "Yellow", "Green"],
};

let isShopOpen = false;

let getHour = new Date().getHours();

if (getHour >= 9) {
    isShopOpen = true;
} else if (getHour >= 22) {
    isShopOpen = false;
}

nameForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    if (nameInput.value === "") {
        textEl.textContent = "You haven't entered anything!";
    } else {
        nameForm.style.display = "none";
        let order = (time, work, error) => {
            return new Promise ((resolve, reject) => {
                if (isShopOpen) {
                    setTimeout(() => {
                        resolve(work());
                    }, time);
                } else {
                    reject(error());
                }
            });
        };

        // order (0000, () => listItem[0].innerHTML = `${nameInput.value}, You are going to Boutique 👕`)
        // .then(() => {
        //     return order(2000, () => {
        //         listItem[1].innerHTML = `First of all, You should decide what you're going to go with 🚗`;
        //         listItem[0].style.display = "none";
        //     })
        // })
        // .then(() => {
        //     return order(3000, () => {
        //         listItem[2].innerHTML = `There are some options you should choose🔍`;
        //         listItem[1].style.display = "none";
        //     })
        // })
        // .then(() => {
        //     return order(3000, () => {
        //         const optionTrans = prompt(`Select one of the transports - ${info.going[0]} 🚌, ${info.going[1]}🚗, ${info.going[2]} 🚇, ${info.going[3]}🚲`);
        //         if (optionTrans === "bike" || optionTrans === "bycycle") {
        //             listItem[3].innerHTML = `Ok, You selected ${optionTrans} 🚲`;
        //         } else if (optionTrans === "bus") {
        //             listItem[3].innerHTML = `Ok, You selected ${optionTrans} 🚌`;
        //         } else if (optionTrans === "metro" || optionTrans === "Underground") {
        //             listItem[3].innerHTML = `Ok, You selected ${optionTrans} 🚇`;
        //         } else {
        //             listItem[3].innerHTML = `Ok, You selected ${optionTrans} 🚗`;
        //         }
        //         listItem[2].style.display = "none";
        //     })
        // })
        // .then(() => {
        //     return order(2000, () => {
        //         listItem[4].innerHTML = `You have arrived at clothes store 🏬`;
        //         listItem[3].style.display = "none";
        //     })
        // })
        // .then(() => {
        //     return order(3000, () => {
        //         listItem[5].innerHTML = `${nameInput.value}, You should know what you're gonna buy from there!`;
        //         listItem[4].style.display = "none";
        //     })
        // })
        // .then(() => {
        //     return order(2000, () => {
        //         listItem[6].innerHTML = `There are only few options, just write down what you are going to purchase 👜`;
        //         listItem[5].style.display = "none";
        //     })
        // })
        // .then(() => {
        //     return order(3000, () => {
        //         alert(`There are (${info.clothes[0]} 👖, ${info.clothes[1]} 🎽, ${info.clothes[2]} 👕, ${info.clothes[3]} 🩳, ${info.clothes[4]} 👞, ${info.clothes[5]} 👟, ${info.clothes[6]} 👒, ${info.clothes[7]} 🧦, ${info.clothes[8]}) 👖`);
        //         const productPrompt = prompt("I need: ");
        //         if (productPrompt) {
        //             listItem[7].innerHTML = `Good job ${nameInput.value}, You have chosen ${productPrompt}`;
        //         }
        //         listItem[6].style.display = "none";
        //     })
        // })
        // .then(() => {
        //     return order(3000, () => {
        //         listItem[8].innerHTML = `And now, You should choose the colors that you selected`;
        //         listItem[7].style.display = "none";
        //     })
        // })
        // .then(() => {
        //     return order(2000, () => {
        //         let colorRan = randomColors();
        //         const colorsPrompt = prompt(`Write down colors that you want! For example: ${info.colors[colorRan]} T shirt, ${info.colors[colorRan]} trousers, ${info.colors[colorRan]} Short`);
        //         if (colorsPrompt) {
        //             listItem[9].innerHTML = `Okay ${nameInput.value}, You want ${colorsPrompt}`;
        //         }
        //         listItem[8].style.display = "none";
        //     })
        // })
        // .then(() => {
        //     return order(3000, () => {
        //         listItem[10].innerHTML = `${nameInput.value}, Just ${expenses()}$ from you 💰`;
        //         listItem[9].style.display = "none";
        //     })
        // })
        // .then(() => {
        //     return order(2000, () => {
        //         const confirmation = confirm("Do you agree for the price 💸? ");
        //         if (!confirmation) {
        //             listItem[11].innerHTML = `If you don't agree for the price 💲, Just go out of my store and don't come again😡!!`;
        //         } else {
        //             listItem[11].innerHTML = `If you agree for the price 💲, I'm happy and I wish you wear that you bought for years😇`;
        //         }
        //         listItem[10].style.display = "none";
        //     })
        // })
        // .then(() => {
        //     return order(3000, () => {
        //         listItem[12].innerHTML = `Good bye ${nameInput.value}, I wish we will meet again👋`;
        //         listItem[11].style.display = "none";
        //     })
        // })
        // .catch(() => {
        //     listItem[0].innerHTML = `We're sorry ${nameInput.value}, our shop is closed 😔 after 22:00`;
        // })
        // .finally(() => {
        //     return order(2000, () => {
        //         listItem[12].style.display = "none";
        //         nameForm.style.display = "block";
        //     })
        // })



        
        
        // order(2000, productionWork);

        async function productionWork() {
            try {
                await order(0000, () => listItem[0].innerHTML = `${nameInput.value}, You are going to Boutique 👕`)

                await order(3000, () => {
                    listItem[1].innerHTML = `First of all, You should decide what you're going to go with 🚗`;
                    listItem[0].style.display = "none";
                })

                await order(3000, () => {
                    listItem[2].innerHTML = `There are some options you should choose🔍`;
                    listItem[1].style.display = "none";
                })                

                await order(3000, () => {
                    const optionTrans = prompt(`Select one of the transports - ${info.going[0]} 🚌, ${info.going[1]}🚗, ${info.going[2]} 🚇, ${info.going[3]}🚲`);
                    if (optionTrans === "bike" || optionTrans === "bycycle") {
                        listItem[3].innerHTML = `Ok, You selected ${optionTrans} 🚲`;
                    } else if (optionTrans === "bus") {
                        listItem[3].innerHTML = `Ok, You selected ${optionTrans} 🚌`;
                    } else if (optionTrans === "metro" || optionTrans === "Underground") {
                        listItem[3].innerHTML = `Ok, You selected ${optionTrans} 🚇`;
                    } else {
                        listItem[3].innerHTML = `Ok, You selected ${optionTrans} 🚗`;
                    }
                    listItem[2].style.display = "none";
                })

                await order(3000, () => {
                    listItem[4].innerHTML = `You have arrived at clothes store 🏬`;
                    listItem[3].style.display = "none";
                })

                await order(3000, () => {
                    listItem[5].innerHTML = `${nameInput.value}, You should know what you're gonna buy from there!`;
                    listItem[4].style.display = "none";
                })

                await order(3000, () => {
                    listItem[6].innerHTML = `There are only few options, just write down what you are going to purchase 👜`;
                    listItem[5].style.display = "none";
                })

                await order(3000, () => {
                    alert(`There are (${info.clothes[0]} 👖, ${info.clothes[1]} 🎽, ${info.clothes[2]} 👕, ${info.clothes[3]} 🩳, ${info.clothes[4]} 👞, ${info.clothes[5]} 👟, ${info.clothes[6]} 👒, ${info.clothes[7]} 🧦, ${info.clothes[8]}) 👖`);
                    const productPrompt = prompt("I need: ");
                    if (productPrompt) {
                        listItem[7].innerHTML = `Good job ${nameInput.value}, You have chosen ${productPrompt}`;
                    }
                    listItem[6].style.display = "none";
                })

                await order(3000, () => {
                    listItem[8].innerHTML = `And now, You should choose the colors of your selected clothes`;
                    listItem[7].style.display = "none";
                })

                await order(3000, () => {
                    let colorRan = randomColors();
                    const colorsPrompt = prompt(`Write down colors that you want! For example: ${info.colors[colorRan]} T shirt, ${info.colors[colorRan]} trousers, ${info.colors[colorRan]} Short`);
                    if (colorsPrompt) {
                        listItem[9].innerHTML = `Okay ${nameInput.value}, You want ${colorsPrompt}`;
                    }
                    listItem[8].style.display = "none";
                })
                
                await order(3000, () => {
                    listItem[10].innerHTML = `${nameInput.value}, Just ${expenses()}$ from you 💰`;
                    listItem[9].style.display = "none";
                })

                await order(3000, () => {
                    const confirmation = confirm("Do you agree for the price 💸? ");
                    if (!confirmation) {
                        listItem[11].innerHTML = `If you don't agree for the price 💲, Just go out of my store and don't come again😡!!`;
                    } else {
                        listItem[11].innerHTML = `If you agree for the price 💲, I'm happy and I wish you wear that you bought for years😇`;
                    }
                    listItem[10].style.display = "none";
                })

                await order(3000, () => {
                    listItem[12].innerHTML = `Good bye ${nameInput.value}, I wish we will meet again👋`;
                    listItem[11].style.display = "none";
                })
            }
            catch (error) {
                listItem[0].innerHTML = `We're sorry ${nameInput.value}, our shop is closed 😔 after 22:00`;
            }
            finally {
                listItem[12].style.display = "none";
            }




        
        // function productionWork() {
        //     setTimeout(() => {
        //         listItem[0].innerHTML = `${nameInput.value}, You are going to Boutique 👕`;
        //         setTimeout(() => {
        //            listItem[1].innerHTML = `First of all, You should decide what you're going to go with 🚗`;
        //            setTimeout(() => {
        //             listItem[2].innerHTML = `There are some options you should choose🔍`;
        //             setTimeout(() => {
        //                 const optionTrans = prompt(`Select one of the transports - ${info.going[0]} 🚌, ${info.going[1]}🚗, ${info.going[2]} 🚇, ${info.going[3]}🚲`);
        //                 if (optionTrans === "bike" || optionTrans === "bycycle") {
        //                     listItem[3].innerHTML = `Ok, You selected ${optionTrans} 🚲`;
        //                 } else if (optionTrans === "bus") {
        //                     listItem[3].innerHTML = `Ok, You selected ${optionTrans} 🚌`;
        //                 } else if (optionTrans === "metro" || optionTrans === "Underground") {
        //                     listItem[3].innerHTML = `Ok, You selected ${optionTrans} 🚇`;
        //                 } else {
        //                     listItem[3].innerHTML = `Ok, You selected ${optionTrans} 🚗`;
        //                 }
        //                 setTimeout(() => {
        //                     listItem[4].innerHTML = `You have arrived at clothes store 🏬`;
        //                     setTimeout(() => {
        //                         listItem[5].innerHTML = `${nameInput.value}, You should know what you're gonna buy from there!`;
        //                         setTimeout(() => {
        //                             listItem[6].innerHTML = `There are only few options, just write down what you are going to purchase 👜`;
        //                             setTimeout(() => {
        //                                 alert(`There are (${info.clothes[0]} 👖, ${info.clothes[1]} 🎽, ${info.clothes[2]} 👕, ${info.clothes[3]} 🩳, ${info.clothes[4]} 👞, ${info.clothes[5]} 👟, ${info.clothes[6]} 👒, ${info.clothes[7]} 🧦, ${info.clothes[8]}) 👖`);
        //                                 const productPrompt = prompt("I need: ");
        //                                 if (productPrompt) {
        //                                     listItem[7].innerHTML = `Good job ${nameInput.value}, You have chosen ${productPrompt}`;
        //                                 }
        //                                 setTimeout(() => {
        //                                     listItem[8].innerHTML = `And now, You should choose the colors of ${productPrompt}`;
        //                                     setTimeout(() => {
        //                                         let colorRan = randomColors();
        //                                         const colorsPrompt = prompt(`Write down colors that you want! For example: ${info.colors[colorRan]} T shirt, ${info.colors[colorRan]} trousers, ${info.colors[colorRan]} Short`);
        //                                         if (colorsPrompt) {
        //                                             listItem[9].innerHTML = `Okay ${nameInput.value}, You want ${colorsPrompt}`;
        //                                         }
        //                                         setTimeout(() => {
        //                                             listItem[10].innerHTML = `${nameInput.value}, Just ${expenses()}$ from you 💰`;
        //                                             setTimeout(() => {
        //                                                 const confirmation = confirm("Do you agree for the price 💸? ");
        //                                                 if (!confirmation) {
        //                                                     listItem[11].innerHTML = `If you don't agree for the price 💲, Just go out of my store and don't come again😡!!`;
        //                                                 } else {
        //                                                     listItem[11].innerHTML = `If you agree for the price 💲, I'm happy and I wish you wear that you bought for years😇`;
        //                                                     setTimeout(() => {
        //                                                         listItem[12].innerHTML = `Good bye ${nameInput.value}, I wish we will meet again👋`;
        //                                                     listItem[11].style.display = "none";
        //                                                     }, 3000);
        //                                                 }
        //                                                 listItem[10].style.display = "none";
        //                                             }, 3000);
        //                                             listItem[9].style.display = "none";
        //                                         }, 3000);
        //                                         listItem[8].style.display = "none";
        //                                     }, 3000);
        //                                     listItem[7].style.display = "none";
        //                                 }, 3000);
        //                                 listItem[6].style.display = "none";
        //                             }, 3000);
        //                             listItem[5].style.display = "none";
        //                         }, 3000);
        //                         listItem[4].style.display = "none";
        //                     }, 3000);
        //                     listItem[3].style.display = "none";
        //                 }, 3000);
        //                 listItem[2].style.display = "none";
        //             }, 3000);
        //             listItem[1].style.display = "none";
        //            }, 3000);
        //            listItem[0].style.display = "none";
        //         }, 2000);
        //     }, 0);
        // };
    // }
    }   
    productionWork();
    } 
});

let expenses = () => {
    return Math.floor(Math.random() * 200);
};

let randomColors = () => {
    return Math.floor(Math.random() * info.colors.length);
};
