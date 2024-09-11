// What is a date? 
// A date pinpoints a location in time. 
// In JS a date is the number of milliseconds since the UNIX epoch

// Make a Date
const today = new Date() // Creates a date that represents right now. 

// Print the date
console.log(today, '<- Today')  // Something like: 2024-09-11T19:43:12.965Z

// It's really a number
console.log(today.getTime(), '<- Time') // Something like: 1726083792965

// Whats the difference between: 2024-09-11T19:43:12.965Z and 1726083792965?
// Nothing! The first is the string equivalent of the date the second is 
// the raw value. 

// The second value is the number of milliseconds since Jan 1 1970
// You can get the number of years since 1970 like this:
console.log('Years since 1970')
console.log(today / 1000 / 60 / 60 / 24 / 365.25) 

// Divide by 1000 to get seconds divide by 60 to get minutes
// divide by 60 to get hours, divide by 24 to get days, 
// divide by 365.25 to get years

// Or, divide by 86,400 seconds.
console.log(today / 86400 / 1000 / 365.25)

// Computers generally think of a day being 86,400 seconds long. 

console.log('-------- Age --------')

// You can make a date from almost any 
// human readable string for example: 
const bday = new Date('Sept 26, 1965') // Creates a date of 9/26/1965

// Notice! 
console.log(bday.getTime()) // something like: -134586000000
// This a negative number because it occurred before 1970!

// Challenge: Calculate your age with JS
const age = today - bday 
console.log(age, '<- Age in ms')
// Challenge: Calculate your age in secs, mins, hrs, days, years

// Age in secs

// Age in mins

// Age in hrs

// Age in days 

// Age in years


console.log('-------- BDay --------')

// You can also initialize a date with 
// year, month, date, hours, mins, secs, ms

// Important! month is 0 indexed, Jan == 0

// Create a date object representing: Jan 1 2025
const newYear = new Date(2025, 0, 1)

// Get the components from a date
console.log(newYear.getFullYear(), newYear.getMonth(), newYear.getDate())
// Something like: 2025 0 1

// The date components are not often useful as numbers, 
// especially when the month is 0 indexed! 

// To get the month by name you might start with an 
// array of month names: 
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// You could show the month name like this: 
console.log(months[newYear.getMonth()])

// Challenge: log your birth month using your birthday date


// Days of the week are also 0 indexed 0:Sun - 6:Sat 
const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']

// Challenge: Show the day of the week of your birthday


console.log('-------- Data Offsets --------')

// Date offsets show the difference between two dates
// Usually you will want to start with a date and make 
// a copy of that date which you will modify. 

const date = new Date()          // Start with a date 
const startDate = new Date(date) // copy the date
const dueDate = new Date(date)   // copy the date again

// Start date is 7 days ago. date.setDate() sets the calendar date
// Use setDate to modify the start date subtract 7 days
startDate.setDate( date.getDate() - 7 ) // 7/20

// Due date is 3 days from now
// Use setDate to modify the end date add 3 days
dueDate.setDate( date.getDate() + 3 ) // 7/30

console.log(startDate.getDate(), dueDate.getDate())
console.log(startDate, dueDate)

// Challenge: check these dates in the console, they should 
// be 7 days ago and 3 days from now

// Try these problems

console.log('--------- Problem 1 --------')
// Schedule future dates - Given a date return a list of 
// dates separated by a number of days offset
// date is a Date object
// repeat is a number, the number of repeats 
// offset is the number days between each of the dates returned

function consecutiveDates(date, repeat, offset) {
  // Your code here 
}

// Starting date 1/1/2019, repeat 4 times, return dates 
// 3 days apart
consecutiveDates(new Date(2019, 0, 1), 4, 3)

// Should return an array with dates:
// 1. 1/1/2019 <- Starting date
// 2. 1/4/2019 <- Each date 3 days apart
// 3. 1/7/2019
// 4. 1/10/2019

// Stretch goals 
// add a unit for time:
// consecutiveDates(new Date(2019, 0, 1), 3, 1, 'year')
// Should return an array of 3 dates separated by 1 year

// 1. 1/1/2019 <-- each date is 1 year apart
// 2. 1/1/2020
// 3. 1/1/2021

// consecutiveDates(new Date(2019, 0, 1), 3, 1, 'days')
// Should return an array of 3 dates separated by 1 year

// 1. 1/1/2019 <-- each date is 1 day apart
// 2. 1/2/2019
// 3. 1/3/2019

// function consecutiveDates(date, repeat, offset, unit = 'day') {
// 
// }

console.log('--------- Problem 2 --------')

// Write a function to order dates
// Takes an array of dates, returns an array of ordered dates
// Important! Array.sort() will sort alphabetically without a sorting function
// const nums = [5555, 888, 77, 2222, 1111, 3333]
// nums.sort() -> [1111, 2222, 3333, 5555, 77, 888]
// Sort numerically by including a sorting function!
// nums.sort((a,b) => a - b) -> [77, 888, 1111, 2222, 5555]

function orderDates(dates) {
  // orders the dates 
  // returns a new array of ordered dates
  // (Clue: remmeber that dates can be treated like numbers!)
}

orderDates([today, dueDate, startDate, bday, newYear])

// [bday, startdate, duedate, newyear]

// Stretch: Return an object containing three keys each holding an 
// array of dates. The keys are: 

// - past: array of dates that happened before today
// - present: all dates that happen today
// - future: all of the dates that will occur in the future

// { past: [...], present:[...], future:[...] }

console.log('--------- Problem 3 --------')

// Given an array of dates find the date that will happen next. 
// You need to find the date that is closetest to now
// but not before!

function nextDate(dates) {
  // find the date that will happen next in dates
  // return the next date
}

nextDate([today, dueDate, startDate, bday, newYear])

// Stretch Goal: Return a human readable string: 
// Your next appointment is 3 days from now. 

console.log('--------- Problem 4 --------')

// Birthday planner. Write a function that takes a date (your birthday) 
// and a year, and returns the day of the week for that date in that year. 

function whensYourParty(date, year) {
  // Find the day of the year for your birthday
}

whensYourParty(bday, 2022)

// Stretch Goal: Return an array listing all 
// the days when your birthday occured since 
// you were born. 
