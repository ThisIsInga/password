const input = document.querySelector(".input__field");
const inputIcon = document.querySelector(".input__icon");

inputIcon.addEventListener("click", (e) => {
  e.preventDefault();

  inputIcon.setAttribute(
    'src',
    input.getAttribute('type') === 'password' ?
      'https://raw.githubusercontent.com/atherosai/ui/731acd657a469278b84e77f289a7d01cc7d8d924/input-04/assets/eye-off.svg'
      :
      'https://raw.githubusercontent.com/atherosai/ui/731acd657a469278b84e77f289a7d01cc7d8d924/input-04/assets/eye.svg'
  );

  input.setAttribute(
    'type',
    input.getAttribute('type') === 'password' ?
      'text'
      :
      'password'
  );
});
//Этот код создает возможность переключения между отображением введенных символов в поле ввода как текста или в виде точек для скрытия пароля. 
//
//1. const input = document.querySelector(".input__field"); - найдет элемент с классом input__field и сохранит его в переменной input.
//2. const inputIcon = document.querySelector(".input__icon"); - найдет элемент с классом input__icon и сохранит его в переменной inputIcon.
//3. inputIcon.addEventListener("click", (e) => { - добавляет слушатель события клика на иконку ввода.
//4. e.preventDefault(); - предотвращает поведение по умолчанию при клике.
//5. inputIcon.setAttribute(...); - меняет атрибут src у иконки в зависимости от типа ввода (показывает глаз для скрытия/показа пароля).
//6. input.setAttribute(...); - меняет тип ввода у поля в зависимости от текущего типа (меняет на текст для показа пароля или на пароль для скрытия).
//
//Таким образом, при нажатии на иконку ввода, код будет изменять иконку и тип ввода поля для скрытия/показа символов пароля.