import { useState } from 'react';
import { toast } from 'react-hot-toast';
import styles from './SearchBar.module.css';

function SearchBar({ onSearch }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            onSearch(input);
        } else {
            toast.error('Please enter a search term');
        }
    };

    return (
        <header className={styles.searchBar}>
            <form onSubmit={handleSubmit} className={styles.searchForm}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Search for photos..."
                    className={styles.searchInput}
                />
                <button type="submit" className={styles.searchButton}>
                    Search
                </button>
            </form>
        </header>
    );
}

export default SearchBar;
