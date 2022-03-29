import { ModalBase, Overlay } from "./base"
import { SigninButton } from "../signin-button"

interface IModalProps {
	toggle: () => void;
	isOpen: boolean;
}

function LoginModal({ toggle, isOpen }: IModalProps) {

	return (
		<Overlay isOpen={isOpen} >
			<ModalBase>
				<SigninButton
					provider="Google"
					background="#f23"
					toggle={toggle}
				/>
				<SigninButton
					provider="GitHub"
					background="#1c1c1c"
					toggle={toggle}
				/>
				<SigninButton
					provider="Discord"
					background="#33f"
					toggle={toggle}
				/>
				<button className="close-button" onClick={toggle}>
					<span>x</span>
				</button>
			</ModalBase>
		</Overlay>
	)
}

export { LoginModal }
