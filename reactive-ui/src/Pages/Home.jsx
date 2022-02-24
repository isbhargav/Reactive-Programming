import { Link } from "react-router-dom";
export default function Home(params) {
  return (
    <>
      {/* <h1 className="text-5xl flex justify-center font-serif bg-gray-300"> Home </h1> */}
      <div className=" flex flex-col mx-32 mt-10 text-xl ">
        <ul>
          <li>
            <Link to="/1">Auto Suggestion</Link>
          </li>
          <li>
            <Link to="/2">Auto Suggestion 2</Link>
          </li>
          <li>
            <Link to="/3">Drag and Drop</Link>
          </li>
          <li>
            <Link to="/4">Twitter like/unlike</Link>
          </li>
          <li>
            <Link to="/5">Button Clicks</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
