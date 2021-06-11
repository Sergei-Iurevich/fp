// type SomeFunction = (...args: number[]) => number;
//
// export function currying(callbackFunction: SomeFunction): any {
//   return function recurFunc(...args: number[]) {
//     if (args.length < callbackFunction.length) {
//       return (...args2: number[]) => recurFunc(...args.concat(args2));
//     }
//     return callbackFunction(...args);
//   };
// }
