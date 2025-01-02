const wrapper = document.querySelector(".wrapper")
const loginLink = document.querySelector(".login-link")
const registerLink = document.querySelector(".register-link")
const btnPopup = document.querySelector(".btnLogin-popup")
const iconClose = document.querySelector(".icon-close")


registerLink.addEventListener("click", ()=>{
    wrapper.classList.add("active");
})
loginLink.addEventListener("click", ()=>{
    wrapper.classList.remove("active");
})
btnPopup.addEventListener("click", ()=>{
    wrapper.classList.add("active-popup");
})
iconClose.addEventListener("click", ()=>{
    wrapper.classList.remove("active-popup");
})
// script.js actualizado para manejar el toggling del menú
document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");
    const menu = document.getElementById("menu");

    // Mostrar el menú
    menuIcon.addEventListener("click", () => {
        menu.classList.add("menu-visible");
        menu.classList.remove("menu-hidden");
        menuIcon.style.display = "none";
        closeIcon.style.display = "block";
    });

    // Ocultar el menú
    closeIcon.addEventListener("click", () => {
        menu.classList.add("menu-hidden");
        menu.classList.remove("menu-visible");
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");

    // Asegura que el checkbox esté desmarcado al recargar la página
    menuToggle.checked = false;
});

document.addEventListener("DOMContentLoaded", () => {
    const faqs = document.querySelectorAll(".faq");

    faqs.forEach(faq => {
        faq.addEventListener("click", () => {
            faq.classList.toggle("active");
        });
    });
});