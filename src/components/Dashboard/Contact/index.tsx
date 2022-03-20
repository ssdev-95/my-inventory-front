// import { Link } from 'react-router-dom'
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
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://instagram.com/xSallus.dev/"
                >
                    <abbr title="Link to https://instagram.com/xSallus.dev">
                        <InstagramIcon />
                    </abbr>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://linkedin.com/in/salomao-vasconcelos/"
                >
                    <abbr title="Link to https://linkedin.com/in/salomao-vasconcelos/">
                        <LinkedInIcon />
                    </abbr>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/xSallus_dev"
                >
                    <abbr title="Link to https://twitter.com/xSallus_dev">
                        <TwitterIcon />
                    </abbr>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://gmail.com"
                >
                    <abbr title="Link to https://gmail.com/">
                        <MailIcon />
                    </abbr>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/xSallus"
                >
                    <abbr title="Link to https://github.com/xSallus">
                        <GitHubIcon />
                    </abbr>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://paypal.com"
                >
                   <abbr title="Link to https://paypal.com">
                       <img src={PayPalIcon} alt="PayPal" />
                   </abbr>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://behance.net/SalomaoSouza"
                >
                   <abbr title="Link to https://behance.net/SalomaoSouza">
                       <img src={BehanceIcon} alt="Behance" />
                   </abbr>
                </a>
            </div>
        </div>
    )
}