const Toast = {
  show() {
    var x = document.getElementById("toast")
    x.className = "show"
    setTimeout(function () {
      x.className = x.className.replace("show", "")
    }, 3000);
  },
}

const Storager = {
    get() {
        return JSON.parse(localStorage.getItem("Products")) || []
    },
    set(products) {
        localStorage.setItem("Products",JSON.stringify(products))
    }
}

const Utils = {
  formatUnity(pQtd) {
    return `${pQtd} und`
  },
  formatDate(pDate) {
    pDate = pDate.split("-");
    let date = `${pDate[2]}/${pDate[1]}/${pDate[0]}`

    //let date = String(pDate).replace(/\D/g,"/")
    return date
  },
  formatCategory(value) {
    value = value.replace(/([A-Z])/, "$1").toLowerCase()
    //console.log(value)
    return value
  },
  formatId(category, index) {
     return `${Utils.formatCategory(category)}0${index}`
  }
}

const Product = {
    all: Storager.get(),
    add(product) {
        Product.all.push(product)
    },
    remove(id) {
        let index
        Product.all.forEach(product => {
            product.id === id ? index=Product.all.indexOf(product) : alert(`
                459 - Cannot resolve element!
                [Unable to retrieve data from Database]
            `)
        })
        Product.all.splice(index, 1)
        Toast.show()
        App.reload()
    }
}

const Form = {
    getValues() {
        pName = document.querySelector('#product-name'),
        pQuantity = document.querySelector('#product-quantity')
        pDate = document.querySelector('#product-expiration')
        pCategory = document.querySelector('#categories')

        return {
            name: pName.value,
            quantity: pQuantity.value,
            expiration: pDate.value,
            category: pCategory.value
        }
    },
    validateData()  {
        let truth = false
        let { pName, pQuantity, pDate, pCategory } = Form.getValues()

        if( pName==!null ||
            pQuantity==!null ||
            pDate==!null ||
            pCategory==!null
        ) {
            truth = true
        } else {
            truth = false
        }

        console.log(truth)
        return truth
    },
    submit(event) {
        event.preventDefault()
        try {
            let { name, quantity, expiration, category } = Form.getValues()
            let product = {
                id: Utils.formatId(category, Product.all.length),
                name: name,
                quantity: Utils.formatUnity(quantity),
                expiration: Utils.formatDate(expiration),
                category: Utils.formatCategory(category)
            }

            Product.add(product)
            App.reload()
        } catch(e) {
            alert('Something went wrong, try again!')
            console.log(e.message)
        }
        Form.closeModal()
    },
    closeModal() {
        document
               .querySelector('.modal-overlay')
               .classList.toggle('inactive')
        document
               .querySelector('.modal')
               .classList.toggle('register')
        document
                .querySelector('.modal')
                .innerHTML = ""
    }
}

const DOM = {
    innerHTMLContainer(product) {
        let html = `
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>${product.expiration}</td>
            <td onclick="Product.remove('${product.id}')">
                <img src="./assets/drawable/minus.svg"/>
            </td>
        `

        return html
    },
    addRegistry(product) {
        let table = document.querySelector(`.${product.category}-table .body`)
        let tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLContainer(product)
        table.append(tr)
    },
    clearRegistry() {
        let tables = document.querySelectorAll('table .body')

        tables.forEach(table => {
            table.innerHTML = ""
        })
    }
}

const App = {
    init() {
        Product.all.forEach(product => {
            DOM.addRegistry(product)
        })

        Storager.set(Product.all)
    },
    reload() {
        DOM.clearRegistry()
        App.init()
    }
}

App.init()