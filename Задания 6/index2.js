var a = 0,
  b = 0;
var max = 6;
var c = "",
  d = "";
while (a < max) {
  c = "";
  d = "";
  for (b = 0; b < max - a; b++) c += " ";
  for (b = 0; b < 2 * a + 1; b++) d += "*";
  console.log(c + d);
  a++;
}