const txt_username = document.querySelector('.txt_username');
const icon = document.querySelector('.icon');
const message = document.querySelector('.message');
const container_card = document.querySelector('.container_card');
const btn_create_card = document.querySelector('#btn_create_card');
const container_input = document.querySelector('.container_input');
const h1username = document.querySelector('.username'); 

const regExpresions = {
    username: /^[a-zA-Z]{4,16}$/
};

const validateForm = (input, expresion) => {
    const validate = expresion.test(input);
    return validate;
};

txt_username.addEventListener('keyup', () => {
    let response = validateForm(txt_username.value, regExpresions.username);
    if(response) {
        icon.classList.add('fa-check-circle');
        icon.classList.remove('fa-times-circle');
        txt_username.classList.add('correct');
        txt_username.classList.remove('incorrect');
        message.textContent = '';
    }
    else {
        icon.classList.add('fa-times-circle');
        icon.classList.remove('fa-check-circle');
        txt_username.classList.add('incorrect');
        txt_username.classList.remove('correct');
        message.textContent = 'Usuario incorrecto';
    }
})

btn_create_card.addEventListener('click', () => {
    let response = validateForm(txt_username.value, regExpresions.username);
    if(response){
        container_card.classList.remove('ocult');
        h1username.textContent = `${txt_username.value}`;
    }
});


