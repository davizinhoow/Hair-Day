import {apiConfig} from './api-config.js'


export async function scheduleCancel({id}){

    try{

        await fetch(`${apiConfig.baseURL}/schedules/${id}`,{
            method: 'DELETE'
        })

    }catch(error){
        console.log(error)
        alert('não foi possível cancelar o agendamento')
    }
}