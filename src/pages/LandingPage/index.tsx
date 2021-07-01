import { Button } from '@material-ui/core'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow'
import { useTheme } from "src/hooks/useTheme"
import styles from 'src/pages/LandingPage/landing.module.scss'
import colors from 'src/colors.json'

export function LandingPage() {
    const { theme } = useTheme()

    return (
        <div
          className={`${styles.landing_container} ${theme==='light'?styles.light:styles.dark}`}
          style={{ 
            background: theme==='light' ? colors.background.light : colors.background.dark
          }}
        >
            <div>
              <h1>My Inventory</h1>
              <p>Kitchens management made easy.</p>
            </div>
            <Button>
              <span>Get started today</span>
              <DoubleArrowIcon />
            </Button>
        </div>
    )
}