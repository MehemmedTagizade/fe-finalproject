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

const burger = document.querySelector(".nav .sd .burger_svg");
const rightSide = document.querySelector(".nav .sd .right_side");

burger.onclick = () => {
    rightSide.classList.toggle("activeburger")
}

//nav-burger-end//

// nav-dropdown-//


const chevronDowns = Array.from(document.querySelectorAll(".nav .right_side .links .links_ul .ox"));
// console.log(chevronDowns)
const contentNames = Array.from(document.querySelectorAll(".nav .right_side .links .links_ul .sub_menu"));
const dropContents = Array.from(document.querySelectorAll(".nav .right_side .links .links_ul .dropdwn12"));


contentNames.forEach(contentName => {
    contentName.onclick = () => {
        event.preventDefault();
        const targetDropId = contentName.getAttribute("data-sub");
        const targetContentbyId = document.getElementById(targetDropId);
        targetContentbyId.classList.toggle("active7");
chevronDowns.forEach(chevronDown =>{
    
    chevronDown.classList.toggle("active12")
})

    }
})



// dropContents.forEach(dropContent => {
//     contentNames.forEach(contentName => {

//         contentName.onclick = () => {
//             dropContent.classList.toggle("active7")
//         }
//     });

// })













// nav-dropdown-end//













//nav-burger-end//


