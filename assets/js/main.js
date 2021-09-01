// blog//
// const tabNavigations = Array.from(document.querySelectorAll(".bttn"));


// const tabContents = Array.from(document.querySelectorAll(".cards_blog .blog_part"));

// const clearActives = () => {
//     tabNavigations.forEach(tabNavigation => {
//         tabNavigation.classList.remove("active2");
//     });

//     tabContents.forEach(tabContent => {
//         tabContent.classList.remove("active1");
//     });


// }


// tabNavigations.forEach(tabNavigation => {
//     tabNavigation.onclick = () => {
//         clearActives();
//         event.preventDefault();
//         const targetId = tabNavigation.getAttribute("data_bttn_a");
//         const targetContent = document.getElementById(targetId)
//         tabNavigation.classList.add("active2");
//         targetContent.classList.add("active1")

//     }
// });

//blog end///

//nav-burger//
// const navslide = () => {
//     const burger = document.querySelector(".nav .sd .burger_svg");
//     const rightSide = document.querySelector(".nav .sd .right_side");

//     burger.onclick = () => {
//         rightSide.classList.toggle("activeburger")
//     }

// }
// const divv = document.querySelector("div")

// burger.addEventListener('click', () => {
//     divv.style.color = "red"


// }
// )
const burger = document.querySelector(".nav .sd .burger_svg");
const rightSide = document.querySelector(".nav .sd .right_side");

burger.onclick = () => {
    // rightSide.classList.toggle("activeburger");
    rightSide.classList.toggle("activeburger")
}

// navslide();
// burger.addEventListener("click", function () {

// })













//nav-burger-end//


