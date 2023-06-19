// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(value => value.director);
    return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter(value => value.genre.includes('Drama') && value.director === 'Steven Spielberg');
    return spielbergMovies.length;
} 


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const average = moviesArray.map(value => value.score).filter(average => typeof average === "number").reduce((acc, value) => acc + value, 0);
    let result = (average / moviesArray.length);
    if(moviesArray.length === 0) {return 0} else {
    return Math.round(result * 100) / 100 }
    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaAverage = moviesArray.filter(value => value.genre.includes('Drama')).map(value => value.score).reduce((acc, value) => acc + value, 0);
    let totalDramaMovies = moviesArray.filter(value => value.genre.includes('Drama')).length;
    let result = dramaAverage / totalDramaMovies;
    if(totalDramaMovies === 0) {return 0} else {
        return Math.round(result * 100) / 100;
    }
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesByYear = moviesArray
    .map(value => value)
    .sort((a ,b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
          } else {
            return a.title.localeCompare(b.title);
          }
        });
        return moviesByYear
    }
  


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const alphabeticalMovies = moviesArray.map(value => value.title)
    .sort((a, b) => a.localeCompare(b)); //Local compare is better for a string.
    if(alphabeticalMovies.length >= 20) {
        return alphabeticalMovies.slice(0, 20);
    } else {return alphabeticalMovies};
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    moviesArray.splice().map(value => value.duration)
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
