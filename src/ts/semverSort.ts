export function semverSort(argArray: string[]) {
    const inArray = [...argArray];

    function compareElemArray(argA: number | undefined, argB: number | undefined) {
        const firstArg = argA || 0;
        const secondArg = argB || 0;
        return firstArg - secondArg;
    }

    function compareVersion(argA: string, argB: string) {
        const strArrayA = argA.split(".").map((item) => Number(item));
        const strArrayB = argB.split(".").map((item) => Number(item));
        const detectedIndex = strArrayA.findIndex((item, index) =>
            compareElemArray(item, strArrayB[index]) !== 0);
        if (detectedIndex === -1) return -1;
        if (detectedIndex >= strArrayB.length) return 1;
        return strArrayA[detectedIndex] - strArrayB[detectedIndex];
    }

    return inArray.sort(compareVersion);
}
