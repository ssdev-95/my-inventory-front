import { useAuth } from 'src/hooks/useAuth'
import { useNavigation } from 'src/hooks/useNavigation'
import { useProduct } from 'src/hooks/useProduct'

import PlayArrowIcon from '@material-ui/icons/PlayArrow'

import { CButton } from 'src/components/Button'
import { CTable } from 'src/components/Table'

import styles from './products.module.scss'

export const CProductList = () => {
    const { user } = useAuth()
    const { changeCurrentComponent } = useNavigation()
    const {
        currentSelection,
        handleIncreaseSelection,
        handleDecreaseSelection,
        filters
    } = useProduct()

    return (
        <div className={styles.productsContainer}>
            <header>
                <div>
                    <CButton onClick={handleDecreaseSelection}>
                        <PlayArrowIcon />
                    </CButton>
                    <span>{filters[currentSelection]}</span>
                    <CButton onClick={handleIncreaseSelection}>
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
            <section>
                <CTable />
            </section>
        </div>
    )
}