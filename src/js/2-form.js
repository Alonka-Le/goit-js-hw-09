const formData = {
  email: '',
  message: '',
};

const formRefs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input[type="email"]'),
  message: document.querySelector('textarea'),
};

function saveFormData() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateTextareaField() {
  const messageText = localStorage.getItem('feedback-form-state');
  if (messageText) {
    const savedFormData = JSON.parse(messageText);
    formRefs.input.value = savedFormData.email;
    formRefs.message.value = savedFormData.message;
    formData.email = savedFormData.email;
    formData.message = savedFormData.message;
  }
}

populateTextareaField();

formRefs.form.addEventListener('submit', handleSubmit);

formRefs.form.addEventListener('input', () => {
  formData.email = formRefs.input.value.trim();
  formData.message = formRefs.message.value.trim();
  saveFormData();
});

function handleSubmit(event) {
  if (formRefs.input.value === '' || formRefs.message.value === '') {
    alert('Fill please all fields');
  } else {
    localStorage.removeItem('feedback-form-state');
    console.log(formData);
    event.currentTarget.reset();
  }
  event.preventDefault();
}
