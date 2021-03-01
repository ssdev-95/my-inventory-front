import styles from '../styles/components/Section.module.css';

interface SectionProps {
    className: String;
}

export function Section(props: SectionProps) {
    const newLocal = `drawable/${props.className}_icon.png`;

    return (
        <div className={styles.sectionContainer}>
            <table className={`${styles}.${props.className}`}>
                <thead>
                    <tr className={styles.heading}>
                        <td><img src={newLocal} alt=""/> </td>  
                        <td><p>{props.className}</p></td>
                    </tr>
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