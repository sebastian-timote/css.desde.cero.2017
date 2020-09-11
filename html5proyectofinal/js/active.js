//no se puedo hacer 
// let nav = document.getElementById("nav"),
//     urlPage = document.location.pathname;
// if (urlPage == '/servicios.html') {
//     console.log(urlPage);
// }
// console.log('no señor');
let nav =document.getElementById('nav'),
    menuActive = document.getElementById('menu-active');
nav.addEventListener('click', (e) => {
    e.preventDefault();
    menuActive.style.color='red';
    //menuActive.classList.toggle('active');
})