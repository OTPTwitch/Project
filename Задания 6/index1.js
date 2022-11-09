let massiv = []
let week = ["понедельник","вторник","среда","четверг","пятница","суббота","воскресенье"]
let day = "вторник"
let indexWeek = week.indexOf(day)
for (let i = 1; i < 32; i++){
  massiv.push(i);
}
for (let elem of massiv){
  const y = (indexWeek + elem - 1) % 6
  console.log(`${elem} января, ${week[y]}`)
}