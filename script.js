const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    if (pipePosition <= 60 && pipePosition > 0 && marioPosition < 75) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/lose.png'
        mario.style.width = '50px'

        clearInterval(loop);

    }

}, 10)

document.addEventListener("keydown", jump);

const btn = document.querySelector("#refresh")

btn.addEventListener("click", () => {
    location.reload()
})









