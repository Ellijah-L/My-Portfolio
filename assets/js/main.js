const skillsList = document.getElementById('skills');
const educationList = document.getElementById('education');
const skillsButton = document.getElementById('skill-button');
const educationButtton = document.getElementById('education-button');
const highLight = document.getElementById('tab-links');
const navMenu = document.getElementById('navbar');
const openMenu = document.getElementById('open');
const closeMenu = document.getElementById('close');


// Nav menu
openMenu.onclick = function() {
    menuScreen();
}

closeMenu.onclick = function() {
    menuScreen();
}

const menuScreen = () => {
    let show = navMenu;
    if (show.style.left === "-175px") {
        show.style.left = '0'
    } else {
        show.style.left = '-175px'
    }

};

// Skills and Education tab
skillsButton.onclick = function()  {
    listOne();
}

educationButtton.onclick = function()  {
   listTwo();
}

const listOne = () => {
    let x = skillsList;
    if (x.style.display === 'none') {
        x.style.display = 'block';
        skillsButton.classList.add('active-link');
        
    } else {
        x.style.display = 'none';
        skillsButton.classList.remove('active-link');
    }
}

const listTwo = () => {
    let y = educationList;
    if (y.style.display === 'none') {
        y.style.display = 'block';
        educationButtton.classList.add('active-link');
    } else {
        y.style.display = 'none';
        educationButtton.classList.remove('active-link');
    }
}



