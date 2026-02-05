// input: square feet
// output: acres

export function squareFeetToAcres(feet) {

  // processing
  let acres = 0;

  acres = feet / 43560;

  // output
  return acres;
}