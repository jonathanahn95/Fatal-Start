
/// in charge of giving direction
export const randomVec = (length) => {
  console.log(length)
  const deg = 2 * Math.PI * Math.random();
  return scale([Math.sin(deg), Math.cos(deg)], length);
};


const  scale = (vec, m) => {
  return [vec[0] * m, vec[1] * m];
};


export const randomPosition = (maxX, maxY) => {
  const x = maxX * Math.random();
  const y = maxY * Math.random();
  return [x, y];

};
