// Dicionário com nomes dos heróis e os links das imagens animadas.
const heroisGIF = {
  "homem-aranha": "https://media1.tenor.com/m/9C-42Fsr6U8AAAAd/spidey.gif",
  "mulher-maravilha": "https://media.tenor.com/68DAFNgDdGEAAAAi/manimarcus.gif",
  "batman": "https://media1.tenor.com/m/IH_TkAC2dQQAAAAC/test.gif",
  "superman": "https://media1.tenor.com/m/lqtcsQ9CY5IAAAAd/starman-superman.gif",
  "pantera-negra": "https://media1.tenor.com/m/3hQez78C2bsAAAAC/black-panther-tchalla.gif",
  "capita-marvel": "https://media1.tenor.com/m/2xG0yexEEY0AAAAC/captain-marvel-marvel-comics.gif",
  "wolverine": "https://media1.tenor.com/m/YnwBhCJD2tYAAAAC/xmen-children-of-the-atom-snikt.gif",
  "thor": "https://media1.tenor.com/m/5x43q90oYGEAAAAC/thor-thor-love-and-thunder.gif"
};


// Função que retorna o nível do herói baseado no xp de cada um deles

function classificarNivel(xp) {
    if (xp < 1000) return "Ferro";

     else if (xp <= 2000) return "Bronze";

     else if (xp <= 5000) return "Prata";

     else if (xp <= 7000) return "Ouro";

     else if (xp <= 8000) return "Platina";

     else if (xp <= 9000) return "Ascendente";

     else if (xp <= 10000) return "Imortal";

     else return "Radiante"; 
        
}


function formatarNome(nome) {
    return nome
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-');
}


// Função principal chamada ao clicar no botão Classificar
function classificarHeroi() {

    const nomeInput = document.getElementById("nomeHeroi").value.trim();

    const xpInput = document.getElementById("xpHeroi").value.trim();

    const resultado = document.getElementById("resultado");

    const imagem = document.getElementById("imagemHeroi");

    const xp = parseInt(xpInput);

    // Validação simples dos campos
    if (!nomeInput || isNaN(xp)) {
        resultado.innerText = "Preencha corretamente o nome e o XP do herói.";
        imagem.style.display = "none";

        return;
    }

    const nomeFormatado = formatarNome(nomeInput);
    const nivel = classificarNivel(xp);

    resultado.innerText = `O Herói de nome ${nomeInput} está no nível de ${nivel}.`;

    // Exibe imagem do herói, se existir no dicionário
    if (heroisGIF[nomeFormatado]) {
        imagem.src = heroisGIF[nomeFormatado];
        imagem.alt = nomeInput;
        imagem.style.display = "block";
    } else {
        imagem.style.display = "none";
    }
}
