import { test, expect } from '@playwright/test';

function fib(n: number): number {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

test.describe('Fibonacci', () => {
  test('fib(5) returns 5', { tag: '@sample' }, () => {
    expect(fib(5)).toBe(5);
  });

  test('fib(10) returns 55', { tag: '@sample' }, () => {
    expect(fib(10)).toBe(55);
  });

  test('fib(0) returns 0', { tag: '@sample' }, () => {
    expect(fib(0)).toBe(0);
  });

  test('fib(1) returns 1', { tag: '@sample' }, () => {
    expect(fib(1)).toBe(1);
  });
});