const apiKey = "da102ad5";
const apiUrl = "https://www.omdbapi.com/";

const form = document.querySelector('.searchForm');
const resultWrapper = document.querySelector('.resultWrapper');
form.addEventListener('submit', submitForm);       //вешаем обработчик на всю форму(form) событие submit

function submitForm(e){
    e.preventDefault();  // отключает дефолтные настройки, в данном случае отключает перезагрузку страницы при submit.
    const searchValue = form.querySelector('#searchInput').value; //значение поля search
    fetch(`${apiUrl}?apikey=${apiKey}&s=${searchValue}`) //делаем запрос url, key, значение поля search
      .then(data => data.json())
      .then(data => {
        clearResultOutput(); //чистим output после каждого запроса
        const output = resultWrapper.querySelector('.resultOutput');  //область отрисовки фильмов поиска
        if(data.Response === 'True') {   // в консоле data вывел объекты фильмов
            data.Search.forEach(film => {      //бежим по объектам фильмов из data 
                const filmTemplate = `<div class="filmItem"> 
                    <h3>${film.Title}</h3>
                    <img src=${film.Poster} alt="${film.Title}">
                    <p class="filmItem_year">${film.Year}</p>
                </div>`;
                output.innerHTML += filmTemplate;  //рисуем HTML и добавляем в output область содержимое data
            });
        }else{
            output.innerHTML = '<p>По вашему запросу ничего не нашлось</p>'; // в случае результата False
        }
      });
}

function clearResultOutput() {  // очищаем область показа запроса
    const output = resultWrapper.querySelector('.resultOutput');
    output.innerHTML = '';
}