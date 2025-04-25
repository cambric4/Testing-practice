import { reverseString } from "./revStr.js"

test('reverse a string', () => {
    expect(reverseString('hello')).toBe('olleh');
})