import { Modal, Overlay } from "./base"
import { SigninButton } from "../signin-button"

interface IModalProps {
	toggle: ()=>void;
	isOpen: boolean;
}

function LoginModal({ toggle, isOpen }: IModalProos) {

	return (
		<Overlay isHidden={isOpen} >
		  <Modal>
     		<SigninButton
    		  provider="Google"
    			color="white"
    			background="#f23"
        />
	    	<SigninButton
      		provider="GitHub"
	    		color="white"
    			background="#1c1c1c"
        />
    		<SigninButton
    		  provider="Discord"
    			color="white"
    			background="#33f"
        />
				<button className="close-button" onClick={toggle}>x</button>
		  </Modal>
		</Overlay>
	)
}

export { LoginModal }
