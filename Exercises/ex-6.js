// Filtering Arrays

// Like projection, filtering an array is also a very common operation.
// To filter an array we apply a test to each item in the array and collect the items that pass into a new array.
// Exercise 6: Use filter() to collect only those videos with a rating of 5.0

const { from } = require("rxjs");
const { map } = require("rxjs/operators");

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

  //------------------------------------- Your Code Goes over here  ----------------------------------

  const videos = newReleases.filter((video) => video.rating === 5.0);

  //---------------------------------------------End of Code -------------------------------------------
  return videos;
}
PrintAll();
module.exports = PrintAll;
