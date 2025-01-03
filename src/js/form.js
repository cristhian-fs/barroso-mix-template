function getRandomAnswerToForm(){
  const answers = [
    {
      type: "success",
      message_title: "🎉",
      message_body: "Seu recado foi enviado com sucesso!"
    },
    {
      type: "error",
      message_title: "🚨",
      message_body: "Houve um erro ao tentar enviar seu recado!"
    }
  ]

  return answers[Math.round(Math.random() * answers.length)];
}

function showAnswerToForm(answer){
  const dialogTitle = document.querySelector("#dialog_title");
  const dialogMessage = document.querySelector("#dialog_message");
  const dialogCloseBtn = document.querySelector("#dialog_close_btn");

  dialogTitle.textContent = answer.message_title;
  dialogMessage.textContent = answer.message_body;
  dialogCloseBtn.textContent = "Fechar";
  if(answer.type === "error"){
    dialogCloseBtn.classList.add("is_error")
  } else {
    dialogCloseBtn.classList.remove("is_error")
  }
}

function showErrorMessage(input, message) {
  const errorMessage = input.nextElementSibling; // <span> logo após o input
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
  input.classList.add("invalid");
  input.classList.remove("valid");
}

function clearErrorMessage(input) {
  const errorMessage = input.nextElementSibling;
  errorMessage.textContent = "";
  errorMessage.style.display = "none";
  input.classList.remove("invalid");
  input.classList.add("valid");
}

function validateInput(input) {
  if (input.validity.valueMissing) {
    return "Este campo é obrigatório.";
  }
  if (input.validity.typeMismatch) {
    return `Por favor, insira um ${input.type === "email" ? "email" : "valor"} válido.`;
  }
  if (input.validity.tooShort) {
    return `O valor deve ter pelo menos ${input.minLength} caracteres.`;
  }
  console.log(input.validity)
  return "";
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form.send_message_form');
  const dialog = document.querySelector("dialog#form_answer_dialog");
  const submitBtnText = form.querySelector("button[type='submit'] .send_message");
  const closeDialog = dialog.querySelector("#dialog_close_btn");

  const inputs = form.querySelectorAll("input")

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isFormValid = true;

    inputs.forEach((input) => {
      const error = validateInput(input);
      if (error) {
        showErrorMessage(input, error);
        isFormValid = false;
      } else {
        clearErrorMessage(input);
      }
    });

    if(isFormValid){
      submitBtnText.textContent = 'Enviando...';
      setTimeout(() => {
        showAnswerToForm(getRandomAnswerToForm())
        dialog.showModal();
        submitBtnText.textContent = 'Enviar';
        form.reset();
        inputs.forEach((input) => clearErrorMessage(input));
      }, 2000)
    }
  });

  closeDialog.addEventListener('click', () => {
    dialog.close();
  });
})