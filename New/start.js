"use strict";
// const category = "toys";
// console.log(`https://someurl.com/${category}/5/123123`);

// const user = "ivan";
// alert(`Привет, ${user}`);

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
};


console.log(personalMovieDB);
//РЕШЕНИЕ ЧЕРЕЗ FOR

for (let i=0; i<2; i++) {                                                       
    let a = prompt("Один из последних просмотренных фильмов?","");
    let b = prompt("Насколько оцените его?","");    

    if(a ==  "" || a == null || a.length > 50 ||b ==  "" || b == null || b.length > 50 ){
        i--;
    } else{
        personalMovieDB.movies[a] = b;
    }    
}

// РЕШЕНИЕ ЧЕРЕЗ WHILE

// let i = 0;
// while (i < 2) {
//     let a = prompt("Один из последних просмотренных фильмов?", "");
//     let b = prompt("Насколько оцените его?", "");
//     i++;

//     if (a == "" || a == null || a.length > 50 || b == "" || b == null || b.length > 50) {
//         i--;
//     } else {
//         personalMovieDB.movies[a] = b;
//     }

// }

// РЕШЕНИЕ ЧЕРЕЗ DO
// let i = 0;
// do {
//     let a = prompt("Один из последних просмотренных фильмов?", "");
//     let b = prompt("Насколько оцените его?", "");
//     i++;

//     if (a == "" || a == null || a.length > 50 || b == "" || b == null || b.length > 50) {
//         i--;
//     } else {
//         personalMovieDB.movies[a] = b;
//     }
// }
// while (i < 2);


if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Что-то пошло не так");
}
