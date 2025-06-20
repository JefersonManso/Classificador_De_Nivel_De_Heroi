# Classificador de Nível de Herói

## 📌Descrição

Este projeto é uma aplicação web simples que classifica heróis com base em seu XP
(pontos de experiẽncia) e exibe o nível correspondente com uma imagem animada do herói.

## ⚙️Funcionalidades

- Permite ao usuário digitar o nome do herói e seu XP.
- Classifica o nível do herói com base no XP informado.
- Exibe uma imagem animada (GIF) do herói, caso esteja disponível no dicionário de imagens.
- Validação básica para garantir que os campos sejam preenchidos corretamente.
- Interface com design responsivo e fundo com gradiente escuro para melhor visualização.


## 🧠Tecnologias Utilizadas

- HTML5
- CSS3 (com gradiente de fundo e estilos para inputs, botões e imagens)
- JavaScript (para lógica de classificação e manipulação do DOM)

## 🛠️Como Usar

1. Abra o arquivo `index.html` no navegador.
2. Insira o nome do herói (exemplo: Thor, Homem-Aranha).
3. Insira o XP do herói (número).
4. Clique no botão **Classificar**.
5. Veja o nível do herói e a imagem animada correspondente (se disponível).

## 🦸‍♂️Heróis Disponíveis

| Nome do Herói        | Nome a ser digitado (aceita variações)         |
|----------------------|-------------------------------------------------|
| Homem-Aranha         | homem aranha / homem-aranha                     |
| Mulher-Maravilha     | mulher maravilha / mulher-maravilha             |
| Batman               | batman                                          |
| Superman             | superman                                        |
| Pantera Negra        | pantera negra / pantera-negra                   |
| Capitã Marvel        | capita marvel / capitã marvel                   |
| Wolverine            | wolverine                                       |
| Thor                 | thor                                            |


## 📁Estrutura do Projeto

- `index.html`: arquivo principal com a estrutura da página.
- `style.css`: estilo para layout, cores e posicionamento.
- `script.js` lógica para classificar o nível e manipular as imagens.

## ✍️Observações

- Os nomes dos heróis devem ser digitados corretamente para que a imagem apareça com ou sem acentuação,
já que o sistema faz uma normalização simples do nome.
- Algumas imagens são GIFs externos vinculados via URLs, então é necessário conexão com a internet
para exibi-las.
- O projeto pode ser expandido para adicionar mais heróis, níveis, ou modos de visualização.

## 🎯Objetivo

Este projeto foi criado comfins didáticos, para reforçar os conceitos de lógica de programação,
manipulação de DOM e uso básico de HTML/CSS/JS.

💡Feito por quem esa sempre aprendendo!