// // sticky nav bar
// window.onscroll = () => {
//     let navbar = document.getElementById("navbar");
//     let sticky = navbar.offsetTop;
//     let top_btn = document.getElementById("top-btn");

//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky");
//         top_btn.classList.add("toppage-sticky")
//     }
//     else {
//         navbar.classList.remove("sticky");
//         top_btn.classList.remove("toppage-sticky");
//     }

//     if(window.scrollY === 0) {
//         top_btn.classList.remove("toppage-sticky");
//     }
// }
// // email container at the bottom of page
// let econtainer = document.getElementById("email-container");
// let ebtn = document.getElementById("email-btn");
// let email_opened = false;
// ebtn.addEventListener("click", ()=> {
//     if(!email_opened) {
//         econtainer.style.opacity = "100%";
//         ebtn.classList.add("contact-link-pressed");
//     }
//     else {
//         econtainer.style.opacity="0%";
//         ebtn.classList.remove("contact-link-pressed");;
//     }
//     email_opened=!email_opened;
// })