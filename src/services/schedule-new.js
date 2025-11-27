import {apiConfig} from './api-config.js'


export async function scheduleNew({id,name,when}){
    try{

        const response = await fetch (`${apiConfig.baseURL}/schedules`,{
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id, name, when})
        })

        // CRÍTICO: Verifica se o status HTTP é de sucesso (200-299)
        if (!response.ok) {
            // Lança um erro se a resposta não for OK (ex: 404, 500)
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || `Erro do servidor: ${response.status}`);
        }

        alert('Agendamento realizado com sucesso')
    }catch(error){
        console.log(error.message)
        alert('não foi possível agendar, tente novamente mais tarde')
    }
}