const card = document.querySelector('.card');
console. log(card);

const colorButton = document.querySelector('.btn-color');
colorButton.addEventListener('click', function() {
    console.log('Кнопка нажата');
    card.style.backgroundColor = '#a3d2ca';

});

const AllCards = document.querySelectorAll('.card');

const colorButtonAll = document.querySelector('.btn-color-all');
colorButtonAll.addEventListener('click', function() {
    console.log('Кнопка нажата');
    AllCards.forEach(function(card) {
        card.style.backgroundColor = 'lightcoral';
   
    });

});     

function searchGoogle() {
    const userAnswer = confirm('Хотите перейти на Google?');
    if (userAnswer === true) {
        window.open('https://www.google.com');
    } else { 
        console.log('Пользователь отказался переходить на Google'); 
    }
} 

const googleButton = document.querySelector('.btn-google');
googleButton.addEventListener('click', searchGoogle);


function printAndAlert(Text) {
    console.log(Text);
    alert(Text);
}

const massageButton = document.querySelector('.btn-message');

massageButton.addEventListener('click', function() {
    printAndAlert('Привет, я функция!');
});
const pageTitle = document.querySelector('.products-title');
pageTitle.addEventListener('mouseover', function(event) {
    console.log(event.target.textContent);
});

const toggleButton = document.querySelector('.toggle-btn');
toggleButton.addEventListener('click', function() {
    toggleButton.classList.toggle('active');
});
