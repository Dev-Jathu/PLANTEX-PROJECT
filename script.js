let menu =document.querySelector('#menu-bars');
let navbar =document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
document.querySelector('#search-icon').onclick=() =>{
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close').onclick=() =>{
    document.querySelector('#search-form').classList.remove('active');
}


function toggleDarkMode() {
           
    const body = document.body;
    
    // Check if body has dark mode background color
    if (body.style.backgroundColor === 'rgb(51, 51, 51)' || body.style.backgroundColor === '#333') {
        // If it does, remove it and set default background color
        body.style.backgroundColor = ''; // Reset background color
        body.style.color="black"
        
    } else {
        // If it doesn't, set dark mode background color
        body.style.backgroundColor = '#333'; // Set dark mode background color
        body.style.color="white"
    }
}