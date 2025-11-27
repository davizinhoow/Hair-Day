import {openingHours} from "../../utils/opening-hours.js"
import dayjs from "dayjs"
import { hoursClick } from "./hours-click.js"
import { scheduleShow } from "../schedules/show.js"

const hours = document.getElementById('hours')


export function hoursLoad({date, dailySchedules}) {
    
//limpa a lista de horarios
hours.innerHTML = ''

    //obtem a lista de todos os horarios ocupados
    const unavailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"))
    

    const opening = openingHours.map((hour) => {
       
        //recupera somente a hora 
       const [scheduleHour] = hour.split(":")
        

        //adiciona a hora para ver se está no passado
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs()) 
       
        const available = !unavailableHours.includes(hour) & isHourPast

        return{ hour, available }


       
    })

     //renderizar os horarios
        opening.forEach(({hour, available}) => {
            const li = document.createElement("li")

            li.classList.add("hour")
            li.classList.add(available ? "hour-available" : "hour-unavailable")

            li.textContent = hour


            if(hour === "9:00"){
                hoursHeadAdd("Manhã")
            }
            else if(hour === "13:00"){
                hoursHeadAdd("Tarde")
            }
            else if (hour === "18:00"){
                hoursHeadAdd("Noite")
            }


            hours.append(li)
        })


        //adiciona o evento de clique nos horarios disponiveis
        hoursClick()
}





function hoursHeadAdd(title){
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title


    hours.append(header)
}