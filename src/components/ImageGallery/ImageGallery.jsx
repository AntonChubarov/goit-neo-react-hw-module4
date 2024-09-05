import ImageCard from './ImageCard.jsx';
import styles from './ImageGallery.module.css';

function ImageGallery({ photos, onImageClick }) {
    return (
        <div className={styles.imageGallery}>
            {photos.map((photo) => (
                <ImageCard key={photo.id} photo={photo} onClick={() => onImageClick(photo)} />
            ))}
        </div>
    );
}

export default ImageGallery;
