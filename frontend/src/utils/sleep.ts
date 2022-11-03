export default function sleep(ms: number) {
  return new Promise(
    (resolve) => {
      // eslint-disable-next-line no-promise-executor-return
      return setTimeout(resolve, ms);
    },
  );
}
