function multiples(num) {
  const n = num;

  const GM3 = Math.ceil((n - 3) / 3) * 3; // Greatest multiple of 3
  const GM5 = Math.ceil((n - 5) / 5) * 5; // Greatest multiple of 5
  const GMOverlaping = Math.ceil((n - 15) / 15) * 15; // Greatest multiple of overlaping numbers (15 Because LCM(3, 5) = 15)

  const sum3 = GM3 / 3 * (GM3 + 3) / 2; // Sum of all multiples of 3 below n
  const sum5 = GM5 / 5 * (GM5 + 5) / 2; // Sum of all multiples of 5 below n
  const sumOverlaping = GMOverlaping / 15 * (GMOverlaping + 15) / 2; // Sum of all overlaping numbers below n;

  return sum3 + sum5 - sumOverlaping;
}

multiples(1000); // -> 233168