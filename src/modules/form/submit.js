import dayjs from "dayjs"   


const form = document.querySelector('form')
const selectedDate = document.getElementById('date')


//data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")


//Carrega data atual
selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD")

//data mínima
selectedDate.min = dayjs(new Date()).format("YYYY-MM-DD")


form.onsubmit = (event) => {
    event.preventDefault()


    console.log("Enviado!!")
}