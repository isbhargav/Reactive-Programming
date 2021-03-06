import { useEffect, useState } from "react";
import { Subject } from "rxjs";
import { useObservable } from "../Hooks/useObservable";
import { searchName } from "../MockAPIs/searchNameApi";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
const searchSubject = new Subject();
const searchResultObservable = searchSubject.pipe(
  debounceTime(300),
  // filter((s) => s.length > 1),
  distinctUntilChanged()
  // scan((acc, curr) => [...acc, curr], ""),
);

export default function Page1(params) {
  const [query, setQuery] = useState("");
  const [display, setDisplay] = useState([]);
  const result = useObservable(searchResultObservable);
  useEffect(() => {
    // The major use case of this is data transformation pipelines
    // Now make API call and fetch data then set the response to state varibles to display
    // You can also incorparate this step in our data transformation pipeline itself
    // Check searchResultObservable2
    async function done() {
      const res = await searchName(result);
      setDisplay(res);
    }
    done();
  }, [result, setDisplay]);
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
        <div className="ml-10 p-2">
          {display.length === 0 ? (
            <p>No Results</p>
          ) : (
            display.map((name) => (
              <p className="text-lg text-gray-800 m-2" key={name}>
                {name}
              </p>
            ))
          )}
        </div>
      </label>
    </form>
  );
}
