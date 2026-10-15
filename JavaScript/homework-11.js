import Modal from "./Modal.js";
import Form from "./Form.js";

// Задача №4
const emailForm = new Form("email-formid");
const registModal = new Modal("regist-modal");
const registrationButton = document.querySelector(".regist-button");
const registrationForm = new Form("regist-form");

emailForm.formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  if (emailForm.isValid()) {
    const data = emailForm.getValues();
    console.log("Email введен верно");
    console.log(data);

    alert("Вы успешно подписались!");

    emailForm.reset();
  } else {
    console.log("Ошибка в email");
  }
});

// Задача №5

registrationButton.addEventListener("click", () => {
  registModal.open();
});

let user;

registrationForm.formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!registrationForm.isValid()) {
    alert("Регистрация отклонена");
    return;
  }

  const formDataValues = registrationForm.getValues();

  if (formDataValues.password !== formDataValues.repeatPassword) {
    alert("Пароли не совпадают");

    return;
  }

  user = {
    ...formDataValues,
    createdOn: new Date(),
  };

  console.log(user);

  alert("Вы успешно зарегистрировались");

  registModal.close();
});
