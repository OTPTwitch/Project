var str = prompt("Введите слово: ")
var strRev = ""
for (i = str.length-1; i >= 0; i--) {
  strRev += str[i]
}
console.log(strRev)