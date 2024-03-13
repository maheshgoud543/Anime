// Navbar.jsx
import { useState } from 'react';
import './Navbar.css';

const Navbar = ({ onSearch }) => {
    // State to hold search term
    const [search, setSearch] = useState("");

    // Function to handle input change
    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearch(searchTerm);
        onSearch(searchTerm); // Pass search term to parent component
    }

    return (
        <div>
            <div>
                <h1>Indian Anime</h1>
            </div>
            <div>
                <form>
                    <input type='text' placeholder="Enter The Name of Anime.." value={search} onChange={handleInputChange} />
                </form>
            </div>
        </div>
    );
}

export default Navbar;
