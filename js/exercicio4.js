const dia_semana = Number(window.prompt("Qual dia da semana? [1-7]"))

switch (dia_semana) {
    case 1:
        window.alert("Domingo")
        break;

    case 2:
        window.alert("Segunda-feira")
        break;

    case 3:
        window.alert("Terça-feira")
        break;

    case 4:
        window.alert("Quarta-feira")
        break;
            
    case 5:
        window.alert("Quinta-feira")
        break;

    case 6:
        window.alert("Sexta-feira")
        break;    

    case 7:
        window.alert("Sábado")
        break;

    default:
        window.alert("Dia não reconhecido")
        break;
}