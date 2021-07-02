import styles from './about.module.scss'
import colors from 'src/colors.json'
import { useTheme } from 'src/hooks/useTheme'

export const CAbout = () => {
    const { theme } = useTheme()

    return (
        <div className={styles.aboutContainer}>
            <h1 style={{
                color: theme==='light' ? colors.texts.dark :  colors.texts.light
            }}>About</h1>
            <p style={{
                color: theme==='light' ? colors.texts.dark :  colors.texts.light
            }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, corrupti soluta architecto vero impedit tempora? Repudiandae illum deserunt eveniet laboriosam voluptate quas est tempora, eius exercitationem reprehenderit magnam necessitatibus nihil!</p>
            <p style={{
                color: theme==='light' ? colors.texts.dark : colors.texts.light
            }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae velit, sit error obcaecati sed, autem atque maxime quisquam magni ut sunt quas dolore neque fugit earum voluptas eaque accusamus voluptates.</p>
        </div>
    )
}