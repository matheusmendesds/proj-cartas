function jogar(){
    let j = document.getElementById('jogo')
    j.style.display='block'
    var select = document.getElementById("ata");
    var opcaoValor = select.options[select.selectedIndex].value;
    j.innerHTML += `O seu time é formado por ${opcaoValor}`
    
}

