import { ModalBase, Overlay } from "./base"
import { SigninButton } from "../signin-button"

interface IModalProps {
	toggle: () => void;
	isOpen: boolean;
}

function LoginModal({ toggle, isOpen }: IModalProps) {

	return (
		<Overlay isHidden={isOpen} >
			<ModalBase>
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
			</ModalBase>
		</Overlay>
	)
}

export { LoginModal }
