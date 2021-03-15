import { useEffect, useState } from "react";
import { BehaviorSubject, from } from "rxjs";
import { searchName } from "../searchNameApi";
import { useObservable } from "../Hooks/useObservable";
import { concatMap, debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
const searchSubject = new BehaviorSubject("");
const searchResultObservable = searchSubject.pipe(
  debounceTime(600),
  // filter((s) => s.length > 1),
  distinctUntilChanged(),
  // scan((acc, curr) => [...acc, curr], ""),,
  switchMap((v) => from(searchName(v)))
);

export default function Page2(params) {
  const [query, setQuery] = useState("");
  const display = useObservable(searchResultObservable);
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
    searchSubject.next(value);
  };
  return (
    <form className="m-6 p-6" onSubmit={handleSubmit}>
      <label htmlFor="search">
        Name:
        <input
          className="border mx-2"
          id="search"
          type="text"
          value={query}
          onChange={handleChange}
        ></input>
        <button
          type="submit"
          className="bg-green-400 p-2 rounded text-white text-xs"
        >
          Submit
        </button>
        {/* <div>{JSON.stringify(data, null, 2)}</div> */}
        <div>
          {display.length === 0 ? (
            <p>No Results</p>
          ) : (
            display.map((name) => (
              <p className="text-sm text-gray-800" key={name}>
                {name}
              </p>
            ))
          )}
        </div>
      </label>
    </form>
  );
}
