const themeSwitch = document.querySelector('input');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-theme');
});

function logSubmit(evt) {
    evt.preventDefault()
    objAdd = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('msg').value,
    }
    
    console.log("Object", objAdd)
}

const submitButton = document.querySelector('.contact button')

submitButton.addEventListener('click', logSubmit)