import * as assert from 'assert';

describe('Unit Tests', () => {
    it('Math operations should work', () => {
        assert.strictEqual(2 + 2, 4);
        assert.strictEqual(10 - 5, 5);
        assert.strictEqual(3 * 3, 9);
    });

    it('String operations should work', () => {
        assert.strictEqual('hello'.toUpperCase(), 'HELLO');
        assert.strictEqual('WORLD'.toLowerCase(), 'world');
        assert.strictEqual('test'.length, 4);
    });

    it('Array operations should work', () => {
        const arr = [1, 2, 3];
        assert.strictEqual(arr.length, 3);
        assert.strictEqual(arr[0], 1);
        assert.deepStrictEqual(arr.concat([4]), [1, 2, 3, 4]);
    });

    it('Object operations should work', () => {
        const obj = { name: 'test', value: 42 };
        assert.strictEqual(obj.name, 'test');
        assert.strictEqual(obj.value, 42);
        assert.ok(Object.keys(obj).includes('name'));
    });

    it('Boolean logic should work', () => {
        assert.strictEqual(true && true, true);
        assert.strictEqual(true && false, false);
        assert.strictEqual(false || true, true);
        assert.strictEqual(!true, false);
    });

    it('Type checking should work', () => {
        assert.strictEqual(typeof 'string', 'string');
        assert.strictEqual(typeof 42, 'number');
        assert.strictEqual(typeof true, 'boolean');
        assert.strictEqual(typeof {}, 'object');
    });

    it('Promise operations should work', async () => {
        const result = await Promise.resolve(42);
        assert.strictEqual(result, 42);

        const delayed = await new Promise((resolve) =>
            setTimeout(() => resolve('delayed'), 10)
        );
        assert.strictEqual(delayed, 'delayed');
    });

    it('Error handling should work', () => {
        assert.throws(() => {
            throw new Error('Test error');
        }, Error);

        assert.doesNotThrow(() => {
            return 'no error';
        });
    });
});
