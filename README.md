# goble
A global store.

## Installation

```javascript
npm install goble
```

## Usage

Setting a global variable.

```javascript
var goble = require('goble');

goble.set('foo', 'bar');
```

Getting a global variable

```javascript
// print 'bar' to console
console.log(goble.get('foo'));
```

Clearing all global variables

```javascript
goble.clear();

// print null
console.log(goble.get('foo'));
```

## Testing

**goble** uses the jest framework. To execute all tests, run `npm test`

## Documentation

Install jsdoc globally using `npm install -g jsdoc` or locally using `npm install --save-dev jsdoc`.

Run `npm run jsdoc` to generate documentation.
