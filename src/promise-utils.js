// Function to execute promise for all given promises
function promiseAll(promises) {
    return Promise.all(promises);
}

// Function to execute promise for the first resolved promise
function promiseRace(promises) {
    return Promise.race(promises);
}

// Function to create a promise that resolves after a specified time (in milliseconds)
function promiseTimeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = {
    promiseAll,
    promiseRace,
    promiseTimeout
};
