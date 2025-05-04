import { beforeEach, describe, expect, it, vi } from "vitest";
import randomBetween from "./randomBetween";

const randomSpy = vi.spyOn(Math, 'random');

describe('randomBetween', () => {
  describe('when Math.random() returns 0', () => {
    beforeEach(() => {
      randomSpy.mockClear().mockReturnValue(0);
    });

    it('called with min=1 and max=10 returns 5', () => {
      expect(randomBetween(1, 10)).toBe(1);
      expect(Math.random).toHaveBeenCalledTimes(1);
    });
  });

  describe('when Math.random() returns 0.5', () => {
    beforeEach(() => {
      randomSpy.mockClear().mockReturnValue(0.5);
    });

    it('called with min=1 and max=10 returns 6', () => {
      expect(randomBetween(1, 10)).toBe(6);
      expect(Math.random).toHaveBeenCalledTimes(1);
    });
  });

  describe('when Math.random() returns 0.999999', () => {
    beforeEach(() => {
      randomSpy.mockClear().mockImplementation(() => 0.999999);
    });

    it('called with min=1 and max=10 returns 10', () => {
      expect(randomBetween(1, 10)).toBe(10);
      expect(Math.random).toHaveBeenCalledTimes(1);
    });
  });
});