import styles from './container.module.scss'

import { Inventory } from 'src/@types/inventory'

export function Container({ children, cstyle }: Inventory.ContainerProps) {
    return (
        <main
          className={styles.container}
          style={cstyle}
        >{ children }</main>
    )
}