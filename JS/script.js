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
    const lastFilm = prompt("Последний из просмотренных фильмов","");
    const yourGrade = prompt("На сколько оцените его?", "");

    personalMovieDb.movies[lastFilm];
    personalMovieDb.movies[yourGrade];

    console.log(personalMovieDb);