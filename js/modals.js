const Modal = {
    productRegister: `
        <!--with class="register"-->
        <form action="#" id="registry-form">
            <label for="product-name">Product Name</label>
            <input type="text" name="product-name" id="product-name" size="15" maxlength="30" placeholder="Product"/>
            <label for="product-quantity">Quantity</label>
            <input type="number" name="product-quantity" id="product-quantity" size="9" aria-valuemax="999" placeholder="10"/>
            <label for="categories">Category</label>
            <input type="text" name="categories" id="categories" placeholder="Category"/>
            <p><small>Categories includes Food, Hygiene and Cleaning</br>and it's case variants</small></p>
            <label for="product-expiration">Expiration Date</label>
            <input type="date" name="product-expiration" id="product-expiration"/>
        </form>
        <div class="actions">
            <a class="button cancel" href="#" onclick="Modal.close(event)">cancel</a>
            <a class="button save" href="#"onclick="Form.submit(event)">save</a>
        </div>
    `,

    userLogin:`
    <!--with class="login"-->
    <form action="#" id="login-form">
        <label for="user-name">Username</label>
        <input type="text" name="user-name" id="user-name" size="15" maxlength="30" placeholder="Nick or email"/>
        <label for="user-password">Password</label>
        <input type="password" name="user-password" id="user-password" maxlength="12" size="9" placeholder="Password"/>
        <a href="./signin.html"><p><small>Sign up now!</small></p></a>
    </form>
    <div class="actions">
        <a class="button cancel" href="#" onclick="Modal.close(event)">cancel</a>
        <a class="button save" href="#" >save</a>
    </div>
    `,
    contact: `
    <div class="burger" onclick="Modal.close(event)">
        <div class="rect" id="top"></div>
        <div class="rect" id="bot"></div>
    </div>
    <h3>Contact</h3>
    <a href="https://www.instagram.com/xsallus.dev/" target="_blank" rel="external">
        <img class="logo" id="logo-insta" src="./assets/drawable/instagram.svg" alt="instagram logo">
    </a>
    <a href="https://twitter.com/xSallus_dev" target="_blank" rel="external">
        <img class="logo" id="logo-twitter" src="./assets/drawable/twitter.svg" alt="twitter logo">
    </a>
    <a href="https://www.linkedin.com/in/salomao-vasconcelos/" target="_blank" rel="external">
        <img class="logo" id="logo-linkedin" src="./assets/drawable/linkedin.svg" alt="linkedin logo">
    </a>
    <a href="#">
        <img class="logo" id="logo-mail" src="./assets/drawable/mail.svg" alt="email logo">
    </a>
    <a href="https://github.com/xSallus/MyInventory" target="_blank" rel="external">
        <img class="logo" id="logo-git" src="./assets/drawable/github.svg" alt="github logo">
    </a>
    <a href="#">
        <img class="logo" id="logo-paypal" src="./assets/drawable/paypal.svg" alt="paypal logo">
    </a>
    <a href="https://www.behance.net/salomaosouza">
        <img class="logo" id="logo-behance" src="./assets/drawable/behance.svg" alt="behance logo">
    </a>
    `,
    open(modality, event) {
        event.preventDefault()
        const overlay = document
                               .querySelector('.modal-overlay')
        overlay.classList.toggle('inactive')

        this.config(modality)
        document.querySelector('.drop-down').classList.remove('selected')
        //console.log('oba!')
    },
    close(event) {
        event.preventDefault()
        const overlay = document
                               .querySelector('.modal-overlay')
        const secondClass = document.querySelector('.modal').classList[1]

        overlay.classList.toggle('inactive')
        document.querySelector('.modal').classList.toggle(secondClass)
    },
    config(modality) {
        const modal = document
                             .querySelector('.modal')
        switch(modality){
            case 'prod-reg':
                modal.innerHTML = Modal.productRegister
                modal.classList.toggle('register')
                break
            case 'login':
                modal.innerHTML = Modal.userLogin
                modal.classList.toggle('login')
                break
            case 'contact':
                modal.innerHTML = Modal.contact
                modal.classList.toggle('contact')
                break
            default:
                Alert('404: Option not available!')
                break
        }
    }
}