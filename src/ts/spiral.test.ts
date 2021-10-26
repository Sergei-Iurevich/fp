import { spiral } from "./spiral";

describe("testing function spiral", () => {
  it("test for data set №1", () => {
    const inputArray = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
    ];
    const outputArray = [
      0, 1, 2, 3, 4, 9, 14, 19, 18, 17, 16, 15, 10, 5, 6, 7, 8, 13, 12, 11,
    ];
    expect(spiral(inputArray)).toEqual(outputArray);
  });
  it("test for data set №2", () => {
    const inputArray = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24],
    ];
    const outputArray = [
      0, 1, 2, 3, 4, 9, 14, 19, 24, 23, 22, 21, 20, 15, 10, 5, 6, 7, 8, 13, 18,
      17, 16, 11, 12,
    ];
    expect(spiral(inputArray)).toEqual(outputArray);
  });
  it("test for data set №3", () => {
    const inputArray = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];
    const outputArray = [0, 1, 2, 5, 8, 7, 6, 3, 4];
    expect(spiral(inputArray)).toEqual(outputArray);
  });
  it("test for data set №4", () => {
    const inputArray = [
      [0, 1],
      [2, 3],
    ];
    const outputArray = [0, 1, 3, 2];
    expect(spiral(inputArray)).toEqual(outputArray);
  });
  it("test for data set №5", () => {
    const inputArray = [[0, 1]];
    const outputArray = [0, 1];
    expect(spiral(inputArray)).toEqual(outputArray);
  });
  it("test for data set №6", () => {
    const inputArray = [[0]];
    const outputArray = [0];
    expect(spiral(inputArray)).toEqual(outputArray);
  });
});
