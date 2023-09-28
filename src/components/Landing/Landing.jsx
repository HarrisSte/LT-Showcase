import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import './Landing.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [albumResults, setAlbumResutls] = useState([]);
  // const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((response) => response.json())
      .then((data) => {
        data === undefined
          ? alert('No albums found')
          : setAlbumResutls(data.results);
      });

    setSearchTerm('');
  };

  return (
    <div className='search'>
      <form onSubmit={onSubmit}>
        <input
          className='search-bar'
          type='text'
          placeholder='Search for your favorite album!'
          value={searchTerm}
          onChange={handleChange}
        />
        <button className='submit-button' type='submit'>
          Submit
        </button>
      </form>

      <ul className='album-results'>
        {albumResults.map((album) => (
          <li key={album.id}>
            <a href={`/photos?albumId=${album.albumId}`}>Album Results</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
