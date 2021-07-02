import { Link } from 'react-router-dom'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import MailIcon from '@material-ui/icons/Mail'
import GitHubIcon from '@material-ui/icons/GitHub'
import PayPalIcon from 'src/drawable/paypal.svg'
import BehanceIcon from 'src/drawable/behance.svg'

import { useTheme } from 'src/hooks/useTheme'
import styles from './contact.module.scss'
import colors from 'src/colors.json'

export const CContact = () => {
    const { theme } = useTheme()

    return (
        <div className={styles.contact_container}>
            <h1 style={{
                color: theme==='light' ? colors.texts.dark :  colors.texts.light
            }}>Contact</h1>
            <div>
                <Link to="https://instagram.com"><InstagramIcon /></Link>
                <Link to="https://linkedin.com"><LinkedInIcon /></Link>
                <Link to="https://twitter.com"><TwitterIcon /></Link>
                <Link to="https://gmail.com"><MailIcon /></Link>
                <Link to="https://github.com/xSallus"><GitHubIcon /></Link>
                <Link to="https://paypal"><img src={PayPalIcon} alt="PayPal" /></Link>
                <Link to="https://behance.com"><img src={BehanceIcon} alt="Behance" /></Link>
            </div>
        </div>
    )
}