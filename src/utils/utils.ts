export const delay = (time: number = 3000) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
