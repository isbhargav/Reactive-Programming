// Exercise 7: Use  Rxjs filter() operator

// To make filtering easier, let's add a filter() function to the Array type. The filter() function accepts a predicate.
// A predicate is a function that accepts an item in the array, and returns a boolean indicating whether,
// the item should be retained in the new array.
const { from } = require("rxjs");
const { filter } = require("rxjs/operators");

function PrintAll() {
  const newReleases = [
    {
      id: 70111470,
      title: "Die Hard",
      boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: 4.0,
      bookmark: []
    },
    {
      id: 654356453,
      title: "Bad Boys",
      boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: 5.0,
      bookmark: [{ id: 432534, time: 65876586 }]
    },
    {
      id: 65432445,
      title: "The Chamber",
      boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: 4.0,
      bookmark: []
    },
    {
      id: 675465,
      title: "Fracture",
      boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: 5.0,
      bookmark: [{ id: 432534, time: 65876586 }]
    }
  ];

  const videos = [];
  //------------------------------------- Your Code Goes over here  ----------------------------------

  const filterdArray$ = from(newReleases).pipe(filter((video) => video.rating === 5.0));
  filterdArray$.subscribe((val) => videos.push(val));

  //---------------------------------------------End of Code -------------------------------------------
  return videos;
}
PrintAll();
module.exports = PrintAll;
