export function mowTime(width, length, speed) {

  // processing
  let area = 0;
  let minutes = 0;

  area = width * length;
  minutes = area / speed;

  // output
  return minutes;
}