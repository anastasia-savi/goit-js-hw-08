var throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');
const emailValue = document.querySelector('.feedback-form input');
const messageValue = document.querySelector('.feedback-form textarea');
const KEY = 'feedback-form-state';
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(saveData, 500));
loadData();

function getData() {
  return {
    email: emailValue.value,
    message: messageValue.value,
  };
}
function saveData() {
  const dataInput = getData();
  const dataInJSON = JSON.stringify(dataInput);
  localStorage.setItem(KEY, dataInJSON);
}

function onFormSubmit(event) {
  const dataInput = getData();

  if (dataInput.email === '' || dataInput.message === '') {
    alert('Fill in all the fields');
    event.preventDefault();
  }
  localStorage.removeItem(KEY);
  console.log(dataInput);
}

function loadData() {
  const getData = localStorage.getItem(KEY);
  const getParse = JSON.parse(getData);
  if (getData) {
    emailValue.value = getParse.email;
    messageValue.value = getParse.message;
  }
}
