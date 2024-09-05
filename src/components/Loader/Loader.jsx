import { Oval } from 'react-loader-spinner';
import styles from './Loader.module.css';

function Loader() {
    return (
        <div className={styles.loader}>
            <Oval color="#00BFFF" height={50} width={50} />
        </div>
    );
}

export default Loader;
