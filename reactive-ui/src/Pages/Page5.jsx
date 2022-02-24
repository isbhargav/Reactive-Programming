import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { fromEvent } from 'rxjs'
export default function Page5() {
    const [counter, setCounter] = useState(0);
    const [show, setShow] = useState(true);

    const buttonRef = useCallback((node) => {
        console.log(node)
        let sub = null;
        if (node !== null) {
            console.log("Non Null")
            const obs = fromEvent(node, 'click')
            sub = obs.subscribe(e => setCounter(v => v + 1))
        }
        else {
            console.log("Null", sub)
            if (sub) {
                sub.unsubscribe();
            }
        }
    }, [setCounter])
    return (
        <>
            <big>
                <p>Counter: {counter}</p>
            </big>
            <button onClick={e => setShow(v => !v)} style={{ border: '1px solid blue', backgroundColor: 'red' }}>Show/Hide</button>
            <br />
            <button onClick={e => setCounter(v => 1 + v)} style={{ border: '1px solid red', backgroundColor: 'aqua' }}>Counter</button>
            <br />
            {show && (<button ref={buttonRef} >Click me!</button>)}
        </>
    )
}