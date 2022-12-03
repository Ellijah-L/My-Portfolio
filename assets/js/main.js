const skillsList = document.getElementById('skills');
const educationList = document.getElementById('education');
const skillsButton = document.getElementById('skill-button');
const educationButtton = document.getElementById('education-button');
const highLight = document.getElementById('tab-links')

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



