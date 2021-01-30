// Exercise 14: Retrieve id, title, and a 150x200 box art url for every video with concatMap()

// Nearly every time we flatten a tree we chain map() and concatAll().
// Sometimes, if we're dealing with a tree several levels deep, we'll repeat this combination many times in our code.
// To save on typing, let's create a concatMap function that's just a map operation, followed by a concatAll.

const { from } = require("rxjs");
const { filter, map, concatAll, concatMap } = require("rxjs/operators");

function PrintAll() {
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
  const allVideoIdsInMovieLists = [];

  //  You can use concatMap which is equvalent of Map and then concatAll for higher orger observable
  const obs$ = from(movieLists).pipe(
    concatMap((list) =>
      from(list.videos).pipe(
        concatMap((video) =>
          from(video.boxarts).pipe(
            filter((boxart) => boxart.height === 200 && boxart.width === 150),
            map((boxart) => ({ id: video.id, title: video.title, boxart }))
          )
        )
      )
    )
  );
  obs$.subscribe((x) => allVideoIdsInMovieLists.push(x));

  console.log(allVideoIdsInMovieLists);

  //---------------------------------------------End of Code -------------------------------------------
  return allVideoIdsInMovieLists;
}
PrintAll();
module.exports = PrintAll;
