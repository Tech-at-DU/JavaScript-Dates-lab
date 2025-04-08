# Working with Dates in JavaScript

JavaScript includes a built-in object for working with **dates** and **times**. This object is called the `Date` object.

In this lesson, you'll explore how to:
- Create new dates
- Format and display dates
- Perform arithmetic with dates (add, subtract)
- Compare and sort dates
- Understand how `Date` objects behave in different contexts

---

## 📦 Date Utility Library Goals
As you explore the `Date` object, think like a library author:
- Can this function be reused in multiple contexts?
- What’s the cleanest input/output structure?
- Should I return a Date object, a string, or a timestamp?

💡 These functions could become part of your own date library, like a mini `moment.js`.

🤖 **AI Prompt:** "Help me write a date utility function to get the next upcoming birthday."

---

## Creating Dates

```js
let now = new Date();
console.log(now); // current date and time
```

Dates can also be created from a date string:
```js
let christmas = new Date('2025-12-25');
```

Or by passing year, month (0-indexed), day:
```js
let d = new Date(2025, 11, 25); // Dec 25, 2025
```

✅ Check: What’s the difference between `Date.now()` and `new Date()`?

🤖 **AI Prompt:** "What are the valid formats for creating a Date in JavaScript?"

---

## Formatting Dates
Use `.toLocaleString()`, `.toDateString()`, `.toTimeString()`, or `.toISOString()`:

```js
let d = new Date();
console.log(d.toLocaleString()); // local format
console.log(d.toISOString());   // ISO 8601
```

Also consider `Intl.DateTimeFormat` for fine control:
```js
new Intl.DateTimeFormat('en-US', {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
}).format(new Date());
```

🤖 **AI Prompt:** "How do I format a Date object into 'YYYY-MM-DD' using JS?"

✅ Check: What does `.toISOString()` return?

---

## Comparing Dates
Dates are compared using numeric operators:
```js
let d1 = new Date('2025-01-01');
let d2 = new Date('2025-12-25');
console.log(d1 < d2); // true
```

To sort an array of dates:
```js
dates.sort((a, b) => a - b);
```

✅ Check: What type is returned when you subtract two Date objects?

🤖 **AI Prompt:** "How do I sort a list of Date objects in JavaScript?"

---

## Arithmetic with Dates
You can subtract dates to find the time between them:
```js
let d1 = new Date('2025-01-01');
let d2 = new Date('2025-12-31');
let diff = d2 - d1;
let days = diff / (1000 * 60 * 60 * 24);
```

✅ Check: What happens if you try to subtract an invalid date?

🤖 **AI Prompt:** "How do I calculate the number of days between two dates in JavaScript?"

---

## Type Coercion in Dates

The `Date` object overrides the internal `toString()` and `valueOf()` methods (via `Symbol.toPrimitive`) to allow itself to be represented as different types depending on context.

```js
let d = new Date();
console.log('Today is: ' + d);     // Uses d.toString()
console.log(d + 1);                // Uses d.valueOf(), returns timestamp
console.log(Number(d));           // Same as d.valueOf()
```

✅ Check: What method is used when you add a Date to a string? What about when you subtract a Date from a number?

🤖 **AI Prompt:** "Explain how JavaScript decides which method to call when coercing a Date object."

---

## Lab Assignment: Date Utility Library

In this lab, you will build several reusable functions that work with JavaScript's `Date` object. Your goal is to:

✅ Create dates from strings and values  
✅ Format and compare dates  
✅ Write date arithmetic functions (e.g., difference in days)  
✅ Package your utilities into a simple library for reuse or publication

Each function you write should:
- Take clearly defined inputs
- Return a value rather than log it
- Handle invalid inputs gracefully (e.g., invalid dates)

📦 **Project Tip:** Save each function in a separate module or as a method in a class. These will become the core of your `DateLib` library for ACS 3310.

🤖 **AI Prompt:** "Suggest a useful name and signature for a date comparison function in a library."

## Activity: Exploring the Date Object
Try these challenges in Node, the browser console, or a Repl.

### Challenge 1: consecutiveDates()
📘 Input: `5`  
📦 Output: An array of 5 consecutive date strings starting today  
🧪 Example: `["2024-04-01", "2024-04-02", ..., "2024-04-05"]`
Write a function that returns an array of N dates starting from today.

### Challenge 2: orderDates()
📘 Input: Two dates as strings or Date objects  
📦 Output: An array of the two dates in ascending order  
🧪 Example: `orderDates("2025-12-25", "2025-01-01") → ["2025-01-01", "2025-12-25"]`
Write a function that takes two dates and returns them in ascending order.

### Challenge 3: nextDate()
📘 Input: An array of future Date strings  
📦 Output: The next upcoming date from the list relative to today  
🧪 Example: `["2024-04-05", "2024-03-31", "2024-04-03"] → "2024-04-03"`
Write a function that takes an array of dates and returns the next one after today.

🤖 **AI Prompt:** "Write a function that returns the next future date from a list."

### Challenge 4: whensYourBirthday()
📘 Input: A birthdate string  
📦 Output: The next occurrence of your birthday  
🧪 Example: `"1990-05-10" → "2024-05-10"`
Write a function that takes a birthdate and tells you when your birthday falls next.

### Challenge 5: weekdayInFuture()
📘 Input: Weekday string (e.g., "Friday")  
📦 Output: The next date that falls on that weekday  
🧪 Example: `"Monday" → "2024-04-08"`
Write a function that returns the next date on a given weekday (e.g., next Friday).

🤖 **AI Prompt:** "How do I get the next Monday from today's date in JS?"

---

## 🧪 Optional Extension: Package a Date Library
Take two or more of the functions you wrote above and:
1. Add them to a `.ts` file
2. Add type annotations
3. Test them with Jest
4. Bundle and publish them like a real library

🤖 **AI Prompt:** "Convert this date function to TypeScript and test it with Jest."

---

## Final Notes
- The `Date` object can be tricky—watch out for months starting at 0 and timezone surprises.
- JavaScript dates automatically adapt to context using `.toString()` and `.valueOf()`.
- You’re now equipped to build reliable and reusable time utilities.
- Think like a library author: what’s useful, composable, and clear?
