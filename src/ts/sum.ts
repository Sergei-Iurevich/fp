type SomeFunction = (arg: number) => SomeFunction;

export function sum(...args: number[]): SomeFunction {
  // if (args.length === 0) {
  //     return 0;
  // }
  const arg = args[0];
  let result = arg;
  let t = 0;

  function recurFunc(b: number) {
    if (t > 0) {
      result = arg;
      t = 0;
    }
    result += b;
    return recurFunc;
  }

  recurFunc.toString = () => {
    t += 1;
    return result;
  };
  return recurFunc;
}
