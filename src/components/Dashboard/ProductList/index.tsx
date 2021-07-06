import { useAuth } from 'src/hooks/useAuth'
import { useNavigation } from 'src/hooks/useNavigation'

import PlayArrowIcon from '@material-ui/icons/PlayArrow'

import { CButton } from 'src/components/Button'

import styles from './products.module.scss'

export const CProductList = () => {
    const { user } = useAuth()
    const { changeCurrentComponent } = useNavigation()

    return (
        <div className={styles.productsContainer}>
            <header>
                <div>
                    <CButton>
                        <PlayArrowIcon />
                    </CButton>
                    <span>Food</span>
                    <CButton>
                        <PlayArrowIcon />
                    </CButton>
                </div>
                <CButton
                  className={styles.addButton}
                  onClick={()=>changeCurrentComponent('AddProduct')}
                >
                    <span>Add item</span>
                </CButton>
                <p>{`Wellcome back, ${(user?.name.split(' '))?.[0]}.`}</p>
            </header>
            <section>Products here</section>
        </div>
    )
}