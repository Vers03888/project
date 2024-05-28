'use strict';

 const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

// console.log(numberOfFilms);


    const personalMovieDb = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    }
    const lastFilm = prompt("Последний из просмотренных фильмов",""),
          yourGrade = prompt("На сколько оцените его?", ""),
          lastFilmSecond = prompt("Последний из просмотренных фильмов",""),
          yourGradeSecond = prompt("На сколько оцените его?", "");

    personalMovieDb.movies[lastFilm] = yourGrade;
    personalMovieDb.movies[lastFilmSecond] = yourGradeSecond;
    

    console.log(personalMovieDb);