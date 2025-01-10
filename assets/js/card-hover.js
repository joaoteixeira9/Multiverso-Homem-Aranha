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