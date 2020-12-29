// Query Data by Chaining Method Calls

// Exercise 8: Chain filter and map to collect the ids of videos that have a rating of 5.0

const { from } = require("rxjs");
const { filter, map } = require("rxjs/operators");

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

  const videoIds = [];
  //------------------------------------- Your Code Goes over here  ----------------------------------

  const filterdArray$ = from(newReleases).pipe(
    filter((video) => video.rating === 5.0),
    map((video) => video.id)
  );
  filterdArray$.subscribe((val) => videoIds.push(val));

  //---------------------------------------------End of Code -------------------------------------------
  return videoIds;
}
PrintAll();
module.exports = PrintAll;
