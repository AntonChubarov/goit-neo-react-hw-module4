import { FaTimes } from 'react-icons/fa';
import styles from './ImageModal.module.css';

function ImageModal({ photo, onClose }) {
    return (
        <div className={styles.modal} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <img src={photo.urls.regular} alt="" />
                <button className={styles.closeButton} onClick={onClose}>
                    <FaTimes size={24} />
                </button>
            </div>
        </div>
    );
}

export default ImageModal;
