import styles from './ImageCard.module.css';

function ImageCard({ photo, onClick }) {
    return (
        <div className={styles.imageCard} onClick={onClick}>
            <img src={photo.urls.small} alt="" />
        </div>
    );
}

export default ImageCard;
