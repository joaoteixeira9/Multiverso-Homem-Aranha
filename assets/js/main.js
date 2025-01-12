function SobreMouse(){
    this.classList.add('s-card-hovered');
    document.body.id = `${this.id}-hovered`;
}

function SaidaMouse(){
    this.classList.remove('s-card-hovered');
    document.body.id = '';
}

function AddEventosParaCards(){
    const cardElementos = document.getElementsByClassName('s-card');
    for(let i = 0; i < cardElementos.length; i++){
        const card = cardElementos[i];
        card.addEventListener('mouseenter', SobreMouse)
        card.addEventListener('mouseleave', SaidaMouse)
    }
}

document.addEventListener("DOMContentLoaded", AddEventosParaCards, false);

function SelecionarItemCarrosel(selecionarElementoBotao){
    const selecionarItem = selecionarElementoBotao.id;
    const carrosel = document.querySelector('.s-carrosel-cards');
    const transform = carrosel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    const rotateYDeg = -120 * (Number(selecionarItem)-1);
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);
    carrosel.style.transform = newTransform;

    const botoes = document.querySelectorAll('.s-controlador-botao');
    botoes.forEach(botao => {
        botao.classList.remove('s-controlador-botao-ativo');
    });
    selecionarElementoBotao.classList.add('s-controlador-botao-ativo');
}