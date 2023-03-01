import throttle from 'lodash.throttle';

const FEEDBACK_KEY = 'feedback-form-state';
const feedbackFormRef = document.querySelector('form.feedback-form');
const { email, message } = feedbackFormRef;

feedbackFormRef.addEventListener('input', throttle(inputTextHandler, 500));
feedbackFormRef.addEventListener('submit', submitFormHandler);

try {
  const storedFormState = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
  email.value = storedFormState.email;
  message.value = storedFormState.message;
} catch (error) {
  feedbackFormRef.reset();
  console.log('Error:', error.message);
}

function inputTextHandler() {
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify({ email: email.value.trim(), message: message.value.trim() }));
}

function submitFormHandler(e) {
  e.preventDefault();
  if (!(email.value.trim() && message.value.trim())) return;
  console.log({ email: email.value.trim(), message: message.value.trim() });
  feedbackFormRef.reset();
  localStorage.removeItem(FEEDBACK_KEY);
}
