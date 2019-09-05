# goble
A global store.

## Usage

Setting a global variable.

```
var goble = require('goble');

goble.set('foo', 'bar');
```

Getting a global variable

```
// print 'bar' to console
console.log(goble.get('foo'));
```

Clearing all global variables

```
gobal.clear();

// print null
console.log(goble.get('foo'));
```

## Testing

**goble** uses the jest framework. To execute all tests, run `npm test`

## Documentation

Install jsdoc globally using `npm install -g jsdoc` or locally using `npm install --save-dev jsdoc`.

Run `npm run jsdoc` to generate documentation.
