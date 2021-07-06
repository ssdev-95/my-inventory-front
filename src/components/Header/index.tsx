/* eslint-disable @typescript-eslint/no-unused-vars */
import { CButton } from 'src/components/Button'
import DashboardIcon from '@material-ui/icons/Dashboard'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'

import { useNavigation } from 'src/hooks/useNavigation'
import { useAuth } from 'src/hooks/useAuth'

import styles from './header.module.scss'

export function Header() {
    const { changeCurrentComponent } = useNavigation()
    const { user, handleLogout } = useAuth()

    return(
        <header className={styles.header}>
            <DashboardIcon onClick={()=>changeCurrentComponent('ProductList')} />
            <div className={styles.menu}>
                <CButton onClick={()=>changeCurrentComponent('Contact')}>Contact</CButton>
                <CButton onClick={()=>changeCurrentComponent('About')}>About</CButton>
                {
                   user && (
                    <CButton
                      className={styles.exit}
                      onClick={handleLogout}
                    >
                        <MeetingRoomIcon />
                    </CButton>
                   )
                }
            </div>
        </header>
    )
}