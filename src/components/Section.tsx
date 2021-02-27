import styles from '../styles/components/Section.module.css';

interface SectionProps {
    className: String;
}

export function Section(props: SectionProps) {
    const newLocal = `drawable/${props.className}_icon.png`;
    return (
        <div className={styles.sectionContainer}>
            <header className={styles.heading}>
                <img src={newLocal} alt=""/>
                <h1>{props.className}</h1>
            </header>
            <table className={`${styles}.${props.className}`}>
                <thead>
                    <tr>
                        <td className={styles.title}>Description</td>
                        <td className={styles.title}>Quantity</td>
                        <td className={styles.title}>Expirate</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody className={styles.body}></tbody>
            </table>
        </div>
    )
}