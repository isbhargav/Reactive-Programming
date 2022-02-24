import { useEffect, useState } from "react";

export function useObservable(observable) {
  const [result, setResult] = useState("");
  useEffect(() => {
    let subscription = observable.subscribe((val) => {
      console.log(val)
      setResult(val);
    });
    return () => subscription.unsubscribe();
  }, [observable, setResult]);
  return result;
}
