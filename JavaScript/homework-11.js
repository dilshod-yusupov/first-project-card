// Задача №4

const emailForm = document.querySelector(".form");

emailForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (emailForm.checkValidity()) {
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log("Email введен верно");
    console.log(data);

    alert("Вы успешно подписались!");

    emailForm.reset();
    
  } else {
    console.log("Ошибка в email");
  }
});

// Задача №5 

const registrationButton = document.querySelector('.regist-button')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal-close')
const form = document.querySelector('form')
const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const birthday = document.querySelector('#birthday')
const login = document.querySelector('#login')
const password = document.querySelector('#password')
const repeatPassword = document.querySelector('#repeat-password')
const overlay = document.querySelector('.overlay')

registrationButton.addEventListener('click', () => {
  modal.classList.add('modal-showed')
  overlay.classList.add('overlay-showed')
})

modalClose.addEventListener('click', () => {
  modal.classList.remove('modal-showed')
  overlay.classList.remove('overlay-showed')
})

let user

form.addEventListener('submit', (event) => {
    event.preventDefault()

    if (password.value !== repeatPassword.value) {
  alert('Пароли не совпадают')
  return
}

if (!form.checkValidity()) {
  alert('Регистрация отклонена')
  return
}

user = {
  firstName: firstName.value,
  lastName: lastName.value,
  login: login.value,
  birthday: birthday.value,
  password: password.value,
  createdOn: new Date()
}
console.log(user)

alert('Вы успешно зарегистрировались')

modal.classList.remove('modal-showed')
overlay.classList.remove('overlay-showed')

})

