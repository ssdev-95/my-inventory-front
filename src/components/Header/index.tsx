/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard'

import { useNavigation } from 'src/hooks/useNavigation'

import styles from './header.module.scss'

export function Header() {
    const { changeCurrentComponent } = useNavigation()

    return(
        <header className={styles.header}>
            <DashboardIcon onClick={()=>changeCurrentComponent('ProductList')} />
            <div className={styles.menu}>
                <Button onClick={()=>changeCurrentComponent('Contact')}>Contact</Button>
                <Button onClick={()=>changeCurrentComponent('About')}>About</Button>
            </div>
        </header>
    )
}