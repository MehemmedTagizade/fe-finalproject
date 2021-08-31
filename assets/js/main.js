const tabNavigations = Array.from(document.querySelectorAll(".bttn"));


const tabContents = Array.from(document.querySelectorAll("cards_blog .blog_part"));

const clearActives = () => {
    tabNavigations.forEach(tabNavigation => {
        tabNavigation.classList.remove("active");
    });

    tabContents.forEach(tabContent => {
        tabContent.classList.remove("active1");
    });
}


tabNavigations.forEach(tabNavigation => {
    tabNavigation.onclick = () => {
        clearActives();

        const targetId = tabNavigation.getAttribute("data_bttn_a");
        const targetContent = document.getElementById(targetId)
        tabNavigation.classList.add("active");
        targetContent.classList.add("active1")

    }
});

