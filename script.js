let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}


function toggleDarkMode() {

    const body = document.body
    const about = document.getElementById("FAQs")
    const team = document.getElementById("team")
    const client = document.getElementById("client")
    const client1 = document.getElementById("client1")
    const client2 = document.getElementById("client2")
    const some = document.getElementById("some")
    const header = document.getElementById("header")
    const nav = document.getElementById("nav")
    const nav1 = document.getElementById("nav1")
    const nav2 = document.getElementById("nav2")
    const nav3 = document.getElementById("nav3")
    const nav4 = document.getElementById("nav4")
    const nav5 = document.getElementById("nav5")
    const color = document.getElementById("color")
    const color1 = document.getElementById("color1")
    const footer = document.getElementById("footer")
    const cpbar = document.getElementById("cpbar")



    // Check if body has dark mode background color
    if (body.style.backgroundColor === 'rgb(51, 51, 51)' || body.style.backgroundColor === '#333') {
        // If it does, remove it and set default background color
        body.style.backgroundColor = ''; // Reset background color
        body.style.color = "black"
        header.style.backgroundColor = ''; // Reset background color
        header.style.color = "black"
        nav.style.backgroundColor = '';
        nav.style.color = "black"
        nav1.style.color = "black"
        nav2.style.color = "black"
        nav3.style.color = "black"
        nav4.style.color = "black"
        nav5.style.color = "black"
        about.style.backgroundColor = '';
        about.style.color = "black"
        team.style.backgroundColor = '';
        team.style.color = "black"
        some.style.backgroundColor = '';
        some.style.color = "black"
        client.style.backgroundColor = '';
        client.style.color = "black"
        client1.style.backgroundColor = '';
        client1.style.color = "black"
        client2.style.backgroundColor = '';
        client2.style.color = "black"
        color.style.backgroundColor = ''
        color.style.color = "white"
        footer.style.backgroundColor = ''
        footer.style.color = "black"
        cpbar.style.backgroundColor=''
        cpbar.style.color="black"

    }


    else {
        // If it doesn't, set dark mode background color
        about.style.backgroundColor = '#333'; // Set dark mode background color
        about.style.color = "black"
        header.style.backgroundColor = '#333'; // Reset background color
        header.style.color = "white"
        body.style.backgroundColor = '#333'; // Set dark mode background color
        body.style.color = "white"
        team.style.backgroundColor = '#333';
        team.style.color = "white"
        some.style.color = "white"
        client.style.backgroundColor = '#333';
        client.style.color = "white"
        client1.style.backgroundColor = '#333';
        client1.style.color = "white"
        client2.style.backgroundColor = '#333';
        client2.style.color = "white"
        nav.style.color = "white"
        nav1.style.color = "white"
        nav2.style.color = "white"
        nav3.style.color = "white"
        nav4.style.color = "white"
        nav5.style.color = "white"
        color.style.backgroundColor = '#333'
        color.style.color = "white"
        footer.style.backgroundColor = '#333'
        footer.style.color = "white"
        cpbar.style.backgroundColor='#333'
        cpbar.style.color="white"



    }
}
function Bestseller() {
    const element = document.getElementById("our"); // Replace "elementToToggle" with the ID of your element
    const element1 = document.getElementById("our1"); // Replace "elementToToggle" with the ID of your element
    const element2 = document.getElementById("our2"); // Replace "elementToToggle" with the ID of your element
    const element3 = document.getElementById("our3"); // Replace "elementToToggle" with the ID of your element
    const element4 = document.getElementById("our4"); // Replace "elementToToggle" with the ID of your element
    const element5 = document.getElementById("our5"); // Replace "elementToToggle" with the ID of your element
    const element6 = document.getElementById("our6"); // Replace "elementToToggle" with the ID of your element
    const element7 = document.getElementById("our7"); // Replace "elementToToggle" with the ID of your element
    const our8 = document.getElementById("our8")
    const our9 = document.getElementById("our9")
    const bid = document.getElementById("b1");

    // Add a click event listener to the button
    bid.addEventListener("click", function() {
        // Change the background color of the button to green
        bid.style.backgroundColor = "red";
    });




    element.style.display = "none";
    element1.style.display = "none"
    element2.style.display = "none"
    element3.style.display = "none"
    element7.style.display = "block";
    element6.style.display = "block";
    element5.style.display = "block";
    element4.style.display = "block";
    our8.style.display="none"
    our9.style.display="none"
}
function Featured() {
    const element = document.getElementById("our"); // Replace "elementToToggle" with the ID of your element
    const element1 = document.getElementById("our1"); // Replace "elementToToggle" with the ID of your element
    const element2 = document.getElementById("our2"); // Replace "elementToToggle" with the ID of your element
    const element3 = document.getElementById("our3"); // Replace "elementToToggle" with the ID of your element
    const element4 = document.getElementById("our4"); // Replace "elementToToggle" with the ID of your element
    const element5 = document.getElementById("our5"); // Replace "elementToToggle" with the ID of your element
    const element6 = document.getElementById("our6"); // Replace "elementToToggle" with the ID of your element
    const element7 = document.getElementById("our7"); // Replace "elementToToggle" with the ID of your element
    

    element.style.display = "block";
    element1.style.display = "block";
    element7.style.display = "block";
    element6.style.display = "block";
    element5.style.display = "block";
    element4.style.display = "block";
    element3.style.display = "block";
    element2.style.display = "block";
    
}

function Latest() {
    const element = document.getElementById("our"); // Replace "elementToToggle" with the ID of your element
    const element1 = document.getElementById("our1"); // Replace "elementToToggle" with the ID of your element
    const element2 = document.getElementById("our2"); // Replace "elementToToggle" with the ID of your element
    const element3 = document.getElementById("our3"); // Repl
    const element4 = document.getElementById("our4"); // Replace "elementToToggle" with the ID of your element
    const element5 = document.getElementById("our5"); // Replace "elementToToggle" with the ID of your element
    const element6 = document.getElementById("our6"); // Replace "elementToToggle" with the ID of your element
    const element7 = document.getElementById("our7"); // Replace "elementToToggle" with the ID of your element
    const our8 = document.getElementById("our8")
    const our9 = document.getElementById("our9")

    element7.style.display = "none";
    element6.style.display = "none";
    element5.style.display = "none";
    element4.style.display = "none";
    element.style.display = "none";
    element1.style.display = "none"
    element2.style.display = "none"
    element3.style.display = "none"
    our8.style.display="block"
    our9.style.display="block"
}
