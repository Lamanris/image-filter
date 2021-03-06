let blur = document.querySelector('.blur')
let sepia = document.querySelector('.sepia')
let invert = document.querySelector('.invert')
let filterImg = document.querySelector('.filter-img')
let filterInput = document.querySelector('#filterInput')
let inputNum = document.querySelector('.input-num')

changeFilter('blur')

let currentEffect = 'blur'
filterInput.addEventListener('input', () => {
    if (currentEffect === 'blur') blurEffect()
    if (currentEffect === 'sepia') sepiaEffect()
    if (currentEffect === 'invert') invertEffect()
    inputNum.textContent = `${filterInput.value}%`
})
blur.addEventListener('click', () => {
    // blurEffect()
    // currentEffect ='blur'
    changeFilter('blur')
})
sepia.addEventListener('click', () => {
    // sepiaEffect()
    // currentEffect ='sepia'
    changeFilter('sepia')
})
invert.addEventListener('click', () => {
    // invertEffect()
    // currentEffect ='invert'
    changeFilter('invert')
})
// function blurEffect () {
//     filterImg.style.filter = `blur(${filterInput.value}px)`
// }
// function sepiaEffect () {
//     filterImg.style.filter = `sepia(${filterInput.value}%)`
// }
// function invertEffect () {
//     filterImg.style.filter = `invert(${filterInput.value}%)`
// }

function changeFilter (filterType) {
    filterInput.value = 0
    filterImg.style.filter = 'none'
    inputNum.textContent = '0%'
    filterInput.addEventListener('input', () => {
        if (filterType === 'blur') {
            filterImg.style.filter = `${filterType}(${filterInput.value}px)`
        }
        inputNum.textContent = `${filterInput.value}%`
        filterImg.style.filter = `${filterType}(${filterInput.value}%)`
    })
}






