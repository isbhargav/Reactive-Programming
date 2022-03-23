// Exercise 11: Use concatMap() from Rxjs to project and flatten the movieLists
// into an array of video ids

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

  //  You can use concatMap which is equvalent of Map and then concatAll for higher orger observable

   const obs$ = from(movieLists).pipe(
      concatMap(({ videos }) => videos),
      pluck('id'),
    )
  const obs2$ = from(movieLists).pipe(concatMap((generList) => from(generList.videos).pipe(map((video) => video.id))));
  obs$.subscribe((x) => allVideoIdsInMovieLists.push(x));
  console.log(allVideoIdsInMovieLists);

  //---------------------------------------------End of Code -------------------------------------------
  return allVideoIdsInMovieLists;
}
PrintAll();
module.exports = PrintAll;
