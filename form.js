function validateForm() {
  let x = document.forms["form"]["name", 'surname', 'email', 'adress', 'number'].value.trim();
  if (x == "") {
    alert("Заполните все обязательные поля co *");
    return false;
  }
}