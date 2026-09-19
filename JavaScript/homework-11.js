// Задача №4

const emailForm = document.querySelector(".email-form");

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

const registrationButton = document.querySelector(".regist-button");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
const registrationForm = document.querySelector(".regist-form");
const overlay = document.querySelector(".overlay");

registrationButton.addEventListener("click", () => {
  modal.classList.add("modal-showed");
  overlay.classList.add("overlay-showed");
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("modal-showed");
  overlay.classList.remove("overlay-showed");
});

let user;

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(registrationForm);
  const formDataValues = Object.fromEntries(formData);

  if (!registrationForm.checkValidity()) {
    alert("Регистрация отклонена");
    return;
  }

  if (formData.get("password") !== formData.get("repeat-password")) {
    alert("Пароли не совпадают");

    return;
  }

  user = {
    ...formDataValues,
    createdOn: new Date(),
  };

  console.log(user);

  alert("Вы успешно зарегистрировались");

  modal.classList.remove("modal-showed");
  overlay.classList.remove("overlay-showed");
});
