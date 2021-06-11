import {currying} from "./currying";

describe("test function curring", () => {
    const mockCallback = jest.fn((a: number, b: number, c: number, d: number, e: number) => a + b + c + d + e);
    const hof = currying(mockCallback);
    it("is function", () => {
        expect(typeof currying).toBe("function");
    });
    it("should return function", () => {
        const mockFn = jest.fn();
        expect(typeof currying(mockFn)).toBe("function");
    });
    it("testing function calls", () => {
        hof(1, 2, 3, 4, 5);
        expect(mockCallback).toHaveBeenCalledWith(1, 2, 3, 4, 5);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        hof(2, 3, 4)(5, 6);
        expect(mockCallback).toHaveBeenCalledWith(2, 3, 4, 5, 6);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        hof(3, 4)(5, 6)(7);
        expect(mockCallback).toHaveBeenCalledWith(3, 4, 5, 6, 7);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        hof(4, 5)(6)(7, 8)
        expect(mockCallback).toHaveBeenCalledWith(4, 5, 6, 7, 8);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        hof(5)(6)(7)(8)(9);
        expect(mockCallback).toHaveBeenCalledWith(5, 6, 7, 8, 9);
    });
});
