// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
/*{
    "title": "The Shawshank Redemption",
    "year": 1994,
    "director": "Frank Darabont",
    "duration": "2h 22min",
    "genre": ["Crime","Drama"],
    "score": 9.3
  } */
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map((array) => {
    return array.director;
    })
    return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    
    const spielbergMovies = moviesArray.filter((array) =>  {
    return array.director.includes("Steven Spielberg") && array.genre.includes("Drama");
    });
   
    if (!spielbergMovies) {
        return 0;
    }
    
    return spielbergMovies.length;
    }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    
    if (moviesArray && moviesArray.length === 0) {
        return 0;
    }
   
    const scoreSum = moviesArray.reduce((acc, array) => {
    return acc + (array.score || 0);
    }, 0);

    return parseFloat((scoreSum/moviesArray.length).toFixed(2));

}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
      
    const onlyDrama = moviesArray.filter((array) => {  
       
      return array.genre.includes("Drama");
    })
    

    const dramaScore = onlyDrama.reduce((p , c) => {
     p += c.score;
     return p;
        }, 0)    

    return parseFloat((dramaScore/onlyDrama.length).toFixed(2));

    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
