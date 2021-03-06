let blur = document.querySelector('.blur')
let sepia = document.querySelector('.sepia')
let invert = document.querySelector('.invert')
let filterImg = document.querySelector('.filter-img')
let filterInput = document.querySelector('#filterInput')

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
    filterInput.addEventListener('input', () => {
        if (filterType === 'blur') {
            filterImg.style.filter = `${filterType}(${filterInput.value}px)`
        }
        filterImg.style.filter = `${filterType}(${filterInput.value}%)`
    })
}




