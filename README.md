Autosize
======================
Autosize is a small, stand-alone script to automatically adjust textarea height
to fit text. Repackaged for Meteor.

Current version: Autosize 3.0.5

## Installation

1. `meteor add bigu:autosize`

## Browser compatibility

Chrome | Firefox | IE | Safari | iOS Safari | Android | Opera Mini
------ | --------|----|--------|------------|---------|------------
yes    | yes     | 9  | yes    | yes        | 4       | ?


## Usage:

The autosize function accepts a single textarea element, or an array or
array-like object (such as a NodeList or jQuery collection) of textarea
elements.

````javascript
// from a NodeList
autosize(document.querySelectorAll('textarea'));

// from a single Node
autosize(document.querySelector('textarea'));

// from a jQuery collection
autosize($('textarea'));
````

## Documentation

http://www.jacklmoore.com/autosize/

## Original package

https://github.com/jackmoore/autosize/

## Author

The Meteor package was created by Spendflow and updated by Kelly Copley (@copleykj) for the new 0.9.0 packaging system. In this fork it has been updated to the latest currently available version of autosize, which is jQuery independent.
