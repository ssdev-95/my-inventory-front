import { Button } from '@material-ui/core'

export function Header() {

    return(
        <header>
            <img src="/drawable/app_icon.svg" alt="My inventory logo" />
            <div>
                <Button className="button">Contact</Button>
                <Button className="button">About</Button>
            </div>
        </header>
    )
}