import { useHistory } from 'react-router-dom'
import { CButton } from 'src/components/Button'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow'

import { useTheme } from "src/hooks/useTheme"
import styles from 'src/pages/LandingPage/landing.module.scss'
import colors from 'src/colors.json'
 
export function LandingPage() {
    const { theme } = useTheme()
    const history = useHistory()

    function handleGoToDashboard() {
      history.push('/dashboard')

      return
    }

    return (
        <div
          className={styles.landing_container}
          style={{
            backgroundColor: theme==='light' ? colors.background.light : colors.background.dark,
            color: theme==='light' ? colors.texts.dark : colors.texts.light
          }}
        >
            <div className={styles.texts}>
              <h1>My Inventory</h1>
              <p>Kitchens management made easy.</p>
            </div>
            <CButton onClick={handleGoToDashboard}>
              <span>Get started today</span>
              <DoubleArrowIcon />
            </CButton>
        </div>
    )
}