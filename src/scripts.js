/* Função para gerar habilidades dos Jogadores */
function Jogador(nome,){
    this.nome = nome;   
}
/*Função para selecionar os jogadores do time */
function selecionar(){
    let j = document.getElementById('jogo')
    j.style.display='block'
    var gol = document.getElementById("gol");
    var jog1 = gol.options[gol.selectedIndex].text;
    var zag = document.getElementById("zag");
    var jog2 = zag.options[zag.selectedIndex].text;
    var mei = document.getElementById("mei");
    var jog3 = mei.options[mei.selectedIndex].text;
    var ata = document.getElementById("ata");
    var jog4 = ata.options[ata.selectedIndex].text;
    j.innerHTML += `O seu time é formado por ${jog1}, ${jog2}, ${jog3} e ${jog4}`
}

function zoom() {
    document.querySelectorAll('cartas').style.width = '100px'
    
}