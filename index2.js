const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const password2 = document.querySelector('#password2')
const error = document.querySelector('#error')

form.addEventListener('submit',e => {
    validateInputs();
})

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === ''){
        setError();
    }else{
        setSuccess();
    }
}

const setError = (element,message) => {
      
}