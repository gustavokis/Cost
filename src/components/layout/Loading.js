import styles from './Loading.module.css'

import Loadings from '../../img/loading.svg'

function Loading(){
    return (
    <div className={styles.loader_container}>
        <img className={styles.loader} src={Loadings} alt='Loading'/>
    </div>
    )
}

export default Loading