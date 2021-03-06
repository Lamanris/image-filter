let blur = document.querySelector('.blur')
let sepia = document.querySelector('.sepia')
let invert = document.querySelector('.invert')
let filterImg = document.querySelector('.filter-img')
let filterInput = document.querySelector('#filterInput')
let inputNum = document.querySelector('.input-num')


changeFilter('blur')

blur.addEventListener('click', () => {
    changeFilter('blur')
})
sepia.addEventListener('click', () => {
    changeFilter('sepia')
})
invert.addEventListener('click', () => {
    changeFilter('invert')
})
function changeFilter (filterType) {
    filterInput.value = 0
    filterImg.style.filter = 'none'
    inputNum.textContent = '0%'
    filterInput.addEventListener('input', () => {
        if (filterType === 'blur') {
            filterImg.style.filter = `${filterType}(${filterInput.value}px)`
            inputNum.textContent = `${filterInput.value}%`
        }
        filterImg.style.filter = `${filterType}(${filterInput.value}%)`
    })
}






