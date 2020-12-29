// All array projections share two operations in common:

// Traverse the source array
// 1. Add each item's projected value to a new array
// 2. Why not abstract away how these operations are carried out?

// Let's repeat the exercise of collecting {id, title} pairs for each video in the newReleases array, but this time we'll use Rxjs map operator.

const { from } = require("rxjs");
const { map } = require("rxjs/operators");

function PrintAll() {
  const newReleases = [
    {
      id: 70111470,
      title: "Die Hard",
      boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [4.0],
      bookmark: []
    },
    {
      id: 654356453,
      title: "Bad Boys",
      boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [5.0],
      bookmark: [{ id: 432534, time: 65876586 }]
    },
    {
      id: 65432445,
      title: "The Chamber",
      boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [4.0],
      bookmark: []
    },
    {
      id: 675465,
      title: "Fracture",
      boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [5.0],
      bookmark: [{ id: 432534, time: 65876586 }]
    }
  ];
  const videoAndTitlePairs = [];

  //------------------------------------- Your Code Goes over here  ----------------------------------

  const observable$ = from(newReleases);
  const pipedObservable$ = observable$.pipe(map(({ id, title }) => ({ id, title })));
  pipedObservable$.subscribe((x) => console.log(x));

  //---------------------------------------------End of Code -------------------------------------------
  return pipedObservable$;
}
PrintAll();
module.exports = PrintAll;
