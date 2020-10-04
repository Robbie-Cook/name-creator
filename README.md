# Name Creator

> This project is forked from Project Name Generator (https://www.npmjs.com/package/project-name-generator),
> but with some improvements.

Generate quirky names like *spiffy-waterfall*, *sassy-bread*, *mature-dew-8239* to use wherever you need a random but memorable name.

Useful for object names, temp folders, passwords, project names, unique ids etc

## Install
`npm install name-creator --save`

## Quick Start
```javascript
var generate = require('name-creator');

generate().dashed; // 'uptight-guitar'

generate().spaced; // 'grandiose clam'

generate().raw; // ['deluxe', 'grandmother']

generate({ number: true }).dashed; // 'disgraceful-temper-7794'

generate({ words: 4 }).raw; // ['tiny', 'crabby', 'wired', 'quicksand']

generate({ words: 4, number: true }).dashed; // 'breakable-judicious-luxuriant-tax-3931'

generate({ words: 2, alliterative: true }).spaced; // 'elegant experience'

```

## Quickstart CLI
This package contains a cli script.  You can pull in the package globally using npm
`npm install -g name-creator`

Call from your command line
```
$ name-creator
{ raw: [ 'spry', 'bath' ],
  dashed: 'spry-bath',
  spaced: 'spry bath' }
```

For CLI options 
```
name-creator -h

Usage: name-creator [options]


Options:

  -V, --version          output the version number
  -w, --words [num]      number of words [2]
  -n, --numbers          use numbers
  -a, --alliterative     use alliterative
  -o, --output [output]  output type [raw|dashed|spaced]
  -h, --help             output usage information
```

## API
The module returns single method `generate(options)`

Calling `generate()` with no arguments will return an object:
```javascript
{
    raw: ['whispering', 'valley'],
    dashed: 'whispering-valley',
    spaced: 'whispering valley'
}
```

The `options` argument object can have properties

* **words** (number) - Number of words generated (excluding number). All words will be adjectives, except the last one which will be a noun. Defaults to **2**.
* **number** (boolean) - Whether a numeric suffix is generated or not. The number is between 1 - 9999, both inclusive. Defaults to **false**.
* **alliterative** (boolean) - Whether to output words beginning with the same letter or not. Defaults to **false**.

`generate({ words: 3 })` will return:
```javascript
{
    raw: ['harmonious', 'endurable', 'substance'],
    dashed: 'harmonious-endurable-substance',
    spaced: 'harmonious endurable substance'
}
```

`generate({ words: 5, number: true })` will return:
```javascript
{
  raw: [ 'exciting', 'cooperative', 'legal', 'lackadaisical', 'blood', 4099 ],
  dashed: 'exciting-cooperative-legal-lackadaisical-blood-4099',
  spaced: 'exciting cooperative legal lackadaisical blood 4099'
}
```

`generate({ words: 2, number: false, alliterative: true })` will return:
```javascript
{
  raw: [ 'elegant', 'experience' ],
  dashed: 'elegant-experience',
  spaced: 'elegant experience'
}
```

## Tests
To run tests locally:
```
npm install

npm test
```

The library has been tested with Node.js 8.6.0

## Status
[ ![Build Status for aceakash/name-creator](https://codeship.com/projects/261b5340-4472-0134-6925-4ed1b3e90ffc/status?branch=master)](https://codeship.com/projects/168462)

![How up-to-date are dependencies?](https://david-dm.org/aceakash/project-name-generator.svg)
