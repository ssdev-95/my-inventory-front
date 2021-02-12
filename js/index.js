const logo = document.querySelector('.logo')
const dropDownMenu = document.querySelector('.drop-down')

function dropToDown() {
    let dropPosition = window.getComputedStyle(dropDownMenu).getPropertyValue('top')
    const position = ['translateY(180px)',
                      'translateY(-180px)']
    //console.log(dropPosition)
    switch(dropPosition) {
        case '-180px':
            dropDownMenu.style.setProperty('transform', position[0])
            break
        case '0px':
            dropDownMenu.style.setProperty('transform', position[1])
            break
        default:
            alert(`Something gone wrong.
                   Try again later.`)
            break
    }
}

logo.addEventListener('click', dropToDown, false)

