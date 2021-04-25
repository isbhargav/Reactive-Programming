import { useEffect, useState } from "react";
import { EMPTY, from, Subject } from "rxjs";
import {
  debounceTime,
  groupBy,
  ignoreElements,
  mergeMap,
  switchMap,
  timeoutWith,
} from "rxjs/operators";
import { dbSelect, dbUpdate } from "../MockAPIs/databaseUpdate";

const databaseCallStream = new Subject();
const databaseUpdateObserver = databaseCallStream.pipe(
  groupBy(
    (m) => m.movieId,
    (m) => m,
    (group$) => group$.pipe(timeoutWith(2000, EMPTY), ignoreElements()) // <- This is how to terminate group stream after timeout
  ),
  mergeMap(($group) =>
    $group.pipe(
      debounceTime(400),
      switchMap((m) => from(dbUpdate(m)))
    )
  )
);

/*
The above solution seem to work correctly as we want BUT!!!!
We have careated a Subttle bug of Memory Leak
for an asynchronous stream we can have infinite number of groups hence as by nature of group by
it keeps all the elements of the each group until the stream completes which in our case it will never
complete as it is an infinite stream

In a real-world scenario, if you do need to group an observable, there might be 2 cases:

    1.You have a finite source observable. Then the GroupBy's behavior is not a problem, because it will create the required number of groups and then release them as soon as the source ends.
    2.You have an infinite source. Then you simply cannot use GroupBy for the reasons I've written above. You need to place some limit on the grouping process, for example by following Wes's advice. you could use GroupByUntil

In our case to terminite the group stream at after certian time it has not produced
*/
const Card = ({ movieId, status, src }) => {
  const [like, setLike] = useState(status);

  const handleClick = () => {
    setLike(!like);
    databaseCallStream.next({ movieId, src, status: !like });
  };
  return (
    <div className="w-2/12 mt-2">
      <img alt="movie2" src={src}></img>
      <button className="text-6xl mt-2 ml-10" onClick={handleClick}>
        {like === false ? "👎 " : "👍 "}
      </button>
    </div>
  );
};

export default function Page4(params) {
  const [movies, setMovies] = useState([]);
  const [logs, setLogs] = useState([]);
  async function getAllMovies() {
    const allMovies = await dbSelect();
    setMovies(allMovies);
  }
  useEffect(() => {
    getAllMovies();
    let sub = databaseUpdateObserver.subscribe((upDate) => {
      setLogs((l) => [...l, upDate]);
      return () => sub.unsubscribe();
    });
  }, []);
  return (
    <>
      <div className="flex justify-center gap-8 bg-gray-200">
        {movies.map((m) => (
          <Card
            key={m.movieId}
            src={m.src}
            movieId={m.movieId}
            status={m.status}
          />
        ))}
      </div>
      <div className="bg-black font-mono text-green-500 text-xs h-screen">
        {logs.map((l, idx) => (
          <pre key={idx}>{`${JSON.stringify(l)}`}</pre>
        ))}
      </div>
    </>
  );
}
