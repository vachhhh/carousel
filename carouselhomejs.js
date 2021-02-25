let content = document.getElementById('carousel_content_in_item_pic_content')
let dots = document.getElementById('dots_content')

let prev = document.getElementById('prevtn')
let next = document.getElementById('nexttn')

let pause = document.getElementById('pausebtn')
let play = document.getElementById('playbtn')


let arr = ['<img src="./images/1.gif" alt="">', '<img src="./images/2.gif" alt="">', '<img src="./images/3.gif" alt="">', '<img src="./images/4.gif" alt="">', '<img src="./images/5.gif" alt="">', '<img src="./images/6.gif" alt="">'];
let count = 0

content.innerHTML = arr[0]



let intrevFunc

function carouselPicIntervalFunc() {
    count++
    content.innerHTML = ''

    if (count > arr.length - 1) {
        count = 0
    }
    content.innerHTML = arr[count]
        // console.log(count)
}



prev.addEventListener('click', function() {
    clearInterval(intrevFunc)

    count--

    content.innerHTML = ''

    if (count < 0) {
        count = arr.length - 1
    }
    content.innerHTML = arr[count]
        // console.log(count)

})


next.addEventListener('click', function() {
    clearInterval(intrevFunc)

    count++

    content.innerHTML = ''

    if (count > arr.length - 1) {
        count = 0
    }

    content.innerHTML = arr[count]
        // console.log(count)
})


play.addEventListener('click', function() {
    intrevFunc = setInterval(carouselPicIntervalFunc, 1000)
})

pause.addEventListener('click', function() {
    clearInterval(intrevFunc)
})

function dotscurrent(id) {
    clearInterval(intrevFunc)

    content.innerHTML = ''
    for (let i = 0; i < arr.length; i++) {
        if (i == id) {
            content.innerHTML = arr[i]
        }
    }
}


dots.innerHTML = arr.map((val, ind) => {


    return (
        `<div id='dots_item${ind}' onclick='dotscurrent(${ind})' >
            
        </div>`
    )

})
dots.innerHTML = dots.innerHTML.replaceAll(',', '')