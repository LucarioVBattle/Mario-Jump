const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scoreText = document.getElementById('score');
const restartBtn = document.getElementById('restart');

let score = 0;
let isGameOver = false;

/* Função de pulo */
function jump() {
    if (isGameOver) return;

    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 600);
}

/* Loop de colisão */
const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window
        .getComputedStyle(mario)
        .bottom.replace("px", "");

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        isGameOver = true;

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        restartBtn.style.display = 'block';

        clearInterval(scoreLoop);
        clearInterval(loop);
    }

}, 10);

/* Contador de Pontos */
const scoreLoop = setInterval(() => {
    if (!isGameOver) {
        score++;
        scoreText.innerText = score;
    }
}, 100);

/* Reiniciar o jogo */
restartBtn.addEventListener('click', () => {
    location.reload();
});

/* Evento de pulo */
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' || event.code === 'ArrowUp') {
        jump();
    }
});
