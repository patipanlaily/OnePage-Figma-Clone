// Selector navbar class
const navbar = document.querySelector("nav.navbar");
// Set number pixel
const scrollChange = 50;
// Add class fixed top
const addClassScroll = () => navbar.classList.add("fixed-top");
// Remove class fixed top
const removeClassScroll = () => navbar.classList.remove("fixed-top");
// Set event scroll and check class change
window.addEventListener("scroll", function() {
    let scrollDown = window.scrollY;
    if (scrollDown >= scrollChange) {
        addClassScroll();
    } else {
        removeClassScroll();
    }
});