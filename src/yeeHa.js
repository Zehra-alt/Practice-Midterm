export function yeeHa(num) {

  if (num % 3 === 0 && num % 7 === 0) {
    return "Yee Ha";
  }
  else if (num % 3 === 0) {
    return "Yee";
  }
  else if (num % 7 === 0) {
    return "Ha";
  }
  else {
    return "Nada";
  }

}