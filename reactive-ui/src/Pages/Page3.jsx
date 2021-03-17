import { fromEvent, BehaviorSubject } from "rxjs";
import {
  // switchMap,
  takeUntil,
  skip,
  map,
  delay,
  exhaustMap,
} from "rxjs/operators";
import { useObservable } from "../Hooks/useObservable";
import { useRef } from "react";

const down = new BehaviorSubject("");
const move = fromEvent(document, "mousemove");
const up = fromEvent(document, "mouseup");

// Good rule of Thumb When In doubt use Switch or SwitchMap
/*
[.............d...................................................................................................]
[              ------------------               ]


*/
const dragObserver = down.pipe(
  skip(1),
  exhaustMap((d) => move.pipe(delay(250), takeUntil(up))),
  map(({ clientX, clientY }) => ({
    clientX,
    clientY,
  }))
);

export default function Page3(params) {
  const pos = useObservable(dragObserver);
  const ref = useRef();
  if (ref.current) {
    const { clientX, clientY } = pos;
    ref.current.style.top = clientY + "px";
    ref.current.style.left = clientX + "px";
  }
  // useEffect(() => {
  //   let subscription = dragObserver.subscribe(({ clientX, clientY }) => {
  //     if (ref.current) {
  //       ref.current.style.top = clientY + "px";
  //       ref.current.style.left = clientX + "px";
  //     }
  //   });
  //   return () => subscription.unsubscribe();
  // }, []);
  return (
    <>
      <div className="border-2 border-black border-dashed h-screen m-10">
        <div
          ref={ref}
          style={{ position: "absolute" }}
          className="border-2 border-red-800 w-1/12 h-1/4 m-1"
          onMouseDown={(e) => {
            down.next(e);
          }}
        ></div>
      </div>
    </>
  );
}
