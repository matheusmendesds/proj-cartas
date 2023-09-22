/*Função para selecionar os jogadores do time */
function selecionar(){
    let j = document.getElementById('jogo')
    j.style.display='block'
    var gol = document.getElementById("gol");
    var jog1 = gol.options[gol.selectedIndex].text;
    var zag = document.getElementById("zag");
    var jog2 = zag.options[zag.selectedIndex].text;
    var vol = document.getElementById("vol");
    var jog3 = vol.options[vol.selectedIndex].text;
    var mei = document.getElementById("mei");
    var jog4 = mei.options[mei.selectedIndex].text;
    var ata = document.getElementById("ata");
    var jog5 = ata.options[ata.selectedIndex].text;
    j.innerHTML += `O seu time é formado por ${jog1}, ${jog2}, ${jog3}, ${jog4} e ${jog5}`
    j.innerHTML += `<div id="teste"><p><input type="button" value="Jogar" onclick="jogar()"></p></div>`
}

function jogar(){
  var t = document.getElementById('teste')  
  var g = document.getElementById("gol");
  var att = g.options[g.selectedIndex];
  var optionData = JSON.parse(att.getAttribute("data-optionData"));
  var n = (optionData.nome)
  var r = (optionData.Reflexo)
  var s = (optionData.Saida)
  /* t.innerHTML = "Nome: " + optionData.nome + ", Reflexo: " + optionData.Reflexo + " Saida:" + optionData.Saida;  */
  t.innerHTMl += `Goleiro:${n} , Reflexo:${r} , Saida:${s}`
}

