let list = [
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

const monatsName = (datum) => {

    let data = new Date(datum)
    return list[data.getMonth()]
}

console.log(monatsName("2001,3,4"))
console.log(monatsName("2019,12,24"))
console.log(monatsName("1410,07,15"))


