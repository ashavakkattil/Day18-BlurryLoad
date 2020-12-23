const image = document.querySelector('.bg')
const text = document.querySelector('.load-text')

var load = 0

//call the blurring fnction every 30ms
var interval = setInterval(blurring, 30)

function blurring() {
    if (load > 100) {
        clearInterval(interval)
    } else {
        text.innerText = load + '%'
        text.style.opacity = scale(load, 0, 100, 1, 0)
        image.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
        load++
    }
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}