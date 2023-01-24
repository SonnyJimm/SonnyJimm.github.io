const sum = (...data) => {
  let sums = data.reduce((acc, curr) => acc + curr, 0);
  return sums;
};

const multiply = (...data) => {
  if (data.length === 0) {
    return 0;
  }
  return data.reduce((acc, curr) => acc * curr, 1);
};

const reverse = (data) => {
  return data.split("").reduce((acc, curr) => curr + acc);
};

const findLongWords = (length, ...data) => {
  return data.filter((str) => str.length > length);
};
