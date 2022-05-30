// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";
import { calcRange } from "./index";
expect.extend(matchers);

it("That's a test!", function () {
  expect(1 + 1).toEqual(2);
});

it("Should calculate range on the same coord", function () {
  const startCoord = { x: 0, y: 0 };
  const finalCoord = { x: 0, y: 0 };
  const calculPath = calcRange(startCoord, finalCoord);
  expect(calculPath).toEqual(0);
});

it("Should calculate range with only one move Y", function () {
  const startCoord = { x: 0, y: 0 };
  const finalCoord = { x: 0, y: 1 };
  const calculPath = calcRange(startCoord, finalCoord);
  expect(calculPath).toEqual(1);
});

it("Should calculate range with only two move Y", function () {
  const startCoord = { x: 0, y: 0 };
  const finalCoord = { x: 0, y: 2 };
  const calculPath = calcRange(startCoord, finalCoord);
  expect(calculPath).toEqual(2);
});

it("Should calculate range with starter different than 0", function () {
  const startCoord = { x: 0, y: 1 };
  const finalCoord = { x: 0, y: 2 };
  const calculPath = calcRange(startCoord, finalCoord);
  expect(calculPath).toEqual(1);
});

it("Should calculate range with starter coords > final coords", function () {
  const startCoord = { x: 0, y: 3 };
  const finalCoord = { x: 0, y: 2 };
  const calculPath = calcRange(startCoord, finalCoord);
  expect(calculPath).toEqual(1);
});

it("Should calculate range with starter coords negative", function () {
  const startCoord = { x: 0, y: -1 };
  const finalCoord = { x: 0, y: 2 };
  const calculPath = calcRange(startCoord, finalCoord);
  expect(calculPath).toEqual(1);
});

it("Should calculate range with starter and final coords negative", function () {
  const startCoord = { x: 0, y: -1 };
  const finalCoord = { x: 0, y: -2 };
  const calculPath = calcRange(startCoord, finalCoord);
  expect(calculPath).toEqual(1);
});