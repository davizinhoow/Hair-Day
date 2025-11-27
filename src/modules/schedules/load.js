import { hoursLoad } from "../form/hours-load.js"
import {scheduleFetchByDay} from '../../services/schedule-fetch-by-day.js'
const selectDate = document.getElementById('date')
import {scheduleShow} from '../schedules/show.js'

export async function schedulesDay() {

    //obtem a data do input
    const date = selectDate.value


    //busca na API os agendamentos 
    const dailySchedules = await scheduleFetchByDay(date) || []
 

    //exibe os agendamentos 
    scheduleShow({dailySchedules})



    //renderiza horas disponiveis
    hoursLoad({date, dailySchedules})
}