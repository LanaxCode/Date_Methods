const myDiv = document.querySelector('div')

let date = new Date()


const output = () => {
    myDiv.innerHTML = `${date.getDate()} /${date.getMonth() + 1}/${date.getFullYear()}`
}

output()

