
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
   const directors = moviesArray.map((movie) => {
    return movie.director
   });
   return directors; 
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenMovies = moviesArray.filter((movie) => {
      return movie.director === "Steven Spielberg" && movie.genre.indexOf("Drama") >= 0;
    });
    return stevenMovies.length;
  }  

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length===0){
        return 0
    }
    const sum = moviesArray.reduce(function (accumulator, movie) {
      return accumulator + (movie.score ||0) ;
    }, 0);
  
    const avg = Number((sum / moviesArray.length).toFixed(2));
    return avg;
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) => {
        return movie.genre.indexOf("Drama") >= 0;
    });

    if (dramaMovies.length === 0){
        return 0
    }

    const sum = dramaMovies.reduce((accumulator,movie) => {
        return accumulator + movie.score;
    },0);

    const avg  = Number((sum / dramaMovies.length).toFixed(2));
    return avg;
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortAlph = moviesArray.toSorted((a, b) => {
      return a.title.localeCompare(b.title);
    });
  
    const moviesByYear = sortAlph.sort((a, b) => {
      return a.year - b.year;
    });
      return moviesByYear;
  }
  
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedMovies = moviesArray.sort((a, b) => {
        return a.title.localeCompare(b.title);
    });
    const top20 = sortedMovies.slice(0, 20).map(movie => movie.title);
    return top20;
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray) {
    const timeFormatArr = moviesArray.map(function(movie) {
      if (movie.duration.indexOf("h") >= 0 && movie.duration.indexOf("min") >= 0) {
        const hour = Number(movie.duration[0]);
        const minutes = Number(movie.duration[3] + movie.duration[4]);
        const durationInMin = hour * 60 + minutes;
        return { movie, duration: durationInMin };
      } else if (movie.duration.indexOf("h") >= 0) {
        const hour = Number(movie.duration[0]);
        const durationInMin = hour * 60;
        return { movie, duration: durationInMin };
      } else {
        const minutes = Number(movie.duration[0] + movie.duration[1]);
        const durationInMin = minutes;
        return { movie, duration: durationInMin };
      }
    });
    
    return timeFormatArr;
  }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if(moviesArray.length === 0){
        return null;
    }
    const yearArray = [];
    for (let i = 0; i < moviesArray.length; i++) {
        if (yearArray.indexOf(moviesArray[i].year) === -1) {
            yearArray.push(moviesArray[i].year);
        }
    }
  
    let maxScore = 0;
    let year = "";
  
    for (let i = 0; i < yearArray.length; i++) {
        const currentYear = moviesArray.filter((movie) => movie.year === yearArray[i]);
        const sum = currentYear.reduce((accumulator, movie) => accumulator + movie.score, 0);
        const avg = Number((sum / currentYear.length).toFixed(2));
        if (avg > maxScore) {
            maxScore = avg;
            year = yearArray[i];
        }
        else if(avg === maxScore){
            if(yearArray[i]<year){
                maxScore = avg;
                year = yearArray[i]
        }
      }
    }
    return `The best year was ${year} with an average score of ${maxScore}`;
  }