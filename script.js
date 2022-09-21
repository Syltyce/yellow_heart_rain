const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn_2");

btn.addEventListener('click', event => {
    setInterval(createHeart, 0);
})

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";

    heart.innerText = "💛";

    document.body.appendChild(heart);

    setTimeout(() =>{
        heart.remove();
    }, 3000);
}

