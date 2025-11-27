import dayjs from "dayjs"   
import {scheduleNew} from '../../services/schedule-new'

const form = document.querySelector('form')
const clientName = document.getElementById('client')
const selectedDate = document.getElementById('date')


//data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")


//Carrega data atual
selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD")

//data mínima
selectedDate.min = dayjs(new Date()).format("YYYY-MM-DD")


form.onsubmit = async (event) => {
    event.preventDefault()

    try{
        //pegando o nome do cliente

        const name = clientName.value.trim()
        
        if(!name){
            return alert('informe o nome do cliente')
        }

        //pega o horario selecionado

        const hourSelected = document.querySelector('.hour-selected')

        if(!hourSelected){
            return alert('informe o horario por favor')
        }


        //recupera somente a hora
        const [hour] = hourSelected.innerText.split(':')

        //insere a hora na data
        const when = dayjs(selectedDate.value).add(hour,"Hour")



        //gera um ID
        const id = new Date().getTime()

        await scheduleNew({
            id,
            name,
            when
        })
    }
    catch(error){
        alert("Não foi póssivel realizar o agendamento!")
        console.log(error)
    }
}