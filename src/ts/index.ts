import { Parallel } from "./Parallel";

(async function xxx() {
  const runner = new Parallel(3);
  console.log(
    await runner.jobs(
      () => new Promise((resolve) => setTimeout(resolve, 10, 1)),
      () => new Promise((resolve) => setTimeout(resolve, 50, 2)),
      () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
      () => new Promise((resolve) => setTimeout(resolve, 90, 4)),
      () => new Promise((resolve) => setTimeout(resolve, 30, 5))
    )
  );
})();
