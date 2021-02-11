const Modal = {
    productRegister: `
        <!--with class="register"-->
        <form action="#" id="registry-form">
            <div class="div">
                <label for="product-name">Product Name</label>
                <input type="text" name="product-name" id="product-name" size="15" maxlength="30" placeholder="Product"/>
                <label for="product-quantity">Quantity</label>
                <input type="number" name="product-quantity" id="product-quantity" size="9" aria-valuemax="999" placeholder="10"/>
            </div>
            <div class="div">
                <label for="categories">Category</label>
                <input type="text" name="categories" id="categories" placeholder="Category"/>
                <label for="product-expiration">Expiration Date</label>
                 <input type="date" name="product-expiration" id="product-expiration"/>
            </div>
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
        console.log('oba!')
    },
    close() {
        const overlay = document
                               .querySelector('.modal-overlay')
        overlay.classList.toggle('inactive')
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
            case 'user-reg':
            default:
                console.log('404: Option not available!')
                break
        }
    }
}