<h1 align="center">Welcome to One Dionys - Promise Utilities! 👋 </h1>

<p align="center">A set of utility functions for working with Promise such as all, race, and resolve. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-promise-utilities?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-promise-utilities?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-promise-utilities?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-promise-utilities?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-promise-utilities.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-promise-utilities?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-promise-utilities?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```javascript
const { promiseAll, promiseRace, promiseTimeout } = require('promise-utilities');

const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

// Example of using promiseAll
promiseAll(promises).then(result => {
    console.log('All promises resolved:', result);
});

// Example of using promiseRace
promiseRace(promises).then(result => {
    console.log('First resolved promise:', result);
});

// Example of using promiseTimeout
const timeout = 1000;
promiseTimeout(timeout).then(() => {
    console.log('Timeout reached after', timeout, 'milliseconds');
});
```

#### Explanation

* `promiseAll(promises)`: Resolves all promises in the given array and returns a new promise that resolves with an array of results.
* `promiseRace(promises)`: Resolves the promise that resolves first in the given array and returns a new promise.
* `promiseTimeout(ms)`: Creates a promise that resolves after the specified time (in milliseconds).

#### Return Value

* `promiseAll`: Returns a promise that resolves with an array containing the results of all input promises.
* `promiseRace`: Returns a promise that resolves with the value of the first input promise to resolve.
* `promiseTimeout`: Returns a promise that resolves after the specified timeout.

## 📆 Release Date

* v1.0.0 : 07 March 2024
* v1.0.1 : 11 March 2024
* v4.0.0 : 11 March 2024
* v4.0.1 : 13 March 2024
* v4.0.2 : 18 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - Promise Utilities is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - Promise Utilities? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**
