// Your code goes here

// SCALES UP HEADER IMAGE WHEN MOUSEOVER
const funBus = document.querySelector('.intro img')
funBus.addEventListener('mouseenter', () => {
    funBus.style.transform = 'scale(1.1)';
    funBus.style.transition = 'all 0.3s';
});

// SCALES HEADER IMAGE BACKDOWN AFTER MOUSE LEAVES
funBus.addEventListener('mouseleave', () => {
    funBus.style.transform = 'scale(1)';
    funBus.style.transition = 'all 0.3s';
});

//CHANGES COLOR OF FUNBUS LOGO TO BLUE ON DOUBLE CLICK
const clickLogo = document.querySelector('.logo-heading');
    clickLogo.addEventListener('dblclick', () => {
        clickLogo.style.color = 'blue';
    });

// STOP PAGE FROM REFRESHING WHEN LINKS ARE CLICKED
const linkStop = document.querySelector('.nav');
    linkStop.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('Stopped');
    });

// CHANGES COLOR OF THE FIRST H2 ELEMENT WHEN YOU CLICK IT

const colorChange = document.querySelector('.intro h2');
    colorChange.addEventListener('mousedown', () => {
        colorChange.style.color = 'blue'
    });

//CHANGES COLOR OF FIRST PARAGRAPH TO RED WHEN YOU RELEASE CLICK

const colorChange2 = document.querySelector('.intro p');
    colorChange2.addEventListener('mouseup', () => {
        colorChange2.style.color = 'red'
    });

// CHANGES COLOR OF BACKGROUND TO YELLOW ONCE CLICKED

const darkMode = document.querySelector('body');
    darkMode.addEventListener('click', () => {
        darkMode.style.backgroundColor = '#202020';
});

// CHANGES FIRST IMAGE WHEN PAGE IS RESIZED

const adventImage = document.querySelector('.img-content img');
    window.addEventListener('resize', () => {
        adventImage.src = 'https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
    });

// CHANGES PAGE COLOR BACK TO WHITE WHEN YOU PRESS AND RELEASE KEY ON KEYBOARD

const wholePage = document.querySelector('body');
    wholePage.addEventListener('keypress', () => {
        wholePage.style.color = 'white'
    });

// ADDS POPUP ON PAGE LOAD

window.addEventListener('load', () => {
    alert("I REALLY WISH I DIDN'T HAVE TO SEE THIS PROJECT AGAIN");
});