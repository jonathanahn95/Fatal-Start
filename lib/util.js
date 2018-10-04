
/// in charge of giving direction
export const randomVec = (length) => {
  const deg = 2 * Math.PI * Math.random();
  return scale([Math.sin(deg), Math.cos(deg)], length);
};
//
// export const test = function() {
//   console.log("Hello");
// };
//
export const scale = (vec, m) => {
  return [vec[0] * m, vec[1] * m];
};
//
// // Normalize the length of the vector to 1, maintaining direction.
// export const dir = vec => {
//   const normVec = norm(vec);
//   return scale(vec, 1 / normVec);
// };
//
//
// // Find the length of the vector.
// export const norm = vec => {
//   return dist([0,0], vec);
// };
//
//

export const randomPosition = (maxX, maxY) => {
  //
  const x = maxX * Math.random();
  const y = maxY * 0.5 * Math.random();
  return [x, y];
};

// export const randomPosition = (maxX, maxY) => {
//   const x = (maxX * 2 * Math.random()) - maxX;
//   const y = (maxY * Math.random()) - maxY * 0.5;
//   return [x, y];
// };

export const wrap = (coord, max) => {
  if (coord < 0){
    return 900;
  } else if (coord > max) {
    return coord % max;
  } else {
    return coord;
  }
};
//
/// finds the distance between two objects
export const dist = (pos1, pos2) => {
  return Math.sqrt(
    Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
    // doing the same thing as
    // let dx = pos1[0] - pos2[0]
    // let dy = pos1[1] - pos2[1]
    //
    // Math.sqrt((dx * dx) + (dy * dy))
  );
};
