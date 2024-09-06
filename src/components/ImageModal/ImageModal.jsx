import { FaTimes } from 'react-icons/fa';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root');

function ImageModal({ photo, onClose }) {
    return (
        <Modal
            isOpen={!!photo}
            onRequestClose={onClose}
            className={styles.modalContent}
            overlayClassName={styles.modalOverlay}
        >
            <img src={photo.urls.regular} alt={photo.description} className={styles.modalImage} />
            <button className={styles.closeButton} onClick={onClose}>
                <FaTimes size={24} />
            </button>
        </Modal>
    );
}

export default ImageModal;
