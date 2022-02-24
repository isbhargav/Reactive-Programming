# What is RxJs?

RxJS is a library for composing asynchronous and event-based programs by using observable sequences.

Think of Rxjs as Loadash for Events. We use Loadash because the
standard libray in javascript is not very rich as compared to other
languages like python hence, for common operations we need to rely on 
third party libaraies like loadash which provides these. 

# Basics of Rxjs

## of
Create observable out of one or more values

Example:
```js
const exmaple$ = of(1,2,3);
// exmaple$ <- is a stream you cannot consume it directly.
exmaple$.subscribe(val => console.log(val))
```

## from
Creates an Observable from either of following
- Promise
- Array like object (Arrays)
- Iterable Object (Genrators-iterators)
- Observable like (object that has subscribe method ex: svelt store)
exmaple:
```js
const exmaple$ = from([1,2,3,4])
const exmaple2$ = from(fetch("http://www.randomwebsite.com/data.json"))


exmaple$.subscribe(val => console.log(val))
```

## subscribe

Takes three functions that are called on Next, Error and Complete respectivly.

```js
// NOTE: THIS SYSTAX IS DEPRECATED !!!!!
// You might encounter this in the wild but don't use it.
observable.subscribe(
    (val)=> {process(val)}, // Next
    (err)=> {print(err)}, // Error
    (   )=> {print("Completed")}, // Complete
)

// Use this syntax as its much cleaner 
// this takes in object
observable.subscribe( {
    next: (val)=> {process(val)},
    error: (err)=> {print(err)}, 
    complete: ()=> {print("Completed")},
})
```

## formEvent

Create Observables based on event listners. (eg: button, input, mouse)
Optionallym you can pass a function to format the event

```js
const button = document.querySelector('button')
const input = document.querySelector('input')

button.addEventListner('click',(e)=> console.log(e)) // log each click

const buttonClick$ = fromEvent(button, 'click');
const inputType$ = fromEvent(input, 'input', (e)=> e.target.value)
buttonClick.subscribe(console.log) // log each click
```

## bindCallback

Turn anyhting that takes a callback into observable

```js

const get = bindCallback(jQuery.get) // Anything that take Javasctipt like callback (err, res)
const data$ = get('/api/endpoint')

const readFile = bindNodeCallback(fs.readFile) // anything that takes node style callback
const content$ = readFile('./groceries.txt', 'utf-8')

```
## fromFetch

Create observable from fetch

```js
const observable$ = fromFetch('https://www.randomdata.com/data')

observable$.subscribe(v=> console.log(v))
```

## Interval

Genrate event at every interval

## debounceTime

## throttleTime



