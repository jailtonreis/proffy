/* Procurar o botão*/
document.querySelector("#add-time")
/* clicar no botao */
.addEventListener('click',clonefield)

/*executar a acao*/
function clonefield() {
   
    /*duplicar os campos - que campos?*/
    const fields = document.querySelector('.schedule-item').cloneNode(true)    

/* colocar na página - onde?*/
    document.querySelector('#schedule-items').appendChild(fields) 
}

