import botoesInfo from "./sumario.js";

const botoesContainer = document.getElementById('botoesContainer');

botoesInfo.forEach(info => {
    const botao = document.createElement('button');
    botao.textContent = info.nome;

    botao.style.border = '1px solid #fff';
    botao.style.borderRadius = '50px';
    botao.style.padding = '10px 20px';
    botao.style.margin = '5px'
    botao.style.backgroundColor = 'transparent';
    botao.style.color = '#fff';
    botao.style.cursor = 'pointer';
    botao.addEventListener('mouseenter', () => {
        botao.style.transition = 'background-color 0.5s ease';
        botao.style.backgroundColor = '#fff';
        botao.style.border = '1px solid #fff';
        botao.style.color = '#1c3380';

    });
    botao.addEventListener('mouseleave', () => {
        botao.style.border = '1px solid #fff';
        botao.style.color = '#fff';
        botao.style.backgroundColor = 'transparent';
    });

    botao.addEventListener('click', () => {
        info.funcao();
    });

    botoesContainer.appendChild(botao);
});