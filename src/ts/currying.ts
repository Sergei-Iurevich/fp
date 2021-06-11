type SomeFunction = (...args: number[]) => number;

export function currying(callbackFunction: SomeFunction) {
    return function recurFunc(...args: number[]) {
        if (args.length < callbackFunction.length) {
            return function (...args2: number[]){
                return recurFunc(...args.concat(args2));
            }
        }
        return callbackFunction(...args);
    }
}

