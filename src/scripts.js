/* Função para gerar habilidades dos Jogadores */
function Jogador(nome,passe,chute){
    this.nome = nome; 
    this.passe = passe;
    this.chute = chute;  
}
var um = new Jogador("João",60,80)
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
}

function zoom() {
    document.querySelectorAll('cartas').style.width = '100px'

}
/*
// Lista de jogadores pré-definidos
var listaJogadores = ["Messi", "Ronaldo", "Neymar", "Mbappé", "Salah"];

// Função para selecionar os jogadores
function selecionarTime(numMaxJogadores) {
  var time = []; // array para armazenar os jogadores selecionados
  var numJogadores = 0;

  while (numJogadores < numMaxJogadores) {
    // Exibir a lista de jogadores disponíveis
    console.log("Lista de jogadores disponíveis:");
    for (var i = 0; i < listaJogadores.length; i++) {
      console.log(i + 1 + ". " + listaJogadores[i]);
    }

    var escolha = parseInt(prompt("Escolha o número do jogador:"));

    // Verificar se o número escolhido é válido
    if (escolha >= 1 && escolha <= listaJogadores.length) {
      var jogadorSelecionado = listaJogadores[escolha - 1];

      // Verificar se o jogador já foi selecionado anteriormente
      if (!time.includes(jogadorSelecionado)) {
        time.push(jogadorSelecionado); // Adicionar jogador ao time
        numJogadores++;
        console.log("Jogador selecionado: " + jogadorSelecionado + "\n");
      } else {
        console.log("Esse jogador já foi selecionado. Escolha outro jogador.\n");
      }
    } else {
      console.log("Número inválido. Escolha um número válido.\n");
    }
  }

  return time;
}
var numMaxJogadores = parseInt(prompt("Digite o número máximo de jogadores no time:"));
var timeFinal = selecionarTime(numMaxJogadores);

console.log("O time formado é: " + timeFinal.join(", "));


Neste exemplo, a lista de jogadores pré-definidos é armazenada na variável `listaJogadores`. A função `selecionarTime` é responsável por permitir ao usuário selecionar jogadores dessa lista. O usuário pode escolher o número do jogador e esse número é verificado para garantir que é válido. Se o número for válido e o jogador ainda não foi selecionado, ele é adicionado ao array `time`. Caso contrário, uma mensagem de erro é exibida. O processo continua até que o número de jogadores selecionados atinja o número máximo fornecido pelo usuário. Finalmente, o time formado é exibido na tela.
sex, 3:58 PM

*/

