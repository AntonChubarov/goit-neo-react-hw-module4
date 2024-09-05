import styles from './LoadMoreButton.module.css';

function LoadMoreButton({onClick}) {
    return (
        <div className={styles.loadMoreButtonWrapper}>
            <button className={styles.loadMoreButton} onClick={onClick}>
                Load More
            </button>
        </div>
    );
}

export default LoadMoreButton;
