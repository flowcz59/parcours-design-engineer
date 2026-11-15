import {describe, it, expect} from 'vitest';
import {somme} from './somme.js';


describe('somme', () => {
  it('should return the sum of two numbers', () => {
    expect(somme(2, 3)).toBe(5);
    expect(somme(-1, 1)).toBe(0);
    expect(somme(0, 0)).toBe(0);
  });
});