import { describe, it, expect } from "vitest";
import { somme } from "./somme.js";

describe("somme", () => {
  it("additionne deux nombres positifs", () => {
    expect(somme(2, 3)).toBe(5);
  });

  it("additionne un nombre positif et un nombre négatif", () => {
    expect(somme(5, -2)).toBe(3);
  });

  it("additionne deux nombres négatifs", () => {
    expect(somme(-4, -6)).toBe(-10);
  });

  it("additionne zéro avec un autre nombre", () => {
    expect(somme(0, 7)).toBe(7);
  });
});
