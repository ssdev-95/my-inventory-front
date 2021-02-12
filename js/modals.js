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
            <label for="product-expiration">Expiration Date</label>
            <input type="date" name="product-expiration" id="product-expiration"/>
        </form>
        <div class="actions">
            <a class="button cancel" href="#" onclick="Modal.close()">cancel</a>
            <a class="button save" href="#">save</a>
        </div>
    `,

    userLogin:`
    <!--with class="login"-->
    <form action="#" id="login-form">
        <label for="user-name">Product Name</label>
        <input type="text" name="user-name" id="user-name" size="15" maxlength="30" placeholder="Nick or email"/>
        <label for="user-password">Password</label>
        <input type="password" name="user-password" id="user-password" maxlength="12" size="9" placeholder="Password"/>
    </form>
    <div class="actions">
        <a class="button cancel" href="#" onclick="Modal.close()">cancel</a>
        <a class="button save" href="#">save</a>
    </div>
    `,
    open(modality) {
        const overlay = document
                               .querySelector('.modal-overlay')
        overlay.classList.toggle('inactive')

        this.config(modality)
        //console.log('oba!')
    },
    close() {
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
            case 'user-reg':
            case 'contact':
            default:
                Alert('404: Option not available!')
                break
        }
    }
}