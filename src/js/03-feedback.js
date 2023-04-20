var throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');
const emailValue = document.querySelector('.feedback-form input');
const messageValue = document.querySelector('.feedback-form textarea');
const KEY = 'feedback-form-state';
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(saveData, 500));
loadData();
function saveData() {
  const dataInput = {
    email: emailValue.value,
    message: messageValue.value,
  };
  const dataInJSON = JSON.stringify(dataInput);
  localStorage.setItem(KEY, dataInJSON);
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(KEY);
}

function loadData() {
  const getData = localStorage.getItem(KEY);
  const getParse = JSON.parse(getData);
  if (getData) {
    emailValue.value = getParse.email;
    messageValue.value = getParse.message;
  }
}
