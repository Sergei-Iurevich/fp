import { sum } from "./sum";

describe("testing function sum", () => {
  it("is function", () => {
    expect(typeof sum).toBe("function");
  });
  it("function call with no arguments", () => {
    expect(sum()).toBe(0);
  });
  it("checking function calls", () => {
    const sum0 = sum(0);
    expect(sum0(1).toString()).toBe(1);
    expect(sum0(1)(2).toString()).toBe(3);
    expect(sum0(3)(4)(5).toString()).toBe(12);
    const sum3 = sum(3);
    expect(sum3(5).toString()).toBe(8);
    expect(sum3(6).toString()).toBe(9);
  });
});
