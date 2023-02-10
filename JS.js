const apiKey = "da102ad5";
const apiUrl = "https://www.omdbapi.com/";

const form = document.querySelector('.searchForm');
form.addEventListener('submit', submitForm);       //вешаем обработчик на всю форму(form) событие submit

function submitForm(e){
    e.preventDefault();  // отключает дефолтные настройки, в данном случае отключает перезагрузку страницы при submit.
    const searchValue = form.querySelector('#searchInput').value; //значение поля search
    fetch(`${apiUrl}?apikey=${apiKey}&s=${searchValue}`) //делаем запрос url, key, значение поля search
      .then(data => data.json())
      .then(data => {
        console.log(data)
      });

}