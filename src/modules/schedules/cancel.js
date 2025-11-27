import {scheduleCancel} from '../../services/schedule-cancel.js'
import {schedulesDay} from './load.js'

const periods = document.querySelectorAll('.period')


//evento de click para cada lista
periods.forEach((period) => {
    //captura o evento de clique na lista
    period.addEventListener('click', async(event) =>{

        if(event.target.classList.contains('cancel-icon')){
            //obtem a li pai do elemento clicado
            const item = event.target.closet('li')
            const {id} = item.dataset

        
            //verifica que o id foi selecionado 
            if(id){

                //confirma se o usuario quer remover
                const isConfirm = confirm('quer realmente cancelar esse agendamento?')
            
                //executa o delete
                if(isConfirm){
                   await scheduleCancel({id})
                   schedulesDay() //recarrega a lista de agendamentos
                }
            }
            
        }
    })
})