export function spiral(arg: number[][]) {
    const inArray = [...arg];
    const outArray: number[] = [];

    function reverseArray(array: number[][]) {
        const resultArray = [];
        let mediateArray = [];
        for (let j = 0; j < array[0].length; j++) {
            for (let i = 0; i < array.length; i++) {
                mediateArray.push(array[i][j]);
            }
            resultArray.push(mediateArray);
            mediateArray = [];
        }
        return resultArray.reverse();
    }

    function recurFunc(argArray: number[][]): number[] {
        if (argArray[0].length > 1 && argArray.length > 1) {
            const removeEl = argArray.shift();
            if (Array.isArray(removeEl)) {
                outArray.push(...removeEl);
            }
            return recurFunc(reverseArray(argArray));
        }
        const lastArray = argArray.reduce((previousValue: number[], item: number[]) => previousValue.concat(item), []);
        outArray.push(...lastArray);
        return outArray;
    }

    return recurFunc(inArray);
}

