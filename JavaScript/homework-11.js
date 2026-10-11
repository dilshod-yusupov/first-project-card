import Modal from "./Modal.js";
import Form from "./Form.js";

// Задача №4
const emailFormClass = new Form('email-formId')
const registModal = new Modal('regist-modal');
const registrationButton = document.querySelector(".regist-button");
const registrationForm = new Form("regist-form");

emailFormClass.formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  if (emailFormClass.isValid()) {
    
    const data = emailFormClass.getValues();
    console.log("Email введен верно");
    console.log(data);

    alert("Вы успешно подписались!");

    emailFormClass.reset();
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

emailFormClass.getValues();

  if (registrationForm.isValid()) {
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

  registModal.close();
});
