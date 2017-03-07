var myHeading = document.querySelector ('h1');
var myButton = document.querySelector('button');
function setUserName() 
{
  var myName = prompt('Введите своё имя.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML  = 'Вы - пидор, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML  = 'Вы - пидор, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}