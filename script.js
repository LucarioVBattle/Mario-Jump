const mario =  document.querySelector('.mario');
const pipe = document.querySelector ('.pipe')
const clouds = document.querySelector ('.clouds')

const scoreDisplay = document.getElementByID('score')
const restartBtn = Document.getElementById('restartBtn')

let score = 0;
let isGameOver = false;

const jump = () => {
  if (!isGameOver) {
    mario.classList.add('jump');
    setTimeout(() => {
      mario.classList.remove('jump')
    }, 500);
  }
};
document.addEventListener("keydown", (event) => {
  if (event.code === 'space') {
    jump()
  }
});
const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).botton.replace('px', '');
  const cloudsPosition = +window.getComputedStyle(clouds).right.replace('px','');
  if (pipePosition <= 120 && pipePosition > && marioPosition < 80) {
  pipe.style.animation = 'none'
    pipe.style.left = `${pipePosition}px`;
    clouds.style.animation = 'none'
    clouds.style.right
