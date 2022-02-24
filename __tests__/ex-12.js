// Exercise 12: Retrieve id, title, and a 150x200 box art url for every video

// You've managed to flatten a tree that's two levels deep, let's try for three!
// Let's say that instead of a single boxart url on each video, we had a collection of boxart objects,
// each with a different size and url.Create a query that selects { id, title, boxart } for every video in the movieLists.
// This time though, the boxart property in the result will be the url of the boxart object with dimensions of 150x200px.
// Let's see if you can solve this problem with map(), concatAll(), and filter().

// There's just more one thing: you can't use indexers. In other words, this is illegal:


const { expect } = require("chai");
const { from, zip, of } = require("rxjs");
const { filter, concatMap, pluck, tap, map, take, reduce, concatAll, first } = require("rxjs/operators");

describe("Multi Dimensional",
  it("Flattening", () => {

    const movieLists = [
      {
        name: "Instant Queue",
        videos: [
          {
            id: 70111470,
            title: "Die Hard",
            boxarts: [
              { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
              { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
            ],
            url: "http://api.netflix.com/catalog/titles/movies/70111470",
            rating: 4.0,
            bookmark: []
          },
          {
            id: 654356453,
            title: "Bad Boys",
            boxarts: [
              { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
              { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }
            ],
            url: "http://api.netflix.com/catalog/titles/movies/70111470",
            rating: 5.0,
            bookmark: [{ id: 432534, time: 65876586 }]
          }
        ]
      },
      {
        name: "New Releases",
        videos: [
          {
            id: 65432445,
            title: "The Chamber",
            boxarts: [
              { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
              { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
            ],
            url: "http://api.netflix.com/catalog/titles/movies/70111470",
            rating: 4.0,
            bookmark: []
          },
          {
            id: 675465,
            title: "Fracture",
            boxarts: [
              { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
              { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
              { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
            ],
            url: "http://api.netflix.com/catalog/titles/movies/70111470",
            rating: 5.0,
            bookmark: [{ id: 432534, time: 65876586 }]
          }
        ]
      }
    ];

    //------------------------------------- Your Code Goes over here  ----------------------------------
    const result = [
      {
        id: 70111470,
        title: 'Die Hard',
        boxart: {
          width: 150,
          height: 200,
          url: 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg'
        }
      },
      {
        id: 654356453,
        title: 'Bad Boys',
        boxart: {
          width: 150,
          height: 200,
          url: 'http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg'
        }
      },
      {
        id: 65432445,
        title: 'The Chamber',
        boxart: {
          width: 150,
          height: 200,
          url: 'http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg'
        }
      },
      {
        id: 675465,
        title: 'Fracture',
        boxart: {
          width: 150,
          height: 200,
          url: 'http://cdn-0.nflximg.com/images/2891/Fracture150.jpg'
        }
      }
    ]

    //  You can use concatMap which is equvalent of Map and then concatAll for higher orger observable
    // concatAll shoud be at same level as  map that returns another observable

    const obs$ = from(movieLists).pipe(concatMap(({ videos }) => videos))

    const filtered_boxart = (boxarts) => from(boxarts).pipe(
      filter((boxart) => boxart.height === 200 && boxart.width === 150),
      reduce((acc, curr) => ([...acc, curr]), []),
    )

    const box_art$ = obs$.pipe(
      map(({ boxarts }) => filtered_boxart(boxarts)),
      concatAll(),
    )

    const allVideoIdsInMovieLists = []
    // zip(obs$.pipe(pluck('title')), obs$.pipe(pluck('id')), from(box_art$)).subscribe(([title, id, boxart]) => {
    //   const [curr] = boxart;
    //   allVideoIdsInMovieLists.push({ title, id, boxart: curr })
    // }
    // );

    from(movieLists).pipe(
      concatMap(({ videos }) => videos),
      concatMap(({ title, id, boxarts }) => zip(of(title), of(id), filtered_boxart(boxarts)).pipe(first()))
    ).subscribe(
      ([title, id, boxart]) => {
        allVideoIdsInMovieLists.push({ title, id, boxart: boxart[0] })
      })

    // console.log(allVideoIdsInMovieLists)

    expect(allVideoIdsInMovieLists).to.eql(result);

    //---------------------------------------------End of Code -------------------------------------------




  }));
