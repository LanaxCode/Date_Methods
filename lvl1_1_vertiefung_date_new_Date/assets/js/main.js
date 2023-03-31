
// let date1 = new Date()
// let date2 = new Date("September 2, 2019 09:00:00")
// let date3 = new Date(0)
// let date4 = new Date(31556908800)
// let date5 = new Date(86400000)


// document.body.innerHTML = `${date1} <br>${date2} <br>${date4}<br>${date5}`


//====================================
//LVL1_2
//====================================



let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];
let dateNew = new Date("Februar 5 2021 21:05:14")
document.querySelector('div').innerHTML += "<br>" + dateNew
document.querySelector('div').innerHTML += "<br>" + dateNew.getFullYear();
document.querySelector('div').innerHTML += "<br>" + dateNew.getMonth() + " Monat";
document.querySelector('div').innerHTML += "<br>" + dateNew.getDate() + " Tag";
document.querySelector('div').innerHTML += "<br>" + dateNew.getHours() + " Stunde";
document.querySelector('div').innerHTML += "<br>" + dateNew.getMinutes() + " Minute";
document.querySelector('div').innerHTML += "<br>" + wochenTag[dateNew.getDay()];
document.querySelector('div').innerHTML += "<br>" + monate[dateNew.getMonth()];

const clock = document.querySelector('#clock');
const specification = document.querySelector('#specification')

clock.innerHTML = `${wochenTag[1].substring(0, 3)} ${dateNew.getHours()} : ${dateNew.getMinutes()} : ${dateNew.getSeconds()} PM`
