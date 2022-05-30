// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";
import { calcRange } from "./index";
expect.extend(matchers);

it("That's a test!", function () {
  expect(1 + 1).toEqual(2);
});

it("Should calculate range on the same coord", function () {
  // Given
  const startCoord = { x: 0, y: 0 };
  const finalCoord = { x: 0, y: 0 };
  // When
  const calculPath = calcRange(startCoord, finalCoord);
  // Then
  expect(calculPath).toEqual(0);
});

it("Should calculate range with only one move Y", function () {
  // Given
  const startCoord = { x: 0, y: 0 };
  const finalCoord = { x: 0, y: 1 };
  // When
  const calculPath = calcRange(startCoord, finalCoord);
  // Then
  expect(calculPath).toEqual(1);
});

it("Should calculate range with only two move Y", function () {
  // Given
  const startCoord = { x: 0, y: 0 };
  const finalCoord = { x: 0, y: 2 };
  // When
  const calculPath = calcRange(startCoord, finalCoord);
  // Then
  expect(calculPath).toEqual(2);
});

it("Should calculate range with starter different than 0", function () {
  // Given
  const startCoord = { x: 0, y: 1 };
  const finalCoord = { x: 0, y: 2 };
  // When
  const calculPath = calcRange(startCoord, finalCoord);
  // Then
  expect(calculPath).toEqual(1);
});

it("Should calculate range with starter coords > final coords", function () {
  // Given
  const startCoord = { x: 0, y: 3 };
  const finalCoord = { x: 0, y: 2 };
  // When
  const calculPath = calcRange(startCoord, finalCoord);
  // Then
  expect(calculPath).toEqual(1);
});

it("Should calculate range with starter coords negative", function () {
  // Given
  const startCoord = { x: 0, y: -1 };
  const finalCoord = { x: 0, y: 2 };
  // When
  const calculPath = calcRange(startCoord, finalCoord);
  // Then
  expect(calculPath).toEqual(3);
});

it("Should calculate range with starter and final coords negative", function () {
  // Given
  const startCoord = { x: 0, y: -1 };
  const finalCoord = { x: 0, y: -2 };
  // When
  const calculPath = calcRange(startCoord, finalCoord);
  // Then
  expect(calculPath).toEqual(1);
});