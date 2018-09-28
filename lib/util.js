
/// in charge of giving direction
export const randomVec = (length) => {
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

export const wrap = (coord, max) => {
  if (coord < 0){
    return max - (coord % max);
  } else if (coord > max) {
    return coord % max;
  } else {
    return coord;
  }
};

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

export const bindKeyHandlers = game => {
  document.addEventListener('keydown', keyDownHandler, false);
  document.addEventListener('keyup', keyUpHandler, false);
};
