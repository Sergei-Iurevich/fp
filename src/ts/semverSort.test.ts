import {semverSort} from "./semverSort";

describe("testing function semverSort", () => {
    it("test for data set №1", () => {
        const inArray = ["1.0.5", "2.5.0", "0.12.0", "1", "1.23.45",
            "1.4.50", "1.2.3.4.5.6.7"];
        const outArray = ["0.12.0", "1", "1.0.5", "1.2.3.4.5.6.7", "1.4.50", "1.23.45", "2.5.0"];
        expect(semverSort(inArray)).toEqual(outArray);
    });
    it("test for data set №2", () => {
        const inArray = ["1.0.0.0.0.0", "2.5.0", "1"];
        const outArray = ["1", "1.0.0.0.0.0", "2.5.0"];
        expect(semverSort(inArray)).toEqual(outArray);
    });


});
