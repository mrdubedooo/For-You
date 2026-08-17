const music = document.getElementById("music");
const musicButton = document.querySelector(".music-button");

let playing = false;


/* =========================
   MUSIC
========================= */

function toggleMusic() {

    if (!playing) {

        music.play();

        musicButton.innerHTML = "⏸ Pause Our Song";

        playing = true;

    } else {

        music.pause();

        musicButton.innerHTML = "🎵 Play Our Song";

        playing = false;
    }
}


/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "♥";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        Math.random() * 15 + 10 + "px";

    heart.style.animationDuration =
        Math.random() * 5 + 5 + "s";

    document.querySelector(".hearts").appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 10000);
}


setInterval(createHeart, 700);