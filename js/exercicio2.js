const idade_motorista = Number(window.prompt("Digite a idade do motorista"));

const habilitacao = window.confirm("Possui habilitação?")

if((idade_motorista >= 18) && habilitacao === true){
    window.alert("Pode dirigir")
} else{
    window.alert("Não pode dirigir")
}