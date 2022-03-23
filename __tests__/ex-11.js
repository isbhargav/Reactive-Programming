// Exercise 11: Use concatMap() from Rxjs to project and flatten the movieLists into an array of video ids
// Remember function to *Map operators should always return  Observable, Promise, Array, or Iterable. so if 
// you have a single value use of(v) to convert it into ovservable


const { expect } = require("chai");
const { from } = require("rxjs");
const { filter, concatMap, pluck, tap } = require("rxjs/operators");

describe("Multi Dimensional",()=>{
  it("Flattening", () => {
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
    const result = [70111470, 654356453, 65432445, 675465]

    //  You can use concatMap which is equvalent of Map and then concatAll for higher orger observable

    // const obs2$ = from(movieLists).pipe(
    //   concatMap((list) => from(list.videos).pipe(map((video) => video.id))));
    // obs2$.subscribe((x) => allVideoIdsInMovieLists.push(x));
    const obs$ = from(movieLists).pipe(
      concatMap(({ videos }) => videos),
      pluck('id'),
    )
    obs$.subscribe((x) => allVideoIdsInMovieLists.push(x));

    console.log(allVideoIdsInMovieLists);
    expect(allVideoIdsInMovieLists).to.eql(result, "Arrays does not macth")

    //---------------------------------------------End of Code -------------------------------------------
  })
});
