const formData = {
  email: '',
  message: '',
};

const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

emailInput.addEventListener('input', event => {
  formData.email = event.target.value;
  saveFormDataToLocalStorage();
});

messageInput.addEventListener('input', event => {
  formData.message = event.target.value;
  saveFormDataToLocalStorage();
});

function saveFormDataToLocalStorage() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
