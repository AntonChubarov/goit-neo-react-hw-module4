import ImageCard from './ImageCard.jsx';
import styles from './ImageGallery.module.css';

function ImageGallery({ photos, onImageClick }) {
    return (
        <ul className={styles.imageGallery}>
            {photos.map((photo) => (
                <li key={photo.id}>
                    <ImageCard key={photo.id} photo={photo} onClick={() => onImageClick(photo)}/>
                </li>
            ))}
        </ul>
    );
}

export default ImageGallery;
