const dia_semana = Number(window.prompt("Qual dia da semana? [1-7]"))

if(dia_semana === 1){
    window.alert("Domingo")
} else if(dia_semana === 2){
    window.alert("Segunda-feira")
} else if(dia_semana === 3){
    window.alert("Terça-feira")
} else if(dia_semana === 4){
    window.alert("Quarta-feira")
} else if(dia_semana === 5){
    window.alert("Quinta-feira")
} else if(dia_semana === 6){
    window.alert("Sexta-feira")
} else if(dia_semana === 7){
    window.alert("Sábado")
} else{
    window.alert("Dia não reconhecido")
}