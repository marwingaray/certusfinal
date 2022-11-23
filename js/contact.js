// https://stackoverflow.com/a/23420958 A <button> tag uses Submit behavior by default. Thus your page submits the form when the button is clicked and this looks like a page refresh itself. To work around this you can either use an input tag 


// se podrá ver la 1ra página si el correo y la contraseña y el check esta checkeado

let thisForm = document.querySelector('.this-form');
let thisMain = document.querySelector('.this-main');

let name = document.querySelector('#InputName');
let email = document.querySelector('#InputEmail');
let pass = document.querySelector('#InputPassword');
let phone = document.querySelector('#InputPhone');




name.addEventListener('click', () => {
  name.value = 'pedro pérez'
  email.value = 'correo@valido.com';
  phone.value = '12345679';

  msgEmail.innerText = 'autocompletado';
  msgEmail.className = 'text-success';
  msgPass.innerText = 'autocompletado';
  msgPass.className = 'text-success';

})


let msgEmail, msgPass;

// para comprobar al tipear email
// si el correo que va tipeando no es igual al correo correcto, el mensaje cambia a un color rojo y solo cuando sea correcto asi se le indica con un mensaje color verde
// use 'keyup' porque al parecer actua antes que 'keydown'
email.addEventListener('keyup', () => {
  let emailTipeado = email.value;
  /* let msgEmail = document.createElement('small');
  email.insertAdjacentElement('beforebegin', msgEmail); */
  if (emailTipeado != 'correo@valido.com') {
    msgEmail.className = 'text-danger';
    msgEmail.innerText = 'no es el correo correcto'
  } else {
    msgEmail.className = 'text-success';
    msgEmail.innerText = 'es el correo correcto'
  }
})






// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML   beforebegin para que apareza antes del elemento input









