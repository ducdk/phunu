window.onload = function () {
    console.log('loading')
    setTimeout(()=> {
        this.document.querySelector('.loading-content').classList.add('hidden')
        this.document.querySelector('.click-start').classList.remove('hidden')
    }, 2000)
}

const audio = document.querySelector('.audio')
document.addEventListener('click', play)

function play() {
    this.document.querySelector('.loading').classList.add('hidden')
    this.document.querySelector('.content').classList.remove('hidden')
    audio.play();
}



window.loaded = function () {
    console.log('loading')
}

function removeAllContent() {
    const listTemp = document.querySelectorAll('.content-p')
    listTemp.forEach(item => {
        item.classList.remove('flex')
    })
}

function initData(params) {
    addEventListener('mouseover', function (e) {
        if (e.target.className.includes('circle')) {
            removeAllContent()
            const temp = this.document.querySelector(`.${e.target.attributes.data.value}`)
            temp.classList.add('flex')
        } else {
            removeAllContent()
            this.document.querySelector('.content-6').classList.add('flex')
        }
    });


}

initData()