/* eslint-disable @typescript-eslint/no-unused-vars */
import { CButton } from 'src/components/Button'
import DashboardIcon from '@material-ui/icons/Dashboard'

import { useNavigation } from 'src/hooks/useNavigation'

import styles from './header.module.scss'

export function Header() {
    const { changeCurrentComponent } = useNavigation()

    return(
        <header className={styles.header}>
            <DashboardIcon onClick={()=>changeCurrentComponent('ProductList')} />
            <div className={styles.menu}>
                <CButton onClick={()=>changeCurrentComponent('Contact')}>Contact</CButton>
                <CButton onClick={()=>changeCurrentComponent('About')}>About</CButton>
            </div>
        </header>
    )
}