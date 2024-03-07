const assert = require('assert');
const { promiseAll, promiseRace, promiseTimeout } = require('../src/promise-utils');

describe('Promise Utilities Tests', () => {
    it('should resolve all promises in the array', async () => {
        const promises = [
            Promise.resolve(1),
            Promise.resolve(2),
            Promise.resolve(3)
        ];

        const result = await promiseAll(promises);
        assert.deepStrictEqual(result, [1, 2, 3]);
    });

    it('should resolve the promise that resolves first', async () => {
        const promises = [
            new Promise(resolve => setTimeout(() => resolve(1), 200)),
            new Promise(resolve => setTimeout(() => resolve(2), 100)),
            new Promise(resolve => setTimeout(() => resolve(3), 300))
        ];

        const result = await promiseRace(promises);
        assert.strictEqual(result, 2);
    });

    it('should resolve after the specified timeout', async () => {
        const timeout = 100;
        const startTime = Date.now();
        await promiseTimeout(timeout);
        const endTime = Date.now();
        const elapsedTime = endTime - startTime;
        assert.ok(elapsedTime >= timeout && elapsedTime < timeout + 20); // Allow 20ms margin of error
    });
});
