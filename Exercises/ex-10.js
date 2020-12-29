// Querying Trees

// Sometimes, in addition to flat arrays, we need to query trees.
// Trees pose a challenge because we need to flatten them into arrays in order
// to apply filter() and map() operations on them.In this section we'll define a concatAll() function
// that we can combine with map() and filter() to query trees.

// Exercise 10: Use the concatAll to flatten higher-order observable

const { from } = require("rxjs");
const { filter, map, concatAll, concatMap } = require("rxjs/operators");

function PrintAll() {
  const movieLists = [
    {
      name: "New Releases",
      videos: [
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
        }
      ]
    },
    {
      name: "Dramas",
      videos: [
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
      ]
    }
  ];

  //------------------------------------- Your Code Goes over here  ----------------------------------
  const allVideoIdsInMovieLists = [];

  const obs$ = from(movieLists).pipe(
    map((list) => from(list.videos).pipe(map((video) => video.id))),
    concatAll()
  );
  obs$.subscribe((x) => allVideoIdsInMovieLists.push(x));

  //  You can use concatMap which is equvalent of Map and then concatAll for higher orger observable

  // const obs2$ = from(movieLists).pipe(concatMap((list) => from(list.videos).pipe(map((video) => video.id))));
  // obs2$.subscribe((x) => allVideoIdsInMovieLists.push(x));

  console.log(allVideoIdsInMovieLists);

  //---------------------------------------------End of Code -------------------------------------------
  return allVideoIdsInMovieLists;
}
PrintAll();
module.exports = PrintAll;
