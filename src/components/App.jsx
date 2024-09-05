import { useState, useMemo } from 'react';
import styles from './App.module.css';

import SearchBar from './SearchBar/SearchBar.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import LoadMoreButton from './LoadMoreButton/LoadMoreButton.jsx';
import Loader from './Loader/Loader.jsx';
import ErrorMessage from './ErrorMessage/ErrorMessage.jsx';
import ImageModal from './ImageModal/ImageModal.jsx';

import { searchPhotos } from '../unsplash-api';

function App() {
    const [query, setQuery] = useState('');
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const fetchPhotos = async (query, page) => {
        setLoading(true);
        setError('');
        try {
            const data = await searchPhotos(query, page);
            if (data.error) {
                throw new Error(data.error);
            }
            setPhotos(prev => (page === 1 ? data.results : [...prev, ...data.results]));
            setTotalPages(data.total_pages);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = useMemo(
        () => (newQuery) => {
            setQuery(newQuery);
            setPage(1);
            fetchPhotos(newQuery, 1);
        },
        []
    );

    const loadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchPhotos(query, nextPage);
    };

    const openModal = (photo) => setSelectedPhoto(photo);
    const closeModal = () => setSelectedPhoto(null);

    return (
        <div className={styles.app}>
            <SearchBar onSearch={handleSearch} />
            <div className={styles.mainContent}>
                {error && <ErrorMessage message={error} />}
                <ImageGallery photos={photos} onImageClick={openModal} />
                {loading && <Loader />}
                {photos.length > 0 && page < totalPages && !loading && (
                    <LoadMoreButton onClick={loadMore} />
                )}
                {selectedPhoto && <ImageModal photo={selectedPhoto} onClose={closeModal} />}
            </div>
        </div>
    );
}

export default App;
