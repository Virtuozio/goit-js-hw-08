import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
formElem = {};
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(saveInput, 500));
form.addEventListener('submit', formCleaner);

function saveInput(event) {
  formElem[event.target.name] = event.target.value;
  save(LOCALSTORAGE_KEY, formElem);
}

function formCleaner(event) {
  event.preventDefault();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  event.currentTarget.reset();
  console.log(formElem);
}

function updateOutput() {
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  email = load(LOCALSTORAGE_KEY) || '';
  message = load(LOCALSTORAGE_KEY) || '';
}

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};
