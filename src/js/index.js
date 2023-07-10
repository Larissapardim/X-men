/* Quando passar o mouse em cima do persnagem na listagem, deve ser selecionado
Quando passar o mouser no personagem, alterar a imagem e nome do personagem grande */

const personagens = document.querySelectorAll('.personagem');
 //adicionar mais elementos sem precisar alterar o código 

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'}); 
        }
        //console.log('mouse entrou na LI');

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado') 

        personagem.classList.add('selecionado'); 

        //trocar nome dos personagens selecionados

        const imagemPersonagemGrande = document.querySelector('.personagem-grande'); 

        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`; 

        //alterar o nome do objeto na tela em vista

        const nomePersonagem = document.getElementById('nome-personagem'); 

        nomePersonagem.innerText = personagem.getAttribute('data-name')

        //Altera texto personagem
        const descricaoPersonagem = document.getElementById('descricao-personagem'); 
        descricaoPersonagem.innerText = personagem.getAttribute('data-description'); 

    })
}) 

