import SettingsIcon from '@material-ui/icons/Settings'
import { Inventory } from 'src/@types/inventory'
import styles from './reanimated.module.scss'

export function ReAnimated({ text, children }: Inventory.LoadingProps) {
    return (
        <div className={styles.animationContainer}>
            <div className={styles.animated}>
                <SettingsIcon />
                <SettingsIcon />
            </div>
            <p>{text}</p>
            { children }
        </div>
    )
}