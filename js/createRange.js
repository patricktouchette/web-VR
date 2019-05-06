export const createRange = ({ qty, start = 0 }) => {
  const range = Array(qty)
    .fill()
    .map((v, i) => i + start);
  return range;
};
