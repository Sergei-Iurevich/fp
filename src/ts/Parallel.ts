type SomeFunction = () => Promise<number>;

export class Parallel {
  numberOfThreads: number;

  constructor(numberOfThreads: number) {
    this.numberOfThreads = numberOfThreads;
  }

  async jobs(...jobsArgs: SomeFunction[]): Promise<number[]> {
    const processArray = [...jobsArgs];
    const resultArray: number[] = [];
    const processStack: Promise<number>[] = [];
    const history = new Set();

    const recurFunc = () => {
      if (processArray.length > 0) {
        while (processStack.length < this.numberOfThreads) {
          const process = processArray.shift();
          if (process) {
            processStack.push(process());
          }
        }

        processStack.forEach((item, indexItem) => {
          if (!history.has(item)) {
            history.add(item);
            item.then((result: number) => {
              resultArray.push(result);
              processStack.splice(indexItem, 1);
              recurFunc();
            });
          }
        });
      }
      return resultArray;
    };
    return recurFunc();
  }
}
