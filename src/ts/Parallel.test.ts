import {Parallel} from "./Parallel";

describe("testing class Parallel",()=>{
    function flushPromises() {
        return new Promise((resolve) => setImmediate(resolve));
    }
    it("test", async ()=>{
        jest.useFakeTimers();
        // jest.useRealTimers();
        const runner = new Parallel(2);
        // await flushPromises();
        const result = await runner
            .jobs(
                () => new Promise((resolve) => setTimeout(resolve, 10, 1)),
                () => new Promise((resolve) => setTimeout(resolve, 50, 2)),
                () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
                () => new Promise((resolve) => setTimeout(resolve, 90, 4)),
                () => new Promise((resolve) => setTimeout(resolve, 30, 5)),
            );
        // jest.runAllTimers();
        // jest.runOnlyPendingTimers()

        // jest.advanceTimersByTime(1000);
        // await flushPromises();
        // jest.advanceTimersByTime(1000);
        for(let i = 0; i < 8; i++) {
            // jest.advanceTimersByTime(1000);
            // jest.runAllTimers();
            // eslint-disable-next-line no-await-in-loop
            jest.runOnlyPendingTimers()
            // eslint-disable-next-line no-await-in-loop
            await Promise.resolve(); // allow any pending jobs in the PromiseJobs queue to run
        }
        expect(result).toEqual([1,2,3,4,5]);
        // expect(result).toEqual([1,2]);

    })
})
