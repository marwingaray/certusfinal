// https://stackoverflow.com/a/23420958 A <button> tag uses Submit behavior by default. Thus your page submits the form when the button is clicked and this looks like a page refresh itself. To work around this you can either use an input tag 

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
})










