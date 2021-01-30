// Exercise 13: Use ConcatMap to flatten 2D array

// You've managed to flatten a tree that's two levels deep, let's try for three!
// Let's say that instead of a single boxart url on each video, we had a collection of boxart objects,
// each with a different size and url.Create a query that selects { id, title, boxart } for every video in the movieLists.
// This time though, the boxart property in the result will be the url of the boxart object with dimensions of 150x200px.
// Let's see if you can solve this problem with map(), concatAll(), and filter().

// There's just more one thing: you can't use indexers. In other words, this is illegal:

const { from } = require("rxjs");
const { filter, map, concatAll, concatMap } = require("rxjs/operators");

function PrintAll() {
  const spanishFrenchEnglishWords = [
    ["cero", "rien", "zero"],
    ["uno", "un", "one"],
    ["dos", "deux", "two"]
  ];

  //------------------------------------- Your Code Goes over here  ----------------------------------
  const allWords = [];

  //  You can use concatMap which is equvalent of Map and then concatAll for higher orger observable
  // concatAll shoud be at same level as  map that returns another observable

  const obs$ = from(spanishFrenchEnglishWords).pipe(concatMap((wordList) => from(wordList)));
  obs$.subscribe((x) => allWords.push(x));

  console.log(allWords);

  //---------------------------------------------End of Code -------------------------------------------
  return allWords;
}
PrintAll();
module.exports = PrintAll;
