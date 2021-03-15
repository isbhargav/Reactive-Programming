import { useEffect, useState } from "react";

export function useObservable(observable) {
  const [result, setResult] = useState("");
  useEffect(() => {
    let subscription = observable.subscribe((search) => {
      setResult(search);
    });
    return () => subscription.unsubscribe();
  }, [observable, setResult]);
  return result;
}
