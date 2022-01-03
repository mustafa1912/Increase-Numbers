let count = document.querySelectorAll('.count .col'),
    secionCcount = document.querySelector('.secion-count')

function setcount(el) {
    let goal = el.dataset.goal;
    setInterval(() => {
        if (el.textContent == goal) {
            clearInterval
        } else {
            el.textContent++;
        }
    }, 40000 / goal)
}
window.addEventListener(('scroll'), () => {
    if (window.scrollY >= secionCcount.offsetTop) {
        count.forEach((x) => setcount(x))
    }
})