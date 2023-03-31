// let date = new Date("October 23, 2222 13:25:00")
const date = new Date(2222, 9, 23, 13, 25)



// date.setFullYear(2123)
document.body.innerHTML = "<br>" + date + "<br>";
date.setFullYear(2123, 1, 24)
document.body.innerHTML += date + "<br>";
date.setFullYear(2123, 2, 24)
document.body.innerHTML += date + "<br>"
date.setFullYear(2123, 2, 03)


let date2 = new Date()
date2.setDate(date2.getDate() + 30)
document.body.innerHTML += date2 + "<br>"


