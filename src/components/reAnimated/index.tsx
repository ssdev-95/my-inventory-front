import SettingsIcon from '@material-ui/icons/Settings'
import styles from './reanimated.module.scss'

export function ReAnimated() {
    return (
        <div>
            <SettingsIcon className={styles.iconbigger} />
            <SettingsIcon className={styles.iconsmaller} />
        </div>
    )
}