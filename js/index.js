const logo = document
                    .querySelector('.logo')
const dropDownMenu = document
                            .querySelector('.drop-down')
const burger = document
                      .querySelector('.drop-down .burger')


function dropUpDown() {
    dropDownMenu.classList.toggle('selected')
}

logo.addEventListener('click',
                      dropUpDown,
                      false)

burger.addEventListener('click',
                        dropUpDown,
                        false)
