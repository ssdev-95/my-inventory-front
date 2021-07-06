import SettingsIcon from '@material-ui/icons/Settings'
import styles from './reanimated.module.scss'

export function ReAnimated() {
    return (
        <div className={styles.animated}>
            <SettingsIcon />
            <SettingsIcon />
        </div>
    )
}