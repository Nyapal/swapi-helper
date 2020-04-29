# SWAPI Helper

This project contains start code and some challenges that work with modules and creating libraries.

The sample JS code here uses `<script type="module">` to load JS code using ES6 modules. Modules give you a powerful way to organize code. 

**Modules provide scope**, all variables and functions defined in a module scoped to that module. 

**Values can be shared** across modules using `import` and `export`. When exporting a value you are exporting that _binding_ not a copy. If the value is a Array, Object, or Function you are exporting a reference to source. 

**Modules organize code** into logical groups by file. Use modules to keep code that is related in one place. 

Export only what is relavant to the rest of your code base. 

How compatible are modules? Check out the usage here: 

https://caniuse.com/#search=modules

## Getting Started

The sample code requests data from SWAPI (Star Wars API) and displays it in the browser. You can open `index.html` in your browser. Type number of a Star Wars character in the field and hit return or click Submit to load that characters information. 

Open index.html and look at the code here. Notice the script tag: 

```HTML
<script type="module" src="index.js"></script>
```

The `type` attribute notifies the browser that this script is a `module`. A script marked with `type="module"` can use the `import` and `export` key words to share bindings across files. 

The code in the example is organized across these JS files:

- `index.js` - Entry point and developer code
- `dom-elements.js` - Get references to DOM elements
- `swapi-helper.js` - Contains code to load data from SWAPI
- `constants.js` - Contains some constants shared by the program

### Notice where exports occur

`constants.js`, `dom-elements.js`, and `swapi-helper.js` all export something. `constants.js` and `dom-elements.js` both export multiple things with `export`.

`swap-helper.js` exports only a single function and exports this with `export default`. A file may only export one element as `default`. 

### Notice where imports occur

`index.js` import from `swap-helper.js` and `dom-elements.js`. 

```JS
import getPeople from './swapi-helper.js'
import { displayEl, formEl, inputID } from './dom-elements.js'
```

First line imports the `default` export from `swapi-helper`.

The second line imports from `dom-elements.js` these are not default exports and they are wrapped in the `{` and `}`

While you work on the challenges below use the modules to your advantage. Continue with the pattern used by the existing modules. Add new modules when and if you think they are needed. 

## Challenges 

The code here could be improved. Take a look at the code. examine it to get comfortable with how it works. 

In a nutshell `getPeople()` takes the person id and a callback function. When the data is loaded it calls the callback and passes a JSON object as an argument. 

### Challenge 1

`getPeople()` takes a callback and retrieves a person. Using a `Promise` here would be better than using a callback. 

### Challenge 2

If you haven't already `getPeople()` might be best as an `async` function. 

Use the `async` and `await` key words to handle your network transaction. 

### Challenge 3

The current app searches for people in the Star Wars stories the API also has data on:

- people
- films
- starships
- vehicles
- planets

Your goal with this challenge is to handle loading data from any of these routes.

This challenge is open ended. You can solve it in anyway that makes sense to you. 

Don't worry about adding to the interface. Instead just allow the input to search for one category at a time. 

### Challenge 4

When searching for a person the results show a single url or an array of urls for: 

- films
- vehicles
- starships
- homeworld

Your goal with this challenge is to request each of these from the SWAPI server and display the results. 

You'll need to delay displaying the results until all of the data has arived. 

You'll also need to get the person data first before you can request the other things. 

Use `Promise.all()`

