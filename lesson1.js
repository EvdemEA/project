'use strict';


let numberOfFilms;

function start() {
  numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

// for (let i = 0; i < 2; i++) {
//   const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?');

//   if (a != null && b != null && a != '' && b!= '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('Done');
//   } else {
//     console.log('ERROR');
//     i--;
//   }
// }
function writeYourGenres() {
  let i = 1;
  do {
    // if (a != null && a != '' && a.length < 50) {}
      personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр по номером ${(i)}`);
    i++;    
  }
  while (i <= 3);
}
writeYourGenres();

function rememberMyFilms() {
  let i = 0;
  while (i <= 1) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?');
    i++;

    if (a != null && b != null && a != '' && b!= '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('Done');
    } else {
      console.log('ERROR');
      i--;
    }
  }
}

rememberMyFilms();



function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert('Проссотренно довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
  } else {
    alert('Произошла ошибка!');
  }
}

detectPersonalLevel();

function showMyDB() { 
  if (personalMovieDB.privat === false) {
    console.log(personalMovieDB);
  }
}

showMyDB();
