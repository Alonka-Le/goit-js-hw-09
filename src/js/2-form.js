const formData = {
  email: '',
  message: '',
};

const emailInput = document.querySelector('.js-form-email');
const messageInput = document.querySelector('.js-form-message');
const feedback = document.querySelector('.feedback-form');

emailInput.addEventListener('input', event => {
  formData.email = event.target.value.trim();
});
messageInput.addEventListener('input', event => {
  formData.message = event.target.value.trim();
});

feedback.addEventListener('submit', handleSubmit);

function handleSubmit() {
  if (formData.email === '' || formData.message === '') {
    return alert('Fill please all fields');
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
