const html = document.querySelector('html');
const focusButton = document.querySelector('.app__card-button--foco');
const shortBreakButton = document.querySelector('.app__card-button--curto');
const longBreakButton = document.querySelector('.app__card-button--longo');
const bannerImage = document.querySelector('.app__image');
const text = document.querySelector('.app__title');
const buttons = document.querySelectorAll('.app__card-button');
const inputMusic = document.querySelector('#alterar-musica');
const music = new Audio('/sons/luna-rise-part-one.mp3');


function updateContext(contexto) {

    buttons.forEach(button => {
        button.classList.remove('active');
    });

    html.setAttribute('data-contexto', contexto);
    bannerImage.setAttribute('src', `imagens/${contexto}.png`);
    switch (contexto) {
        case 'foco':
            text.innerHTML = `
            Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>';
            `
            break;

        case 'descanso-curto':
            text.innerHTML = `
            Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pequena pausa.</strong>
            `
            break;

        case 'descanso-longo':
            text.innerHTML = `
            Hora de voltar à superfície<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `
            break;

        default:
            break;
    }
}

function buttonClick(button, contexto) {
    button.addEventListener('click', () => {
        updateContext(contexto);
        button.classList.add('active');
    });
}

inputMusic.addEventListener('change', () => {
    if (inputMusic.checked) {
        music.play();
    } else {
        music.pause();
    }
});

buttonClick(focusButton, 'foco');
buttonClick(shortBreakButton, 'descanso-curto');
buttonClick(longBreakButton, 'descanso-longo');
