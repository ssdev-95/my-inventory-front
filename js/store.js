const Utils= {
   formatUnity(pName){
     return `${pName} und`
   },
   formatDate(pDate){
     let date = pDate.split('-')

     return `${date[2]}/${date[1]}/${date[0]}`
   },
   formatCategory( value ) {
     value = value.replace(/([A-Z])/, '$1').toLowerCase()
     //console.log(value)
     return value
   }
}

const getData = () => {

    let name = document.querySelector('#product-name')
    let quantity = document.querySelector('#product-quantity')
    let expiration = document.querySelector('#product-expiration')
    let category = document.querySelector('#categories')
    
    let product = {
     name: name.value,
     qtd: Utils.formatUnity(quantity.value),
     valiDate: Utils.formatDate(expiration.value),
     categ: Utils.formatCategory(category.value)
   }

   return product
}

const validare = field => {
  !field ? alert('Fill every field you must young padawan..') : console.log('segue o baile')
}

function pushData() {
  try {
    let { name, qtd, valiDate, categ } = getData()
  
    const table = document.querySelector(`.${categ}-table .body`)

    let tr = document.createElement('tr')
    tr.innerHTML = `
      <td>${name}</td>
      <td>${qtd}</td>
      <td>${valiDate}</td>
      <td><img onclick="removeData('${categ}')" class="delete-btn" src="./assets/drawable/minus.svg" alt="Image minus"/></td>
   `
    table.append(tr)

    document.querySelector('.modal-overlay').classList.toggle('inactive')
    document.querySelector('.modal').innerHTML = ""
    document.querySelector('.modal').classList.toggle('register')
  } catch (e) {
    console.log(e.message)
    alert(`
      404 - Something went wrong...
               Please try again...
    `)
  }
}

function removeData(category) {
   //console.log(category) ok
   //primeiro pegar a categoria
   //com a categoria em maos,
   //pegar a tabela expecifica da categoria
   const table = document.querySelector(`.${category}-table #body`)
   let index
   //console.log(table.innerHTML)
   try {
   table.addEventListener('click', el => {
     index = el.target.parentNode.parentNode.rowIndex
     alert(`${category}-table:[${index}]`)
   })
   } catch (e) {
       console.log(e.message)
       alert(`
       409 - Calm down buddy!
             The Bigbang occurred in a fraction of a second,
             but the dev don't work in that pace.
             I'll fix things soon, trust me i'm an engineer! :/
       `)
   }
   //pegar da tabela o elemento filho que chamou a funcao
   //remover o elemento selecionado
}