# JavaScript-Dates-lab
JavaScript Date Object lab starter code

Open index.js in your code editor. Follow the instructions in the comments.

## What is a date? 
A date pinpoints a location in time. 
In JS a date is the number of milliseconds since the UNIX epoch

## Make a Date

In JS `Date` is a class, and you'll create an instance. 

```JS
const today = new Date() // Creates a date that represents right now. 
```

Dates are represented as the number of milliseconds since the [UNIX Epoch](https://en.wikipedia.org/wiki/Unix_time)

```JS
// Print the date
console.log(today, '<- Today')  // Something like: 2024-09-11T19:43:12.965Z

// It's really a number
console.log(today.getTime(), '<- Time') // Something like: 1726083792965
```

In the first example the `Date` instance converts the date to a human readable string. In the second example we see the actual value that represents a the date. 

The second value is the number of milliseconds since Jan 1 1970
You can get the number of years since 1970 like this:

```JS
console.log('Years since 1970')
console.log(today / 1000 / 60 / 60 / 24 / 365.25) 
```

- Divide by 1000 to get seconds divide by 60 to get minutes
- divide by 60 to get hours, divide by 24 to get days, 
- divide by 365.25 to get years

Or, divide by 86,400 seconds.

```JS
console.log(today / 86400 / 1000 / 365.25)
```

Computers think of a day being 86,400 seconds long. 

## Making Dates
You can make a date from almost any human readable string for example: 

```JS
const bday = new Date('Sept 26, 1965') // Creates a date of 9/26/1965

// Notice! 
console.log(bday.getTime()) // something like: -134586000000
```

This a negative number because it occurred before 1970!

Read more about JS `Date` here: https://javascript.info/date
