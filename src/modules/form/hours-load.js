import {openingHours} from "../../utils/opening-hours.js"
import dayjs from "dayjs"
import { hoursClick } from "./hours-click.js"

const hours = document.getElementById('hours')


export function hoursLoad({date}) {
    
//limpa a lista de horarios
hours.innerHTML = ''



    const opening = openingHours.map((hour) => {
       
        //recupera somente a hora 
       const [scheduleHour] = hour.split(":")
        


        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs()) 
       

        return{ hour, avaible: isHourPast }


       
    })

     //renderizar os horarios
        opening.forEach(({hour, avaible}) => {
            const li = document.createElement("li")

            li.classList.add("hour")
            li.classList.add(avaible ? "hour-available" : "hour-unavailable")

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