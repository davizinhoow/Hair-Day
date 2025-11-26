import { hoursLoad } from "../form/hours-load.js"

const selectDate = document.getElementById('date')


export function schedulesDay() {

    //obtem a data do imput
    const date = selectDate.value

    //renderiza horas disponiveis
    hoursLoad({date})
}