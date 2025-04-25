import { capitalize } from "./cap.js"

test('capitalizes the first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
    expect(capitalize('')).toBe('');
})