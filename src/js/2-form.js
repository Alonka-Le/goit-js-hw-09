const formData = {
  email: '',
  message: '',
};

const formRefs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input[type="email"]'),
  message: document.querySelector('textarea'),
};

populateTextareaField();

formRefs.form.addEventListener('submit', handleSubmit);

formRefs.form.addEventListener('input', () => {
  formData.email = formRefs.input.value.trim();
  formData.message = formRefs.message.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

function handleSubmit(event) {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function populateTextareaField() {
  const messageText = localStorage.getItem('feedback-form-state');
  if (messageText) {
    const parsedData = JSON.parse(messageText);
    formRefs.input.value = parsedData.email;
    formRefs.message.value = parsedData.message;
  }
}

